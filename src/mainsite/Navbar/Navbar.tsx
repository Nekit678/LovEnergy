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

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Моя страница', '/app/profile', <UserOutlined />),
    getItem('Новости', '/app/news', <CalendarOutlined />),
    getItem('Сообщения', '/app/messages', <MessageOutlined />),
    getItem('Друзья', '/app/friends', <TeamOutlined />),
    getItem('Музыка', '/app/music', <PlayCircleOutlined />)];


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
                style={{ background: "#25292C" }}
                onClick={(event)=>(navigate(event.key))}
            />
        </div>
    )
}

export default Navbar