import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function SignIn() {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.label}>Email ID</Text>
      <TextInput
        placeholder="Enter your email here!"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Enter your password here!"
        secureTextEntry
        style={styles.input}
      />

      <Text style={styles.forgot}>Forgot password?</Text>

      <Pressable
        style={styles.signBtn}
        onPress={()=>router.replace("/(tabs)")}
      >
        <Text style={styles.signText}>Sign In</Text>
      </Pressable>

      <Text style={styles.or}>Or sign in with</Text>

      <View style={styles.socialRow}>

        <Pressable style={styles.googleBtn}>

          <Image
            source={require("../assets/images/google.jpg")}
            style={styles.icon}
          />

          <Text style={styles.googleText}>Google</Text>

        </Pressable>

        <Pressable style={styles.fbBtn}>

          <Image
            source={require("../assets/images/facebook.jpg")}
            style={styles.icon}
          />

          <Text style={styles.fbText}>Facebook</Text>

        </Pressable>

      </View>

      <View style={styles.signupRow}>
        <Text>Not yet a member? </Text>

      <Text style={styles.signup}>Sign Up</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#f2f2f2",
    padding:25,
    justifyContent:"center"
  },

  title:{
    fontSize:28,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:30
  },

  label:{
    marginBottom:5
  },

  input:{
    borderWidth:1,
    borderColor:"#ddd",
    borderRadius:8,
    padding:12,
    marginBottom:15,
    backgroundColor:"white"
  },

  forgot:{
    textAlign:"right",
    color:"#ff9800",
    marginBottom:20
  },

  signBtn:{
    backgroundColor:"#ff9800",
    padding:15,
    borderRadius:8,
    marginBottom:20
  },

  signText:{
    textAlign:"center",
    color:"white",
    fontSize:18,
    fontWeight:"bold"
  },

  or:{
    textAlign:"center",
    marginBottom:15
  },

  socialRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:20
  },

  googleBtn:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    flex:1,
    borderWidth:1,
    borderColor:"#ddd",
    padding:12,
    borderRadius:8,
    marginRight:10,
    backgroundColor:"white"
  },

  fbBtn:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    flex:1,
    backgroundColor:"#3b5998",
    padding:12,
    borderRadius:8
  },

  icon:{
    width:20,
    height:20,
    marginRight:6
  },

  googleText:{
    fontWeight:"600"
  },

  fbText:{
    color:"white",
    fontWeight:"600"
  },

  signupRow:{
    flexDirection:"row",
    justifyContent:"center"
  },

  signup:{
    color:"#ff9800",
    fontWeight:"bold"
  }

});