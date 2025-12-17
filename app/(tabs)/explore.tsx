import { Avatar } from "@rneui/base";
import { Icon, ListItem } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "../../data.json";

const list2 = [
  {
    name: " (Rung hơi)",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President",
    rating: 4.5,
  },
];

const log = () => {
  console.log("hello");
};

export default function TabTwoScreen() {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="auto" />
      <View className="p-4">
        <Text className="text-lg font-semibold">Tổng hợp kĩ thuật</Text>

        <ListItem.Accordion
          content={
            <>
              <Icon name="folder-special" size={26} />
              <ListItem.Content>
                <ListItem.Title className="text-xl font-bold text-red-700">
                  Kỹ thuật cốt lõi
                </ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expanded}
          onPress={() => {
            setExpanded(!expanded);
          }}
        >
          {data.dizi.crudential.map((l, i) => (
            <ListItem key={i} onPress={log} bottomDivider>
              <Avatar title={l.name[0]} source={{ uri: l.avatar_url }} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.description}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </ListItem.Accordion>
        <ListItem.Accordion
          content={
            <>
              <Icon name="biotech" size={30} />
              <ListItem.Content>
                <ListItem.Title>Danh Sách Kĩ Thuật</ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expanded2}
          onPress={() => {
            setExpanded2(!expanded2);
          }}
        >
          {list2.map((l, i) => (
            <ListItem key={i} onPress={log} bottomDivider>
              <Avatar title={l.name[0]} source={{ uri: l.avatar_url }} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </ListItem.Accordion>
        <View className="flex-row">
          <View className="h-10 flex-col w-5 px-1">
            <Text className="w-5 h-3 pl-[2px] -mb-[2px]">•</Text>
            <Text>5</Text>
            <Text className="w-5 h-3 pl-[2px] -mt-3">•</Text>
          </View>
          <View className="h-10 flex-col w-5 px-1">
            <Text className="w-5 h-3 pl-[2px] -mb-[2px]">•</Text>
            <Text>5</Text>
            <Text className="w-5 h-3 pl-[2px] -mt-3">•</Text>
          </View>
          <View className="h-10 flex-col w-5 px-1">
            <Text className="w-5 h-3 pl-[2px] -mb-[2px]">•</Text>
            <Text>5</Text>
            <Text className="w-5 h-3 pl-[2px] -mt-3">•</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
