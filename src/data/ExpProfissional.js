import bgEncarte from '../assets/image/projeto/Criador-de-encarte.jpg';
import bgCalcIMC from '../assets/image/projeto/imgCalc.webp';
import imgDefault from '../assets/image/bgScript.webp';
import bgSorteios from '../assets/image/projeto/sorteios.jpg';


export const projetos = [
    {
        nome: 'SORTEIO DE PRÊMIOS',
        url: 'https://sorteios-robyntec.vercel.app',
        img: `${bgSorteios}`,
        descricao: `Desenvolvi uma plataforma de sorteios online inovadora, com funcionalidades automatizadas e integradas, baseada no modelo SaaS (Software as a Service). O sistema permite que os usuários adquiram cotas de sorteios por meio de pagamentos via PIX. Após a confirmação do pagamento, as cotas são sorteadas automaticamente, e o resultado é exibido em tempo real para o comprador, informando se a cota foi premiada. A plataforma também oferece um painel administrativo completo, onde os usuários podem gerenciar seus sorteios, visualizar transações e realizar saques automáticos diretamente para suas contas bancárias, tudo de forma segura e eficiente. Essa solução, baseada na nuvem, proporciona uma experiência ágil, transparente e escalável, atendendo às necessidades de empresas e usuários de forma prática e eficiente.`,
        urlGithub: '',
        page: 'https://sorteios-robyntec.vercel.app',
        skills: ["SaaS", 'React com Vite', 'Node.js', 'PostgreSQL', 'Bootstrap', "styled-components", "Api Pix", "e-commerce"]
    },
    {
        nome: 'ERP PARA GESTÃO DE FROTAS',
        img: `${imgDefault}`,
        descricao: `Sistema ERP desenvolvido para a Atum do Brasil, com módulos de: Controle de veículos (cadastro, manutenção, histórico), Gestão de custos (combustível, peças, serviços), Relatórios personalizados (Google Charts ou similar) e Integração com sistemas legados da empresa.
        `,
        skills: ['React.js', 'Node.js', 'Bootstrap', 'ERP', 'styled-components'] 
    },
    {
        nome: 'CRIADOR DE ENCARTE',
        url: '',
        img: `${bgEncarte}`,
        descricao: 'Desenvolvimento de uma aplicação web que permite aos usuários criar encartes digitais personalizados para promover produtos, serviços ou eventos. A aplicação oferece uma interface intuitiva e fácil de usar. Os usuários podem personalizar o layout e o design do encarte sem a necessidade de habilidades técnicas avançadas.',
        urlGithub: 'https://github.com/robson-magalhaes/CriarEncarte',
        page: 'https://robson-magalhaes.github.io/CriarEncarte/',
        skills: ['JavaScript', 'Html', 'CSS', 'Bootstrap']
    },
    {
        nome: 'CALCULADORA IMC',
        url: '',
        img: `${bgCalcIMC}`,
        descricao: 'Desenvolvi essa aplicação de calculadora de IMC utilizando a biblioteca React. A calculadora permite que os usuários insiram seu peso e altura, e é calculado automaticamente o IMC com base nesses valores. O projeto foi desenvolvido como parte de um curso de React e demonstra minhas habilidades em desenvolvimento front-end utilizando esta tecnologia.',
        urlGithub: 'https://github.com/robson-magalhaes/react-calculadora-imc',
        page: 'https://calculadora-imc1.netlify.app/',
        skills: ['ReactJs', 'NextJs', 'TypeScript', 'module.css']
    },
    {
        nome: 'VENDA DE POLPAS',
        url: '',
        img: `${imgDefault}`,
        descricao: 'Ferramenta para controle de vendas para live.',
        urlGithub: 'https://github.com/robson-magalhaes/Venda_Polpas_Live',
        page: '',
        skills: ['PHP', 'Laravel', 'HTML5', 'CSS3']

    }
];

