export const data = {
  tr: {
    heroSection: {
      name: "Ali Yücel",
      tagline: "Yaratıcı düşünür Minimalizm aşığı", 
      description:
        "Merhaba, ben Ali. Ben bir full-stack geliştiriciyim. Harika kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir frontend ürünleri geliştiren bir geliştirici arıyorsanız, gelin el sıkışalım.",
      hireMe: "Beni İşe Al",
      githubText: "Github",
      linkedinText: "Linkedin",
      links: {
        linkedin: "https://www.linkedin.com/in/aliycll",
        github: "https://github.com/AliYcll",
      },
    },
    header: {
      skillsButton: "Yetenekler",
      projectsButton: "Projeler",
      hireMeButton: "Beni İşe Al",
      darkModeText: "KARANLIK MOD",
      lightModeText: "AYDINLIK MOD",
      turkishText: "SWITCH TO ENGLISH", 
      logoText: "A", 
    },
    skillsSection: {
      title: "Yetenekler",
      skills: [
        {
          name: "Programlama Dilleri",
          description: "C, C#, JavaScript (ES6+), Node.js, Java",
        },
        {
          name: "Framework / Kütüphaneler",
          description: "React, Redux, .NET Core MVC, Spring Boot, TailwindCSS",
        },
        {
          name: "Veritabanları",
          description: "MSSQL, SQLite, MongoDB, PostgreSQL",
        },
        {
          name: "Teknolojiler",
          description: "REST API, CRUD, MVC Architecture, JWT Authentication, Asynchronous Programming, Responsive Design, Git, GitHub",
        },
        {
          name: "Frontend",
          description: "HTML5, CSS3, JavaScript (ES6+), React, Redux, Context API, TailwindCSS, React Router, React Hooks, Responsive Design",
        },
        {
          name: "Araçlar",
          description: "Visual Studio, VS Code, Eclipse, Postman, Vercel",
        },
        {
          name: "Diller",
          description: "Türkçe (ana dil), İngilizce",
        },
      ],
    },
    profileSection: {
      title: "Profil",
      basicInfo: {
        title: "Profil", 
        items: [
          { label: "Doğum tarihi", value: "29.09.2000" },
          { label: "İkamet Şehri", value: "Hatay" },
          { label: "Eğitim Durumu", value: "İzmir Bakırçay Ünv. Bilgisayar Mühendisliği, 2024" },
          { label: "Tercih Ettiği Rol", value: "Frontend, UI" },
        ],
      },
      aboutMe: {
        title: "Hakkımda", 
        paragraphs: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.\n\n        Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
        ],
      },
    },
    projectsSection: {
      title: "Projeler", 
      githubLinkText: "GitHub",
      viewSiteLinkText: "Live Demo",
      projects: [
        {
          id: 1,
          title: "Teknolojik Yemekler - Dinamik Pizza Sipariş Uygulaması",
          description: "Bu proje, kurgusal bir yemek sipariş markası olan 'Teknolojik Yemekler' için geliştirilmiş bir tek sayfa uygulamasıdır (SPA). Kullanıcıların dinamik ve etkileşimli bir arayüz üzerinden pizza siparişi vermelerine olanak tanır. Uygulama; bir ana sayfa, çeşitli özelleştirme seçenekleri ve alan doğrulamaları içeren detaylı bir sipariş formu ve siparişin başarıyla alındığını gösteren bir onay sayfasından oluşmaktadır. Proje, component bazlı mimari, state yönetimi ve routing gibi temel React prensiplerini pekiştirmeyi amaçlamakta ve Cypress ile yazılmış uçtan uca testler içermektedir.",
          tags: ["React", "React Router", "Vite", "JavaScript", "CSS", "Cypress", "Axios"],
          image: "/images/project_1.jpg",
          links: {
            github: "https://github.com/AliYcll/react-ile-dinamik-pizza-projesi",
            live: "https://react-ile-dinamik-pizza-projesi.vercel.app/",
          },
        },
        {
          id: 2,
          title: "Reducer Hesap Makinesi - React Tabanlı Hesap Makinesi SPA",
          description: "Bu proje, React ve reducer deseni kullanılarak oluşturulmuş bir hesap makinesi için tek sayfalık bir uygulamadır. Temel aritmetik işlemleri (toplama, çıkarma, çarpma, bölme), hafıza fonksiyonları (M+, MR, MC) ve bir hesaplama geçmişi ekranı içerir. Hesap makinesi, çok haneli sayı girişi, zincirleme işlemler ve sayılar, operatörler, Enter (hesaplama için) ve Escape (mevcut girişi temizlemek için) için klavye etkileşimini destekler. Proje, bileşen tabanlı mimari ve reducer'lar ile durum yönetimi gibi temel React prensiplerini vurgular.",
          tags: ["React", "Reducer Pattern", "JavaScript", "CSS", "State Management"],
          image: "/images/project_2.jpg", 
          links: {
            github: "https://github.com/AliYcll/fsweb-s10g1-reducer-calculator",
            live: "https://reducer-calculator-six.vercel.app/",
          },
        },
        {
          id: 3,
          title: "Kişisel Portföy Web Sitesi",
          description: "Bu proje, kişisel yeteneklerimi, deneyimlerimi ve tamamladığım çalışmaları sergilemek amacıyla geliştirilmiş bir tek sayfa uygulamasıdır (SPA). Ziyaretçilerin benimle ilgili bilgilere kolayca ulaşmasını ve projelerimi incelemesini sağlar. Uygulama; bir ana sayfa, yeteneklerimi detaylandıran bir bölüm, profil bilgilerimi içeren bir kısım, tamamladığım projelerin listelendiği bir bölüm ve iletişim bilgilerimi barındıran bir altbilgiden oluşmaktadır. Proje, modern web geliştirme prensiplerini, duyarlı tasarımı ve kullanıcı deneyimini ön planda tutarak React, TailwindCSS ve Vite gibi teknolojilerle geliştirilmiştir.",
          tags: ["React", "TailwindCSS", "Vite", "JavaScript", "Duyarlı Tasarım", "ESLint"],
          image: "/images/project_3.jpg", 
          links: {
            github: "https://github.com/AliYcll/my-portfolio", 
            live: "https://ali-yucel.vercel.app/", 
          },
        },
      ],
    },
    footer: {
      heading1: "Bir sonraki ürününüzde",
      heading2: "birlikte çalışalım.",
      email: "ali.yucel675@hotmail.com",
      links: {
        github: { label: "Github", url: "https://github.com/AliYcll" },
        blog: { label: "Kişisel Blog", url: "https://github.com/AliYcll" },
        linkedin: { label: "LinkedIn", url: "https://www.linkedin.com/in/aliycll" },
      },
    },
  },
  en: {
    heroSection: {
      name: "Ali Yücel",
      tagline: "Creative thinker Minimalism lover",
    description:
        "Hi, I’m Ali. I’m a full-stack developer. If you are looking for a developer who crafts solid and scalable frontend products with great user experiences, let’s shake hands with me.",
      hireMe: "Hire Me",
      githubText: "Github",
      linkedinText: "Linkedin",
      links: {
        linkedin: "https://www.linkedin.com/in/aliycll",
        github: "https://github.com/AliYcll",
      },
    },
    header: {
      skillsButton: "Skills",
      projectsButton: "Projects",
      hireMeButton: "Hire Me",
      darkModeText: "DARK MODE",
      lightModeText: "LIGHT MODE",
      englishText: "TÜRKÇEYE GEÇ",
      logoText: "A",
    },
    skillsSection: {
      title: "Skills",
      skills: [
        {
          name: "Programming Languages",
          description: "C, C#, JavaScript (ES6+), Node.js, Java",
        },
        {
          name: "Frameworks / Libraries",
          description: "React, Redux, .NET Core MVC, Spring Boot, TailwindCSS",
        },
        {
          name: "Databases",
          description: "MSSQL, SQLite, MongoDB, PostgreSQL",
        },
        {
          name: "Technologies",
          description: "REST API, CRUD, MVC Architecture, JWT Authentication, Asynchronous Programming, Responsive Design, Git, GitHub",
        },
        {
          name: "Frontend",
          description: "HTML5, CSS3, JavaScript (ES6+), React, Redux, Context API, TailwindCSS, React Router, React Hooks, Responsive Design",
        },
        {
          name: "Tools",
          description: "Visual Studio, VS Code, Eclipse, Postman, Vercel",
        },
        {
          name: "Languages",
          description: "Turkish (native), English",
        },
      ],
    },
    profileSection: {
      title: "Profile",
      basicInfo: {
        title: "Profile",
        items: [
          { label: "Date of Birth", value: "29.09.2000" },
          { label: "City of Residence", value: "Hatay" },
          { label: "Education Status", value: "Izmir Bakircay University, Computer Engineering, 2024" },
          { label: "Preferred Role", value: "Frontend, UI" },
        ],
      },
      aboutMe: {
        title: "About Me",
        paragraphs: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.\n\n        Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
        ],
      },
    },
    projectsSection: {
      title: "Projects",
      githubLinkText: "GitHub",
      viewSiteLinkText: "Live Demo",
      projects: [
        {
          id: 1,
          title: "Teknolojik Yemekler - A Dynamic Pizza Ordering SPA",
          description: "This project is a single-page application for 'Teknolojik Yemekler', a fictional food delivery service. It's designed to allow users to order pizza through a dynamic and interactive interface. The application consists of a welcoming homepage, a detailed order form with various customization options and input validation, and a final success page to confirm the order. The project emphasizes core React principles such as component-based architecture, state management, and routing, and it includes end-to-end tests written with Cypress to ensure functionality.",
          tags: ["React", "React Router", "Vite", "JavaScript", "CSS", "Cypress", "Axios"],
          image: "/images/project_1.jpg",
          links: {
            github: "https://github.com/AliYcll/react-ile-dinamik-pizza-projesi",
            live: "https://react-ile-dinamik-pizza-projesi.vercel.app/",
          },
        },
        {
          id: 2,
          title: "Reducer Calculator - A React-based Calculator SPA",
          description: "This project is a single-page application for a calculator built using React and the reducer pattern. It features basic arithmetic operations (addition, subtraction, multiplication, division), memory functions (M+, MR, MC), and a calculation history display. The calculator supports multi-digit number input, chained operations, and keyboard interaction for numbers, operators, Enter (for calculation), and Escape (to clear current entry). The project emphasizes core React principles such as component-based architecture and state management with reducers.",
          tags: ["React", "Reducer Pattern", "JavaScript", "CSS", "State Management"],
          image: "/images/project_2.jpg", 
          links: {
            github: "https://github.com/AliYcll/fsweb-s10g1-reducer-calculator",
            live: "https://reducer-calculator-six.vercel.app/",
          },
        },
        {
          id: 3,
          title: "Personal Portfolio Website",
          description: "This project is a single-page application (SPA) developed to showcase my personal skills, experiences, and completed works. It allows visitors to easily access information about me and explore my projects. The application consists of a homepage, a section detailing my skills, a part containing my profile information, a section listing my completed projects, and a footer with my contact details. The project was developed using React, TailwindCSS, and Vite, following modern web development principles with a focus on responsive design and user experience.",
          tags: ["React", "TailwindCSS", "Vite", "JavaScript", "Responsive Design", "ESLint"],
          image: "/images/project_3.jpg", 
          links: {
            github: "https://github.com/AliYcll/my-portfolio", 
            live: "https://ali-yucel.vercel.app/", 
          },
        },
      ],
    },
    footer: {
      heading1: "Let's work together on",
      heading2: "your next product.",
      email: "ali.yucel675@hotmail.com",
      links: {
        github: { label: "Github", url: "https://github.com/AliYcll" },
        blog: { label: "Personal Blog", url: "https://github.com/AliYcll" },
        linkedin: { label: "LinkedIn", url: "https://www.linkedin.com/in/aliycll" },
      },
    },
  },
};