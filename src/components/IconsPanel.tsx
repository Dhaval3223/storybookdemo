import * as React from 'react';
import { 
  Box,
  Icon,
  Text,
  Flex,
  Center
} from "@chakra-ui/react";
import { MdExplore, MdBookmark, MdAccountBalanceWallet, MdNotifications } from 'react-icons/md';
import { FaUserCircle } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";



export interface Props {
  
}

export function IconsPanel(props: Props) {
  return (
    <Box bg="#183380" w="490px" p="10px" color="white">
      <Flex>
        <Center>
          <Icon as={MdExplore}  w="24px" h="24px"/>
          <Text ml="6px" fontSize="13px" opacity="0.55" as="b">Explore</Text>
        </Center>
        <Center ml="22px"> 
          <Icon as={MdBookmark}  w="24px" h="24px"/>
          <Text ml="6px" fontSize="13px" opacity="0.55" as="b">Bookmarks</Text>
        </Center>
        <Center ml="22px">
          <Icon as={HiOutlinePencilAlt}  w="24px" h="24px"/>
          <Text ml="6px" fontSize="13px" opacity="0.55" as="b">StartWriting</Text>
        </Center>
        <Center ml="22px">
          <Icon as={MdAccountBalanceWallet}  w="24px" h="24px"/>
        </Center>
        <Center ml="22px">
          <Icon as={MdNotifications}  w="24px" h="24px"/>
        </Center>
        <Center ml="22px">
          <Icon as={FaUserCircle}  w="24px" h="24px"/>
        </Center>
      </Flex>
    </Box>
  );
}


