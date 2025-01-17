import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';

const items = [
  'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHwy',
  'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fHwy',
  'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8Mg%3D%3D',
  'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHx8Mg%3D%3D',
  'https://images.unsplash.com/photo-1455218873509-8097305ee378?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5hdHVyZXxlbnwwfHwwfHx8Mg%3D%3D',
  'https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZXxlbnwwfHwwfHx8Mg%3D%3D',
  'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG5hdHVyZXxlbnwwfHwwfHx8Mg%3D%3D',
  'https://images.unsplash.com/photo-1497449493050-aad1e7cad165?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5hdHVyZXxlbnwwfHwwfHx8Mg%3D%3D',
  'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG5hdHVyZXxlbnwwfHwwfHx8Mg%3D%3D',
  'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG5hdHVyZXxlbnwwfHwwfHx8Mg%3D%3D',
];

export default function Example() {
  const itemsPerRow = 3;
  const rows = Array.from({ length: Math.ceil(items.length / 3) }).map(
    (_, rowIndex) => {
      // each row should have 3 items
      const row = Array.from({ length: itemsPerRow }).map((_, index) => {
        const itemIndex = rowIndex * itemsPerRow + index;
        return items[itemIndex] || undefined;
      });
      return row;
    },
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <FeatherIcon
                color="#1d1d1d"
                name="chevron-left"
                size={24} />
            </TouchableOpacity>
          </View>

          <Text numberOfLines={1} style={styles.headerTitle}>
            Gallery
          </Text>

          <View style={[styles.headerAction, { alignItems: 'flex-end' }]}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <FeatherIcon
                color="#1d1d1d"
                name="list"
                size={24} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.gallery}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={styles.galleryHeader}>
            <Text style={styles.galleryHeaderText}>
              You've given access to a select number of photos and videos.{' '}
              <Text style={styles.galleryHeaderAction}>
                Manage selected photos
              </Text>
            </Text>
          </TouchableOpacity>

          {rows.map((row, i) => (
            <View key={i} style={styles.galleryRow}>
              {row.map((item, j) => {
                if (!item) {
                  return <View style={styles.galleryItem} />;
                }

                return (
                  <TouchableOpacity
                    key={j}
                    onPress={() => {
                      // handle onPress
                    }}
                    style={styles.galleryItem}>
                    <Image
                      resizeMode="cover"
                      source={{ uri: item }}
                      style={styles.galleryImage} />
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#000',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: 'center',
  },
  /** Gallery */
  gallery: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  galleryHeader: {
    width: '100%',
    backgroundColor: '#f4f4f4',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  galleryHeaderText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
    color: '#1d1d1d',
  },
  galleryHeaderAction: {
    paddingLeft: 4,
    fontWeight: '600',
    color: '#266EF1',
  },
  galleryRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    margin: -2,
    marginBottom: 2,
  },
  galleryItem: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    padding: 2,
    height: 160,
  },
  galleryImage: {
    width: '100%',
    height: '100%',
  },
});