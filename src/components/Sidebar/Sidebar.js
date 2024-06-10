import React, { useState } from 'react'
import {
  LogoIcon,
  ChartIcon,
  ImagesIcon,
  GroupIcon,
  LogOutIcon,
  MessageIcon,
  ListIcon,
  UserIcon,
  CheckListIcon,
  CashIcon,
  CoinIcon
} from '../../assets/icons/Icons'
import s from './style.module.css'

const Sidebar = () => {
  const navigationItems = [
    { icon: <ChartIcon />, title: 'Аналитика', path: '/' },
    { icon: <UserIcon />, title: 'Профиль', path: '/' },
    { icon: <CheckListIcon />, title: 'Модерация', path: '/' },
    { icon: <MessageIcon />, title: 'Чаты', path: '/' },
    { icon: <ImagesIcon />, title: 'Баннеры', path: '/' },
    { icon: <GroupIcon />, title: 'Команда', path: '/' },
    { icon: <ListIcon />, title: 'Блог', path: '/' },
    { icon: <CashIcon />, title: 'Курс валют', path: '/' },
    { icon: <CoinIcon />, title: 'Курс', path: '/' },
    { icon: <LogOutIcon />, title: 'Выйти', path: '/' },
  ]
  const [open, setOpen] = useState(false)

  return (
    <div className={`${s.sidebar} ${open && s.sidebarOpen}`}>
      <div className={s.logo} onClick={() => setOpen(!open)}>
        <LogoIcon />
      </div>
      <div className={s.list}>
      <div className={s.image}>
        <img src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717718400&semt=sph' alt='user avatar' />
      </div>
      <div className={`${s.item} ${open && s.itemActive}`}>
        <p className={s.name}>Артем Иванов</p>
        <p className={s.desc}>Собственник</p>
      </div>
      </div>
      <nav className={`${s.navigation} ${open && s.navigationActive}`}>
        {
          navigationItems.map((i, idx) => (
            <div className={s.list} key={idx}>
              <div className={s.icon}>
                {i.icon}
              </div>
              <p className={`${s.item} ${open && s.itemActive}`}>{i.title}</p>
            </div>
          ))
        }

      </nav>
    </div>
  )
}

export default Sidebar