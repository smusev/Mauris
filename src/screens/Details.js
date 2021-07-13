import React, {useState, useEffect} from 'react'
import {View, Image, Text, FlatList, StyleSheet, Modal,TouchableOpacity} from 'react-native'
import moment from 'moment';
import axios from 'axios';

function DetailsScreen({ route }) {
    const [ movieList, setMovieList] = useState([]);
    const [ modal, setModal] = useState(null);
    
    useEffect(() => {
      axios
      .get(`https://api.tvmaze.com/schedule/web?date=${route.params.date}&country=US`)
      .then(res => setMovieList(res.data))
    },[setMovieList]);
  
    const renderItem = ({item}) => {
      return (
        <View style={styles.itemList}>
          <TouchableOpacity
            onPress={() => {
              setModal(item._embedded.show.image?.original)}}
          >
            <Image source={item._embedded.show.image ? {uri: item._embedded.show.image?.medium} : require('../img/no-img.png')}
              style={styles.itemImage} />
          </TouchableOpacity>
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>{item._embedded.show.name}</Text>
            <Text style={styles.itemYear}>{moment(item._embedded.show.premiered).format('YYYY')}</Text>
            <Text style={styles.itemEpisode}>Сезон: {item.season}  Эпизод: {item.number}</Text>
          </View>
       </View>
    )}
    
    return (
      <View style={styles.container}>
        <Text style={styles.date}>{moment(route.params.date).format('DD MMMM YYYY')}</Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={!!modal}
          onRequestClose={() => {
            setModal(null);
        }}
      >
        <TouchableOpacity
          onPress={() => {setModal(null)}}
        >
            <Image source={{uri:modal}} style={styles.modalImage} />
        </TouchableOpacity>
      </Modal>
        {movieList.length > 0 && 
          <FlatList
            data={movieList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            initialNumToRender={4}
          />
        }
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor:'#ffffff',
    },
    date: {
        fontSize: 20, 
        color:'#c3c3c3', 
        margin: 20
    },
    itemList: { 
        flex:1, 
        flexDirection:'row',
        flexWrap: 'nowrap',  
        paddingVertical: 15 
    },
    itemImage: {
        width: 100, 
        height: 150, 
        marginRight: 15
    },
    itemInfo: {
        width: '60%'
    },
    itemTitle: {
        fontSize:20
    },
    itemYear: {
        color:'#c3c3c3'
    },
    itemEpisode: {
        backgroundColor:'#f5f5f5', 
        color: '#999999', 
        padding: 10, 
        width: '80%', 
        marginTop: 75, 
        borderRadius:5
    },
    modalImage: {
      height: '100%',
  },
  });
  

export default DetailsScreen;