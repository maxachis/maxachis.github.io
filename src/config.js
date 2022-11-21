const Config = {
    "PAGE_SUMMARY": {
        "Work": "This page describes, in brief, my professional experience.",
        "Skills": "This page will provide a list of my skills and, eventually, will make them searchable and provide detail on the level of experience and related work and projects",
        "Education": "This page will describe my education as well as the courses which I took in each. It will include information on my GPA, my time of attendance, and a brief summary of the degree.",
        "Projects": "This page will describe personal projects. I'm not yet sure if I will include volunteer projects or keep that as a separate tap. Projects will, however, include class projects as well as personal projects, with Github Repos where available.",
        "Volunteer": "This page will describe my volunteer coding efforts. It may also describe my time at Garfield Community Farms and other volunteer experiences, but I'm not sure."
    },
    "WORK": [
        {
            "title": "Data Science Intern",
            "start_date": "October 2022",
            "end_date": "Present",
            "organization": "Nanoramic Laboratories",
            "location": "Remote",
            "logo": require("./components/assets/images/nanoramic.png"),
            "content": "Researched and developed improvements experimental search efficiency, including reinforcement learning and Bayesian optimization-based solutions."
        },
        {
            "title": "Graduate Research Assistant",
            "start_date": "May 2021",
            "end_date": "Present",
            "organization": "University of Pittsburgh",
            "location": "Pittsburgh, PA",
            "logo": require("./components/assets/images/university_of_pittsburgh.png"),
            "content": "Worked on DARPA-funded Artificial Social Intelligence for Successful Teams (ASIST) project, focusing on theory of mind in team setting. Extracted, transformed, analyzed, and presented experimental data using R and Python. Developed interventions for Artificial Social Intelligence (ASI) agent using Python. "
        },
        {
            "title": "Associate Developer",
            "start_date": "August 2022",
            "end_date": "May 2021",
            "organization": "Federates Hermes",
            "location": "Pittsburgh, PA",
            "logo": require("./components/assets/images/federated_hermes.png"),
            "content": "Developed and augmented business intelligence applications using combination of C# ASP.Net framework, SQL Database (SQL Server and Oracle) and Excel VBA, including full-stack development of new web apps integrated with backend database."
        },
        {
            "title": "Intern",
            "start_date": "September 2018",
            "end_date": "August 2020",
            "organization": "Federates Hermes",
            "location": "Pittsburgh, PA",
            "logo": require("./components/assets/images/federated_hermes.png"),
            "content": "Developed and augmented business intelligence applications using SQL Database (SQL Server and Oracle) and Excel VBA. 2020 Federated Hermes Intern Hackathon, Company-wide winners."
        }
    ],
    "SKILLS": [
        {
            "name": "Python",
            "logo": null,
            "experience_level": "Advanced",
            "years_of_experience": "6",
            "description": "Python is my strongest and longest-known coding language, learned when I first taught myself the basics of programming on Codecademy. My language of choice in personal projects, I also utilized it extensively in my time as a Graduate Research Assistant at the University of Pittsburgh and as a Data Science Intern at Nanoramic Laboratories. I am also well-acquainted with a number of its packages, including pandas, NumPy, Matplotlib, and PyTorch."
        },
        {
            "name": "Java",
            "logo": null,
            "experience_level": "Intermediate",
            "years_of_experience": "4",
            "description": "With more experience in the classroom and in personal projects than in work, my knowledge of Java is most developed in the core fundamentals but with exposure to encryption, security, and network interfacing. In addition, it is the primary language for the Processing graphical library, and is thus my language of choice when developing generative art like what you see on this website."
        },
        {
            "name": "JavaScript",
            "logo": null,
            "experience_level": "Intermediate",
            "years_of_experience": "5",
            "description": "Technically the first programming language I learned back in High School, those skills weren't fully explored until I returned to school for Computer Engineer, at which point they rose to become one of my most-used languages, used substantially in my ASP.Net web development work at Federated Investors as well as in helping to develop the front end for the Code for Pittsburgh Food Access Map. I also found myself using it substantially on a videogame called Bitburner, which literally required you to code to succeed in the game. It was at the point where I was coding for fun in my spare time that I began to suspect I had a slightly different relationship with programming than others."
        },
        {
            "name": "C#",
            "logo": null,
            "experience_level": "Intermediate",
            "years_of_experience": "3",
            "description": "Utilized most prominently at Federated Investors when developing an ASP.NET web application, I also found myself using it when experimenting with personal and in-the-classroom Unity game development."
        },
        {
            "name": "R",
            "logo": null,
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
    }
};

export default Config;