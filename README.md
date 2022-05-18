**useLayoutEffect** es igual al useEffect pero se va a ejecutar si el componente HTML ya está renderizado

**UseReducer**

```
const [state, dispatch] = useReducer(reducer, state, init)

```

_reducer_ es una funcion pura, no debe tener intervención con nada externo.
ejemplo: const suma = (a:number , b: number) => return a + b
como puedo ver, no tiene ninguna interaccion con el mundo externo, se ejecuta y devuelve un rdo.
las acciones van a tener un type y opcional un payload.
En el ejemplo podemos ver, como el estado son tres en realidad:

```
const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};
```

_state_ es mi initialState
_init_ lo utilizo si quiero llevar a cabo un lazyLoad , o carga perezosa
