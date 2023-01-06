const Config = {
    "PAGE_SUMMARY": {
        "Work": "This page describes, in brief, my professional experience.",
        "Skills": "This page provides a list of my skills and, eventually, will make them searchable and provide detail on the level of experience and related work and projects",
        "Education": "This page describes my education as well as the courses which I took in each. It includes information on my GPA, my time of attendance, and a brief summary of the degree.",
        "Projects": "This page describes personal projects, including volunteer projects."
    },
    "ROUTES": [
        {
            "Name": "Home",
            "Path": "/"
        },
        {
            "Name": "About",
            "Path": "/about"
        },
        {
            "Name": "Work",
            "Path": "/work"
        },
        {
            "Name": "Education",
            "Path": "/education"
        },
        {
            "Name": "Projects",
            "Path": "/projects"
        },
        {
            "Name": "Skills",
            "Path": "/skills"
        },
    ],
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
            "description":
                [
                    "Python is my strongest and longest-known coding language, learned when I first taught myself the basics of programming on Codecademy. My language of choice in personal projects, I also utilized it extensively in my time as a Graduate Research Assistant at the University of Pittsburgh and as a Data Science Intern at Nanoramic Laboratories. I am also well-acquainted with a number of its packages, including pandas, NumPy, Matplotlib, and PyTorch.",
                    "Python is my preferred language, and also the language I recommend to beginners. Python's emphasis on sparse syntax and meaningful use of whitespace makes it easy to read and hard to convolute. Some developers don't like the lack of freedom this provides, but I appreciate how Python standardizes its syntax and enforces a common lingua franca. There are many ways to write Java code, for example, but as a certain set of famous zen koans states, there's often only one way to write Pythonic code.",
                    "That being said, Python's main disadvantages, from my perspective, is that it spoils you and sometimes tricks you. Python's simple and sparse format often means that it handles behind-the-scenes what other programming languages make more explicit, which can pose a problem if you don't know how exactly Python is handling things behind-the-scenes.",
                    "A small but illustrative example is Python's duck-typing of numbers. The presence of a decimal point is all that separates Python recognizing a number as a float vs. an integer, and someone who doesn't know that may find themselves confused when they try to define a number and don't get what they're expecting. A language like Java, by requiring explicit value typing, avoids that problem. Python assumes you already know, which is a risky assumption to make."
                ]
        },
        {
            "name": "Java",
            "logo": require("./components/assets/images/skills/java_logo.png"),
            "experience_level": "Intermediate",
            "years_of_experience": "4",
            "description": [
                "With more experience in the classroom and in personal projects than in work, my knowledge of Java is most developed in the core fundamentals but with exposure to encryption, security, and network interfacing. In addition, it is the primary language for the Processing graphical library, and is thus my language of choice when developing generative art like what you see on this website.",
                "While I recommend Python as the language of choice for people just learning to code, I recommend Java as the language of choice for people wanting to familiarize themselves with more intermediate coding principles. Java's reliance on explicit typing and precision of syntax makes it harder for the compiler to surprise you, as unfortunately happens sometimes with Python. At the same time, Java's wordier syntax makes it easy to tangle yourself in knots if you don't have a good sense of first coding principles, which Python can better train you for."
            ]
        },
        {
            "name": "JavaScript",
            "logo": require("./components/assets/images/skills/javascript_logo.png"),
            "experience_level": "Intermediate",
            "years_of_experience": "5",
            "description": [
                "Technically the first programming language I learned back in High School, those skills weren't fully explored until I returned to school for Computer Engineer, at which point they rose to become one of my most-used languages, used substantially in my ASP.Net web development work at Federated Investors as well as in helping to develop the front end for the Code for Pittsburgh Food Access Map. I also found myself using it substantially on a videogame called Bitburner, which literally required you to code to succeed in the game. It was at the point where I was coding for fun in my spare time that I began to suspect I had a slightly different relationship with programming than others.",
                "While I'm happy to do work in Javascript, it is not my favorite language. In my mind, it combine's Java's wordy and cluttered syntax with Python's mysterious unspoken behind-the-scenes assumptions. It breaks my heart that Javascript is the primary language for front-end web scripting, and I think it's telling that the most popular Javascript frameworks like React do a lot to make Javascript not like Javascript."
            ]
        },
        {
            "name": "C#",
            "logo": require("./components/assets/images/skills/cs_logo.png"),
            "experience_level": "Intermediate",
            "years_of_experience": "3",
            "description": [
                "Utilized most prominently at Federated Investors when developing an ASP.NET web application, I also found myself using it when experimenting with personal and in-the-classroom Unity game development.",
                "In my experience, I consider C# to be broadly similar to Java in terms of syntax -- at least when contrasting both with languages such as Python and Javascript. I find both languages to be similar in terms of typing, syntax, and object-oriented programming, although I'm well aware that more in-depth utilization of both would make their differences more pronounced. If I had to choose between them for a project, I would probably defer to C#, both because I have more professional background with the language and also because I find the syntax more comprehensible and clean. Additionally, I prefer the consistency of a language managed by a longstanding company like Microsoft over the more open-source Java, if only because I find the quality of libraries to be more consistent."
            ]
        },
        {
            "name": "R",
            "logo": require("./components/assets/images/skills/r_logo.png"),
            "experience_level": "Advanced",
            "years_of_experience": "4",
            "description":
                [
                    "While I haven't used R for as long as other languages, I have used it almost as substantially in my work as Python. First learned when helping to develop the Code For Pittsburgh Food Access Map backend, I applied and refined my skills further in my Research Assistantship, my Graduate-level Machine Learning coursework, and in my Thesis, in all cases leveraging it to process data and present analyses on it. As a consequence, it has become my go-to language for the analysis of data.",
                    "Even though I believe R can be perfectly serviceable for a variety of programming needs, I also believe that unless your work involves solely the analysis and graphing of data, you're better off using another language. R's libraries are angled towards processing and presenting tabular data, and the language loses a lot of its advantages the more you move away from that focus. It occupies that Javascript space of having both complicated syntax and mysterious behind-the-scenes assumptions. The larger and more diverse a project is, the more I think it makes sense to switch to a language like Python.",
                    "That being said, the pipe operator is one of the most sublime inventions known to man, and more languages should incorporate them. I'm still surprised that Python doesn't have such an operator natively."
                ]
        }
    ],
    "EDUCATION": [
        {
            "Degree": "M.S. in Information Science",
            "University": "University of Pittsburgh",
            "GPA": "4.0",
            "Classes": [
                {
                    "Name": "Database Management",
                    "Semester": "Summer 2021",
                    "Grade": "A+"
                },
                {
                    "Name": "Human Information Processing",
                    "Semester": "Fall 2021",
                    "Grade": "A+"
                },
                {
                    "Name": "Machine Learning",
                    "Semester": "Fall 2021",
                    "Grade": "A"
                },
                {
                    "Name": "Applications of Networks",
                    "Semester": "Fall 2021",
                    "Grade": "A"
                },
                {
                    "Name": "Information Storage and Retrieval",
                    "Semester": "Spring 2022",
                    "Grade": "A+"
                },
                {
                    "Name": "Artificial Intelligence",
                    "Semester": "Spring 2022",
                    "Grade": "A"
                },
                {
                    "Name": "Cloud Computing",
                    "Semester": "Spring 2022",
                    "Grade": "A"
                },
                {
                    "Name": "Information Security and Privacy",
                    "Semester": "Summer 2022",
                    "Grade": "A"
                },
                {
                    "Name": "Special Topics: Cognitive",
                    "Semester": "Summer 2022",
                    "Grade": "A"
                },
                {
                    "Name": "Algorithm Design",
                    "Semester": "Fall 2022",
                    "Grade": "A"
                },
                {
                    "Name": "Independent Study",
                    "Semester": "Fall 2022",
                    "Grade": "A"
                },
                {
                    "Name": "Thesis",
                    "Semester": "Fall 2022",
                    "Grade": "A"
                },
            ]
        },
        {
            "Degree": "B.S. in Computer Engineering",
            "University": "University of Pittsburgh",
            "GPA": "3.413",
            "Classes": [
                {
                    "Name": "General Chemistry 1",
                    "Semester": "Summer 2017",
                    "Grade": "A-"
                },
                {
                    "Name": "Analytic Geometry and Calculus 1",
                    "Semester": "Summer 2017",
                    "Grade": "B+"
                },
                {
                    "Name": "Basic Physics Science and Engineering 1",
                    "Semester": "Summer 2017",
                    "Grade": "B"
                },
                {
                    "Name": "General Chemistry 2",
                    "Semester": "Fall 2017",
                    "Grade": "B"
                },
                {
                    "Name": "Analytic Geometry and Calculus 2",
                    "Semester": "Fall 2017",
                    "Grade": "B-"
                },
                {
                    "Name": "Basic Physics Science and Engineering 2",
                    "Semester": "Fall 2017",
                    "Grade": "C+"
                },
                {
                    "Name": "Linear Circuits and Systems 1",
                    "Semester": "Spring 2018",
                    "Grade": "B"
                },
                {
                    "Name": "Digital Logic",
                    "Semester": "Spring 2018",
                    "Grade": "A"
                },
                {
                    "Name": "Intermediate Programming Using Java",
                    "Semester": "Spring 2018",
                    "Grade": "A"
                },
                {
                    "Name": "Intro to Engineering Analysis",
                    "Semester": "Spring 2018",
                    "Grade": "A"
                },
                {
                    "Name": "Differential Equations",
                    "Semester": "Spring 2018",
                    "Grade": "B"
                },
                {
                    "Name": "Analysis and Design of Electric Circuits",
                    "Semester": "Summer 2018",
                    "Grade": "C"
                },
                {
                    "Name": "Data Structures",
                    "Semester": "Summer 2018",
                    "Grade": "B+"
                },
                {
                    "Name": "Probability and Statistics for Engineers 1",
                    "Semester": "Summer 2018",
                    "Grade": "B+"
                },
                {
                    "Name": "Intro to Matrices and Linear Algebra",
                    "Semester": "Summer 2018",
                    "Grade": "B+"
                },
                {
                    "Name": "Computer Organization and Assembly Language",
                    "Semester": "Spring 2019",
                    "Grade": "A"
                },
                {
                    "Name": "Digital Systems Laboratory",
                    "Semester": "Spring 2019",
                    "Grade": "B"
                },
                {
                    "Name": "Programming Language for Web Applications",
                    "Semester": "Spring 2019",
                    "Grade": "B"
                },
                {
                    "Name": "Discrete Structures for Computer Science",
                    "Semester": "Spring 2019",
                    "Grade": "B+"
                },
                {
                    "Name": "Written Professional Communication",
                    "Semester": "Spring 2019",
                    "Grade": "A"
                },
                {
                    "Name": "Intro to Systems Software",
                    "Semester": "Fall 2019",
                    "Grade": "A-"
                },
                {
                    "Name": "Software Engineering",
                    "Semester": "Fall 2019",
                    "Grade": "B"
                },
                {
                    "Name": "Algorithm Implementation",
                    "Semester": "Fall 2019",
                    "Grade": "C+"
                },
                {
                    "Name": "Formal Methods in Computer Science",
                    "Semester": "Fall 2019",
                    "Grade": "B-"
                },
                {
                    "Name": "Intro to Computer Architecture",
                    "Semester": "Spring 2020",
                    "Grade": "B"
                },
                {
                    "Name": "Intro to Compiler Design",
                    "Semester": "Spring 2020",
                    "Grade": "C"
                },
                {
                    "Name": "Theory of Computation",
                    "Semester": "Spring 2020",
                    "Grade": "A"
                },
                {
                    "Name": "Senior Design Project",
                    "Semester": "Spring 2020",
                    "Grade": "B"
                },
                {
                    "Name": "Intro to Operating Systems",
                    "Semester": "Summer 2020",
                    "Grade": "A+"
                },
                {
                    "Name": "Software Quality Assurance",
                    "Semester": "Summer 2020",
                    "Grade": "A"
                },
                {
                    "Name": "Advanced Digital Design",
                    "Semester": "Fall 2020",
                    "Grade": "A-"
                },

            ]
        },
        {
            "Degree": "B.S. in Psychology",
            "University": "University of Pittsburgh",
            "GPA": "3.650",
            "Classes": [
                {
                    "Name": "Drugs and Behavior",
                    "Semester": "Fall 2014",
                    "Grade": "B"
                },
                {
                    "Name": "Introduction to Psychology",
                    "Semester": "Fall 2014",
                    "Grade": "A-"
                },
                {
                    "Name": "Basic Applied Statistics",
                    "Semester": "Fall 2014",
                    "Grade": "A"
                },
                {
                    "Name": "Intro to Gender, Sexuality, and Women's Studies",
                    "Semester": "Fall 2014",
                    "Grade": "A"
                },
                {
                    "Name": "Geology",
                    "Semester": "Spring 2015",
                    "Grade": "B-"
                },
                {
                    "Name": "Sex and Sexualities",
                    "Semester": "Spring 2015",
                    "Grade": "A-"
                },
                {
                    "Name": "Gender and Sustainability",
                    "Semester": "Spring 2015",
                    "Grade": "B+"
                },
                {
                    "Name": "Social Philosophy",
                    "Semester": "Spring 2015",
                    "Grade": "A"
                },
                {
                    "Name": "Introduction to Social Psychology",
                    "Semester": "Spring 2015",
                    "Grade": "B"
                },
                {
                    "Name": "Introduction to Sociology",
                    "Semester": "Spring 2015",
                    "Grade": "B+"
                },
                {
                    "Name": "Speech Composition",
                    "Semester": "Fall 2015",
                    "Grade": "A-"
                },
                {
                    "Name": "Forms of Prose",
                    "Semester": "Fall 2015",
                    "Grade": "A"
                },
                {
                    "Name": "World Politics",
                    "Semester": "Fall 2015",
                    "Grade": "A"
                },
                {
                    "Name": "Research Methods",
                    "Semester": "Fall 2015",
                    "Grade": "A"
                },
                {
                    "Name": "Psychology of Personality",
                    "Semester": "Fall 2015",
                    "Grade": "A+"
                },
                {
                    "Name": "Developmental Psychology",
                    "Semester": "Fall 2015",
                    "Grade": "B"
                },
                {
                    "Name": "Introduction to Modern Art",
                    "Semester": "Spring 2016",
                    "Grade": "A+"
                },
                {
                    "Name": "Business Calculus",
                    "Semester": "Spring 2016",
                    "Grade": "B"
                },
                {
                    "Name": "Learning and Motivation",
                    "Semester": "Spring 2016",
                    "Grade": "A-"
                },
                {
                    "Name": "Cognitive Psychology",
                    "Semester": "Spring 2016",
                    "Grade": "A+"
                },
                {
                    "Name": "Topics in Social Psychology: Conflict Resolution",
                    "Semester": "Spring 2016",
                    "Grade": "A+"
                },
                {
                    "Name": "Supervised Field Placement",
                    "Semester": "Spring 2016",
                    "Grade": "S"
                },
                {
                    "Name": "Abnormal Psychology",
                    "Semester": "Summer 2016",
                    "Grade": "A+"
                },
            ]
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
            // "link": "",
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
            "link": "https://codeforpittsburgh.github.io/FoodAccessMap/index.html",
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
            "link": "https://github.com/maxachis/machine-learning-final-project/tree/master",
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
            // "link": "",
            "description": [
                "Because I wasn't busy enough during my time in grad school, I also decided to look into making generative art -- that is, art that is made using programming. Using the Processing programming library, along with its Java, Python, and Javascript-based implementations, I developed scripts that, when run, would create visual art based on the code within the scripts. An entire canvas, painted with comparatively few lines of code",
                "What I found was that I note only enjoyed the art I created with this, but it also gave me the opportunity to explore programmatic, algorithmic, and geometric concepts in delightfully visual ways. Even glitches and bugs sometimes led to surprisingly pleasant results when played out on the canvas. It's since become a tool that I happily recommend to people when they're first learning how to code.",
                "The title page of this very website, in fact, uses animation from the Processing library -- in this case, the Javascript version the library."
            ]
        },
        {
            "name": "Portfolio website",
            "start_date": "November 2022",
            "end_date": "January 2023",
            "link": "https://maxachis.github.io/",
            "image": null,
            "description": [
                "Having recently finished up my graduate degree and now returning to the job market, I decided one of my next projects should be designing a portfolio website. Because I'm me, this also meant that, rather than developing it using something I already know, such as ASP.NET, I would instead learn ReactJS, which I had no prior knowledge of, and use the portfolio website as an opportunity to develop my skills in a new area and also demonstrate how quickly I can develop those skills.",
                "The primary challenge was bringing myself up to speed with ReactJS, which extended the more familiar-to-me Javascript language with less-familiar JSX and component-based scripting. Fortunately, my prior experience in ASP.NET syntax, which overlaps with JSX syntax, eased the transition with JSX, and React components, once you get over the slightly quirky syntax, are simply a convenient way to make web applications more object-oriented.",
                "A secondary challenge lay in adapting the website for both desktop and mobile formats, as well as taking aesthetics into account. My previous web design experience was with in-house corporate applications primarily designed for use on a desktop, and focus was on function over form. For this project, I needed to take into account not only how it looked and worked on a desktop, but also how it looked and worked on mobile, and what elements would need to be changed to accomodate both. In some cases, as with my title animation, I only needed to change element dimension ratios. In other cases, as with page navigation, I needed to develop mostly-separate functionality.",
                "Having brought this project to a satisfactory stage of development, I suspect that React will be my go-to tool for web app development in the future. Working with npm made library management a painless process, and the density of React documentation made it easier to fill in the blanks in my knowledge. React syntax, while sometimes a little odd, ultimately made dynamic page development much more comprehensible and allowing me to better separate concerns and thereby improve ease of design and maintenance.",
            ]
        }
    ],
};

export default Config;