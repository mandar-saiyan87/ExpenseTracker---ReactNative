import React from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";

function ExpensesList({ expenses }) {

  function renderExpenseItem(itemData) {
    return (
      <>
        <Text>{itemData.item.desc}</Text>
      </>
    )
  }

  return (
    <>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </>
  )
}

export default ExpensesList
