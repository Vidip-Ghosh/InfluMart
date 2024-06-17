import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Color, Padding, FontSize, Border, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const BrandRegistrationForm = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.brandregistrationform}>
        <View style={[styles.depth0Frame0, styles.frameLayout2]}>
          <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
            <View style={[styles.depth1Frame0, styles.depth1FrameSpaceBlock]}>
              <View style={[styles.depth2Frame0, styles.frameFlexBox]}>
                <View style={[styles.depth3Frame0, styles.frameLayout1]}>
                  <Image
                    style={styles.depth4Frame0}
                    contentFit="cover"
                    source={require("../assets/depth-4-frame-07.png")}
                  />
                </View>
                <View style={[styles.depth3Frame1, styles.frameFlexBox]}>
                  <View style={[styles.depth4Frame01, styles.frameLayout1]}>
                    <View style={[styles.depth5Frame0, styles.frameLayout1]} />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={[styles.depth1Frame1, styles.depth1FrameSpaceBlock]}>
            <View style={styles.depth2Frame01}>
              <Text style={styles.createAnAccount}>Create a Brand account</Text>
            </View>
          </View>
          <View style={styles.depth1Frame2}>
            <View style={[styles.depth2Frame02, styles.frameLayout]}>
              <View style={styles.frameLayout}>
                <View style={styles.depth4Frame02}>
                  <Text style={[styles.email, styles.emailTypo]}>Email</Text>
                </View>
                <View style={styles.emailText}>
                  <TextInput
                    style={[styles.email1, styles.emailTypo]}
                    placeholder="Email"
                  />
                  <Image
                    contentFit="cover"
                    style={styles.depth4Frame0}
                    source={require("../assets/depth-6-frame-1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.depth1Frame2}>
            <View style={[styles.depth2Frame02, styles.frameLayout]}>
              <View style={styles.frameLayout}>
                <View style={styles.depth4Frame02}>
                  <Text style={[styles.email, styles.emailTypo]}>Password</Text>
                </View>
                <View style={styles.emailText}>
                  <TextInput
                    style={[styles.email1, styles.emailTypo]}
                    placeholder="Password"
                  />
                  <Image
                    contentFit="cover"
                    style={styles.depth4Frame0}
                    source={require("../assets/depth-6-frame-11.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.depth1Frame2}>
            <View style={[styles.depth2Frame02, styles.frameLayout]}>
              <View style={styles.frameLayout}>
                <View style={styles.depth4Frame02}>
                  <Text style={[styles.email, styles.emailTypo]}>
                    Brand Type
                  </Text>
                </View>
                <View style={styles.emailText}>
                  <TextInput
                    style={[styles.email1, styles.emailTypo]}
                    placeholder="Brand Type"
                  />
                  <Image
                    contentFit="cover"
                    style={styles.depth4Frame0}
                    source={require("../assets/depth-6-frame-12.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.depth1Frame2}>
            <View style={[styles.depth2Frame02, styles.frameLayout]}>
              <View style={styles.frameLayout}>
                <View style={styles.depth4Frame02}>
                  <Text style={[styles.email, styles.emailTypo]}>Username</Text>
                </View>
                <View style={styles.emailText}>
                  <TextInput
                    style={[styles.email1, styles.emailTypo]}
                    placeholder="Username"
                  />
                  <Image
                    contentFit="cover"
                    style={styles.depth4Frame0}
                    source={require("../assets/depth-6-frame-1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.depth1Frame6}>
            <View style={styles.depth2Frame06}>
              <View style={styles.depth3FrameLayout}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("OtpVerification")}
                >
                  <View
                    style={[styles.depth4Frame06, styles.depth4FrameLayout]}
                  >
                    <View style={[styles.depth5Frame05, styles.depth5FrameBg]}>
                      <View style={styles.depth7Frame0}>
                        <Text style={[styles.generateOtp, styles.signUpTypo]}>
                          Generate OTP
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[styles.depth3Frame11, styles.depth3FrameLayout]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("LoginPageBrands")}
                >
                  <View style={[styles.depth4Frame07, styles.frameBg]}>
                    <View style={[styles.depth5Frame06, styles.frameBg]}>
                      <View style={styles.depth7Frame0}>
                        <Text style={[styles.signUp, styles.signUpTypo]}>
                          Sign In
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[styles.depth1Frame7, styles.frameLayout2]} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  emailText: {
    height: 56,
    backgroundColor: Color.colorAliceblue,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  frameLayout2: {
    width: 390,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  depth1FrameSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  frameFlexBox: {
    justifyContent: "space-between",
    height: 48,
    alignItems: "center",
    flexDirection: "row",
  },
  frameLayout1: {
    width: 48,
    height: 48,
  },
  frameLayout: {
    height: 88,
    width: 358,
  },
  emailTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  depth5FrameBg: {
    backgroundColor: Color.colorAliceblue,
    overflow: "hidden",
  },
  depth4FrameLayout: {
    paddingVertical: 0,
    height: 40,
    justifyContent: "center",
    borderRadius: Border.br_xs,
    alignItems: "center",
    flexDirection: "row",
    width: 358,
    paddingHorizontal: Padding.p_base,
  },
  signUpTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth3FrameLayout: {
    height: 40,
    justifyContent: "center",
    flexDirection: "row",
    width: 358,
  },
  frameBg: {
    backgroundColor: Color.colorDodgerblue,
    overflow: "hidden",
  },
  depth4Frame0: {
    width: 24,
    height: 24,
  },
  depth3Frame0: {
    alignItems: "center",
    flexDirection: "row",
  },
  depth5Frame0: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  depth4Frame01: {
    flexDirection: "row",
  },
  depth3Frame1: {
    width: 310,
    paddingLeft: Padding.p_243xl,
  },
  depth2Frame0: {
    width: 358,
  },
  depth1Frame0: {
    height: 72,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: Padding.p_base,
  },
  createAnAccount: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    textAlign: "center",
    color: Color.colorGray_400,
    fontFamily: FontFamily.workSansBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth2Frame01: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth1Frame1: {
    height: 60,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xs,
    alignItems: "center",
  },
  email: {
    fontWeight: "500",
    fontFamily: FontFamily.workSansMedium,
    color: Color.colorGray_400,
    alignSelf: "stretch",
  },
  depth4Frame02: {
    height: 32,
    width: 358,
    paddingBottom: Padding.p_5xs,
  },
  email1: {
    flex: 1,
    fontFamily: FontFamily.workSansRegular,
    color: Color.colorSteelblue_200,
  },
  depth7Frame0: {
    alignSelf: "stretch",
  },
  depth6Frame0: {
    width: "auto",
    height: 24,
    // overflow: "hidden",
  },
  depth5Frame01: {
    padding: Padding.p_base,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorAliceblue,
    height: 56,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 358,
  },
  depth4Frame1: {
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    width: 358,
  },
  depth2Frame02: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  depth1Frame2: {
    height: 112,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  depth6Frame01: {
    width: "auto",
    height: 24,
    overflow: "hidden",
  },
  depth6Frame02: {
    width: "auto",
    height: 24,
    overflow: "hidden",
  },
  depth6Frame03: {
    width: "auto",
    height: 24,
    overflow: "hidden",
  },
  generateOtp: {
    color: Color.colorGray_400,
  },
  depth5Frame05: {
    width: "auto",
    height: 21,
  },
  depth4Frame06: {
    backgroundColor: Color.colorAliceblue,
    overflow: "hidden",
  },
  signUp: {
    color: Color.colorWhitesmoke_100,
  },
  depth5Frame06: {
    width: "auto",
    height: 21,
  },
  depth4Frame07: {
    paddingVertical: 0,
    height: 40,
    justifyContent: "center",
    borderRadius: Border.br_xs,
    alignItems: "center",
    flexDirection: "row",
    width: 358,
    paddingHorizontal: Padding.p_base,
  },
  depth3Frame11: {
    marginTop: 12,
  },
  depth2Frame06: {
    height: 92,
    alignItems: "center",
    width: 358,
  },
  depth1Frame6: {
    height: 116,
    justifyContent: "center",
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  depth1Frame7: {
    height: 20,
  },
  depth0Frame0: {
    overflow: "hidden",
    height: 844,
  },
  brandregistrationform: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "auto",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BrandRegistrationForm;