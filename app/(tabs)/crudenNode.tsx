import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "../../data.json";

const NodeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View className="bg-white w-full h-screen p-4">
        <Text className="text-3xl font-extrabold mb-4">
          Giới thiếu thế bấm và cách bấm
        </Text>
        <ScrollView className="flex-1">
          <View className="p-2 pb-20">
            {data.dizi.nodes.map((nodeItem, index) => (
              <View key={index}>
                <Text className="text-2xl font-bold text-gray-800">
                  {nodeItem.type}
                </Text>
                <Text className="text-sm ">{nodeItem.description}</Text>
                <View className="w-full border-l-gray-800">
                  {nodeItem.items.map((item, idx) => (
                    <View>
                      {/* Node row */}
                      <View className="flex-row items-center">
                        <View className="w-10 h-10 rounded-full mr-2">
                          <View className="h-10 flex-col w-5 px-1">
                            <Text className="w-5 h-3 pl-[2px] -mb-[2px]">
                              {item.top ? "•" : " "}
                            </Text>
                            <Text>{item.value}</Text>
                            <Text className="w-5 h-3 pl-[2px] -mt-3">
                              {item.bottom ? "•" : " "}
                            </Text>
                          </View>
                        </View>
                        <View className="w-[1px] h-[80%] bg-gray-600"></View>
                        <View className="w-full h-10 rounded-full">
                          <Text className="text-left pt-2 pl-2">
                            {item.label}
                          </Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NodeScreen;
