import React from "react";
import { View, Text } from 'react-native';
import { Header } from "../../components/Header";
import { SendMessageForm } from "../../components/SendMessageForm";
import { MessageList } from "../../components/MessageList";
import { SignInBox } from "../../components/SignInBox";
import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";

export function Home() {
  const {user} = useAuth();

  return (
    <View style={styles.container}>
      <Header />
      <MessageList />
      {/* <SignInBox /> */}
      {user ? <SendMessageForm /> : <SignInBox />}
    </View>
  )
}