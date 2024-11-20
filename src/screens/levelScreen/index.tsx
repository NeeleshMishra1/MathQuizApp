import React from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import Icon from "../../assets";
import { useNavigation, useRoute } from "@react-navigation/native";

const Level = (props: any) => {
    const navigation = useNavigation();
    const route = useRoute();
    const { name }: any = route.params || {};
    return (
        <SafeAreaView style={styles.container1}>

            <View style={styles.header}>
                <Text style={styles.headerName}>Hello ' {name ? name : "Guest"}</Text>
            </View>
            <View style={styles.main}>

                <TouchableOpacity style={styles.level} onPress={() => { navigation.navigate("low") }}>
                    <Image style={styles.splaceImage} source={Icon.low} />
                    <View>
                        <Text style={styles.levelText}>Low Level</Text>
                        <Text style={styles.classText}>Class 1-3</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.level1} onPress={() => { navigation.navigate("normal") }}>
                    <Image style={styles.splaceImage} source={Icon.normal} />
                    <View>
                        <Text style={styles.levelText}>Normal Level</Text>
                        <Text style={styles.classText}>Class 3-5</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.level2} onPress={() => { navigation.navigate("medium") }}>
                    <Image style={styles.splaceImage} source={Icon.medium} />
                    <View>
                        <Text style={styles.levelText}>Medium Level</Text>
                        <Text style={styles.classText}>Class 5-10</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.level3} onPress={() => { navigation.navigate("hard") }}>
                    <Image style={styles.splaceImage} source={Icon.hard} />
                    <View>
                        <Text style={styles.levelText}>Hard Level</Text>
                        <Text style={styles.classText}>Class 10-12</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default Level;