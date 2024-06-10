import React, { useEffect, useState } from 'react'
import s from './style.module.css'
import { useStore } from '../../store/store'

const CheckList = ({ setPermissions, setOpenCheck, item }) => {
  const access = useStore((state) => state.access)
  const updadteUser = useStore((state) => state.updadteUser)

  const [checkedState, setCheckedState] = useState(() => {
    const initialState = {};
    if(item){
      access.forEach(i => {
        initialState[i] = item.permissions.includes(i);
      });
    }
    return initialState;
  });

  const handleCheckboxChange = (permission) => {
    setCheckedState(prevState => ({
      ...prevState,
      [permission]: !prevState[permission]
    }))
  }

  const handleCheckAll = () => {
    const allChecked = Object.values(checkedState).every(Boolean);
    const newState = {};
    access.forEach(permission => {
      newState[permission] = !allChecked;
    })
    setCheckedState(newState);
  }

  useEffect(() => {
    const payload = {
      email: item?.email,
      permissions: Object.keys(checkedState).filter((i) => checkedState[i])
    }
    updadteUser(payload)
    if(setPermissions) setPermissions(checkedState)
  }, [checkedState])

  return (
    <form className={s.wrapper} onMouseLeave={() => setOpenCheck(false)}>
      <label>
        <input
          className={s.checkList}
          type="checkbox"
          onChange={handleCheckAll}
          checked={Object.values(checkedState).every(Boolean)}
        />
        Все
      </label>
      {
        access.map((i, idx) => (
          <label key={idx}>
            <input
              className={s.checkList}
              type="checkbox"
              checked={checkedState[i]}
              onChange={() => handleCheckboxChange(i)}
            />
            {i}
          </label>
        ))
      }
    </form>
  )
}

export default CheckList