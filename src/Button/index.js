/**
 * Created by Min on 2016-10-23.
 */
import React from 'react';
import './index.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

var Button=React.createClass({

    propTypes: {
        type: React.PropTypes.oneOf(['primary', 'default', 'ghost', 'dashed']),
        size: React.PropTypes.oneOf(['large', 'default', 'small']),
        htmlType: React.PropTypes.oneOf(['submit', 'button', 'reset']),
        onClick: React.PropTypes.func,
        loading: React.PropTypes.bool,
        icon: React.PropTypes.string
    },

    getDefaultProps: function () {
        return {
            size: 'default',
            onClick: function () {
            },
            htmlType: 'button',
            type: 'default',
            loading: false
        }
    },

    render: function () {

        var clazz='btn ';
        var this_iconClass='';
        if (this.props.type)
            clazz+='btn-' + this.props.type + ' ';
        if (this.props.size)
            clazz+='btn-' + this.props.size + ' ';
        if (this.props.icon) {
            clazz+='btn-' + this.props.icon + ' ';
            this_iconClass='fa fa-' + this.props.icon + ' ';
        }
        if (this.props.disabled) {
            clazz+='disabled ';
        }
        if (this.props.loading) {
            clazz+='loading';
        }

        return (
            <button type={this.props.htmlType} className={clazz} onClick={this.props.onClick}
                    disabled={this.props.disabled}>
                <i className={this_iconClass + (this.props.loading?'fa fa-spinner fa-spin':'')}> </i>
                <span>{this.props.children}</span>
            </button>
        )
    }
});

module.exports=Button;