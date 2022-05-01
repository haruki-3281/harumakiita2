import React from "react";
import $UserIcon from "./style";

type typeProps = {
    hover:boolean;
    profile_image_url:string;
};

export default function UserIcon(props:typeProps){
    const { hover,profile_image_url } = props;

    return (
        <$UserIcon hover={hover}>
            <img src={profile_image_url} alt="" />
            <div className="cover" />
        </$UserIcon>
    );
};