import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Product, User } from "../../types";

// interface User{
//     ID : number,
//     NAME : string,
//     EMAIL : string,
//     WHATSAPP_NUMBER : string,
//     MESSAGE : string,
// }

// interface Product{
//     ID     : number ,
//     IMAGE1 : string,
//     IMAGE2 : string,
//     NAME? : string,
//     PRICE? : number,
//     BRAND : string,
//     YEAR : number,
//     CONDITION_OF_TRUCK : string,
//     AXLE : number,
//     BODY : string,
//     MILEAGE_L_PER_100KM : number,
//     PRODUCTION_PERIOD : string,
//     ENGINE_TYPE :string,
//     TRANSMISSION_TYPE? : string,
//     WARRANTY? : number,
//     SEATING_CAPACITY? : number,
//     ENGINE_CAPACITY? : number,
//     MODEL : string,
//     COLOR : string,
// }    

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<User[]>([]);
//   const userInfo : User[] = [{ID:3 ,NAME:'Aqib Rehman',EMAIL:'aqibk5867@gmail.com',WHATSAPP_NUMBER:'+923132651310',MESSAGE:'This is a simple message check to check the UIThis is a simple message check to check the UIThis is a simple message check to check the UI'},{ID:105 ,NAME:'Aqib Rehman',EMAIL:'aqibk5867@gmail.com',WHATSAPP_NUMBER:'+923132651310',MESSAGE:'This is a simple message check to check the UIThis is a simple message check to check the UIThis is a simple message check to check the UI'},{ID:89 ,NAME:'Aqib Rehman',EMAIL:'aqibk5867@gmail.com',WHATSAPP_NUMBER:'+923132651310',MESSAGE:'This is a simple message check to check the UIThis is a simple message check to check the UIThis is a simple message check to check the UI'},{ID:59 ,NAME:'Aqib Rehman',EMAIL:'aqibk5867@gmail.com',WHATSAPP_NUMBER:'+923132651310',MESSAGE:'This is a simple message check to check the UIThis is a simple message check to check the UIThis is a simple message check to check the UI'},{ID:13 ,NAME:'Aqib Rehman',EMAIL:'aqibk5867@gmail.com',WHATSAPP_NUMBER:'+923132651310',MESSAGE:'This is a simple message check to check the UIThis is a simple message check to check the UIThis is a simple message check to check the UI'}];
  // const productInfo : Product[] = [{IMAGE1:'/assests/IVECO_Stralis/first.jpg',IMAGE2:'/assests/IVECO_Stralis/second.jpg',NAME:'Truck A',PRICE: '50,000' ,BRAND:'Honda',YEAR:2024,CONDITION:'New',AXLE:'6x6',BODY:'Container Carrier',MILEAGE:'8 km/l',PRODUCTION_PERIOD:'2015-2018',ENGINE_TYPE:'Gasoline',TRANSMISSION_TYPE:'Manual',WARRANTY:'3',SEATING_CAPACITY:'4',ENGINE_CAPACITY:'2500cc',MODEL:'Cascadia',COLOR:'Blue'},{IMAGE1:'/assests/IVECO_Stralis/first.jpg',IMAGE2:'/assests/IVECO_Stralis/second.jpg',NAME:'Truck A',PRICE: '50,000' ,BRAND:'Honda',YEAR:2024,CONDITION:'New',AXLE:'6x6',BODY:'Container Carrier',MILEAGE:'8 km/l',PRODUCTION_PERIOD:'2015-2018',ENGINE_TYPE:'Gasoline',TRANSMISSION_TYPE:'Manual',WARRANTY:'3',SEATING_CAPACITY:'4',ENGINE_CAPACITY:'2500cc',MODEL:'Cascadia',COLOR:'Blue'},{IMAGE1:'/assests/IVECO_Stralis/first.jpg',IMAGE2:'/assests/IVECO_Stralis/second.jpg',NAME:'Truck A',PRICE: '50,000' ,BRAND:'Honda',YEAR:2024,CONDITION:'New',AXLE:'6x6',BODY:'Container Carrier',MILEAGE:'8 km/l',PRODUCTION_PERIOD:'2015-2018',ENGINE_TYPE:'Gasoline',TRANSMISSION_TYPE:'Manual',WARRANTY:'3',SEATING_CAPACITY:'4',ENGINE_CAPACITY:'2500cc',MODEL:'Cascadia',COLOR:'Blue'}];
  const [productInfo, setProductInfo] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4500/api/getUsers'); // Replace 4500 with your backend port
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: User[] = await response.json(); // Parse the JSON response
        setUserInfo(data); // Store the data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); 
  }, [userInfo]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4500/api/getProductInfo'); // Replace 4500 with your backend port
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Product[] = await response.json(); // Parse the JSON response
        setProductInfo(data); // Store the data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); 
  }, [productInfo]);
  
  
