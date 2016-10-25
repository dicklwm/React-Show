/**
 * Created by Min on 2016-10-25.
 */
import React from 'react';
import './index.css';

var Input=React.createClass({

    propTypes: {
        id: React.PropTypes.string,
        type: React.PropTypes.string,
        size: React.PropTypes.oneOf(['large', 'default', 'small']),
        placeholder: React.PropTypes.string,
        onEnter: React.PropTypes.func,
        label: React.PropTypes.string,
        onChange:React.PropTypes.func
    },

    getDefaultProps: function () {
        return {
            type: 'text',
            size: 'default',
            needEnter: true,
            needLabel: false
        }
    },

    render: function () {

        var label,
            clazz;
        if (this.props.label && this.props.id) {
            label=<label htmlFor={this.props.id}>{this.props.label}</label>
        }
        clazz='input ' + (this.props.size!=='default' ? 'input-' + this.props.size : '');

        return (
            <div>
                {label}
                <input
                    id={this.props.id}
                    className={clazz}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    onKeyDown={this.handleOnEnter}
                    onChange={this.props.onChange}
                    defaultValue={this.props.defaultValue}
                />
            </div>
        )
    },
    handleOnEnter: function (e) {
        if (e.keyCode===13)
            this.props.onEnter(e);
    }


});

module.exports=Input;
