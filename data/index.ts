import AI_LMS from "@/app/Images/AI_LMS.png";
import MindEase from "@/app/Images/mindease.png";
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Communication With Clients is a priority, I build open communication throughout the entire project",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Collaborative professional committed to delivering exceptional results with consistent execution excellence.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech stack",
    description: "I Am A Lifelong Learner",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an AI assistant functioning as an AI Agent",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const techStackPreview = [
  {
    NextJS: "https://nextjs.org",
    TypeScript: "https://www.typescriptlang.org",
    TailwindCSS: "https://tailwindcss.com",
    shadcnUI: "https://ui.shadcn.com",
    FramerMotion: "https://www.framer.com/motion",
    Zod: "https://zod.dev",
    NeonDB: "https://neon.tech",
    LangChain: "https://js.langchain.com",
    UploadThing: "https://uploadthing.com",
    React: "https://react.dev",
    micolink: "https://api.microlink.io/?",
  },
];

export const projects = [
  {
    id: 1,
    title: "Built a full stack AI Saas PDF Summarizer.",
    des: "SummaMind saves you hours back into your day by going through your document and summarising it for you with the power of AI.",
    img: "/mindease.png",
    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/three.svg",
      "/fm.svg",
      techStackPreview[0].NextJS,
    ],
    link: "https://mindease-ai.vercel.app",
  },
  {
    id: 2,
    title: "Client Project",
    des: "This is a project for a client who requested a single page web outlining their work, still underway",
    img: MindEase,
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://pin-ltd.com",
  },
  {
    id: 3,
    title: "AI Interview Coach",
    des: "Preparing for upcoming interviews made easy with the power of AI, prepare for interviews talking to an AI interview coach.",
    img: MindEase,
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://coach-ai-int.vercel.app",
  },
  {
    id: 4,
    title: "A Fitclub membership website",
    des: "fit your needs As fit as you can. We understand diverity, that's why",
    img: MindEase,
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/ClementJele/FitClub",
  },

  {
    id: 5,
    title: "Restaurant AI Agent",
    des: "Gather information about your restaurant of choice by analysing all reviews before heading to it.",
    img: MindEase,
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/ClementJele/ReviewsLocal_AI_Agent",
  },
  {
    id: 6,
    title: "AI Learning Management System",
    des: "Do you sometimes struggle with organising the information you learn? This AI LMS will help you with that. From Idea validation to Interview preparation",
    img: { AI_LMS },
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://chapter-mind.vercel.app",
  },
  {
    id: 7,
    title: "GuideAI",
    des: "An AI Agent with the ability to use tools to fulfill tasks.",
    img: { AI_LMS },
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://tool-ai-agent.vercel.app/",
  },
  {
    id: 8,
    title: "GitPriv",
    des: "NB: STILL UNDERWAY! - Make your private repositories public with ease, no more hassle of going through each repository and making it public.",
    img: { AI_LMS },
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://git-priv.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

export const services = [
  {
    id: 1,
    title:
      "Communication With Clients is a priority, we build open communication throughout the entire project",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 1,
    title:
      "Communication With Clients is a priority, we build open communication throughout the entire project",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 1,
    title:
      "Communication With Clients is a priority, we build open communication throughout the entire project",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 1,
    title:
      "Communication With Clients is a priority, we build open communication throughout the entire project",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
];
