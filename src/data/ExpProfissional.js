import bgEncarte from '../assets/image/projeto/Criador-de-encarte.webp';
import bgCalcIMC from '../assets/image/projeto/imgCalc.webp';
import imgDefault from '../assets/image/bgScript.webp';

export const projetos = [
    {
        nome: 'Criador de Encarte',
        img: `${bgEncarte}`,
        descricao: 'Desenvolvimento de uma aplicação web que permite aos usuários criar encartes digitais personalizados para promover produtos, serviços ou eventos. A aplicação oferece uma interface intuitiva e fácil de usar. Os usuários podem personalizar o layout e o design do encarte sem a necessidade de habilidades técnicas avançadas.',
        urlGithub: 'https://github.com/robson-magalhaes/CriarEncarte',
        page: 'https://robson-magalhaes.github.io/CriarEncarte/',
        skills: ['JavaScript', 'Html', 'CSS', 'Bootstrap']
    },
    {
        nome: 'Calculadora IMC',
        img: `${bgCalcIMC}`,
        descricao: 'Desenvolvi essa aplicação de calculadora de IMC utilizando a biblioteca React. A calculadora permite que os usuários insiram seu peso e altura, e é calculado automaticamente o IMC com base nesses valores. O projeto foi desenvolvido como parte de um curso de React e demonstra minhas habilidades em desenvolvimento front-end utilizando esta tecnologia.',
        urlGithub: 'https://github.com/robson-magalhaes/react-calculadora-imc',
        page: 'https://calculadora-imc1.netlify.app/',
        skills: ['ReactJs', 'NextJs', 'TypeScript', 'module.css']
    },
    {
        nome: 'Site para lanchonete',
        img: `${imgDefault}`,
        descricao: 'Website para venda de lanches',
        urlGithub: 'https://github.com/robson-magalhaes/SalesWeb_Csharp',
        page: '',
        skills: ['C#', 'ASP.NET','Bootstrap']

    },
    {
        nome: 'Ferramenta para live',
        img: `${imgDefault}`,
        descricao: 'Website simples desenvolvido enquanto estudava laravel em padrão MVC. Esse sistema foi criado para facilitar o atendimento e anotações de pedidos durante a venda de polpas em live.',
        urlGithub: 'https://github.com/robson-magalhaes/Venda_Polpas_Live',
        page: '',
        skills: ['PHP', 'Laravel','HTML5', 'CSS3', 'MVC']

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
        descricao: 'Desenvolvi esta aplicação CRM que permite gerenciar a produção, transações de vendas e entregas, além de analisar as interações com os clientes. O administrador pode facilmente adicionar entregadores, produtores e produtos, organizados por categorias, e muito mais. Além disso, o sistema oferece widgets e ferramentas para uma análise mais aprofundada da produção da empresa. Utilizei PHP com estrutura MVC usando CodeIgniter 4, jQuery para integração de datatables e Bootstrap para aprimorar a interface visual. Este sistema foi criado para facilitar o controle de vendas e entregas, fornecendo widgets, transações e análises com fluxos de venda e entrega integrados.',
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