export default function ({ mode, label, value, onChange, id, options }) {
  switch (mode) {
    case "input":
      return (
        <label>
          {label}
          <input type={id} value={value} onChange={onChange} />
        </label>
      );
    case "radio":
      return (
        <label>
          {label}
          <input
            type="radio"
            name={id}
            value={options[0]}
            onChange={onChange}
          />{" "}
          {options[0].toUpperCase()}
          <input
            type="radio"
            name={id}
            value={options[1]}
            onChange={onChange}
          />
          {options[1].toUpperCase()}
        </label>
      );
    case "checkbox":
      return (
        <label>
          {label}
          <input type="checkbox" checked={value} onChange={onChange} />
        </label>
      );
    case "select":
      return (
        <label>
          {label}
          <select value={value} onChange={onChange}>
            {options.map((opt, i) => {
              return (
                <option key={`opt${i}`} value={opt}>
                  {opt}
                </option>
              );
            })}
          </select>
        </label>
      );
  }
}
