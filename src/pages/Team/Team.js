import React from 'react'
import s from './style.module.css'
import Search from '../../components/Search/Search'
import Users from '../../components/Users/Users'
import { useStore } from '../../store/store'

const Team = () => {
  const users = useStore((state) => state.users)
  return (
    <div className='wrapper'>
      <div className={s.team}>
        <div className={`dflex ${s.topside}`}>
          <h3 className={s.title}>
            Команда
          </h3>
          <div className={s.search}>
          <Search/>
          </div>
        </div>
        {
          users.map((i, idx) => (
            <Users key={idx} item={i}/>
          ))
        }
      </div>
    </div>
  )
}

export default Team