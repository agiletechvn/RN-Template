import React from 'react';
import Input from './Input';
import Item from './Item';
import Select from './Select';
import DatePicker from './DatePicker'

import Form from 'rc-field-form';
import { View } from 'react-native';

const CustomForm = props => {
  return <Form component={View} {...props} />;
};

export { Input, Item, Select, DatePicker };

export default CustomForm;
