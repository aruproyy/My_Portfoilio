import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    java
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Academics",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Java Programmer",
      icon: backend,
    },
    {
      title: "AI/ML",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
  ];


  
  const experiences = [
    {
      title: "Future Institute of Engineering and Management",
      company_name: "B.Tech",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2022 - Present",
      points: [
        "Major in Electronics and Communication",
        "Over all CGPA: 7.64 (6th Sem)",
        "Completed Industrial Training at Ardent Computech Pvt. Ltd",
      ],
    },
    {
      title: "Jnan Chandra Ghosh Polytechnic",
      company_name: "Diploma",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2019 - 2022",
      points: [
        "Major in Electronics and Telecommunication",
        "Over all CGPA: 8.3",
      ],
    },
    {
      title: "Kishore Bharati High School",
      company_name: "Secondary",
      icon: shopify,
      iconBg: "#383E56",
      date: "2016",
      points: [
        "Complete my Schooling under WBBSE Board",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Arup proved me wrong.",
      name: "Priyanka Bal",
      // designation: "CFO",
      // company: "Microsoft",
      // image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Arup does.",
      name: "Himesh Bhattacharjee",
      // designation: "COO",
      // company: "Google",
      // image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Arup optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Debolina Saha",
      // designation: "CTO",
      // company: "Youtube",
      // image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "E-Commerce",
      description:
        "A web-based platform that enables users to browse, shop, and purchase products from a variety of categories, providing a seamless and user-friendly online shopping experience with secure payment options and efficient order management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfoilo",
      description:
        "A web-based portfolio that highlights my journey as an electronics and communication engineering student, showcasing my projects, skills, and experience in web development, offering an engaging and interactive way to explore my work and professional growth.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects};