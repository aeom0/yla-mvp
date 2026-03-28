// Contenido centralizado de la aplicación
// Basado en el contenido de Notion de Yube

export const siteContent = {
  hero: {
    tagline: "El arte de Volver a Ti",
    title: "Yoga con Lógica y Alma®",
    subtitle: "Donde la estructura sostiene el alma",
    description: "Conecta tu mente. Habita tu cuerpo. Expande tu Esencia.",
    cta: {
      primary: "Únete a la comunidad",
      secondary: "Conocer más",
    },
  },

  philosophy: {
    title: "Un punto de encuentro entre lo tangible y lo sutil",
    description:
      "Yoga con Lógica y Alma es la fusión entre el cuerpo que se mueve con intención y la mente que reflexiona con claridad. Es usar herramientas de análisis y autoconocimiento junto con la práctica del yoga para conectar con nosotras mismas de forma profunda, consciente y real.",
    pillars: [
      {
        icon: "Atom",
        title: "Integra ciencia y espiritualidad",
        description:
          "Usa la visión analítica de la ingeniería para entender los procesos internos del ser, y la sabiduría del yoga para habitarlos con conciencia.",
      },
      {
        icon: "Brain",
        title: "Aplica la lógica a lo emocional",
        description:
          "Enseña a observar pensamientos, emociones y hábitos desde una mirada estructurada para tomar decisiones con más coherencia interna.",
      },
      {
        icon: "Sparkles",
        title: "Enfoque práctico y transformador",
        description:
          "Cada sesión, clase o herramienta busca generar resultados visibles en la vida cotidiana: más paz, claridad, autoestima y mejor gestión del tiempo.",
      },
    ],
  },

  forWho: {
    title: "Este camino es para ti si...",
    items: [
      "Quieres más que una simple práctica física",
      "Buscas equilibrio, propósito y autoconocimiento",
      "Tu mente no se apaga y vives en piloto automático",
      "Has olvidado lo poderosa que eres",
      "Deseas una guía práctica que conecte cuerpo con alma sin perder la lógica",
    ],
  },

  programs: {
    title: "Programas de Transformación",
    subtitle: "Un camino estructurado para tu evolución personal",
    items: [
      {
        id: "encuentra-tu-centro",
        title: "Encuentra tu Centro",
        duration: "4 meses",
        description: "Conecta con el ahora y descubre tu autenticidad",
        stages: [
          "Conectar con el ahora",
          "Autoreconocimiento",
          "Anclar patrones y necesidades",
          "Avanzar con Intención",
        ],
        accent: "lavender",
      },
      {
        id: "enraiza-te",
        title: "Enraíza-Te",
        duration: "4 meses",
        description: "Fortalece tu base y desarrolla liderazgo interior",
        stages: [
          "Volver al cuerpo",
          "Estabilidad emocional",
          "Fuerza y liderazgo interior",
          "Integración y expansión",
        ],
        accent: "gold",
      },
      {
        id: "elogio-a-ti",
        title: "Elogio a Ti",
        duration: "4 meses",
        description: "Reconecta con tu esencia y activa tu poder personal",
        stages: ["Despertar", "Reconexión", "Reprogramación", "Consagración"],
        accent: "lavender",
      },
    ],
  },

  classes: {
    title: "Clases Online",
    subtitle: "Práctica desde donde estés",
    items: [
      {
        name: "Respira y Fluye",
        description:
          "Clases con ritmo pausado, enfoque restaurativo. Ideal para soltar tensiones físicas y mentales.",
        frequency: "Semanal",
      },
      {
        name: "Alma y Movimiento",
        description:
          "Yoga suave para conectar desde la calma, suavidad y tranquilidad.",
        frequency: "2x semana",
      },
      {
        name: "Clases Temáticas",
        description:
          "Prácticas especiales según la energía del mes o propósito específico.",
        frequency: "2x mes",
      },
    ],
    plans: [
      {
        name: "Plan Esencial",
        price: "$25/mes",
        classes: "4 clases al mes",
        features: ["Acceso a grabaciones", "Comunidad WhatsApp"],
      },
      {
        name: "Plan Consciente",
        price: "$45/mes",
        classes: "8 clases al mes",
        features: [
          "Acceso a grabaciones",
          "Comunidad WhatsApp",
          "Clases temáticas incluidas",
        ],
      },
    ],
  },

  tools: {
    title: "Herramientas del Método",
    subtitle: "Lógica aplicada al alma",
    items: [
      {
        icon: "Wind",
        title: "Yoga físico",
        description: "Adaptado a tu nivel y propósito, con intención clara",
      },
      {
        icon: "Wind",
        title: "Meditación y respiración",
        description: "Prácticas accesibles de 5-15 minutos",
      },
      {
        icon: "PenLine",
        title: "Escritura consciente",
        description: "Journaling guiado para autoconocimiento profundo",
      },
      {
        icon: "Brain",
        title: "Lógica estructurada",
        description: "Rueda de vida, FODA del alma, mapas de flujo",
      },
      {
        icon: "Sparkles",
        title: "Rituales simbólicos",
        description: "Anclar intenciones desde lo sutil hacia lo tangible",
      },
    ],
  },

  about: {
    title: "Hola, soy Yube Karina",
    credential: "Ingeniera industrial de profesión. Instructora de yoga con formación avanzada. Creadora de un método que nadie más enseña.",
    description:
      "Llevo años cruzando dos mundos que la mayoría separa: el pensamiento estructurado de la ingeniería y la sabiduría profunda del yoga. De esa fusión nació Yoga con Lógica y Alma.",
    highlights: [
      "Facilitadora de experiencias transformadoras",
      "Practicante de pole dance",
      "Creyente del merecimiento",
      "Soñadora de un mundo más consciente",
    ],
    quote:
      "Aquí combino estructura con sensibilidad, amor propio con acción, espiritualidad con práctica. Bienvenida a mi universo. Aquí, todo nace desde el alma.",
  },

  shop: {
    title: "Herramientas para tu camino",
    subtitle: "Cada producto lleva una intención. No compras un PDF, compras una invitación a conocerte más.",
    payhipUrl: "https://payhip.com/ConLogicayAlma",
    products: [
      {
        id: "posturas-gratis",
        category: "guia" as const,
        title: "Guía de posturas básicas",
        intention: "Tu primer paso en el camino del yoga. Con amor y claridad.",
        badge: "Gratis",
        isFree: true,
      },
      {
        id: "camino-merecimiento",
        category: "cuaderno" as const,
        title: "Camino al Merecimiento",
        intention: "Recuérdate que mereces todo lo que deseas con intención.",
        badge: null,
        isFree: false,
      },
      {
        id: "mandalas-abundancia",
        category: "cuaderno" as const,
        title: "Mandalas de Abundancia",
        intention: "Colorea tu camino hacia la prosperidad con conciencia.",
        badge: null,
        isFree: false,
      },
      {
        id: "camino-abundancia",
        category: "cuaderno" as const,
        title: "Camino a la Abundancia",
        intention: "Un diario que transforma tus pensamientos en realidad.",
        badge: "Nuevo",
        isFree: false,
      },
      {
        id: "meditacion-descanso",
        category: "audio" as const,
        title: "Meditaciones para el descanso",
        intention: "Suelta el día. Deja que el cuerpo respire y el alma descanse.",
        badge: null,
        isFree: false,
      },
      {
        id: "pack-yoga-lunar",
        category: "video" as const,
        title: "Pack Yoga Lunar",
        intention: "Sincroniza tu práctica con los ciclos de la luna.",
        badge: "Popular",
        isFree: false,
      },
    ],
  },

  faq: {
    title: "Preguntas frecuentes",
    subtitle: "Todo lo que necesitas saber para empezar",
    items: [
      {
        question: "¿Qué hace único a Yoga con Lógica y Alma?",
        answer:
          "Es un punto de encuentro entre lo tangible y lo sutil. Integra lo físico, lo mental y lo energético como caminos para reconectar con nuestra esencia. Aquí el cuerpo es un canal de conciencia, la lógica una herramienta de claridad, y el alma la guía que nos devuelve al hogar interior.",
      },
      {
        question: "¿Qué nivel necesito para empezar?",
        answer:
          "No necesitas experiencia previa en yoga ni en herramientas de desarrollo personal. Solo ganas de conocerte, de explorar tu cuerpo con amor y tu mente con curiosidad. Cada práctica se adapta a ti, a tu momento, a tu energía.",
      },
      {
        question: "¿En qué se diferencia de una clase tradicional de yoga?",
        answer:
          "Mientras en una clase tradicional el enfoque está en las posturas físicas, aquí vamos más allá: integramos yoga con recursos de crecimiento personal — análisis FODA del alma, rueda de la vida, journaling — creando una experiencia más profunda y transformadora.",
      },
      {
        question: "¿Cuánto duran las sesiones?",
        answer:
          "Las clases suelen durar 60 minutos, pero también ofrecemos prácticas más cortas de 10, 30 o 45 minutos. Tenemos un plan \"a tu ritmo\" para que puedas integrarlas sin presión en tu rutina.",
      },
      {
        question: "¿Cómo se integran las herramientas de análisis?",
        answer:
          "Al final de cada clase dejamos un espacio para aplicar dinámicas de reflexión — preguntas poderosas, mapas mentales, ejercicios de scripting. Además hacemos seguimiento en sesiones posteriores y acompañamiento fuera del espacio de clase.",
      },
    ],
  },

  community: {
    title: "Únete a Almas en Armonía",
    description:
      "Más que clases, una comunidad de mujeres conscientes que se apoyan en el camino.",
    whatsappLink: "https://chat.whatsapp.com/Din0PQRJ645InTV6R7ZXYC?mode=gi_t",
  },

  newsletter: {
    title: "Suscríbete a Las Cartas con Lógica y Alma",
    description:
      "Recibe inspiración, rituales y prácticas de bienestar cada 14 días.",
    placeholder: "Tu email",
  },

  footer: {
    tagline: "Organizamos el bienestar, ritualizamos la estructura",
    links: {
      main: [
        { label: "Programas", href: "#programas" },
        { label: "Tienda", href: "#tienda" },
        { label: "Sobre mí", href: "#sobre-mi" },
        { label: "FAQ", href: "#faq" },
      ],
      legal: [
        { label: "Política de Privacidad", href: "/privacidad" },
        { label: "Términos y Condiciones", href: "/terminos" },
      ],
    },
    social: {
      instagram: "https://instagram.com/yogaconlogicayalma",
      whatsapp: "https://chat.whatsapp.com/Din0PQRJ645InTV6R7ZXYC?mode=gi_t",
    },
  },
};

export type SiteContent = typeof siteContent;
