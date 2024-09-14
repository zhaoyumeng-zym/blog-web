import React from "react";
import learnLink from '../../../assert/img/learnLink.jpg'
import '../style/style.css'

const LearnLink = () => {

    return (
        <div className={'photos'}
             style={{
                 backgroundImage: 'url(' + learnLink + ')',
                 height: window.innerHeight
             }}>
        </div>
    );
}

export default LearnLink;
