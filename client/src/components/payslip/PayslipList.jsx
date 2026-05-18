import React from 'react'
import Payslips from '../../pages/Payslips'
const PayslipList = ({ payslips, isAdmin, processing }) => {

  return (

    <div className='card overflow-hidden'>

      <div className='overflow-x-auto'>

        <table className="table-modern">

          <thead>

            <tr>

              {isAdmin && <th>Employee</th>}

              <th>Month</th>
              <th>Basic Salary</th>
              <th>Deductions</th>
              <th>Net Salary</th>
              <th>Status</th>

              {isAdmin && <th className='text-center'>Actions</th>}

            </tr>

          </thead>

          <tbody>

            {payslips.length === 0 ? (

              <tr>

                <td
                  colSpan={isAdmin ? 7 : 5}
                  className="text-center py-12 text-slate-400"
                >
                  No payslips found
                </td>

              </tr>

            ) : (

              payslips.map((payslip) => (

                <tr key={payslip._id || payslip.id}>

                  {isAdmin && (

                    <td className='text-slate-900'>

                      {payslip.employee?.firstName}
                      {" "}
                      {payslip.employee?.lastName}

                    </td>

                  )}

                  <td className='text-slate-600'>
                    {payslip.month}
                  </td>

                  <td className='text-slate-600'>
                    ₹{payslip.basicSalary?.toLocaleString()}
                  </td>

                  <td className='text-slate-600'>
                    ₹{payslip.deductions?.toLocaleString()}
                  </td>

                  <td className='font-semibold text-slate-900'>
                    ₹{payslip.netSalary?.toLocaleString()}
                  </td>

                  <td>

                    <span className='badge badge-success'>
                      PAID
                    </span>

                  </td>

                  {isAdmin && (

                    <td className='text-center'>
                      ...
                    </td>

                  )}

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>

  )
}

export default PayslipList