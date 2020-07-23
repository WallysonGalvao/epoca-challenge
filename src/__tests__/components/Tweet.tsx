import React from 'react';
import { render } from '@testing-library/react-native';

import Tweet from '../../components/Tweet';

describe('</Tweet>', () => {
  it('should be able to render Tweet', async () => {
    const tweet = {
      id: '',
      text: '',
      retweet_count: '1',
      favorite_count: '1',
      user: {
        profile_image_url: '',
        name: 'wallyson',
        screen_name: '',
      },
    };

    const { getByText } = render(<Tweet tweet={tweet} />);

    expect(getByText('wallyson')).toBeTruthy();
  });

  it('should be able to render Tweet without retweet_count and favorite_count', async () => {
    const tweet = {
      id: '',
      text: '',
      retweet_count: '',
      favorite_count: '',
      user: {
        profile_image_url: '',
        name: 'wallyson',
        screen_name: '',
      },
    };

    const { getByText } = render(<Tweet tweet={tweet} />);

    expect(getByText('wallyson')).toBeTruthy();
  });
});
