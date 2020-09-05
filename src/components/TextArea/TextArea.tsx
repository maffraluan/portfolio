import React from 'react'
import icon from '../../assets/icons/icon.svg'
import './styles.css'

type textAreaProps = {
    title?: string,
    tech?: string,
    responsability?: string,
    jobTitle?: string,
    techsTitle?: string,
    respTitle?: string,
    fixWidth?: object,

    // repo types 
    forkIcon?: any;
    repoName?: string,
    description?: string,
    languages?: string,
    returnRepo?: string,
    returnDescription?: string,
    returnLanguages?: string,
};

const TextArea: React.FunctionComponent<textAreaProps> = ({
    title, tech, responsability, jobTitle, techsTitle, respTitle,
    forkIcon, repoName, description, languages, returnRepo, returnDescription,
    returnLanguages, fixWidth, children }) => {

    return (
        <div className="container" style={fixWidth}>
            <div className="fork-icon">
                    <img src={forkIcon && icon } alt="" />
                </div>
            <div className="content">
                <div className="job-title">
                    <h2>{title || repoName}</h2>
                    <p>{jobTitle || returnRepo}</p>
                </div>
                <div className="techs-title">
                    <h2>{tech || languages}</h2>
                    <p>{techsTitle || returnLanguages}</p>
                </div>
                <div className="responsabilities-title">
                    <h2>{responsability || description}</h2>
                    <p>{respTitle || returnDescription}</p>
                </div>
            </div>
            {children}
        </div>
    )
};

export default TextArea;