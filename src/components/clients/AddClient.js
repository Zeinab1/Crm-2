import React , {useState} from 'react';
import axiosClient from '../../config/axiosClient';

const AddClient = () => {
    const [client , setClient] = useState({
        name:'',
        username:'',
        email:''
    });
    const handleChange = (e) => {
        setClient({
            ...client,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        AddClient();

    }

    const AddClient = () => {
        axiosClient.post('/users' , client)
        .then(res =>{
            console.log(res.data)
        })
    }
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
           <button type='submit' className='btn btn-primary'>Add Client</button>

       </form>
    )
}

export default AddClient;