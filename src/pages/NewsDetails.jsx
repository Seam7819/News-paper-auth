import { useLoaderData, useParams } from "react-router";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import NewsDetailsCard from "../components/NewsDetailsCard";
import RighAside from "../components/homelayout/RighAside";

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
                <div className="w-11/12 flex justify-between gird grid-cols-12 gap-4 mx-auto">
                    <div className="col-span-6 p-5 ">
                        <h1 className="text-4xl font-bold mb-5">News Details</h1>
                    <NewsDetailsCard key={news.id} news={news}></NewsDetailsCard>
                    </div>
                    <div className="col-span-3 w-full">
                        <RighAside></RighAside>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NewsDetails;