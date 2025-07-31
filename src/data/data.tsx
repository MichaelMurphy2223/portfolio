import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
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
      href: '/assets/resume.pdf',
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
    {label: 'Location', text: 'Titusville, FL', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Interests', text: 'Football', Icon: SparklesIcon},
    {label: 'Study', text: 'CUNY - Hunter College', Icon: AcademicCapIcon},
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
      {
        name: 'GraphQL',
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
  },
  {
    title: 'NLP-Powered Health Assistant',
    description: 'NLP-powered virtual assistant for scheduling appointments and answering health-related FAQs',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Real-Time Recommendation System',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Document OCR System',
    description: 'OCR system for extracting text from financial documents, enabling automated data entry and analysis.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
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
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
