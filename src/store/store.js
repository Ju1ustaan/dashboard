import { create } from "zustand";

export const useStore = create((set) => ({
    users: [
        {
          name: "Артем Иванов",
          email: "artem@gmail.com",
          permissions: [ "Блог", "Аналитика" ],
          image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          name: "Лена Новикова",
          email: "lenkan@gmail.com",
          permissions: [ "Администратор" ],
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        },
        {
          name: "Максим Иванов",
          email: "maksiim@gmail.com",
          permissions: [ "Акции","Модерация объявлений","Тех. поддержка" ],
          image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
        },
        {
          name: "Айжулдыз Кошкинбай",
          email: "aizhzk@gmail.com",
          permissions: [ "Обращение клиентов" ],
          image: "https://gorodprizrak.com/wp-content/uploads/2021/01/346545.jpg"
        }
      ],
    addUsers: (payload) => set((state) => ({ users: [payload, ...state.users]})),
    removeUser: (payload) => set((state) => ({ users: state.users.filter(i => i.email !== payload) })),
    updadteUser: (payload) => set((state) => ({ users: state.users.map(i => {
      if(i.email === payload.email){
        i.permissions = [...Array.from(payload.permissions)]
        return i
      }else{
        return i
      }
    } )})),

    access: [ 'Модерация объявлений','Блог','Тех. поддержка','Обращение клиентов','Аналитика','Акции',]
 
}))