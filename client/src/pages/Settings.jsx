import {useState} from "react"
import { useEffect } from "react"
import { dummyProfileData } from "../assets/assets/assets"
import Loading from "../components/Loading"
import { LockIcon } from "lucide-react"
import ProfileForm from "../components/ProfileForm"
import ChangePasswordModal from "../components/ChangePasswordModal"
const Settings = () => {
  const [profile,setProfile] = useState(null)
  const [loading,setloading] = useState(true)
  const [showpassModel,setShowPasswordmodel] =useState(false)

  const fetchprofile = async() =>{
    setProfile(dummyProfileData)
    setTimeout(() => {
          setloading(false);
    }, 1000);
  }
  useEffect(()=>{
    fetchprofile()
},[])

if(loading) return <Loading/>
  return ( 
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Manage your account and preferences</p>
      </div>
      {profile && <ProfileForm initialData={profile} onSuccess={fetchprofile}/>}
      {/* change Password trigger*/}
      <div className="card max-w-md p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
         <div className="p-2.5 bg-slate-100 rounded-lg">
          <LockIcon className="w-5 h-5 text-slate-600"/>
        </div>
        </div>
        <p className="font-medium text-slate-900">Password</p>
        <p className="text-sm text-slate-500">update your account password </p>
        <button onClick={()=>setShowPasswordmodel(true)}
        className="btn-secondary text-sm">
          Change
        </button>
      </div>
      <ChangePasswordModal open={showpassModel} onclose={()=> setShowPasswordmodel(false)}/>
    </div>
  )
}

export default Settings