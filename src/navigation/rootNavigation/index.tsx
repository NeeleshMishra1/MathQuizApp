import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splace from "../../screens/splaceScreen";
import Detail from "../../screens/detailScreen";
import Level from "../../screens/levelScreen";
import LowLevel from "../../screens/homeScreen/lowLevel";
import Normal from "../../screens/homeScreen/normalLevel";
import Medium from "../../screens/homeScreen/mediumLevel";
import Hard from "../../screens/homeScreen/hardLevel";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                    name="Splace"
                    component={Splace}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name="detailscreen"
                    component={Detail}
                    options={{ headerShown: false }}
                /> 
                 <Stack.Screen
                    name="level"
                    component={Level}
                    options={{ headerShown: false }}
                /> 
                 <Stack.Screen
                    name="low"
                    component={LowLevel}
                    options={{ headerShown: false }}
                /> 
                  <Stack.Screen
                    name="normal"
                    component={Normal}
                    options={{ headerShown: false }}
                /> 
                 <Stack.Screen
                    name="medium"
                    component={Medium}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="hard"
                    component={Hard}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;