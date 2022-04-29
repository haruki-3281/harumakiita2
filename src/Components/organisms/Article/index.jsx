import React, { useState, useEffect } from "react";
import $Article from "./style";
import UserInfo from "../../molecules/UserInfo";
import Title from "../../atoms/Title";
import TagsContainer from "../../molecules/TagsContainer";
import Likes from "../../atoms/Likes";

export default function Article(props) {
    const data = props.data;
    const [hover, setHover] = useState(false);

    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <$Article
            className="article"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            <UserInfo
                user={data.user}
                timestamp={data.created_at}
            />
            <Title
                title={data.title}
                hover={hover}
            />
            <TagsContainer tags={data.tags} />
            <Likes likesNum={data.likes_count} />
        </$Article>
    );
};

