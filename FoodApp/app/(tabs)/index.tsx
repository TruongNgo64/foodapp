import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Home(){

  return(

    <ScrollView style={styles.container}>

      <Text style={styles.title}>Explorer</Text>

      <Text style={styles.subtitle}>Top Categories</Text>

      <View style={styles.row}>

        <View style={styles.card}>
          <Image
            source={{uri:"https://picsum.photos/200"}}
            style={styles.img}
          />
          <Text>Pizza</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{uri:"https://picsum.photos/201"}}
            style={styles.img}
          />
          <Text>Burger</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{uri:"https://picsum.photos/202"}}
            style={styles.img}
          />
          <Text>Steak</Text>
        </View>

      </View>

      <Text style={styles.subtitle}>Popular Items</Text>

      <View style={styles.food}>

        <Image
          source={{uri:"https://picsum.photos/203"}}
          style={styles.foodImg}
        />

        <View>
          <Text style={styles.foodName}>Food 1</Text>
          <Text>1$</Text>
        </View>

      </View>

      <View style={styles.food}>

        <Image
          source={{uri:"https://picsum.photos/204"}}
          style={styles.foodImg}
        />

        <View>
          <Text style={styles.foodName}>Food 2</Text>
          <Text>3$</Text>
        </View>

      </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:15
  },

  title:{
    fontSize:30,
    fontWeight:"bold",
    marginBottom:10
  },

  subtitle:{
    fontSize:18,
    marginTop:15,
    marginBottom:10
  },

  row:{
    flexDirection:"row",
    justifyContent:"space-between"
  },

  card:{
    alignItems:"center"
  },

  img:{
    width:80,
    height:80,
    borderRadius:10
  },

  food:{
    flexDirection:"row",
    marginBottom:15,
    alignItems:"center"
  },

  foodImg:{
    width:70,
    height:70,
    marginRight:10,
    borderRadius:10
  },

  foodName:{
    fontSize:16,
    fontWeight:"bold"
  }

});