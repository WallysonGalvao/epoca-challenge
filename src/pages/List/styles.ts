import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #15202b;
`;

export const Loading = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;

export const Error = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 30px;
  color: #fff;
`;
