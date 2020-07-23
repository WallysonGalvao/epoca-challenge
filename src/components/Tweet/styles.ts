import styled from 'styled-components/native';

export const Container = styled.View`
  margin-horizontal: 15px;

  padding-right: 20px;

  border-bottom-color: #a4a4a4;
  border-bottom-width: 0.2px;

  flex-direction: row;
`;

export const Info = styled.View`
  margin-left: 10px;
`;

export const NameContainer = styled.View`
  flex-direction: row;
  margin-bottom: 5px;

  margin-top: 10px;
`;

export const Name = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ScreenName = styled.Text`
  color: #a4a4a4;
  margin-left: 5px;
`;

export const TweeText = styled.Text`
  color: #fff;
  padding-right: 15px;
`;

export const IconsContainer = styled.View`
  width: 250px;
  justify-content: space-between;
  flex-direction: row;

  margin-top: 15px;
  margin-bottom: 5px;
`;

export const IconContent = styled.View`
  flex-direction: row;
  align-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const IconText = styled.Text`
  color: #a4a4a4;
  margin-left: 5px;
`;

export const Avatar = styled.Image`
  border-radius: 50px;
  width: 48px;
  height: 48px;

  margin-top: 10px;
`;
