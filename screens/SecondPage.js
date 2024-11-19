import { StyleSheet, Text } from "react-native";
import MainButton from "../components/MainButton";
function SecondPage(props) {
  return (
    <MainButton onPress={props.changePage}>Home!</MainButton>
  );
}

export default SecondPage;

const styles = StyleSheet.create({

});
