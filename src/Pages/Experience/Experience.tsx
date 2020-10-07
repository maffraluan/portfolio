import React from 'react'
import TextArea from '../../components/TextArea/TextArea'
import Layout from '../../components/Layout/Layout'
import './styles.css'

const Experience: React.FC = () => {
    return (
        <Layout>
             <section className={"f-100 bg-dark-light"}>
                <div>
                    <TextArea
                        title={"Job at"}
                        job={"Junior Web Developer at Agência Market Media/ 7 months - Campinas - SP"}
                        techsTitle={"Main techs"}
                        tech={"Javascript, React, React Native, C#, Swagger & Bitbucket for version-control."}
                        respTitle={"Main activities"}
                        responsability={"Code refactoring from Angular.js to React.js (Function components). Fetching their own C# API. Documentation small projects. Responsible for created an offline application to a Textile global company."}
                    />
                </div>
            </section>

             <section className={"f-100 bg-dark-light"}>
                <div>
                    <TextArea
                        title={"Job at"}
                        job={"Junior Web Developer at FlexFrota/ 10 months - Pirassununga - SP"}
                        techsTitle={"Main techs"}
                        tech={"Maker-Softwell Solutions system, HTML5, CSS3, Javascript, Flutter, Figma."}
                        respTitle={"Main activities"}
                        responsability={"Web development and maintenance. Requirements gathering. Building and maintenance for new features for their own fleet management system. I drew some projects and features on Figma for their own mobile application. Documentation of features and deploy to Play Store and Apple Store."}
                    />
                </div>
            </section>
        </Layout>
    )
};

export default Experience;