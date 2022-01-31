import { StyleSheet, Font } from '@react-pdf/renderer';

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

export const styles = StyleSheet.create({
  page: {
    paddingRight: 25,
    paddingLeft: 50,
    paddingTop: 30,
    paddingBottom: 30,
    fontFamily: 'Roboto',
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
    fontSize: '15',
  },
  cell: {
    width: 60,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    fontSize: '15',
    fontFamily: 'Roboto',
    fontWeight: 'light',
  },
  middleCellD: {
    width: 500,
    textAlign: 'center',
    borderRight: '2px solid black',
    borderLeft: '2px solid black',
    fontSize: '15',
  },
  middleCell: {
    width: 500,
    padding: 6,
    borderRight: '2px solid black',
    borderLeft: '2px solid black',
  },
  middleCellVar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 400,
    padding: 6,
    alignSlef: 'center'
  },
  varCell: {
    width: 225,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  questionCell: {
    width: 400,
    fontFamily: 'Roboto',
  },
  answerCell: {
    width: 50,
  },
  image: {
    width: 150,
    height: 'auto',
  },
  middleCellBool: {
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
  condition: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginBottom: 6
  },
  content: {
    fontFamily: 'Roboto',
    fontWeight: 'normal'
  }
});