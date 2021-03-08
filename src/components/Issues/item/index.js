import React from 'react';
import {View, Text} from 'react-native';
import {Card, Paragraph, Chip} from 'react-native-paper';
// import {Icon} from 'react-native-elements';

import styles from './styles';
import {Linking} from 'react-native';
import {toLower} from 'lodash';

export default (props) => {
  const {opened, tag, title, link, number, author, commentsCount} = props;
  return (
    <Card style={styles.container}>
      <View style={styles.cardHeaderView}>
        <Text>{`Opened: ${opened}`}</Text>
        <Chip style={styles.cardChip}>{toLower(tag)}</Chip>
      </View>
      <Card.Content>
        <Paragraph>{title}</Paragraph>
        <Text style={styles.link} onPress={() => Linking.openURL(link)}>
          #{number}
        </Text>
      </Card.Content>
      <Card.Actions style={styles.cardActions}>
        <View style={styles.authorView}>
          {/* <Icon name="user" size={30} color="#900" /> */}
          <Text>👤</Text>
          <Text>{` ${author}`}</Text>
        </View>
        <View style={styles.commentView}>
          <Text>
            {commentsCount}
            {commentsCount === 1 ? ' Comment ' : ' Comments '}
          </Text>
          <Text>🗨</Text>
          {/* <Icon name="comments" size={30} color="#900" /> */}
        </View>
      </Card.Actions>
    </Card>
  );
};
