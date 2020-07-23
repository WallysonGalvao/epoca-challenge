import React from 'react';
import { Modal } from 'react-native';
import Emoji from 'react-native-emoji';

import { CenteredView, ModalView, OpenButton, TextStyle } from './styles';

interface EmojiModalProps {
  modalVisible: boolean;
  sentiment: string;
  setModalVisible(modalVisible: boolean): void;
}

const EmojiModal: React.FC<EmojiModalProps> = ({
  modalVisible,
  sentiment,
  setModalVisible,
}) => {
  return (
    <CenteredView>
      <Modal animationType="slide" transparent visible={modalVisible}>
        <CenteredView>
          <ModalView>
            <Emoji name={sentiment} style={{ fontSize: 50 }} />

            <OpenButton
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              testID="button"
            >
              <TextStyle>Close</TextStyle>
            </OpenButton>
          </ModalView>
        </CenteredView>
      </Modal>
    </CenteredView>
  );
};

export default EmojiModal;
