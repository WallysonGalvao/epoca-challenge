import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
  background-color: #15202b;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 50px;
  color: #fff;
`;

export const Info = styled.Text`
  text-align: center;
  font-size: 20px;
  color: #fff;

  margin-top: 15px;
`;

export const SubInfo = styled.Text`
  text-align: center;
  font-size: 15px;
  color: #fff;

  margin-top: 15px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  /* padding: 20px; */
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#a4a4a4',
})`
  color: #fff;

  font-size: 18px;

  margin-bottom: 15px;

  border-bottom-color: #a4a4a4;
  border-bottom-width: 0.2px;
`;
