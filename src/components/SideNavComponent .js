import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

// declaring the submenu from ant design 
const { SubMenu } = Menu
export const SideNavComponent = () => {
    // the navbar component that needs to be render
    return (

        <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <SubMenu
                key="sub1"
                title={
                    <span>
                        <Icon type="appstore" />
                        <span><Link to="/dashboard">Dashboard</Link></span>
                    </span>
                }
            >

            </SubMenu>
            <SubMenu
                key="sub2"
                title={
                    <span>
                        <Icon type="appstore" />
                        <span><Link to="/field/data">Field Data</Link></span>
                    </span>
                }
            >

            </SubMenu>
            <SubMenu
                key="sub3"
                title={
                    <span>
                        <Icon type="appstore" />
                        <span>Observation for Week23</span>
                    </span>
                }
            >
                <Menu.Item key="1"><Link to="/map"> Map</Link> Visualization</Menu.Item>
                <Menu.Item key="2"><Link to="/barchart">Horizontal Bar Grap</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/pie/bar">Grouped Bar Grap</Link></Menu.Item>
            </SubMenu>
        </Menu>
    );
}
