import React, {Component } from 'react';
import './Crud.css';

class Crud extends Component{

    submitTodo(event){
        event.preventDefault();

       let datas = this.state.datas;
       let name = this.refs.name.value;
       let status = this.refs.status.value;

       if(this.state.act === 0){
            let data = {
                name, status
            }

            datas.push(data);
       }else{
           let index = this.state.index;
            console.log(name)
           datas[index].name = name;
           datas[index].status = status;
          
       }
       
       

       this.setState({
           datas:datas,
           act:0
       })

       this.refs.myForm.reset()
       
       
    }
    // delete task
    delete(index){
        let datas = this.state.datas;

        datas.splice(index, 1);
        this.setState({
            datas:datas
        })
    }

    // edit task 
    edit(i){
        let data = this.state.datas[i];
        this.refs.name.value = data.name;
        this.refs.status.value = data.status;

        this.setState({
            act:1,
            index:i,
        })
    }
    
    // constructor 
    constructor(){
        super();

        this.state ={
            datas: [
                {
                    name: 'Buy flowers',
                    status: 'yes'
                },
                {
                    name: 'Wash Cars',
                    status: 'yes'
                }
            ],
            act:0,
            index: ''
        }
       this.submitTodo = this.submitTodo.bind(this);
       
    }
    render(){
        let datas = this.state.datas;
        return(
            
            <div className='crudMain'>
            
                <form ref='myForm'>
                    <input type='text' placeholder='Enter todo item' ref='name'/>
                    <input type='text' placeholder='Enter todo status' ref='status'/>
                    <button onClick={this.submitTodo}>Submit</button>
                </form>
                <div>
                   <table>
                       <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Details</th>
                        </tr>
                    
                        {datas.map((item, i)=>
                        <tr key = {i}>
                            <td> {i+1}</td>
                            <td> {item.name} </td>
                            <td> {item.status} </td>
                            <td>
                                <a href='#' onClick={()=> this.edit(i)}>Edit</a>
                                <a href='#' onClick={()=> this.delete(i)} >Delete</a>
                            </td>
                        </tr>
                        )}
                    </tbody>   
                        
                    </table>
                </div>
            </div>
        )
    }

}

export default Crud;