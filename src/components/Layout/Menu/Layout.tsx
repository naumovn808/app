import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../Button/Button';
import cn from 'classnames';


export function Layout() {
    return <>
        <div className={styles['layout']}>
            <div className={styles['sidebar']}>
                <div className={styles['user']}>
                    <img className={styles['avatar']} src="./avatar.png" alt="аватар" />
                    <h3 className={styles['name']}>Никита Наумов</h3>
                    <span className={styles['mail']}>naumovn808@gmail.com</span>
                </div>
                <div className={styles['menu']}>
                    <NavLink to={'/'} className={({ isActive }) => cn(styles['link'], {
                        [styles['active']]: isActive
                    })}>
                        <img src="./menu.svg" alt="иконка меню" />
                        Меню
                    </NavLink>
                    <NavLink to={'./cart'} className={({ isActive }) => cn(styles['link'], {
                        [styles['active']]: isActive
                    })}>
                        <img src="./cart.svg" alt="иконка корзины" />
                        Корзина
                    </NavLink>
                </div>
                <Button className={styles['exit']}>
                    <img src="./exit.svg" alt="иконка выхода" />
                    Выход
                </Button>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    </>
}