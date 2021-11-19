import React from "react";
import { Container, Top, Title, Logo } from "./styles";
import Colors from "../../styles/Colors";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Header() {
    return (
        <Container>
            <Top>
								<Icon5 name="coins" size={30} color={Colors.white}/>
                <Title>Pablo</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color={Colors.white}/>
        </Container>
    )
}