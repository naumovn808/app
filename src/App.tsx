// import Button from './components/Button/Button';
// import Input from './components/Input/Input';
import { Routes, Route, Link } from 'react-router-dom';
import { Cart } from './pages/Cart/Cart';
import { Menu } from './pages/Menu/Menu';
import { Error } from './pages/Error/Error';

function App() {

  return (
    <>
      {/* <Button appearence='big' >кнопка</Button>
      <Button >кнопка</Button>
      <Input isValid={false}/> */}
      <div>
        {/* <a href="/">меню</a>
        <a href="/cart">корзина</a> */}
        <Link to='/'>Меню</Link>
        <Link to='/cart'>Корзина</Link>
      </div>

      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>

    </>
  )
}

export default App
