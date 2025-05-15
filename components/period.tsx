import { View, Text, Image, StyleSheet} from 'react-native';

export default function Period({period}){



    return(
        <View style={{width: '100%', backgroundColor: 'powderblue',flexDirection:'column',justifyContent:'space-between', borderRadius:10, borderColor:'powderblue', borderStyle:'solid', borderWidth:2, padding:5}}>
            <View style={{flexDirection:'row', gap:16, justifyContent:'space-between', }}>
                <Image style={{width:50, height:50}}source={{uri:period.icon}} />
                <Text style={{fontWeight:'bold'}}>{period.name}</Text>
                <Text className={period.temperature>80?'hot':'cold'}>{period.temperature} {period.temperatureUnit}</Text>
            </View>

            <Text>{period.shortForecast} - {period.windSpeed} {period.windDirection}</Text>
        </View>
    )
}

