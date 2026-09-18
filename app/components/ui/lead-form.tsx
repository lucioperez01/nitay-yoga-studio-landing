'use client';

import { useState } from 'react';
import { formFields, WHATSAPP_NUMBER } from '../../../lib/content';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    whatsapp: '',
    edad: '',
    objetivo: '',
    experiencia: '',
    disponibilidad: [] as string[],
    lesiones: '',
    website: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim()) newErrors.nombre = 'Requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'Requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.edad) {
      newErrors.edad = 'Requerido';
    } else {
      const age = parseInt(formData.edad);
      if (age < 16 || age > 99) newErrors.edad = 'Edad debe ser entre 16 y 99';
    }
    if (!formData.objetivo) newErrors.objetivo = 'Requerido';
    if (!formData.experiencia) newErrors.experiencia = 'Requerido';
    if (formData.disponibilidad.length === 0) newErrors.disponibilidad = 'Seleccioná al menos una opción';
    if (formData.website) newErrors.website = 'Error';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        const message = `Hola Nitay! Quiero mi evaluación personalizada.%0A%0ANombre: ${formData.nombre}%0AEmail: ${formData.email}%0AWhatsApp: ${formData.whatsapp || 'No proporcionado'}%0AEdad: ${formData.edad}%0AObjetivo: ${formData.objetivo}%0AExperiencia: ${formData.experiencia}%0ADisponibilidad: ${formData.disponibilidad.join(', ')}%0ALesiones: ${formData.lesiones || 'Ninguna'}`;

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const toggleAvailability = (option: string) => {
    setFormData(prev => ({
      ...prev,
      disponibilidad: prev.disponibilidad.includes(option)
        ? prev.disponibilidad.filter(d => d !== option)
        : [...prev.disponibilidad, option],
    }));
  };

  if (status === 'success') {
    return (
      <div className="bg-bg-card border border-border rounded-sm p-8 sm:p-12 text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-text-primary">¡Gracias!</h3>
        <p className="text-text-secondary">
          Tu solicitud fue enviada. Nitay revisará tu caso y te contactará pronto.
        </p>
        <p className="text-text-muted text-sm">
          Si no se abrió WhatsApp, podés escribirnos directamente al +{WHATSAPP_NUMBER}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-bg-card border border-border rounded-sm p-6 sm:p-8 space-y-6">
      <h3 className="font-serif text-xl sm:text-2xl text-text-primary">
        Evaluación personalizada
      </h3>
      <p className="text-text-secondary text-sm">
        Completá el formulario y Nitay analizará tu caso para diseñar tu programa.
      </p>

      <input type="text" name="website" value={formData.website} onChange={e => setFormData({...formData, website: e.target.value})} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="space-y-2">
        <label className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-text-muted">
          Nombre completo *
        </label>
        <input
          type="text"
          value={formData.nombre}
          onChange={e => setFormData({...formData, nombre: e.target.value})}
          placeholder="Tu nombre completo"
          className="w-full bg-bg-primary border border-border rounded-sm px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent focus:outline-none transition-colors"
        />
        {errors.nombre && <p className="text-red-400 text-xs">{errors.nombre}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-text-muted">
          Email *
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
          placeholder="tu@email.com"
          className="w-full bg-bg-primary border border-border rounded-sm px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent focus:outline-none transition-colors"
        />
        {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-text-muted">
          WhatsApp (opcional)
        </label>
        <input
          type="tel"
          value={formData.whatsapp}
          onChange={e => setFormData({...formData, whatsapp: e.target.value})}
          placeholder="+58 424-1234567"
          className="w-full bg-bg-primary border border-border rounded-sm px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent focus:outline-none transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-text-muted">
          Edad *
        </label>
        <input
          type="number"
          min="16"
          max="99"
          value={formData.edad}
          onChange={e => setFormData({...formData, edad: e.target.value})}
          placeholder="Tu edad"
          className="w-full bg-bg-primary border border-border rounded-sm px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent focus:outline-none transition-colors"
        />
        {errors.edad && <p className="text-red-400 text-xs">{errors.edad}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-text-muted">
          Objetivo principal *
        </label>
        <select
          value={formData.objetivo}
          onChange={e => setFormData({...formData, objetivo: e.target.value})}
          className="w-full bg-bg-primary border border-border rounded-sm px-4 py-3 text-text-primary focus:border-accent focus:outline-none transition-colors appearance-none"
        >
          <option value="">Seleccioná tu objetivo</option>
          {formFields.objectives.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.objetivo && <p className="text-red-400 text-xs">{errors.objetivo}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-text-muted">
          Experiencia previa *
        </label>
        <select
          value={formData.experiencia}
          onChange={e => setFormData({...formData, experiencia: e.target.value})}
          className="w-full bg-bg-primary border border-border rounded-sm px-4 py-3 text-text-primary focus:border-accent focus:outline-none transition-colors appearance-none"
        >
          <option value="">Seleccioná tu experiencia</option>
          {formFields.experience.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.experiencia && <p className="text-red-400 text-xs">{errors.experiencia}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-text-muted">
          Disponibilidad horaria *
        </label>
        <div className="flex flex-wrap gap-2">
          {formFields.availability.map(opt => (
            <button
              key={opt}
              type="button"
              onClick={() => toggleAvailability(opt)}
              className={`px-4 py-2 rounded-sm border text-sm transition-colors ${
                formData.disponibilidad.includes(opt)
                  ? 'bg-accent text-bg-primary border-accent'
                  : 'bg-bg-primary text-text-secondary border-border hover:border-accent'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        {errors.disponibilidad && <p className="text-red-400 text-xs">{errors.disponibilidad}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-text-muted">
          Lesiones o condiciones (opcional)
        </label>
        <textarea
          value={formData.lesiones}
          onChange={e => setFormData({...formData, lesiones: e.target.value})}
          placeholder="Contanos si tenés alguna lesión o condición que debamos saber (opcional)"
          rows={3}
          className="w-full bg-bg-primary border border-border rounded-sm px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent focus:outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-beige text-bg-primary uppercase tracking-[0.1em] text-sm font-medium px-8 py-4 rounded-sm hover:bg-beige-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Enviando...' : 'Quiero mi evaluación personalizada'}
      </button>

      {status === 'error' && (
        <div className="text-center space-y-3 pt-4">
          <p className="text-red-400 text-sm">
            Hubo un error al enviar. Podés escribirnos directamente por WhatsApp.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola! Quiero mi evaluación personalizada.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-bg-primary px-6 py-3 rounded-sm hover:bg-accent-dark transition-colors"
          >
            Escribir por WhatsApp
          </a>
        </div>
      )}
    </form>
  );
}
