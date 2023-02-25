import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

export default StyleSheet.create({

    container: {
        display: 'flex',
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
    },

    content: {
        backgroundColor: '#FFFFFF',
        padding: '13%',
        width: '100%',
    },

    inputContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },

    heading: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 20,
    },

    tagline: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 20,
    },

    input: {
        height: 50,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 10,
        width: '95%',
    },

    iconContainer: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 4,
        padding: 8,
        marginLeft: 10,
    },

    icon: {
        width: 30,
        height: 30,
    },

    subtext: {
        textAlign: 'center',
        padding: '5%',
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    back: {
        fontSize: 16,
    },
});
