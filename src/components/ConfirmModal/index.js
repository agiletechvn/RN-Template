import React, { useState, forwardRef } from 'react';
import { Modal } from 'react-native';
import styles from './style';
import Text from '../Text';
import Button from '../Button';
import Box from '../Box';
import i18n from '@src/utils/i18n';
import { useImperativeHandle } from 'react';
import ImageIcon from '../ImageIcon';
import { useRef } from 'react';
import STYLES from '@src/styles';

export const useModal = () => {
  const modal = useRef();
  return [modal];
};

const ConfirmModal = forwardRef(({ visible }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setTitle] = useState();
  const [modalContent, setContent] = useState();
  const actionRef = useRef({});

  useImperativeHandle(ref, () => ({
    alert: ({ title, content, onConfirm, onCancel }) => {
      setTitle(title);
      setContent(content);
      actionRef.current.onConfirm = onConfirm;
      actionRef.current.onCancel = onCancel;

      setIsOpen(true);
    },
    confirm: () => {
      setIsOpen(true);
    },
    close: () => {
      setIsOpen(false);
    },
  }));

  const handleCancel = () => {
    setIsOpen(false);
    actionRef?.current?.onCancel && actionRef.current.onCancel();
  };

  const handleConfirm = () => {
    setIsOpen(false);
    actionRef?.current?.onConfirm && actionRef.current.onConfirm();
  };

  return (
    <Modal visible={isOpen} transparent>
      <Box
        flex={1}
        background={STYLES.light.blackTransparent}
        justify="center"
        align="center"
        padding={[0, 15]}
      >
        <Box
          background={'#ffffff'}
          width="100%"
          padding={15}
          style={styles.contentContainer}
        >
          <Box flexDirection="row" justify="flex-end" margin={[0, 0, 6, 0]}>
            <ImageIcon
              name="close"
              size={14}
              pressable
              onPress={() => {
                setIsOpen(false);
              }}
            />
          </Box>
          <Box align="center">
            <Text
              margin={[0, 0, 15, 0]}
              fontWeight="700"
              fontFamily="Prompt-Bold"
              fontSize={13}
              lineHeight={22}
            >
              {modalTitle ? modalTitle : '-'}
            </Text>
            <Text
              margin={[0, 0, 15, 0]}
              fontFamily="Prompt-Bold"
              fontSize={13}
              lineHeight={22}
            >
              {modalContent ? modalContent : '-'}
            </Text>
          </Box>
          <Box flexDirection="row">
            <Button
              flex={1}
              margin={[0, 0, 0, 8]}
              label={i18n.t('common_cancel')}
              onPress={handleCancel}
            />
            <Button
              flex={1}
              margin={[0, 8, 0, 0]}
              type="primary"
              label={i18n.t('common_ok')}
              onPress={handleConfirm}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
});

export default ConfirmModal;
