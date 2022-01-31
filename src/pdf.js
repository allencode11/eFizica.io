import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { DocHeader } from './document.components/DocHeader';
import { DocAuthor } from './document.components/DocAuthor';
import { DocTable } from './document.components/DocTable/DocTable';
import data from './jsonData/data.json';
import { styles } from './document.components/DocTable/DocTableStyles';

// Create Document Component
export const MyDocument = () => (
  <Document style={{margin: 0, padding: 0}}>
    <Page size="A4" style={styles.page}>
      <View>
        <DocHeader />

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.cellD}>Nr.</Text>
            <Text style={styles.middlleCellD}>Item</Text>
            <Text style={styles.cellD}>Scor</Text>
          </View>
          {
            data[0].questions.map(element =>
              <View style={styles.tableRow}>
                <Text style={styles.cell}>{parseInt(element.id) + 1}</Text>
                {
                  element.category === 'complete' ? (
                    <>
                      <Text style={styles.middlleCell}>{element.content.replaceAll('%', '________________ ')}</Text>
                      <Text style={styles.cell}>L 0 1 2 3 </Text>
                    </>
                  ) : element.category === 'corespondence' ? (
                    <>
                      <View style={styles.middlleCellVar}>
                        <Text style={styles.varCell}>{element.variables.replaceAll(',', '-\n')}</Text>
                        <Text style={styles.varCell}>{element.variant.replaceAll(' ', '-').replaceAll(',', '\n')}</Text>
                      </View>
                      <Text style={styles.cell}>L 0 1 2 3 4 </Text>
                    </>
                  ) : element.category === 'problem2' ? (
                    <>
                      <View style={styles.middlleCell}>
                        <Text>{element.content}</Text>
                        <Image
                          src={element.imageUrl}
                          style={styles.image}
                        />
                        <Text>{'\n\n\n\n'}</Text>
                      </View>
                      <Text style={styles.cell}>L 0 1 2 3 4 5 </Text>
                    </>
                  ) : element.category === 'problem1' ? (
                    <>
                      <View style={styles.middlleCell}>
                        <Text>{element.content}</Text>
                        <Text>{'\n\n\n\n\n\n'}</Text>
                      </View>
                      <Text style={styles.cell}>L 0 1 2 3</Text>
                    </>
                  ) : element.category === 'boolean' ? (
                    <>
                      <View style={styles.middlleCellVar}>
                        <Text style={styles.questionCell}>{element.content}</Text>
                        <Text style={styles.answerCell}> A F </Text>
                      </View>
                      <Text style={styles.cell}>L 0 1 2 3 </Text>
                    </>
                  ) : <Text>Err</Text>
                }
              </View>
            )
          }
        </View>

        <DocAuthor />
      </View>
    </Page>
  </Document>
);
