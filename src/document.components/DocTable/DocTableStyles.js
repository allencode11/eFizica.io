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