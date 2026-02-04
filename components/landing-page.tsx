import {View, Text,StyleSheet} from 'react-native';

const LandingPage = () => {
    return (
        <View style = {styles.container}>
            <Text>Welcome to Facebook Clone</Text>
        </View>
    );
};

export default LandingPage;

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: '100%',
    }
});