import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Homecom = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        axios.get("https://react-backend-project.onrender.com/").then(response => { setData(response.data) })
    })
    return (
        <div className="Container">
            <div className="MAIN-IMAGE">
                <div className="GADAR2-img">
                    <img
                        src="https://i.ytimg.com/vi/mXhYc0uLzDI/maxresdefault.jpg"
                        alt="not found"
                    />
                </div>
                <div className="top-img">
                    <img
                        src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"
                        alt="not found"
                        height="160px"
                        width="460px"
                    />
                    <img
                        src="https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2023_01/story_16792/assets/1.png?time=1672644501"
                        alt="not found"
                        height="160px"
                        width="460px"
                    />
                </div>
            </div>

            <h1 className="Latest-head">The Latest</h1>
            <div className="LatestDiv">
                {Data.filter((item) => item.id >= 65 && item.id <= 67).map(
                    (item, index) => {
                        return (
                            <div key={index} className="HomeLatest">
                                <NavLink to={`/Navigate/${item.id}`}>
                                    <img
                                        className="latestimage"
                                        src={item.image}
                                        alt="Not Found"
                                    />
                                    <h2 className="Latest-txt-head">{item.name}</h2>
                                    <p className="Latest-txt">{item.text}</p>

                                </NavLink>
                            </div>
                        );
                    }
                )}
            </div>
            <h1 className="Article-head">The Latest Article</h1>
            <div className="ArticleContainer">
                <div className="secondcolum">
                    {Data.filter((item) => item.id >= 72 && item.id <= 77).map(
                        (item, index) => {

                            return (
                                <div key={index}>
                                    <NavLink to={`/Navigate/${item.id}`}>
                                        <div className="Article">
                                            <img
                                                className="Articleimages"
                                                src={item.image}
                                                alt="Not Found"
                                            />
                                            <div className="Articletext">
                                                <h1>{item.name}</h1>
                                                <p className="text">{item.text.slice(0, 80)}..</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            );
                        }
                    )}

                    <img
                        className="largeimg"
                        src="https://w0.peakpx.com/wallpaper/346/993/HD-wallpaper-prabhas-and-anushka-shetty-baahubali.jpg"
                        alt="not found"
                    />
                </div>
                <div className="thirdcolumn">
                    <div className="Advertisement">
                        <h1>{"Please for Advertisement"}</h1>
                    </div>

                    <div className="Toppost">
                        <h1>Top Post</h1>
                        {Data.filter((item) => item.id >= 72 && item.id <= 75).map(
                            (item, index) => {

                                return (
                                    <div key={index} className="toppostArticle">
                                        <NavLink to={`/Navigate/${item.id}`}>
                                            <div className="toparticle">
                                                <img
                                                    className="TopArticleimg"
                                                    src={item.image}
                                                    alt="Not Found"
                                                />
                                                <div className="textt">
                                                    <h3>{item.name}</h3>
                                                    <p>{item.text.slice(0, 60)}..</p>
                                                </div>

                                                <div className="number">
                                                    <h1>{index + 1}</h1>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>


            <h1 className="Storiehead">Latest Stories</h1>
            <div className="StoriesDiv">
                {Data.filter((item) => item.id % 10 === 0 && item.id <= 30).map(
                    (item, index) => {
                        return (
                            <div key={index} className="HomeLatest">
                                <NavLink to={`/Navigate/${item.id}`}>
                                    <img
                                        className="latestimage"
                                        src={item.image}
                                        alt="Not Found"
                                    />
                                    <div className="last">
                                        <h2>{item.name}</h2>
                                        <p>{item.text.slice(0, 95)}..</p>
                                    </div>
                                </NavLink>
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default Homecom;