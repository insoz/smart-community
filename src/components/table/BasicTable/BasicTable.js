import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Pagination } from "antd";

import ColGroup from "./ColGroup";
import "./table.less";

export default class BasicTable extends Component {
  static propTypes = {
    dataSource: PropTypes.array,
    columns: PropTypes.array,
    className: PropTypes.string,
    bordered: PropTypes.bool
  };
  static defaultProps = {
    bordered: false,
    columns: [],
    dataSource: []
  };

  renderThead = () => {
    const { columns } = this.props;

    return (
      <tr>
        {columns.map(item => {
          return <th key={item.key || item.dataIndex}>{item.title}</th>;
        })}
      </tr>
    );
  };

  renderTbody = () => {
    const { dataSource, columns, rowKey } = this.props;

    return dataSource.map(item => {
      return (
        <tr key={item.key || item[rowKey]}>
          {columns.map(_item => {
            return (
              <td key={_item.key || _item.dataIndex}>
                {item[_item.dataIndex]}
              </td>
            );
          })}
        </tr>
      );
    });
  };

  render() {
    const { columns, bordered, className, style, pagination } = this.props;

    const cls = classNames("smart-table", {
      "smart-table-bordered": bordered ? true : false,
      [className]: className ? true : false
    });

    return (
      <div className="smart-table-container">
        <table style={style} className={cls}>
          <ColGroup columns={columns} />
          <thead className="smart-table-thead">{this.renderThead()}</thead>
          <tbody className="smart-table-tbody">{this.renderTbody()}</tbody>
        </table>
        {pagination && <Pagination className="pagination" {...pagination} />}
      </div>
    );
  }
}
