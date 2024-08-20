import React, { useState } from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button, ButtonText } from "./components/ui/button";
import { Heading } from "./components/ui/heading";
import { Text } from "./components/ui/text";
import { Icon, CloseIcon } from "./components/ui/icon";
import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
} from "./components/ui/drawer";

const DrawerExample = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <Button
        onPress={() => {
          setShowDrawer(true);
        }}
      >
        <ButtonText>Show Drawer</ButtonText>
      </Button>
      <Drawer
        isOpen={showDrawer}
        onClose={() => {
          setShowDrawer(false);
        }}
        anchor="right"
        size="md"
      >
        <DrawerBackdrop />
        <DrawerContent>
          <DrawerHeader>
            <Heading size="md" className="text-typography-950">
              Invite your team
            </Heading>
            <DrawerCloseButton>
              <Icon as={CloseIcon} className="stroke-background-500" />
            </DrawerCloseButton>
          </DrawerHeader>
          <DrawerBody>
            <Text size="sm" className="text-typography-500">
              Elevate user interactions with our versatile modals. Seamlessly
              integrate notifications, forms, and media displays. Make an impact
              effortlessly.
            </Text>
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant="outline"
              action="secondary"
              onPress={() => {
                setShowDrawer(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              onPress={() => {
                setShowDrawer(false);
              }}
            >
              <ButtonText>Explore</ButtonText>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default function App() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <GluestackUIProvider mode="light">
        <DrawerExample />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
