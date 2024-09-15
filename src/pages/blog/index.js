import React from 'react';
import Middle from "../middle";
import './style/style.css'
import { WechatOutlined, VerticalAlignTopOutlined} from '@ant-design/icons';
import { Popover, Space, Switch, BackTop} from 'antd';
import codeQR from '../../assert/img/codeQcPerson.jpg'
import logo from '../../assert/img/logo.png'

const body = document.querySelector('body')

const onChange = (checked) => {
    console.log(`switch to ${checked}`);
    if (!checked) {
        body.classList.add('dark')
    } else {
        body.classList.remove('dark')
    }
};


const content = (
    <div>
        <img src={codeQR} style={{width:'180px', height: '180px'}}></img>
    </div>
);

const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 20,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
};


const Blog = () => {
    return (
        <>

                <div className="header">
                    <Switch checkedChildren="Light" unCheckedChildren="Dark" defaultChecked onChange={onChange}/>
                    <div>
                        <img className={'logoPic'} src={logo}/>
                        <h1 style={{display: 'inline-block'}}><a href={'#'}>小熊杂货铺</a></h1>
                    </div>
                    <p>你身边的得力帮手</p>
                </div>

                <div className="middle">
                    <Middle/>
                </div>

                <div className="footer">
                    <Space>
                        {/*<QqOutlined />*/}
                        <Popover content={content}>
                            <WechatOutlined />
                        </Popover>
                    </Space>
                    <h3 className={'note'}>Designed by 小熊杂货铺</h3>
                </div>

                <BackTop>
                    <div style={style}><VerticalAlignTopOutlined/></div>
                </BackTop>

        </>
    );
}

export default Blog;