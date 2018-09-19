import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseDashboardPage = () => (
  <div>
    Expense Dashboard Component
    <Link to="/edit/1">Edit 1</Link>
    <Link to="/edit/2">Edit 2</Link>
  </div>
);

export default ExpenseDashboardPage;
