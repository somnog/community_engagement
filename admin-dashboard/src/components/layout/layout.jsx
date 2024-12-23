import React, { useState } from 'react';
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

import { DownOutlined, SettingOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [


  {
    key: '4',
    label: 'Profile',
    icon: <SettingOutlined />,
    extra: '⌘P',
  },
  {
    key: '5',
    label: 'Logout',
    icon: <LogoutOutlined />,
    extra: '⌘L',
  },
];

const MyLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{height:"100vh"}}>
      <Sider style={{ background: '#fff' }}  trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
    {!collapsed &&
<div style={{display:"flex",justifyContent:"center",margin:"20px 0px"}}>

        <img src='/somnog.png' width="150px"/>
</div>
}
   
        <Menu

          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <Link to={'/Facilitators'}>Facilitators</Link>,
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <Link to={'/Tracks'}>Tracks</Link>,
            },
            // {
            //   key: '3',
            //   icon: <UserOutlined />,
            //   label: <Link to={'/Users'}>Users</Link>,
            // },
          ]}
        />
      </Sider>
      <Layout>
        <Header
        // theme="dark"
          style={{
            padding: 0,
            background: "#26A8E4",
         display:"flex",justifyContent:"space-between",alignItems:"center"
          }}
        >
          <Button
          
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              color:"white",
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />

        

    

<Dropdown

    menu={{
      items,
    }}
  >
    <Button style={{marginRight:"30px"}} type="dashed" size="" icon={<img width={"30px"} src='https://thumbs.dreamstime.com/b/vector-icon-user-avatar-web-site-mobile-app-man-face-flat-style-social-network-profile-45836554.jpg'/>}>
          Hassan@gmail.com
        </Button>
 
  </Dropdown>




        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MyLayout;