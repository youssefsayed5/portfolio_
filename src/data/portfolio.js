export const profile = {
  name: "Youssef Sayed Ahmed",
  role: "Backend Developer",
  stack: "Node.js",
  location: "Cairo, Egypt",
  email: "youssefahmed200551@gmail.com",
  github: "https://github.com/youssefsayed5",
  // Add your LinkedIn profile URL here; the icon and links appear automatically once it is set.
  linkedin: "",
  // Put your CV in the /public folder with this exact name.
  cv: "https://drive.google.com/uc?export=download&id=1ih5KcWm3fOvRoj44fcl2FBgCNiBwLZYN",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: "4+", label: "Projects" },
  { value: "Node.js", label: "Backend" },
  { value: "CS & AI", label: "Student" },
  { value: "Backend + AI", label: "Focus" },
];

export const skillGroups = [
  { title: "Languages", icon: "code", items: ["JavaScript", "TypeScript", "Java", "Python", "C++"] },
  { title: "Backend", icon: "server", items: ["Node.js", "Express.js", "NestJS"], primary: true },
  { title: "Databases", icon: "db", items: ["MongoDB", "MySQL", "Redis", "Firebase"] },
  {
    title: "Backend Concepts",
    icon: "shield",
    items: ["RESTful APIs", "MVC Architecture", "Authentication & Authorization", "JWT", "RBAC", "Middleware", "Input Validation", "Error Handling", "Clean Code"],
    primary: true,
  },
  { title: "Tools", icon: "tool", items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "MySQL Workbench"] },
  { title: "Frontend", icon: "layout", items: ["React", "HTML5", "CSS3", "Bootstrap"], minor: true },
];

export const experience = [
  {
    org: "FlyRank",
    title: "Backend AI Engineering Intern",
    period: "Jul 2026 – Present",
    points: [
      "Selected for the FlyRank Backend AI Engineering internship program.",
      "Learning LLM integration, AI Agents, RAG, API development, and backend architecture.",
      "Completing a capstone project focused on AI backend engineering.",
    ],
  },
  {
    org: "Route Academy",
    title: "Backend Development Trainee — Node.js",
    period: "Feb 2026 – Present",
    points: [
      "Hands-on training in Node.js, Express.js, NestJS, and TypeScript.",
      "Built secure RESTful APIs using MongoDB, JWT Authentication, Redis, and MVC Architecture.",
      "Developed real-world backend applications following clean code and software engineering best practices.",
    ],
  },
  {
    org: "Digital Egypt Pioneers — DEPI",
    title: "React Frontend Web Developer",
    period: "Jul 2025 – Dec 2025",
    points: [
      "Completed a 6-month national software development program sponsored by Egypt's Ministry of Communications and Information Technology.",
      "Trained in React.js, component-based architecture, responsive design, and real-world project development.",
      "Collaborated with iCareer, Egypt University of Informatics, and SYE community.",
    ],
  },
];

export const projects = [
  {
    name: "Social Media",
    subtitle: "Social Networking Platform",
    featured: true,
    description: "A full-stack social media platform with a Node.js/Express.js backend and React frontend.",
    features: [
      "User authentication", "Profile management", "Posts", "Social interactions", "RESTful APIs",
      "MVC architecture", "Input validation", "Authentication & authorization",
      "Centralized error handling", "Reusable backend components",
    ],
    tech: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Mongoose", "Redis", "Socket.IO"],
    github: "https://github.com/you752/Social_Media",
    demo: "https://social-media-black-nine.vercel.app/",
    visual: {
      file: "post.routes.ts",
      lines: [
        "// Layered request flow (illustrative)",
        'router.post("/posts",',
        "  authenticate,",
        "  validate(createPostSchema),",
        "  postController.create",
        ");",
        "",
        "// controller -> service -> model",
        "// errors handled centrally",
      ],
    },
  },
  {
    name: "Saraha App",
    subtitle: "Anonymous Messaging Platform",
    featured: true,
    description: "A secure anonymous messaging platform built with Node.js and MongoDB.",
    features: [
      "JWT authentication", "OTP email verification", "Password hashing with bcrypt",
      "Authorization middleware", "Anonymous messaging", "Message replies", "Profile management",
      "Redis OTP storage and expiration", "Email verification", "Image uploads",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Redis", "JWT", "Nodemailer", "Multer"],
    github: "https://github.com/you752/saraha-app",
    visual: {
      file: "otp.service.js",
      lines: [
        "// OTP flow (illustrative)",
        "const otp = generateOtp();",
        "await redis.set(",
        "  `otp:${email}`,",
        "  await hash(otp),",
        '  "EX", OTP_TTL_SECONDS',
        ");",
        "await sendMail(email, otp);",
      ],
    },
  },
  {
    name: "Green Cart",
    subtitle: "Grocery Delivery E-Commerce Web Application",
    description: "A full-stack grocery delivery platform developed using the MERN stack as part of a 4-person agile team.",
    features: ["Product catalog", "Shopping cart", "Order management", "User authentication"],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    demo: "https://greencart-gs.vercel.app",
  },
  {
    name: "SayaraTech",
    subtitle: "Automotive Management System",
    description: "A multi-role desktop application for automotive service management developed as a university team project.",
    features: [
      "Role-based access control", "Admin / Staff / Customer roles", "Appointment scheduling",
      "Vehicle inventory", "Sales tracking", "Employee management", "Secure authentication",
      "Parameterized SQL queries", "ACID database transactions",
    ],
    tech: ["Java", "Swing/AWT", "MySQL", "JDBC", "MVC"],
  },
];

export const education = {
  school: "Benha University",
  degree: "Bachelor of Computer Science and Artificial Intelligence",
  period: "2024 – 2028",
  gpa: "3.7",
  courses: ["Data Structures", "Algorithms", "Machine Learning", "Database Systems", "Software Engineering", "Web Development"],
};

export const certifications = [
  { title: "React Frontend Web Developer", issuer: "Digital Egypt Pioneers / MCIT", date: "Jun – Dec 2025" },
  { title: "Business English Track", issuer: "Digital Egypt Pioneers / SYE English Community", date: "Jun – Dec 2025" },
  { title: "Freelance Training Program", issuer: "ITIDA Gigs & eyouth", date: "2025" },
  { title: "Front-End Technical Contributor", issuer: "GDG on Campus Benha / Benha University", date: "BootCamp 25/26" },
];

export const volunteer = {
  org: "GDG on Campus Benha",
  title: "Front-End Technical Volunteer",
  period: "Jan 2026 – Feb 2026",
  points: [
    "Front-End Technical contributor at GDG on Campus Benha Boot Camp 25/26.",
    "Supported event operations and provided technical assistance to participants.",
  ],
};
