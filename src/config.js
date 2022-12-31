const Config = {
    "PAGE_SUMMARY": {
        "Work": "This page describes, in brief, my professional experience.",
        "Skills": "This page will provide a list of my skills and, eventually, will make them searchable and provide detail on the level of experience and related work and projects",
        "Education": "This page will describe my education as well as the courses which I took in each. It will include information on my GPA, my time of attendance, and a brief summary of the degree.",
        "Projects": "This page will describe personal projects. I'm not yet sure if I will include volunteer projects or keep that as a separate tab. Projects will, however, include class projects as well as personal projects, with Github Repos where available.",
        "Volunteer": "This page will describe my volunteer coding efforts. It may also describe my time at Garfield Community Farms and other volunteer experiences, but I'm not sure."
    },
    "WORK": [
        {
            "title": "Data Science Intern",
            "start_date": "October 2022",
            "end_date": "Present",
            "organization": "Nanoramic Laboratories",
            "location": "Remote",
            "logo": require("./components/assets/images/work/nanoramic.png"),
            "content": "Researched and developed improvements experimental search efficiency, including reinforcement learning and Bayesian optimization-based solutions."
        },
        {
            "title": "Graduate Research Assistant",
            "start_date": "May 2021",
            "end_date": "Present",
            "organization": "University of Pittsburgh",
            "location": "Pittsburgh, PA",
            "logo": require("./components/assets/images/work/university_of_pittsburgh.png"),
            "content": "Worked on DARPA-funded Artificial Social Intelligence for Successful Teams (ASIST) project, focusing on theory of mind in team setting. Extracted, transformed, analyzed, and presented experimental data using R and Python. Developed interventions for Artificial Social Intelligence (ASI) agent using Python. "
        },
        {
            "title": "Associate Developer",
            "start_date": "August 2022",
            "end_date": "May 2021",
            "organization": "Federates Hermes",
            "location": "Pittsburgh, PA",
            "logo": require("./components/assets/images/work/federated_hermes.png"),
            "content": "Developed and augmented business intelligence applications using combination of C# ASP.Net framework, SQL Database (SQL Server and Oracle) and Excel VBA, including full-stack development of new web apps integrated with backend database."
        },
        {
            "title": "Intern",
            "start_date": "September 2018",
            "end_date": "August 2020",
            "organization": "Federates Hermes",
            "location": "Pittsburgh, PA",
            "logo": require("./components/assets/images/work/federated_hermes.png"),
            "content": "Developed and augmented business intelligence applications using SQL Database (SQL Server and Oracle) and Excel VBA. 2020 Federated Hermes Intern Hackathon, Company-wide winners."
        }
    ],
    "SKILLS": [
        {
            "name": "Python",
            "logo": require("./components/assets/images/skills/python_logo.png"),
            "experience_level": "Advanced",
            "years_of_experience": "6",
            "description": "Python is my strongest and longest-known coding language, learned when I first taught myself the basics of programming on Codecademy. My language of choice in personal projects, I also utilized it extensively in my time as a Graduate Research Assistant at the University of Pittsburgh and as a Data Science Intern at Nanoramic Laboratories. I am also well-acquainted with a number of its packages, including pandas, NumPy, Matplotlib, and PyTorch."
        },
        {
            "name": "Java",
            "logo": require("./components/assets/images/skills/java_logo.png"),
            "experience_level": "Intermediate",
            "years_of_experience": "4",
            "description": "With more experience in the classroom and in personal projects than in work, my knowledge of Java is most developed in the core fundamentals but with exposure to encryption, security, and network interfacing. In addition, it is the primary language for the Processing graphical library, and is thus my language of choice when developing generative art like what you see on this website."
        },
        {
            "name": "JavaScript",
            "logo": require("./components/assets/images/skills/javascript_logo.png"),
            "experience_level": "Intermediate",
            "years_of_experience": "5",
            "description": "Technically the first programming language I learned back in High School, those skills weren't fully explored until I returned to school for Computer Engineer, at which point they rose to become one of my most-used languages, used substantially in my ASP.Net web development work at Federated Investors as well as in helping to develop the front end for the Code for Pittsburgh Food Access Map. I also found myself using it substantially on a videogame called Bitburner, which literally required you to code to succeed in the game. It was at the point where I was coding for fun in my spare time that I began to suspect I had a slightly different relationship with programming than others."
        },
        {
            "name": "C#",
            "logo": require("./components/assets/images/skills/cs_logo.png"),
            "experience_level": "Intermediate",
            "years_of_experience": "3",
            "description": "Utilized most prominently at Federated Investors when developing an ASP.NET web application, I also found myself using it when experimenting with personal and in-the-classroom Unity game development."
        },
        {
            "name": "R",
            "logo": require("./components/assets/images/skills/r_logo.png"),
            "experience_level": "Advanced",
            "years_of_experience": "4",
            "description": "While I haven't used R for as long as other languages, I have used it almost as substantially in my work as Python. First learned when helping to develop the Code For Pittsburgh Food Access Map backend, I applied and refined my skills further in my Research Assistantship, my Graduate-level Machine Learning coursework, and in my Thesis, in all cases leveraging it to process data and present analyses on it. As a consequence, it has become my go-to language for the analysis of data."
        }
    ],
    "EDUCATION": [
        {
            "Degree": "M.S. in Information Science",
            "University": "University of Pittsburgh",
            "GPA": "4.0"
        },
        {
            "Degree": "B.S. in Computer Engineering",
            "University": "University of Pittsburgh",
            "GPA": "3.413"
        },
        {
            "Degree": "B.S. in Psychology",
            "University": "University of Pittsburgh",
            "GPA": "3.650"
        }
    ],
    "ABOUT": {
        "profile_pic": require("./components/assets/images/profile_pic.jpg"),
        "name": "Max Chis",
        "description_short": "Software and Data Engineer with Background in AI Research",
        "description_long": [
            "After obtaining a degree in Psychology, I found myself drawn to exploring programming and software development. I went back to school for Computer Engineering and took to programming \"as a fish to water\", as they say.",
            "Full-stack developer with experience in machine learning, data analytics, and database management. I've lost count of the number of languages I've programmed in, and I fully intend to lose count further as I learn more of them.",
            "My work philosophy emphasizes fastiduous note taking, clearly defining work requirements, and breaking down problems into their subcomponents. While on the job, I divide my time between siloing myself away from distractions and chewing away at deep work as well as communicating and developing relationships with my coworkers. ",
            "I believe that water cooler conversations aren't just a fun diversion, but are essential for a team. A project works much more smoothly when everyone feels like they can communicate freely with each other, and many a long development process can be shortened just by asking a few questions. Developing relationships with my team is paramount not just for morale but for team effectiveness."
        ]
    },
    "PROJECTS": [
        {
            "name": "Master's Thesis",
            "start_date": "August 2022",
            "end_date": "December 2022",
            "description": [
                "My graduate research assistantship involved the analysis of large amounts of experimental data from the DARPA Artificial Social Intelligence for Successful Teams (ASIST) research trials. Much of my work involved finding ways to quantify the behaviors of players engaged in role-and-teamwork-based search-and-rescue simulations in Minecraft. Over the course of these analysis, I noticed quantifiable patterns in terms of how players divided their attention between multiple interdependent tasks. From that, I developed my Master's Thesis: \"Investigating the Cognitive Load- Productivity Tradeoff in Multitasking.\"",
                "The core of the thesis was based around the idea that a lot of experimental studies fail to capture the full breadth of real-world phenomena by consigning that phenomena to limited laboratory conditions that don't match the real-life environments where they occur. In the case of multitasking, a lot of experimental studies on multitasking involving participants working on two unrelated tasks and having the participants switch between them when there's no real reason for them to. Unsurprisingly, performance decreased.",
                "But that's not the only way humans multitask. In the workplace, we often multitask because we simply can't perform certain tasks in a single sitting, often because we're waiting on someone else to complete some part of that task for us, like a waiter who needs a cook to prepare the food. In those cases, we multitask because to do otherwise is to waste time doing nothing waiting for someone else to complete another task. I wanted to investigate whether, in those situations, we could see that there were benefits from multitasking.",
                "Having spent several months at this point mired in the research data, the majority of work on my thesis involved consolidating my existing findings and running novel analyses on extant data, which allowed me to move rapidly from a literature review and preliminary analysis in August to an initial thesis proposal in September to a near-final draft in October. ",
            ],
            "image": require("./components/assets/images/projects/thesis.png"),
        },
        {
            "name": "Code for Pittsburgh Food Access Map",
            "start_date": "May 2019",
            "end_date": "Present",
            "image": require("./components/assets/images/projects/food_access_map.png"),
            "description": [
                "By no means a solo project, I nonetheless played a principal role in the development of the Code for Pittsburgh Food Access Map, a web application designed to assist people in the Pittsburgh Region locate nearby food sources.",
                "Initially working more in the backend in data processing, geocoding, and deduplication, I gradually transitioned into a leadership role, coordinating and directing other volunteers in the development of the application.",
                "Volunteer retention and continuity of knowledge were the largest challenges. As with any volunteer project, turnover is high, and consequently the project had to be designed with a high emphasis on maintainability, documentation, and legible code; this way, new volunteers could pick up the project without being so intimidated by an unfamiliar code base as to be dissuaded from contributing.",
                "Morale was a high concern. Turnover was high as principal developers moved out of the Pittsburgh area or else got occupied with other domains of life, and the pandemic forced a transition to solely remote meetings, making it all the more essential to maintain motivation and engagement. I continually checked in with volunteers to assess their bandwidth for additional work, and discussed reasonable timelines for feature adds and bug fixes. I also placed a high emphasis on making sure attendees had something to do, and that they benefited from it, either by having something they could put on a portfolio (as I'm doing here), an opportunity to learn something new, or simply the feeling of making a meaningful contribution to the project.",
                "Another challenge was integrating a disparate array of volunteer skillsets into a single product. The backend, for example was developed in a combination of Python and R due to the different experiences of the contributing volunteers, which had to be reconciled and eventually refactored in solely Python. While most discrepancies between developers were not that dramatic, there were still persistent discrepancies in code styles and documentation, which we had to address in refactoring.",
                "The project frontend was developed in JavaScript and utilized Boostrap, Leaflet, and Esri libraries. The backend was originally developed in Python and R but eventually was refactored to just Python."
            ]
        },
        {
            "name": "Machine Learning Final Project - Data Analysis",
            "start_date": "October 2021",
            "end_date": "December 2021",
            "image": require("./components/assets/images/projects/MLProjectCollage.jpg"),
            "description": [
                "The final project for my graduate machine learning course involved data exploration of a real-life anonymized industrial dataset. Presented with a series of variables whose relationship to each other was unknown, our objective was to identify what these relationships were, and to develop models best able to accurately identify and classify them.",
                "Working with two datasets that collectively involved 3600 discrete data points and over 40 dimensions in each, manually identifying correlations would have been all but impossible, particularly since the anonymization of the datasets meant that I did not know what dimensions corresponded to what. I had to perform extensive data exploration examining their distribution, correlation with one another, and correlation with the associated output variables.",
                "I developed multiple machine learning models in R to identify meaningful relationships between variables within these datasets, including Gradient Boosted Trees, Random Forest, Neural Network, K Nearest Neighbors, Support Vector Machine, and Elastic Net. I ran all of these models on the dataset and then compared their performance, both in regression and classification.",
                "It was without a doubt the most involved, time-consuming, and ultimately rewarding project of my graduate course courses, hence why I felt it was worthwhile to include in my portfolio."
            ]
        },
        {
            "name": "Generative Art",
            "start_date": "?",
            "end_date": "?",
            "image": require("./components/assets/images/projects/generative_art.png"),
            "description": [
                "Because I wasn't busy enough during my time in grad school, I also decided to look into making generative art -- that is, art that is made using programming. Using the Processing programming library, along with its Java, Python, and Javascript-based implementations, I developed scripts that, when run, would create visual art based on the code within the scripts. An entire canvas, painted with comparatively few lines of code",
                "What I found was that I note only enjoyed the art I created with this, but it also gave me the opportunity to explore programmatic, algorithmic, and geometric concepts in delightfully visual ways. Even glitches and bugs sometimes led to surprisingly pleasant results when played out on the canvas. It's since become a tool that I happily recommend to people when they're first learning how to code.",
                "The title page of this very website, in fact, using animation from the Processing library -- in this case, the Javascript version the library."
            ]
        }
    ],
};

export default Config;