import Header from './mainsite/Header/Header';
import Navbar from './mainsite/Navbar/Navbar';
import Profile from './mainsite/Profile/Profile';
import { Navigate, Route, Routes } from "react-router-dom"

function MainApp() {
    return (
        <div className='flex flex-col min-h-screen' style={{ background: "#25292C" }}>

            {/* Header */}
            <div className='basis-full shadow-lg shadow-slate-800' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <Header></Header>
            </div>

            {/* Page */}
            <div className='flex flex-grow gap-10 mt-5'>

                {/* Navbar */}
                <div className='' style={{ background: "#25292C" }}>
                    <div className='sm:ml-32'>
                        <Navbar></Navbar>
                    </div>
                </div>

                {/* Content */}
                <div className=' bg-orange-300 basis-full' style={{ background: "#25292C" }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/app/profile"></Navigate>} />
                        <Route path='/profile' element={<Profile />} />
                    </Routes>
                </div>
            </div>

            {/* Footer */}
            <div className='basis-full bg-blue-500'>Footer</div>

        </div>
    )
}

export default MainApp