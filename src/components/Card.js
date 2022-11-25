import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { render } from "@testing-library/react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  return (
    <Box p={5} shadow='md' borderWidth='1px' bg="White" color="black" borderRadius="lg">
      <Heading>
      {
        <Image src={imageSrc} borderRadius="md"/>
      }
    </Heading>
    <Heading fontWeight="bold" size="md">
      {  
        <Text>{title}</Text>
      }
    </Heading>
    <Heading size="xm" fontWeight="thin">
      {  
        <Text>{description}</Text>
      }
    </Heading>
    <Heading size="xs">
        {
          <Text>See More <FontAwesomeIcon icon={faArrowRight} size="1x" /> </Text>        
        }
    </Heading>
  </Box>

  );
};

export default Card;
