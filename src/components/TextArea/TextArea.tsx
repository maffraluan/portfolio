import React from 'react'
import './styles.css'

type textAreaProps = {
    title?: string,
    job?: string,
    techsTitle?: string,
    tech?: string,
    respTitle?: string,
    responsability?: string,

    // repo types 
    repoName?: string,
    description?: string,
    languages?: string,
    returnRepo?: string,
    returnDescription?: string,
    returnLanguages?: string,
};

const TextArea: React.FunctionComponent<textAreaProps> = ({
    title, tech, responsability, job, techsTitle, respTitle,
     repoName, description, languages, returnRepo, returnDescription,
    returnLanguages, children }) => {

    return (
        <>
            <div className="text-area">
                <h2>{title || repoName}</h2>
                <p>{job || returnRepo}</p>
            </div>
            <div className="text-area">
                <h2>{techsTitle || languages}</h2>
                <p>{tech || returnLanguages}</p>
            </div>
            <div className="text-area">
                <h2>{respTitle || description}</h2>
                <p>{responsability || returnDescription}</p>
            </div>
            {children}
        </>
    )
};

export default TextArea;