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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    member1,
    member2,
    member3,
    pic4,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "work",
      title: "Timeline",
    },
    {
      id: "members",
      title: "Members",
    },
    {
      id: "about",
      title: "Sponsors",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "eMag",
      icon: web,
    },
    {
      title: "Aqua Carpatica",
      icon: backend,
    },
    {
      title: "",
      icon: "x",
    },
    {
      title: "",
      icon: "x",
    },
  ];
  
  const experiences = [
    {
      title: "Business Training",
      company_name: "Sesiune de Business Training",
      icon: starbucks,
      iconBg: "#383E56",
      date: "19 martie 2024",
      points: [
        "În cadrul sesiunii de Business Training, alături de reprezentanții proiectului VSFA și invitatul special, Alin Caraman, patronul Bon Mariage, am prezentat tinerilor ce înseamnă viața unui antreprenor și obstacolele peste care aceștia trec. De asemenea, am răspuns la numeroasele întrebări legate de antreprenoriat.",
      ],
      image: carrent
    },
    {
      title: "Management Training",
      company_name: "Seminar de Management Training",
      icon: tesla,
      iconBg: "#383E56",
      date: "16 ianuarie 2024",
      points: [
        "În cadrul seminarului de Management Training, am învățat de la General Managerul SYSTEMATIC, domnul Lucian Maican, responsabilitățile și atribuțiile unui manager. De asemenea, am descoperit noutăți legate de industria IT și am primit sfaturi în domeniu.",
      ],
      image: jobit
    },
    {
      title: "Voluntariat de Crăciun",
      company_name: "Activitate de sarbatori",
      icon: shopify,
      iconBg: "#383E56",
      date: "18-22 decembrie 2023",
      points: [
        "În cadrul acestei activități, ne-am implicat în campania “Fii Moș Crăciun pentru o zi” și am ajutat la împachetarea și dăruirea de cadouri de Crăciun copiilor nevoiași din 24 de comune din județele Constanța, Teleorman și Dolj. Am învățat cum să fim mai buni unii cu alții și am adus magia sărbătorilor în sufletele noastre și ale copiilor.",
      ],
      image: tripguide,
    },
    {
      title: "Financial Training",
      company_name: "Educatie financiara",
      icon: meta,
      iconBg: "#383E56",
      date: "23 noiembrie 2023",
      points: [
        "In cadrul seminarului de Financiar Training, domnul Alexandru Niculescu, Vicepreședintele eMAG, ne-a învățat cum să ne gestionăm economiile, cum să vedem eșecul drept un lucru pozitiv și ne-a oferit o perspectivă mai bună asupra lumii financiare.",
      ],
      image: pic4,
    },
  ];
  
  const members = [
    {
      name: "Alexandru Bălășoiu",
      description:
        "Presedinte",
      image: member1,
    },
    {
      name: "Andrei Botîrlăianu",
      description:
        "Vicepresedinte",
      image: member2,
    },
    {
      name: "Vlad Niculescu",
      description:
        "Vicepresedinte",
      image: member3,
    },
  ];

  const projects = [
    {
      name: "Activity 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa massa ultricies mi quis hendrerit dolor magna eget est.",
      image: carrent,
    },
    {
      name: "Activity 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa massa ultricies mi quis hendrerit dolor magna eget est.",
      image: jobit,
    },
    {
      name: "Activity 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa massa ultricies mi quis hendrerit dolor magna eget est.",
      image: tripguide,
    },
  ];
  
  export { services, experiences, projects, members };