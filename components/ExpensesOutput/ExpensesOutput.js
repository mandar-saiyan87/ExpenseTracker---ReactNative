import React from 'react'
import { View, Text, StyleSheet, FlatList } from "react-native";
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../../constants/style';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    desc: 'shoes',
    amount: 500,
    date: new Date('2022-12-19')
  },
  {
    id: 'e2',
    desc: 'food',
    amount: 200,
    date: new Date('2022-11-19')
  },
  {
    id: 'e3',
    desc: 'cloths',
    amount: 100,
    date: new Date('2022-11-02')
  },
  {
    id: 'e4',
    desc: 'travel',
    amount: 200,
    date: new Date('2022-11-19')
  }
]

function ExpensesOutput({ expenses, expenseDuration }) {
  return (
    <>
      <View style={styles.container}>
        <ExpensesSummary expenses={DUMMY_EXPENSES} duration={expenseDuration} />
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </View>
    </>

  )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700
  }
})
