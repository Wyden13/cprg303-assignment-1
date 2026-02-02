import { View, Text, StyleSheet, Button,Image } from 'react-native';

// This includes navigation icons like Home, Reels, Friends,Marketplace, Notifications, Profile
const NavigationBar = () => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Navigation Bar</Text> */}
        </View>
    )
}
export default NavigationBar;
const styles = StyleSheet.create({
    container: {
        
        height: 60,
        backgroundColor: '#3b5998',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});