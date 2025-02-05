import { Select } from 'react-select-search-ui'

function App() {

  return (
    <>
      <Select
        label="Label"
        outlined
        id="dropdown"
        withSearch
        options={[]}
        onChange={(e) => console.log(e)}
        multiple
        portal
      />
    </>
  )
}

export default App
