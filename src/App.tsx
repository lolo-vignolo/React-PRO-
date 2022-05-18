import Counter from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import CounterEffect from './bases/CounterEffect';
import CounterHook from './bases/CounterHook';
// import { CounterReducerComponent } from './bases/CounterReducerComponent';
import { CounterReducerNew } from './counter.reducer/CounterReducer';

function App() {
  return (
    <>
      <h1>bases</h1>
      <hr />
      <Counter initialValue={15} />
      <CounterBy />
      <hr />
      <CounterEffect />
      <hr />
      <CounterHook />
      <hr />
      {/* <CounterReducerComponent /> */}

      <CounterReducerNew />
    </>
  );
}

export default App;
