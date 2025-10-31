import { Project, Experience, Certification, CaseStudy, MediumArticle } from './types';

export const portfolioData = {
  name: 'Tanmay Kalbande',
  title: 'Data Scientist & AI Specialist',
  about: "Data science enthusiast skilled in statistical analysis, machine learning, and data visualization. Passionate about uncovering insights from complex datasets to drive informed decision-making. Focused on contributing to impactful projects and staying updated with the latest advancements in data science.",
  readme: `
# Welcome to My Portfolio OS!

This is an interactive desktop experience built to showcase my skills and projects.

## Features:
- **Draggable Windows:** Grab the title bar to move windows around.
- **Snapping Desktop Icons:** Drag and drop desktop icons; they'll snap to the grid.
- **App Dock:** Launch my main applications from the dock.
- **AI Assistant:** Ask the AI anything about my portfolio.
- **Terminal:** Use command-line instructions to navigate my profile.
- **Customization:** Change the theme and wallpaper in the Settings app.

Feel free to explore and get in touch!
`,
  stats: {
    experience: "1.10",
    projects: 11,
    certifications: 4,
  },
  technicalSummary: [
    "Hands-on in end-to-end development of predictive modeling solutions.",
    "Proficient in Python (NumPy, Pandas, Scikit-learn, Jupyter).",
    "SQL: SQL Server, Spark.",
    "Analytics: Machine learning (supervised/unsupervised), deep learning, neural networks, NLP.",
    "Data Visualization: Matplotlib, Seaborn, Tableau, PowerBI.",
    "Big Data: Hadoop, Spark.",
    "Ethical AI: Understanding of ethical considerations in AI development and deployment."
  ],
  tools: {
    languages: ["Python", "SQL", "R", "C"],
    databases: ["SQL Server", "Spark"],
    ides: ["PyCharm", "VS Code", "Atom", "Jupyter Notebooks"],
    bi: ["Excel", "Tableau", "PowerBI"]
  },
  skills: ["Python", "R", "SQL", "Machine Learning", "Statistical Analysis", "Data Visualization"],
  interests: ["Artificial Intelligence", "Big Data", "Natural Language Processing", "Ethical AI", "Deep Learning", "TinyML"],
  contact: {
    email: "kalbandetanmay@gmail.com",
    phone: "737-838-1494",
    linkedin: "https://www.linkedin.com/in/tanmay-kalbande",
    github: "https://github.com/tanmay-kalbande",
    medium: "https://medium.com/@tanmaykalbande",
    whatsapp: "https://wa.me/7378381494"
  },
  experience: [
    {
      role: "Analyst",
      company: "Capgemini",
      duration: "March 2024 - Present",
      duties: [
        "Utilized advanced analytical techniques for actionable insights.",
        "Collaborated with cross-functional teams to translate data findings into business strategies.",
        "Designed and implemented interactive dashboards for visualizing key metrics."
      ]
    },
    {
      role: "Data Analyst Trainee",
      company: "Rubixe",
      duration: "Nov 2022 - Dec 2023",
      duties: [
        "Worked with teams to gather, clean, and organize data.",
        "Explored data patterns and trends to shape practical strategies.",
        "Created clear reports and interactive visualizations."
      ]
    }
  ] as Experience[],
  projects: [
    {
      category: "AI Project",
      title: "Pustakam - The AI Book Writer",
      description: "An AI-powered application that generates complete, structured books on any topic, maintaining context across chapters. Supports multiple AI models and operates locally for privacy.",
      links: {
        live: "https://pustakam-ai.vercel.app/"
      },
      icon: "📚"
    },
    {
      category: "AI Project",
      title: "Ai-Tutor - Your Personal AI Tutor",
      description: "A personalized learning environment built around Google's Gemma. Features different AI personas, context-aware quizzes, and interactive learning-journey flowcharts.",
      links: {
        live: "https://ai-tutor-test-it-out-here.vercel.app/"
      },
      icon: "🎓"
    },
    {
      category: "Work Project",
      title: "Web Traffic Analysis for Conversion Rate Improvement",
      description: "Analyzed website traffic data using Python and Google Analytics for Zoompare.",
      contributions: ["Performed web traffic analysis", "Implemented A/B testing", "Aligned findings with engineering teams"],
      links: {},
      icon: "📈"
    },
    {
      category: "Work Project",
      title: "Customer Segmentation using Clustering Analysis",
      description: "Applied K-means clustering to customer data and visualized resulting segments for Rubixe.",
      contributions: ["Implemented K-means clustering algorithm", "Evaluated and visualized distinct customer segments"],
      links: {},
      icon: "👥"
    },
    {
      category: "Work Project",
      title: "Lead Quality Prediction",
      description: "Explored data and utilized multiple models to predict lead quality for sales prioritization for Rubixe.",
      links: {},
      icon: "🎯"
    },
    {
      category: "Work Project",
      title: "Movie Recommendation System",
      description: "Developed a collaborative filtering-based recommendation system for personalized movie suggestions for Rubixe.",
      links: {},
      icon: "🎬"
    },
    {
      category: "Work Project",
      title: "Sentiment Analysis of Customer Reviews",
      description: "Analyzed sentiment in customer reviews using NLP techniques for Sentix.",
      links: {},
      icon: "💬"
    },
    {
      category: "Work Project",
      title: "Predictive Maintenance System",
      description: "Developed a predictive maintenance system to anticipate equipment failures for TechCorp.",
      links: {},
      icon: "🛠️"
    },
    {
      category: "Fun Project",
      title: "Expense Tracker",
      description: "Web application for tracking personal expenses with data visualization and CSV import/export functionality.",
      links: {
        live: "https://expense-tail.vercel.app/",
        github: "https://github.com/tanmay-kalbande/Expense-Tracker"
      },
      icon: "💸"
    },
    {
      category: "Fun Project",
      title: "Table Extractor",
      description: "A Flask web app for extracting tables from web pages, using BeautifulSoup and DataTables.",
      links: {
        live: "https://table-extractor.onrender.com/",
        github: "https://github.com/tanmay-kalbande/table-extractor-app"
      },
      icon: "📋"
    },
    {
      category: "Fun Project",
      title: "Goal Tracker",
      description: "Helps you achieve your goals one day at a time!",
      links: {
        live: "https://tanmay-kalbande.github.io/Goal-Tracker/",
        github: "https://github.com/tanmay-kalbande/Goal-Tracker"
      },
      icon: "🏁"
    },
    {
      category: "Fun Project",
      title: "The Scam Master Podcast",
      description: "Exposes fraudsters and provides guidance to outwit them.",
      links: {
        website: "https://the-scam-master.vercel.app/",
        instagram: "https://www.instagram.com/the_scam_master/",
        github: "https://github.com/the-scam-master/podcast_webpage"
      },
      icon: "🎙️"
    },
    {
      category: "Fun Project",
      title: "Incident Tracker",
      description: "Tool to record, track, and manage incidents efficiently.",
      links: {
        live: "https://tanmay-kalbande.github.io/Incident-Tracker/",
        github: "https://github.com/tanmay-kalbande/Incident-Tracker"
      },
      icon: "🚨"
    },
    {
      category: "AI Project",
      title: "Bias & Fairness Checker [AI]",
      description: "AI tool to detect potential biases in text and suggest inclusive language improvements.",
      links: {
        live: "https://bias-checker.onrender.com/",
        github: "https://github.com/tanmay-kalbande/bias-fairness-checker"
      },
      icon: "🤖"
    },
    {
      category: "AI Project",
      title: "AI Data Structurer [AI]",
      description: "AI-powered web app that transforms unstructured data into organized formats.",
      links: {
        github: "https://github.com/tanmay-kalbande/ai-data-structurer"
      },
      icon: "✨"
    },
    {
      category: "Fun Project",
      title: "Enhanced macOS Notes",
      description: "Web-based note-taking app mimicking macOS aesthetics, with dark mode and rich text formatting.",
      links: {
        live: "https://enhanced-mac-os-notes.vercel.app/",
        github: "https://github.com/tanmay-kalbande/Enhanced-macOS-Notes"
      },
      icon: "📝"
    },
    {
      category: "Fun Project",
      title: "Life Loops - Game Edition",
      description: "Gamified habit-tracking web app with a retro-styled point system.",
      links: {
        live: "https://life-loops-game-edition.vercel.app/",
        github: "https://github.com/tanmay-kalbande/Life-Loops---Game-Edition"
      },
      icon: "🎮"
    },
    {
      category: "Fun Project",
      title: "Jawala Vyapar",
      description: "Online phone directory for local businesses with category filtering and multi-language support.",
      links: {},
      icon: "📒"
    },
    {
      category: "Fun Project",
      title: "Mindfulness App",
      description: "Simple mindfulness web app with yoga and meditation guides.",
      links: {
        live: "https://breathewell.vercel.app/",
        github: "https://github.com/tanmay-kalbande/Mindfulness-App"
      },
      icon: "🧘"
    },
    {
      category: "AI Project",
      title: "Report Generator [AI]",
      description: "AI-powered tool to capture data and generate insights for business decisions using Python.",
      links: {},
      icon: "📄"
    },
    {
      category: "BI Dashboard",
      title: "Power BI: Data Wave Metrics in India",
      description: "Explores wireless data usage and ARPU metrics, with insights into quarterly revenue and data consumption trends.",
      links: {},
      icon: "📊",
      appId: 'data_wave_dashboard'
    }
  ] as Project[],
  certifications: [
    { name: "AWS Cloud Technical Essentials", issuer: "AWS", date: "Dec 2024" },
    { name: "Foundations: Data, Data, Everywhere", issuer: "Google", date: "Apr 2024" },
    { name: "Technical Support Fundamentals", issuer: "Google", date: "Dec 2023" },
    { name: "Certified Data Scientist", issuer: "IABAC", date: "Sep 2023" },
    { name: "Data Science Foundation", issuer: "IABAC", date: "Aug 2023" },
    { name: "Certified Data Scientist Certification", issuer: "DataMites™", date: "Apr 2023" },
    { name: "100 Days of Code: The Complete Python Pro Bootcamp", issuer: "London App Brewery", date: "Ongoing" },
    { name: "The Data Science Course Complete Data Science Bootcamp", issuer: "365 Data Science", date: "Ongoing" }
  ] as Certification[],
};

