import { StyleSheet, Text, View, TextInput } from "react-native";
import React from 'react';

export default function VisitorCommemt() {
    return (
        <View>
            <TextInput
                theme={{color: { onSurface: '#fff'}}}
                mode='outlined'
                style={styles.input}
                editable
                placeholder="visitor name"
                placeholderTextColor={'#fff'}
                
            />
            <TextInput
                style={styles.input}
                editable
                multiline
                numberOfLines={4}
                maxLength={40}
                placeholder="Leave your comment"
                placeholderTextColor={'#fff'}
                
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 8,
        bottom:30,
        borderWidth: 1,
        padding:10,
        fontSize: 16,
        color: '#ccc',
        borderColor:'#ccc',
      },
});