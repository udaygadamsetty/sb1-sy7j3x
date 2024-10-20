import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const sampleJobs = [
  { id: '1', title: 'Senior React Developer', company: 'TechCorp', location: 'Remote' },
  { id: '2', title: 'UX Designer', company: 'DesignHub', location: 'New York, NY' },
  { id: '3', title: 'Data Scientist', company: 'DataWorks', location: 'San Francisco, CA' },
];

const JobPostsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.jobItem}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.jobCompany}>{item.company}</Text>
      <Text style={styles.jobLocation}>{item.location}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Job Posts</Text>
      <FlatList
        data={sampleJobs}
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
  jobItem: {
    backgroundColor: '#2d3748',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  jobCompany: {
    fontSize: 16,
    color: '#a0aec0',
  },
  jobLocation: {
    fontSize: 14,
    color: '#718096',
  },
});

export default JobPostsScreen;