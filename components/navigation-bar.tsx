import { View, Text, StyleSheet, Button,Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';



// This includes navigation icons like Home, Reels, Friends,Marketplace, Notifications, Profile
const NavigationBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navItem}>
                <Feather name="home" size={24} style={styles.icon} />
                <Text style={styles.navItemText}>Home</Text>
            </View>
            <View style={styles.navItem}>
                <MaterialIcons name="video-label" size={24} style={styles.icon} />
                <Text style={styles.navItemText}>Reels</Text>
            </View>
            <View style={styles.navItem}>
                <Feather name="users" size={24} style={styles.icon} />
                <Text style={styles.navItemText}>Friends</Text>
            </View>
            <View style={styles.navItem}>
                <FontAwesome5 name="store" size={20} style={styles.icon} />
                <Text style={styles.navItemText}>Marketplace</Text>
            </View>
            <View style={styles.navItem}>
                <Ionicons name="notifications-outline" size={24} style={styles.icon} />
                <Text style={styles.navItemText}>Notifications</Text>
            </View>
            <View style={styles.navItem}>
                <MaterialCommunityIcons name="face-man-profile" size={24} style={styles.icon} />
                <Text style={styles.navItemText}>Profile</Text>
            </View>
        </View>
    )
}
export default NavigationBar;
const styles = StyleSheet.create({
    container: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: '#4267B2',
    },
    navItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: '#3c3c3cff',
    },
    navItemText: {
        fontSize:8,
        fontWeight: '600',
        color: '#3c3c3cff',
    }
});