import Colors from "./styles/Colors";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

 
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
  padding-top: ${getStatusBarHeight()}px;
`;
