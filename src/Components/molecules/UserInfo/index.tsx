import React from "react";
import $UserInfo from "./style";
import PostDay from "../../atoms/PostDay";
import UserInfoCore from "../../atoms/UserInfoCore";

type typeProps = {
    user:typeUser;

    timestamp:string;
};

export default function UserInfo(props:typeProps) {
    const { user,timestamp } = props;
    const { github_login_name,twitter_screen_name,name,profile_image_url } = user;
    const userName = github_login_name || twitter_screen_name || name;

    return (
        <$UserInfo>
            <UserInfoCore
                profile_image_url={profile_image_url}
                userName={userName}
            />
            <PostDay
                timestamp={timestamp}
            />
        </$UserInfo>
    );
};

