import React from "react";
import Config from "../config";

const Resume = () => {
    // TODO: Replace Headers with Typescript headers?
    return (
        <div className={"page-container text-block-resume"}>
            <ResumeHeader/>
            <ResumeEducation/>
            <ResumeSkills/>
            <ResumeExperience/>
            <ResumeProject/>
            <ResumeVolunteer/>
        </div>
    )
};

const ResumeHeader = () => {
    return (
        <>
            <h1>{Config.RESUME.FullName}</h1>
            <hr/>
            {/* TODO: Thicken HR */}
            <div>
                <strong>
                    LinkedIn: <a href={Config.RESUME.LinkedIn}>{Config.RESUME.LinkedIn}</a>
                </strong>
            </div>
            <div>
                <strong>
                    GitHub: <a href={Config.RESUME.GitHub}>{Config.RESUME.GitHub}</a>
                </strong>
            </div>
            <hr/>
            <div>
                <ul>
                    {Config.RESUME.SummaryPoints.map((entry) => (
                        <li>
                            <em>{entry}</em>
                        </li>
                    ))}
                </ul>
            </div>
            <hr/>
        </>
    )
}

const ResumeEducation = () => {
    // TODO: Change to flexbox, so that degree and graduation divs are side-by-side in nonmobile, but stacked in mobile
    return (
        <>
            <h2>Education</h2>
            {Config.EDUCATION.map((entry) => (
                <>
                    <div className={"resume-education-degree"}>
                        <strong>{entry.Degree}</strong>, {entry.University}
                    </div>
                    <div className={"resume-education-graduation"}>
                        Graduated {entry.GraduationDate}, GPA: {entry.GPA}
                    </div>
                </>
            ))}
            <hr/>
        </>
    )

}

const ResumeSkills = () => {
    // TODO: For skills featured on Skills page, have those be linked.
    // TODO: Possibly add all these skills to the skill section of the config, but make a setting indicating whether you want them included on the Skills page
    //   If you do that, get rid of the ResumeSkills section of the Resume
    return (
        <>
            <h2>Technical Experience and Programming Languages</h2>
            <div>
                <strong>Programming Languages: </strong>
                {Config.RESUME.ResumeSkills.ProgrammingLanguages}
            </div>
            <div>
                <strong>Version Control: </strong>
                {Config.RESUME.ResumeSkills.VersionControl}
            </div>
            <div>
                <strong>Operating Systems: </strong>
                {Config.RESUME.ResumeSkills.OperatingSystems}
            </div>
            <hr/>
        </>
    )
}

const ResumeExperience = () => {
    return (
        <>
            <h2>Relevant Experience</h2>
            {Config.WORK.map((entry) => (
                <>
                    <div className={"resume-title"}>
                        {entry.title}, {entry.organization}
                    </div>
                    <div className={"resume-date"}>
                        {entry.start_date} - {entry.end_date}
                    </div>
                    <div className={"resume-summary"}>
                        <ul>
                            <li>
                                {entry.summary}
                            </li>
                        </ul>
                    </div>
                </>
            ))}
            <hr/>
        </>
    )
}

const ResumeProject = () => {
    return (
        <>
            <h2>Relevant Project Experience</h2>
            {Config.PROJECTS.filter(function(entry) {
                return entry.inResume;
            }).map((entry) => (
                <>
                    <div className={"resume-title"}>
                        {entry.name}
                    </div>
                    <div className={"resume-date"}>
                        {entry.start_date} - {entry.end_date}
                    </div>
                    <div className={"resume-summary"}>
                        <ul>
                            <li>
                                {entry.summary}
                            </li>
                        </ul>
                    </div>
                </>
            ))
            }
        </>
    )
}

const ResumeVolunteer = () => {
    return (
        <>
        </>
    )
}



export default Resume;
