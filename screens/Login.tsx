import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

const Login: React.FC<NativeStackScreenProps<any>> = ({navigation}) => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  const handleClick = () => {
    console.log({mail});
    console.log({pass});
    navigation.navigate('Home');
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
