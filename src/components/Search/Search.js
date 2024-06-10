import React, { useState } from 'react'
import s from './style.module.css'
import { SearchIcon } from '../../assets/icons/Icons'
import Dialog from '../Dialog/Dialog'

const Search = () => {
  const [openDialog, setOpenDialog] = useState(false)
  return (
    <div className='dflex'>
         <div className={s.search}>
        <input type='email' placeholder='Поиск по Email' />
        <SearchIcon/>
        </div>           
        <button className={s.btn} onClick={() => setOpenDialog(true)}>Добавить пользователя</button>
        {
          openDialog && <Dialog setOpenDialog={setOpenDialog}/>
        }
    </div>
  )
}

export default Search