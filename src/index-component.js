import AppComponent from './App';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "./components/login";
import Home from "./components/home";
import Header from "./components/header";
import { Layout } from 'antd';

const { Content } = Layout;

const IndexComponent = (props) => {
    return (
        <Layout className="layout">
            <Header {...props}/>
            <Content style={{ padding: '0 50px' }}>
                <AppComponent>  
                    <Routes>
                        <Route path="/login" element={Login} />
                        <Route path="/home" element={Home} />
                    </Routes>
                </AppComponent>
            </Content>
            {/* <Prompt when={true} message={(location) => {
                    if(location.pathname !== '/login')   
                        return  "message";
                }} 
            /> */}
        </Layout>
    );
}

export default IndexComponent;