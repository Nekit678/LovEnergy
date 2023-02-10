import { useState } from 'react';
import {
    UserOutlined,
    CalendarOutlined,
    MessageOutlined,
    TeamOutlined,
    PlayCircleOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { useNavigate } from "react-router-dom"
import { NavBarCreateItem } from '../../models/compModels';

type MenuItem = Required<MenuProps>['items'][number];

const createItems = (items: NavBarCreateItem[]) => {
    return (
        items.map((item) => (item as MenuItem))
    )
}

const items = createItems(
    [{ label: 'Моя страница', key: '/app/profile', icon: <UserOutlined />, className: "hover:scale-110" },
    { label: 'Новости', key: '/app/news', icon: <CalendarOutlined />, className: "hover:scale-110" },
    { label: 'Сообщения', key: '/app/messages', icon: <MessageOutlined />, className: "hover:scale-110" },
    { label: 'Друзья', key: '/app/friends', icon: <TeamOutlined />, className: "hover:scale-110" },
    { label: 'Музыка', key: '/app/music', icon: <PlayCircleOutlined />, className: "hover:scale-110" },
    { label: 'Настройки', key: '/app/settings', icon: <PlayCircleOutlined />, className: "hover:scale-110" }]
)

// "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"


function Navbar() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div>
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
                className='hover:bg-gray-400'
                style={{ background: "#25292C" }}
                onClick={(event) => (navigate(event.key))}
            />
        </div>
    )
}

export default Navbar