import React from 'react';
import { Text, View } from '@react-pdf/renderer';

export const DocHeader = () => (
  <View>
    <View style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
      fontSize: 16,
    }}>
      <Text>Disciplina: Fizica</Text>
      <Text>Clasa a VII-a </Text>
    </View>

    <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 10, fontSize: 12}}>
      <Text>Nume, prenume student: __________________</Text>
      <Text>Punctaj acumulat:_____ </Text>
      <Text>Nota: _____</Text>
    </View>

    <View style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10, fontSize: 12, color: 'red',
    }}>
      <Text>Nume, prenume profesor: __________________</Text>
      <Text>Semnatura ______________</Text>
    </View>
  </View>
)


