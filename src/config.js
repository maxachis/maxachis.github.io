const Config = {
    "PAGE_SUMMARY": {
        "Work": "This page describes, in brief, my professional experience.",
        "Skills": "This page provides a list of my skills and, eventually, will make them searchable and provide detail on the level of experience and related work and projects",
        "Education": "This page describes my education as well as the courses which I took in each. It includes information on my GPA, my time of attendance, and a summary of my experience with the degree.",
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
            "end_date": "December 2022",
            "organization": "Nanoramic Laboratories",
            "location": "Remote",
            "logo": require("./components/assets/images/work/nanoramic.png"),
            "summary": "Researched and developed improvements experimental search efficiency, including reinforcement learning and Bayesian optimization-based solutions.",
            "content":
                [
                    "My first job where I got to exercise my full suite of data science skills, combining machine learning, programming, and data science knowledge to develop a solution to a vexing problem with the potential to save Nanoramic Laboratories thousands of dollars by increasing the efficiency of experimental design.",
                    "Nanoramic is a startup company that specializes in researching and developing novel electric battery designs. As such, a substantial amount of time and resources is spent performing laboratory experiments to assess the efficacy of novel battery designs. A single experiment can take thousands and dollars and take a week to perform to completion. There is thus a substantial incentive to reduce the number of overall experiments while retaining maximal information gain, and that was I was tasked with figuring out how to do.",
                    "At Nanoramic, I had to find a way to incorporate an expert prior -- preexisting beliefs about the system -- into Bayesian optimization. I performed a literature review that outlined potential avenues for doing this and began exploring those avenues in sequence. Initially intending to utilize a reinforcement learning-based solution, I spent a few weeks combing through custom code libraries, trying to pick apart the functionality through sparse documentation and less-than-optimal coding practices with aim to modify them to something Nanoramic could use. Ultimately, however, I and my supervisor settled on a non-RL solution which was simpler to execute and required comparatively minor modifications to Python's Scikit-Optimize library. I then worked on integrating that modified code into the experiment-design API as well as the plotly dash app frontend. Finally, I presented the results of my work to others at Nanoramic, justifying both the need for this enhancement to experiment design and my implementation of it.",
                    "With next to no experience or knowledge of Bayesian optimization at the beginning of my internship, I set to work breaking down the process into a form I could comprehend, making liberal use of elucidating conversations with my supervisor as well as many a Google search. I similarly went to work parsing the components of the libraries I would have to modify to yield a successful implementation, refactoring and adding clarifying comments as I went along, until the previously intimidating and inscrutable workings of these libraries became increasingly comprehensible to me. By the end, I had not learned enough to be an expert in Bayesian optimization, but I had learned enough to be able to use it effectively.",
                    "During my time at Nanoramic, I developed and refined my Python and Data science skills, but more importantly I learned how to tackle an open-ended problem in a procedural and systematic manner. I examined multiple candidate solutions, then developed and refined a select few of those solutions for testing, and integrated one of those select few solutions into the front-end and back-end of the existing system, and communicated my results to a larger group. In the process, I sharpened my skillset as well as my capacity to adapt and tackle complicated problems with unknown solutions. "

                ]
        },
        {
            "title": "Graduate Research Assistant",
            "start_date": "May 2021",
            "end_date": "Present",
            "organization": "University of Pittsburgh",
            "location": "Pittsburgh, PA",
            "logo": require("./components/assets/images/work/university_of_pittsburgh.png"),
            "summary": "Worked on DARPA-funded Artificial Social Intelligence for Successful Teams (ASIST) project, focusing on theory of mind in team setting. Extracted, transformed, analyzed, and presented experimental data using R and Python. Developed interventions for Artificial Social Intelligence (ASI) agent using Python. ",
            "content": [
                "Initially intending to pursue my Master's Degree part-time, my plans changed when Dr. Michael Lewis of the University of Pittsburgh reached out to me offering a graduate research assistantship in AI that would fully fund my Master's program and provide me with a living stipend, on the condition that I pursue my degree full-time. The opportunity to do AI research and pay for my graduate degree at the same time was a hard offer to pass up, and so I elected to leave Federated Hermes and join the University of Pittsburgh as a Graduate Research Assistant.",
                "In my Graduate Research Assistantship, I extracted, transformed, and analyzed experimental data to identify notable trends or points of interest in the data, developing presentations and visualizations of that data to be presented to my research team on a weekly basis. In addition, I assisted in the development of Python scripts for Artificial Intelligence programs and assisted in the organization and publication of research related to our work. Finally, I often examined the research of other members of the team as well as of other teams, identifying information of interest or significance and often reaching out to the team members for additional information. A typical workweek involved a combination of meetings to discuss and presents research results and plan out next steps, as well as extended periods of time analyzing experimental data or modifying AI scripts.",
                "My work as a Graduate Research Assistant orbited primarily around the DARPA Artificial Social Intelligence for Successful Teams (ASIST) program. This program was designed to develop Artificial Social Intelligence (ASI) agents that were designed to assist teams of players in collaborative activities such as search-and-rescue missions. All participating organizations, including my own CMU/Pitt team, submitted AI agents whose performance would be evaluated on team tasks conducted within the Minecraft environment.",
                "My graduate research had a partially open-ended structure, which came with its advantages and disadvantages. While allowing me a great deal of freedom in how I approached my tasks, I also had to confront a largely unfamiliar research environment, bringing myself up to speed on novel concepts, the overall team dynamics, and how best to contribute. It took time for me to carve out a niche in data analysis and presentation, and I had to be responsive to team feedback as well as take the initiative in soliciting direction. This was made more challenging by the fact that I was balancing a full courseload on top of my assistantship, requiring efficient use of time and a proper balancing of priorities.",
                "In the end, however, I succeeded in my work, using my research to develop my graduate thesis (also currently in the process of being turned into a journal publication) as well as providing actionable information which the rest of the team could use in their own research. My research experience further benefited me in my internship at Nanoramic, where my knowledge of AI systems allowed me to approach the problems posed at Nanoramic from a more informed perspective. Most importantly, however, I developed my capacity for team collaboration, taking initiative in open-ended project environments, and adapting to fit the needs of my team. "
            ]
        },
        {
            "title": "Associate Developer",
            "start_date": "August 2022",
            "end_date": "May 2021",
            "organization": "Federates Hermes",
            "location": "Pittsburgh, PA",
            "logo": require("./components/assets/images/work/federated_hermes.png"),
            "summary": "Developed and augmented business intelligence applications using combination of C# ASP.Net framework, SQL Database (SQL Server and Oracle) and Excel VBA, including full-stack development of new web apps integrated with backend database.",
            "content": [
                "Seamlessly transitioning from my work as an intern at Federated Hermes, my role as an Associate Developer exposed me to more involved and in-depth components of Federated's IT systems, including C# and ASP.NET-based web applications. Just as importantly, it exposed me to experience working in a professional team on a long-term project.",
                "While I continued some of the work from my time as an intern with Federated Hermes, my primary focus was an in-house business intelligence application to be used by Federated's financial investor teams, providing a variety of information on Federated's financial holdings, including holdings particular to each individual investor, and giving the users the options to make buy or sell recommendations on those holdings. This application relied on SQL queries from the backend that were then processed in C# and ultimately presented in ASP.NET-based JavaScript and HTML. A prior version had been previously developed in Excel VBA, but the new version constituted a total overhaul, translating the majority of prior functionality into sleek new web app environment while adding new additional features.",
                "In contrast to my internship work, which often focused on modifications to smaller, Excel VBA-based business intelligence applications, the ASP.NET web app was a complex, multi-page application involving dozens of libraries, the management of user-specific data and user access permissions, and separate back- and front-end environments, both of which I had to develop in. Similarly, while my previous work was often solo, with the majority of my communication being with either business stakeholders or mentoring senior programmers, this work placed me alongside others in a four-person team, balancing discrete responsibilities and coordinating code changes. I became someone not only tasked by the business user to complete a request, but someone who was relied on by my teammates to perform work that their own work would then connect with. In short, I had to become a \"team player\".",
                "My time as an Associate Developer was cut short by the offer for the Graduate Research Assistantship, but in the time that I was in that position, I developed familiarity and experience with ASP.NET development, developed my capacity for working in a team dynamic, and successfully balanced the competing needs and priorities of multiple projects simultaneously."
            ]
        },
        {
            "title": "Intern",
            "start_date": "September 2018",
            "end_date": "August 2020",
            "organization": "Federates Hermes",
            "location": "Pittsburgh, PA",
            "logo": require("./components/assets/images/work/federated_hermes.png"),
            "summary": "Developed and augmented business intelligence applications using SQL Database (SQL Server and Oracle) and Excel VBA. 2020 Federated Hermes Intern Hackathon, Company-wide winners.",
            "content": [
                "My first position to utilize my then-nascent programming and software engineering skills, Federated holds a special place in my heart as the place where I first developed my professional experience and understood the demands of the modern workplace.",
                "The word \"intern\" can be a little misleading here. Depending on the semester, I alternated between 20 and 40-hour work shifts, and many of my work responsibilities were advanced enough that I often continued them when I became a full-time employee. That work, which gradually increased in sophistication and scope as my time at Federated continued, involved the modification of batch processing scripts, business intelligence applications, and SQL database tables and database scripts. A typical work cycle involved being assigned a requested change by a business user, communicating with that user to clarify the needs, modifying the associated code, submitting a code change request, and monitoring the status of that code change when it was deployed to production. Coding languages involved including SQL, VBScript, and Unix scripting.",
                "A recurring challenge during my time at Federated Hermes, common to any enterprise-level IT system, was having to familiarize myself with pre-existing code bases that had been developed by multiple developers over the years, including code that stretched back to the early 2000s. As coding practices evolved, different developers with different styles came and went, and business requests led to the addition of new features and modification of existing features, much of the code I worked with involved many initially-unfamiliar components. My tasks thus often involved developing mental (and sometimes physical) maps of the workings of the code, how different components connected with each other and what functionality they performed. It was only after sufficiently developing those mental maps could I begin to change the code per business requests. Over time, my experience with particular applications led to me becoming the primary point of contact for business users seeking additional modification to those applications.",
                "My time at Federated constituted my first exposure to enterprise-level code bases. Any sufficiently large modern company is supported by a vast array of interlocking systems that are continually developed and refined, with the knowledge stored both in documentation but especially in the vast network of formal and informal relationships that compose the enterprise. No individual has full knowledge of the system, and as a consequence modifying the system requires communication with multiple employees in multiple departments. As my time at Federated progressed, I refined those communication skills, developing both the technical knowledge I needed to ask the right questions, and the personal relationships with my coworkers that both enabled code changes to go more smoothly and made my time at Federated more pleasant.",
                "I am immensely grateful for the opportunity I had to work at Federated Hermes. Through my time working there, I developed discrete technical skills, the formal and informal skills needed to successfully navigate an enterprise environment, and most importantly a sense of confidence in my own capacity to do the job and to do the job well."
            ]
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
                "While I'm happy to do work in Javascript, it is not my favorite language. In my mind, it combine's Java's wordy and cluttered syntax with Python's mysterious unspoken behind-the-scenes assumptions. A common example is how the code of 1 + \"1\" results in \"11\", whereas even Python would throw an error. Additionally, JavaScript's omnipresence in front-end web scripting means the code has to be backwards-compatible to the Late Cretaceous period, which prevents JavaScript from correcting some of its less-adaptive idiosyncrasies except through additional libraries like React."
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
        },
        {
            "name": "React",
            "logo": require("./components/assets/images/skills/react_logo.png"),
            "experience_level": "Intermediate",
            "years_of_experience": "1",
            "description":
                [
                    "Despite being a JavaScript library, React is distinct enough from JavaScript that it merits its own section. ",
                    "React does an excellent job of integrating JavaScript code, HTML, and CSS in an integrated environment that enables superior separation of concerns compared to a naive HTML-CSS-JavaScript website. The use of Components, which are called with syntax nigh-identical to that of HTML elements, is an ingenious solution to reducing HTML clutter while ensuring the Components' logic is properly associated within the location of the web app, and allows for superior refactoring. Its dedicated support by Facebook leaves me confident in its maintainability for the foreseeable future.",
                    "I learned React through the development of this portfolio website, which makes it the youngest of my skills presented here. That said, once I got around the initial syntactical oddities, React behaved much like any other object-oriented programming language, and much of the coding knowledge from those other languages transferred easily into React. You can look at this portfolio website and judge for yourself whether you'd consider it to be \"Intermediate\" versus \"Novice\", but on my own part, I'm confident enough with my knowledge of React to say my ability to work with it is comparable to that of other OOP Languages.",
                    "Being a JavaScript library, React inherits many of JavaScript's oddities. The syntax is unconventional compared to other languages, and the initial learning curve was made steeper because I applied syntactical knowledge from other languages to React to unexpected effect. An early example was that, if I passed arguments to a component, all of those arguments would be attributes of a 'props' object unless all of those named arguments were encased in curly braces in the function declaration, which is not how parameters work in Java or Python (or even native JavaScript). Additionally, even refactored React can be cluttered-looking, with a mesh of angle brackets, parenthesis, and curly braces. Some of this is the consequence of any web-facing language that has to dynamically insert HTML and CSS, although I think ASP.NET did it more cleanly (partly because it used the cleaner C#) and Python's Plotly Dash Library also allowed a cleaner syntax, albeit while unable to take full advantage of the power of HTML."
                ]
        }
    ],
    "EDUCATION": [
        {
            "Degree": "M.S. in Information Science",
            "University": "University of Pittsburgh",
            "GPA": "4.0",
            "Description": [
                "Having graduated with my B.S. in Computing Engineering at the end of 2020, I had intended to pursue a Master's Degree on a part-time basis while still maintaining my job at Federated Investors. As it happens, however, Dr. Michael Lewis reached out to me shortly after I submitted my application to the University of Pittsburgh, offering a graduate research assistantship in AI that would fund the entirety of my degree as well as provide a stipend for living expenses, in exchange for me becoming a full-time student. After talking with multiple people about the offer, who all gave their enthusiastic support, I decided to take the offer, leaving my job at Federated and returning to school full-time.",
                "The University of Pittsburgh MSIS program refined and expanded upon the education developed in my Computer Engineering career. Classes covered topics including Database and Network management, Information Security, Artificial Intelligence and Machine Learning, Cloud Computing, and Algorithm Design. Additional coursework gave me my first experience in virtual reality and design using the Unity engine.",
                "As it happens, entering grad school with a few years of work experience under my belt proved quite useful. The discipline of the 9-to-5 schedule, the attention to detail and communication skills I cultivated, as well as my accumulated coding experience gave me a leg up in my classes. My time with Code for Pittsburgh further improved my coding skills and experience with a range of common programmatic toolsets; it was quite gratifying when my Machine Learning course, which used R and had a reputation as one of the more difficult courses, was made somewhat easier by my prior experience with R at Code for Pittsburgh. Additionally, my graduate research assistanship proved to create a virtuous cycle where topics covered in class informed and improved my research and vice versa. That virtuous cycle culminated in my decision, relatively late in my program, to complete a Thesis (otherwise optional for my program), a decision which both gave me academic credit and allowed me to further develop my own research in a way that benefited both me and the program as a whole.",
                "I had decided at some point early in my degree that I wanted to maintain a 4.0 GPA, and I did. What I learned from that enterprise is that maintaining a high GPA was not as much a product of raw intellectual power but more a product of proper time management, communication, and 'learning how to learn'. I started projects early and often finished them before other students had even begun. I took extensive notes in the classroom, asked clarifying questions, and made frequent use of office hours. I organized study groups and built up a network of fellow students who I could reach out to about questions related to my current as well as future courses I was preparing for.",
                "Completing my MSIS degree was a proud moment for me, representing the culmination of years of personal and professional development that I could finally express to a more complete extent. I enjoyed the program (a surprising thing, I'm told, for graduate-level coursework) and was left with a stronger confidence in my work ethic and capacity to learn and learn quickly."
            ],
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
            "Description": [
                "Having completed my Psychology Degree in 2016, I then spent a year in the Americorps VISTA program. While working in that program, I also began teaching myself coding in my non-work hours, and found myself taking to it rather well. As the year of my VISTA term progressed, I gradually realized that programming, and the work associated with programming, energized and engaged me in a way that I hadn't previously experienced. Though I acknowledged that returning to school meant that I would have to start at near the bottom of the educational ladder and slowly climb my way back up, there was something energizing and reassuring about the work I was starting to engage in, and the decision to start the Computer Engineering program at the University of Pittsburgh proved to be a relatively simple one.",
                "My Computer Engineering program started with the fundamentals of chemistry, physics, and mathematics, and gradually expanded into circuit design, programming, and computer architecture and design. My coursework involved programming in C, Java, JavaScript, Unix, and Verilog, which should also convey the scope of the subject matter taught in the classes.",
                "My Computer Engineering program was not always a smooth one. Having not taken a course on advanced math since high school, I faced a learning curve in rebuilding my atrophied mathematical knowledge. Gatekeeping courses such as Algorithm Implementation, intended as 'gatekeeping' courses designed to sift the wheat from the chaff, tested my still-young programming skills. Partway through my final year in Computer Engineering, the Coronavirus pandemic came to the United States, forcing a rocky transition into remote coursework. Finally, in the middle of my program, I began working at Federated Investors (now Federated Hermes), initially in a co-op rotation but quickly moving into a part-time role while pursuing a full courseload, an overall workload which was managed but not particularly pleasant.",
                "In the end, however, I graduated with my degree in Computer Engineering, having learned the fundamental of 'computer work' and with considerable professional experience already under my belt. The experience was such that I was confident that I wanted to continu my education in a Master's program, although between the Coronavirus pandemic and having spent the last four years on quite the heavy workload, I was content to spend a semester simply doing work at Federated Hermes before returning my attention to school."
            ],
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
            "Description": [
                "While in retrospect an unconventional decision for someone who ultimately found a career in so-called 'computer work', my Psychology degree proved itself to be generally useful overall as well as having surprising benefits in my Artificial Intelligence work.",
                "My degree covered the fundamentals of Psychology and research and then branched into more sophisticated topics such as developmental psychology, psychology of personality, abnormal psychology, and cognitive psychology, the last of which proved most directly relevant in my artificial intelligence work. In addition to my core curriculum, I also took general education courses ranging from women's studies, philosophy, world politics, and sociology.",
                "Looking back on my undergraduate self, I recall a certain aimlessness, a sense of still getting my footing in the adult world and not yet knowing the direction I would take. It was only after stepping into my first full-time professional role in my Americorps VISTA program, taking immediately after graduation, that a more firm sense of direction and focus began to coalesce, ultimately leading into pursuing my Computer Engineering degree.",
                "My psychology background found unexpected benefit in my graduate career. Dr. Michael Lewis, himself with a background in Psychology and Human Factors and leading research on artificial social intelligence, saw value in my prior experience, and ultimately extended the research assistantship to me based on those qualifications. His judgment on the value of that experience proved astute, as my Psychology background allowed me to find a niche in the ASIST study analyzing multitasking in complex team scenarios, a dynamic that I found was rarely studied in the scientific literature. That niche ultimately led to my Master's Thesis, \"Investigating the Cognitive Load - Productivity Tradeoff in Multitasking\"."
            ],
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
            "link": "http://d-scholarship.pitt.edu/id/eprint/44036",
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