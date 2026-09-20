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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (field: string) => {
    const newErrors = { ...errors };

    switch (field) {
      case 'nombre':
        if (!formData.nombre.trim() || formData.nombre.trim().length < 2) {
          newErrors.nombre = 'Mínimo 2 caracteres';
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.nombre.trim())) {
          newErrors.nombre = 'Solo letras permitidas';
        } else {
          delete newErrors.nombre;
        }
        break;

      case 'email':
        if (!formData.email.trim()) {
          newErrors.email = 'Requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email)) {
          newErrors.email = 'Email inválido';
        } else {
          delete newErrors.email;
        }
        break;

      case 'whatsapp':
        if (formData.whatsapp && !/^\+?[\d\s\-()]{7,20}$/.test(formData.whatsapp)) {
          newErrors.whatsapp = 'Formato inválido. Ej: +58 424-1234567';
        } else {
          delete newErrors.whatsapp;
        }
        break;

      case 'edad':
        if (!formData.edad) {
          newErrors.edad = 'Requerido';
        } else {
          const age = Number(formData.edad);
          if (!Number.isInteger(age) || age < 16 || age > 99) {
            newErrors.edad = 'Edad debe ser entre 16 y 99';
          } else {
            delete newErrors.edad;
          }
        }
        break;

      case 'objetivo':
        if (!formData.objetivo) {
          newErrors.objetivo = 'Requerido';
        } else if (!formFields.objectives.includes(formData.objetivo)) {
          newErrors.objetivo = 'Valor inválido';
        } else {
          delete newErrors.objetivo;
        }
        break;

      case 'experiencia':
        if (!formData.experiencia) {
          newErrors.experiencia = 'Requerido';
        } else if (!formFields.experience.includes(formData.experiencia)) {
          newErrors.experiencia = 'Valor inválido';
        } else {
          delete newErrors.experiencia;
        }
        break;

      case 'disponibilidad':
        if (formData.disponibilidad.length === 0) {
          newErrors.disponibilidad = 'Selecciona al menos una opción';
        } else {
          delete newErrors.disponibilidad;
        }
        break;
    }

    setErrors(newErrors);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim() || formData.nombre.trim().length < 2) {
      newErrors.nombre = 'Mínimo 2 caracteres';
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.nombre.trim())) {
      newErrors.nombre = 'Solo letras permitidas';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (formData.whatsapp && !/^\+?[\d\s\-()]{7,20}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = 'Formato inválido. Ej: +58 424-1234567';
    }

    if (!formData.edad) {
      newErrors.edad = 'Requerido';
    } else {
      const age = Number(formData.edad);
      if (!Number.isInteger(age) || age < 16 || age > 99) {
        newErrors.edad = 'Edad debe ser entre 16 y 99';
      }
    }

    if (!formData.objetivo) {
      newErrors.objetivo = 'Requerido';
    } else if (!formFields.objectives.includes(formData.objetivo)) {
      newErrors.objetivo = 'Valor inválido';
    }

    if (!formData.experiencia) {
      newErrors.experiencia = 'Requerido';
    } else if (!formFields.experience.includes(formData.experiencia)) {
      newErrors.experiencia = 'Valor inválido';
    }

    if (formData.disponibilidad.length === 0) {
      newErrors.disponibilidad = 'Selecciona al menos una opción';
    }

    if (formData.website) {
      newErrors.website = 'Error';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    setIsSubmitting(true);
    setStatus('loading');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        const message = [
          'Hola Nitay! Quiero mi evaluación personalizada.',
          '',
          'Nombre: ' + encodeURIComponent(formData.nombre),
          'Email: ' + encodeURIComponent(formData.email),
          'WhatsApp: ' + encodeURIComponent(formData.whatsapp || 'No proporcionado'),
          'Edad: ' + encodeURIComponent(formData.edad),
          'Objetivo: ' + encodeURIComponent(formData.objetivo),
          'Experiencia: ' + encodeURIComponent(formData.experiencia),
          'Disponibilidad: ' + encodeURIComponent(formData.disponibilidad.join(', ')),
          'Lesiones: ' + encodeURIComponent(formData.lesiones || 'Ninguna'),
        ].join('%0A');

        window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + message, '_blank');
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
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
          Si no se abrió WhatsApp, puedes escribirnos directamente al +{WHATSAPP_NUMBER}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-bg-card border border-border rounded-sm p-6 sm:p-8 space-y-6" noValidate>
      <h3 className="font-serif text-xl sm:text-2xl text-text-primary">
        Evaluación personalizada
      </h3>
      <p className="text-text-secondary text-sm">
        Completa el formulario y Nitay analizará tu caso para diseñar tu programa.
      </p>

      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={e => setFormData({...formData, website: e.target.value})}
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: 'none' }}
      />

      <div className="space-y-2">
        <label htmlFor="nombre" className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-text-muted">
          Nombre completo *
        </label>
        <input
          id="nombre"
          type="text"
          value={formData.nombre}
          onChange={e => setFormData({...formData, nombre: e.target.value})}
          onBlur={() => validateField('nombre')}
          placeholder="Tu nombre completo"
          aria-invalid={!!errors.nombre}
          aria-describedby={errors.nombre ? 'nombre-error' : undefined}
          className={`w-full bg-bg-primary border rounded-sm px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none transition-colors ${
            errors.nombre ? 'border-red-400 focus:border-red-400' : 'border-border focus:border-accent'
          }`}
        />
        {errors.nombre && <p id="nombre-error" role="alert" className="text-red-400 text-xs">{errors.nombre}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-text-muted">
          Email *
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
          onBlur={() => validateField('email')}
          placeholder="tu@email.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full bg-bg-primary border rounded-sm px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none transition-colors ${
            errors.email ? 'border-red-400 focus:border-red-400' : 'border-border focus:border-accent'
          }`}
        />
        {errors.email && <p id="email-error" role="alert" className="text-red-400 text-xs">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="whatsapp" className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-text-muted">
          WhatsApp (opcional)
        </label>
        <input
          id="whatsapp"
          type="tel"
          value={formData.whatsapp}
          onChange={e => setFormData({...formData, whatsapp: e.target.value})}
          onBlur={() => validateField('whatsapp')}
          placeholder="+58 424-1234567"
          aria-invalid={!!errors.whatsapp}
          aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
          className={`w-full bg-bg-primary border rounded-sm px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none transition-colors ${
            errors.whatsapp ? 'border-red-400 focus:border-red-400' : 'border-border focus:border-accent'
          }`}
        />
        {errors.whatsapp && <p id="whatsapp-error" role="alert" className="text-red-400 text-xs">{errors.whatsapp}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="edad" className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-text-muted">
          Edad *
        </label>
        <input
          id="edad"
          type="number"
          min="16"
          max="99"
          value={formData.edad}
          onChange={e => setFormData({...formData, edad: e.target.value})}
          onBlur={() => validateField('edad')}
          placeholder="Tu edad"
          aria-invalid={!!errors.edad}
          aria-describedby={errors.edad ? 'edad-error' : undefined}
          className={`w-full bg-bg-primary border rounded-sm px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none transition-colors ${
            errors.edad ? 'border-red-400 focus:border-red-400' : 'border-border focus:border-accent'
          }`}
        />
        {errors.edad && <p id="edad-error" role="alert" className="text-red-400 text-xs">{errors.edad}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="objetivo" className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-text-muted">
          Objetivo principal *
        </label>
        <select
          id="objetivo"
          value={formData.objetivo}
          onChange={e => setFormData({...formData, objetivo: e.target.value})}
          onBlur={() => validateField('objetivo')}
          aria-invalid={!!errors.objetivo}
          aria-describedby={errors.objetivo ? 'objetivo-error' : undefined}
          className={`w-full bg-bg-primary border rounded-sm px-4 py-3 text-text-primary focus:outline-none transition-colors appearance-none ${
            errors.objetivo ? 'border-red-400 focus:border-red-400' : 'border-border focus:border-accent'
          }`}
        >
          <option value="">Selecciona tu objetivo</option>
          {formFields.objectives.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.objetivo && <p id="objetivo-error" role="alert" className="text-red-400 text-xs">{errors.objetivo}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="experiencia" className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-text-muted">
          Experiencia previa *
        </label>
        <select
          id="experiencia"
          value={formData.experiencia}
          onChange={e => setFormData({...formData, experiencia: e.target.value})}
          onBlur={() => validateField('experiencia')}
          aria-invalid={!!errors.experiencia}
          aria-describedby={errors.experiencia ? 'experiencia-error' : undefined}
          className={`w-full bg-bg-primary border rounded-sm px-4 py-3 text-text-primary focus:outline-none transition-colors appearance-none ${
            errors.experiencia ? 'border-red-400 focus:border-red-400' : 'border-border focus:border-accent'
          }`}
        >
          <option value="">Selecciona tu experiencia</option>
          {formFields.experience.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.experiencia && <p id="experiencia-error" role="alert" className="text-red-400 text-xs">{errors.experiencia}</p>}
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
        {errors.disponibilidad && <p role="alert" className="text-red-400 text-xs">{errors.disponibilidad}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="lesiones" className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-text-muted">
          Lesiones o condiciones (opcional)
        </label>
        <textarea
          id="lesiones"
          value={formData.lesiones}
          onChange={e => setFormData({...formData, lesiones: e.target.value})}
          placeholder="Cuéntanos si tienes alguna lesión o condición que debamos saber (opcional)"
          rows={3}
          maxLength={500}
          className="w-full bg-bg-primary border border-border rounded-sm px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent focus:outline-none transition-colors resize-none"
        />
        <p className="text-text-muted text-xs text-right">
          {formData.lesiones.length}/500
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-beige text-bg-primary uppercase tracking-[0.1em] text-sm font-medium px-8 py-4 rounded-sm hover:bg-beige-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Quiero mi evaluación personalizada'}
      </button>

      {status === 'error' && (
        <div className="text-center space-y-3 pt-4">
          <p className="text-red-400 text-sm">
            Hubo un error al enviar. Puedes escribirnos directamente por WhatsApp.
          </p>
          <a
            href={'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent('Hola! Quiero mi evaluación personalizada.')}
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
