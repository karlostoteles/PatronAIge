export type Language = 'en' | 'es' | 'zh';

export const translations: Record<Language, Record<string, string>> = {
    en: {
        // Nav
        'nav.ticker': 'COHORT RUNNING NOW!',
        'nav.joinWhitelist': 'Join Whitelist',

        // Hero
        'hero.ticker': 'NOW ACCEPTING Q2 APPLICATIONS',
        'hero.title1': 'The Age of',
        'hero.title2': 'Technical Alignment.',
        'hero.subtitle': 'We bridge the gap between frontier AI compute and high-leverage builders. Choose your path to underwrite the future.',
        'hero.builder': 'I am a Builder',
        'hero.patron': 'I am a Patron',

        // The Great Shift
        'shift.title': 'The Great Shift',
        'shift.body': 'AI compute has evolved from a variable R&D expense to the',
        'shift.highlight': 'Primary Fixed Cost',
        'shift.bodyEnd': 'of entrepreneurship.',
        'shift.note': 'In the previous era, founders paid for people. Today, they pay for inference. The collision of these forces creates a financing gap that PatronAIge was built to bridge.',

        // Problem
        'problem.title': 'AI Builders Are',
        'problem.titleBr': 'Capital-Constrained',
        'problem.body': 'Modern AI builders rely on frontier models as their development workforce. But serious iteration requires serious compute budgets.',
        'problem.note': 'Many high-potential founders are blocked not by ideas — but by access to sustained AI compute. Financing should be as fluid as the tokens you consume.',

        // Risk Reversal
        'risk.title': 'Risk Reversal',
        'risk.subtitle': 'We believe in removing barriers, not creating them.',
        'risk.noPersonal': 'No Personal Guarantees',
        'risk.noPersonalDesc': 'Your home, savings, and personal assets are never at risk. Period.',
        'risk.nonRecourse': 'Non-Recourse Structure',
        'risk.nonRecourseDesc': 'If the project doesn\'t generate revenue, you owe nothing. We lose our compute.',
        'risk.noEquity': 'No Equity Dilution',
        'risk.noEquityDesc': 'We don\'t take board seats or equity. Upside participation only.',

        // Network
        'syndicate.title': 'Our',
        'syndicate.titleBr': 'Network',
        'syndicate.subtitle': "We've brought together a tight group of VCs, GPU providers, and technical angels who actually understand what it takes to ship AI — and want to back the people doing it.",
        'syndicate.institutional': 'Institutional Partners',
        'syndicate.institutionalDesc': 'Family offices and AI-focused funds who think long-term.',
        'syndicate.compute': 'Compute Partners',
        'syndicate.computeDesc': 'Direct access to H100/H200 clusters and frontier API credits.',

        // Partner Note
        'partner.header': 'A NOTE FROM THE FOUNDER',
        'partner.quote': '"Most venture capital is a debt of equity. We believe the future of AI isn\'t built on interest rates, but on',
        'partner.highlight': 'Technical Alignment',
        'partner.quoteEnd': '. We aren\'t just your financiers; we are your compute infrastructure partners. If you don\'t scale, we don\'t win. That is the only \'Green Flag\' that matters."',
        'partner.name': 'Carlos de la Figuera',
        'partner.role': 'Founder, PatronAIge',

        // Partnership Structures
        'structures.title': 'Partnership Structures',
        'structures.subtitle': 'We participate in your upside through technical alignment, tailored to your specific roadmap.',
        'structures.revShare': 'Revenue Share',
        'structures.revShareDesc': 'Success-aligned percentage of project revenue until a predefined multiple is achieved.',
        'structures.structured': 'Structured Upside',
        'structures.structuredDesc': 'Custom participation agreements tailored to your growth trajectory and milestone goals.',
        'structures.warrants': 'Project Warrants',
        'structures.warrantsDesc': 'Case-by-case project-level warrants for long-term alignment between PatronAIge and founders.',

        // How It Works
        'how.title': 'High-Trust Process',
        'how.step1': 'Apply',
        'how.step1Desc': 'Detail your project, model needs, and roadmap.',
        'how.step2': 'Underwrite',
        'how.step2Desc': 'We assess leverage potential and technical viability.',
        'how.step3': 'Structure',
        'how.step3Desc': 'Custom compute-for-upside agreement for your needs.',
        'how.step4': 'Build',
        'how.step4Desc': 'Focus on execution. We both win on growth.',

        // FAQ
        'faq.title': 'Common Questions',
        'faq.q1': "How does the 'Upside' model work?",
        'faq.a1': 'Instead of taking a flat interest rate or high equity stakes, we agree on a revenue share or upside participation structure. We only win when your project scales and generates revenue above a certain threshold.',
        'faq.q2': 'What models can I use?',
        'faq.a2': 'We provide credits for all frontier providers (OpenAI, Anthropic, Google, etc.) as well as dedicated GPU compute for training and inference of open-source models.',
        'faq.q3': 'Is this a debt instrument?',
        'faq.a3': 'No. This is structural financing designed as a partnership. There are no personal guarantees or traditional interest payments. If the project fails, we lose our compute investment.',
        'faq.q4': 'How long is the manual review process?',
        'faq.a4': 'We typically respond to initial whitelist requests within 48-72 hours. Technical underwriting for selected projects takes 1-2 weeks.',

        // Who This Is For
        'who.title': 'Who This Is For',
        'who.item1': 'AI-native solo builders',
        'who.item2': 'Technical founders scaling model-heavy products',
        'who.item3': 'Crypto x AI experimenters',
        'who.item4': 'Teams blocked by compute budgets',
        'who.notFor': 'Not for:',
        'who.not1': '• Hobby projects',
        'who.not2': '• Idea-stage without execution capacity',
        'who.not3': '• Builders unwilling to exchange upside',
        'who.privatePilot': 'PRIVATE PILOT: We onboard a limited number of builders per cohort.',

        // Application Form
        'apply.joinTitle': 'Get Started',
        'apply.joinSubtitle': 'Choose your path to technically-aligned growth.',
        'apply.builderCard': 'Builder',
        'apply.builderCardDesc': 'Request compute credits to scale your models in exchange for revenue share or upside.',
        'apply.builderCardCta': 'Request Review',
        'apply.patronCard': 'Patron',
        'apply.patronCardDesc': 'Deploy capital to fund high-leverage builders and secure non-dilutive upside participation.',
        'apply.patronCardCta': 'Investor Inquiries',
        'apply.backToSelection': '← Back to Selection',
        'apply.builderOnboarding': 'Builder Onboarding',
        'apply.patronInquiry': 'Patron Inquiry',
        'apply.builderFormDesc': 'Request compute financing for your AI project.',
        'apply.patronFormDesc': 'Get in touch to deploy capital into the PatronAIge network.',
        'apply.submitBuilder': 'Submit Review Request',
        'apply.submitPatron': 'Submit Investor Inquiry',

        // Builder form fields
        'field.name': 'Name',
        'field.projectName': 'Project Name',
        'field.oneLineDesc': 'One-line description',
        'field.stage': 'Stage',
        'field.currentRevenue': 'Current revenue',
        'field.monthlyCompute': 'Monthly compute estimate ($)',
        'field.modelsUsed': 'Models used',
        'field.milestone': 'What milestone will compute unlock?',
        'field.upside': 'What upside are you willing to offer?',
        'field.timeline': 'Timeline to first revenue',

        // Patron form fields
        'field.fullName': 'Full Name',
        'field.firm': 'Firm / Family Office',
        'field.email': 'Email Address',
        'field.investCapacity': 'Investment Capacity',
        'field.investFocus': 'Investment Focus',
        'field.strategy': 'Tell us about your strategy',
        'field.preferredUpside': 'Preferred upside participation',

        // Success
        'success.title': 'Request Received',
        'success.builderMsg': "Thank you for reaching out. We've added your details to the Builder Whitelist. A partner will reach out shortly for a technical deep-dive.",
        'success.patronMsg': "Thank you for reaching out. We've added your details to the Investor Review Queue. A partner will reach out shortly for a technical deep-dive.",
        'success.backHome': 'Back to Home',

        // Patron Dashboard
        'dashboard.subtitle': 'Real-Time Technical Alpha',
        'dashboard.title': 'Patron Terminal',

        // Footer
        'footer.tagline': 'High-Signal Compute Financing',
        'footer.copyright': '© 2026 PatronAIge. All rights reserved.',

        // Language Modal
        'lang.select': 'Language',
    },

    es: {
        // Nav
        'nav.ticker': '¡COHORTE EN MARCHA!',
        'nav.joinWhitelist': 'Unirse a la Lista',

        // Hero
        'hero.ticker': 'ACEPTANDO SOLICITUDES Q2',
        'hero.title1': 'La Era de la',
        'hero.title2': 'Alineación Técnica.',
        'hero.subtitle': 'Conectamos la computación AI de frontera con builders de alto impacto. Elige tu camino para financiar el futuro.',
        'hero.builder': 'Soy un Builder',
        'hero.patron': 'Soy un Patrón',

        // The Great Shift
        'shift.title': 'El Gran Cambio',
        'shift.body': 'La computación AI ha evolucionado de un gasto variable de I+D al',
        'shift.highlight': 'Coste Fijo Principal',
        'shift.bodyEnd': 'del emprendimiento.',
        'shift.note': 'En la era anterior, los founders pagaban por personas. Hoy pagan por inferencia. La colisión de estas fuerzas crea una brecha de financiación que PatronAIge fue construido para cerrar.',

        // Problem
        'problem.title': 'Los Builders de AI Están',
        'problem.titleBr': 'Limitados por Capital',
        'problem.body': 'Los builders modernos de AI dependen de modelos de frontera como su fuerza de desarrollo. Pero la iteración seria requiere presupuestos serios de computación.',
        'problem.note': 'Muchos founders de alto potencial están bloqueados no por ideas, sino por acceso a computación AI sostenida. La financiación debería ser tan fluida como los tokens que consumes.',

        // Risk Reversal
        'risk.title': 'Reversión de Riesgo',
        'risk.subtitle': 'Creemos en eliminar barreras, no en crearlas.',
        'risk.noPersonal': 'Sin Garantías Personales',
        'risk.noPersonalDesc': 'Tu hogar, ahorros y activos personales nunca están en riesgo. Punto.',
        'risk.nonRecourse': 'Estructura Sin Recurso',
        'risk.nonRecourseDesc': 'Si el proyecto no genera ingresos, no debes nada. Perdemos nuestra computación.',
        'risk.noEquity': 'Sin Dilución de Equity',
        'risk.noEquityDesc': 'No tomamos asientos en el consejo ni equity. Solo participación en el upside.',

        // Network
        'syndicate.title': 'Nuestra',
        'syndicate.titleBr': 'Red',
        'syndicate.subtitle': 'Hemos reunido un grupo sólido de VCs, proveedores de GPU y ángeles técnicos que realmente entienden lo que significa lanzar AI — y quieren respaldar a quienes lo hacen.',
        'syndicate.institutional': 'Socios Institucionales',
        'syndicate.institutionalDesc': 'Family offices y fondos enfocados en AI que piensan a largo plazo.',
        'syndicate.compute': 'Socios de Computación',
        'syndicate.computeDesc': 'Acceso directo a clusters H100/H200 y créditos API de frontera.',

        // Partner Note
        'partner.header': 'UNA NOTA DEL FUNDADOR',
        'partner.quote': '"La mayoría del capital de riesgo es una deuda de equity. Creemos que el futuro de la AI no se construye con tasas de interés, sino con',
        'partner.highlight': 'Alineación Técnica',
        'partner.quoteEnd': '. No somos solo tus financiadores; somos tus socios de infraestructura de computación. Si no escalas, nosotros no ganamos. Esa es la única \'Green Flag\' que importa."',
        'partner.name': 'Carlos de la Figuera',
        'partner.role': 'Fundador, PatronAIge',

        // Partnership Structures
        'structures.title': 'Estructuras de Asociación',
        'structures.subtitle': 'Participamos en tu upside a través de alineación técnica, adaptada a tu roadmap específico.',
        'structures.revShare': 'Revenue Share',
        'structures.revShareDesc': 'Porcentaje de ingresos del proyecto alineado con el éxito hasta alcanzar un múltiplo predefinido.',
        'structures.structured': 'Upside Estructurado',
        'structures.structuredDesc': 'Acuerdos de participación personalizados adaptados a tu trayectoria de crecimiento y objetivos.',
        'structures.warrants': 'Warrants de Proyecto',
        'structures.warrantsDesc': 'Warrants a nivel de proyecto caso por caso para la alineación a largo plazo entre PatronAIge y founders.',

        // How It Works
        'how.title': 'Proceso de Alta Confianza',
        'how.step1': 'Aplicar',
        'how.step1Desc': 'Detalla tu proyecto, necesidades de modelo y roadmap.',
        'how.step2': 'Evaluar',
        'how.step2Desc': 'Evaluamos el potencial de apalancamiento y viabilidad técnica.',
        'how.step3': 'Estructurar',
        'how.step3Desc': 'Acuerdo personalizado de computación por upside para tus necesidades.',
        'how.step4': 'Construir',
        'how.step4Desc': 'Enfócate en la ejecución. Ambos ganamos con el crecimiento.',

        // FAQ
        'faq.title': 'Preguntas Frecuentes',
        'faq.q1': '¿Cómo funciona el modelo de \'Upside\'?',
        'faq.a1': 'En lugar de tomar una tasa de interés fija o participaciones altas de equity, acordamos una estructura de revenue share o participación en el upside. Solo ganamos cuando tu proyecto escala y genera ingresos por encima de cierto umbral.',
        'faq.q2': '¿Qué modelos puedo usar?',
        'faq.a2': 'Proporcionamos créditos para todos los proveedores de frontera (OpenAI, Anthropic, Google, etc.) así como computación GPU dedicada para entrenamiento e inferencia de modelos open-source.',
        'faq.q3': '¿Es un instrumento de deuda?',
        'faq.a3': 'No. Es financiación estructural diseñada como una asociación. No hay garantías personales ni pagos de intereses tradicionales. Si el proyecto fracasa, perdemos nuestra inversión en computación.',
        'faq.q4': '¿Cuánto tarda el proceso de revisión manual?',
        'faq.a4': 'Normalmente respondemos a solicitudes iniciales en 48-72 horas. La evaluación técnica para proyectos seleccionados tarda 1-2 semanas.',

        // Who This Is For
        'who.title': 'Para Quién Es',
        'who.item1': 'Builders de AI independientes',
        'who.item2': 'Founders técnicos escalando productos con modelos',
        'who.item3': 'Experimentadores de Crypto x AI',
        'who.item4': 'Equipos bloqueados por presupuestos de computación',
        'who.notFor': 'No es para:',
        'who.not1': '• Proyectos hobby',
        'who.not2': '• Fase idea sin capacidad de ejecución',
        'who.not3': '• Builders que no estén dispuestos a compartir upside',
        'who.privatePilot': 'PILOTO PRIVADO: Incorporamos un número limitado de builders por cohorte.',

        // Application Form
        'apply.joinTitle': 'Empieza Aquí',
        'apply.joinSubtitle': 'Elige tu camino hacia el crecimiento técnicamente alineado.',
        'apply.builderCard': 'Builder',
        'apply.builderCardDesc': 'Solicita créditos de computación para escalar tus modelos a cambio de revenue share o upside.',
        'apply.builderCardCta': 'Solicitar Revisión',
        'apply.patronCard': 'Patrón',
        'apply.patronCardDesc': 'Despliega capital para financiar builders de alto impacto y asegura participación no dilutiva.',
        'apply.patronCardCta': 'Consultas de Inversores',
        'apply.backToSelection': '← Volver a la Selección',
        'apply.builderOnboarding': 'Onboarding de Builder',
        'apply.patronInquiry': 'Consulta de Inversor',
        'apply.builderFormDesc': 'Solicita financiación de computación para tu proyecto de AI.',
        'apply.patronFormDesc': 'Ponte en contacto para desplegar capital en la red PatronAIge.',
        'apply.submitBuilder': 'Enviar Solicitud',
        'apply.submitPatron': 'Enviar Consulta',

        // Builder form fields
        'field.name': 'Nombre',
        'field.projectName': 'Nombre del Proyecto',
        'field.oneLineDesc': 'Descripción en una línea',
        'field.stage': 'Etapa',
        'field.currentRevenue': 'Ingresos actuales',
        'field.monthlyCompute': 'Estimación mensual de computación ($)',
        'field.modelsUsed': 'Modelos utilizados',
        'field.milestone': '¿Qué hito desbloqueará la computación?',
        'field.upside': '¿Qué upside estás dispuesto a ofrecer?',
        'field.timeline': 'Tiempo hasta primeros ingresos',

        // Patron form fields
        'field.fullName': 'Nombre Completo',
        'field.firm': 'Firma / Family Office',
        'field.email': 'Correo Electrónico',
        'field.investCapacity': 'Capacidad de Inversión',
        'field.investFocus': 'Enfoque de Inversión',
        'field.strategy': 'Cuéntanos sobre tu estrategia',
        'field.preferredUpside': 'Participación de upside preferida',

        // Success
        'success.title': 'Solicitud Recibida',
        'success.builderMsg': 'Gracias por contactarnos. Hemos añadido tus detalles a la Lista de Builders. Un socio se pondrá en contacto contigo para una revisión técnica.',
        'success.patronMsg': 'Gracias por contactarnos. Hemos añadido tus detalles a la Cola de Revisión de Inversores. Un socio se pondrá en contacto contigo para una revisión técnica.',
        'success.backHome': 'Volver al Inicio',

        // Patron Dashboard
        'dashboard.subtitle': 'Alfa Técnico en Tiempo Real',
        'dashboard.title': 'Terminal del Patrón',

        // Footer
        'footer.tagline': 'Financiación de Computación de Alta Señal',
        'footer.copyright': '© 2026 PatronAIge. Todos los derechos reservados.',

        // Language Modal
        'lang.select': 'Idioma',
    },

    zh: {
        // Nav
        'nav.ticker': '队列正在进行中！',
        'nav.joinWhitelist': '加入白名单',

        // Hero
        'hero.ticker': '正在接受第二季度申请',
        'hero.title1': '技术对齐',
        'hero.title2': '的时代。',
        'hero.subtitle': '我们连接前沿AI算力与高杠杆构建者。选择你的路径，为未来提供担保。',
        'hero.builder': '我是构建者',
        'hero.patron': '我是赞助人',

        // The Great Shift
        'shift.title': '伟大转变',
        'shift.body': 'AI算力已从可变的研发费用演变为创业的',
        'shift.highlight': '主要固定成本',
        'shift.bodyEnd': '。',
        'shift.note': '在过去的时代，创始人付钱雇人。今天，他们付钱买推理。这些力量的碰撞创造了PatronAIge要弥合的融资缺口。',

        // Problem
        'problem.title': 'AI构建者正',
        'problem.titleBr': '面临资本限制',
        'problem.body': '现代AI构建者依赖前沿模型作为开发劳动力。但严肃的迭代需要充足的算力预算。',
        'problem.note': '许多高潜力创始人被阻碍的不是想法，而是对持续AI算力的访问。融资应该像你消耗的token一样流畅。',

        // Risk Reversal
        'risk.title': '风险逆转',
        'risk.subtitle': '我们相信消除障碍，而不是创造障碍。',
        'risk.noPersonal': '无个人担保',
        'risk.noPersonalDesc': '你的住房、储蓄和个人资产永远不会面临风险。',
        'risk.nonRecourse': '无追索权结构',
        'risk.nonRecourseDesc': '如果项目不产生收入，你不欠任何东西。我们损失算力。',
        'risk.noEquity': '无股权稀释',
        'risk.noEquityDesc': '我们不要求董事会席位或股权。仅参与收益。',

        // Network
        'syndicate.title': '我们的',
        'syndicate.titleBr': '网络',
        'syndicate.subtitle': '我们汇聚了一群真正懂AI的风投、GPU提供商和技术天使——他们想要支持真正在做事的人。',
        'syndicate.institutional': '机构合作伙伴',
        'syndicate.institutionalDesc': '着眼长期的Family Office和AI专注基金。',
        'syndicate.compute': '算力合作伙伴',
        'syndicate.computeDesc': '直接访问H100/H200集群和前沿API额度。',

        // Partner Note
        'partner.header': '创始人寄语',
        'partner.quote': '"大多数风险投资是股权的债务。我们相信AI的未来不是建立在利率上，而是建立在',
        'partner.highlight': '技术对齐',
        'partner.quoteEnd': '上。我们不仅是你的资方；我们是你的算力基础设施伙伴。如果你不扩展，我们就不会赢。这是唯一重要的\'Green Flag\'。"',
        'partner.name': 'Carlos de la Figuera',
        'partner.role': '创始人，PatronAIge辛迪加',

        // Partnership Structures
        'structures.title': '合作结构',
        'structures.subtitle': '我们通过技术对齐参与你的收益，根据你的具体路线图量身定制。',
        'structures.revShare': '收入分成',
        'structures.revShareDesc': '与成功对齐的项目收入百分比，直到达到预定义的倍数。',
        'structures.structured': '结构化收益',
        'structures.structuredDesc': '根据你的增长轨迹和里程碑目标量身定制的参与协议。',
        'structures.warrants': '项目认股权',
        'structures.warrantsDesc': '逐案的项目级认股权，实现PatronAIge与创始人之间的长期对齐。',

        // How It Works
        'how.title': '高信任流程',
        'how.step1': '申请',
        'how.step1Desc': '详细说明你的项目、模型需求和路线图。',
        'how.step2': '评估',
        'how.step2Desc': '评估杠杆潜力和技术可行性。',
        'how.step3': '构建架构',
        'how.step3Desc': '为你的需求定制算力换收益协议。',
        'how.step4': '构建',
        'how.step4Desc': '专注于执行。我们共同在增长中获胜。',

        // FAQ
        'faq.title': '常见问题',
        'faq.q1': "'收益'模式如何运作？",
        'faq.a1': '我们不收取固定利率或高额股权，而是就收入分成或收益参与结构达成一致。只有当你的项目扩展并产生超过一定门槛的收入时，我们才会获利。',
        'faq.q2': '我可以使用哪些模型？',
        'faq.a2': '我们为所有前沿供应商（OpenAI、Anthropic、Google等）提供额度，以及用于训练和推理开源模型的专用GPU算力。',
        'faq.q3': '这是一种债务工具吗？',
        'faq.a3': '不是。这是一种设计为合作关系的结构化融资。没有个人担保或传统利息支付。如果项目失败，我们损失算力投资。',
        'faq.q4': '人工审核流程需要多长时间？',
        'faq.a4': '我们通常在48-72小时内回复初始白名单请求。选定项目的技术评估需要1-2周。',

        // Who This Is For
        'who.title': '适合人群',
        'who.item1': 'AI原生独立构建者',
        'who.item2': '正在扩展模型密集型产品的技术创始人',
        'who.item3': 'Crypto x AI实验者',
        'who.item4': '被算力预算阻碍的团队',
        'who.notFor': '不适合：',
        'who.not1': '• 业余爱好项目',
        'who.not2': '• 没有执行能力的想法阶段',
        'who.not3': '• 不愿意交换收益的构建者',
        'who.privatePilot': '私人试点：我们每个队列招募有限数量的构建者。',

        // Application Form
        'apply.joinTitle': '开始',
        'apply.joinSubtitle': '选择你的技术对齐增长路径。',
        'apply.builderCard': '构建者',
        'apply.builderCardDesc': '申请算力额度来扩展你的模型，以换取收入分成或收益。',
        'apply.builderCardCta': '请求审核',
        'apply.patronCard': '赞助人',
        'apply.patronCardDesc': '部署资本资助高杠杆构建者，确保非稀释性收益参与。',
        'apply.patronCardCta': '投资者咨询',
        'apply.backToSelection': '← 返回选择',
        'apply.builderOnboarding': '构建者入驻',
        'apply.patronInquiry': '赞助人咨询',
        'apply.builderFormDesc': '为你的AI项目申请算力融资。',
        'apply.patronFormDesc': '联系我们，将资本部署到PatronAIge网络。',
        'apply.submitBuilder': '提交审核请求',
        'apply.submitPatron': '提交投资者咨询',

        // Builder form fields
        'field.name': '姓名',
        'field.projectName': '项目名称',
        'field.oneLineDesc': '一句话描述',
        'field.stage': '阶段',
        'field.currentRevenue': '当前收入',
        'field.monthlyCompute': '每月算力预算 ($)',
        'field.modelsUsed': '使用的模型',
        'field.milestone': '算力将解锁什么里程碑？',
        'field.upside': '你愿意提供什么收益？',
        'field.timeline': '到首次收入的时间线',

        // Patron form fields
        'field.fullName': '全名',
        'field.firm': '公司 / Family Office',
        'field.email': '电子邮件地址',
        'field.investCapacity': '投资能力',
        'field.investFocus': '投资重点',
        'field.strategy': '告诉我们你的策略',
        'field.preferredUpside': '首选收益参与方式',

        // Success
        'success.title': '请求已收到',
        'success.builderMsg': '感谢你的联系。我们已将你的详细信息添加到构建者白名单。合伙人将很快联系你进行技术深入讨论。',
        'success.patronMsg': '感谢你的联系。我们已将你的详细信息添加到投资者审核队列。合伙人将很快联系你进行技术深入讨论。',
        'success.backHome': '返回首页',

        // Patron Dashboard
        'dashboard.subtitle': '实时技术Alpha',
        'dashboard.title': '赞助人终端',

        // Footer
        'footer.tagline': '高信号算力融资',
        'footer.copyright': '© 2026 PatronAIge. 保留所有权利。',

        // Language Modal
        'lang.select': '语言',
    },
};
