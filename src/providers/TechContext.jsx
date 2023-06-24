import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { set, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { api } from "../services/api"

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {

  const [techList, setTechList] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [isEditDel, setIsEditDel] = useState(false)
  const [id, setId] = useState(null)
  const [name, setName] = useState("")

  const notifyError = () => {
    toast.error("Ops deu algo de errado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  useEffect(() => {
    const loadTech = async () => {
      try {
        const token = localStorage.getItem("@TOKEN")
        const id = localStorage.getItem("@USERID")

        const { data } = await api.get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setTechList(data.techs)
      } catch (error) {
        notifyError()
      }
    }
    loadTech()
  }, [])

  const createTech = async (techData) => {
    try {
      const token = localStorage.getItem("@TOKEN")

      const { data } = await api.post(`/users/techs`, techData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })


      setTechList((techList) => [...techList, data])


    } catch (error) {
      notifyError()
    }
  }

  const deleteTech = async (techId) => {
    const token = localStorage.getItem("@TOKEN")
    try {
      await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setTechList((techList) => techList.filter(techs => techs.id !== techId))
    } catch (error) {
      notifyError()
    }
  }

  const editTech = async (techId,techData) => {
    const token = localStorage.getItem("@TOKEN")
    try {
       await api.put(`/users/techs/${techId}`, techData,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setTechList((oldTechList) => {
        const updatedTechList = oldTechList.map((tech) =>
          tech.id === techId ? { ...tech, ...techData } : tech
        );
        return updatedTechList;
      });
    } catch (error) {
      notifyError()
    }
  }

  return (
    <TechContext.Provider value={{ createTech, setIsOpen, isOpen, techList, deleteTech, setIsEditDel, isEditDel, setId, id, setName, name, editTech }}>
      {children}
    </TechContext.Provider>
  )
}