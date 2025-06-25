export const navItems = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
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
    title: "Currently building...",
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

export const projects = [
  {
    id: 1,
    title: "Inventory Management System",
    des: "Developed an inventory management solution with React.js and .NET Core, implementing role-based authentication using ASP.NET Identity. Deployed on-premises with integrated monitoring tools.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Customer Support Portal",
    des: "Developed a customer support portal using React.js and Spring Boot, integrating PostgreSQL for secure data storage. Automated testing and deployment with Jenkins pipelines.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg"],
    link: "/ui.yoom.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Ramanpreet was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, she is the ideal partner.",
    // name: "Michael Johnson",
    // title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Ramanpreet was an outstanding experience. Their professionalism, timely communication, and commitment to delivering high-quality results were evident throughout the project. Ramanpreet's passion for every aspect of development truly shines. If you're looking to enhance your website and strengthen your brand, they are the perfect partner.",
    // name: "Michael Johnson",
    // title: "Director of AlphaStream Technologies",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-stack Developer",
    organization: "N-able",
    desc: "Developed web applications using MERN stack (MongoDB, Express, React/Redux, Node.js) and worked with Angular for component-based development. Built responsive SPAs using React, Redux, and TypeScript, implementing state management, routing, and API integrations (REST & GraphQL). Utilized Spring Boot for microservices and backend logic, integrating Node.js/Express for server-side functionality. Focused on reusable components, performance optimization, and scalable architecture.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Developer",
    organization: "Innovapost",
    desc: "Worked with React.js Virtual DOM, component-based architecture, and NPM libraries for frontend development. Used AngularJS for form validations and performance optimization. Developed RESTful APIs and microservices using Spring Boot, integrating with MongoDB via Mongoose. Built scalable backend solutions with Node.js, Express.js, and load-balanced Web APIs. Utilized Git for version control and collaborated on multiple services like scheduling and logging.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Developer",
    organization: "ZINation - Better StorySelling",
    desc: "Developed AngularJS-based Single Page Applications (SPAs) with MVC architecture, implementing features like data binding, routing, and custom directives. Built bill generation and plan management modules using AngularJS. Designed and developed microservices using Spring Boot with actuators and health checks. Worked on MEAN stack (MongoDB, Express.js, AngularJS, Node.js) for microservices deployment on a private OpenStack cloud platform.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/kaur-ramanpreet/",
    img: "/link.svg",
  },
];
