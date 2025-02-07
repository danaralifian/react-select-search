import { Select } from 'react-select-search-ui'

const OPTIONS = [
  { label: "Option 1", value: "option-1" },
  { label: "Option with icon", value: "option-with-icon" },
  { label: "Long Long Option 3", value: "option-3" },
  { label: "Long Long Long Option 4", value: "option-4" },
  { label: "Long Long Long Long Option 5", value: "option-5" },
  { label: "Long Long Long Long Long Optionn 6", value: "option-6" },
];

function App() {

  return (
    <>
      <Select
        label="Label"
        outlined
        id="dropdown"
        withSearch
        options={OPTIONS}
        onChange={(e) => console.log(e)}
        multiple
      />
    </>
  )
}

export default App
