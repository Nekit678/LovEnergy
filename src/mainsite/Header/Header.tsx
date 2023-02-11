import { Avatar, Badge, Dropdown, Typography } from "antd";
import logoForm from '../../assets/images/logo512.png'
import { BellOutlined } from '@ant-design/icons';
import React, { useEffect } from "react";
import { useLogoutMutation } from "../../redux/backend/api";
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;


const DropDownUser = ({ logout }: { logout: () => (Promise<void>) }) => {
    return (
        <div className="w-36 h-fit bg-gray-400 rounded-xl shadow-lg">
            <div className="flex flex-col gap-1 items-center">
                <button className="bg-gray-300 mt-1 w-3/4 hover:scale-110 active:scale-100 hover:bg-zinc-500 h-8 rounded-xl ">Something</button>
                <button onClick={() => (logout())} className="bg-red-600 mt-1 mb-1 w-3/4 hover:scale-110 active:scale-100 hover:bg-red-700 h-8 rounded-xl text-gray-300 font-bold">Выйти</button>
            </div>
        </div>
    )
}

const DropDownNotify = () => {
    return (<div>
edfafdgafdg
    </div>)
}

const Header = React.memo(() => {
    const [logReq, log] = useLogoutMutation()
    const navigate = useNavigate()

    useEffect(() => {

        if (log.isSuccess && log.data.error.error_code === 0) {
            navigate("/login")
        }

    }, [log.isSuccess])

    const logout = async () => {
        await logReq(null)
    }

    return (
        <div className="flex justify-around" style={{ background: "#4B5563" }}>

            {/* Лого */}
            <div className='flex items-center'>
                <img src={logoForm} className='w-12'></img>
                <Title level={3} type='secondary' className='mt-2 ml-3'>LoveEnergy</Title>
            </div>

            {/* Оповещалка */}
            <Dropdown placement="bottom" trigger={["click"]} dropdownRender={()=>(<DropDownNotify/>)} className="cursor-pointer h-10 rounded-2xl transition duration-300 hover:bg-slate-400">
                <div>
                    <BellOutlined className="mt-1 text-2xl text-gray-200 " />
                    <Badge count={5} size="small" className="mb-4 -ml-2">
                    </Badge>
                </div>
            </Dropdown>

            {/* Менюшка */}
            <Dropdown placement="bottom" trigger={["click"]} dropdownRender={() => (<DropDownUser logout={logout} />)} className="flex cursor-pointer mt-2 rounded-2xl transition duration-300 hover:bg-slate-400">
                <div className="flex gap-2 m-2">
                    <Title level={5} type='secondary' className=''>JustLena</Title>
                    <Avatar size={35} className="" src={<img src="https://i.pinimg.com/originals/95/76/72/95767226c54f7659f0ac6738117c408c.jpg"></img>}></Avatar>
                </div>
            </Dropdown>
        </div>
    );
})
// overlayClassName="w-10" dropdownRender={(menu)=>(<Header/>)}
export default Header