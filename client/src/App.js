import React, {useEffect} from 'react'
import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Divider, Table } from 'antd';
import { useState } from 'react';

import SearchBar from './components/search';
import './App.css'
import loader from './giphy.gif'
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  //getItem('Files', '9', <FileOutlined />),
];

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [defaultValue, setDefaultValue] = useState("Match 1")
  const [matchData, setMatchData] = useState()

  useEffect(() => {
    
    handleChange()
    
  }, [])
  
  const handleChange = (value) => {
    const id = defaultValue.substring(6)
    console.log(id);
    fetch(`http://localhost:9500/getMatchStats?matchId=${value ? value : id}`)
    .then((res) => res.json())
    .then((json) => {
      setMatchData(json[0])
      console.log(json[0].stats);
    })
  }
  
  // const fetchData = () => {
  //   let arr = []
  //   let obj = {}
  //   fetch(`http://localhost:9500/getMatchStats?matchId=${defaultValue}`)
  //   .then((res) => res.json())
  //   .then((json) => {
  //     for (let i = 0; i < json.length; i++) {
  //       obj = {value: json[i].title, label: json[i].title}
  //       arr.push(obj)
  //       setTitleArray(arr)
  //     } 
  //     console.log(json);
  //   })
  // }

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{minHeight: '100vh'}}>
      
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer}} />
        <Content style={{ margin: '0 16px'}}>
          <Breadcrumb style={{ margin: '16px 0'}}>
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
              <SearchBar handleChange={handleChange} defaultValue={defaultValue}/>
            </div>
            
          </Breadcrumb>
          
          <div style={{ padding: 24, minHeight: 430, background: colorBgContainer}}>
            {matchData ? 
            <table>
              <tr>
                <th>Date</th>
                <th colSpan="2">{matchData.date}</th>
              </tr>
              <tr>
                <td></td>
                <td>Team 1</td>
                <td>Team 2</td>
              </tr>
              <tr>
                <td style={{fontWeight: 600}}>Goals</td>
                <td>{matchData.stats.teamA.goals}</td>
                <td>{matchData.stats.teamB.goals}</td>
              </tr>
              <tr>
                <td style={{fontWeight: 600}}>Possession</td>
                <td>{matchData.stats.teamA.possession}</td>
                <td>{matchData.stats.teamB.possession}</td>
              </tr>
              <tr>
                <td style={{fontWeight: 600}}>Total Passes</td>
                <td>{matchData.stats.teamA.passes}</td>
                <td>{matchData.stats.teamB.passes}</td>
              </tr>
              <tr>
                <td style={{fontWeight: 600}}>Shots</td>
                <td>{matchData.stats.teamA.shots}</td>
                <td>{matchData.stats.teamB.shots}</td>
              </tr>
              <tr>
                <td style={{fontWeight: 600}}>Shots on target</td>
                <td>{matchData.stats.teamA.shotsOnTarget}</td>
                <td>{matchData.stats.teamB.shotsOnTarget}</td>
              </tr>
              <tr>
                <td style={{fontWeight: 600}}>Corners</td>
                <td>{matchData.stats.teamA.corners}</td>
                <td>{matchData.stats.teamB.corners}</td>
              </tr>
            </table>
            : <img src={loader} alt="loading..." style={{height: 220, marginTop: 30, marginLeft: '40%'}}/>
          }
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App

{/* <Header style={{ display: 'flex', alignItems: 'center'}}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header> */}