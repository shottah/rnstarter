import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {restartApp} from 'src/utils/restart';

const SHOW_RESTART_BUTTON_TIMEOUT = 10000;

interface State {
  showRestartButton?: boolean;
}

type Props = {} & State;

export const AppLoading = ({showRestartButton}: Props) => {
  const [showButton, setShowButton] = useState<boolean>(!!showRestartButton);

  useEffect(() => {
    const pid = setTimeout(toggleRestartButton, SHOW_RESTART_BUTTON_TIMEOUT);
    console.log(pid);
    return () => {
      clearTimeout(pid);
    };
  }, []);

  const toggleRestartButton = () => {
    setShowButton(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        {showButton && (
          <TouchableOpacity onPress={restartApp}>
            <Text>Restart</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  button: {
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
});
