import React, { useState } from 'react'

import icon from '../../assets/icons/fork-icon.png'
import './styles.css'

interface textAreaProps {
    title?: string,
    tech?: string,
    responsability?: string,
    jobTitle?: string,
    techsTitle?: string,
    respTitle?: string,

    // repo types 
    forkIcon?: any;
    repoName?: string,
    description?: string,
    languages?: string,
    returnRepo?: string,
    returnDescription?: string,
    returnLanguages?: string,
}

const TextArea: React.FunctionComponent<textAreaProps> = ({
    title, tech, responsability, jobTitle, techsTitle, respTitle,
    forkIcon, repoName, description, languages, returnRepo, returnDescription,
    returnLanguages, children }) => {

    return (
        <div className="container">
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
}

export default TextArea