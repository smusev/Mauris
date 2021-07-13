import React from 'react'
import {View, Image, Text, SafeAreaView, StyleSheet} from 'react-native'
import CalendarPicker from 'react-native-calendar-picker/CalendarPicker';
import moment from 'moment';

function HomeScreen({navigation}) {
    const onDateChange = (date) => {
      navigation.navigate('Details', { date: moment(date).format('YYYY-MM-DD') })
    }
  
    return (
      <View style={styles.container}>
        <Image style={styles.image} resizeMode={'center'} source={require('../img/tv.png')}/>
        <Text style={styles.text}>Для получения списка сериалов, пожалуйста, выберите необходимый месяц и день</Text>
        <SafeAreaView>
          <CalendarPicker
              onDateChange={(date) => onDateChange(date)}
              showDayStragglers
              previousTitle	= '<'
              nextTitle	= '>'
              previousTitleStyle = {{fontSize: 24}}
              nextTitleStyle = {{fontSize: 24}}
              dayShape = 'square'
              startFromMonday={true}
              todayBackgroundColor="#f2ffff"
              selectedDayColor="#7FFFe6"
              selectedDayStyle={{
              borderColor: 'red',
              backgroundColor: 'white',
              color: 'white',
              borderWidth: 2,
              borderRadius: 0,
            }}
          />
          <View>
          </View>
        </SafeAreaView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        backgroundColor: 'white'  
    },
    image: {
        width: '50%' , 
        marginTop: '10%'
    },
    text: {
        width: '80%', 
        fontSize:20, 
        color: '#333333', 
        textAlign: 'center',
    }
})

export default HomeScreen;