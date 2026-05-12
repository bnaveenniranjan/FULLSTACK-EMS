import React, { useEffect, useState } from "react"
import {dummyAdminDashboardData, dummyEmployeeDashboardData} from "../assets/assets/assets"
import Loading from "../components/Loading"
import EmployeeDashBoard from "../components/EmployeeDashBoard"
import AdminDashboard from "../components/AdminDashboard"

const Dashboard = () => {

  const [data, setdata] = useState(null)
  const [loading, setloading] = useState(true)

  useEffect(() => {

    setdata(dummyEmployeeDashboardData)

    setTimeout(() => {
      setloading(false)
    }, 1000)

  }, [])

  if (loading) {
    return <Loading />
  }

  if (!data) {
    return (
      <p className="text-center text-slate-500 py-12">
        Failed to load dashboard
      </p>
    )
  }

  if (data.role === "ADMIN") {
    return <AdminDashboard  data ={data} />
  } else {
    return  <EmployeeDashBoard data ={data} />
  }

}

export default Dashboard