import React from "react";
import EmployeesList from "./features/employees/EmployeesList";
import EmployeeForm from "./components/EmployeeForm";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Employee Management Multigenesys Assigment</h1>
      <EmployeeForm />
      <hr />
      <EmployeesList />
    </div>
  );
}
