import { Avatar, Badge, Dropdown, Typography } from "antd";
import logoForm from '../../assets/images/logo512.png'
import { BellOutlined } from '@ant-design/icons';
import { SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import React from "react";

const { Title } = Typography;

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item (disabled)
            </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        key: '4',
        danger: true,
        label: 'a danger item',
    },
];

const Header = React.memo((props) => {
    return (
        <div className="flex justify-around" style={{ background: "#4B5563" }}>

            {/* Лого */}
            <div className='flex items-center'>
                <img src={logoForm} className='w-12'></img>
                <Title level={3} type='secondary' className='mt-2 ml-3'>LoveEnergy</Title>
            </div>

            {/* Оповещалка */}
            <Dropdown trigger={["click"]} menu={{ items }} className="cursor-pointer h-10 rounded-2xl transition duration-300 hover:bg-slate-400">
                <div>
                    <BellOutlined className="mt-1 text-2xl text-gray-200 " />
                    <Badge count={5} size="small" className="mb-4 -ml-2">
                    </Badge>
                </div>
            </Dropdown>

            {/* Менюшка */}
            <Dropdown trigger={["click"]} menu={{ items }} className="flex cursor-pointer mt-2 rounded-2xl transition duration-300 hover:bg-slate-400">
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