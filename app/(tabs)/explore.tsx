import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Linking, ScrollView, TouchableOpacity, View } from "react-native";
import { Avatar, Badge, Divider, List, Text } from "react-native-paper";
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar style="auto" />

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text variant="headlineMedium" style={{ fontWeight: "bold" }}>
          Tổng hợp kĩ thuật
        </Text>

        <List.Accordion
          title="Kỹ thuật cốt lõi"
          left={(props) => (
            <List.Icon {...props} icon="folder-special" color="#B91C1C" />
          )}
          expanded={expanded}
          onPress={() => setExpanded(!expanded)}
        >
          {data.dizi.crudential.map((l, i) => (
            <View key={i}>
              <List.Item
                title={l.name}
                description={l.description}
                left={() => (
                  <Avatar.Text
                    size={40}
                    label={l.name[0]}
                    style={{ backgroundColor: "#FCA5A5" }}
                  />
                )}
              />
              <TouchableOpacity
                style={{ marginLeft: 72, marginBottom: 8 }}
                onPress={() => openLink(l.learning_video)}
              >
                <Text style={{ color: "#B91C1C" }}>Xem video hướng dẫn</Text>
              </TouchableOpacity>
              <Divider />
            </View>
          ))}
        </List.Accordion>

        <List.Accordion
          title="Danh sách kĩ thuật"
          left={(props) => (
            <List.Icon {...props} icon="biotech" color="#B91C1C" />
          )}
          expanded={expanded2}
          onPress={() => setExpanded2(!expanded2)}
        >
          {data.dizi.technicals.map((l, i) => (
            <View key={i} style={{ paddingHorizontal: 8 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Text style={{ flex: 1, fontWeight: "600", fontSize: 18 }}>
                  {l.name}
                </Text>

                <Badge
                  style={{
                    backgroundColor:
                      l.level === "advanced"
                        ? "#F59E0B"
                        : l.level === "intermediate"
                          ? "#3B82F6"
                          : "#16A34A",
                    fontSize: 16,
                  }}
                  className="px-2 h-[30px] font-bold rounded-md"
                >
                  {l.level}
                </Badge>
              </View>

              <Text style={{ marginTop: 4, color: "#555" }}>
                {l.description}
              </Text>

              <TouchableOpacity
                style={{ marginTop: 6 }}
                onPress={() => openLink(l.link_video)}
              >
                <Text style={{ color: "#B91C1C" }}>Xem video hướng dẫn</Text>
              </TouchableOpacity>

              <Divider style={{ marginVertical: 12 }} />
            </View>
          ))}
        </List.Accordion>
      </ScrollView>
    </SafeAreaView>
  );
}
