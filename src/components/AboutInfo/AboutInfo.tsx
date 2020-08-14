import React from 'react'

import './styles.css'

interface IAboutInfoProps {
    age: number,
};

const AboutInfo: React.FC<IAboutInfoProps> = ({
     age, children
}) => {
    return (
        <div className="content-info">
            <div className="title-name">
                <h2>Luan Maffra de Oliveira</h2>
            </div>

            <div className="paragraph-text">
                <p>Hello there! Sou uma pessoa introvertido e extrovertido dependendo das situações. Gosto de ouvir conselhos
                    e dar conselhos quando necessário! Ouço muitas mas muitas músicas para melhorar os meus dias.
                    Gosto muito de aprender programação e peço ajuda quando necessário.
                    Comprei um curso onde estou estudando Nodejs puro e express. ORM, GraphQL, React, React Native e Typescript.
                    Onde eu consiga melhorar meus conhecimentos de frontend e implementar com backend. 
                </p>
            </div>

            <div className="personal-info">
                <div className="personal-info-row">
                    <h2>Drive License:</h2>
                    <strong>Car license</strong>
                </div>

                <div className="personal-info-row">
                    <h2>Age:</h2>
                    <strong>{age}</strong>
                </div>

                <div className="personal-info-row">
                    <h2>Nationality:</h2>
                    <strong>Brazilian</strong>
                </div>

                <div className="personal-info-column">
                    <h2>Education:</h2>
                    <strong>
                        Estudei 2 modúlos em Técnico em Desenvolvimento de Sistemas pela ETEC.
                        Onde pude ter contato com PHP e C# WebForm. Mas deixei o curso, pelo fato das techs ensinadas não eram o que eu queria.
                    </strong>
                </div>
            </div>
        </div>
    )
}

export default AboutInfo;