import React, {useEffect, useState } from "react";
import axios from "axios";
import AddTutorial from './AddTutorial.js';

export default function Tutorials() {
    const [data, setData] = useState([]);
    const [modalProps, setModalProps] = useState({});
    const baseUrl = 'http://localhost:8081/api/tutorials';

    useEffect(() => {
        getTutorials();
    }, [])

    function getTutorials() {
        axios.get(baseUrl)
            .then(response => response.data)
            .then((data) => {
                setData(data)
            }).catch(error => {
                alert(error.response.data.message);
              });
    }

    function submitDelete(id){
        axios({
            method: 'delete',
            url: baseUrl + '/' + id,
            //data: id, // you are sending body instead
            headers: {
             // 'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json'
            }, 
          }).then((res) => {
            console.log(res.message)
            getTutorials();
          }).catch(error => {
            alert(error.response.data.message);
          });
    }

    const updateTutorial = (currentTutorial)=> {
        let modalProps = {
                            modalTitle:'Update Tutorial',
                            action:'update' ,
                            id:currentTutorial.id, 
                            title:currentTutorial.title, 
                            description:currentTutorial.description,
                            published: currentTutorial.published,
                            parentFunction: parentFunction
        };
        setModalProps(modalProps);
        console.log("modal props : ", modalProps);
    }

    const addTutorial = ()=> {
        let modalProps = {
                            modalTitle:'Add New Tutorial',
                            action:'add',
                            parentFunction: parentFunction
        }
        setModalProps(modalProps);
        console.log("modal props : ", modalProps);
    }
    //console.log(data);

    const parentFunction = () => {
        console.log("Calles Parent Get Tutotial Method IF Updated or Added or Deleted");
        getTutorials();
      }


    const addUpdateTutorial = <AddTutorial props={modalProps} > </AddTutorial>

    return (
        <>  <h1> Tutorials  </h1>

            <table className="table table-striped table-bordered table-hover">
                <thead className="table-dark">
                    <tr align="left">
                        <th scope="col">#</th>
                        <th style={{'textAlign': 'left'}} scope="col">Title</th>
                        <th style={{'textAlign': 'left'}}  scope="col">Description</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length === 0 ?
                            <tr >
                                <td colSpan="6">No Tutorials available</td>
                            </tr> :

                            data.map((tut, i) =>
                                <tr key={tut.id} >
                                    <td>
                                        {++i}
                                    </td>
                                    <td style={{'textAlign': 'left'}}>
                                        {tut.title}
                                    </td>
                                    <td style={{'textAlign': 'left'}} >
                                        {tut.description}
                                    </td>
                                    <td style={ tut.published  ? {backgroundColor: 'lightgreen'} : {} }>
                                        {tut.published ? "Published" : "Pending"}
                                    </td>
                                    <td >
                                        <div className="grid gap-0 row-gap-3">
                                            <span className=" m-1">
                                                <button type="button" data-bs-toggle="modal" data-bs-target="#myModal" className="btn btn-primary"
                                                onClick={()=>updateTutorial(tut)}> Update </button>
                                            </span>
                                            <span className="m-1">
                                                <button type="button" className="btn btn-danger p-2 g-col-6" onClick={()=>submitDelete(tut.id)}> Delete </button>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            )


                    }
                </tbody>
            </table>
            <div className="grid gap-0 row-gap-3">
                <span className=" m-1">
                    <button type="button" className="btn btn-primary p-2 g-col-6" data-bs-toggle="modal" data-bs-target="#myModal"
                    onClick={()=>addTutorial()}>  Add Tutorial </button>
                </span>
                <span className="m-1">
                    <button type="button" className="btn btn-danger p-2 g-col-6"> Delete All Tutorial</button>
                </span>
            </div>
            {addUpdateTutorial}
         </>
    );
}


/* const listItems = products.map(product =>
    <li key={product.id} style={{ color: product.isFruit ? 'magenta' : 'darkgreen'  }} >
        {product.title}
    </li>

<ul>{listItems}</ul> */