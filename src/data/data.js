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
          description: "Visual Studio, VS Code, IntelliJ, Postman, Vercel, Docker",
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
          { label: "Tercih Ettiği Rol", value: "Frontend, Backend, Fullstack Developer" },
        ],
      },
      aboutMe: {
        title: "Hakkımda",
        paragraphs: [
          "Yazılım geliştirme alanında kendini sürekli geliştiren, çözüm odaklı ve sorumluluk almayı önemseyen bir geliştiriciyim. Backend tarafında Java ve Spring Boot kullanarak RESTful servisler geliştiriyor, PostgreSQL ile veritabanı tasarımı ve sorgu yapıları üzerinde çalışıyorum. Frontend tarafında HTML, CSS, JavaScript ve React ile arayüzler geliştirdim; Tailwind CSS ile modern ve düzenli tasarımlar oluşturdum. Git ve GitHub ile versiyon kontrol süreçlerini aktif olarak kullanıyor, temiz ve sürdürülebilir kod yazmaya özen gösteriyorum. Öğrenmeye açık bir yapıya sahibim ve teknik yetkinliklerimi gerçek projelerde daha da ileri taşımak istiyorum.",
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
          title: "Twitter Klonu - Full Stack Sosyal Medya Platformu",
          description: "Bu proje, Twitter'ın (X) temel işlevlerini kopyalamak için oluşturulmuş modern, duyarlı bir sosyal medya uygulamasıdır. Java Spring Boot backend ve React frontend ile güçlü bir full-stack mimariye sahiptir. Uygulama, güvenli JWT kimlik doğrulama, gerçek zamanlı akış, multimedya destekli tweet oluşturma, etkileşim özellikleri (beğeni, retweet, yorum) ve kapsamlı bir kullanıcı profil sistemi içerir. Arayüz, Tailwind CSS ile güçlendirilmiş duyarlı 3 sütunlu bir düzen kullanılarak X'in modern 'Karanlık Mod' estetiğine uyacak şekilde tamamen yeniden tasarlandı.",
          tags: ["React", "Spring Boot", "PostgreSQL", "Tailwind CSS", "JWT Auth", "REST API", "Java", "Vite"],
          image: "/images/project_2.png",
          links: {
            github: "https://github.com/AliYcll/twitter-clone-frontend",
            live: "https://github.com/AliYcll/twitter-clone-api",
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
        {
          id: 4,
          title: "Bandage E-Commerce - Modern Alışveriş Platformu",
          description: "Bu proje, gerçek bir e-ticaret deneyimi sunmak için geliştirilmiş, çok sayfalı ve dinamik yapıda bir alışveriş web sitesidir. Kullanıcıların ürünleri kategorilere göre gezebildiği, filtreleyebildiği ve detaylı inceleyebildiği kullanıcı dostu bir arayüze sahiptir. Proje içerisinde; vitrin (anasayfa), ürün listeleme, detaylı ürün sayfası, sepet yönetimi, sipariş oluşturma ve geçmiş siparişleri görüntüleme gibi kapsamlı sayfalar bulunur. Redux ile sepet ve kullanıcı oturum yönetimi sağlanırken, Tailwind CSS ile her ekrana uyumlu şık bir tasarım oluşturulmuştur.",
          tags: ["React", "Redux", "React Router", "Tailwind CSS", "Vite", "Axios", "JavaScript"],
          image: "/images/project_4.png",
          links: {
            github: "https://github.com/AliYcll/e-commerce",
            live: "https://bandage-shopping.vercel.app/",
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
          description: "Visual Studio, VS Code, IntelliJ, Postman, Vercel, Docker",
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
          { label: "Preferred Role", value: "Frontend, Backend, Fullstack Developer" },
        ],
      },
      aboutMe: {
        title: "About Me",
        paragraphs: [
          "I am a solution-oriented developer who constantly improves myself in software development and values taking responsibility. On the backend, I develop RESTful services using Java and Spring Boot, and work on database design and query structures with PostgreSQL. On the frontend, I develop interfaces using HTML, CSS, JavaScript, and React, creating modern and organized designs with Tailwind CSS. I actively use Git and GitHub for version control and prioritize writing clean, sustainable code. I am open to learning and eager to further advance my technical skills through real-world projects.",
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
          title: "Twitter Clone - Full Stack Social Media Platform",
          description: "This project is a modern, responsive social media application built to replicate the core functionality of Twitter (X). It features a robust full-stack architecture with a Java Spring Boot backend and a React frontend. The application includes secure JWT authentication, a real-time feed, tweet creation with multimedia support, interaction features (like, retweet, comment), and a comprehensive user profile system. The UI was completely redesigned to match the modern 'Dark Mode' aesthetic of X, utilizing a responsive 3-column layout powered by Tailwind CSS.",
          tags: ["React", "Spring Boot", "PostgreSQL", "Tailwind CSS", "JWT Auth", "REST API", "Java", "Vite"],
          image: "/images/project_2.png",
          links: {
            github: "https://github.com/AliYcll/twitter-clone-frontend",
            live: "https://github.com/AliYcll/twitter-clone-api",
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
        {
          id: 4,
          title: "Bandage E-Commerce - Modern Shopping Platform",
          description: "This project is a multi-page, dynamic shopping website designed to provide a real e-commerce experience. It features a user-friendly interface that allows users to browse products by category, apply filters, and view detailed product information. The application includes comprehensive pages such as a showcase (homepage), product listing, product details, cart management, order creation, and order history. It utilizes Redux for cart and user session management, and Tailwind CSS to ensure a stylish, responsive design across all devices.",
          tags: ["React", "Redux", "React Router", "Tailwind CSS", "Vite", "Axios", "JavaScript"],
          image: "/images/project_4.png",
          links: {
            github: "https://github.com/AliYcll/e-commerce",
            live: "https://bandage-shopping.vercel.app/",
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