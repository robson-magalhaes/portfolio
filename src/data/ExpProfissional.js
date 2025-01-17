import bgEncarte from '../assets/image/projeto/Criador-de-encarte.jpg';
import bgCalcIMC from '../assets/image/projeto/imgCalc.webp';
import imgDefault from '../assets/image/bgScript.webp';
import bgSorteios from '../assets/image/projeto/sorteios.jpg';


export const projetos = [
    {
        nome: 'SORTEIO DE PRÊMIOS',
        url: 'https://sorteios-robyntec.vercel.app',
        img: `${bgSorteios}`,
        descricao: `Desenvolvi uma plataforma de sorteios online inovadora, com funcionalidades automatizadas e integradas, baseada no modelo SaaS (Software as a Service). O sistema permite que os usuários adquiram cotas de sorteios por meio de pagamentos via PIX. Após a confirmação do pagamento, as cotas são sorteadas automaticamente, e o resultado é exibido em tempo real para o comprador, informando se a cota foi premiada. \nA plataforma também oferece um painel administrativo completo, onde os usuários podem gerenciar seus sorteios, visualizar transações e realizar saques automáticos diretamente para suas contas bancárias, tudo de forma segura e eficiente. Essa solução, baseada na nuvem, proporciona uma experiência ágil, transparente e escalável, atendendo às necessidades de empresas e usuários de forma prática e eficiente.`,
        urlGithub: '',
        page: 'https://sorteios-robyntec.vercel.app',
        skills: ["SaaS", 'React com Vite', 'Node.js', 'PostgreSQL', 'Bootstrap', "styled-components", "Api Pix", "e-commerce"]
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
        data: 'abr/2021 - 2024',
        nome: 'Prefeitura Municipal de Itapemirim',
        cargo: 'Analise e Desenvolvimento de Software (Atualmente)',
        descricao: 'Gerenciamento dos sistemas administrativos da prefeitura, principalmente o Sistema Governo Digital. Análise detalhada dos requisitos e processos existentes para identificar oportunidades de melhorias e eficiência. Desenvolvimento de soluções personalizadas, incluindo planilhas em Excel, criação de aplicativos, websites e outras ferramentas tecnológicas. Implantação dos sistemas, garantindo uma transição suave e treinando os usuários finais para sua utilização adequada. Suporte técnico contínuo aos usuários, solucionando problemas e respondendo a consultas relacionadas aos sistemas. Acompanhamento das soluções implementadas, garantindo sua conformidade com as políticas e regulamentações governamentais. Manutenção e atualização regular dos sistemas, visando melhorias contínuas.',
        skills: [
            'Comunicação', 'Trabalho em equipe', 'Web Design', 'Desenvolvedor Full Stack', 'Liderança'
        ]
    },
    {
        data: 'nov/2023 - jan/2024',
        nome: 'Site Abcfarma',
        cargo: 'Desenvolvedor',
        descricao: 'Trabalhando em colaboração com a equipe da Agência Scholz, nós criamos um website completamente novo para a empresa Abcfarma. Este website foi construído do zero, com um tema personalizado tanto em código puro quanto em WordPress. Ele incorpora funcionalidades voltadas para farmácia, um blog e seção de notícias para oferecer uma experiência completa aos visitantes.',
        skills: [
            'Comunicação', 'Trabalho em equipe', 'PHP', 'Wordpress', 'jQuery'
        ]
    },
    {
        data: 'nov/2023',
        nome: 'Single Sign-On (SSO)',
        cargo: 'Desenvolvedor',
        descricao: 'Sistema de Single Sign-On (SSO). Essa solução foi desenvolvida com intuito de viabilizar para que o usuario use de um processo de login unificado em várias plataformas, tornando a autenticação mais simples. Essa implementação representa uma melhoria notável na experiência de autenticação, proporcionando aos usuários a comodidade de realizar um único login para acessar uma variedade de serviços distribuídos em diferentes domínios.',
        skills: [
            'JavaScript', 'jQuery', 'PHP', 'CodeIginiter4', 'bootstrap'
        ]
    },
    {
        data: 'out/2023',
        nome: 'CRM',
        cargo: 'Desenvolvedor',
        descricao: 'Desenvolvi esta aplicação CRM que permite gerenciar a produção, transações de vendas e entregas, além de analisar as interações com os clientes. O administrador pode facilmente adicionar entregadores, produtores e produtos, organizados por categorias, e muito mais. Além disso, o sistema oferece widgets e ferramentas para uma análise mais aprofundada da produção da empresa. Utilizei PHP com arquitetura MVC usando CodeIgniter 4, jQuery para integração de datatables e Bootstrap para aprimorar a interface visual. Este sistema foi criado para facilitar o controle de vendas e entregas, fornecendo widgets, transações e análises com fluxos de venda e entrega integrados.',
        skills: [
            'PHP', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'MVC', 'Laravel', 'CodeIginiter4', 'Programação Orientada a Objetos'
        ]
    },
    {
        data: 'jun/2023',
        nome: 'NPS e CRM - Vida Card Santa Maria',
        cargo: 'Desenvolvedor - Freelancer',
        descricao: 'Melhorei a interface do sistema NPS e CRM da empresa, incorporando funcionalidades dinâmicas para aprimorar a experiência do cliente. Além disso, empreguei meus conhecimentos em jQuery e PHP para integrar o conteúdo e os dados cadastrados, unindo as informações coletadas no NPS ao sistema CRM da empresa de maneira integrada.',
        skills: [
            'PHP', 'JavaScript', 'jQuery', 'HTML5', 'CSS3'
        ]
    }
]