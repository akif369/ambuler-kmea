import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Alert, Text, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import mapStyle from "@/assets/mapStyle.json"; // Dark mode map style

const Home = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission Denied", "Allow location access to use this feature.");
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation(userLocation.coords);
    })();
  }, []);

  return (
    <View className="flex-1 bg-primary"> {/* Dark background */}
      {/* Header with Hamburger & Profile Icon */}
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

      {/* Google Map View with User's Location */}
      <View style={styles.container}>
        <MapView
          style={styles.map}
          customMapStyle={mapStyle} // Apply dark theme
          initialRegion={{
            latitude: location?.latitude || 9.9312,  // Default to Kochi, India
            longitude: location?.longitude || 76.2673,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          showsUserLocation={true} // Show blue dot for current location
          showsMyLocationButton={true} // Add "My Location" button
        >
          {/* Marker for Ambulance */}
          {location && (
            <Marker
              coordinate={{ latitude: 9.9315, longitude: location.longitude }}
              title="Your Location"
              description="This is your current location"
            />
          )}
        </MapView>
      </View>

      {/* Emergency Button - Overlay at Bottom */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.emergencyButton} onPress={() => Alert.alert("Emergency!", "Calling for an ambulance...")}>
          <Text style={styles.buttonText}>EMERGENCY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    alignItems: "center",
  },
  emergencyButton: {
    backgroundColor: "#ff3b30", // Primary emergency color (Red)
    paddingVertical: 15,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    elevation: 5, // For shadow effect
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
