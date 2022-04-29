import React, { useState, useEffect } from "react";
import { $UserInfo } from "./style";
import PostDay from "../../atoms/PostDay";
import UserInfoCore from "../../atoms/UserInfoCore";

export default function UserInfo(props) {
    const user = props.user;
    const userName = user.github_login_name || user.twitter_screen_name || user.name;

    return (
        <$UserInfo>
            <UserInfoCore
                profile_image_url={user.profile_image_url}
                userName={userName}
            />
            <PostDay
                timestamp={props.timestamp}
            />
        </$UserInfo>
    );
};

