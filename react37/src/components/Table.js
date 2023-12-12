import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../Redux/slice/ReducerSlice'

const Table = ({setValues}) => {
  const {arrUser} = useSelector((state) => state.ReducerSlice)
  const dispatch = useDispatch()
  return (
    <div className="mt-5">
      <h1 className='p-4 mb-5 mx-auto w-full text-lg bg-gray-800 text-white'>Danh sách sinh viên</h1>
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Mã người dùng
            </th>
            <th scope="col" className="px-6 py-3">
              Họ và tên
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Số điện thoại
            </th>
            <th scope="col" className="px-6 py-3">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
          </tr> */}
          {
            arrUser.map((item,index) =>{
              const {maNguoiDung,hoTen,email,soDienThoai} = item
              return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {maNguoiDung}
              </th>
              <td className="px-6 py-4">{hoTen}</td>
              <td className="px-6 py-4">{email}</td>
              <td className="px-6 py-4">{soDienThoai}</td>
              <td className="px-6 py-4">
              <button onClick={() =>{
                    dispatch(removeUser(item.maNguoiDung))
                  }} className="p-2 mx-2 text-white bg-red-500 rounded-md">
                    Xoá sinh viên
                  </button>
                  <button onClick={() =>{
                    setValues(item)
                  }} className="p-2 text-white bg-yellow-500 rounded-md">
                    Sửa thông tin
                  </button>
              </td>
            </tr>
            })
          }
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Table