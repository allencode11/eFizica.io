import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import data from '../jsonData/data.json';

export const DocHeader = (str) => (
  <View>
    <View style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
      fontSize: 10,
      textAlign: 'center',
    }}>
      <Text>Disciplina: Fizica</Text>
      <Text>Data___________________ </Text>
      <Text>Clasa a VII-a </Text>
    </View>

    <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 10, fontSize: 12}}>
      <Text>Nume, prenume elev: __________________</Text>
      <Text>Punctaj total:_____ </Text>
      <Text>Punctaj acumulat:_____ </Text>
      <Text>Nota: _____</Text>
    </View>
    <View style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 5, fontSize: 12, color: 'red',
    }}>
      <Text>Nume, prenume profesor: __________________</Text>
      <Text>Semnatura ______________</Text>
    </View>
    <Text style={{ textAlign: 'center', fontSize: 12, marginBottom: 10 }}>{ 'Unitatea:' + data[0].module}</Text>

  </View>
)


