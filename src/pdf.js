import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { DocHeader } from './document.components/DocHeader';
import { DocAuthor } from './document.components/DocAuthor';
import { DocTable } from './document.components/DocTable/DocTable';
import data from './jsonData/data.json';
import rules from './jsonData/quest.json';

Font.register({
    family: "Roboto",
    fonts:[
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
        fontWeight: 'bold',
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
        fontWeight: 'normal',
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
        fontWeight: 'light',
      }
    ]
})

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
    fontSize: '12',
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
    textAlign: 'center',
  },
  midlleCellD: {
    width: 500,
    textAlign: 'center',
    borderRight: '2px solid black',
    borderLeft: '2px solid black',
  },
  midlleCell: {
    width: 500,
    padding: 6,
    borderRight: '2px solid black',
    borderLeft: '2px solid black',
  },
  midlleCellVar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 500,
    padding: 6,
    borderRight: '2px solid black',
    borderLeft: '2px solid black',
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
  midlleCellBool: {
    flexDirection: 'row',
    width: 500,
    paddingLeft: 6,
    paddingRight: 6,
    borderRight: '2px solid black',
    borderLeft: '2px solid black',
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
        <DocHeader />

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.cellD}>Nr.</Text>
            <Text style={styles.midlleCellD}>Item</Text>
            <Text style={styles.cellD}>Scor</Text>
          </View>
          {
            data[0].questions.map(element =>
              <View style={styles.tableRow}>
                <Text style={styles.cell}>{parseInt(element.id) + 1}</Text>
                {
                  element.category === 'complete' ? (
                    <>
                      <View style={styles.midlleCell}>
                        {
                          rules.filter(ruleElement => ruleElement.name === 'complete').map(item => (
                            <Text style={{fontFamily: 'Roboto', fontWeight: 'bold', marginBottom: 6}}>{item.rule}</Text>
                          ))
                        }
                        <Text style={{fontFamily: 'Roboto', fontWeight: 'normal'}}>{element.content.replaceAll('%', '________________ ')}</Text>
                      </View>
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
