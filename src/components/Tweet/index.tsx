import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Avatar,
  Info,
  NameContainer,
  Name,
  ScreenName,
  TweeText,
  IconsContainer,
  IconContent,
  IconText,
} from './styles';

interface TweetProps {
  tweet: {
    id: string;
    text: string;
    retweet_count?: string;
    favorite_count?: string;
    user: {
      profile_image_url: string;
      name: string;
      screen_name: string;
    };
  };
}

const Tweet: React.FC<TweetProps> = ({ tweet }) => (
  <Container>
    <Avatar source={{ uri: tweet.user.profile_image_url }} />
    <Info>
      <NameContainer>
        <Name>{tweet.user.name}</Name>
        <ScreenName>@{tweet.user.screen_name}</ScreenName>
      </NameContainer>

      <TweeText>{tweet.text}</TweeText>

      <IconsContainer>
        <IconContent>
          <Icon name="message-square" size={15} color="#a4a4a4" />
          <IconText />
        </IconContent>
        <IconContent>
          <Icon name="repeat" size={15} color="#a4a4a4" />
          {!!tweet.retweet_count && <IconText>{tweet.retweet_count}</IconText>}
        </IconContent>
        <IconContent>
          <Icon name="heart" size={15} color="#a4a4a4" />
          {!!tweet.favorite_count && (
            <IconText>{tweet.favorite_count}</IconText>
          )}
        </IconContent>
        <IconContent>
          <Icon name="bar-chart-2" size={15} color="#a4a4a4" />
        </IconContent>
      </IconsContainer>
    </Info>
  </Container>
);

export default Tweet;
