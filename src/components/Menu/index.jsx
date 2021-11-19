import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Container, Code, Nav, NavItem, NavText, SignOutButton ,SignOutButtonText} from "./styles";
import Colors from "../../styles/Colors";
import QRCode from 'react-native-qrcode-svg';

export default function Menu({translateY}) {
    return (
        <Container style={{
					opacity: translateY.interpolate({
						inputRange: [0, 250],
						outputRange: [0, 1],
					})
				}}>
            <Code>
                <QRCode value="https://www.linkedin.com/in/pablo-guedes/" color={Colors.primary} backgroundColor={Colors.white}/>
            </Code>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color={Colors.white}/>
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color={Colors.white}/>
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color={Colors.white}/>
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color={Colors.white}/>
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>
            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>SAIR DO APP</SignOutButtonText>
            </SignOutButton>
        </Container>
    )
}