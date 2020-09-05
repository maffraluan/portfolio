import React from 'react'
import './styles.css'

type IAboutInfoProps = {
    age: number 
};

const AboutInfo: React.FC<IAboutInfoProps> = ({
    age
}) => {
    return (
        <div className="content-info">
            <div className="title-name">
                <h2>Luan Maffra de Oliveira</h2>
            </div>

            <div className="paragraph-text">
                <p>Hello there! Gosto muito de aprender programação, ajudo e peço ajuda quando necessário,
                gosto de trabalhar em equipe. Estou sempre me atualizando e em busca de novos desafios.
                Comprei um curso onde estou estudando Nodejs puro e express. ORM, GraphQL, AWS, React, React Native e Typescript.
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
                        Onde pude ter contato com PHP e C# WebForm.
                        Mas deixei o curso, pelo fato das techs ensinadas não serem o que eu estava procurando.
                    </strong>
                </div>
            </div>
        </div>
    )
}

export default AboutInfo;