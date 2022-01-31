import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { DocHeader } from './document.components/DocHeader';
import { DocAuthor } from './document.components/DocAuthor';
import { DocTable } from './document.components/DocTable/DocTable';
import data from './jsonData/data.json';
import rules from './jsonData/quest.json';
import { styles } from './document.components/DocTable/DocTableStyles';

// Create Document Component
export const MyDocument = () => (
  <Document style={{margin: 0, padding: 0}}>
    <Page size="A4" style={styles.page}>
      <View>
        <DocHeader />

        <DocTable />

        <DocAuthor />
      </View>
    </Page>
  </Document>
);
