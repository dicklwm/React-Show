/**
 * Created by Min on 2016-10-25.
 */
import React from 'react';
import './index.css';

var Table=React.createClass({

    propTypes: {
        dataSource: React.PropTypes.array,
        columns: React.PropTypes.array,
        page: React.PropTypes.bool,
        currentPage: React.PropTypes.number,
        total: React.PropTypes.number,
        onPageClick: React.PropTypes.func
    },
    getDefaultProps: function () {
        return {
            page: true,
            currentPage: 2,
            total: 10
        }
    },

    render: function () {
        var that=this,
            allDataIndex=[],
            allHead=[],
            allContent=[],
            page=null;

        if (this.props.page) {
            var pageLi=[];
            //向上取整页数
            for (var i=0; i < Math.ceil(this.props.dataSource.length / this.props.total); i++) {
                var pageLiClass='pagination-item ' + (this.props.currentPage===i + 1 ? 'pagination-item-active' : '');
                pageLi.push(
                    <li
                        key={i}
                        className={pageLiClass}
                        onClick={this.props.onPageClick.bind(null,i+1)}
                    >
                        <a>{i + 1}</a>
                    </li>
                )
            }
            page=(
                <ul className="pagination table-pagination">
                    {pageLi}
                </ul>
            )
        }

        allHead=this.props.columns.map(function (v) {
            allDataIndex.push(v.dataIndex);
            return (
                <th key={v.key}>
                    {v.title}
                </th>
            );
        });

        for (var j=0; j < this.props.total; j++) {
            //位置
            var pos=j + that.props.total * (that.props.currentPage - 1),
                td=[];
            //当位置大于所有的数据长度，直接中止
            if (pos >= this.props.dataSource.length)break;

            //根据dataIndex循环获得对应的td
            for (var k=0; k < allDataIndex.length; k++) {
                //在DataIndex中找到对应的key添加td
                td.push(
                    <td key={'td-'+j+'-'+k}>
                        {that.props.dataSource[pos][allDataIndex[k]]}
                    </td>
                );
            }
            //var td=allDataIndex.map(function (value, index) {
            //    return (
            //        <td key={'td-'+j+'-'+index}>
            //            {that.props.dataSource[pos][value]}
            //        </td>
            //    )
            //});
            allContent.push(
                <tr key={this.props.dataSource[pos].key}
                    onClick={(e)=>that.props.onRowClick()}>
                    {td}
                </tr>
            );
        }

        //allContent=this.props.dataSource.map(function (v, i) {
        //    var td=allDataIndex.map(function (value, index) {
        //        return <td key={'td-'+i+'-'+index}>{v[value]}</td>
        //    });
        //    return (
        //        <tr key={v.key} onClick={(e)=>that.props.onRowClick(v)}>
        //            {td}
        //        </tr>
        //    )
        //});
        return (
            <div className="table-body">
                <table className="table">
                    <thead className="table-thead">
                    <tr>
                        {allHead}
                    </tr>
                    </thead>
                    <tbody className="table-tbody">
                    {allContent}
                    </tbody>

                </table>
                {page}
            </div>
        )
    }

});

module.exports=Table;