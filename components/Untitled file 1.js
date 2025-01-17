import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';

const countries = [
  { id: 'US', name: 'United States' },
  { id: 'GB', name: 'United Kingdom' },

  { id: 'AF', name: 'Afghanistan' },
  { id: 'AL', name: 'Albania' },
  { id: 'DZ', name: 'Algeria' },
  { id: 'AS', name: 'American Samoa' },
  { id: 'AD', name: 'Andorra' },
  { id: 'AO', name: 'Angola' },
  { id: 'AI', name: 'Anguilla' },
  { id: 'AQ', name: 'Antarctica' },
  { id: 'AG', name: 'Antigua and Barbuda' },
  { id: 'AR', name: 'Argentina' },
  { id: 'AM', name: 'Armenia' },
  { id: 'AW', name: 'Aruba' },
  { id: 'AU', name: 'Australia' },
  { id: 'AT', name: 'Austria' },

  // other countries
];

export default function Example() {
  const [value, setValue] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      <View style={styles.header}>
        <View style={styles.headerAction}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <FeatherIcon
              color="#000"
              name="arrow-left"
              size={24} />
          </TouchableOpacity>
        </View>

        <Text numberOfLines={1} style={styles.headerTitle}>
          Select Country
        </Text>

        <View style={[styles.headerAction, { alignItems: 'flex-end' }]} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Country of Residence</Text>

          <View style={styles.sectionBody}>
            {countries.map(({ id, name }, index, arr) => {
              const isActive = value === index;

              return (
                <View
                  key={id}
                  style={[
                    styles.rowWrapper,
                    index === 0 && styles.rowFirst,
                    index === arr.length - 1 && styles.rowLast,
                  ]}>
                  <TouchableOpacity
                    onPress={() => {
                      setValue(index);
                    }}
                    style={styles.row}>
                    <Image
                      alt={`Flag of ${name}`}
                      style={styles.rowImage}
                      source={{
                        uri: `https://flagsapi.com/${id}/flat/64.png`,
                      }} />

                    <Text style={styles.rowLabel}>{name}</Text>

                    <View style={styles.rowSpacer} />

                    {isActive && (
                      <FeatherIcon
                        color="#3C81F0"
                        name="check"
                        size={19} />
                    )}
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
  },
  /** Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
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
  /** Section */
  section: {
    paddingVertical: 12,
  },
  sectionTitle: {
    margin: 8,
    marginLeft: 12,
    fontSize: 13,
    letterSpacing: 0.33,
    fontWeight: '500',
    color: '#a69f9f',
    textTransform: 'uppercase',
  },
  sectionBody: {
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  /** Row */
  row: {
    height: 44,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 12,
  },
  rowWrapper: {
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  rowLast: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  rowImage: {
    width: 32,
    height: 20,
    borderRadius: 4,
    marginRight: 12,
  },
  rowLabel: {
    fontSize: 16,
    letterSpacing: 0.24,
    color: '#000',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});