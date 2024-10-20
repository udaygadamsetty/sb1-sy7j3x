import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const sampleCandidates = [
  { id: '1', name: 'John Doe', title: 'Senior React Developer', location: 'Remote' },
  { id: '2', name: 'Jane Smith', title: 'UX Designer', location: 'New York, NY' },
  { id: '3', name: 'Mike Johnson', title: 'Data Scientist', location: 'San Francisco, CA' },
];

const CandidatesScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.candidateItem}>
      <Text style={styles.candidateName}>{item.name}</Text>
      <Text style={styles.candidateTitle}>{item.title}</Text>
      <Text style={styles.candidateLocation}>{item.location}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Candidates</Text>
      <FlatList
        data={sampleCandidates}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a202c',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  candidateItem: {
    backgroundColor: '#2d3748',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  candidateName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  candidateTitle: {
    fontSize: 16,
    color: '#a0aec0',
  },
  candidateLocation: {
    fontSize: 14,
    color: '#718096',
  },
});

export default CandidatesScreen;