export const secretProjects = [
    {
      icon: "🌌",
      title: "Project Nebula",
      description: "A generative art project using GANs to create unique cosmic visuals based on user-inputted text prompts. Explores the intersection of AI creativity and astronomy."
    },
    {
      icon: "🎵",
      title: "AI Music Composer",
      description: "A recurrent neural network (RNN) trained on classical music datasets to compose short, original MIDI melodies. A fun exploration into algorithmic composition."
    },
    {
      icon: "📈",
      title: "Real-time Stock Anomaly Detector",
      description: "A conceptual project to use unsupervised learning models (like Isolation Forest) to detect unusual trading patterns in real-time stock market data streams."
    },
    {
      icon: "🤖",
      title: "TinyML Keyword Spotting",
      description: "An experiment in deploying a lightweight neural network on a microcontroller (like an Arduino Nano) to recognize custom keywords (e.g., 'Hey, Portfolio!')."
    }
];


export const caseStudies: CaseStudy[] = [
    {
        id: 'pustakam-ai-book-writer',
        title: "I Built an AI (Pustakam) That Writes Entire Books",
        subtitle: "by Tanmay Kalbande",
        date: "September 11, 2025",
        project: "Pustakam",
        snippet: "I'll be honest Pustakam exists because I'm terrible at following through on learning projects. Picture this: I'd get excited about learning... I'd have three browser tabs still open, half-watched videos, and exactly zero understanding. Sound familiar?",
        content: `![Pustakam Analytics Dashboard](https://cdn.jsdelivr.net/gh/continentalstorage888-ops/didactic-meme@main/Screenshot%202025-10-30%20at%2021-57-41%20Pustakam%20AI%20Book%20Generation%20Engine.png)

### The Problem
I'm terrible at following through on learning projects. I'd get excited about a new topic, bookmark fifteen articles, queue up six tutorials, and download two PDFs. Three weeks later, I'd have scattered resources, half-watched videos, and zero actual understanding. The problem wasn't a lack of information, but that it was inconsistent, aimed at different audiences, and lacked a cohesive structure. I needed a single, perfectly tailored book for what I wanted to learn.

### My Approach
I had a simple realization: what if I could make an AI write that book? Not just a single ChatGPT dump, but a structured, coherent book with chapters that build on each other, a logical table of contents, and consistency from start to finish. This led to the creation of Pustakam, an AI-powered book generation engine.

### Challenges Faced
My initial plan to "just ask GPT to write a book" failed spectacularly. The output was a rambling, repetitive mess. The real challenge was maintaining context and consistency across multiple, sequential API calls. Generating a full book in one go overwhelmed the AI, but breaking it up lost the thread between chapters.

Another significant challenge was managing the UI state during a long, sequential generation process. The app needed to show progress, handle errors, and remain responsive for several minutes while generating a roadmap, 8+ chapters, and supplementary content. TypeScript was crucial for managing this complexity.

### Solution Architecture
After many failed attempts, I developed a four-step process that worked:
1.  **Define the Scope:** The user specifies not just the topic, but the target audience and assumed prior knowledge.
2.  **AI Proposes a Roadmap:** The AI first generates a detailed outline (table of contents). This allows the user to validate the structure before committing to a full generation.
3.  **Sequential Generation with Memory:** This was the breakthrough. When generating a chapter, the AI is fed a summary of the preceding chapters. This "memory" ensures context is maintained.
4.  **Final Polish:** The AI writes an introduction, conclusion, and glossary based on the complete, generated content, which is then stitched into clean Markdown.

For the tech stack, I prioritized privacy and flexibility. The app is **local-first**, with all data and API keys stored in the browser's local storage. This eliminates server costs and privacy concerns. It also supports **multiple AI models** (Gemini, Mistral, ZhipuAI), allowing users to choose the best tool for their topic and budget.

### Results & Impact
Pustakam successfully transforms a user prompt into a structured, downloadable book. Key features I'm proud of include:
-   **The Analytics Dashboard:** After generation, the app provides metrics like reading time, complexity score, and topic breakdown, making the output feel more tangible.
-   **A Polished Reading Experience:** I invested significant time in typography and spacing to ensure the digital output felt like a real book.
-   **Clean Markdown Export:** The final book is exported in a universal, non-proprietary format, giving the user full ownership.

While Pustakam won't replace expert-written literature, it serves as a powerful tool for rapidly generating a structured learning resource on a specific topic, solving the initial problem of scattered and inconsistent information.

You can try it here: [https://pustakam-ai.vercel.app/](https://pustakam-ai.vercel.app/)
`
    },
    {
        id: 'ai-tutor-gemma',
        title: "Why I Built My Own AI Tutor Instead of Using ChatGPT",
        subtitle: "by Tanmay Kalbande",
        date: "October 19, 2025",
        project: "Ai-Tutor",
        snippet: "I built Ai-Tutor because I was already obsessed with Gemma and wanted an excuse to use it more. Here's what my study sessions looked like: one AI chat open for explanations. Another tab for generating practice questions. My notes app buried somewhere.",
        content: `![Ai-Tutor Welcome Screen](https://cdn.jsdelivr.net/gh/continentalstorage888-ops/didactic-meme@main/ai-tutot-welcome-screen.png)

### The Problem
My study workflow was chaos. I'd have one AI chat open for explanations, another for generating practice questions, my notes app buried somewhere, and a dozen other browser tabs I'd opened days ago. By the end of a session, I'd have useful information scattered everywhere with no cohesive structure. The tools were fine, but the process was inefficient and disorganized. I needed a single, integrated environment to chat, generate quizzes, take notes, and visualize my learning journey.

### My Approach
I decided to build a unified learning platform centered around Google's Gemma model, which I found to be exceptionally clear and effective for tutoring. The goal was to create a clean, clutter-free interface where a user could pick an AI persona and have all their learning tools in one place. This became Ai-Tutor, a project I built over four weeks of nights and weekends.

### Challenges Faced
The most difficult feature to implement was the **learning flowchart**. The initial idea was to visualize the conversation as a mind map. My first attempts produced messy, unreadable diagrams with too many nodes and confusing connections. My second attempt to improve the prompt was better but still resulted in a static, non-interactive SVG.

The breakthrough came when I realized the flowchart wasn't for documentation, but for reflection. I rebuilt it from scratch to have the AI analyze the conversation and produce a structured learning map of only the key concepts and their relationships. I then used an interactive canvas that supported zooming and panning, which finally made the feature useful.

### Solution Architecture
Ai-Tutor is built on several core features designed to create a personalized and effective learning environment:
-   **Gemma-centric Design:** The app is foundationally built to leverage the strengths of Google's Gemma model, with Mistral and ZhipuAI available as alternatives.
-   **AI Personas:** Users can choose from four distinct personas (Friendly Mentor, Exam Coach, etc.). This allows the user to match the AI's teaching style to their current learning mood, which has a significant impact on the experience.
-   **Context-Aware Quizzes:** Instead of generic questions, the quiz feature analyzes the entire conversation history to generate questions specifically about the concepts the user has been learning and struggling with.
-   **Interactive Learning Flowchart:** Visualizes the user's conversation as an interactive knowledge map, showing how questions and concepts connect.
-   **Local-First Persistence:** All conversations and notes are saved to the browser's local storage, ensuring privacy and instant loading.

### Results & Impact
Ai-Tutor successfully consolidates a scattered learning workflow into a single, cohesive application.
-   The persona system proved to be a genuinely useful feature, not just a gimmick.
-   Context-aware quizzes provide a much more effective way to test retention compared to generic quiz generators.
-   The interactive flowchart, despite its challenges, offers a unique way for users to reflect on and understand the structure of what they've learned.

The project reinforced that for AI applications, the user experience and workflow design are just as important as the underlying model. It's a Progressive Web App (PWA), so it can be installed like a native app.

Check it out here: [https://ai-tutor-test-it-out-here.vercel.app/](https://ai-tutor-test-it-out-here.vercel.app/)
`
    }
];

