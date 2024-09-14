import {Routes, Route} from 'react-router-dom';
import Blog from './pages/blog/index'
import MeiTuanPacket from './pages/redpacket/meiTuanPacket'
import MeiTuanHotelPacket from './pages/redpacket/meiTuanHotelPacket'
import ELeMePacket from './pages/redpacket/eLeMePacket'
import LearnLink from './pages/link/learnLink'
import Temp from './pages/temp/index'
import Test from './pages/middle/index'


export default function App() {
    return <>
        <div className="App">
            <Routes>
                <Route exact path='/' element={<Blog/>}/>
                <Route path='/meiTuanPacket' element={<MeiTuanPacket/>}/>
                <Route path='/meiTuanHotelPacket' element={<MeiTuanHotelPacket/>}/>
                <Route path='/eLeMePacket' element={<ELeMePacket/>}/>
                <Route path='/learnLink' element={<LearnLink/>}/>
            </Routes>
        </div>
    </>
}
