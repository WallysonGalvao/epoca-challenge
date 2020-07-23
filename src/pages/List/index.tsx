import React, { useEffect, useState, useCallback } from 'react';
import { ActivityIndicator, FlatList, TouchableHighlight } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Tweet from '../../components/Tweet';
import EmojiModal from '../../components/EmojiModal';

import twitterApi from '../../services/twitterApi';
import googleApi from '../../services/googleApi';

import { Container, Loading, Error } from './styles';

interface Tweet {
  id: string;
  text: string;
  retweet_count: string;
  favorite_count: string;
  user: {
    profile_image_url: string;
    name: string;
    screen_name: string;
  };
}

interface IParams {
  user: string;
}

const List: React.FC = () => {
  const tweetParams = useRoute();
  const { user } = tweetParams.params as IParams;

  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [error, setError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const [sentiment, setSentiment] = useState('slightly_smiling_face');

  const handleTweets = useCallback(async (screen_name: string) => {
    try {
      const { data } = await twitterApi.get('statuses/user_timeline.json', {
        params: { screen_name, count: 10 },
      });
      if (data) setTweets(data);
    } catch (err) {
      setError(err);
    }
  }, []);

  function analyzeSentiment({ score }: { score: number }): void {
    setModalVisible(!modalVisible);
    setLoading(false);

    let currentSentiment = '';
    if (score > 0.7) currentSentiment = 'slightly_smiling_face';
    else if (score >= 0.5) currentSentiment = 'neutral_face';
    else currentSentiment = 'pensive';

    setSentiment(currentSentiment);
  }

  async function handleTweet(content: string): Promise<void> {
    setLoading(true);
    const document = {
      content,
      type: 'PLAIN_TEXT',
    };

    const key = 'AIzaSyDCzM39e6bUEZcnUJ8x5sLJO7xYeqjUMrU';
    try {
      const { data } = await googleApi.post(
        `/documents:analyzeSentiment?key=${key}`,
        {
          document,
        },
      );

      if (data) analyzeSentiment(data.documentSentiment);
    } catch (err) {}
  }

  useEffect(() => {
    handleTweets(user);
    // handleTweet('Feliz!');
  }, [user, handleTweets]);

  return (
    <Container>
      {loading ? (
        <Loading testID="loading">
          <ActivityIndicator size="large" color="#0000ff" />
        </Loading>
      ) : (
        <EmojiModal
          modalVisible={modalVisible}
          sentiment={sentiment}
          setModalVisible={setModalVisible}
        />
      )}

      {tweets.length !== 0 ? (
        <FlatList
          data={tweets}
          keyExtractor={tweet => String(tweet.id)}
          renderItem={({ item }: { item: Tweet }) => (
            <TouchableHighlight
              key={item.id}
              onPress={() => handleTweet(item.text)}
              testID="tweet-button"
            >
              <Tweet tweet={item} />
            </TouchableHighlight>
          )}
        />
      ) : (
        <Error testID="error">Nenhum usuário encontrado...</Error>
      )}
    </Container>
  );
};

export default List;