export const mediumArticles: MediumArticle[] = [
    {
        title: "Life as a CTF Challenge: How to Hack Your Personal Growth",
        snippet: "In cybersecurity, Capture the Flag (CTF) competitions train experts to uncover hidden vulnerabilities in code—flaws that could cripple…",
        date: "January 28, 2024",
        link: "https://medium.com/@tanmaykalbande/life-as-a-ctf-challenge-how-to-hack-your-personal-growth-bc0b73069dd5"
    },
    {
        title: "The Silent Urge: Why We’re All Secretly Chasing Belonging",
        snippet: "We like to pretend we don’t care. We claim independence, declaring, “I don’t need anyone!” But deep down, even the most rebellious souls…",
        date: "January 27, 2024",
        link: "https://medium.com/@tanmaykalbande/the-silent-urge-why-were-all-secretly-chasing-belonging-d6e57e0e22fe"
    },
    {
        title: "Living Fully in a World Where Time Only Moves Forward",
        snippet: "Republic Day, like all days, slips away quietly. Once gone, it becomes a memory untouchable, unchangeable. This truth about time can haunt…",
        date: "January 26, 2024",
        link: "https://medium.com/@tanmaykalbande/living-fully-in-a-world-where-time-only-moves-forward-37b128bd0e96"
    },
    {
        title: "The Power of Life’s Loops: Understanding Our Daily Patterns",
        snippet: "Life is a series of repetitions. When we hear the word “loop,” we instantly think of actions or patterns that repeat themselves in our…",
        date: "January 21, 2024",
        link: "https://medium.com/@tanmaykalbande/the-power-of-lifes-loops-understanding-our-daily-patterns-1191b0fa19d0"
    }
];