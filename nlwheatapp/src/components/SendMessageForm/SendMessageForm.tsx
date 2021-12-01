import React, { useState } from 'react';

import { Alert, Keyboard, TextInput, View } from 'react-native';
import { User } from '../../hooks/auth';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [isSendingMessage, setIsSendingMessage] = useState(false);


  const handleMessageSubmit = async () => {
    const messageFormatted = message.trim();
    setIsSendingMessage(true);
    
    if(messageFormatted.length > 0) {
      await api.post('/messages', { message: messageFormatted }) 
      setMessage('');
      Keyboard.dismiss();
      Alert.alert('Mensagem enviada com sucesso!');
      
    }else {
      Alert.alert('Escreva a mensagem para enviar.')
    }

    setIsSendingMessage(false);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        value={message}
        onChangeText={setMessage}
        // editable={!isSendingMessage}
        />
      <Button
        title="enviar mensagem"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        onPress={handleMessageSubmit}
        // isLoading={isSendingMessage}
      />
    </View>
  );
}
