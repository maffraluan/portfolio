import React from 'react'
import TechInfo from '../../components/TechInfo/TechInfo'
import Layout from '../../components/Layout/Layout'

const Techs: React.FC = () => {
    return (
        <Layout>
            <div className="text-area">
                <div className="text-area-align">
                    <div className="container max-width min-height">
                        <TechInfo />
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Techs;