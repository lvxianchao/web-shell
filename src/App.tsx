import {CodeOutlined, DatabaseOutlined} from "@ant-design/icons";
import type {MenuProps} from 'antd';
import {Layout, Menu} from 'antd';
import React, {useState} from 'react';
import {Outlet, useNavigate} from "react-router";

const {Header} = Layout;

const items1: MenuProps['items'] = [
  {
    key: '/',
    label: 'Servers',
    icon: <DatabaseOutlined/>
  },
  {
    key: 'terminals',
    label: 'Terminals',
    icon: <CodeOutlined/>
  }
];

const App: React.FC = () => {
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['/']);
  const handleMenuOnClick = ({key}: { key: string }) => {
    setSelectedKeys([key]);
    navigate(key)
  }
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
          className="flex-1 min-w-0"
          onClick={handleMenuOnClick}
          selectedKeys={selectedKeys}
        />
      </Header>
      <Outlet/>
    </Layout>
  );
};

export default App;