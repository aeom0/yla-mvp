// Contenido centralizado — Yoga con Lógica y Alma

export const siteContent = {
  header: {
    brand: {
      /** Una línea desde breakpoint `sm` (puede truncarse hasta `lg`) */
      full: "Yoga con Lógica y Alma",
      /** Dos líneas en móvil angosto por debajo de `sm` */
      compactLines: ["Yoga con", "Lógica y Alma"] as const,
    },
    ctaMembresia: "Empezar aquí",
    accesoAlumnas: "Acceso alumnas",
    accesoAlumnasHref: "/dashboard",
    nav: [
      { href: "/", label: "Inicio", match: "exact" as const },
      { href: "/#programas", label: "Programas", match: "hash" as const },
      { href: "/membresia", label: "Membresía", match: "path" as const },
      { href: "/#tienda", label: "Tienda", match: "hash" as const },
      { href: "/faq", label: "FAQ", match: "path" as const },
    ],
  },

  hero: {
    title: "Yoga con Lógica y Alma®",
    headlineEmotional: "Encuentra estructura para tu mente y espacio para tu alma.",
    headlineAction: "Empieza hoy con un regalo: tu primera herramienta gratis.",
    microCta: "Acceso inmediato • a tu ritmo",
    /**
     * Imagen de fondo del Hero.
     * Coloca el archivo en /public/hero-banner.jpg y pon la ruta aquí.
     * Deja vacío ("") para usar el fondo degradado predeterminado.
     */
    bannerImage: "/hero-banner.jpg" as string,
    cta: {
      primary: "Comenzar mi práctica",
      secondary: "Explorar programas",
    },
  },

  philosophy: {
    title: "Un punto de encuentro entre lo tangible y lo sutil",
    description:
      "Yoga con Lógica y Alma es la fusión entre el cuerpo que se mueve con intención y la mente que reflexiona con claridad. Es usar herramientas de análisis y autoconocimiento junto con la práctica del yoga para conectar con nosotras mismas de forma profunda, consciente y real.",
    pillars: [
      {
        icon: "Flower2",
        title: "Cuerpo",
        description:
          "Movimiento con intención: posturas y respiración para anclarte en lo físico sin perder la ternura.",
      },
      {
        icon: "Lightbulb",
        title: "Mente",
        description:
          "Lógica aplicada a lo emocional: observar patrones y tomar decisiones con más claridad interna.",
      },
      {
        icon: "MoonStar",
        title: "Espíritu",
        description:
          "Un espacio para recordar quién eres más allá de tus responsabilidades y volver a ti.",
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
    cardCta: "Ver este programa",
    cardMicrocopy: "Incluye clases + guía paso a paso",
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
    personalized: {
      title: "Clases personalizadas",
      description:
        "Sesión uno a uno adaptada a tu cuerpo, tu ritmo y tu proceso.",
      ctaPrimary: "Reservar mi espacio",
      microcopy: "Adaptado a tu cuerpo y tu proceso",
      href: "https://wa.me/584243547179",
    },
    socialPractice: {
      label: "Practicar conmigo aquí",
      href: "https://www.instagram.com/yube.karina?igsh=MWg4Z2M5ang2YzI2bg==",
    },
    items: [
      {
        name: "Respira y Fluye",
        description:
          "Clases con ritmo pausado, enfoque restaurativo. Ideal para soltar tensiones físicas y mentales.",
        frequency: "Semanal",
      },
      {
        name: "Alma y Movimiento",
        description: "Yoga suave para conectar desde la calma, suavidad y tranquilidad.",
        frequency: "2x semana",
      },
      {
        name: "Clases Temáticas",
        description: "Prácticas especiales según la energía del mes o propósito específico.",
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
        features: ["Acceso a grabaciones", "Comunidad WhatsApp", "Clases temáticas incluidas"],
      },
    ],
  },

  leadMagnet: {
    title: "Tu clase express para bajar la ansiedad",
    subtitle:
      "Una guía práctica de 15 minutos: respiración y movimiento para integrar en el día. Deja tu correo y te envío el acceso.",
    emailPlaceholder: "Tu email",
    submitLabel: "Quiero mi clase gratis",
    successMessage: "Listo. Revisa tu correo en unos minutos (revisa spam por si acaso).",
    privacyNote: "Sin spam. Solo contenido con intención.",
  },

  tools: {
    title: "Herramientas del Método",
    subtitle: "Lógica aplicada al alma",
    items: [
      { icon: "Wind", title: "Yoga físico", description: "Adaptado a tu nivel y propósito, con intención clara" },
      { icon: "Wind", title: "Meditación y respiración", description: "Prácticas accesibles de 5 a 15 minutos" },
      { icon: "PenLine", title: "Escritura consciente", description: "Journaling guiado para autoconocimiento profundo" },
      { icon: "Brain", title: "Lógica estructurada", description: "Rueda de vida, FODA del alma, mapas de flujo" },
    ],
  },

  testimonials: {
    title: "Historias reales",
    subtitle: "Lo que dicen quienes ya caminan con el método",
    items: [
      {
        quote: "Por fin entendí mi ansiedad sin sentirme juzgada. La estructura me da calma y el yoga me devuelve al cuerpo.",
        name: "Mariana R.",
        role: "Emprendedora",
        /**
         * Ruta relativa a /public.
         * Coloca la foto en /public/testimonios/mariana.jpg
         * Deja en "" para usar avatar de iniciales.
         */
        photo: "/testimonios/mariana.jpg" as string,
      },
      {
        quote: "No es el yoga de solo estirar: es orden por dentro. Las cartas y los espacios de reflexión me aterrizan cada mes.",
        name: "Carla V.",
        role: "Ingeniera",
        photo: "/testimonios/carla.jpg" as string,
      },
      {
        quote: "Las clases cortas me salvaron en semanas de locura. Siento que recuperé mi ritmo sin renunciar al trabajo.",
        name: "Andrea L.",
        role: "Docente",
        photo: "/testimonios/andrea.jpg" as string,
      },
    ],
  },

  about: {
    title: "Hola, soy Yube Karina",
    credential:
      "Ingeniera industrial de profesión. Instructora de yoga y meditación, 500 horas certificadas. CEO de Yoga con Lógica y Alma.",
    description:
      "Llevo años cruzando dos mundos que la mayoría separa: el pensamiento estructurado de la ingeniería y la sabiduría profunda del yoga. De esa fusión nació este método: un espacio donde la mente y el espíritu se encuentran.",
    extended:
      "Soy facilitadora de experiencias que transforman, una respiración a la vez. Practico pole dance, creo en el merecimiento y sueño con un mundo más consciente. Bienvenida a mi universo.",
    highlights: [
      "Facilitadora de experiencias transformadoras",
      "Practicante de pole dance",
      "Creyente del merecimiento",
      "Soñadora de un mundo más consciente",
    ],
    quote:
      "Combino estructura con sensibilidad, amor propio con acción, espiritualidad con práctica. Aquí todo nace desde el alma.",
    /**
     * Foto de Yube en la sección About.
     * Coloca el archivo en /public/yube-foto.jpg y pon la ruta aquí.
     * Deja en "" para mostrar el placeholder.
     */
    yubeFoto: "/yube-foto.jpg" as string,
    /**
     * YouTube video ID para el video de bienvenida (opcional).
     * Si se define, tiene prioridad sobre yubeFoto.
     * Ej: "dQw4w9WgXcQ" → https://youtu.be/dQw4w9WgXcQ
     */
    welcomeVideoYoutubeId: "" as string,
  },

  shop: {
    title: "Herramientas para tu camino",
    subtitle: "Cada producto lleva una intención. No compras un PDF, compras una invitación a conocerte más.",
    payhipUrl: "https://payhip.com/ConLogicayAlma",
    ctaPaid: "Acceder al programa",
    ctaFree: "Descargar gratis",
    products: [
      { id: "posturas-gratis", category: "guia" as const, title: "Guía de posturas básicas", intention: "Tu primer paso en el camino del yoga. Con amor y claridad.", badge: "Gratis", isFree: true },
      { id: "camino-merecimiento", category: "cuaderno" as const, title: "Camino al Merecimiento", intention: "Recuérdate que mereces todo lo que deseas con intención.", badge: null, isFree: false },
      { id: "mandalas-abundancia", category: "cuaderno" as const, title: "Mandalas de Abundancia", intention: "Colorea tu camino hacia la prosperidad con conciencia.", badge: null, isFree: false },
      { id: "camino-abundancia", category: "cuaderno" as const, title: "Camino a la Abundancia", intention: "Un diario que transforma tus pensamientos en realidad.", badge: "Nuevo", isFree: false },
      { id: "meditacion-descanso", category: "audio" as const, title: "Meditaciones para el descanso", intention: "Suelta el día. Deja que el cuerpo respire y el alma descanse.", badge: null, isFree: false },
    ],
  },

  membership: {
    title: "Membresía",
    tagline: "No es solo una clase: es tu espacio mensual de orden y expansión.",
    intro: "Incluye práctica guiada, contenido exclusivo y el acompañamiento que no encontrás en una clase suelta.",
    differentiatorTitle: "Cartas para habitarte",
    differentiatorBody:
      "Cada mes, una carta escrita con intención: reflexión y práctica para habitar tu vida con más presencia.",
    plans: [
      {
        id: "mensual",
        name: "Mensual",
        price: "Consultar en Payhip",
        highlight: false,
        features: ["Acceso al contenido del mes", "Cartas para habitarte", "Comunidad de apoyo", "Cancelás cuando quieras"],
      },
      {
        id: "anual",
        name: "Anual",
        price: "2 meses de regalo vs. pagar mes a mes",
        highlight: true,
        features: ["Todo lo del plan mensual", "Mejor precio por mes", "Prioridad en novedades", "Compromiso con tu proceso"],
      },
    ],
    cta: "Quiero la membresía",
    payhipUrl: "https://payhip.com/ConLogicayAlma",
  },

  faq: {
    title: "Preguntas frecuentes",
    subtitle: "Todo lo que necesitas saber para empezar",
    items: [
      {
        question: "¿Qué hace único a Yoga con Lógica y Alma?",
        answer:
          "Es un punto de encuentro entre lo tangible y lo sutil. Integra lo físico, lo mental y lo energético como caminos para reconectar con nuestra esencia. El cuerpo es un canal de conciencia, la lógica una herramienta de claridad, y el alma la guía que nos devuelve al hogar interior.",
      },
      {
        question: "¿Qué nivel necesito para empezar?",
        answer:
          "No necesitas experiencia previa. Solo ganas de conocerte, de explorar tu cuerpo con amor y tu mente con curiosidad. Cada práctica se adapta a ti, a tu momento, a tu energía.",
      },
      {
        question: "¿En qué se diferencia de una clase tradicional de yoga?",
        answer:
          "Más allá de las posturas físicas, integramos recursos de crecimiento personal — análisis FODA del alma, rueda de la vida, journaling — creando una experiencia más profunda y transformadora.",
      },
      {
        question: "¿Cuánto duran las sesiones?",
        answer:
          "Las clases suelen durar 60 minutos, con opciones de 10, 30 y 45 minutos. Tenemos un plan \"a tu ritmo\" para integrarlas sin presión en tu rutina.",
      },
      {
        question: "¿Cómo se integran las herramientas de análisis?",
        answer:
          "Al final de cada clase dejamos un espacio para aplicar dinámicas de reflexión — preguntas poderosas, mapas mentales, scripting. Además hacemos seguimiento en sesiones posteriores.",
      },
    ],
  },

  community: {
    sectionTitle: "Comunidad en movimiento",
    sectionSubtitle: "Encuéntranos en las plataformas donde practicamos y compartimos.",
    title: "Almas en Armonía",
    description:
      "Un grupo de mujeres que caminan juntas hacia el equilibrio y el autoconocimiento.",
    whatsappCta: "Unirme al grupo",
    whatsappHelper: "¿Dudas sobre cómo iniciar? Escríbenos por WhatsApp.",
    whatsappLink: "https://chat.whatsapp.com/CMQfDb0vlfbLAJ2pf9nn9I?mode=gi_t",
    whatsappDirect: "https://wa.me/584243547179",
    instagramGrid: [],
  },

  newsletter: {
    title: "Cartas con Lógica y Alma",
    description: "Reflexiones y práctica en tu bandeja cada dos semanas.",
    placeholder: "Tu email",
    cta: "Quiero recibir mis cartas",
    microcopy: "Sin spam. Solo contenido con intención.",
  },

  blog: {
    label: "Entre la lógica y el alma",
    href: "https://www.instagram.com/yube.karina?igsh=MWg4Z2M5ang2YzI2bg==",
    externalHint: "Por ahora te esperamos en Instagram con reflexiones y práctica.",
  },

  trust: {
    paymentLine: "Pagos seguros a través de Payhip (PayPal, tarjetas).",
    guarantee:
      "Si tu producto digital incluye garantía, aparece en la página de compra de Payhip.",
  },

  footer: {
    tagline: "Organizamos el bienestar, estructuramos el alma",
    links: {
      main: [
        { label: "Programas", href: "/#programas" },
        { label: "Membresía", href: "/membresia" },
        { label: "Tienda", href: "/#tienda" },
        { label: "FAQ", href: "/faq" },
        { label: "Contacto", href: "https://wa.me/584243547179" },
      ],
      legal: [
        { label: "Política de Privacidad", href: "/privacidad" },
        { label: "Términos y Condiciones", href: "/terminos" },
      ],
    },
    social: {
      instagram: "https://www.instagram.com/yube.karina?igsh=MWg4Z2M5ang2YzI2bg==",
      tiktok: "https://tiktok.com/@yube.karina",
      youtube: "https://youtube.com/@yube.karinag?si=tBKXzfHdKXK6Sx7t",
      whatsapp: "https://wa.me/584243547179",
    },
  },
};

export type SiteContent = typeof siteContent;
