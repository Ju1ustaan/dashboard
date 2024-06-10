import React from 'react'
import s from './style.module.css'
import { useStore } from '../../store/store'

const UserAction = ({setOpenCheck, setOpenSnack, setOpen, item}) => {
  const removeUser = useStore((state) => state.removeUser)
  const remove = () => {
    setOpen(false)
    setOpenSnack(true)
    removeUser(item.email)
  }
  return (
    <div className={s.wrapper} onMouseLeave={() => setOpen(false)}>
        <button className={s.btn} onClick={() => setOpenCheck(true)}>Изменить права доступа</button>
        <button className={s.btn}>Отправить код повторно</button>
        <button className={s.btn} onClick={remove}>Удалить</button>
    </div>
  )
}

export default UserAction