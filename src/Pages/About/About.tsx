import React from 'react'
import AboutInfo from '../../components/AboutInfo/AboutInfo'
import Layout from '../../components/Layout/Layout'
import './styles.css'

const About: React.FC = () => {
    return (
        <Layout>
            <section className={"f-100 bg-dark-light"}>
                <AboutInfo age={24} />
            </section>
        </Layout>
    )
};

export default About;