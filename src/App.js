import React from 'react';
import { PDFViewer, Text } from '@react-pdf/renderer';
import { MyDocument } from "./pdf";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const data = require('./data.json');

const ItemsList = () => {

  return (
    <List sx={{ width: '45%', bgcolor: 'background.paper' }}>
      {
        data[0].questions.map(element =>
          <ListItem>
            <ListItemText primary={element.content} secondary="Jan 9, 2014" />
          </ListItem>
        )
      }
    </List>
  )
};

export const App = () => {
  return (
    <>
      <PDFViewer style={{
        width: "50%",
        height: "100vh"
      }}>
        <MyDocument/>
      </PDFViewer>
      <ItemsList />
    </>
  )
}