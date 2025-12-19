import { Avatar } from "@rneui/base";
import { Badge, Icon, ListItem } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "../../data.json";

const log = () => {
  console.log("hello");
};

const openLink = async (url: string) => {
  const supported = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  } else {
    console.log(`Don't know how to open this URL: ${url}`);
  }
};

export default function TabTwoScreen() {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="auto" />
      <View className="p-4">
        <Text className="text-2xl font-bold ">Tổng hợp kĩ thuật</Text>

        <ListItem.Accordion
          content={
            <>
              <Icon name="folder-special" size={26} color="#B91C1C" />
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
                <View className="" key={i}>
                  <TouchableOpacity onPress={() => openLink(l.learning_video)}>
                    <Text className="text-red-600 mt-2">
                      Xem video hướng dẫn
                    </Text>
                  </TouchableOpacity>
                </View>
              </ListItem.Content>
            </ListItem>
          ))}
        </ListItem.Accordion>
        <ListItem.Accordion
          content={
            <>
              <Icon name="biotech" size={30} color="#B91C1C" />
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
          <ScrollView className="h-[600px]">
            {data.dizi.technicals.map((l, i) => (
              <ListItem key={i} bottomDivider>
                <ListItem.Content style={{ width: "100%" }}>
                  <View className="flex-row items-center justify-between gap-4">
                    <ListItem.Title style={{ flex: 1 }}>
                      {l.name}
                    </ListItem.Title>
                    <Badge
                      containerStyle={{
                        marginTop: 5,
                        padding: 5,
                        marginLeft: "auto",
                      }}
                      badgeStyle={{
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        height: 30,
                        borderRadius: 15,
                      }}
                      value={l.level}
                      status={
                        l.level == "advanced"
                          ? "warning"
                          : l.level == "intermediate"
                          ? "primary"
                          : "success"
                      }
                    />
                  </View>
                  <ListItem.Subtitle>{l.description}</ListItem.Subtitle>
                  <TouchableOpacity onPress={() => openLink(l.link_video)}>
                    <Text className="text-red-600 mt-2">
                      Xem video hướng dẫn
                    </Text>
                  </TouchableOpacity>
                </ListItem.Content>
              </ListItem>
            ))}
          </ScrollView>
        </ListItem.Accordion>
      </View>
    </SafeAreaView>
  );
}
