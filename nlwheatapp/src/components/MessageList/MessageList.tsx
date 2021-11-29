import React from 'react';
import { Message } from '../Message';

import {
  ScrollView,
  View
} from 'react-native';

const message = {
  id: '1',
  text: 'mensagem de teste',
  user: {
    name: 'luisotaviodesimone',
    avatar_url: 'https://github.com/luisotaviodesimone.png'
  }
}

import { styles } from './styles';

export function MessageList(){
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} keyboardShouldPersistTaps="never">
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}