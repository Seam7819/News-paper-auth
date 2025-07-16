import { useLoaderData, useParams } from "react-router";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import NewsDetailsCard from "../components/NewsDetailsCard";

const NewsDetails = () => {

    const data = useLoaderData()
    const [news, setNews] = useState({})
    // console.log(data);
    const { id } = useParams()
    // console.log(id);

    useEffect(() => {
        const newsDetails = data.find((singleNews) => singleNews.id === id);
        setNews(newsDetails);
    }, [data, id]);

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <div>
                    <h1>News Details</h1>
                    <NewsDetailsCard key={news.id} news={news}></NewsDetailsCard>
                </div>
            </main>
        </div>
    );
};

export default NewsDetails;