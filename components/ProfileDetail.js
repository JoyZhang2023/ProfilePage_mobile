import { StyleSheet, ScrollView, Text } from "react-native";

export default function ProfileDetail () {
    return (
        <ScrollView style={{top:100, marginBottom:140,}}>
        <Text style={styles.mainContent}>
          Name: Xinran Zhang
          {"\n"}
          {"\n"}
        </Text>
        <Text style={styles.mainContent}>
          Placeholder text
        </Text>
        <Text style={styles.mainContent}>
          Want it to be long enough to scroll
        </Text>
        <Text style={styles.mainContent}>
          En.... Let me think about it.
          ....
          ...
          ..
          .
        </Text>
        <Text style={styles.mainContent}>
          Let read some articles.
          {"\n"}
        </Text>
        <Text style={styles.mainContent}>
          How oftern you you actually need to bath your dog?
          {"\n"}
        </Text>
        <Text style={styles.mainContent}>
        The answer varies, depending on breed, lifestyle and coat. Even veterinarians and experts disagree on how often you should bathe your pup but the American Society for the Prevention of Cruelty to Animalsrecommends a baseline of once every three months. 
        </Text>
        <Text style={styles.mainContent}>
          {"\n"}
          The most tried and true answer to this question is personal to your dog and their needs. Do they spend their days frolicking in the grass and playing in the mud? Are they prone to run-ins with skunks? Or are they lap dogs who would rather cozy up inside?
        </Text>
        <Text style={styles.mainContent}>
          {"\n"}
          It’s also contingent on their hair length. According to BeChewy, medium and long coat dogs should bathe every four to six weeks, and owners of dogs with short coats should bathe their pets somewhere between every month and every three months.
        </Text>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContent: {
        fontSize: 16,
        color: '#ccc',
      },
});