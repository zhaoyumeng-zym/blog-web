import React from "react";
import elemewaimai from "../../../assert/img/elemewaimai.jpg";
import '../style/style.css'

const redPacket = () => {

    return (
            <div className={'photos'}
                 style={{
                     backgroundImage: 'url(' + elemewaimai + ')',
                     height: window.innerHeight
                 }}>
            </div>
    );
}

export default redPacket;