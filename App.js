import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Image } from "react-native"; // Import TouchableOpacity and Image
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons"; // Import the sidebar icon
import Login from "./PracticeA/Started/Login";
import Loginsms from "./PracticeA/Started/Loginsms";
import Register from "./PracticeA/Started/Register";
import Verify from "./PracticeA/Started/Verify";
import Verifysuccess from "./PracticeA/Started/Verifysuccess";
import Cnpsuccess from "./PracticeA/Started/Cnpsuccess";
import Verifylogin from "./PracticeA/Started/Verifylogin";
import VerifyFPsms from "./PracticeA/Started/VerifyFPsms";
import VerifyFPemail from "./PracticeA/Started/VerifyFPemail";
import Fps1 from "./PracticeA/Started/Fps1";
import Fps1sms from "./PracticeA/Started/Fps1sms";
import Fps1email from "./PracticeA/Started/Fps1email";
import Cnp from "./PracticeA/Started/Cnp";
import homepage from "./PracticeA/Home/homepage";
import AppointmentList from "./PracticeA/Home/AppointmentList";
import Symptoms from "./PracticeA/Home/Symptoms";

import logoImage from "./PracticeA/assets/Logo.png";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Verify"
          component={Verify}
          options={{ headerTitle: "Activation" }}
        />

        <Stack.Screen
          name="homepage"
          component={homepage}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faBars} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: "Welcome",
            headerTransparent: false,
            headerStyle: {
              height: 100,
            },
            headerRight: () => (
              <>
                <TouchableOpacity
                  onPress={() => console.log("Pressed")}
                  style={{
                    marginRight: 20,
                    marginTop: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      marginLeft: 10,
                    }}
                    source={logoImage}
                  />
                </TouchableOpacity>
              </>
            ),
          })}
        />

        <Stack.Screen
          name="AppointmentList"
          component={AppointmentList}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faBars} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: "Appointment List",
            headerTransparent: false,
            headerStyle: {
              height: 100,
            },
            headerRight: () => (
              <>
                <TouchableOpacity
                  onPress={() => console.log("Pressed")}
                  style={{
                    marginRight: 20,
                    marginTop: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      marginLeft: 10,
                    }}
                    source={logoImage}
                  />
                </TouchableOpacity>
              </>
            ),
          })}
        />
        <Stack.Screen
          name="Symptoms"
          component={Symptoms}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faBars} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: "Symptoms",
            headerTransparent: false,
            headerStyle: {
              height: 100,
            },
            headerRight: () => (
              <>
                <TouchableOpacity
                  onPress={() => console.log("Pressed")}
                  style={{
                    marginRight: 20,
                    marginTop: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FontAwesomeIcon icon={faBell} size={24} color="black" />
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      marginLeft: 10,
                    }}
                    source={logoImage}
                  />
                </TouchableOpacity>
              </>
            ),
          })}
        />
        <Stack.Screen
          name="Verifysuccess"
          component={Verifysuccess}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Cnp"
          component={Cnp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cnpsuccess"
          component={Cnpsuccess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Fps1email"
          component={Fps1email}
          options={{ headerTitle: "Forgot password" }}
        />
        <Stack.Screen
          name="Fps1sms"
          component={Fps1sms}
          options={{ headerTitle: "Forgot password" }}
        />
        <Stack.Screen
          name="Fps1"
          component={Fps1}
          options={{ headerTitle: "Forgot password" }}
        />
        <Stack.Screen
          name="Loginsms"
          component={Loginsms}
          options={{ headerTitle: "" }}
        />

        <Stack.Screen
          name="Verifylogin"
          component={Verifylogin}
          options={{ headerTitle: "" }}
        />
        <Stack.Screen
          name="VerifyFPemail"
          component={VerifyFPemail}
          options={{ headerTitle: "Forgot password" }}
        />
        <Stack.Screen
          name="VerifyFPsms"
          component={VerifyFPsms}
          options={{ headerTitle: "Forgot password" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
