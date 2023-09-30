import { html, css, js, sass, bootstrap, tailwindcss, jquery, react, netcore, sql, azure } from '../assets'

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
    sentence: "I have the most experience with these languages and frameworks below, but I am always open to learning new technologies. At the end of the day, everything is in problem-solving and making optimal digital solutions.",
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
                    image: jquery,
                    desc: "jquery"
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