import React, { useEffect, useState } from 'react'
import s from './style.module.css'
import CheckList from '../CheckList/CheckList'
import { useStore } from '../../store/store'

const Dialog = ({setOpenDialog}) => {
    const [email, setEmail] = useState('')
    const [openCheck, setOpenCheck] = useState(false)
    const [permissions, setPermissions] = useState({})
    const [payload, setPayload] = useState([])
    const addUsers = useStore((state) => state.addUsers)
    useEffect(() => {
        setPayload(Object.keys(permissions).filter((i) => permissions[i]))
    }, [permissions])

    const addUser = () => {
        console.log(email);
        console.log(payload);
        const data = {
            email,
            permissions: payload
        }
        addUsers(data)
        setOpenDialog(false)
    }

    return (
        <form className={s.wrapper}>
            <p className={s.title}>Отправьте приглашение</p>
            <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}  className={s.input}/>
            <textarea type='text' rows={1} readOnly placeholder='Выберите права доступа' value={payload?.map(i => i)} onClick={() => setOpenCheck(true)} name='chip' className={s.textarea}/>
            <div className={s.relative}>
            {
                openCheck && <CheckList setOpenCheck={setOpenCheck} setPermissions={setPermissions}/>
            }
            </div>
            <button className={s.btn} onClick={addUser}>Отправить приглашение</button>
        </form>
    )
}

export default Dialog