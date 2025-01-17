import {
  DatabaseOutlined,
  FolderAddOutlined,
  LaptopOutlined,
  NotificationOutlined,
  SyncOutlined,
  UserOutlined
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Layout, Menu, theme} from 'antd';
import React from 'react';
import ServersTable from "./components/ServersTable.tsx";

const {Header, Content, Sider} = Layout;

const items1: MenuProps['items'] = [
  {
    key: 'servers',
    label: 'Servers',
  },
  {
    key: 'connections',
    label: 'Connections',
  }
];

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
          children: [
            {
              key: "fuck",
              label: 'fuck label'
            }
          ]
        };
      }),
    };
  },
);

const App: React.FC = () => {
  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();

  return (
    <Layout className="h-[100vh]">
      <Header className="flex justify-center pl-0">
        <div className="text-white font-bold w-[224px] text-center">
          Web Shell
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{flex: 1, minWidth: 0}}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{background: colorBgContainer}}>
          <div className="font-bold w-[224px] text-center">
            <SyncOutlined/>
            <FolderAddOutlined/>
            <DatabaseOutlined/>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{height: '100%', borderRight: 0}}
            items={items2}
          />
        </Sider>
        <Layout style={{padding: '0 24px 24px'}}>
          <Content
            style={{
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <ServersTable/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;