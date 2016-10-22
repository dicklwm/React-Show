import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rate from './Rate/index.js';
import Button from './Button/index.js';

var Index=React.createClass({

    getInitialState: function () {
        return {
            loading: true,
            OtherLoading: false
        }
    },
    render: function () {
        return (
            <div>
                <Rate count="8" value="6"/>
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
            </div>
        )
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
