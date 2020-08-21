const tree = {
    title: "The Path",
    children: [
        {
            title: "Web Development", description: "Web development usually includes apps development too", children: [
                {
                    title: "Front (Client) End",
                    description: "Front-end, client-end, or user interface is the program that runs in browsers or user's devices (native apps).",
                    categories: [
                        {
                            label: "Fundamentals",
                            children: [
                                {
                                    title: "Browser", description: "Browser is what users use to access World Wide Web.",
                                    children: [{ title: "Developers Console" }, { title: "Compatability" }, { title: "Extensions" }]
                                },
                                {
                                    title: "Websites", description: "A website is a collection of web pages and related content that is identified by a common domain name and published on at least one web server.",
                                    children: [{ title: "Static website" }, { title: "Single-page web application" }, { title: "Progressive web applocation" }]
                                },
                                {
                                    title: "Javascript", description: "Javascript is programming language that runs within browsers and makes websites active. Javascript can also run in servers thanks to new technology called Nodejs.",
                                    children: [{ title: "Jquery" }, { title: "Typescript" }, { title: "NPM and packages" }]
                                },
                                {
                                    title: "HTML", description: "HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content.",
                                    children: [{ title: "HTML5" }, { title: "Tags" }, { title: "Canvas" }, { title: "Forms" }]
                                },
                                {
                                    title: "Styling", description: "Styling is what makes website look like what they are.",
                                    children: [{ title: "CSS" }, { title: "SASS" }, { title: "UI Design Softwares" }]
                                },
                                {
                                    title: "Communication", description: "Communication allows websites to send and receive data from servers.",
                                    children: [{ title: "HTTP" }, { title: "API" }, { title: "Servers" }, { title: "Server-less" }]
                                },
                                {
                                    title: "Deployment", description: "Deploy your website to the world.",
                                    categories: [
                                        { label: "Fundamentals", children: [{ title: "Hosting" }, { title: "Proxy-servers" }, { title: "Platforms as Services" }] },
                                        { label: "Tools", children: [{ title: "Heroku" }, { title: "Shared servers" }, { title: "Netlify" }, { title: "Github Pages" }] }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "Tools",
                            children: [
                                { title: "Frameworks" }, { title: "Libraries" }, { title: "SEO" }, { title: "Performance and accessibility" }, { title: "Responsive design" }, { title: "Native apps" }, { title: "Git" }
                            ]
                        }
                    ]
                },
                {
                    title: "Back-End",
                    description: "Backend is where rabbits live.",
                    categories: [
                        {
                            label: "Fundamentals",
                            children: [
                                {
                                    title: "Languages", description: "There are multiple languages that can be used for backend development, and you can even use more than one language for your backend.",
                                    children: [{ title: "Javascript (NodeJS)" }, { title: "Python" }, { title: "Java" }, { title: "C#" }, { title: "C++" }, { title: "PHP" }, { title: "Ruby" }, { title: "Rust" }]
                                },
                                {
                                    title: "Database", description: "Database stores data.",
                                    children: [{ title: "SQL" }, { title: "NoSQL" }]
                                },
                                {
                                    title: "Packages", description: "Use packages to reduce development time",
                                    children: [{ title: "NPM" }, { title: "Python" }]
                                },
                                {
                                    title: "Communication", description: "Use communication to get and send data.",
                                    children: [{ title: "HTTP" }, { title: "Security" }, { title: "Authentification" }]
                                },
                                {
                                    title: "Server-rendering", description: "Render HTML on the server.",
                                    // children: [{ title: "CSS" }, { title: "SASS" }, { title: "UI Design Softwares" }]
                                },
                                {
                                    title: "Deployment", description: "Deploy your website to the world.",
                                    categories: [
                                        { label: "Fundamentals", children: [{ title: "Hosting" }, { title: "Proxy-servers" }, { title: "Platforms as Services" }] },
                                        { label: "Tools", children: [{ title: "Heroku" }, { title: "Shared servers" }, { title: "Netlify" }] }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "Tools",
                            children: [
                                { title: "Frameworks" }, { title: "Libraries" }, { title: "Debugging" }, { title: "Git" }
                            ]
                        }
                    ]
                },
                {
                    title: "Wordpress",
                    description: "FOR NOOOOOBS.",
                }
            ]
        },
        {
            title: "Software Developments",
            description: "ligma lig ma lig something bruhhhh"
        },
        {
            title: "Data science",
            description: "JOE MAMAMAAAAAAAAAAAAAAAAAAA"
        },
        {
            title: "Robotics",
            description: "ligma"
        },
    ]
}

export default tree;