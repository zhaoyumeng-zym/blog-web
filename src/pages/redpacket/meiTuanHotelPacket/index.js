import React from "react";
import meituanhotel from "../../../assert/img/meituanhotel.jpg";
import '../style/style.css'

const redPacket = () => {

    return (
        <div className={'photos'}
             style={{
                 backgroundImage: 'url(' + meituanhotel + ')',
                 height: window.innerHeight
             }}>
        </div>
    );
}

export default redPacket;