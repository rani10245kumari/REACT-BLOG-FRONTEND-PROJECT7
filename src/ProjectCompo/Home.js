import React, { useContext } from "react";
import { Store } from "../ContextAPI/ContexApi";
import { NavLink } from "react-router-dom";

const Homecom = () => {
    const [Data] = useContext(Store);
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

            <div className="Articlelist">
                {Data.filter((item) => item.id >= 72 && item.id <= 77).map(
                    (item, index) => {
                        const wordnext2 = item.name?.split(" ") || [];
                        const displayText3 =
                            wordnext2.length < 20
                                ? `${wordnext2.slice(0, 20).join(" ")}...`
                                : item.name || "";
                        return (
                            <div key={index}>
                                <NavLink to={`/Navigate/${item.id}`}>
                                    <div className="Article">
                                        <img
                                            className="Latestimage"
                                            src={item.image}
                                            alt="Not Found"
                                        />
                                        <div className="Articletext">
                                            <h1>{displayText3}</h1>
                                            <p className="text">{item.text?.slice(0, 120) || ""}</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        );
                    }
                )}
                <div>
                    <h1>Load_More</h1>
                </div>
                {/* <img
                    className="divinner"
                    src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/07/Jawan-Shah-Rukh-Khan.jpg?ssl=1&quality=80&w=f"
                    alt="not found"
                /> */}
            </div>
            <div className="Advlatest">
                <div className="Advertisement">
                    <h1>{"Please for Advertisement"}</h1>
                </div>

                <div>
                    <h1 className="Latest">Top Post</h1>
                    {Data.filter((item) => item.id >= 73 && item.id <= 76).map(
                        (item, index) => {
                            const wordnext = item.text?.split(" ") || [];
                            const displayText2 =
                                wordnext.length < 5
                                    ? `${wordnext.slice(0, 5).join(" ")}...`
                                    : item.name || "";
                            return (
                                <div key={index}>
                                    <NavLink to={`/Navigate/${item.id}`}>
                                        <div className="Article">
                                            <img
                                                className="Latestimage2"
                                                src={item.image}
                                                alt="Not Found"
                                            />
                                            <div className="text2">
                                                <h3>{item.name}</h3>
                                                <p>{displayText2}</p>
                                                <p>{item.text?.slice(0, 40) || ""}</p>
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


            <h1 className="Latest">Latest Stories</h1>
            <div className="LatestDiv">
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
                                    <div className="text">
                                        <h2>{item.name}</h2>
                                        <p>{item.text.slice(0, 135)}..</p>
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