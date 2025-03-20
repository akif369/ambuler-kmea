import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Home = () => {
  return (
    <View className="flex-1 bg-[#1A4041]">
      <View className="flex justify-between flex-row m-5">
        {/* Hamburger Icon */}
        <Svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M3 12h18M3 6h18M3 18h18" />
        </Svg>

        <Image
          source={require("@/assets/images/profile.png")}
          className="h-12 w-12"
          resizeMode="contain"
        />
      </View>

      <View>
        {/* Other content */}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});