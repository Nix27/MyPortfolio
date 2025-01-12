import { html, css, js, sass, bootstrap, tailwindcss, jquery, react, netcore, sql, azure, projectWebshop, projectTravelAgency, projectCalendar, githubLogo, zffImage, ionicLogo, capacitorLogo, bedsWebshop, springboot } from '../assets'

export const navbarLinks = [
    {
        id: "about",
        text: "About Me"
    },
    {
        id: "tech-stack",
        text: "Tech Stack"
    },
    {
        id: "skills",
        text: "Skills"
    },
    {
        id: "projects",
        text: "Projects"
    }
]

export const techstackSection = {
    title: "Tech Stack",
    slides: [
        {
            id: crypto.randomUUID(),
            images: [
                {
                    id: crypto.randomUUID(),
                    image: html,
                    desc: "html"
                },
                {
                    id: crypto.randomUUID(),
                    image: css,
                    desc: "css"
                },
                {
                    id: crypto.randomUUID(),
                    image: sass,
                    desc: "sass"
                },
                {
                    id: crypto.randomUUID(),
                    image: bootstrap,
                    desc: "bootstrap"
                },
                {
                    id: crypto.randomUUID(),
                    image: tailwindcss,
                    desc: "tailwindcss"
                }
            ]
        },
        {
            id: crypto.randomUUID(),
            images: [
                {
                    id: crypto.randomUUID(),
                    image: js,
                    desc: "js"
                },
                {
                    id: crypto.randomUUID(),
                    image: react,
                    desc: "react"
                },
                {
                    id: crypto.randomUUID(),
                    image: ionicLogo,
                    desc: "ionic"
                }
            ]
        },
        {
            id: crypto.randomUUID(),
            images: [
                {
                    id: crypto.randomUUID(),
                    image: netcore,
                    desc: "netcore"
                },
                {
                    id: crypto.randomUUID(),
                    image: azure,
                    desc: "azure"
                },
                {
                    id: crypto.randomUUID(),
                    image: sql,
                    desc: "sql"
                }
            ]
        }
    ]
}

export const skillsSection = {
    title: "Skills",
    skills: [
        {
            id: crypto.randomUUID(),
            category: "Web",
            categorySkills: [
                {
                    id: crypto.randomUUID(),
                    text: "HTML, CSS, SASS, Bootstrap, Tailwind CSS"
                },
                {
                    id: crypto.randomUUID(),
                    text: "JavaScript, TypeScript, React"
                },
                {
                    id: crypto.randomUUID(),
                    text: "Restful API"
                },
                {
                    id: crypto.randomUUID(),
                    text: "Authentication and authorization with JWT"
                },
                {
                    id: crypto.randomUUID(),
                    text: "ASP.NET Core Web API, ASP.NET Core MVC"
                }
            ]
        },
        {
            id: crypto.randomUUID(),
            category: "Programming Languages",
            categorySkills: [
                {
                    id: crypto.randomUUID(),
                    text: "JavaScript, TypeScript"
                },
                {
                    id: crypto.randomUUID(),
                    text: "C#"
                },
                {
                    id: crypto.randomUUID(),
                    text: "Java"
                }
            ]
        },
        {
            id: crypto.randomUUID(),
            category: "Databases",
            categorySkills: [
                {
                    id: crypto.randomUUID(),
                    text: "SQL Server"
                },
                {
                    id: crypto.randomUUID(),
                    text: "T-SQL"
                }
            ]
        },
        {
            id: crypto.randomUUID(),
            category: "Architectural patterns",
            categorySkills: [
                {
                    id: crypto.randomUUID(),
                    text: "MVC"
                },
                {
                    id: crypto.randomUUID(),
                    text: "N-Tier"
                },
                {
                    id: crypto.randomUUID(),
                    text: "CQRS"
                },
                {
                    id: crypto.randomUUID(),
                    text: "Clean architecture"
                }
            ]
        },
        {
            id: crypto.randomUUID(),
            category: "Other",
            categorySkills: [
                {
                    id: crypto.randomUUID(),
                    text: "Git, Github, Bitbucket"
                },
                {
                    id: crypto.randomUUID(),
                    text: "Using figma designs for web development"
                }
            ]
        },
        {
            id: crypto.randomUUID(),
            category: "Soft skills",
            categorySkills: [
                {
                    id: crypto.randomUUID(),
                    text: "Teamwork"
                },
                {
                    id: crypto.randomUUID(),
                    text: "Problem solving"
                },
                {
                    id: crypto.randomUUID(),
                    text: "Active listening"
                },
                {
                    id: crypto.randomUUID(),
                    text: "Consistency"
                },
                {
                    id: crypto.randomUUID(),
                    text: "Attention to details"
                }
            ]
        }
    ]
}

