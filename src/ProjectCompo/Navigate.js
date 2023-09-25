import React, { useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Store } from "../ContextAPI/ContexApi";

const Navigate = () => {
    const [newitem] = useContext(Store);
    const { id } = useParams();
    const itemId = parseInt(id);
    const selectedItem = newitem.find((item) => item.id === itemId);
    const categorynew = selectedItem ? selectedItem.category : "";
    const relatedItems = newitem
        .filter(
            (item) =>
                item.category === categorynew &&
                (item.id % 5 === 1 || item.id % 3 === 2 || item.id % 3 === 0)
        )
        .slice(1, 4);
    console.log(categorynew);

    return (
        <div>
            <div className="ParentTop">
                <div className="detail">
                    <h1>{selectedItem.name}</h1>
                    <h1>{selectedItem.title}</h1>
                    <div className="Profile">
                        <h4 className="name"> Rani Kumari </h4>
                    </div>
                    <img
                        className="NavigateImg"
                        src={selectedItem.image}
                        alt="not found"

                    />
                    <br />
                    <p className="navitext">{selectedItem.text}</p>
                    <p>{selectedItem.content}</p>
                </div>
                <div className="rightDetails"></div>
            </div>
            <div className="LatestDiv  navigateimg2">
                {relatedItems.map((item, index) => (
                    <div key={index} className="HomeLatest">
                        <NavLink to={`/Navigate/${item.id}`}>
                            <img className="latestimage" src={item.image} alt="Not Found" />
                            <div className="text4">
                                <h2>{item.title}</h2>
                                <h2>{item.name}</h2>
                                <p>{item.text.slice(0, 180)}</p>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Navigate;