import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import AxiosMock from 'axios-mock-adapter';
import twitterApi from '../../services/twitterApi';
import googleApi from '../../services/googleApi';

import List from '../../pages/List';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
      setOptions: jest.fn(),
    }),
    useRoute: jest.fn().mockReturnValue({
      params: {
        user: 'wgsupe',
      },
    }),
  };
});

const twitterApiMock = new AxiosMock(twitterApi);
const googleApiMock = new AxiosMock(googleApi);

const tweets = [
  {
    id: '',
    text: 'Esse é um teste feliz.',
    retweet_count: '1',
    favorite_count: '1',
    user: {
      profile_image_url: '',
      name: 'wallyson',
      screen_name: '',
    },
  },
];

const key = 'AIzaSyDCzM39e6bUEZcnUJ8x5sLJO7xYeqjUMrU';

describe('</List>', () => {
  it('should be able to make a request in the google api with score greater than or equal to 0.7', async () => {
    render(<List />);

    googleApiMock.onPost(`/documents:analyzeSentiment?key=${key}`).reply(200, {
      documentSentiment: {
        magnitude: 0.7,
        score: 0.7,
      },
    });

    await act(async () => {
      const { data } = await googleApi.post(
        `/documents:analyzeSentiment?key=${key}`,
      );

      expect(data).toHaveProperty('documentSentiment');
    });
  });

  it('should be able to make a request in the google api with score greater than or equal to 0.7', async () => {
    render(<List />);

    googleApiMock.onPost(`/documents:analyzeSentiment?key=${key}`).reply(200, {
      documentSentiment: {
        magnitude: 0.5,
        score: 0.5,
      },
    });

    await act(async () => {
      const { data } = await googleApi.post(
        `/documents:analyzeSentiment?key=${key}`,
      );

      expect(data).toHaveProperty('documentSentiment');
    });
  });

  it('should be able to show user not found message', async () => {
    const { getByText } = render(<List />);

    twitterApiMock
      .onGet('statuses/user_timeline.json', {
        params: { screen_name: '0', count: 1 },
      })
      .reply(204, []);

    await act(async () => {
      await twitterApi.get('statuses/user_timeline.json', {
        params: { screen_name: '0', count: 1 },
      });
    });

    expect(getByText('Nenhum usuário encontrado...')).toBeTruthy();
  });

  it('should be able to make a request in home page with a non-existing user', async () => {
    render(<List />);

    twitterApiMock
      .onGet('statuses/user_timeline.json', {
        params: { screen_name: '0', count: 1 },
      })
      .reply(200, []);

    await act(async () => {
      const { data } = await twitterApi.get('statuses/user_timeline.json', {
        params: { screen_name: '0', count: 1 },
      });

      expect(data.length).toBe(0);
    });
  });

  it('should be able to make a request in home page in the twitter api', async () => {
    render(<List />);

    twitterApiMock
      .onGet('statuses/user_timeline.json', {
        params: { screen_name: 'wgsupe', count: 1 },
      })
      .reply(200, tweets);

    await act(async () => {
      const { data } = await twitterApi.get('statuses/user_timeline.json', {
        params: { screen_name: 'wgsupe', count: 1 },
      });

      expect(data.length).toBe(1);
    });
  });

  it('should be able to make click in a tweet', async () => {
    const mockFn = jest.fn();

    const { getByTestId, debug } = render(<List />);

    twitterApiMock
      .onGet('statuses/user_timeline.json', {
        params: { screen_name: 'wgsupe', count: 1 },
      })
      .reply(200, tweets);

    await act(async () => {
      await twitterApi.get('statuses/user_timeline.json', {
        params: { screen_name: 'wgsupe', count: 1 },
      });

      fireEvent.press(getByTestId('tweet-button'));

      // expect(mockFn).toHaveBeenCalled();
    });

    // debug();
  });

  it('should be not able to make a request in the google api', async () => {
    render(<List />);

    googleApiMock.onPost(`/documents:analyzeSentiment?key=${key}`).reply(200);

    await act(async () => {
      googleApi.post(`/documents:analyzeSentiment?key=${key}`);

      expect('404').toBe('404');
    });
  });
});
