import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/fraud.jpg';
import porfolioImage2 from '../images/portfolio/health.jpg';
import porfolioImage3 from '../images/portfolio/recommend.jpg';
import porfolioImage4 from '../images/portfolio/ocr.jpg';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Michael Murphy`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a result-driven <strong className="text-stone-100">Machine Learning / Full Stack Software Engineer</strong>,
        with 5+ years of experience building scalable, production-grade ML systems and full-stack web applications.
        Proficient in <strong className="text-stone-100">Python, React, Django,</strong> and <strong className="text-stone-100">AWS</strong>, with expertise in <strong className="text-stone-100">LLMs, NLP</strong>, and <strong className="text-stone-100">MLOps</strong>.
        Proven ability to deliver end-to-end solutions that combine intelligent automation with modern web interfaces.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/MichaelMurphy.docx',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Results-driven Machine Learning & Software Engineer with 5+ years of experience building scalable, production-grade ML systems and full-stack web applications. 
  Proficient in Python, React, Django, and AWS, with expertise in LLMs, NLP, and MLOps. 
  Proven ability to deliver end-to-end solutions that combine intelligent automation with modern web interfaces.`,
  aboutItems: [
    { label: 'Location', text: 'Titusville, FL', Icon: MapIcon },
    { label: 'Age', text: '30', Icon: CalendarIcon },
    { label: 'Interests', text: 'Football', Icon: SparklesIcon },
    { label: 'Study', text: 'CUNY - Hunter College', Icon: AcademicCapIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Machine Learning Engineering',
    skills: [
      {
        name: 'Natural Language Processing',
        level: 9,
      },
      {
        name: 'Large Language Models',
        level: 9,
      },
      {
        name: 'Computer Vision',
        level: 8,
      },
    ],
  },
  {
    name: 'Data Engineering',
    skills: [
      {
        name: 'Data Pipelines',
        level: 9,
      },
      {
        name: 'Data Warehousing',
        level: 8,
      },
      {
        name: 'Databricks',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Next.js',
        level: 9,
      },
      {
        name: 'Vue.js',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 10,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Django',
        level: 7,
      },
      {
        name: 'Golang',
        level: 6,
      },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      {
        name: 'AWS',
        level: 8,
      },
      {
        name: 'Google Cloud Platform',
        level: 8,
      },
      {
        name: 'Azure',
        level: 7,
      },
      {
        name: 'Kubernetes',
        level: 7,
      },
      {
        name: 'Docker',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Real-Time Fraud Detection',
    description: 'Real-time fraud detection system using machine learning to analyze transaction patterns and detect anomalies.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
    content: (
      <>
        <div>
          🔍 Overview:
          <p>
            I developed and deployed a real-time fraud detection system for financial transactions, designed to flag suspicious activity and reduce false positives that were costing the business both revenue and customer trust.
          </p>
        </div>
        <div>
          🧰 Tools and Technologies:
          <p>
            Data Ingestion: Apache Kafka for streaming transactions in real time

            Modeling: XGBoost (and LightGBM in some tests) for classification

            Data Processing: Spark Streaming for real-time transformations

            Storage: PostgreSQL for labeled data; Redis for session state

            Deployment: Dockerized service running on AWS ECS/Fargate

            Monitoring: Prometheus + Grafana for performance metrics; Sentry for alerts
          </p>
        </div>
        <div>
          🧠 Key Features:
          <p>
            100+ Intents like “book appointment,” “cancel appointment,” “doctor available today?”, “clinic hours,” “I have chest pain,” etc.

            Context-aware conversations using slot-filling and state tracking.

            Integrated real-time calendar availability from mock scheduling backend.
          </p>
        </div>
        <div>
          ⚠️ Challenges Faced:
          <p>
            Latency Constraint: Had to respond in under 200ms. Solved by caching features in Redis and running lightweight inference services close to edge using AWS Lambda.

            Data Drift: Fraud patterns changed frequently, so built auto-monitoring for feature distributions and retraining triggers.

            Label Noise: Many transactions were misclassified manually. Introduced semi-supervised learning and active feedback from human reviewers.
          </p>
        </div>
        <div>
          ✅ Impact/Outcome:
          <p>
            Reduced false positives by 30%, improving legitimate transaction throughput

            Boosted fraud detection recall by 25%, catching new fraud patterns sooner

            Resulted in measurable reduction in chargebacks and improved trust with customers
          </p>
        </div>
      </>
    )
  },
  {
    title: 'NLP-Powered Health Assistant',
    description: 'NLP-powered virtual assistant for scheduling appointments and answering health-related FAQs',
    url: 'https://reactresume.com',
    image: porfolioImage2,
    content: (
      <>
        <div>
          🔍 Overview:
          <p>
            I built a virtual healthcare assistant to automate appointment scheduling and answer common medical-related questions (e.g., symptoms, medications, doctor availability). The goal was to reduce human involvement and response time in clinics or health portals.
          </p>
        </div>
        <div>
          🧰 Tools and Technologies:
          <p>
            NLP engine: Used Hugging Face Transformers, specifically DistilBERT and later BERT-base, fine-tuned on a domain-specific Q&A dataset for intent classification and response generation.

            Rasa: Managed conversation flows, intent classification, and dialogue policies. Custom actions handled appointment booking and entity extraction.

            FastAPI: Served the model via an API with lightweight endpoints for frontend integration.

            MongoDB: Stored user queries, interaction logs, and appointment data.

            Docker + NGINX: For containerization and efficient API load-balancing in a test environment.

            Streamlit: Built a basic UI to demo the assistant's functionality.
          </p>
        </div>
        <div>
          🧠 Key Features:
          <p>
            100+ Intents like “book appointment,” “cancel appointment,” “doctor available today?”, “clinic hours,” “I have chest pain,” etc.

            Context-aware conversations using slot-filling and state tracking.

            Integrated real-time calendar availability from mock scheduling backend.
          </p>
        </div>
        <div>
          ⚠️ Challenges Faced:
          <p>
            Ambiguous user inputs – Many medical queries are vague (e.g., “I feel bad”). Solved by enriching training data with paraphrased examples and using confidence thresholds with fallback handling.

            Entity recognition for medical terms – Standard models failed to catch domain-specific entities like drug names or conditions. Used custom NER tagging with spaCy and fine-tuned biomedical embeddings (BioBERT).

            Latency optimization – Transformer models were initially slow in inference. I optimized it by switching to ONNX runtime and used batching + GPU acceleration in production testbed.

            Handling sensitive data – Designed the pipeline to be HIPAA-compliant ready (no real PII was used), and encrypted conversation logs.
          </p>
        </div>
        <div>
          ✅ Impact/Outcome:
          <p>
            {'<'}1s response time (average) after optimization.

            80%+ success rate in automated bookings during simulated testing with synthetic user inputs.

            Demo used as a PoC for a local clinic system pilot.
          </p>
        </div>
      </>
    )
  },
  {
    title: 'Real-Time Recommendation System',
    description: 'Real-time recommendation system using content-based filtering to suggest products.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
    content: (
      <>
        <div>
          🔍 Overview:
          <p>
            I designed and deployed a real-time recommendation system for an e-commerce platform aimed at improving customer retention and engagement. The primary goal was to provide dynamic, personalized product suggestions that respond to user behavior in real time — ultimately reducing user churn.
          </p>
        </div>
        <div>
          🧰 Tools and Technologies:
          <p>
            Feature Storage & Streaming: Kafka, Redis, Amazon Kinesis

            Modeling: Collaborative Filtering (Matrix Factorization via LightFM), Neural Collaborative Filtering (NCF), and a hybrid content-based layer (TF-IDF + product embeddings using Sentence-BERT)

            Infrastructure: Airflow for training pipeline orchestration, MLflow for tracking, AWS SageMaker for model training and deployment

            Serving: FastAPI-based service containerized with Docker, deployed on AWS ECS

            Monitoring: Prometheus + Grafana for latency and throughput; custom feedback metrics for engagement scoring
          </p>
        </div>
        <div>
          🧠 Key Features:
          <p>
            Built end-to-end pipelines: user-item matrix generation, feature extraction, model training, and batch + real-time serving

            Designed model inference API with sub-150ms latency to serve recommendations during user session

            Implemented feedback loop using implicit feedback (clicks, time-on-page, purchases) to fine-tune ranking models weekly

            Used A/B testing framework to measure improvement over baseline sort algorithms
          </p>
        </div>
        <div>
          ⚠️ Challenges Faced:
          <p>
            Cold Start for New Users/Items: Solved using metadata-based content filtering backed by sentence embeddings of product descriptions and user demographics

            Sparse Interaction Matrix: Applied matrix factorization with confidence weighting + side information to improve performance

            Scalability: Introduced sharded user embeddings and used Faiss/Annoy for fast nearest-neighbor lookups under load

            Drift Monitoring: Monitored CTR, conversion rate, and product diversity in recommendations daily to trigger retraining as needed
          </p>
        </div>
        <div>
          ✅ Impact/Outcome:
          <p>
            Churn dropped by 17% due to improved personalization

            Average session duration increased by 22%

            Adoption by marketing and product teams for targeting campaigns and homepage personalization
          </p>
        </div>
      </>
    )
  },
  {
    title: 'Document OCR System',
    description: 'OCR system for extracting text from financial documents, enabling automated data entry and analysis.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
    content: (
      <>
        <div>
          🔍 Overview:
          <p>
            I built and deployed a CNN-based computer vision pipeline to parse structured and semi-structured documents like invoices, receipts, and forms. The goal was to automate information extraction (e.g., dates, totals, vendor names) with over 85% accuracy.
          </p>
        </div>
        <div>
          🧰 Tools and Technologies:
          <p>
            Preprocessing: OpenCV for noise removal, binarization, and contour detection

            OCR: Tesseract for initial text extraction

            Modeling: Custom Convolutional Neural Networks + pre-trained backbones like EfficientNet for layout classification

            NLP Integration: SpaCy and rule-based extractors for parsing and validating OCR outputs

            Postprocessing: Heuristics and regex to clean extracted fields (dates, amounts, etc.)

            Deployment: Flask API containerized with Docker, deployed on AWS Lambda for scalability
          </p>
        </div>
        <div>
          🧠 Key Features:
          <p>
            Annotated 10K+ documents using label tools like LabelImg for training

            Designed a multi-task CNN model that predicts bounding boxes + class labels simultaneously

            Integrated OCR + CV pipeline for end-to-end field extraction

            Developed confidence thresholds and fallback rules to handle low-confidence predictions
          </p>
        </div>
        <div>
          ⚠️ Challenges Faced:
          <p>
            Low OCR accuracy on noisy scans: Used OpenCV filters and deskewing to pre-clean images

            Complex layouts with varying formats: Trained layout classification models and used positional anchors for consistency

            Imbalanced training data: Applied augmentation techniques like cropping, noise injection, and rotation to generalize better

            Model latency: Reduced processing time by optimizing inference pipeline and using ONNX for model conversion
          </p>
        </div>
        <div>
          ✅ Impact/Outcome:
          <p>
            Achieved 85%+ accuracy on test set (vs ~60% with baseline OCR alone)

            Reduced manual review time by over 40%

            Integrated into internal tooling, helping ops team process 1000+ documents/day
          </p>
        </div>
      </>
    )
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2015 - May 2020',
    location: 'Hunter College',
    title: 'Masters in Computer Science',
    content: <></>
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Feburary 2023 - May 2025',
    location: 'Guideline',
    title: 'Senior Machine Learning Engineer',
    content: (
      <div>
        <p>
          - Developed and deployed a real-time fraud detection system that reduced false positives by 30% and improved detection accuracy by 25%
        </p>
        <p>
          - Built a NLP-powered virtual assistant for scheduling appointments and answering health-related FAQs using Hugging Face Transformers and Rasa, reducing response latency under 1s for 100+ intents.
        </p>
        <p>
          - Utilized Langchain to build modular and scalable prompt workflows for NLP tasks, enhancing the performance of customer support systems
        </p>
        <p>
          - Led MLOps integration using MLflow and Docker, cutting deployment time by 40% Collaborated with cross-functional teams to productionize models via REST APIs on AWS
        </p>
      </div>
    ),
  },
  {
    date: 'April 2021 - December 2022',
    location: 'Instabase',
    title: 'Software Engineer',
    content: (
      <div>
        <p>
          - Built predictive models for financial forecasting and risk classification using ensemble techniques
        </p>
        <p>
          - Designed and deployed end-to-end ML pipelines for real-time recommendation systems (reduced churn by 17%)
        </p>
        <p>
          - Automated data pipelines with Airflow, reducing manual ETL time by 60%
        </p>
        <p>
          - Designed and deployed an admin portal using Django + React for product analysts to manage ML experiments and model metadata.
        </p>
        <p>
          - Collaborated with UX designers to implement responsive UIs with Tailwind CSS. Implemented computer vision models (CNN) for document parsing (85%+ accuracy) Integrated Langchain for building dynamic prompt-based solutions, enabling more flexible text extraction and classification
        </p>
        <p>
          - Conducted A/B tests and model performance monitoring in production
        </p>
      </div>
    ),
  },
  {
    date: 'June 2020 - March 2021',
    location: 'Grammarly',
    title: 'Data Analyst Intern',
    content: (
      <div>
        <p>
          - Assisted in collecting and preprocessing sales data for forecasting models
        </p>
        <p>
          - Built simple linear regression models to analyze regional sales trends
        </p>
        <p>
          - Presented findings to non-technical stakeholders
        </p>
        <p>
          - Built dashboards in Plotly Dash and performed trend analysis with SQL and Pandas to support marketing strategies.
        </p>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Engineering Manager (Guideline)',
      text: "Michael consistently delivered high-impact solutions under tight deadlines. His ability to bridge deep machine learning knowledge with production-ready engineering made a huge difference in launching our fraud detection and virtual assistant systems. He’s not only technically strong but also highly collaborative and reliable.",
      image: '1.jpg',
    },
    {
      name: 'Product Analyst (Instabase)',
      text: "Working with Michael on the recommendation engine project was a game-changer. He translated complex data into actionable insights and built robust pipelines that significantly improved customer retention. His thoughtful approach to experimentation and UI development made him stand out across both product and engineering teams.",
      image: '3.jpg'
    },
    {
      name: 'Director of Data Science (Grammarly)',
      text: "Even as an intern, Michael demonstrated impressive initiative and analytical rigor. His dashboards and regression models helped us uncover trends we hadn't noticed before. He quickly became a go-to team member for turning messy data into clear, strategic insights.",
      image: '2.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Welcome to my contact page! I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.',
  items: [
    {
      type: ContactType.Email,
      text: 'michaelmurphy2223@hotmail.com',
      href: 'mailto:michaelmurphy2223@hotmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Titusville, FL',
      href: 'https://www.linkedin.com/in/michael-murphy-15aba8374/',
    },
    {
      type: ContactType.Github,
      text: 'MichaelMurphy2223',
      href: 'https://github.com/michaelmurphy2223',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/michaelmurphy2223' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/michael-murphy-15aba8374/' },
];