//   const deleteUser = async (id:number) => {
//     try {
//       const response = await fetch(`http://localhost:4500/api/deleteUsers/${id}`); 
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data: User[] = await response.json(); 
//       setUserInfo(data); 
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
const deleteUser = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:4500/api/deleteUser/${id}`, {
        method: 'DELETE', 
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: User[] = await response.json(); // Parse updated user list
      setUserInfo(data); // Update state with the remaining users
      toast.success('Deleted Successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  //can be deleted
  const deleteProduct = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:4500/api/deleteProduct/${id}`, {
        method: 'DELETE', 
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Product[] = await response.json(); // Parse updated user list
      setProductInfo(data); // Update state with the remaining users
      toast.success('Deleted Successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  //can be deleted
  
  return (
    <div className="min-h-screen p-4 sm:p-8 bg-background-default">
      <h1 className="text-2xl sm:text-3xl font-bold text-textColor-heading mb-6 text-center">Admin Dashboard</h1>
      <div className="shadow-md rounded-lg mb-10 p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-textColor-subheading">Users</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
            <thead>
                <tr className="bg-background-secondary text-textColor-subheading">
                    <th className="border border-gray-300 px-2 py-2 text-center">Name</th>
                    <th className="border border-gray-300 px-2 py-2 text-center">EMAIL</th>
                    <th className="border border-gray-300 px-2 py-2 text-center">WHATSAPP</th>
                    <th className="border border-gray-300 px-2 py-2 text-center">MESSAGE</th>
                    <th className="border border-gray-300 px-2 py-2 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    (userInfo).map((users,index) => 
                        (
                        <tr className="hover:bg-gray-50 transition text-textColor-default" key={index}>
                            <td className="border border-gray-300 px-2 py-2 text-center">{users.NAME}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">{users.EMAIL}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">{users.WHATSAPP_NUMBER}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">{users.MESSAGE}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                                <div className="flex flex-col gap-1">
                                    <button className="px-4 py-1 bg-blue-500 text-white text-xs rounded-md hover:bg-blue-600" onClick={() => navigate(`/admin/updateUser/${users.ID}`)}>Update</button>
                                    <button className="px-4 py-1 bg-red-500 text-white text-xs rounded-md hover:bg-red-600" onClick={(e) => deleteUser(users.ID)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        ))
                }
            </tbody>
          </table>
        </div>
        <div className="text-center mt-8">
            <button className="px-4 sm:px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition" onClick={() => navigate('/admin/addUser')}>Add New User</button>
        </div>
      </div>

      <div className="shadow-md rounded-lg p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-textColor-subheading">Products</h2>
        <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
            <thead>
                <tr className="bg-background-secondary text-textColor-subheading">
                <th className="border border-gray-300 px-2 py-2 text-center">Image 1</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Image 2</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Name</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Price</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Brand</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Year</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Condition</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Axle</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Body</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Mileage</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Production Period</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Engine Type</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Transmission Type</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Warranty</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Seating Capacity</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Engine Capacity</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Model</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Color</th>
                <th className="border border-gray-300 px-2 py-2 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    (productInfo).map((item,index) => (
                        <tr className="hover:bg-gray-50 transition text-textColor-default" key={index}>
                            {/* <td className="border border-gray-300 px-2 py-2 text-center">
                                <div className="flex flex-wrap gap-2 justify-center">
                                    <img src={item.IMAGE1} alt='Truck Image1' className="w-14 h-14 rounded-lg"/>
                                    <img src={item.IMAGE2} alt='Truck Image2' className="w-14 h-14 rounded-lg"/>
                                </div>
                            </td> */}
                            {/* <td className="border border-gray-300 px-2 py-2 text-center">{item}</td> */}
                            <td className="border border-gray-300 px-1 py-1 text-center">
                                <div className="flex flex-wrap gap-2 justify-center"><img src={`/assests/uploads/${item.IMAGE1}`} alt='Truck Image1' className="w-12 h-12 rounded-lg"/></div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 text-center">
                                <div className="flex flex-wrap gap-2 justify-center"><img src={`/assests/uploads/${item.IMAGE2}`} alt='Truck Image1' className="w-12 h-12 rounded-lg"/></div>
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-center">{item.NAME}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">{item.PRICE}$</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">{item.BRAND}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">{item.YEAR}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">{item.CONDITION_OF_TRUCK}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">{item.AXLE}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">{item.BODY}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">{item.MILEAGE_L_PER_100KM}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">{item.PRODUCTION_PERIOD}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">{item.ENGINE_TYPE}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">{item.TRANSMISSION_TYPE}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">{item.WARRANTY}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">{item.SEATING_CAPACITY}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">{item.ENGINE_CAPACITY}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">{item.MODEL}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">{item.COLOR}</td>
                            <td className="border border-gray-300 px-2 py-2 text-center">
                                <div className="flex flex-col gap-1">
                                    <button className="px-4 py-1 bg-blue-500 text-white text-xs rounded-md hover:bg-blue-600" onClick={() => navigate(`/admin/updateProduct/${item.ID}`)}>Update</button>
                                    <button className="px-4 py-1 bg-red-500 text-white text-xs rounded-md hover:bg-red-600" onClick={(e) => deleteProduct(item.ID)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="px-4 sm:px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition" onClick={() => navigate('/admin/addProduct')}>Add New Item</button>
      </div>
    </div>
  );
};

export default AdminPanel;
