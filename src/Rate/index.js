/**
 * Created by Min on 2016-10-16.
 */
import React from 'react';
import './index.css';
import './font.css'

var Rate=React.createClass({
    //初始化State
    getInitialState(){
        return {
            //当前Rate的值
            value: this.props.value,
            //星星的数组
            nodes: []
        }
    },
    //组件被渲染前
    componentWillMount: function () {
        //设置State星星的数组
        this.setState({
            nodes: this.flashStar(this.props.value)
        });
    },
    //渲染
    render: function () {
        return (
            <div className="rate">
                {this.state.nodes}
            </div>
        );
    },
    //处理点击事情
    handleClick: function (id) {
        this.setState({
            nodes: this.flashStar(id + 1),
            value: id + 1
        });
    },
    //处理鼠标进入的Enter事件
    handleMouseEnter: function (id) {
        this.setState({
            nodes: this.flashStar(id + 1)
        });
    },
    //处理鼠标的离开Leave事件
    handleMouseLeave: function () {
        this.setState({
            nodes: this.flashStar(this.state.value)
        });
    },
    //刷新重组星星
    flashStar: function (value) {
        var thisNodes=[];
        var that=this;
        //循环count次
        for (var i=0; i < this.props.count; i++) {
            //当i小于value时，则为选中状态
            if (i < value) {
                thisNodes.push({id: i, selected: true});
            }
            else {
                thisNodes.push({id: i, selected: false});
            }
        }
        //将上对象循环处理为Star虚拟DOM
        thisNodes=thisNodes.map(function (o) {
            return (
                <Star key={o.id} id={o.id} selected={o.selected} click={(id)=>that.handleClick(o.id)}
                      mouseEnter={(id)=>that.handleMouseEnter(o.id)} mouseLeave={that.handleMouseLeave}/>
            )
        });
        return thisNodes;
    }

});
var Star=React.createClass({
    render: function () {
        //每次state改变后Star将会重新渲染
        var clazz=this.props.selected ? 'iconfont star selected' : 'iconfont star';

        return (
            <i className={clazz}
               key={this.props.id}
               onClick={this.props.click}
               onMouseEnter={this.props.mouseEnter}
               onMouseLeave={this.props.mouseLeave}>&#xe617;</i>
        )
    }
});

module.exports=Rate;


