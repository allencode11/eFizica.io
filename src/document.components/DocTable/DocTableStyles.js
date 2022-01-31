import { StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
    family: "RobotoBold",
    src:
      "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
    fontWeight: 'bold',
  },
  {
    family: "RobotoNormal",
    src:
      "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-normal-webfont.ttf",
    fontWeight: 'normal',
  },
  {
    family: "RobotoLight",
    src:
      "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
    fontWeight: 'light',
  });

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