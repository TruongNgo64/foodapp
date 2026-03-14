import { Tabs } from "expo-router";

export default function TabsLayout(){

  return(

    <Tabs>

      <Tabs.Screen
        name="index"
        options={{title:"Explorer"}}
      />

      <Tabs.Screen
        name="explore"
        options={{title:"Account"}}
      />

    </Tabs>

  );
}