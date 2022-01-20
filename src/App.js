import React from 'react';
import { PDFViewer, Text } from '@react-pdf/renderer';
import { MyDocument } from "./pdf";

export const App = () => {
  return (
    <>
      <PDFViewer style={{
        width: "100%",
        height: "100vh"
      }}>
        <MyDocument/>
      </PDFViewer>
    </>
  )
}