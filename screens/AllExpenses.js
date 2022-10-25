import React from 'react';
import { View, Text, Stylesheet } from "react-native";
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

function AllExpenses() {
  return (
    <ExpensesOutput expenseDuration='Total'/>
  )
}

export default AllExpenses
