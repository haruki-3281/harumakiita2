import React from "react";
import { $UserIcon } from "./style";

export default function UserIcon(props){
    return (
        <$UserIcon hover={props.hover}>
            <img src={props.profile_image_url} />
            <div className="cover"></div>
        </$UserIcon>
    );
};