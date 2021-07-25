import React, {useState} from 'react';
import {View, FlatList} from 'react-native';

import {Video} from '../../components/Video';

import {styles} from './styles';

const data = [
  {id: '1', title: 'Naruto - Episódio 1'},
  {id: '2', title: 'Naruto - Episódio 2'},
  {id: '3', title: 'Naruto - Episódio 3'},
  {id: '4', title: 'Naruto - Episódio 4'},
  {id: '5', title: 'Naruto - Episódio 5'},
  {id: '6', title: 'Naruto - Episódio 6'},
  {id: '7', title: 'Naruto - Episódio 7'},
  {id: '8', title: 'Naruto - Episódio 8'},
  {id: '9', title: 'Naruto - Episódio 9'},
  {id: '10', title: 'Naruto - Episódio 10'},
  {id: '11', title: 'Naruto - Episódio 11'},
  {id: '12', title: 'Naruto - Episódio 12'},
  {id: '13', title: 'Naruto - Episódio 13'},
  {id: '14', title: 'Naruto - Episódio 14'},
  {id: '15', title: 'Naruto - Episódio 15'},
];

export function VideosScreen() {
  const [queue, setQueue] = useState<string[]>([]);

  function handleSetQueue(videoId: string) {
    setQueue([...queue, videoId]);
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(_, index) => String(index)}
        renderItem={({item}) => (
          <Video data={item} onPress={() => handleSetQueue(item.id)} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
