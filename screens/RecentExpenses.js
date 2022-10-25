import React from 'react';
import { View, Text, Stylesheet } from "react-native";
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

function RecentExpenses() {
  return (
    <ExpensesOutput expenseDuration='Last 7 days' />
  )
}

export default RecentExpenses
