import React, { Component } from "react";
import PropTypes from "prop-types";

import ColGroup from "./ColGroup";
import "./table.less";

export default class BasicTable extends Component {
  static propTypes = {
    // prop: PropTypes
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
    const { dataSource, columns } = this.props;

    return dataSource.map(item => {
      return (
        <tr key={item.key}>
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
    const { columns } = this.props;

    return (
      <table className={"smart-table"}>
        <ColGroup columns={columns} />
        <thead className="smart-table-thead">{this.renderThead()}</thead>
        <tbody className="smart-table-tbody">{this.renderTbody()}</tbody>
      </table>
    );
  }
}
