import React from 'react'
import TextArea from '../../components/TextArea/TextArea'

import './styles.css'
import Layout from '../../components/Layout/Layout'

const Experience: React.FC = () => {

    return (
        <Layout>
            <div className="text-area">
                <div className="text-area-align">
                    <TextArea
                        title="Last job at:"
                        tech="Main techs:"
                        responsability="Responsabilities"
                        jobTitle="Desenvolvedor Frontend at Agência Market Media/ 6 meses - Campinas - SP"
                        techsTitle="Javascript, React, React Native e C#, Swagger, Bitbucket para versionamento de código."
                        respTitle="Refatoração de código de Angular.js para React.FC, onde integrava com api feita em C# documentação de pequenos projetos.
                        Responsável pela aplicação<Tablet> offline para uma empresa de Textile."
                    />
                    <div className="divider"></div>
                    <TextArea
                        title="Jobed at:"
                        tech="Main techs:"
                        responsability="Responsabilities"
                        jobTitle="Desenvolvedor Júnior at Flex Frota/ 9 meses - Pirassununga - SP"
                        techsTitle="Maker-Softwell Solutions, HTML5, CSS3, Javascript, Flutter, Figma"
                        respTitle="
                        Desenvolvimento Web e manutenção.
                        Levantamento de requisitos.
                        Criação e manutenção de ferramentas no sistema próprio em Gestão de Frota, feito em Maker.
                        Desenhava os projetos no Figma para as aplicações mobile.
                        Mobile em Flutter.
                        Documentação de sistema."
                    />
                </div>
            </div>
        </Layout>
    )
}

export default Experience;