export const projectsSection = {
    title: "Projects",
    projects: [
        {
            id: crypto.randomUUID(),
            githubLink: "https://github.com/Nix27/Snowboarding_equipment_webshop",
            projectLink: "https://snowboard-webshop-portfolio-project.azurewebsites.net/",
            isMobile: false,
            androidLink: "",
            iosLink: "",
            projectImage: projectWebshop,
            imageDesc: "webshop project",
            title: "[Full-Stack] E-commerce Web App For Snowboarding Equipment",
            description: "A fully responsive full-stack web app integrated with Stripe Payment, designed from scratch in Figma, and built using Asp.Net Core MVC, repository pattern, services, EF Core ORM, CQRS with MediatR, and Azure SQL Database.",
            techStack: [
                {
                    id: crypto.randomUUID(),
                    image: netcore,
                    desc: "netcore"
                },
                {
                    id: crypto.randomUUID(),
                    image: azure,
                    desc: "azure"
                },
                {
                    id: crypto.randomUUID(),
                    image: html,
                    desc: "html"
                },
                {
                    id: crypto.randomUUID(),
                    image: sass,
                    desc: "sass"
                },
                {
                    id: crypto.randomUUID(),
                    image: bootstrap,
                    desc: "bootstrap"
                },
                {
                    id: crypto.randomUUID(),
                    image: js,
                    desc: "js"
                },
                {
                    id: crypto.randomUUID(),
                    image: jquery,
                    desc: "jquery"
                }
            ]
        },
        {
            id: crypto.randomUUID(),
            githubLink: "",
            projectLink: "",
            isMobile: true,
            androidLink: "https://play.google.com/store/apps/details?id=io.zff.app",
            iosLink: "https://apps.apple.com/hr/app/zff-zagreb-film-festival/id1594452722",
            projectImage: zffImage,
            imageDesc: "zff mobile app project",
            title: "[Android | iOS] Zagreb Film Festival App",
            description: "I worked on a mobile app for the Zagreb Film Festival 2024. I implemented a completely new and modern design. The tech stack I used to implement the new design of the Android and iOS versions is React, Ionic, and Capacitor.",
            techStack: [
                {
                    id: crypto.randomUUID(),
                    image: react,
                    desc: "react"
                },
                {
                    id: crypto.randomUUID(),
                    image: ionicLogo,
                    desc: "ionic"
                },
                {
                    id: crypto.randomUUID(),
                    image: capacitorLogo,
                    desc: "capacitor"
                }
            ]
        },
        // {
        //     id: crypto.randomUUID(),
        //     githubLink: "https://github.com/Nix27/SpringBoot_BedsWebShop",
        //     projectLink: "",
        //     isMobile: false,
        //     androidLink: "",
        //     iosLink: "",
        //     projectImage: bedsWebshop,
        //     imageDesc: "webshop project",
        //     title: "[Full-Stack] E-commerce Web App For Beds",
        //     description: "A fully responsive full-stack web app integrated with PayPal and built using Spring Boot, repository pattern, services, JPA, and SQL Server Database.",
        //     techStack: [
        //         {
        //             id: crypto.randomUUID(),
        //             image: springboot,
        //             desc: "springboot"
        //         },
        //         {
        //             id: crypto.randomUUID(),
        //             image: sql,
        //             desc: "sql server"
        //         },
        //         {
        //             id: crypto.randomUUID(),
        //             image: html,
        //             desc: "html"
        //         },
        //         {
        //             id: crypto.randomUUID(),
        //             image: bootstrap,
        //             desc: "bootstrap"
        //         },
        //         {
        //             id: crypto.randomUUID(),
        //             image: js,
        //             desc: "js"
        //         }
        //     ]
        // },
        {
            id: crypto.randomUUID(),
            githubLink: "https://github.com/Nix27/Github-Commit-Viewer",
            projectLink: "https://calendar-ten-sage.vercel.app/",
            isMobile: false,
            androidLink: "",
            iosLink: "",
            projectImage: projectCalendar,
            imageDesc: "calendar project",
            title: "[Front-end] Github Commit Viewer",
            description: "A fully responsive GitHub commit viewer shows details about GitHub commits inside the calendar from the desired GitHub repository. The tech stack I used is React, Tailwind CSS, and GitHub REST API.",
            techStack: [
                {
                    id: crypto.randomUUID(),
                    image: react,
                    desc: "react"
                },
                {
                    id: crypto.randomUUID(),
                    image: tailwindcss,
                    desc: "tailwindcss"
                },
                {
                    id: crypto.randomUUID(),
                    image: githubLogo,
                    desc: "github logo"
                }
            ]
        },
        {
            id: crypto.randomUUID(),
            githubLink: "https://github.com/Nix27/Travel-agency-Website",
            projectLink: "https://travel-agency-website-portfolio-project.vercel.app/",
            isMobile: false,
            androidLink: "",
            iosLink: "",
            projectImage: projectTravelAgency,
            imageDesc: "travel agency website project",
            title: "[Front-end] Travel Agency Website",
            description: "A fully responsive website built using React and Tailwind CSS.",
            techStack: [
                {
                    id: crypto.randomUUID(),
                    image: react,
                    desc: "react"
                },
                {
                    id: crypto.randomUUID(),
                    image: tailwindcss,
                    desc: "tailwindcss"
                }
            ]
        }
    ]
}