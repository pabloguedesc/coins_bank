import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
    padding: 30px 0 20px;
    align-items: center;
`;

export const Top = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
    font-size: 18px;
    color: ${Colors.white};
    font-weight: bold;
    margin-left: 8px;
`;