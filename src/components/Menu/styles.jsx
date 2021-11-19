import styled from 'styled-components/native';
import Colors from '../../styles/Colors';
import { StyleSheet, Animated } from 'react-native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const Code = styled.View`
  background-color: ${Colors.white};
  padding: 10px;
  border: none;
  border-radius: 4px;
  align-self: center;
`;

export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: #ffffffcc;
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #ffffffcc;
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: ${Colors.white};
  margin-left: 15px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #ffffffcc;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: ${Colors.white};
  font-weight: bold;
  font-size: 13px;
`;
