import React from "react";
import { Animated } from 'react-native';
import { PanGestureHandler, State } from "react-native-gesture-handler"
import Icon from "react-native-vector-icons/MaterialIcons";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import Menu from "../../components/Menu";

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from "./styles";

export default function Main() {

	function Secret() {

	}

	var offset = 0;
	const translateY = new Animated.Value(0);
	const animatedEvent = Animated.event(
		[
			{
				nativeEvent: {
					translationY: translateY,
				}
			}
		],
		{ useNativeDriver: true },
	);

	function onHandlerStateChange(event) {
		if(event.nativeEvent.oldState === State.ACTIVE) {
			var opened = false;
			var {translationY} = event.nativeEvent;
			offset += translationY;
			if(translationY >= 100) {
				opened = true
			} else {
				translateY.setValue(offset);
				translateY.setOffset(0);
				offset = 0;
			}
			Animated.timing(translateY, {
				toValue: opened ? 400 : 0,
				duration: 200,
				useNativeDriver: true,
			}).start(() => {
				offset = opened ? 400 : 0;
				translateY.setOffset(offset);
				translateY.setValue(0);
			});

		}
	}

	return (
		<Container>
			<Header />

			<Content>
				<Menu translateY={translateY}/>

				<PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={onHandlerStateChange}>
					<Card style={{
						transform: [{
							translateY: translateY.interpolate({
								inputRange:[-200, 0, 400],
								outputRange: [-20, 0, 400],
								extrapolate: "clamp",
							}),
						}]
					}}>
						<CardHeader>
							<Icon name="attach-money" size={28} color="#666" />
							<Icon name="visibility-off" size={28} color="#666" />
						</CardHeader>
						<CardContent>
							<Title>Saldo disponível</Title>
							<Description>
								R$ 2.300,62
							</Description>
						</CardContent>
						<CardFooter>
							<Annotation>
								Tranferência de 100,00 recebida de Bianca Aguiar de Souza hoje às 12:22h
							</Annotation>
						</CardFooter>
					</Card>
				</PanGestureHandler>

			</Content>

			<Tabs translateY={translateY}/>
		</Container>
	)
}