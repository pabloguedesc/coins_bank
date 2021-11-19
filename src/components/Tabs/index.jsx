import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Container, TabsContainer, TabItem, TabText } from "./styles";
import Colors from "../../styles/Colors";

export default function Tabs({translateY}) {
    return (
        <Container style={{
					transform: [
						{
							translateY: translateY.interpolate({
								inputRange: [0, 400],
								outputRange: [0, 30],
								extrapolate: "clamp",
							})
						}
					],
					opacity: translateY.interpolate({
						inputRange: [0, 400],
						outputRange: [1, 0.3],
						extrapolate: "clamp",
					})
				}}>
            <TabsContainer>
                <TabItem>
                    <Icon name="person-add" size={24} color={Colors.white}/>
                    <TabText>Indicar amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="chat-bubble-outline" size={24} color={Colors.white}/>
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-downward" size={24} color={Colors.white}/>
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-upward" size={24} color={Colors.white}/>
                    <TabText>Transferir</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="lock" size={24} color={Colors.white}/>
                    <TabText>Bloquear cartão</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    )   
}