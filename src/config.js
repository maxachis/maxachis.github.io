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
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "title": "Graduate Research Assistant",
            "start_date": "May 2021",
            "end_date": "Present",
            "organization": "University of Pittsburgh",
            "location": "Pittsburgh, PA",
            "logo": require("./components/assets/images/university_of_pittsburgh.png"),
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "title": "Associate Developer",
            "start_date": "August 2022",
            "end_date": "May 2021",
            "organization": "Federates Hermes",
            "location": "Pittsburgh, PA",
            "logo": require("./components/assets/images/federated_hermes.png"),
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "title": "Intern",
            "start_date": "September 2018",
            "end_date": "August 2020",
            "organization": "Federates Hermes",
            "location": "Pittsburgh, PA",
            "logo": require("./components/assets/images/federated_hermes.png"),
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ],
    "SKILLS": [
        {
            "name": "Python",
            "experience_level": "Advanced",
            "years_of_experience": "6",
            "description": "Python is my strongest and longest-known coding language, learned when I first taught myself the basics of programming on Codecademy. My language of choice in personal projects, I also utilized it extensively in my time as a Graduate Research Assistant at the University of Pittsburgh and as a Data Science Intern at Nanoramic Laboratories. I am also well-acquainted with a number of its packages, including pandas, NumPy, Matplotlib, and PyTorch."
        }
    ]
};

export default Config;