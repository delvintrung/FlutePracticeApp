import { AudioSource, useAudioPlayer } from "expo-audio";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [inputSeconds, setInputSeconds] = useState<number>(10);
  const [currentSeconds, setCurrentSeconds] = useState<number>(0);

  const intervalRef = useRef<NodeJS.Timeout | number | null>(null);
  const player = useAudioPlayer(
    require("../../assets/alarm.mp3") as AudioSource
  );
  const tickPlayer = useAudioPlayer(
    require("../../assets/clock-tick-tick.mp3") as AudioSource
  );

  useEffect(() => {
    tickPlayer.loop = true;
  }, []);

  const playAlarm = async () => {
    player.seekTo(0);
    player.volume = 1.0;
    player.play();
  };

  const startTimer = async () => {
    if (intervalRef.current || inputSeconds <= 0) return;
    setTimeout(() => {
      tickPlayer.volume = 0.5;
      tickPlayer.play();
    }, 1000);

    setCurrentSeconds(0);

    intervalRef.current = setInterval(() => {
      setCurrentSeconds((prev) => prev + 1);
    }, 1000);
  };

  const resetTimer = async () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    tickPlayer.pause();
    tickPlayer.seekTo(0);
    
    setCurrentSeconds(0);
  };

  useEffect(() => {
    if (currentSeconds > 0 && inputSeconds > 0) {
      if (currentSeconds % inputSeconds === 0) {
        playAlarm();
      }
    }
  }, [currentSeconds, inputSeconds]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center gap-8">
      <StatusBar style="auto" />

      <View className="w-3/4">
        <Text className="text-gray-500 mb-2 text-center">
          Nhập số giây để nhắc
        </Text>

        <View className="flex-row items-center gap-2">
          <TextInput
            keyboardType="numeric"
            value={String(inputSeconds)}
            onChangeText={(text) => setInputSeconds(Number(text) || 0)}
            className="border border-gray-300 rounded-xl p-4 text-center text-lg w-[75%]"
          />
          <TouchableOpacity onPress={startTimer} className="px-6 py-3 bg-blue-100 rounded-full">
            <Text className="text-blue-500 text-lg font-bold">Start</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="w-48 h-48 rounded-full border-4 border-blue-500 items-center justify-center">
        <Text className="text-5xl font-bold text-blue-600">
          {currentSeconds}
        </Text>
        <Text className="text-gray-500 mt-2">seconds</Text>
      </View>

      <TouchableOpacity
        onPress={resetTimer}
        className="px-6 py-3 bg-blue-500 rounded-full"
      >
        <Text className="text-white text-lg font-semibold">Reset Timer</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
