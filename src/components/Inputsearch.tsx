import * as React from 'react';
import {  
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
  IconButton
} from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';


export interface Props {

}

export function Inputsearch(props: Props) {
  return (
    <FormControl>
      <InputGroup 
        width="354px"
        height="24px"
      >
        <Input
          width="354px"
          height="24px"
          borderRadius="2px"
          pr="4.5rem"
          p="1rem"
          type="search"
          placeholder="Search article, authoer, stocks, topics..."
        />
        <InputRightElement 
        width="24px" height="15px" p="1rem">
          <SearchIcon 
            opacity="0.5"
            width="16px"
            height="16px"
            cursor="pointer"
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

