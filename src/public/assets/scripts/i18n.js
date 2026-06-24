(function () {
    const STORAGE_KEY = "restock-lang";

    const STRINGS = {
        en: {
            "nav.home": "HOME",
            "nav.about": "ABOUT US",
            "nav.benefits": "BENEFITS",
            "nav.testimonials": "TESTIMONIALS",
            "nav.questions": "QUESTIONS",
            "nav.tutorial": "TUTORIAL",
            "nav.plans": "PLANS",
            "nav.download": "DOWNLOAD",
            "hero.deviceLabel": "Smart Device Connected",
            "hero.deviceName": "Flour Supply — Downtown Branch",
            "hero.stockLabel": "Current Stock",
            "hero.statTemp": "TEMP",
            "hero.statHumidity": "HUMIDITY",
            "hero.statStatus": "STATUS",
            "hero.statStable": "Stable",
            "faq.q1": "How do the Smart Scales connect to the dashboard?",
            "faq.a1": "They connect via Wi-Fi instantly. Link them to your network using our app, and they start syncing data.",
            "faq.q2": "Does it work for both restaurant kitchens and retail stores?",
            "faq.a2": "Yes. You can configure scales to deduct ingredients based on recipes (kitchens) or track individual units for kits (retail).",
            "faq.q3": "Can I monitor weight, temperature, and humidity simultaneously?",
            "faq.a3": "Absolutely. Every scale is equipped with a load cell, a thermometer, and a hygrometer.",
            "faq.q4": "What happens if the internet goes down?",
            "faq.a4": "The scales have local memory. They store sensor data and automatically sync once the connection is restored.",
            "faq.q5": "How does the automated recipe deduction work?",
            "faq.a5": "When a dish is sold, the system calculates the expected weight drop on the scale and flags any discrepancies.",
            "hero.eyebrow": "SMART INVENTORY SYSTEM",
            "hero.titleBefore": "Smart ",
            "hero.titleAccent": "Inventory",
            "hero.titleAfter": " for Restaurants & Retail",
            "hero.subtitle": "Real-time inventory tracking for modern businesses.",
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
            "tos.updated": "Last updated: June 2026 · Restock by UI-Topic",
            "tos.intro":
                "This Software as a Service (SaaS) Agreement governs your access to and use of the Restock platform. By registering or using the service, you agree to be bound by these terms.",
            "tos.s1.title": "1. Parties of the Agreement",
            "tos.s1.body":
                "This agreement is entered into between UI-Topic (\"the Provider\") and the registered user (\"the Client\"), who accesses and uses the Restock platform through any of its channels: website, web application, mobile application, or associated IoT devices.",
            "tos.s2.title": "2. Service Description",
            "tos.s2.body":
                "Restock is an intelligent inventory management platform that combines software with IoT sensors to automate stock, temperature, and humidity control in restaurants and mass-consumption retail stores. The service includes access to the web application, mobile application, administration panel, and depending on the contracted plan, technical support and API integration access.",
            "tos.s3.title": "3. Subscription Plans and Billing",
            "tos.s3.body":
                "The Client must select one of the available subscription plans (Basic, Premium, or Pro) at the time of registration. Charges will be processed recurringly according to the chosen modality (monthly, semi-annual, or annual) through the Stripe payment gateway. The Provider does not store credit card data directly; such information is processed and safeguarded by Stripe according to its own security terms. The Client is responsible for keeping their payment method up to date. In the event of a renewal charge failure, the Provider will grant a grace period before restricting access to the service.",
            "tos.s4.title": "4. Cancellation and Renewal",
            "tos.s4.body":
                "The Client may cancel the automatic renewal of their subscription at any time from the billing section of their account. Cancellation does not generate a refund for the period already billed; access to the service will remain active until the end date of the contracted cycle. The Client may reactivate their subscription before expiration without losing their account configuration.",
            "tos.s5.title": "5. Acceptable Use",
            "tos.s5.body":
                "The Client agrees to use the platform exclusively for legitimate commercial and inventory management purposes. The following are expressly prohibited: attempting unauthorized access to the Provider's systems, reverse engineering the software, sharing access credentials with unauthorized third parties, using the service for illegal purposes or contrary to current regulations, and registering false or malicious data in the system.",
            "tos.s6.title": "6. Privacy and Data Processing",
            "tos.s6.body":
                "The Provider collects and processes Client data in accordance with its Privacy Policy, available on the website. Inventory, sales, device, and operational metric data are stored on secure servers with encryption in transit (TLS 1.2/1.3) and at rest. The Client retains ownership of their operational data. The Provider may use aggregated and anonymized data to improve the service, without identifying the Client or sharing information individually with third parties without explicit consent, except as required by law.",
            "tos.s7.title": "7. IoT Devices",
            "tos.s7.body":
                "Clients who purchase physical Restock devices (smart scales) accept that such equipment transmits weight, temperature, and humidity data through the establishment's WiFi network to the Provider's servers. Installation, maintenance, and periodic calibration of the devices are the Client's responsibility. The Provider is not responsible for service interruptions due to failures in the establishment's network connectivity, power outages, or physical damage to hardware caused by improper use.",
            "tos.s8.title": "8. Service Availability",
            "tos.s8.body":
                "The Provider will make its best efforts to maintain platform availability. Scheduled maintenance interruptions may occur, with prior notice to the Client when possible. The Provider does not guarantee uninterrupted availability and shall not be liable for damages arising from unscheduled service interruptions.",
            "tos.s9.title": "9. Intellectual Property",
            "tos.s9.body":
                "All software, design, brand, trade name, logos, and content of the Restock platform are the exclusive property of UI-Topic or its licensors. This agreement does not transfer to the Client any intellectual property rights over the software. The Client receives only a limited, non-exclusive, non-transferable, and revocable license to access the service during the term of their subscription.",
            "tos.s10.title": "10. Limitation of Liability",
            "tos.s10.body":
                "In no event shall the Provider be liable for indirect, incidental, special, or consequential damages arising from the use or inability to use the service, including loss of revenue, data loss, or business interruption. The Provider's maximum liability to the Client shall not exceed the total amount paid for the service in the three months prior to the event giving rise to the claim.",
            "tos.s11.title": "11. Modifications to Service and Terms",
            "tos.s11.body":
                "The Provider reserves the right to modify service functionalities, available plans, and these Terms and Conditions. Modifications will be notified to the Client at least 15 days in advance by email or notice within the platform. Continued use of the service after notification implies acceptance of the new terms.",
            "tos.s12.title": "12. Termination",
            "tos.s12.body":
                "The Provider may suspend or cancel the Client's access to the service without prior notice in case of violation of these terms, fraudulent use, repeated non-payment, or by requirement of competent authority. The Client may request deletion of their account and data at any time from their profile settings.",
            "tos.s13.title": "13. Applicable Law and Dispute Resolution",
            "tos.s13.body":
                "This agreement is governed by the laws of the Republic of Peru. Any dispute that cannot be resolved amicably between the parties shall be submitted to the competent courts of the city of Lima.",
            "tos.s14.title": "14. Contact",
            "tos.s14.body":
                "For inquiries related to these Terms and Conditions, the Client may contact the UI-Topic team through the contact form available on the official Restock website.",
            "privacy.title": "Privacy Policy",
            "privacy.updated": "Last updated: June 2026 · Restock by UI-Topic",
            "privacy.intro":
                "At UI-Topic, developers of the Restock platform, we are committed to protecting our users' privacy and handling their personal data with responsibility, transparency, and security. This Privacy Policy describes what information we collect, how we use it, who we share it with, and what rights users have over their data.",
            "privacy.s1.title": "1. Data Controller",
            "privacy.s1.body":
                "The data controller for personal data collected through the Restock platform is UI-Topic, the product development team. For any inquiries regarding data processing, you may contact us through the form available on our website.",
            "privacy.s2.title": "2. Data We Collect",
            "privacy.s2.body":
                "We collect the following information when you use our platform: registration and account data (name, surname, email, encrypted password, user role, business information); business data (business name, tax ID, main address, product categories, business images); operational data (branches, inventory batches, supplies, registered IoT devices, sales, recipes, kits); IoT device data (weight, temperature, humidity readings, hardware identifiers such as MAC address); technical and usage data (IP address, device type, operating system, browser, pages visited, session time); and profile pictures stored through external media management services.",
            "privacy.s3.title": "3. Purpose of Data Processing",
            "privacy.s3.body":
                "We use your personal data for the following purposes: to create and manage your Restock account; to enable inventory management, stock control, sales, and IoT device monitoring features; to send notifications about critical inventory events such as low stock alerts, excess stock, or detected discrepancies; to process and manage subscription payments; to improve the user experience by analyzing platform usage patterns; to comply with applicable legal obligations; and to ensure the security and integrity of the platform and prevent unauthorized access.",
            "privacy.s4.title": "4. Legal Basis for Processing",
            "privacy.s4.body":
                "The processing of your data is based on the following legal grounds: performance of a contract (processing necessary to fulfill the terms of service you accept when registering); consent (in cases where we request your express authorization, such as for optional communications); legitimate interest (to ensure platform security and improve our services); and legal obligation (when processing is required by applicable regulations).",
            "privacy.s5.title": "5. Data Sharing with Third Parties",
            "privacy.s5.body":
                "Restock does not sell or transfer your personal data to third parties for commercial purposes. However, for the proper functioning of the platform, we share data with the following service providers under confidentiality agreements: Cloudinary (image storage and management), Stripe (secure payment processing and subscription management), Firebase Cloud Messaging (push notifications), Resend (transactional emails), MongoDB Atlas (cloud database), Microsoft Azure (backend hosting), and Vercel (web application hosting). All providers are subject to their own privacy policies and are selected based on security and reliability criteria.",
            "privacy.s6.title": "6. International Data Transfers",
            "privacy.s6.body":
                "Some of the aforementioned service providers operate servers located outside the user's country. In all cases, we ensure that such transfers are carried out under mechanisms that guarantee an adequate level of data protection, in accordance with applicable regulations.",
            "privacy.s7.title": "7. Data Retention Period",
            "privacy.s7.body":
                "We retain your personal data for as long as you maintain an active account on the platform. Once you request deletion of your account, we will delete or anonymize your data within a reasonable period, unless there is a legal obligation requiring its retention for an additional period. Operational inventory data, historical batch records, and IoT device telemetry are retained as long as necessary for the operation of the service or as required by applicable regulations.",
            "privacy.s8.title": "8. Data Security",
            "privacy.s8.body":
                "We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, alteration, or disclosure. These measures include: password encryption using secure hashing algorithms; communications protected by TLS 1.2 or higher protocols; JWT token authentication for API access; IoT device authentication via API Keys and hardware unique identifier verification; and restricted data access by internal team members under least-privilege principles.",
            "privacy.s9.title": "9. User Rights",
            "privacy.s9.body":
                "In accordance with applicable data protection regulations, you have the following rights over your personal data: access (request information about what personal data we process); rectification (request correction of inaccurate or outdated data); deletion (request erasure of your data when no longer necessary); portability (receive your data in a structured, commonly used format); objection (object to the processing of your data in certain circumstances); and restriction (request restriction of processing in cases provided by law). To exercise any of these rights, you may contact us through the contact form available on the Restock website. We will respond to your request within a maximum of thirty business days.",
            "privacy.s10.title": "10. Cookies and Similar Technologies",
            "privacy.s10.body":
                "Restock uses cookies and similar technologies to ensure the proper functioning of the platform, remember your session preferences, and analyze general service usage. You may manage cookie preferences from your browser settings, although disabling certain essential cookies may affect platform functionality.",
            "privacy.s11.title": "11. Changes to This Policy",
            "privacy.s11.body":
                "We reserve the right to update this Privacy Policy at any time to reflect changes in our data processing practices or modifications to applicable regulations. When we make substantial changes, we will notify you through the platform or via the email address associated with your account at least seven days before the changes take effect.",
            "privacy.s12.title": "12. Contact",
            "privacy.s12.body":
                "If you have questions, concerns, or wish to exercise your rights regarding the processing of your personal data, you may contact us through the available channels on the Restock website or by writing to us directly from the platform's support form.",
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
            "nav.home": "INICIO",
            "nav.about": "NOSOTROS",
            "nav.benefits": "BENEFICIOS",
            "nav.testimonials": "TESTIMONIOS",
            "nav.questions": "PREGUNTAS",
            "nav.tutorial": "TUTORIAL",
            "nav.plans": "PLANES",
            "nav.download": "DESCARGAR",
            "hero.deviceLabel": "Dispositivo conectado",
            "hero.deviceName": "Harina — Sucursal Centro",
            "hero.stockLabel": "Stock actual",
            "hero.statTemp": "TEMP",
            "hero.statHumidity": "HUMEDAD",
            "hero.statStatus": "ESTADO",
            "hero.statStable": "Estable",
            "faq.q1": "¿Cómo se conectan las básculas inteligentes al panel?",
            "faq.a1": "Se conectan vía Wi-Fi al instante. Vincúlalas a tu red con nuestra app y comenzarán a sincronizar datos.",
            "faq.q2": "¿Funciona tanto para cocinas de restaurante como para tiendas retail?",
            "faq.a2": "Sí. Puedes configurar las básculas para descontar ingredientes según recetas (cocinas) o rastrear unidades individuales para kits (retail).",
            "faq.q3": "¿Puedo monitorear peso, temperatura y humedad simultáneamente?",
            "faq.a3": "Absolutamente. Cada báscula está equipada con una celda de carga, un termómetro y un higrómetro.",
            "faq.q4": "¿Qué pasa si se cae el internet?",
            "faq.a4": "Las básculas tienen memoria local. Almacenan los datos del sensor y sincronizan automáticamente cuando se restaura la conexión.",
            "faq.q5": "¿Cómo funciona la deducción automática de recetas?",
            "faq.a5": "Cuando se vende un plato, el sistema calcula la caída de peso esperada en la báscula y señala cualquier discrepancia.",
            "hero.eyebrow": "SISTEMA DE INVENTARIO INTELIGENTE",
            "hero.titleBefore": "Inventario ",
            "hero.titleAccent": "inteligente",
            "hero.titleAfter": " para restaurantes y retail",
            "hero.subtitle": "Seguimiento de inventario en tiempo real para negocios modernos.",
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
            "tos.title": "Términos y Condiciones de Uso",
            "tos.updated": "Última actualización: junio 2026 · Restock por UI-Topic",
            "tos.intro":
                "El presente Acuerdo de Licencia de Software como Servicio (SaaS) regula su acceso y uso de la plataforma Restock. Al registrarse o utilizar el servicio, acepta quedar vinculado por estos términos.",
            "tos.s1.title": "1. Partes del Acuerdo",
            "tos.s1.body":
                "El presente acuerdo se celebra entre UI-Topic (en adelante \"el Proveedor\") y el usuario registrado (en adelante \"el Cliente\"), quien accede y utiliza la plataforma Restock a través de cualquiera de sus canales: sitio web, aplicación web, aplicación móvil o dispositivos IoT asociados.",
            "tos.s2.title": "2. Descripción del Servicio",
            "tos.s2.body":
                "Restock es una plataforma de gestión de inventarios inteligente que combina software con sensores IoT para automatizar el control de stock, temperatura y humedad en restaurantes y tiendas retail de consumo masivo. El servicio incluye acceso a la aplicación web, la aplicación móvil, el panel de administración y, según el plan contratado, soporte técnico y acceso a la API de integración.",
            "tos.s3.title": "3. Planes de Suscripción y Facturación",
            "tos.s3.body":
                "El Cliente deberá seleccionar uno de los planes de suscripción disponibles (Basic, Premium o Pro) al momento del registro. Los cargos se procesarán de forma recurrente según la modalidad elegida (mensual, semestral o anual) mediante la pasarela de pagos Stripe. El Proveedor no almacena datos de tarjetas de crédito directamente; dicha información es procesada y resguardada por Stripe conforme a sus propios términos de seguridad. El Cliente es responsable de mantener actualizado su método de pago. Ante un fallo en el cobro de renovación, el Proveedor otorgará un período de gracia antes de restringir el acceso al servicio.",
            "tos.s4.title": "4. Cancelación y Renovación",
            "tos.s4.body":
                "El Cliente podrá cancelar la renovación automática de su suscripción en cualquier momento desde la sección de facturación de su cuenta. La cancelación no genera reembolso del período ya facturado; el acceso al servicio se mantendrá activo hasta la fecha de vencimiento del ciclo contratado. El Cliente podrá reactivar su suscripción antes del vencimiento sin perder la configuración de su cuenta.",
            "tos.s5.title": "5. Uso Aceptable",
            "tos.s5.body":
                "El Cliente se compromete a utilizar la plataforma exclusivamente para fines legítimos de gestión comercial e inventarios. Queda expresamente prohibido: intentar acceder de forma no autorizada a los sistemas del Proveedor, realizar ingeniería inversa sobre el software, compartir credenciales de acceso con terceros no autorizados, utilizar el servicio para fines ilegales o contrarios a la normativa vigente, y registrar datos falsos o maliciosos en el sistema.",
            "tos.s6.title": "6. Privacidad y Tratamiento de Datos",
            "tos.s6.body":
                "El Proveedor recopila y procesa datos del Cliente conforme a su Política de Privacidad, disponible en el sitio web. Los datos de inventario, ventas, dispositivos y métricas operativas son almacenados en servidores seguros bajo cifrado en tránsito (TLS 1.2/1.3) y en reposo. El Cliente conserva la titularidad de sus datos operativos. El Proveedor podrá utilizar datos agregados y anonimizados para mejorar el servicio, sin identificar al Cliente ni compartir información de forma individual con terceros sin consentimiento explícito, salvo requerimiento legal.",
            "tos.s7.title": "7. Dispositivos IoT",
            "tos.s7.body":
                "El Cliente que adquiera dispositivos físicos de Restock (balanzas inteligentes) acepta que dichos equipos transmiten datos de peso, temperatura y humedad a través de la red WiFi del establecimiento hacia los servidores del Proveedor. La instalación, mantenimiento y calibración periódica de los dispositivos son responsabilidad del Cliente. El Proveedor no se hace responsable por interrupciones del servicio derivadas de fallas en la conectividad de red del establecimiento, cortes de energía eléctrica o daños físicos al hardware ocasionados por el uso inadecuado.",
            "tos.s8.title": "8. Disponibilidad del Servicio",
            "tos.s8.body":
                "El Proveedor realizará sus mejores esfuerzos para mantener la disponibilidad de la plataforma. Podrán realizarse interrupciones programadas por mantenimiento, con notificación previa al Cliente cuando sea posible. El Proveedor no garantiza disponibilidad ininterrumpida y no será responsable por daños derivados de interrupciones no programadas del servicio.",
            "tos.s9.title": "9. Propiedad Intelectual",
            "tos.s9.body":
                "Todo el software, diseño, marca, nombre comercial, logotipos y contenido de la plataforma Restock son propiedad exclusiva de UI-Topic o sus licenciantes. El presente acuerdo no transfiere al Cliente ningún derecho de propiedad intelectual sobre el software. El Cliente recibe únicamente una licencia de uso limitada, no exclusiva, intransferible y revocable, para acceder al servicio durante la vigencia de su suscripción.",
            "tos.s10.title": "10. Limitación de Responsabilidad",
            "tos.s10.body":
                "En ningún caso el Proveedor será responsable por daños indirectos, incidentales, especiales o consecuentes derivados del uso o la imposibilidad de uso del servicio, incluyendo pérdidas de ingresos, pérdida de datos o interrupción del negocio. La responsabilidad máxima del Proveedor ante el Cliente no excederá el monto total pagado por el servicio en los tres meses previos al evento que originó el reclamo.",
            "tos.s11.title": "11. Modificaciones al Servicio y a los Términos",
            "tos.s11.body":
                "El Proveedor se reserva el derecho de modificar las funcionalidades del servicio, los planes disponibles y los presentes Términos y Condiciones. Las modificaciones serán notificadas al Cliente con al menos 15 días de anticipación mediante correo electrónico o aviso dentro de la plataforma. El uso continuado del servicio tras la notificación implica la aceptación de los nuevos términos.",
            "tos.s12.title": "12. Terminación",
            "tos.s12.body":
                "El Proveedor podrá suspender o cancelar el acceso del Cliente al servicio sin previo aviso en caso de violación de los presentes términos, uso fraudulento, impago reiterado o por requerimiento de autoridad competente. El Cliente podrá solicitar la eliminación de su cuenta y datos en cualquier momento desde la configuración de su perfil.",
            "tos.s13.title": "13. Ley Aplicable y Resolución de Controversias",
            "tos.s13.body":
                "El presente acuerdo se rige por las leyes de la República del Perú. Cualquier controversia que no pueda resolverse de forma amistosa entre las partes será sometida a los tribunales competentes de la ciudad de Lima.",
            "tos.s14.title": "14. Contacto",
            "tos.s14.body":
                "Para consultas relacionadas con estos Términos y Condiciones, el Cliente puede comunicarse con el equipo de UI-Topic a través del formulario de contacto disponible en el sitio web oficial de Restock.",
            "privacy.title": "Política de Privacidad",
            "privacy.updated":
                "Última actualización: Junio de 2026 · Restock por UI-Topic",
            "privacy.intro":
                "En UI-Topic, desarrolladores de la plataforma Restock, nos comprometemos a proteger la privacidad de nuestros usuarios y a tratar sus datos personales con responsabilidad, transparencia y seguridad. Esta Política de Privacidad describe qué información recopilamos, cómo la utilizamos, con quién la compartimos y qué derechos tienen los usuarios sobre sus datos.",
            "privacy.s1.title": "1. Responsable del tratamiento de datos",
            "privacy.s1.body":
                "El responsable del tratamiento de los datos personales recopilados a través de la plataforma Restock es UI-Topic, equipo desarrollador del producto. Para cualquier consulta relacionada con el tratamiento de tus datos, puedes contactarnos a través del formulario disponible en nuestro sitio web.",
            "privacy.s2.title": "2. Datos que recopilamos",
            "privacy.s2.body":
                "Recopilamos la siguiente información cuando utilizas nuestra plataforma: datos de registro y cuenta (nombre, apellido, correo electrónico, contraseña almacenada de forma encriptada, rol del usuario y datos del negocio registrado); datos del negocio (nombre comercial, RUC o identificador fiscal, dirección principal, categorías de productos gestionados e imágenes del negocio o sucursales); datos operativos (sucursales, lotes de inventario, suministros, dispositivos IoT registrados, ventas, recetas y kits); datos de dispositivos IoT (lecturas de peso, temperatura y humedad, identificadores únicos de hardware como la dirección MAC); datos técnicos y de uso (dirección IP, tipo de dispositivo, sistema operativo, navegador, páginas visitadas y tiempo de sesión); e imágenes de perfil almacenadas en servicios externos de gestión de medios.",
            "privacy.s3.title": "3. Finalidad del tratamiento de datos",
            "privacy.s3.body":
                "Utilizamos tus datos personales para las siguientes finalidades: crear y gestionar tu cuenta en Restock; habilitar las funcionalidades de gestión de inventario, control de stock, ventas y monitoreo de dispositivos IoT; enviar notificaciones sobre eventos críticos del inventario como alertas de stock bajo, exceso de stock o discrepancias detectadas; procesar y gestionar el pago de suscripciones; mejorar la experiencia de usuario mediante el análisis de patrones de uso; cumplir con obligaciones legales aplicables; y garantizar la seguridad e integridad de la plataforma previniendo accesos no autorizados.",
            "privacy.s4.title": "4. Base legal para el tratamiento",
            "privacy.s4.body":
                "El tratamiento de tus datos se sustenta en las siguientes bases legales: ejecución de un contrato (el tratamiento es necesario para cumplir los términos del servicio que aceptas al registrarte); consentimiento (en casos donde solicitemos tu autorización expresa, como para comunicaciones opcionales); interés legítimo (para garantizar la seguridad de la plataforma y mejorar nuestros servicios); y obligación legal (cuando el tratamiento sea requerido por la normativa vigente).",
            "privacy.s5.title": "5. Compartición de datos con terceros",
            "privacy.s5.body":
                "Restock no vende ni cede tus datos personales a terceros con fines comerciales. Para el correcto funcionamiento de la plataforma, compartimos datos con los siguientes proveedores bajo acuerdos de confidencialidad: Cloudinary (almacenamiento y gestión de imágenes), Stripe (procesamiento seguro de pagos), Firebase Cloud Messaging (notificaciones push), Resend (correos transaccionales), MongoDB Atlas (base de datos en la nube), Microsoft Azure (infraestructura backend) y Vercel (alojamiento de aplicaciones web). Todos nuestros proveedores están sujetos a políticas de privacidad propias y son seleccionados bajo criterios de seguridad y confiabilidad.",
            "privacy.s6.title": "6. Transferencias internacionales de datos",
            "privacy.s6.body":
                "Algunos de los proveedores mencionados operan en servidores ubicados fuera del país del usuario. En todos los casos, nos aseguramos de que dichas transferencias se realicen bajo mecanismos que garanticen un nivel adecuado de protección de datos, en conformidad con la normativa aplicable.",
            "privacy.s7.title": "7. Plazo de conservación de los datos",
            "privacy.s7.body":
                "Conservamos tus datos personales durante el tiempo que mantengas una cuenta activa en la plataforma. Una vez que solicites la eliminación de tu cuenta, procederemos a eliminar o anonimizar tus datos en un plazo razonable, salvo que exista una obligación legal que requiera su conservación por un período adicional. Los datos operativos del inventario, registros históricos de lotes y telemetría de dispositivos IoT se conservan mientras sean necesarios para el funcionamiento del servicio o durante el tiempo que indique la normativa aplicable.",
            "privacy.s8.title": "8. Seguridad de los datos",
            "privacy.s8.body":
                "Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos contra accesos no autorizados, pérdida, alteración o divulgación. Entre las medidas adoptadas se incluyen: cifrado de contraseñas mediante algoritmos de hashing seguros; comunicaciones protegidas mediante protocolos TLS 1.2 o superior; autenticación mediante tokens JWT para el acceso a las APIs; autenticación de dispositivos IoT mediante API Keys y verificación de identificadores únicos de hardware; y acceso restringido a los datos por parte del equipo interno bajo principios de mínimo privilegio.",
            "privacy.s9.title": "9. Derechos del usuario",
            "privacy.s9.body":
                "De acuerdo con la normativa de protección de datos aplicable, tienes los siguientes derechos sobre tus datos personales: acceso (solicitar información sobre qué datos personales tuyos tratamos); rectificación (solicitar la corrección de datos inexactos o desactualizados); eliminación (solicitar la supresión de tus datos cuando ya no sean necesarios); portabilidad (recibir tus datos en un formato estructurado y de uso común); oposición (oponerte al tratamiento de tus datos en determinadas circunstancias); y limitación (solicitar la restricción del tratamiento en casos previstos por la normativa). Para ejercer cualquiera de estos derechos, puedes contactarnos a través del formulario de contacto disponible en el sitio web de Restock. Responderemos tu solicitud en un plazo máximo de treinta días hábiles.",
            "privacy.s10.title": "10. Cookies y tecnologías similares",
            "privacy.s10.body":
                "Restock utiliza cookies y tecnologías similares para garantizar el correcto funcionamiento de la plataforma, recordar tus preferencias de sesión y analizar el uso general del servicio. Puedes gestionar las preferencias de cookies desde la configuración de tu navegador, aunque la desactivación de ciertas cookies esenciales puede afectar el funcionamiento de la plataforma.",
            "privacy.s11.title": "11. Cambios en esta política",
            "privacy.s11.body":
                "Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento para reflejar cambios en nuestras prácticas de tratamiento de datos o modificaciones en la normativa aplicable. Cuando realicemos cambios sustanciales, te notificaremos a través de la plataforma o mediante el correo electrónico asociado a tu cuenta con al menos siete días de antelación antes de que los cambios entren en vigor.",
            "privacy.s12.title": "12. Contacto",
            "privacy.s12.body":
                "Si tienes preguntas, dudas o deseas ejercer tus derechos en relación con el tratamiento de tus datos personales, puedes comunicarte con nosotros a través de los canales de contacto disponibles en el sitio web de Restock o escribiéndonos directamente desde el formulario de soporte de la plataforma.",
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
