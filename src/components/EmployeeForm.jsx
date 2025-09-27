import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEmployee, updateEmployee, fetchEmployees } from "../features/employees/employeesSlice";
import CountryDropdown from "../features/countries/countryDropdown";

export default function EmployeeForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ id: "", name: "", email: "", mobile: "", country: "", state: "", district: "" });
  const employees = useSelector((s) => s.employees.list || []);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: form.name,
      email: form.email,
      mobile: form.mobile,
      country: form.country,
      state: form.state,
      district: form.district,
    };

    if (form.id) {
      await dispatch(updateEmployee({ id: form.id, payload }));
    } else {
      await dispatch(createEmployee(payload));
    }

    setForm({ id: "", name: "", email: "", mobile: "", country: "", state: "", district: "" });
  };

  const handleEdit = (emp) => {
    setForm({
      id: emp.id,
      name: emp.name || "",
      email: emp.email || "",
      mobile: emp.mobile || "",
      country: emp.country || "",
      state: emp.state || "",
      district: emp.district || "",
    });
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>{form.id ? "Update Employee" : "Create Employee"}</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8, maxWidth: 600 }}>
        <input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input required placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input required placeholder="Mobile" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} />
        <div>
          <CountryDropdown value={form.country} onChange={(val) => setForm({ ...form, country: val })} />
        </div>
        <input placeholder="State" value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} />
        <input placeholder="District" value={form.district} onChange={(e) => setForm({ ...form, district: e.target.value })} />

        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit">{form.id ? "Update" : "Create"}</button>
          <button type="button" onClick={() => setForm({ id: "", name: "", email: "", mobile: "", country: "", state: "", district: "" })}>Clear</button>
        </div>
      </form>

      <hr />

      <h3>Quick edit from list</h3>
      <div style={{ maxHeight: 140, overflow: "auto", border: "1px solid #ddd", padding: 8 }}>
        {employees.map((e) => (
          <div key={e.id} style={{ display: "flex", justifyContent: "space-between", padding: 6, borderBottom: "1px solid #eee" }}>
            <div>
              <div style={{ fontWeight: 600 }}>{e.name}</div>
              <div style={{ fontSize: 12 }}>{e.email} • {e.mobile}</div>
            </div>
            <div>
              <button onClick={() => handleEdit(e)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
