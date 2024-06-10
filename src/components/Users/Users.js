import React, { useState } from 'react'
import s from './style.module.css'
import { DotsIcon, UserIcon } from '../../assets/icons/Icons'
import UserAction from '../UserAction/UserAction'
import Snackbar from '../Snackbar/Snackbar'
import CheckList from '../CheckList/CheckList'

const Users = ({ item }) => {
    const [open, setOpen] = useState(false)
    const [openCheck, setOpenCheck] = useState(false)
    const [openSnack, setOpenSnack] = useState(false)
    return (
        <div className={s.users}>
            <div className={s.info}>
                <div className={s.image}>
                    {
                        item.image? <img src={item.image} alt='user avatar' />: <UserIcon/>
                    }
                </div>
                <div className={s.desc}>
                    <div className={s.flex}>
                        <p className={s.name}>{item.name? item.name: 'Пользователь'}</p>
                        <p className={s.mail}>{item.name? null: 'Не авторизирован'}</p>
                        <p className={s.mail}>{item.email}</p>
                    </div>
                    <div className={s.flex}>
                        {
                            item.permissions.map((i, idx) => (
                                <p key={idx} className={`${s.chip} ${i === 'Администратор' && s.admin}`}>{i}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                <div className={s.icon} onClick={() => setOpen(!open)}>
                    <DotsIcon />
                </div>
                <div className={s.detail}>
                    {
                        open && <UserAction setOpenSnack={setOpenSnack} setOpenCheck={setOpenCheck} setOpen={setOpen} item={item} />
                    }

                    {
                        openCheck && <CheckList setOpenCheck={setOpenCheck} item={item}/>
                    }
                </div>
            </div>
            {
                openSnack && <Snackbar setOpenSnack={setOpenSnack} setOpen={setOpen} message={'Пользователь успешно удален '} />
            }
        </div>
    )
}

export default Users