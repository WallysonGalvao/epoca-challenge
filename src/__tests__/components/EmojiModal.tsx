import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import EmojiModal from '../../components/EmojiModal';

describe('</EmojiModal>', () => {
  it('should be able to switch modal visible', async () => {
    const mockFn = jest.fn();

    const { getByTestId } = render(
      <EmojiModal
        modalVisible
        sentiment="slightly_smiling_face"
        setModalVisible={mockFn}
      />,
    );

    const button = getByTestId('button');
    fireEvent.press(button);

    expect(mockFn).toHaveBeenCalled();
  });
});
