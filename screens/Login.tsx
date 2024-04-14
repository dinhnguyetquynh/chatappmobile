import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

const Login = () => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  const handleClick = () => {
    console.log({mail});
    console.log({pass});
  };
  return (
    <View>
      <TextInput
        placeholder="nhap email"
        onChangeText={newValue => setMail(newValue)}
        defaultValue={mail}
      />
      <TextInput
        placeholder="nhap password"
        onChangeText={newPass => setPass(newPass)}
        defaultValue={pass}
        secureTextEntry
      />
      <Button title="Đăng nhập" color="#f194ff" onPress={handleClick} />
    </View>
  );
};

export default Login;
