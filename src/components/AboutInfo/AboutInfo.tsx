import React from 'react'
import './styles.css'

type IAboutInfoProps = {
    age: number 
};

const AboutInfo: React.FC<IAboutInfoProps> = (props) => {
    return (
        <div className="content-info">
            <div className="title-name">
                <h2>Luan Maffra de Oliveira</h2>
            </div>

            <div className="paragraph-text">
                <p>A young man that uses the technology for your own favour. I love teammates. I'm doing my best for updating me everytime and my mind flow with new challenges.
                Recently I bought a course where I'll learn new technicals in ReactJs, React Native, Typescript and NodeJs. To equilibrate my mind. And new technologies like GraphQL, AWS, Docker to complete my profile.
                </p>
            </div>

            <div className="personal-info">
                <div className="personal-info-row">
                    <h2>Drive License:</h2>
                    <strong>Car license</strong>
                </div>

                <div className="personal-info-row">
                    <h2>Age:</h2>
                    <strong>{props.age}</strong>
                </div>

                <div className="personal-info-row">
                    <h2>Nationality:</h2>
                    <strong>Brazilian</strong>
                </div>

                <div className="personal-info-column">
                    <h2>Education:</h2>
                    <strong>
                        Current we were using C# webforms for desktop application. PHP, MySQL for web application. But I left the course after realize it wasn't what I looking for. Then I started to study new technologies on my own.
                    </strong>
                </div>
            </div>
        </div>
    )
}

export default AboutInfo;