import React, { useContext } from "react";
import { Store } from "../ContextAPI/ContexApi";
import { NavLink } from "react-router-dom";
const Hollywood = () => {
    const [Data] = useContext(Store);
    console.log(Data);
    return (
        <>
            <h1 className="headingcompo">Hollywood Article </h1>
            <div className="maindiv">
                <div className="Articlelist">
                    {Data.filter((item) => item.id >= 29 && item.id <= 42).map(
                        (item, index) => {
                            return (
                                <div key={index}>
                                    <NavLink to={`/Navigate/${item.id}`}>
                                        <div className="Article">
                                            <img
                                                className="FitnessimageAll"
                                                src={item.image}
                                                alt="Not Found"
                                            />
                                            <div className="text">
                                                <h2>{item.name}</h2>
                                                <p>{item.text.slice(0, 180)}...</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            );
                        }
                    )}
                </div>
                <div className="Advlatest">
                    <div>
                        <h1 className="Latest">Top Post</h1>
                        <div>
                            {Data.filter((item) => item.id >= 25 && item.id <= 25).map(
                                (item, index) => {
                                    return (
                                        <div key={index}>
                                            <NavLink to={`/Navigate/${item.id}`}>
                                                <div className="Article AllOne">
                                                    <img
                                                        className="singleImageForAll"
                                                        src={item.image}
                                                        alt="Not Found"
                                                    />
                                                    <div className="Articletext Allone1">
                                                        <h2>{item.text.slice(0, 60)}</h2>
                                                        <h1>{index + 1}</h1>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                        {Data.filter((item) => item.id <= 28 && item.id >= 23).map(
                            (item, index) => {
                                return (
                                    <div key={index} className="toppostdiv">
                                        <NavLink to={`/Navigate/${item.id}`}>
                                            <div className="Article">
                                                <img
                                                    src={item.image}
                                                    alt="Not Found"
                                                    height="100px"
                                                    width="200px"
                                                />
                                                <div className="Articletext">
                                                    <h2>{item.name}</h2>
                                                    <p>{item.text.slice(0, 80)}</p>
                                                </div>

                                                <div className="number">
                                                    <h1>{index + 2}</h1>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                );
                            }
                        )}
                        <div className="Advertisement">
                            <h1>{"Please  for Advertisement"}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hollywood;