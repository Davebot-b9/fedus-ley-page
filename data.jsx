import { BellPlus, Brush, FacebookIcon, Inbox, PanelsTopLeft, Phone, Home, UserRound, BookText, Music, Mail } from "lucide-react";

export const itemsNavbar = [
    {
        id: 1,
        title: "Inicio",
        icon: <Home size={20} />,
        link: "#",
    },
    {
        id: 2,
        title: "Acerca de",
        icon: <UserRound size={20} />,
        link: "#aboutme",
    },
    {
        id: 3,
        title: "Servicios",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Testimonios",
        icon: <Music size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Contact",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataAboutme = [
    {
        id: 1,
        title: "Nuestra meta",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "",
            },
            {
                name: "",
            },
            {
                name: "",
            },
            {
                name: "",
            },
            {
                name: "",
            },
            {
                name: "",
            },
            {
                name: "",
            },
        ],
    },
    {
        id: 2,
        title: "Valores",
        icon: <BellPlus />,
        features: [
            {
                name: "",
            },
            {
                name: "",
            },
            {
                name: "",
            },
            {
                name: "",
            },
            {
                name: "",
            },
            {
                name: "",
            },
            {
                name: "",
            },
            {
                name: "",
            },
        ],
    },
    {
        id: 3,
        title: "¿Qué nos hace únicos?",
        icon: <Brush />,
        features: [
            {
                name: "",
            },
            {
                name: "",
            },
            {
                name: "",
            },
            {
                name: "",
            },
            {
                name: "",
            },
            {
                name: "",
            },
        ],
    },
];

export const dataUs = [
    {
        id: 1,
        name: "Misión",
        lineHead: "agregar description...",
        descriptionHead: "description...",
        descriptionComplete: "la descripcion completa...",
        lineFooter: "Fedus | Ley",
        descriptionFooter: "Todos tenemos derechos",
        background: "/assets/image-4.jpg",
        logo: "/assets/fed-log.png",
    },
    {
        id: 2,
        name: "Visión",
        lineHead: "Escribe aquí...",
        descriptionHead: "description...",
        lineFooter: "Fedus | Ley",
        descriptionFooter: "Todos tenemos derechos",
        background: "/assets/image-4.jpg",
        logo: "/assets/fed-log.png",
    },
];

// export const dataContentUs = [
//     {
//         idC: 1,
//         titleContent: "Misión",
//         descriptionComplete: "la descripcion completa...",
//     },
//     {
//         idC: 2,
//         titleContent: "Vision",
//     }
// ];

export const dataServices = [
    {
        id: 1,
        title: "Servicio 1",
        subtitle: "description...",
        footerTitle: "description...",
        footerSubtitle: "description...",
        bg: "/assets/image-2.jpg",
        alt: "description...",
        content: "Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et.Culpa deserunt nostrud ad veniam.",
    },
    {
        id: 2,
        title: "Servicio 2",
        subtitle: "description...",
        footerTitle: "description...",
        footerSubtitle: "description...",
        bg: "/assets/image-4.jpg",
        alt: "description...",
        content: "Description",
    },
    {
        id: 3,
        title: "Servicio 3",
        subtitle: "description...",
        footerTitle: "description...",
        footerSubtitle: "description...",
        bg: "/assets/image-3.jpg",
        alt: "description...",
        content: "Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et.Culpa deserunt nostrud ad veniam.",
    },
];

export const testimonialsData = [
    {
        id: 0,
        name: "Juan Palomo",
        testimonial:
            "Escribir testimonio del cliente...",
        image: "fed-log.png",
    },
    {
        id: 1,
        name: "Juan Palomo",
        testimonial:
            "Escribir testimonio del cliente...",
        image: "fed-log.png",
    },
    {
        id: 2,
        name: "Juan Palomo",
        testimonial:
            "Escribir testimonio del cliente...",
        image: "fed-log.png",
    },
    {
        id: 3,
        name: "Juan Palomo",
        testimonial:
            "Escribir testimonio del cliente...",
        image: "fed-log.png",
    },
];

export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+34 677 66 66 33",
        link: "tel:+34677666633",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Facebook",
        subtitle: "FedusLeyofficial",
        link: "github.com/ratasi",
        icon: <FacebookIcon />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "email@email.com",
        link: "mailto:jose@fedus.com",
        icon: <Inbox />,
    },
];