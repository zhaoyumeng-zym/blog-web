import React from "react";
import meituanwaimai from '../../../assert/img/meituanwaimai.jpg'
import '../style/style.css'

const MeiTuanPacket = () => {

    return (
        <div className={'photos'}
             style={{
                 backgroundImage: 'url(' + meituanwaimai + ')',
                 height: window.innerHeight
             }}>
        </div>
    );
}

export default MeiTuanPacket;
