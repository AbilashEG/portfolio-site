export const config = {
    developer: {
        name: "Abilash",
        fullName: "Abilash EG",
        title: "Data & AI Engineer",
        tagline: "Building Agentic AI Systems on AWS",
        description: "Data & AI Engineer specialising in agentic AI systems on AWS. Building intelligent cloud-powered solutions with Amazon Bedrock, LangGraph, and AgentCore."
    },
    social: {
        github: "AbilashEG",
        email: "abilashgomathi7@gmail.com",
        location: "Coimbatore, India"
    },
    about: {
        title: "About.",
        paragraphs: [
            "B.Tech CSE graduate from VIT Bhopal. Currently a Data & AI Engineer at Quadrasystems, working within the AWS SBU team.",
            "I architect agentic AI systems using AWS Bedrock, LangGraph, and AgentCore. My work spans multi-account AWS architectures, serverless pipelines, and production-grade automation.",
            "Official AWS Workshop Presenter — delivered the Bedrock AgentCore deep-dive across Bangalore, Chennai, Coimbatore, and Hyderabad."
        ],
        stats: [
            { value: "2",   label: "Flagship\nProjects" },
            { value: "4",   label: "Workshop\nCities" },
            { value: "1",   label: "AWS\nCertification" },
            { value: "10+", label: "AWS\nServices" }
        ]
    },
    experiences: [
        {
            position: "Data & AI Engineer",
            company: "Quadrasystems.net — AWS SBU",
            period: "Jun 2025 – Present",
            location: "Coimbatore, India",
            description: "Building production-grade agentic AI systems and cloud infrastructure on AWS.",
            responsibilities: [
                "🏆 AWS Migratapalooza India Hackathon 2025 — 1st Prize. Architected live database modernization using AWS DMS and SCT.",
                "🎤 Official AWS Workshop Presenter — Delivered 'Diving Deep into Bedrock AgentCore' across Bangalore, Chennai, and Coimbatore. Covered all 8 AgentCore pillars: Runtime, Gateway, Identity, Memory, Tools, Observability, Evaluations, Policy. Designed a real end-to-end use case after Chennai feedback to replace dry notebook execution.",
                "🏦 Cross-Account Infrastructure Automation · Banking & FSI — Built production Lambda-based health reporting system spanning 10+ AWS accounts. Used AWS Organizations for auto-discovery, STS AssumeRole for cross-account access, and three-level ThreadPoolExecutor for parallel execution. Reports delivered as Excel via SES daily.",
                "👥 Internal Workforce Platform · AWS Team Tracker — Built full internal productivity platform for ~60 staff. Stack: Next.js 14, FastAPI on Lambda via ECR Docker, API Gateway, Cognito (5 RBAC roles), DynamoDB, Bedrock Nova Pro. 34 API endpoints. Zero EC2.",
                "🤖 AI-Powered Workforce Platform · AWS Team Tracker — Designed autonomous multi-agent travel planning system: Amplify frontend, WebSocket API Gateway, AgentCore Runtime (Claude Sonnet 4 orchestrator), 7 specialized Lambda agents, MCP Server on ECS Fargate, DynamoDB state management.",
                "📊 Presales & Solution Architecture · FSI, QSR, Pharma — Led presales calls across banking, QSR, and pharma sectors. Produced Azure-to-AWS migration mappings, Bedrock AgentCore deployment runbooks, and cost estimation documents. Positioned AgentCore and MCP Server as key differentiators.",
                "🛡️ AI-Driven MSP Monitoring Dashboard — Enterprise AWS monitoring platform across 20+ services. Bedrock Nova Pro security analysis, 100+ automated rules, compliance mapping (CIS, PCI-DSS, HIPAA, GDPR), cost optimization engine with idle detection.",
                "⚙️ L1 Activity Automation Bot — Agentic AI platform for AWS CloudWatch management across multiple enterprise accounts. Hub-and-spoke cross-account STS architecture, Amazon Nova Pro intent recognition, CI/CD via GitHub Actions."
            ],
            technologies: ["AWS Bedrock", "AgentCore", "LangGraph", "Lambda", "DynamoDB", "Next.js", "FastAPI", "Python", "STS", "ECS Fargate"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "AI-Driven MSP Monitoring Dashboard",
            category: "AWS · AI",
            technologies: "AWS Bedrock · LangGraph · Next.js · Flask · React · TypeScript",
            image: "/images/msp-dashboard.png",
            github: "https://github.com/AbilashEG/aws-msp-dashboard",
            description: "Enterprise AWS monitoring platform for MSPs with AI-powered security analysis, cost optimization, and multi-account resource tracking across 20+ services.",
            bullets: [
                "Multi-account monitoring with parallel scanning (5 accounts × 10 regions)",
                "AI security analysis via Amazon Bedrock Nova Pro with compliance mapping (CIS, PCI-DSS, HIPAA, GDPR)",
                "Cost optimization engine with idle detection and right-sizing recommendations",
                "React + TypeScript frontend, Flask backend with cross-account AssumeRole"
            ],
            featured: true,
            layout: "text-left"
        },
        {
            id: 2,
            title: "L1 Activity Automation Bot",
            category: "Agentic AI · AWS",
            technologies: "Amazon Nova Pro · AWS Bedrock · DynamoDB · EC2 · React · Flask",
            image: "/images/l1-bot.png",
            github: "https://github.com/AbilashEG/l1-activityAutomation",
            description: "Agentic AI platform that revolutionises AWS CloudWatch management across multiple enterprise accounts with natural language interface and autonomous deployment.",
            bullets: [
                "Multi-account EC2 discovery and CloudWatch Agent deployment (Windows/Linux)",
                "Powered by Amazon Nova Pro for intent recognition and autonomous actions",
                "Hub-and-spoke cross-account STS architecture",
                "React frontend, Flask backend, CI/CD via GitHub Actions"
            ],
            featured: true,
            layout: "text-right"
        },
        {
            id: 3,
            title: "Diabetes Prediction — SageMaker ML",
            category: "ML · AWS",
            technologies: "SageMaker · Python · XGBoost · Scikit-learn · S3",
            image: "/images/diabetes-ml.png",
            github: "https://github.com/AbilashEG/diabetes-prediction",
            description: "Production ML model achieving 94.5% accuracy with AUC 0.9908, deployed on Amazon SageMaker with 3-tier risk classification and personalized health guidance.",
            bullets: [
                "94.5% accuracy, AUC 0.9908 — clinically validated model",
                "3-tier risk classification with personalized health recommendations",
                "Deployed on Amazon SageMaker with real-time inference endpoint",
                "Clinical dataset preprocessing with advanced feature engineering"
            ],
            featured: false,
            layout: ""
        },
        {
            id: 4,
            title: "Workflow 360 — AI-Powered HRMS",
            category: "AI · AWS · Full Stack",
            technologies: "AWS Bedrock · Lambda · DynamoDB · Cognito · React · API Gateway",
            image: "/images/workflow360.png",
            github: "https://github.com/AbilashEG/End-to-End-HR-management-using-react-and-nodejs-and-aws-services-",
            description: "AI-powered HR management portal on AWS automating core HR operations via Amazon Bedrock with 24/7 L1/L2 help desk, reducing manual HR workload by 80%.",
            bullets: [
                "Amazon Bedrock-powered 24/7 L1/L2 help desk with automatic request routing",
                "Reduced manual HR workload by 80% through intelligent automation",
                "Core HR operations automated: onboarding, leave, payroll queries",
                "Serverless architecture — Lambda, API Gateway, DynamoDB, Cognito"
            ],
            featured: false,
            layout: ""
        }
    ],
    contact: {
        email: "abilashgomathi7@gmail.com",
        github: "https://github.com/AbilashEG",
        linkedin: "https://www.linkedin.com/in/abilash-eg/",
        medium: "https://medium.com/@abilashgomathi7",
        twitter: "",
        facebook: "",
        instagram: ""
    },
    skills: {
        develop: {
            title: "CLOUD ENGINEERING",
            description: "AWS-Native · Serverless · Infrastructure",
            details: "Designing and operating multi-account AWS architectures with a serverless-first mindset. Expert in cross-account access patterns, infrastructure automation, cost optimisation, and security compliance across enterprise environments.",
            tools: [
                "AWS Organizations · STS AssumeRole",
                "Lambda · API Gateway · ECR · Docker",
                "DynamoDB · S3 · SES · EventBridge",
                "Cognito · IAM · CloudWatch · SNS",
                "Cross-account architecture (10+ accounts)",
                "AWS Glue · Athena · QuickSight",
                "CloudFormation · Amplify · Route 53",
                "Cost optimization · Security compliance"
            ]
        },
        design: {
            title: "AGENTIC AI",
            description: "Building autonomous AI systems on AWS",
            details: "Architecting multi-agent systems with LangGraph and Amazon Bedrock. Specialising in AgentCore, RAG pipelines, foundation model orchestration, and production-grade AI automation on AWS.",
            tools: ["AWS Bedrock", "LangGraph", "AgentCore", "Amazon Nova Pro", "Python", "LLMs", "RAG", "Multi-Agent", "Serverless", "STS"]
        }
    },
    // Cycling words for hero right side
    cyclingWords: ["AGENTIC AI", "DATA ENGINEER", "AWS BUILDER"],
    heroSubtitle: "Building Intelligent Cloud-Powered Solutions",
    heroSubtitleSub: "Using AWS Bedrock · LangGraph · AgentCore"
};
