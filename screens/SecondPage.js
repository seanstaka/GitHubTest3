import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
function SecondPage(props) {
  return (
    <View>
      <Text>Adding Git3</Text>
      <MainButton onPress={props.changePage}>Home!</MainButton>
    </View>
  );
}

export default SecondPage;

const styles = StyleSheet.create({});
