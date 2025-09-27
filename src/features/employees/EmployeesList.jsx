import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees, deleteEmployee } from "./employeesSlice";
import ConfirmDialog from "../../components/confirmDialog";

export default function EmployeesList() {
  const dispatch = useDispatch();
  const employees = useSelector((s) => s.employees.list || []);
  const status = useSelector((s) => s.employees.status);
  const [deleteId, setDeleteId] = useState(null);
  const [query, setQuery] = useState({ text: "" });

  useEffect(() => {
    if (status === "idle") dispatch(fetchEmployees());
  }, [dispatch, status]);

  const handleDelete = (id) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    dispatch(deleteEmployee(deleteId));
    setDeleteId(null);
  };

  const filtered = employees.filter((e) => {
    const q = query.text.trim().toLowerCase();
    if (!q) return true;
    return (
      (e.name || "").toLowerCase().includes(q) ||
      (e.email || "").toLowerCase().includes(q) ||
      (e.mobile || "").toLowerCase().includes(q) ||
      (e.country || "").toLowerCase().includes(q)
    );
  });

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <input
          placeholder="Search name, email, mobile, country..."
          value={query.text}
          onChange={(e) => setQuery({ text: e.target.value })}
          style={{ padding: 8, width: "60%" }}
        />
      </div>

      <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "left" }}>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.mobile}</td>
              <td>{emp.country}</td>
              <td>
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr><td colSpan="5">No employees found</td></tr>
          )}
        </tbody>
      </table>

      {deleteId && (
        <ConfirmDialog
          message="Are you sure to delete this employee?"
          onConfirm={confirmDelete}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </div>
  );
}
