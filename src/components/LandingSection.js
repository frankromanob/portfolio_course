import React from "react";
import { Avatar, Heading, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Frank!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";



// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <Avatar name="Test picture" src="https://avatars.githubusercontent.com/u/46932778?v=4" size="2xl" />
  <VStack spacing={4} align="center">
    <Heading size ="1" >
      {greeting}
    </Heading>
    <Heading>
      {bio1}
    </Heading>
    <Heading>
      {bio2}
    </Heading>
  </VStack>
  </FullScreenSection>
);

export default LandingSection;
