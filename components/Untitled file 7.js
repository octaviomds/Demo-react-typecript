import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  Text,
} from 'react-native';
import {
  GiftedChat,
  Composer,
  InputToolbar,
  Send,
  Bubble,
} from 'react-native-gifted-chat';
import FeatherIcon from '@expo/vector-icons/Feather';

const users = [
  { _id: 1, name: 'Me' },
  { _id: 2, name: 'Nick Miller' },
];
const items = [
  {
    _id: 8,
    text: 'Looking forward to our collaboration!',
    createdAt: new Date(),
    user: users[1],
  },
  {
    _id: 7,
    text: 'Absolutely!',
    createdAt: new Date(),
    user: users[1],
  },
  {
    _id: 5,
    text: 'I\'m particularly interested in frontend development and UX design.',
    createdAt: new Date(),
    user: users[0],
  },
  {
    _id: 4,
    text: 'Thanks, Nick!',
    createdAt: new Date(),
    user: users[0],
  },
  {
    _id: 3,
    text: 'I\'ve heard great things about your skills. Any specific areas you\'re interested in?',
    createdAt: new Date(),
    user: users[1],
  },
  {
    _id: 2,
    text: 'Nice to meet you!',
    createdAt: new Date(),
    user: users[1],
  },
  {
    _id: 1,
    text: 'Hey, thanks for inviting me!',
    createdAt: new Date(),
    user: users[0],
  },
];

export default function Example() {
  const [messages, setMessages] = useState(items);

  const onSend = useCallback((msgs = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, msgs));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.chatHeader}>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}>
          <FeatherIcon
            color="#1d1d1d"
            name="chevron-left"
            size={24} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}
          style={styles.chatHeaderProfile}>
          <Image
            alt="Avatar for Nick Miller"
            style={styles.chatHeaderAvatar}
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
            }} />

          <View style={styles.chatHeaderBody}>
            <Text style={styles.chatHeaderTitle}>Nick Miller</Text>

            <Text style={styles.chatHeaderSubtitle}>last seen 2m ago</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}>
          <FeatherIcon
            color="#1d1d1d"
            name="more-vertical"
            size={24} />
        </TouchableOpacity>
      </View>
      <GiftedChat
        listViewProps={{
          style: {
            backgroundColor: '#fff',
          },
        }}
        renderInputToolbar={props => (
          <InputToolbar {...props} containerStyle={styles.chatInputToolbar} />
        )}
        renderActions={() => (
          <TouchableOpacity style={[styles.chatActionWrapper, { left: 4 }]}>
            <View style={styles.chatAction}>
              <FeatherIcon name="camera" size={17} color="#6D6D6D" />
            </View>
          </TouchableOpacity>
        )}
        renderComposer={props => (
          <Composer
            {...props}
            placeholderTextColor="#B0ACB3"
            textInputStyle={styles.chatComposer}
          />
        )}
        renderSend={props => (
          <View style={[styles.chatActionWrapper, { right: 6 }]}>
            <Send
              {...props}
              disabled={!props.text}
              containerStyle={styles.chatSend}>
              <FeatherIcon name="send" size={16} color="#fff" />
            </Send>
          </View>
        )}
        renderBubble={props => (
          <Bubble
            {...props}
            wrapperStyle={{
              left: styles.chatBubble,
              right: { ...styles.chatBubble, backgroundColor: '#266EF1' },
            }}
          />
        )}
        renderTime={() => null}
        renderAvatar={null}
        alwaysShowSend
        minInputToolbarHeight={60}
        minComposerHeight={44}
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chatHeader: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  chatHeaderProfile: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatHeaderAvatar: {
    width: 36,
    height: 36,
    borderRadius: 9999,
    marginLeft: 6,
  },
  chatHeaderBody: {
    marginLeft: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  chatHeaderTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1d1d1d',
  },
  chatHeaderSubtitle: {
    fontSize: 13,
    color: '#9c9c9c',
    marginTop: 2,
  },
  chatInputToolbar: {
    borderTopWidth: 0,
  },
  chatActionWrapper: {
    zIndex: 1,
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatAction: {
    backgroundColor: '#ebe9ec',
    width: 34,
    height: 34,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatComposer: {
    color: '#1d1d1d',
    backgroundColor: '#fbfbfb',
    borderWidth: 1,
    borderColor: '#ebebeb',
    borderRadius: 9999,
    paddingTop: 14,
    paddingLeft: 48,
    marginRight: 12,
    width: '100%',
  },
  chatSend: {
    backgroundColor: '#266EF1',
    width: 34,
    height: 34,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatBubble: {
    paddingVertical: 4,
    paddingHorizontal: 2,
    borderRadius: 16,
  },
});