import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form } from "antd";

import componentMap from "../../componentMap";
import styles from "./index.less";

const FormItem = Form.Item;

class SearchPanel extends Component {
  static propTypes = {
    form: PropTypes.object,
    dataSource: PropTypes.array
  };

  renderFormItem = () => {
    const { dataSource, form } = this.props;
    return dataSource.map(item => {
      const { component, field, options, componentProps, ...rest } = item;
      const Comp = componentMap[component];
      return (
        <FormItem key={field} {...rest}>
          {form.getFieldDecorator(field, options)(<Comp {...componentProps} />)}
        </FormItem>
      );
    });
  };

  render() {
    return (
      <Form
        layout="inline"
        className={styles["form-search"]}
        style={{ padding: "25px 0" }}
      >
        {this.renderFormItem()}
      </Form>
    );
  }
}

export default Form.create()(SearchPanel);
