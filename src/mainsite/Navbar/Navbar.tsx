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
    getItem('Моя страница', '1', <UserOutlined />),
    getItem('Новости', '2', <CalendarOutlined />),
    getItem('Сообщения', '3', <MessageOutlined />),
    getItem('Друзья', '4', <TeamOutlined />),
    getItem('Музыка', '5', <PlayCircleOutlined />)];


function Navbar() {
    const [collapsed, setCollapsed] = useState(false);

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
            />
        </div>
    )
}

export default Navbar