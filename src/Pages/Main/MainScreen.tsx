import React, { useState, useEffect } from 'react'
import TextArea from '../../components/TextArea/TextArea'
import Layout from '../../components/Layout/Layout'
import { fetchAll } from '../../services'
import './styles.css'

type IMainScreenProps = {}

const MainScreen: React.FunctionComponent = () => {
    const [repo, setRepos] = useState<IMainScreenProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchAll();
            setRepos(data);
        };
        fetchData();
    }, []);

    return (
        <Layout>
            <div className="text-area">
                <div className="text-area-align">
                    <TextArea
                        fixWidth={{ maxWidth: '70vw', minHeight: '30vh' }}
                        title="Last job at:"
                        tech="Main techs:"
                        responsability="Responsabilities"
                        jobTitle="Desenvolvedor Frontend at Agência Market Media/ 6 meses - Campinas - SP"
                        techsTitle="Javascript, React, React Native e C#, Swagger, Bitbucket para versionamento de código."
                        respTitle="Refatoração de código de Angular.js para React.FC, onde integrava com api feita em C# documentação de pequenos projetos.
                        Responsável pela aplicação<Tablet> offline para uma empresa de Textile."
                    />
                </div>
            </div>

            <div className="main-repo">
                <div className="repos">
                    {repo.map((item: any, index: number) => (
                        <li className="grid-container" key={index}>
                            <TextArea
                                forkIcon={item.fork}
                                repoName="Repo name:"
                                languages="Languages:"
                                description="Description:"
                                returnRepo={item.name}
                                returnLanguages={item.language}
                                returnDescription={item.description}
                            >
                                <div className="btn">
                                    <a href={item.html_url} target="_blank" rel="noopener noreferrer">
                                        <button type="button">Go to repo</button>
                                    </a>
                                </div>
                            </TextArea>
                        </li>
                    ))}
                </div>
            </div>
        </Layout>
    )
};

export default MainScreen;