import React , {useState,useEffect} from 'react';
import axiosClient from '../../config/axiosClient';
import Client from './Client'

const Clients = () => {
    const [clients , setClients] = useState([]);

    const getClients = async () => {
        const res = await axiosClient.get('/users')
        // console.log(res.data);
        setClients(res.data)
    };

    const handleDelete = (id) => {
        console.log(id)
        axiosClient.delete(`/users/${id}`)
        .then(res=>{
            console.log(res.data)
        })
    }
    

    useEffect(() => {
       getClients();

    }, []);

    const renderClients = () =>{
        return (
            <tbody>
            {
                clients.map((client,index)=>(
                    <Client 
                        index={index}
                        id={client.id}
                        name={client.name}
                        username={client.username}
                        email={client.email}   
                        onDelete = {handleDelete}                 />

                ))
            }
        </tbody>

        )
    }

    return (
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>

          </tr>
        </thead>
        {renderClients()}
      </table>
    )
}

export default Clients;