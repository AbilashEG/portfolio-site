export const myProjects = [
  {
    id: 1,
    title: "AWS Bedrock-Powered Chatbot",
    description:
      "Developed an intelligent chatbot integrated with Amazon Bedrock to provide natural language interactions using foundation models. The application allows users to type queries or upload documents (PDF/images), and receive context-aware responses in real-time.",
    subDescription: [
      "Integrated Amazon Bedrock with multi-modal input handling.",
      "Used AWS Lambda and S3 for processing and storage.",
      "Implemented secure API communication and user interaction logging.",
    ],
    href: "https://github.com/AbilashEG/Bedrock-chatbot",
    image: "",
    tags: [
      { id: 1, name: "AWS", path: "/assets/logos/aws.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Flask", path: "/assets/logos/flask.svg" },
    ],
  },
  {
    id: 2,
    title: "CVE_API",
    description:
      "RESTful API in Flask that integrates with the NVD (National Vulnerability Database) to fetch and serve real-time CVE data.",
    subDescription: [
      "Connected to NVD API for up-to-date vulnerability tracking.",
      "Built paginated CVE list with filters and status indicators.",
      "Implemented detailed view routes for individual CVE records.",
    ],
    href: "https://github.com/AbilashEG/CVE_API",
    image: "",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Flask", path: "/assets/logos/flask.svg" },
      { id: 3, name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
    ],
  },
  {
    id: 3,
    title: "Diabetes Prediction",
    description:
      "Machine learning model using XGBoost to predict diabetes risk based on medical attributes.",
    subDescription: [
      "Preprocessed clinical dataset with imputation and scaling.",
      "Trained with XGBoost and validated with high F1 score.",
      "Deployed predictions using a web interface via Flask.",
    ],
    href: "https://github.com/AbilashEG/diabetes-prediction",
    image: "",
    tags: [
      { id: 1, name: "XGBoost", path: "/assets/logos/xgboost.svg" },
      { id: 2, name: "Pandas", path: "/assets/logos/pandas.svg" },
      { id: 3, name: "Flask", path: "/assets/logos/flask.svg" },
    ],
  },
  {
    id: 4,
    title: "AWS QuickSight Dashboard",
    description:
      "Interactive dashboard built using Amazon QuickSight to visualize data from S3 and Athena.",
    subDescription: [
      "Data ingestion via AWS Glue into Athena.",
      "QuickSight used for filtering, metrics, and time series charts.",
      "Dashboard enabled stakeholder decision-making.",
    ],
    href: "https://github.com/AbilashEG/aws-quicksight-dashboard-project",
    image: "",
    tags: [
      { id: 1, name: "AWS", path: "/assets/logos/aws.svg" },
      { id: 2, name: "Athena", path: "/assets/logos/athena.svg" },
      { id: 3, name: "QuickSight", path: "/assets/logos/quicksight.svg" },
    ],
  },
  {
    id: 5,
    title: "Advanced Diabetes Prediction System",
    description:
      "An AI-powered web application that predicts diabetes risk and provides personalized health recommendations using a machine learning model trained on clinical and lifestyle features.",
    subDescription: [
      "Utilized clinical and lifestyle data for training machine learning models.",
      "Delivered personalized health recommendations based on predictions.",
      "Built a user-friendly AI-powered web interface.",
    ],
    href: "https://github.com/AbilashEG/advanced-diabetes-prediction",
    image: "",
    tags: [
      { id: 1, name: "AI", path: "/assets/logos/ai.svg" },
      { id: 2, name: "Machine Learning", path: "/assets/logos/ml.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
    ],
  },
  {
    id: 6,
    title: "Smart HR Management System",
    description:
      "A comprehensive, AI-powered HR management system that automates the entire recruitment workflow from resume upload to candidate evaluation. Built with modern React.js frontend and Node.js backend, integrated with AWS cloud services for scalability and AI capabilities.",
    subDescription: [
      "Implemented recruitment automation with AI integration.",
      "Developed frontend in React.js and backend in Node.js.",
      "Leveraged AWS cloud services for scalability and performance.",
    ],
    href: "https://github.com/AbilashEG/End-to-End-HR-management-using-react-and-nodejs-and-aws-services-",
    image: "",
    tags: [
      { id: 1, name: "AWS", path: "/assets/logos/aws.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Node.js", path: "/assets/logos/nodejs.svg" },
    ],
  },
  {
    id: 7,
    title: "Movie Ticket Booking Bot (Flask + AWS Bedrock)",
    description:
      "An intelligent conversational bot that helps users book movie tickets via chat! Built using Amazon Bedrock for natural language understanding.",
    subDescription: [
      "Developed conversational interface with AWS Bedrock (Claude/Nova Pro).",
      "Integrated with ticket booking services for real-time operations.",
      "Built backend with Flask to handle logic and API requests.",
    ],
    href: "https://github.com/AbilashEG/Movie-ticket-booking-bot",
    image: "",
    tags: [
      { id: 1, name: "AWS", path: "/assets/logos/aws.svg" },
      { id: 2, name: "Flask", path: "/assets/logos/flask.svg" },
      { id: 3, name: "Chatbot", path: "/assets/logos/chatbot.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abilash-eg/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/AbilashEG",
    icon: "/assets/socials/github.svg",
  },
];

export const experiences = [
  {
    title: "Data and AI Engineer",
    job: "Quadrasystems.net (AWS Team)",
    date: "2025–Present",
    contents: [
      "Collaborating with AWS services to develop and deploy end-to-end data and AI/ML solutions.",
      "Built intelligent chatbots using Amazon Bedrock with document understanding and context-aware responses.",
      "Created real-time dashboards using Amazon QuickSight connected to S3 and Athena.",
      "Developed ML models in SageMaker using XGBoost and scikit-learn for predictive analytics.",
    ],
  },
];

export const learningNow = {
  title: "What I’m Learning Now",
  items: [
    "Exploring LangChain for document-based LLM workflows",
    "Hands-on with AWS Bedrock Agents and knowledge bases",
    "Fine-tuning models using Amazon SageMaker JumpStart",
    "Experimenting with data storytelling in QuickSight",
    "Building Agentic AI systems with multi-step reasoning",
    "Implementing Retrieval-Augmented Generation (RAG) pipelines",
    "Designing multi-agent collaboration frameworks",
    "Applying responsible AI guardrails and bias detection",
    "Automating cloud workflows with LLM-powered agents",
  ],
}
