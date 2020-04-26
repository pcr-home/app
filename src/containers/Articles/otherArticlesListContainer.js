import React, { Component } from 'react';
import { FlatList, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Error, Spacer } from '../../components/UI';

import firebase from '../../lib/firebase';
require('firebase/functions')
import 'firebase/firestore';


/*

          item.image = (item[1] == 'pos')? '../../images/test_pos.png' : '../../images/test_neg.png';
          item.name = 'Raymond Deng';
          item.excerpt = 'In breaking news';


return(
      this.state.user_test_history.map((item, index) => {
          item.image = (item[1] == 'pos')? '../../images/test_pos.png' : '../../images/test_neg.png';

          return(
            <Card key={index} >
              <CardItem cardBody>
                 <Image source={require('../../images/test_pos.png')} style={{height: 200, width: null, flex: 1}} />
              </CardItem>
            </Card>
          );
        })
      )}
*/

class otherArticlesListContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        user_test_history: [],
      }
  }

  componentDidMount = async () => {
    return await Promise.resolve(firebase.functions().httpsCallable('getTestsFromUser')({'uid': '15'})).then(res => {
      store_test_result = []

      idx = 1

      for (obj in res.data){
        test_result = res.data[obj][1];

        UNIX_timestamp = res.data[obj][0]._seconds;
        test_date = new Date(UNIX_timestamp * 1000);

        individual_card = {
          test_result: test_result.toUpperCase(),
          test_description: ('pos'.localeCompare(test_result))? 'COVID-19 NEGATIVE' : 'COVID-19 POSITIVE',
          tested_pos: ('pos'.localeCompare(test_result))? false : true,
          excerpt: test_date.toLocaleDateString(),
          name: 'Raymond Deng',
          image: ('pos'.localeCompare(test_result))? require('../../images/test_neg.png') : require('../../images/test_pos.png'),
          placeholder: false,
          key: idx
        }

        store_test_result.push(individual_card)
        idx += 1
      }



      this.setState({
        user_test_history: store_test_result
      })
    })
  };

  render = () => {
    return(
    <Container style={{ padding: 10 }}>
      <FlatList
        data={this.state.user_test_history}
        renderItem={({ item }) => (
          <Card style={{ opacity: item.placeholder ? 0.3 : 1}}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{ flex: 1 }}
            >
              <CardItem cardBody>
                {!!item.image && (
                  <Image
                    source={item.image}
                    style={{
                      height: 300,
                      width: null,
                      flex: 1,
                      overflow: 'hidden',
                      borderRadius: 5,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                )}
              </CardItem>
              <Spacer size={15} />
              <CardItem cardBody style = {styles.container}>
                <Body style={{ paddingHorizontal: 15 }}>
                  <Text style={styles.nameText}>{item.name}</Text>
                  {item.tested_pos && <Text style={styles.positiveDiagnosticTest}>{item.test_description}</Text>}
                  {!item.tested_pos && <Text style={styles.negativeDiagnosticTest}>{item.test_description}</Text>}
                  {!!item.excerpt && <Text style={styles.nameText}>{item.excerpt}</Text>}
                  <Spacer size={5} />
                </Body>
              </CardItem>
            </TouchableOpacity>
          </Card>
        )}
        keyExtractor={(item) => {item.idx}}
      />
      <Spacer size={20} />
    </Container>
  )}
}

const styles = StyleSheet.create({
  baseText:{
    fontFamily: 'Futura',
    color: 'gray',
    alignSelf: 'center',
    fontSize: 20
  },
  positiveDiagnosticTest:{
    fontFamily: 'Futura',
    color: 'crimson',
    alignSelf: 'flex-start',
    fontSize: 25
  },
  negativeDiagnosticTest:{
    fontFamily: 'Futura',
    color: 'green',
    alignSelf: 'flex-start',
    fontSize: 25
  },
  nameText:{
    fontFamily: 'Futura',
    color: 'gray',
    alignSelf: 'flex-start',
    fontSize: 15,
  },
  image_container: {
    paddingTop: 15,
    justifyContent: 'center'
  },
  button_container: {
    justifyContent: 'space-around'
  },
  container: {
    flex: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'relative',
  },
  negResultText: {
    color: 'red'
  },
  canvas: {
    flex: 1,
    alignItems: 'stretch'
  },
  buttonText: {
    paddingTop:15,
    paddingBottom:15,
    paddingRight:45,
    paddingLeft:45,
    borderRadius:30,
    borderWidth: 1,
    borderColor: 'gray'
  },
  secondButtonText: {
    paddingTop:15,
    paddingBottom:15,
    paddingRight:45,
    paddingLeft:45,
    borderRadius:30,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'dimgray'
  },
  secondButtonBaseText:{
    fontFamily: 'Futura',
    color: 'white',
    alignSelf: 'center',
    fontSize: 20
  },

})



export default otherArticlesListContainer