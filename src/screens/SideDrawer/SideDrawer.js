import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Dimensions, 
    StyleSheet,
    TouchableOpacity 
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component {
    render() {
        return (
            <View style={[
                style.container,
                {width: Dimensions.get("window").width * 0.8}
            ]}>
                <TouchableOpacity>
                    <View style={style.drawerItem}>
                        <Icon 
                            name="ios-log-out"
                            size={30}
                            color="#aaa"
                            style={style.drawerItemIcon}
                        />
                        <Text>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: "white",
        flex: 1
    },
    drawerItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#eee"
    },
    drawerItemIcon: {
        marginRight: 10
    }
});

export default SideDrawer;