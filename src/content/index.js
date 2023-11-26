import { html, css, js, sass, bootstrap, tailwindcss, jquery, react, netcore, sql, azure, projectWebshop, projectTravelAgency, projectCalendar, githubLogo } from '../assets'

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
        },
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
                    image: jquery,
                    desc: "jquery"
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
            category: "Programming Languages",
            categorySkills: [
                {
                    id: crypto.randomUUID(),
                    text: "C#"
                },
                {
                    id: crypto.randomUUID(),
                    text: "JavaScript"
                },
                {
                    id: crypto.randomUUID(),
                    text: "Java (basic)"
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
                },
                {
                    id: crypto.randomUUID(),
                    text: "MongoDB (basic)"
                }
            ]
        },
        {
            id: crypto.randomUUID(),
            category: "Architectural patterns",
            categorySkills: [
                {
                    id: crypto.randomUUID(),
                    text: "CQRS (familiar with MediatR)"
                },
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
                    text: "Basic understanding of clean architecture"
                }
            ]
        },
        {
            id: crypto.randomUUID(),
            category: "Web",
            categorySkills: [
                {
                    id: crypto.randomUUID(),
                    text: "Restful API"
                },
                {
                    id: crypto.randomUUID(),
                    text: "HTTP requests (GET, POST, PUT, PATCH, DELETE)"
                },
                {
                    id: crypto.randomUUID(),
                    text: "Familiarity with authorization and authentication with JWT"
                },
                {
                    id: crypto.randomUUID(),
                    text: "HTML, CSS, SASS, Bootstrap, Tailwind CSS"
                },
                {
                    id: crypto.randomUUID(),
                    text: "JavaScript, React, jQuery"
                },
                {
                    id: crypto.randomUUID(),
                    text: "ASP.NET Core Web API, ASP.NET Core MVC"
                }
            ]
        },
        {
            id: crypto.randomUUID(),
            category: "Other",
            categorySkills: [
                {
                    id: crypto.randomUUID(),
                    text: "Git and Github"
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
            projectLink: "https://snowboard-webshop-portfolio-project.azurewebsites.net/",
            projectImage: projectWebshop,
            imageDesc: "webshop project",
            title: "[Full-Stack] E-commerce Web App",
            description: "Fully responsive full-stack web app built using asp.net core mvc, repository, unit of work, entity framework core, CQRS with MediatR and azure",
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
            projectLink: "https://calendar-ten-sage.vercel.app/",
            projectImage: projectCalendar,
            imageDesc: "calendar project",
            title: "[Front-end] Calendar viewer for github commits",
            description: "Fully responsive front-end calendar viewer with details about github commits from github repository",
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
            projectLink: "https://travel-agency-website-portfolio-project.vercel.app/",
            projectImage: projectTravelAgency,
            imageDesc: "travel agency website project",
            title: "[Front-end] Travel agency website",
            description: "Fully responsive front-end website built using react and tailwind css",
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