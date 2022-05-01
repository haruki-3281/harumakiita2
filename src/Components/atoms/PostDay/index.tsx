import React from "react";
import $PostDay from "./style";

type typeProps = {
    timestamp: string;
};

export default function PostDay(props: typeProps){
    const { timestamp } = props;
    const pattern = /([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})/;
    const match = timestamp.match( pattern );

    const [ ,year,month,day ] = match != null ? match : [ "","2022","04","29" ];
    
    return(
        <$PostDay>
            {`が${year}年${month}月${day}日に投稿`}
        </$PostDay>
    );
};