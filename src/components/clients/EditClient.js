import React , {useState,useEffect} from 'react';
import axiosClient from '../../config/axiosClient';


const EditClient = (props) => {
    const {id} = props.match.params;
    const [client, setClient] = useState({
        name:'',
        username:'',
        email:''
    })
    const handleChange = (e) =>{
        setClient({
            ...client,
            [e.target.name]: e.target.value
        })

    };
    const editClient = () => {
        axiosClient.put(`/users/${id}` , client)
        .then(res => {
            console.log(res.data)
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        editClient()
    }
    useEffect(() => {
        const getClients = () =>{
            axiosClient.get(`/users/${id}`)
            .then(res=>{
                console.log(res.data);
                setClient(res.data)
            })
        };
        getClients();
       
    }, [id])
    return (
        <form onSubmit={handleSubmit}>
           <div className='form-group'>
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        name='name'
                        defaultValue={client.name}
                        onChange={handleChange}
                        />
           </div>
           <div className='form-group'>
                <label htmlFor="exampleInputEmail1">User Name</label>
                <input type="username" class="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        name='username'
                        defaultValue={client.username}
                        onChange={handleChange}

                        />
           </div>
           <div className='form-group'>
                <label htmlFor="exampleInputEmail1">Email </label>
                <input type="email" class="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        name='email'
                        defaultValue={client.email}
                        onChange={handleChange}

                        />
           </div>
           <button type='submit' className='btn btn-primary'>Edit Client</button>

       </form>

    )

}

export default EditClient;