import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
const data = require('./data.json');

// const data = dataFromUser.reduce((r, a) => {
//   r[0].type = [...r[a.make] || [], a];
//   return r;
// }, {});
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
    padding: 6,
    borderRight: '2px solid black',
    borderLeft: '2px solid black',
    fontSize: '15',
  },
  middlleCellVar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 500,
    padding: 6,
    borderRight: '2px solid black',
    borderLeft: '2px solid black',
    fontSize: '15',
  },
  varCell: {
    width: 225,
    textAlign: 'center',
  },
  questionCell: {
    width: 400,
  },
  answerCell: {
    width: 50,
  },
  image: {
    width: 150,
    height: 'auto',
  },
  middlleCellBool: {
    flexDirection: 'row',
    width: 500,
    paddingLeft: 6,
    paddingRight: 6,
    borderRight: '2px solid black',
    borderLeft: '2px solid black',
    fontSize: '15',
  },
  boolQ:{
    width: 450,
  },
});

// Create Document Component
export const MyDocument = () => (
  <Document style={{margin: 0, padding: 0}}>
    <Page size="A4" style={styles.page}>
      <View>
        <Text>Disciplina: Fizica. Clasa: VII-a __. Nume prenume: ______________________. Data: ________.
          Punctaj total: 39. Punctaj acumulat: ____. Nota: ___________. Semnatura profesorului: ______
          Unitatea {data[0].questions[0].module}</Text>
        <Text>{'\n\n'}</Text>
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
        <Text >Enache Alic, profesor de fizica</Text>
      </View>
    </Page>
  </Document>
);
