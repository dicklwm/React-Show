import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rate from './Rate/index.js';
import Button from './Button/index.js';
import Input from './Input/index.js';
import Table from './Table/index.js';

const dataSource=[
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        },
        {
            key: '3',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park'
        },
        {
            key: '4',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park'
        },
        {
            key: '5',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park'
        },
        {
            key: '6',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        },
        {
            key: '7',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        },
        {
            key: '8',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park'
        },
        {
            key: '9',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park'
        },
        {
            key: '10',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park'
        },
        {
            key: '11',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        },
        {
            key: '12',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        },
        {
            key: '13',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park'
        },
        {
            key: '14',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park'
        }
    ];


const columns=[
    {
        title: '#',
        dataIndex: 'key',
        key: 'key'
    },
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address'
    }
];

var Index=React.createClass({

    getInitialState: function () {
        return {
            loading: true,
            OtherLoading: false,
            currentPage:1,
            total:10
        }
    },
    render: function () {
        return (
            <div>
                <Rate count="8" value="6"/>
                <br/>
                <br/>
                <Button htmlType="button" type="primary" size="large" icon="search">变大</Button>
                <Button htmlType="button" type="ghost" icon="search">Ghost</Button>
                <Button htmlType="button" type="dashed" icon="search">虚线</Button>
                <Button htmlType="button" type="ghost" size="large" icon="cog">设置</Button>
                <Button htmlType="button" type="ghost" size="small" icon="home">首页</Button>

                <br/>
                <Button htmlType="button" type="ghost" loading={this.state.loading}
                        onClick={this.handleOnClick}>
                    {this.state.loading ? '取消Loading' : '点击Loading'}
                </Button>

                <Button htmlType="button" type="primary" loading={this.state.OtherLoading}
                        onClick={this.handleOtherOnClick}>
                    {this.state.OtherLoading ? '取消Loading' : '点击Loading'}
                </Button>

                <br/>
                <br/>
                <Input id="test"
                       type="text"
                       placeholder="GG"
                       size="large"
                       label="我是变大的"
                       defaultValue="我是默认值，可以按回车"
                       onChange={function() {
                         console.log('我发生变化了');
                       }}
                       onEnter={function(e) {
                       alert(e.target.value);
                        }}
                />
                <br/>
                <Input id="pass"
                       type="password"
                       placeholder="请输入密码"
                       label="密码："
                       onChange={function() {
                         console.log('我发生变化了');
                       }}
                       onEnter={function(e) {
                       alert(e.target.value);
                        }}
                />

                <br/>
                <br/>
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    currentPage={this.state.currentPage}
                    total={this.state.total}
                    onRowClick={
                    function(obj) {
                  console.log(obj);
                }}
                    onPageClick={this.handleOnPageChange}
                />


            </div>
        )
    },

    handleOnPageChange: function (e) {
        this.setState({
            currentPage:e
        });
    },

    handleOnClick: function () {
        this.setState({
            loading: this.state.loading ? false : true
        });
    },
    handleOtherOnClick: function () {
        this.setState({
            OtherLoading: this.state.OtherLoading ? false : true
        });

    }
});

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);
