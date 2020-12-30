import React from 'react';
import {Link} from 'react-router-dom'

const Client = ({index,id,name,username,email,onDelete}) => (
            <tr key={index}>
                <th scope="row">{id}</th>
                 <td>{name}</td>
                 <td>{username}</td>
                 <td>{email}</td>
                 <td>
                 <Link to={`/clients/${id}/edit`}
                        className='btn btn-success'
                        role='button'
                        aria-pressed='true'
                 >
                     Edit
                 </Link>
                 </td>
                 <td>
                 <button className='btn btn-danger' 
                         onClick={()=> {onDelete(id)}}>
                     Delete
                </button>
                 </td>
            </tr>
)
export default Client;
