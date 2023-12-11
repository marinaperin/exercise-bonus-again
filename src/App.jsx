import { useState } from "react";
import "./App.css";
import CustomForm from "./CustomForm";

function App() {
  const [formData, setFormData] = useState([
    {
      id: "user-name",
      label: "User Name",
      value: "",
      mode: "input",
    },
    {
      id: "sex",
      label: "Sex",
      value: "",
      mode: "radio",
      options: ["m", "f"],
    },
    {
      id: "password",
      label: "Password",
      value: "",
      mode: "input",
    },
    {
      id: "email",
      label: "Email",
      value: "",
      mode: "input",
    },
    {
      id: "checkbox",
      label: "Privacy",
      value: false,
      mode: "checkbox",
    },
    {
      id: "select",
      label: "Favorite Color",
      value: "Blue",
      mode: "select",
      options: ["Blue", "Red", "Green"],
    },
  ]);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formData);
        }}
      >
        {formData.map((obj, i) => {
          const { id, label, value, mode, options } = obj;
          const onChangeVal = mode === "checkbox" ? "checked" : "value";
          return (
            <CustomForm
              key={id}
              id={id === "user-name" ? "text" : id}
              label={label}
              value={value}
              mode={mode}
              options={options}
              onChange={(e) =>
                setFormData(() => {
                  const newFormData = structuredClone(formData);
                  newFormData[i].value = e.target[onChangeVal];
                  return newFormData;
                })
              }
            />
          );
        })}
        <button
          onClick={() => {
            setIsClicked(true);
          }}
        >
          Submit
        </button>
      </form>

      {isClicked && (
        <div>
          <ul>
            {formData.map((obj) => {
              const { label } = obj;
              if (obj.value === true) {
                obj.value = "yes";
              } else if (obj.value === false) {
                obj.value = "no";
              } else {
                obj.value = obj.value;
              }

              return (
                <li key={label}>
                  <span>
                    {label}: {obj.value}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
