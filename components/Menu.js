import React from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Link,
  Button,
  Icon,
  HStack,
  Center,
  Pressable,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { View, StyleSheet, Dimensions } from "react-native";
import Login from "./Login";
import CustomCard from "./CustomCard";
import Input from "./Input";
import Header from "./Header";

export default function Menu() {
  const [selected, setSelected] = React.useState(1);
  return (
    <NativeBaseProvider
    // style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}
    >
      <Header />
      <CustomCard>
        <Input />
        <Input />
        <Input />
      </CustomCard>
      <Box style={styles.footer}>
        <HStack alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(0)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 0 ? "home" : "home-outline"}
                  />
                }
                color="#999999"
                size="sm"
              />
              <Text color="#999999" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Icon
                mb="1"
                as={<MaterialIcons name="search" />}
                color="#999999"
                size="sm"
              />
              <Text color="#999999" fontSize="12">
                Search
              </Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 2 ? "cart" : "cart-outline"}
                  />
                }
                color="#999999"
                size="sm"
              />
              <Text color="#999999" font="12">
                Cart
              </Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 3 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(3)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 3 ? "account" : "account-outline"}
                  />
                }
                color="#999999"
                size="sm"
              />
              <Text color="#999999" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 3 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(4)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 4 ? "account" : "account-outline"}
                  />
                }
                color="#999999"
                size="sm"
              />
              <Text color="#999999" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    zIndex: 1,
    width: Dimensions.get("window").width,
    bottom: 0,
  },
});
