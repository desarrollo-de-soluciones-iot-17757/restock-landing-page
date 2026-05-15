(function () {
  const STORAGE_KEY = "restock-lang";

  const STRINGS = {
    en: {
      "nav.langIndicator": "EN",
      "nav.login": "Login",
      "cta.getStarted": "Get Started",
      "cta.watchDemo": "Watch Demo",
      "aria.langToggle": "Change language",
      "aria.login": "Log in to Restock web application",
      "aria.signUp": "Create a Restock account and open the web platform",
      "aria.selectEnglish": "Display site in English",
      "aria.selectSpanish": "Display site in Spanish",
      "aria.googlePlay":
        "Get Restock on Google Play (placeholder store listing)",
      "aria.appStore":
        "Download Restock on the App Store (placeholder listing)",
      "aria.footerApi": "Open Restock web application",
      "aria.footerPrivacy": "Read the Restock privacy policy",
      "aria.footerTerms": "Read the Restock terms of service",
      "aria.footerLinkedin": "UI-Topic on LinkedIn (opens in a new tab)",
      "benefits.carousel.restaurant.left":
        "Scroll restaurant benefits to the left",
      "benefits.carousel.restaurant.right":
        "Scroll restaurant benefits to the right",
      "benefits.carousel.retail.left": "Scroll retail benefits to the left",
      "benefits.carousel.retail.right": "Scroll retail benefits to the right",
      "benefits.title": "Benefits",
      "benefits.subtitle":
        "Track inventory in real time, reduce waste, and improve operational efficiency across your business.",
      "benefits.restaurants": "For Restaurants",
      "benefits.restaurant.alerts.title": "Low-Stock Alerts",
      "benefits.restaurant.alerts.desc":
        "Get notified before ingredients run out.",
      "benefits.restaurant.ingredients.title": "Ingredient Tracking",
      "benefits.restaurant.ingredients.desc": "Monitor supplies in real time.",
      "benefits.restaurant.waste.title": "Waste Reduction",
      "benefits.restaurant.waste.desc": "Reduce overbuying and food waste.",
      "benefits.restaurant.temperature.title": "Temperature Monitoring",
      "benefits.restaurant.temperature.desc":
        "Track storage conditions automatically.",
      "benefits.restaurant.multilocation.title": "Multi-Location Control",
      "benefits.restaurant.multilocation.desc":
        "Manage inventory across branches.",
      "benefits.retail": "For Retail Stores",
      "benefits.retail.stock.title": "Real-Time Stock Levels",
      "benefits.retail.stock.desc": "Track product availability instantly.",
      "benefits.retail.shelf.title": "Shelf Monitoring",
      "benefits.retail.shelf.desc":
        "Monitor inventory directly from storage areas.",
      "benefits.retail.restocking.title": "Smart Restocking",
      "benefits.retail.restocking.desc":
        "Identify products that need replenishment.",
      "benefits.retail.dashboard.title": "Centralized Dashboard",
      "benefits.retail.dashboard.desc":
        "Manage all locations from one platform.",
      "benefits.retail.analytics.title": "Inventory Analytics",
      "benefits.retail.analytics.desc": "Analyze stock movement and trends.",
      "benefitsPlatform.label": "Why Restock",
      "benefitsPlatform.titleLine1": "One Scale.",
      "benefitsPlatform.titleLine2": " Complete Control.",
      "benefitsPlatform.subtitle":
        "Three powerful sensors. One unified dashboard. Zero guesswork.",
      "benefitsPlatform.c1.title": "Smart Scale Precision",
      "benefitsPlatform.c1.desc":
        "Eliminate manual counting. Our scales track every gram in real-time, instantly deducting stock for restaurant recipes or retail combos.",
      "benefitsPlatform.c2.title": "Cold Chain Protection",
      "benefitsPlatform.c2.desc":
        "Protect your perishables. Get instant alerts if refrigerators fail, saving thousands in spoiled restaurant ingredients or retail goods.",
      "benefitsPlatform.c3.title": "Ambient Quality Control",
      "benefitsPlatform.c3.desc":
        "Keep dry goods perfect. Monitor humidity levels to prevent retail product damage and preserve kitchen ingredient freshness.",
      "aboutUs.title": "About Us",
      "aboutUs.intro":
        "UI-Topic is a startup focused on improving inventory management through smart real-time monitoring and digital inventory solutions.",
      "aboutUs.card1.title": "How We Help",
      "aboutUs.card1.desc":
        "We help businesses track stock levels, reduce operational losses, and improve inventory control with automated monitoring tools.",
      "aboutUs.card2.title": "Value Proposition",
      "aboutUs.card2.desc":
        "Restock combines real-time inventory tracking with intelligent monitoring of weight, temperature, and humidity for smarter stock management.",
      "aboutUs.card3.title": "Mission & Vision",
      "aboutUs.card3.desc":
        "To become a leading smart inventory solution that helps businesses modernize and automate stock management through innovative technology.",
      "team.label": "Who we are",
      "team.titleBefore": "Meet the ",
      "team.titleAccent": "Team",
      "team.titleAfter": " Behind Restock",
      "team.lead":
        "We're a team focused on simplifying inventory management for restaurants and retail businesses through smarter real-time tracking.",
      "team.laptopTag": "ABOUT THE TEAM",
      "team.m1.name": "Julio Castro",
      "team.m1.role": "Full Stack Developer",
      "team.m2.name": "Farid Coronel",
      "team.m2.role": "Frontend Developer",
      "team.m3.name": "Matias Diaz",
      "team.m3.role": "Hardware Engineer",
      "team.m4.name": "Jahaziel Guerra",
      "team.m4.role": "UI/UX Designer",
      "team.m5.name": "Nicolas Juarez",
      "team.m5.role": "Cloud Architect",
      "team.m6.name": "Antonio Navarro",
      "team.m6.role": "Data Engineer",
      "team.m7.name": "Gabriela Shapiama",
      "team.m7.role": "Hardware Engineer",
      "tutorial.title": "How Restock Works",
      "tutorial.screenTag": "HOW RESTOCK WORKS",
      "tutorial.s1.title": "Install the Smart Device",
      "tutorial.s1.desc":
        "Place the sensor device under shelves, containers, fridges, or storage units.",
      "tutorial.s2.title": "Connect & Assign Inventory",
      "tutorial.s2.desc":
        "Link the device to a branch and assign the product or supply you want to track.",
      "tutorial.s3.title": "Monitor Stock in Real Time",
      "tutorial.s3.desc":
        "Track weight, temperature, and humidity automatically from your dashboard.",
      "plans.title": "Our Subscription Plans",
      "plans.selectPlan": "Select Plan",
      "plans.basic.badge": "Flexible",
      "plans.basic.name": "Basic",
      "plans.basic.desc": "Ideal for small operations or testing.",
      "plans.basic.price": "S/ 59.99 /mo",
      "plans.basic.f1": "Up to 10 Scales",
      "plans.basic.f2": "Real-time Stock Alerts",
      "plans.basic.f3": "Standard API Access",
      "plans.premium.ribbon": "Most Popular",
      "plans.premium.badge": "Balanced",
      "plans.premium.name": "Premium",
      "plans.premium.desc": "Optimized for growing logistics teams.",
      "plans.premium.price": "S/ 49.99 /mo",
      "plans.premium.billing": "Billed every 6 months",
      "plans.premium.f1": "Unlimited Scales",
      "plans.premium.f2": "Predictive Analytics",
      "plans.premium.f3": "Priority Support 24/7",
      "plans.premium.f4": "Advanced API Integration",
      "plans.pro.badge": "Maximum Value",
      "plans.pro.name": "Pro",
      "plans.pro.desc": "Perfect for enterprise-grade oversight.",
      "plans.pro.price": "S/ 39.99 /mo",
      "plans.pro.billing": "Billed annually",
      "plans.pro.f1": "Everything in Semi-annual",
      "plans.pro.f2": "Enterprise SLA Guarantee",
      "plans.pro.f3": "Custom Integrations",
      "faq.title": "Common Questions",
      "testimonials.titleAccent": "Trusted",
      "testimonials.titleRest": " by Operations Teams",
      "aria.selectPlanBasic": "Select Basic plan and open sign up",
      "aria.selectPlanPremium": "Select Premium plan and open sign up",
      "aria.selectPlanPro": "Select Pro plan and open sign up",
      "tos.title": "Terms of Service",
      "tos.updated": "Last updated: May 14, 2026 · Restock by UI-Topic",
      "tos.intro":
        "These Terms of Service govern access to the Restock web platform, mobile experiences, and related documentation. By creating an account or using the services, you agree to the terms below.",
      "tos.s1.title": "1. Eligibility and accounts",
      "tos.s1.body":
        "You must have authority to bind your organization. You are responsible for safeguarding credentials, configuring roles, and promptly revoking access for former team members.",
      "tos.s2.title": "2. Acceptable use",
      "tos.s2.body":
        "Do not attempt to disrupt the platform, bypass security controls, scrape data without permission, or use Restock in violation of applicable law. We may suspend access to protect customers if misuse is detected.",
      "tos.s3.title": "3. IoT devices and telemetry",
      "tos.s3.body":
        "Hardware integrations rely on stable networks and accurate calibration. You acknowledge that environmental factors may affect readings and that you remain responsible for operational decisions on-site.",
      "tos.s4.title": "4. Service changes",
      "tos.s4.body":
        "We continuously improve Restock. We may update interfaces, endpoints, or limits with reasonable notice when materially impacting your workflows.",
      "tos.s5.title": "5. Limitation of liability",
      "tos.s5.body":
        "To the maximum extent permitted by law, Restock is provided “as is.” We are not liable for indirect damages, lost profits, or inventory outcomes arising from reliance on automated alerts alone.",
      "tos.s6.title": "6. Contact",
      "tos.s6.body":
        "Questions about these terms can be directed to your account team or through the support channels listed on the website footer.",
      "privacy.title": "Privacy Policy",
      "privacy.updated": "Last updated: May 14, 2026 · Restock by UI-Topic",
      "privacy.intro":
        "This policy explains how Restock collects, uses, and protects data when you use our inventory platform, mobile apps, and connected devices.",
      "privacy.s1.title": "1. Information we process",
      "privacy.s1.body":
        "We process account details, usage logs, inventory telemetry (for example weight, temperature, and humidity readings), and support communications required to operate the service.",
      "privacy.s2.title": "2. How we use data",
      "privacy.s2.body":
        "Data powers dashboards, alerts, auditing, and product improvements. Aggregated analytics may be used to understand feature adoption without identifying individuals.",
      "privacy.s3.title": "3. Sharing and subprocessors",
      "privacy.s3.body":
        "We share information with infrastructure providers strictly needed to host the platform, deliver notifications, and secure backups. Contracts require confidentiality and compliance with applicable privacy regulations.",
      "privacy.s4.title": "4. Retention and security",
      "privacy.s4.body":
        "We retain operational data according to your plan settings and legal obligations. Technical and organizational measures—including encryption in transit, access reviews, and monitoring—help protect your workspace.",
      "privacy.s5.title": "5. Your choices",
      "privacy.s5.body":
        "Administrators may export or delete certain records subject to regulatory requirements. Users can contact their admin to exercise privacy rights available in their region.",
      "privacy.s6.title": "6. Updates",
      "privacy.s6.body":
        "When we materially change this policy, we will post the revision date here and provide notice through the product when appropriate.",
      "footer.tagline":
        "Real-time inventory management for modern businesses.",
      "footer.product": "Product",
      "footer.company": "Company",
      "footer.support": "Support",
      "footer.linkHardware": "Hardware Docs",
      "footer.linkApi": "API Status",
      "footer.linkRelease": "Release Notes",
      "footer.linkTutorials": "Tutorials",
      "footer.linkAbout": "About Us",
      "footer.linkPrivacy": "Privacy Policy",
      "footer.linkTerms": "Terms of Service",
      "footer.linkLinkedin": "LinkedIn",
      "footer.linkSupport": "Support Center",
      "footer.linkFaq": "FAQ",
      "footer.linkContact": "Contact",
      "footer.copy": "© 2026 RESTOCK. All rights reserved.",
      "store.googleEyebrow": "GET IT ON",
      "store.googleTitle": "Google Play",
      "store.appleEyebrow": "Download on the",
      "store.appleTitle": "App Store",
      "access.badge": "SMART INVENTORY",
      "access.title": "Ready to Simplify Your Inventory?",
      "access.desc":
        "Track inventory in real time, reduce waste, and prevent stock shortages across your business.",
      "access.feature1": "ENTERPRISE SECURE",
      "access.feature2": "MULTI-MONITORING",
      "access.feature3": "REAL-TIME TELEMETRY",
      "download.headlineRest": " in your pocket",
      "download.lead":
        "Our mobile app lets you monitor stock levels, receive critical alerts, and generate performance reports from anywhere in the world.",
    },
    es: {
      "nav.langIndicator": "ES",
      "nav.login": "Iniciar sesión",
      "cta.getStarted": "Comenzar",
      "cta.watchDemo": "Ver demo",
      "aria.langToggle": "Cambiar idioma",
      "aria.login": "Iniciar sesión en la aplicación web Restock",
      "aria.signUp":
        "Crear una cuenta de Restock y abrir la plataforma web",
      "aria.selectEnglish": "Mostrar el sitio en inglés",
      "aria.selectSpanish": "Mostrar el sitio en español",
      "aria.googlePlay":
        "Obtener Restock en Google Play (listado de tienda provisional)",
      "aria.appStore":
        "Descargar Restock en el App Store (listado provisional)",
      "aria.footerApi": "Abrir la aplicación web Restock",
      "aria.footerPrivacy": "Leer la política de privacidad de Restock",
      "aria.footerTerms": "Leer los términos de servicio de Restock",
      "aria.footerLinkedin": "UI-Topic en LinkedIn (se abre en una pestaña nueva)",
      "benefits.carousel.restaurant.left":
        "Desplazar beneficios para restaurantes hacia la izquierda",
      "benefits.carousel.restaurant.right":
        "Desplazar beneficios para restaurantes hacia la derecha",
      "benefits.carousel.retail.left":
        "Desplazar beneficios para retail hacia la izquierda",
      "benefits.carousel.retail.right":
        "Desplazar beneficios para retail hacia la derecha",
      "benefits.title": "Beneficios",
      "benefits.subtitle":
        "Haz seguimiento del inventario en tiempo real, reduce desperdicios y mejora la eficiencia operativa en todo tu negocio.",
      "benefits.restaurants": "Para restaurantes",
      "benefits.restaurant.alerts.title": "Alertas de stock bajo",
      "benefits.restaurant.alerts.desc":
        "Recibe avisos antes de que se acaben los ingredientes.",
      "benefits.restaurant.ingredients.title": "Seguimiento de ingredientes",
      "benefits.restaurant.ingredients.desc":
        "Supervisa los insumos en tiempo real.",
      "benefits.restaurant.waste.title": "Reducción de desperdicio",
      "benefits.restaurant.waste.desc":
        "Reduce compras excesivas y merma de alimentos.",
      "benefits.restaurant.temperature.title": "Monitoreo de temperatura",
      "benefits.restaurant.temperature.desc":
        "Supervisa automáticamente las condiciones de almacenamiento.",
      "benefits.restaurant.multilocation.title": "Control multisede",
      "benefits.restaurant.multilocation.desc":
        "Gestiona inventario entre sucursales.",
      "benefits.retail": "Para tiendas retail",
      "benefits.retail.stock.title": "Niveles de stock en tiempo real",
      "benefits.retail.stock.desc":
        "Consulta la disponibilidad de productos al instante.",
      "benefits.retail.shelf.title": "Monitoreo de estanterías",
      "benefits.retail.shelf.desc":
        "Supervisa inventario directamente desde las zonas de almacenamiento.",
      "benefits.retail.restocking.title": "Reabastecimiento inteligente",
      "benefits.retail.restocking.desc":
        "Identifica productos que necesitan reposición.",
      "benefits.retail.dashboard.title": "Panel centralizado",
      "benefits.retail.dashboard.desc":
        "Administra todas las ubicaciones desde una sola plataforma.",
      "benefits.retail.analytics.title": "Analítica de inventario",
      "benefits.retail.analytics.desc":
        "Analiza movimientos de stock y tendencias.",
      "benefitsPlatform.label": "Por qué Restock",
      "benefitsPlatform.titleLine1": "Una báscula.",
      "benefitsPlatform.titleLine2": " Control total.",
      "benefitsPlatform.subtitle":
        "Tres sensores potentes. Un panel unificado. Cero conjeturas.",
      "benefitsPlatform.c1.title": "Precisión de báscula inteligente",
      "benefitsPlatform.c1.desc":
        "Elimina el conteo manual. Nuestras básculas registran cada gramo en tiempo real, descontando stock al instante para recetas de restaurante o combos retail.",
      "benefitsPlatform.c2.title": "Protección de cadena de frío",
      "benefitsPlatform.c2.desc":
        "Protege tus perecederos. Recibe alertas al instante si fallan las refrigeradoras, ahorrando miles en ingredientes o mercancía retail estropeada.",
      "benefitsPlatform.c3.title": "Control de calidad ambiental",
      "benefitsPlatform.c3.desc":
        "Mantén los secos en perfecto estado. Monitorea la humedad para evitar daños en productos retail y conservar la frescura de ingredientes de cocina.",
      "aboutUs.title": "Sobre nosotros",
      "aboutUs.intro":
        "UI-Topic es una startup enfocada en mejorar la gestión de inventario mediante monitoreo inteligente en tiempo real y soluciones digitales de inventario.",
      "aboutUs.card1.title": "Cómo ayudamos",
      "aboutUs.card1.desc":
        "Ayudamos a las empresas a seguir niveles de stock, reducir pérdidas operativas y mejorar el control de inventario con herramientas de monitoreo automatizado.",
      "aboutUs.card2.title": "Propuesta de valor",
      "aboutUs.card2.desc":
        "Restock combina el seguimiento de inventario en tiempo real con el monitoreo inteligente de peso, temperatura y humedad para una gestión de stock más inteligente.",
      "aboutUs.card3.title": "Misión y visión",
      "aboutUs.card3.desc":
        "Convertirnos en una solución líder de inventario inteligente que ayude a las empresas a modernizar y automatizar la gestión de stock mediante tecnología innovadora.",
      "team.label": "Quiénes somos",
      "team.titleBefore": "Conoce al ",
      "team.titleAccent": "equipo",
      "team.titleAfter": " detrás de Restock",
      "team.lead":
        "Somos un equipo enfocado en simplificar la gestión de inventario para restaurantes y retail con un seguimiento en tiempo real más inteligente.",
      "team.laptopTag": "SOBRE EL EQUIPO",
      "team.m1.name": "Julio Castro",
      "team.m1.role": "Full Stack Developer",
      "team.m2.name": "Farid Coronel",
      "team.m2.role": "Frontend Developer",
      "team.m3.name": "Matias Diaz",
      "team.m3.role": "Hardware Engineer",
      "team.m4.name": "Jahaziel Guerra",
      "team.m4.role": "UI/UX Designer",
      "team.m5.name": "Nicolas Juarez",
      "team.m5.role": "Cloud Architect",
      "team.m6.name": "Antonio Navarro",
      "team.m6.role": "Data Engineer",
      "team.m7.name": "Gabriela Shapiama",
      "team.m7.role": "Hardware Engineer",
      "tutorial.title": "Cómo funciona Restock",
      "tutorial.screenTag": "CÓMO FUNCIONA RESTOCK",
      "tutorial.s1.title": "Instala el dispositivo inteligente",
      "tutorial.s1.desc":
        "Coloca el sensor bajo estantes, contenedores, refrigeradoras o zonas de almacenamiento.",
      "tutorial.s2.title": "Conecta y asigna inventario",
      "tutorial.s2.desc":
        "Vincula el dispositivo a una sucursal y asigna el producto o insumo que quieres monitorear.",
      "tutorial.s3.title": "Monitorea stock en tiempo real",
      "tutorial.s3.desc":
        "Haz seguimiento de peso, temperatura y humedad automáticamente desde tu panel.",
      "plans.title": "Nuestros planes de suscripción",
      "plans.selectPlan": "Elegir plan",
      "plans.basic.badge": "Flexible",
      "plans.basic.name": "Basic",
      "plans.basic.desc": "Ideal para operaciones pequeñas o pruebas.",
      "plans.basic.price": "S/ 59.99 /mes",
      "plans.basic.f1": "Hasta 10 básculas",
      "plans.basic.f2": "Alertas de stock en tiempo real",
      "plans.basic.f3": "Acceso API estándar",
      "plans.premium.ribbon": "Más popular",
      "plans.premium.badge": "Balanceado",
      "plans.premium.name": "Premium",
      "plans.premium.desc": "Optimizado para equipos logísticos en crecimiento.",
      "plans.premium.price": "S/ 49.99 /mes",
      "plans.premium.billing": "Facturado cada 6 meses",
      "plans.premium.f1": "Básculas ilimitadas",
      "plans.premium.f2": "Analítica predictiva",
      "plans.premium.f3": "Soporte prioritario 24/7",
      "plans.premium.f4": "Integración API avanzada",
      "plans.pro.badge": "Máximo valor",
      "plans.pro.name": "Pro",
      "plans.pro.desc": "Perfecto para supervisión de nivel empresarial.",
      "plans.pro.price": "S/ 39.99 /mes",
      "plans.pro.billing": "Facturado anualmente",
      "plans.pro.f1": "Todo lo del plan semestral",
      "plans.pro.f2": "Garantía SLA empresarial",
      "plans.pro.f3": "Integraciones personalizadas",
      "faq.title": "Preguntas frecuentes",
      "testimonials.titleAccent": "Confían",
      "testimonials.titleRest": " los equipos de operaciones",
      "aria.selectPlanBasic": "Elegir plan Basic y abrir registro",
      "aria.selectPlanPremium": "Elegir plan Premium y abrir registro",
      "aria.selectPlanPro": "Elegir plan Pro y abrir registro",
      "tos.title": "Términos de servicio",
      "tos.updated": "Última actualización: 14 may 2026 · Restock por UI-Topic",
      "tos.intro":
        "Estos términos de servicio regulan el acceso a la plataforma web Restock, experiencias móviles y documentación relacionada. Al crear una cuenta o usar los servicios, aceptas lo siguiente.",
      "tos.s1.title": "1. Elegibilidad y cuentas",
      "tos.s1.body":
        "Debes tener facultad para obligar a tu organización. Eres responsable de proteger credenciales, configurar roles y revocar acceso con prontitud para exintegrantes.",
      "tos.s2.title": "2. Uso aceptable",
      "tos.s2.body":
        "No intentes interrumpir la plataforma, eludir controles de seguridad, extraer datos sin permiso ni usar Restock en violación de la ley aplicable. Podemos suspender el acceso para proteger a clientes si detectamos abuso.",
      "tos.s3.title": "3. Dispositivos IoT y telemetría",
      "tos.s3.body":
        "Las integraciones de hardware dependen de redes estables y calibración adecuada. Reconoces que factores ambientales pueden afectar las lecturas y sigues siendo responsable de las decisiones operativas en sitio.",
      "tos.s4.title": "4. Cambios en el servicio",
      "tos.s4.body":
        "Mejoramos Restock de forma continua. Podemos actualizar interfaces, endpoints o límites con aviso razonable cuando impacte materialmente tus flujos.",
      "tos.s5.title": "5. Limitación de responsabilidad",
      "tos.s5.body":
        "En la máxima medida permitida por la ley, Restock se ofrece “tal cual”. No somos responsables por daños indirectos, lucro cesante ni resultados de inventario derivados únicamente de alertas automatizadas.",
      "tos.s6.title": "6. Contacto",
      "tos.s6.body":
        "Las preguntas sobre estos términos pueden dirigirse a tu equipo de cuenta o a los canales de soporte indicados en el pie del sitio.",
      "privacy.title": "Política de privacidad",
      "privacy.updated":
        "Última actualización: 14 may 2026 · Restock por UI-Topic",
      "privacy.intro":
        "Esta política explica cómo Restock recopila, usa y protege los datos cuando utilizas la plataforma de inventario, apps móviles y dispositivos conectados.",
      "privacy.s1.title": "1. Información que tratamos",
      "privacy.s1.body":
        "Tratamos datos de cuenta, registros de uso, telemetría de inventario (por ejemplo peso, temperatura y humedad) y comunicaciones de soporte necesarias para operar el servicio.",
      "privacy.s2.title": "2. Cómo usamos los datos",
      "privacy.s2.body":
        "Los datos alimentan paneles, alertas, auditorías y mejoras del producto. La analítica agregada puede usarse para entender adopción de funciones sin identificar personas.",
      "privacy.s3.title": "3. Compartición y subprocesadores",
      "privacy.s3.body":
        "Compartimos información con proveedores de infraestructura estrictamente necesarios para hospedar la plataforma, enviar notificaciones y asegurar respaldos. Los contratos exigen confidencialidad y cumplimiento normativo.",
      "privacy.s4.title": "4. Conservación y seguridad",
      "privacy.s4.body":
        "Conservamos datos operativos según la configuración de tu plan y obligaciones legales. Medidas técnicas y organizativas—incluido cifrado en tránsito, revisiones de acceso y monitoreo—ayudan a proteger tu espacio de trabajo.",
      "privacy.s5.title": "5. Tus opciones",
      "privacy.s5.body":
        "Los administradores pueden exportar o eliminar ciertos registros sujetos a requisitos regulatorios. Los usuarios pueden contactar a su admin para ejercer derechos de privacidad disponibles en su región.",
      "privacy.s6.title": "6. Actualizaciones",
      "privacy.s6.body":
        "Cuando cambiemos materialmente esta política, publicaremos la fecha de revisión aquí y avisaremos en el producto cuando corresponda.",
      "footer.tagline":
        "Gestión de inventario en tiempo real para negocios modernos.",
      "footer.product": "Producto",
      "footer.company": "Empresa",
      "footer.support": "Soporte",
      "footer.linkHardware": "Documentación de hardware",
      "footer.linkApi": "Estado de la API",
      "footer.linkRelease": "Notas de versión",
      "footer.linkTutorials": "Tutoriales",
      "footer.linkAbout": "Nosotros",
      "footer.linkPrivacy": "Política de privacidad",
      "footer.linkTerms": "Términos de servicio",
      "footer.linkLinkedin": "LinkedIn",
      "footer.linkSupport": "Centro de soporte",
      "footer.linkFaq": "Preguntas frecuentes",
      "footer.linkContact": "Contacto",
      "footer.copy": "© 2026 RESTOCK. Todos los derechos reservados.",
      "store.googleEyebrow": "DISPONIBLE EN",
      "store.googleTitle": "Google Play",
      "store.appleEyebrow": "Descarga en el",
      "store.appleTitle": "App Store",
      "access.badge": "INVENTARIO INTELIGENTE",
      "access.title": "¿Listo para simplificar tu inventario?",
      "access.desc":
        "Haz seguimiento del inventario en tiempo real, reduce desperdicios y evita quiebres de stock en todo tu negocio.",
      "access.feature1": "SEGURIDAD EMPRESARIAL",
      "access.feature2": "MULTI-MONITOREO",
      "access.feature3": "TELEMETRÍA EN TIEMPO REAL",
      "download.headlineRest": " en tu bolsillo",
      "download.lead":
        "Nuestra app móvil te permite monitorear niveles de stock, recibir alertas críticas y generar informes de desempeño desde cualquier lugar.",
    },
  };

  function normalizeLang(value) {
    return value === "es" ? "es" : "en";
  }

  function getStoredLang() {
    try {
      return normalizeLang(localStorage.getItem(STORAGE_KEY) || "en");
    } catch {
      return "en";
    }
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }

  function applyLang(lang) {
    const safe = normalizeLang(lang);
    setStoredLang(safe);
    document.documentElement.lang = safe === "es" ? "es" : "en";

    const table = STRINGS[safe] || STRINGS.en;

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      const key = node.getAttribute("data-i18n");
      if (!key) return;
      const value = table[key];
      if (typeof value === "string") {
        node.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (node) {
      const key = node.getAttribute("data-i18n-aria");
      if (!key) return;
      const value = table[key];
      if (typeof value === "string") {
        node.setAttribute("aria-label", value);
      }
    });

    document.querySelectorAll("[data-lang-select]").forEach(function (btn) {
      const value = normalizeLang(btn.getAttribute("data-lang-select"));
      btn.classList.toggle("is-active", value === safe);
    });
  }

  function toggleLang() {
    const next = getStoredLang() === "es" ? "en" : "es";
    applyLang(next);
  }

  function init() {
    applyLang(getStoredLang());

    const headerToggle = document.getElementById("siteHeaderLangToggle");
    if (headerToggle) {
      headerToggle.addEventListener("click", toggleLang);
    }

    document.querySelectorAll("[data-lang-select]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang-select"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.RestockI18n = {
    applyLang,
    getLang: getStoredLang,
    STRINGS,
  };
})();
