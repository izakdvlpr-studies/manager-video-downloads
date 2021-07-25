import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';

interface Item {
  id: string;
  title: string;
}

interface VideoProps {
  data: Item;
  onPress: () => void;
}

export function Video({data, onPress}: VideoProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{data.title}</Text>

        <MaterialIcons name="file-download" size={25} color="#FFFFFF" />
      </View>
    </TouchableOpacity>
  );
}
