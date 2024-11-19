import { StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react';

import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';

export default function App() {
  const [pageNum, setPageNum] = useState(0);

  function switchPage(newPage) {
    console.log("change page: " + newPage);
    setPageNum(newPage);
  }

  let screen = <FirstPage changePage={switchPage}/>
  console.log("Screen Render");

  if(pageNum === 2) {
    screen = <SecondPage changePage={switchPage}/>
  }

  return (
    <SafeAreaView style={styles.container}>
      {screen}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
