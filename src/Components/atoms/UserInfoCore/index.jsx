import React,{ useState } from "react";
import { $UserInfoCore } from "./style";
import UserIcon from "../UserIcon";

export default function UserInfoCore(props){
    const [hover,setHover] = useState(false);

    return (
        <$UserInfoCore
            hover={hover}
            onMouseOver={()=>setHover(true)}
            onMouseOut ={()=>setHover(false)}
        >
            <UserIcon 
                profile_image_url={props.profile_image_url}
                hover={hover}
            />
            <p className="userName">@{props.userName}</p>
        </$UserInfoCore>
    );
};