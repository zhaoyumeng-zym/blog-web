import React, {useState} from 'react';
import './style/style.css'
import { hyperlink } from '../config/index'
import redPacket from "../redpacket/meiTuanPacket";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};



const Middle = () => {

    return (
        <>
            {/*             <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>
                        <img src={img}/>
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>广 告 位 招 商</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img src={img}/>
                    </h3>
                </div>
            </Carousel>*/}

            <div className={'cardOne'}>
                {Object.keys(hyperlink).map((k) => ({...hyperlink[k]})).map((item) =>
                    <div>
                        <h2 className={'cardTitle'}>{item.title}</h2>
                        <div className={'cardTwo'}>
                            {item.jumpLink.map((step, idx) =>
                                <a className={'button'} href={step.linkWeb} target='_blank'>{step.linkCh}</ a>)}
                        </div>
                    </div>)}
            </div>
        </>
    );
}

export default Middle;






