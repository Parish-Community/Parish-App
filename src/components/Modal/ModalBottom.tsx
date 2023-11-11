import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import RNModal from 'react-native-modal';

type ModalBottomProps = {
  isVisible: boolean;
  children: React.ReactNode;
  [x: string]: any;
};

const ModalBottom = ({
  isVisible = false,
  children,
  ...props
}: ModalBottomProps) => {
  return (
    <RNModal
      isVisible={isVisible}
      animationInTiming={700}
      animationOutTiming={700}
      {...props}
      style={styles.bottomModalView}
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

// eslint-disable-next-line react/require-default-props
const ModalBody = ({ children }: { children?: React.ReactNode }) => (
  <View style={styles.body}>{children}</View>
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
    alignSelf: 'center',
    width: '100%',
    height: 520,
  },
  bottomModalView: {
    justifyContent: 'flex-end',
    margin: 0,
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
    flex: 4,
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
    flex: 1,
    marginBottom: 24,
  },
});

ModalBottom.Header = ModalHeader;
ModalBottom.Container = ModalContainer;
ModalBottom.Body = ModalBody;
ModalBottom.Footer = ModalFooter;

export default ModalBottom;
