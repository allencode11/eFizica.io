import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    paddingRight: 25,
    paddingLeft: 50,
    paddingTop: 30,
    paddingBottom: 30,
  },
  table: {
    flexDirection: 'column',
    border: '1px solid black',
    padding: 0,
  },
  tableRow: {
    flexDirection: 'row',
    border: '1px solid black',
    justifyContent: 'center',
    alignContent: 'center',
  },
  cellD: {
    width: 60,
    textAlign: 'center',
  },
  cell: {
    width: 60,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: '15',
    textAlign: 'center',
  },
  middlleCellD: {
    width: 500,
    textAlign: 'center',
    borderRight: '2px solid black',
    borderLeft: '2px solid black',
  },
  middlleCell: {
    width: 500,
    paddingLeft: 6,
    paddingRight: 6,
    borderRight: '2px solid black',
    borderLeft: '2px solid black',
    fontSize: '15',
  }
});

// Create Document Component
export const MyDocument = () => (
  <Document style={{margin: 0, padding: 0}}>
    <Page size="A4" style={styles.page}>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.cellD}>Nr.</Text>
          <Text style={styles.middlleCellD}>Item</Text>
          <Text style={styles.cellD}>Scor</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.cell}>1.</Text>
          <Text style={styles.middlleCell}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </Text>
          <Text style={styles.cell}>L 0 1 2 3 4 5</Text>
        </View>
      </View>

    </Page>
  </Document>
);
