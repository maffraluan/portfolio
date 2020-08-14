import React from 'react'

import './styles.css'

interface ITechInfoProps {
}

const TechInfo: React.FC<ITechInfoProps> = ({ children }) => {
    return (
        <div className="content-tech">
            <div className="content-title-tech">
                <h2>Knowledge</h2>
            </div>

            <div className="main-techs">
                <h3>Main Techs:</h3>
                <strong>ES6 - React - React Native - Typescript - Git - ApiREST</strong>
            </div>
        </div>
    )
}

export default TechInfo;