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

            <section className={"f-box"}>
                <div>
                    <div className={"f-row"}>
                        {repo.map((item: any, index: number) => (
                            <li className={"repos bg-dark-light"} key={index}>
                                <TextArea
                                    repoName="Repo name:"
                                    languages="Languages:"
                                    description="Description:"
                                    returnRepo={item.name}
                                    returnLanguages={item.language}
                                    returnDescription={item.description}
                                >
                                </TextArea>
                                <div className={"btn-f"}>
                                    <a className={"btn"}href={item.html_url} target="_blank" rel="noopener noreferrer">
                                        <button type="button">Go to repo</button>
                                    </a>
                                </div>
                            </li>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export default MainScreen;