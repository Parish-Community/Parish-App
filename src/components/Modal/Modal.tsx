import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RNModal from 'react-native-modal';

type ModalProps = {
  isVisible: boolean;
  children: React.ReactNode;
  [x: string]: any;
};

const Modal = ({ isVisible = false, children, ...props }: ModalProps) => {
  return (
    <RNModal
      isVisible={isVisible}
      animationInTiming={700}
      animationOutTiming={700}
      {...props}
    >
      {children}
    </RNModal>
  );
};

const ModalContainer = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.container}>{children}</View>
);

const ModalHeader = ({ title }: { title: string }) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
    <View
      style={{
        width: '100%',
        backgroundColor: '#C1C1C7',
        height: 1,
        marginTop: 12,
      }}
    />
  </View>
);

const ModalBody = ({ title }: { title: string }) => (
  <View style={styles.body}>
    <Text style={styles.textbody}>{title}</Text>
  </View>
);

// eslint-disable-next-line react/require-default-props
const ModalFooter = ({ children }: { children?: React.ReactNode }) => (
  <View style={styles.footer}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#163859',
    borderStyle: 'solid',
    padding: 16,
    maxWidth: 327,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#039855',
    marginTop: 16,
    fontWeight: 'bold',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    width: '100%',
  },

  textbody: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#636366',
    width: '100%',
  },
  footer: {
    marginTop: 24,
  },
});

Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
