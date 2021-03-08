import React, {Fragment} from 'react';
import {ListView} from 'react-native';
import {TextInput} from 'react-native';
import {ScrollView} from 'react-native';
import {View, Text, Button} from 'react-native';
import {Divider, List} from 'react-native-paper';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import Item from '../item';
import styles from './styles';

class IssuesList extends React.Component {
  state = {
    term: '',
  };
  componentDidMount() {
    this.props.getIssuesParams({
      name: 'react',
      login: 'facebook',
      states: ['OPEN', 'CLOSED'],
    });
    // this.props.searchIssues({term: 'repo:facebook/react in:title in:body'});
  }
  issuesList = () => {
    const {issues} = this.props;
    return issues.map((issue) => {
      const {node} = issue;
      return (
        <List.Section key={node.id} style={styles.listContainer}>
          {/* <Text>{node.title}</Text> */}
          <Item
            opened={node.publishedAt}
            tag={node.state}
            title={node.title}
            link={node.bodyUrl}
            number={node.number}
            author={node.author.login}
            commentsCount={node.comments.totalCount}
          />
        </List.Section>
      );
    });
  };

  onGetIssuesByTagsPressed = (tag) => {
    this.props.getIssuesParams({
      name: 'react',
      login: 'facebook',
      states: tag,
    });
  };

  onSearchIssuesChange = (term) => {
    this.setState({term});
  };

  issueLoader = () => {
    return (
      <View>
        <Text>Loading...........</Text>
      </View>
    );
  };

  render() {
    const {loading} = this.props;
    const {term} = this.state;
    console.log(this.props);
    return (
      <Fragment>
        <View style={styles.subHeader}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.search}
              placeholder="🔍 Search issue"
              value={term}
              onChangeText={(val) => this.onSearchIssuesChange(val)}
            />
          </View>
          <View style={styles.filterMenu}>
            <Text>{` Date ⌄    `}</Text>
            <Menu>
              <MenuTrigger text="Filter By ⌄" style={styles.menuTrigger} />
              <MenuOptions>
                <MenuOption
                  onSelect={() => this.onGetIssuesByTagsPressed('OPEN')}
                  text="Open"
                />
                <MenuOption
                  onSelect={() => this.onGetIssuesByTagsPressed('CLOSED')}
                  text="Closed"
                />
                <Divider />
                <MenuOption
                  onSelect={() =>
                    this.onGetIssuesByTagsPressed(['OPEN', 'CLOSED'])
                  }>
                  <Text style={{color: 'blue'}}>Clear FIlter</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
        </View>
        {loading ? (
          this.issueLoader()
        ) : (
          <ScrollView>{this.issuesList()}</ScrollView>
        )}
      </Fragment>
    );
  }
}

export default IssuesList;
