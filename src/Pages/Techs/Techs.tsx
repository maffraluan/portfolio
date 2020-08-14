import React from 'react'

import TechInfo from '../../components/TechInfo/TechInfo'
import Layout from '../../components/Layout/Layout'

interface ITechsProps {

}

const Techs: React.FC<ITechsProps> = () => {

    return (
        <Layout>
            <div className="text-area">
                <div className="text-area-align">
                    <div className="container">
                        <TechInfo />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Techs;