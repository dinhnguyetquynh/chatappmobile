import React from 'react';
import {View, TextInput, Button} from 'react-native';

const Login = () => {
  return (
    <View>
      <TextInput placeholder="nhap email" />
      <TextInput placeholder="nhap password" />
      <Button title="Đăng nhập" color="#f194ff" />
    </View>
  );
};
export default Login;
