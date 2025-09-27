import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "./countriesSlice";

export default function CountryDropdown({ value, onChange }) {
  const dispatch = useDispatch();
  const countries = useSelector((s) => s.countries.list || []);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Select Country</option>
      {countries.map((c, i) => {
        const label = typeof c === "string" ? c : c.name || c.label || JSON.stringify(c);
        const key = typeof c === "string" ? c : c.code || i;
        return <option key={key} value={label}>{label}</option>;
      })}
    </select>
  );
}
