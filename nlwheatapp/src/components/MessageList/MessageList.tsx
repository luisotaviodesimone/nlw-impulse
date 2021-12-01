import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { ScrollView, View } from 'react-native';
import { Message } from '../Message';
import { MessageProps } from '../Message/Message';
import { api } from '../../services/api';

export function MessageList() {
  const [currenteMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const messagesResponse = await api.get('/messages/last3');
      setCurrentMessages(messagesResponse.data);
    }
    fetchMessages();
  }), [];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currenteMessages.map((message) => <Message key={message.id} data={message} />)}
    </ScrollView>
  );
}
