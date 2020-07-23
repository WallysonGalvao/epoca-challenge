import styled from 'styled-components/native';

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const ModalView = styled.View`
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
`;

export const OpenButton = styled.TouchableHighlight`
  background-color: #2196f3;
  border-radius: 20px;
  padding: 10px;
  elevation: 2;
`;

export const TextStyle = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;
