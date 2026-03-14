import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Profile(){

  return(

    <View style={styles.container}>

      <View style={styles.header}/>

      <Text style={styles.name}>Hung Nguyen</Text>

      <Text style={styles.job}>Mobile developer</Text>

      <Text style={styles.desc}>
        I have above 5 years of experience in mobile apps development
      </Text>

      <Pressable
        style={styles.button}
        onPress={()=>router.replace("/signin")}
      >
        <Text style={{color:"white"}}>Sign Out</Text>
      </Pressable>

    </View>

  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:"center"
  },

  header:{
    width:"100%",
    height:120,
    backgroundColor:"#2bb0e5"
  },

  name:{
    fontSize:22,
    fontWeight:"bold",
    marginTop:20
  },

  job:{
    color:"#00aaff",
    marginBottom:10
  },

  desc:{
    textAlign:"center",
    paddingHorizontal:40
  },

  button:{
    backgroundColor:"#ff9800",
    padding:12,
    marginTop:20,
    borderRadius:8
  }

});