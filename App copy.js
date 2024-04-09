import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars, faBell, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
import Alldoctors from "./PracticeA/Home/Alldoctors";
import Sidebar from "./PracticeA/Home/sidebar";
import Filter from "./PracticeA/Home/Filter";
import Location from "./PracticeA/Home/Location";
import AAppointmentpage from "./PracticeA/Appointmentpage/AAppointmentpage";
import Viewdoc from "./PracticeA/Appointmentpage/Viewdoc";
import Viewdocarch from "./PracticeA/Appointmentpage/Viewdocarch";
import Cancelsuccess from "./PracticeA/Appointmentpage/Cancelsuccess";
import Cancelschedule from "./PracticeA/Appointmentpage/Cancelschedule";
import logoImage from "./PracticeA/assets/Logo.png";
const Stack = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerTitle: "", headerShown: true }}
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
          name="Filter"
          component={Filter}
          options={{ headerTitle: "Filter" }}
        />
        <Stack.Screen
          name="Viewdoc"
          component={Viewdoc}
          options={{ headerTitle: "View" }}
        />
        <Stack.Screen
          name="Viewdocarch"
          component={Viewdocarch}
          options={{ headerTitle: "View" }}
        />
        <Stack.Screen
          name="Cancelschedule"
          component={Cancelschedule}
          options={{ headerTitle: "Cancel" }}
        />
        <Stack.Screen
          name="Cancelsuccess"
          component={Cancelsuccess}
          options={{ headerShown: false }}
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
                  onPress={() => navigation.navigate("#")}
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
          name="AAppointmentpage"
          component={AAppointmentpage}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faBars} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: "Appointment Page",
            headerTransparent: false,
            headerStyle: {
              height: 100,
            },
            headerRight: () => (
              <>
                <TouchableOpacity
                  onPress={() => navigation.navigate("#")}
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
          name="Location"
          component={Location}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faBars} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: "Location",
            headerTransparent: false,
            headerStyle: {
              height: 100,
            },
            headerRight: () => (
              <>
                <TouchableOpacity
                  onPress={() => navigation.navigate("#")}
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
          name="Alldoctors"
          component={Alldoctors}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{ marginLeft: 20 }}
              >
                <FontAwesomeIcon icon={faBars} size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitle: "All Doctors",
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
            headerLeft: () => <Sidebar />,
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
