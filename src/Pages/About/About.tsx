import React from 'react'
import AboutInfo from '../../components/AboutInfo/AboutInfo'
import Layout from '../../components/Layout/Layout'
import './styles.css'

const About: React.FC = () => {
    return (
        <Layout>
            <div className="text-area">
                <div className="text-area-align">
                    <div className="container max-width">
                        <AboutInfo age={24} />
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default About;