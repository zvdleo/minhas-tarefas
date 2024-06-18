import { Provider } from 'react-redux'
import ListaDeTarefas from './containers/ListaDeTarefas'
import BarraLateral from './containers/BarraLateral'
import EstiloGlobal, { Container } from './styles'

import store from './store'
function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
