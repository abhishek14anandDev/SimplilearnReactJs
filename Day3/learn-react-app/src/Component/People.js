import React from 'react';

class People extends React.Component{
    render(){
        var people =[{"id":1001,"name":"Abhsihek Anand","gender":"male",Age:27},
        {"id":1002,"name":"Shobha Kumari","gender":"male",Age:27},
        {"id":1003,"name":"Ashish Anand","gender":"male",Age:27},
        {"id":1004,"name":"Papa","gender":"male",Age:27}]
        return <div>
            <h2>Person Details</h2>
          <table border ='1'>
              <tr><th>Id</th> <th>Person NAme</th> <th>Gender</th> <th>Age</th></tr>

              {people.map(p=><tr>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.gender}</td>
              <td>{p.Age}</td>
              </tr>)}
          </table>
        </div>
    }
} 

export default People;