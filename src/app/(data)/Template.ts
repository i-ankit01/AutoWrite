import {
  BlogIcon,
  LinkTreeLogo,
  LinkedInLogo,
  XLogo,
  YoutubeLogo,
  Help,
  Question,
  Code,
  IdeaLogo,
  FileText,
  NewspaperLogo,
  Email,
  GooglePlay,
} from "./Icon";
const TemplateArray = [
  {
    name: "Blog Generator",
    description:
      "An AI tool to generate perfect and engaging blogs according to your niche.",
    category: "Blog",
    icon: BlogIcon,
    aiPrompt: "",
    slug: "generate-blog",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Describe about your blog",
        field: "textarea",
        name: "about",
        required: true,
      },
    ],
  },
  {
    name: "Code Generator",
    description:
      "Generate code snippets or full components instantly based on your requirement and language.",
    category: "Development",
    icon: Code,
    aiPrompt: "",
    slug: "generate-code",
    form: [
      {
        label: "Enter your programming language",
        field: "input",
        name: "language",
        required: true,
      },
      {
        label: "Describe what you want the code to do",
        field: "textarea",
        name: "task",
        required: true,
      },
    ],
  },
  {
    name: "Youtube Script",
    description:
      "An AI tool to generate high quality and engaging video scripts for your youtube video",
    category: "youtube",
    icon: YoutubeLogo,
    aiPrompt: "",
    slug: "generate-yt-script",
    form: [
      {
        label: "Enter your video category",
        field: "input",
        name: "category",
        required: true,
      },
      {
        label: "Describe about your video",
        field: "textarea",
        name: "about",
        required: true,
      },
    ],
  },
  {
    name: "Social Media Caption",
    description:
      "Create catchy and trendy captions for your Instagram, Twitter, or Facebook posts.",
    category: "Social Media",
    icon: LinkTreeLogo,
    aiPrompt: "",
    slug: "generate-social-caption",
    form: [
      {
        label: "Enter platform (Instagram, Twitter, etc.)",
        field: "input",
        name: "platform",
        required: true,
      },
      {
        label: "Describe your post or image",
        field: "textarea",
        name: "about",
        required: true,
      },
    ],
  },
  {
    name: "Cold Email",
    description:
      "Write personalized and professional cold emails to reach out to prospects.",
    category: "Email",
    icon: Email,
    aiPrompt: "",
    slug: "generate-cold-email",
    form: [
      {
        label: "Enter recipient's profession or business type",
        field: "input",
        name: "recipient",
        required: true,
      },
      {
        label: "Describe your product or purpose of outreach",
        field: "textarea",
        name: "purpose",
        required: true,
      },
    ],
  },
  {
    name: "Twitter Post Generator",
    description:
      "Generate short, impactful, and trending tweets based on your topic or idea.",
    category: "Social Media",
    icon: XLogo,
    aiPrompt: "",
    slug: "generate-twitter-post",
    form: [
      {
        label: "Enter your topic or idea",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label:
          "Mention your tone (optional, e.g., sarcastic, professional, etc.)",
        field: "input",
        name: "tone",
        required: false,
      },
    ],
  },
  {
    name: "LinkedIn Post Generator",
    description:
      "Write professional and engaging LinkedIn posts to build your network and personal brand.",
    category: "Social Media",
    icon: LinkedInLogo,
    aiPrompt: "",
    slug: "generate-linkedin-post",
    form: [
      {
        label: "Enter your topic or experience",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Describe what message you want to convey",
        field: "textarea",
        name: "message",
        required: true,
      },
    ],
  },
  {
    name: "Resume Summary",
    description: "Generate a strong and professional summary for your resume.",
    category: "Career",
    icon: FileText,
    aiPrompt: "",
    slug: "generate-resume-summary",
    form: [
      {
        label: "Enter your profession or career field",
        field: "input",
        name: "career",
        required: true,
      },
      {
        label: "List your key skills and experience",
        field: "textarea",
        name: "skills",
        required: true,
      },
    ],
  },
  {
    name: "Newsletter Intro",
    description:
      "Craft a compelling introduction for your newsletter to hook your audience.",
    category: "Newsletter",
    icon: NewspaperLogo,
    aiPrompt: "",
    slug: "generate-newsletter-intro",
    form: [
      {
        label: "Enter newsletter topic or theme",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Briefly describe the newsletter content",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
  {
    name: "Quora Answer",
    description:
      "Generate thoughtful and helpful answers for your Quora questions.",
    category: "Q&A",
    icon: Question,
    aiPrompt: "",
    slug: "generate-quora-answer",
    form: [
      {
        label: "Enter your Quora question",
        field: "input",
        name: "question",
        required: true,
      },
      {
        label: "Describe your viewpoint or background",
        field: "textarea",
        name: "viewpoint",
        required: true,
      },
    ],
  },
  {
    name: "Startup Idea Pitch",
    description:
      "Generate a crisp and convincing elevator pitch for your startup idea.",
    category: "Business",
    icon: IdeaLogo,
    aiPrompt: "",
    slug: "generate-startup-pitch",
    form: [
      {
        label: "Enter your startup idea name",
        field: "input",
        name: "startup",
        required: true,
      },
      {
        label: "Describe what problem it solves and how",
        field: "textarea",
        name: "problem",
        required: true,
      },
    ],
  },
  {
    name: "App Store Description",
    description:
      "Write a clear and attractive app description for Google Play or Apple App Store.",
    category: "App",
    icon: GooglePlay,
    aiPrompt: "",
    slug: "generate-app-description",
    form: [
      {
        label: "Enter your app name",
        field: "input",
        name: "appname",
        required: true,
      },
      {
        label: "Describe what your app does",
        field: "textarea",
        name: "about",
        required: true,
      },
    ],
  },
  {
    name: "FAQ Generator",
    description:
      "Automatically generate relevant FAQ questions and answers for your website or product.",
    category: "Website",
    icon: Help,
    aiPrompt: "",
    slug: "generate-faq",
    form: [
      {
        label: "Enter your website or product name",
        field: "input",
        name: "name",
        required: true,
      },
      {
        label: "Describe the main features or services",
        field: "textarea",
        name: "features",
        required: true,
      },
    ],
  },
];

export default TemplateArray;
