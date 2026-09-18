export interface NavLink {
  label: string;
  href: string;
}

export interface HeroData {
  headline: string;
  subtitle: string;
  primaryCTA: { label: string; whatsappMessage: string };
  secondaryCTA: { label: string; href: string };
  stats: Array<{ icon: string; value: string; label: string }>;
}

export interface ProblemSolutionData {
  label: string;
  headline: string;
  description: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface ExperienceData {
  label: string;
  headline: string;
  description: string;
  cta: { label: string; whatsappMessage: string };
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  context: string;
}

export interface ContactInfo {
  whatsapp: string;
  location: string;
  instagram: string;
}

export interface FooterData {
  tagline: string;
  copyright: string;
}

export const WHATSAPP_NUMBER = "584242353589";

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Programa", href: "#programa" },
  { label: "Sobre Nitay", href: "#sobre-nitay" },
  { label: "Contacto", href: "#contacto" },
];

export const hero: HeroData = {
  headline: "Vuelve a tu centro.",
  subtitle:
    "Yoga, respiración y meditación para reconectar con tu cuerpo y tu mente.",
  primaryCTA: {
    label: "Reservar mi clase",
    whatsappMessage: "Hola! Quiero reservar mi primera clase de yoga.",
  },
  secondaryCTA: {
    label: "Conoce la experiencia",
    href: "#experiencia",
  },
  stats: [
    { icon: "users", value: "+120", label: "alumnos activos" },
    { icon: "levels", value: "", label: "Atención 100% personalizada" },
    {
      icon: "clipboard",
      value: "",
      label: "Primera evaluación personalizada",
    },
  ],
};

export const problemSolution: ProblemSolutionData = {
  label: "DESCONECTA PARA RECONECTAR",
  headline: "Demasiado ruido. Muy poco equilibrio.",
  description:
    "Nitay Yoga Estudio es un espacio para pausar, respirar y volver a sentir. Lejos de las rutinas mecánicas, aquí encuentras una práctica real que transforma tu cuerpo y tu mente.",
};

export const benefits: Benefit[] = [
  {
    icon: "brain",
    title: "Claridad Mental",
    description:
      "Aprende a calmar el ruido mental. La meditación y la respiración consciente te devuelven el foco y la claridad.",
  },
  {
    icon: "zap",
    title: "Energía Física",
    description:
      "Posturas y secuencias que activan tu cuerpo, mejoran tu flexibilidad y te llenan de vitalidad.",
  },
  {
    icon: "heart",
    title: "Equilibrio Emocional",
    description:
      "Reconecta con tus emociones. El yoga te ayuda a gestionar el estrés y encontrar calma interior.",
  },
  {
    icon: "shield",
    title: "Disciplina Interna",
    description:
      "Construye un hábito que trasciende el tapete. La constancia en la práctica transforma tu día a día.",
  },
];

export const experience: ExperienceData = {
  label: "EXPERIENCIA NITAY",
  headline: "No es solo una clase. Es un cambio de estado.",
  description:
    "Combinamos posturas, respiración y meditación en cada sesión. Un método integral para que recuperes tu energía, tu foco y tu bienestar.",
  cta: {
    label: "Conoce nuestro espacio",
    whatsappMessage: "Hola! Me interesa conocer el espacio de Nitay.",
  },
};

export const testimonials: Testimonial[] = [
  {
    quote: "Volví a dormir bien después de años.",
    name: "Sofía R.",
    role: "Alumna de Hatha Yoga",
    initials: "SR",
    context: "Practica hace 2 años",
  },
  {
    quote: "Dejó de ser ejercicio. Se volvió parte de mi vida.",
    name: "Martín L.",
    role: "Alumno de Vinyasa Flow",
    initials: "ML",
    context: "Vino sin experiencia",
  },
  {
    quote: "Me ayudó más que cualquier rutina fitness.",
    name: "Julieta P.",
    role: "Alumna de Meditación",
    initials: "JP",
    context: "Practica 3 veces por semana",
  },
];

export const transformationProgram = {
  label: "TU PROGRAMA PERSONALIZADO",
  headline: "No vendemos clases. Vendemos resultados.",
  subtitle: "Atención 100% adaptada a tu caso, tu cuerpo y tus objetivos.",
  includes: [
    "Evaluación inicial completa",
    "Plan personalizado",
    "Sesiones semanales",
    "Seguimiento continuo",
    "Adaptación a tu ritmo",
  ],
  formTitle: "Evaluación personalizada",
  formSubtitle: "Completá el formulario y Nitay analizará tu caso para diseñar tu programa.",
  cta: "Quiero mi evaluación personalizada",
  whatsappAlternative: "O escríbenos directamente por WhatsApp",
};

export const howItWorks = {
  label: "CÓMO FUNCIONA",
  headline: "¿Cómo funciona?",
  steps: [
    {
      title: "Completás el formulario",
      description: "Contanos sobre vos, tus objetivos y disponibilidad.",
    },
    {
      title: "Analizamos tu caso",
      description: "Nitay revisa tu información y diseña un plan personalizado.",
    },
    {
      title: "Te contactamos",
      description: "Recibís una propuesta adaptada a tu caso por WhatsApp.",
    },
  ],
};

export const faqs = [
  {
    question: "¿Qué es el Plan de Transformación Personalizado?",
    answer: "Es un programa de 3 meses donde Nitay diseña una práctica 100% adaptada a tu cuerpo, tus objetivos y tu disponibilidad. No son clases genéricas, es atención personalizada.",
  },
  {
    question: "¿Cómo es la evaluación inicial?",
    answer: "Completás un formulario con información sobre vos, tus objetivos y disponibilidad. Nitay analiza tu caso y te contacta con una propuesta personalizada.",
  },
  {
    question: "¿Cuánto dura el programa?",
    answer: "El programa base es de 3 meses, tiempo suficiente para crear hábitos sostenibles y ver resultados reales. Después podés continuar si querés.",
  },
  {
    question: "¿Es para principiantes?",
    answer: "Sí. El programa se adapta a tu nivel, sea que nunca hayas hecho yoga o que ya tengas experiencia. La práctica se diseña para vos.",
  },
  {
    question: "¿Qué pasa si tengo una lesión?",
    answer: "Contanos en el formulario. Nitay adapta la práctica para trabajar alrededor de cualquier lesión o condición. Tu seguridad es primero.",
  },
  {
    question: "¿Cómo es el seguimiento?",
    answer: "Sesiones semanales con seguimiento continuo. Nitay ajusta el plan según tu progreso y feedback. No estás solo/a en el proceso.",
  },
];

export const formFields = {
  objectives: ["Perder peso", "Ganar flexibilidad", "Reducir estrés", "Mejorar postura", "Otro"],
  experience: ["Ninguna", "Menos de 1 año", "1-3 años", "Más de 3 años"],
  availability: ["Mañana", "Tarde", "Noche", "Fines de semana"],
};

export const finalCTA = {
  headline: "Tu cuerpo ya te está pidiendo un cambio.",
  subtitle: "Completá tu evaluación personalizada y empieza tu transformación.",
  cta: {
    label: "Quiero mi evaluación personalizada",
    whatsappMessage: "Hola! Quiero mi evaluación personalizada.",
  },
};

export const contact: ContactInfo = {
  whatsapp: WHATSAPP_NUMBER,
  location: "Buenos Aires, Argentina",
  instagram: "@nitayyogaestudio",
};

export const footer: FooterData = {
  tagline: "Movimiento. Respiración. Transformación.",
  copyright: "© 2026 Nitay Yoga Estudio. Todos los derechos reservados.",
};
