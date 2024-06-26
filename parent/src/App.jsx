
function App() {

  window.onload = function () {
    window.WeathearComponent('weather')
  }

  return (
    <>
      <div className={"border flex flex-col justify-center items-center"}>
        <p>I'm parent</p>
        <div id={'weather'}>
        </div>
      </div>

    </>
  )
}

export default App
