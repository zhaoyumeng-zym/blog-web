import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import App from './App';
import "antd/dist/antd.css";   //组件导入

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
);