export const expProjetos = [
    {
        data: '2025 - Atual',
        nome: 'Atum do Brasil Captura Industria e Comercio - CLT​',
        cargo: 'Auxiliar de TI​​',
        descricao: 'Suporte técnico e operacional aos usuários e à infraestrutura de tecnologia da informação da empresa, instalações e configurações de softwares e sistemas, atendimento de chamados técnicos, suporte à rede local, controle de inventário de hardware e software, rotinas de backup, segurança e atualizações do sistema.',
         skills: [
        'Suporte Técnico', 'Infraestrutura de TI', 'Redes de Computadores', 'Manutenção de Computadores', 'Instalação de Software', 'Backup e Restauração', 'Segurança da Informação', 'Atendimento ao Usuário'
        ]
    },
    {
        data: '2024 - 2025',
        nome: 'Site pedidowhats.com​',
        cargo: 'Desenvolvedor Full Stack - Sócio​',
        descricao: 'Responsável pelo desenvolvimento e manutenção de um sistema SaaS robusto para restaurantes e estabelecimentos, utilizando Laravel no back-end e front-end. Atuação em integrações complexas com diversas APIs, como MercadoPago, PayPal, Google Maps e reCAPTCHA, garantindo alto desempenho e escalabilidade da plataforma.',
        skills: [
            'Laravel', 'Saas', 'Vue.js','Bootstrap','Web Design', 'Desenvolvedor Full Stack', 'Liderança'
        ]
    },
    {
        data: 'nov/2023 - jan/2024',
        nome: 'Site Abcfarma',
        cargo: 'Desenvolvedor Full Stack - Contrato PJ',
        descricao: 'Trabalhando em colaboração com a equipe da Agência Scholz, nós criamos um website completamente novo para a empresa Abcfarma. Este website foi construído do zero, com um tema personalizado tanto em código puro quanto em WordPress. Ele incorpora funcionalidades voltadas para farmácia, um blog e seção de notícias para oferecer uma experiência completa aos visitantes.',
        skills: [
            'Comunicação', 'Trabalho em equipe', 'PHP', 'Wordpress', 'jQuery'
        ]
    },
    {
        data: 'abr/2021 - 2024',
        nome: 'Prefeitura Municipal de Itapemirim',
        cargo: 'Assessor de Gabinete - CLT',
        descricao: 'Gerenciamento de processos administrativos, liquidação de pagamento e incluindo elaboração e gestão de contratos e licitações. Desenvolvimento de planilhas de controle e monitoramento, melhorando a eficiência operacional. Totem Digital e páginas do site oficial da prefeitura: Criação de um sistema web e páginas para promover a cultura e turismo local. Website da Secretaria Municipal de Assistência Social: Desenvolvimento de um portal para gestão de beneficiários de programas sociais.',
        skills: [
            'Comunicação', 'Trabalho em equipe', 'Web Design', 'Desenvolvedor Full Stack', 'Liderança', 'Excel'
        ]
    },
    {
        data: 'nov/2023',
        nome: 'Single Sign-On (SSO)',
        cargo: 'Desenvolvedor Full Stack - Contrato PJ',
        descricao: 'Sistema de Single Sign-On (SSO). Essa solução foi desenvolvida com intuito de viabilizar para que o usuario use de um processo de login unificado em várias plataformas, tornando a autenticação mais simples. Essa implementação representa uma melhoria notável na experiência de autenticação, proporcionando aos usuários a comodidade de realizar um único login para acessar uma variedade de serviços distribuídos em diferentes domínios.',
        skills: [
            'JavaScript', 'jQuery', 'PHP', 'CodeIginiter4', 'bootstrap'
        ]
    },
    {
        data: 'out/2023',
        nome: 'CRM',
        cargo: 'Desenvolvedor Full Stack - Freelancer',
        descricao: 'Desenvolvi esta aplicação CRM que permite gerenciar a produção, transações de vendas e entregas, além de analisar as interações com os clientes. O administrador pode facilmente adicionar entregadores, produtores e produtos, organizados por categorias, e muito mais. Além disso, o sistema oferece widgets e ferramentas para uma análise mais aprofundada da produção da empresa. Utilizei PHP com arquitetura MVC usando CodeIgniter 4, jQuery para integração de datatables e Bootstrap para aprimorar a interface visual. Este sistema foi criado para facilitar o controle de vendas e entregas, fornecendo widgets, transações e análises com fluxos de venda e entrega integrados.',
        skills: [
            'PHP', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'MVC', 'Laravel', 'CodeIginiter4', 'Programação Orientada a Objetos'
        ]
    },
    {
        data: 'jun/2023',
        nome: 'NPS e CRM - Vida Card Santa Maria',
        cargo: 'Desenvolvedor Full Stack - Freelancer',
        descricao: 'Melhorei a interface do sistema NPS e CRM da empresa, incorporando funcionalidades dinâmicas para aprimorar a experiência do cliente. Além disso, empreguei meus conhecimentos em jQuery e PHP para integrar o conteúdo e os dados cadastrados, unindo as informações coletadas no NPS ao sistema CRM da empresa de maneira integrada.',
        skills: [
            'PHP', 'JavaScript', 'jQuery', 'HTML5', 'CSS3'
        ]
    }
]