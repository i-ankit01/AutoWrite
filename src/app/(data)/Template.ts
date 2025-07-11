const TemplateArray = [
  {
    name: "Blog Generator",
    description:
      "An AI tool to generate perfect and engaging blogs according to your niche.",
    category: "Blog",
    icon: "blog",
    aiPrompt:
      "Generate a perfect blog on this topic. It should cover every aspect in detail with proper headings, introduction, and conclusions.",
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
    icon: "code",
    aiPrompt:
      "Generate a code snippet or a complete functional component as per the provided description in the given programming language. Make sure it is optimized and properly structured.",
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
    icon: "youtube",
    aiPrompt:
      "Generate a long script based on the topic and category provided, in a bit more detail. It should be engaging with a hook that raises a question in the audience's mind in the starting itself.",
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
    icon: "linktree",
    aiPrompt:
      "Generate a catchy, trendy, and engaging caption for the described post or image on the specified social media platform. Keep it relevant to current trends, and make it short and impactful.",
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
    icon: "email",
    aiPrompt:
      "Write a professional and personalized cold email addressed to a person in the given profession or business type. The email should clearly describe the product or purpose of outreach, sound convincing but not pushy, and include a clear call-to-action.",
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
    icon: "xlogo",
    aiPrompt:
      "Write a short, impactful, and trending Twitter post based on the given topic or idea. Keep the tone as specified if mentioned, otherwise default to an engaging and professional tone. Make sure it fits Twitter's character limit.",
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
    icon: "linkedin",
    aiPrompt:
      "Generate a professional and engaging LinkedIn post based on the provided topic or experience and message. It should sound authentic, thoughtful, and help in building a personal brand or network.",
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
    icon: "filetext",
    aiPrompt:
      "Generate a professional and strong resume summary for a person working in the given career field. Highlight key skills and experience, keeping it concise yet impactful.",
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
    icon: "newspaper",
    aiPrompt:
      "Generate a compelling and interesting introduction for a newsletter based on the given topic or theme and content description. Make sure it hooks the audience and clearly communicates the value of reading further.",
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
    icon: "question",
    aiPrompt:
      "Write a thoughtful, helpful, and detailed answer to the given Quora question. Include your viewpoint or background to add authenticity, and ensure the answer adds value to the reader.",
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
    icon: "idea",
    aiPrompt:
      "Generate a crisp, clear, and convincing elevator pitch for a startup idea. Include the name, the problem it solves, how it solves it, and make it sound appealing to investors or potential customers.",
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
    icon: "googleplay",
    aiPrompt:
      "Write a clear, concise, and attractive app store description for the provided app name and functionality. Highlight the key features and benefits, making sure it grabs the user's attention.",
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
    icon: "help",
    aiPrompt:
      "Generate a list of frequently asked questions (FAQs) and their answers based on the provided website or product name and its main features or services. Make sure they are relevant, helpful, and clear.",
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
