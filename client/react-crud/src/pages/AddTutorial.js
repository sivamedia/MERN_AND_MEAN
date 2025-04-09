import React, { useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

import { useEffect } from 'react';



export default function AddTutorial({props}) {

  const baseUrl = 'http://localhost:8081/api/tutorials';

  const initialPayLoad = {
    title: "Data Structure",
    description: 'Data Structure and Algorithms',
    published: false
  }
  
  const [payLoad, setPayload] = useState(initialPayLoad);

  useEffect(()=>{
    if(props.action === 'update') {
      let initialPayLoad = {};
      initialPayLoad.title = props.title;
      initialPayLoad.description = props.description;
      initialPayLoad.published = props.published;
      initialPayLoad.id = props.id;
      setPayload(initialPayLoad);
      //alert("update");
    }
    else {
      let initialPayLoad = {};
      initialPayLoad.title = '';
      initialPayLoad.description = '';
      initialPayLoad.published = false; // MAINTAIN CONTROLLED COMPONENT
      setPayload(initialPayLoad);
      //alert("ADD");
    }
  },[props])


  const payLoadChange = (event)=>{
    //console.log(event.target.name)
    if(event.target.name === "published") {
      console.log(event.target.checked);
      setPayload({...payLoad, [event.target.name]:event.target.checked});
      //setPayload({...payLoad, [event.target.name]:event.target.value});
      
    }
    else {    
    setPayload({...payLoad, [event.target.name]:event.target.value});
    }
    console.log(payLoad);
  }

  function submitPost() {

    let subMethod = "";
    let url = baseUrl;

    if(props.action === "add") {
      subMethod = "POST";
    } else { 
      subMethod = "PUT";
      url = url + '/'+ payLoad.id
     }


    axios({ method: subMethod, url: url, data: payLoad, // you are sending body instead
      headers: {
        // 'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json'
      },
    }).then((res) => {
      console.log(res);
      props.parentFunction()
    }).catch(error => {
      alert(error.response.data.message);
    });
  }


  
  return (<>

    <div className="modal" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">{props.modalTitle}</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" />
          </div>

          {/* Modal body */}
          <div className="modal-body">

            <div className="mb-3">
              <label htmlFor="title_input" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title_input"
                placeholder="Enter Title"
                name='title'
                onChange={payLoadChange}
                value={payLoad.title}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc_input" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="desc_input"
                placeholder="Enter Description"
                name='description'
                onChange={payLoadChange}
                value={payLoad.description}
              />
            </div>
            { props.action === 'update' ? 
              <div className="mb-3 form-check">
                <label className="form-check-label" htmlFor="publish_checkbox">
                  Published
                </label>

                  <input  name='published'  id="publish_checkbox"   className="form-check-input" 
                          type="checkbox"
                          value={payLoad.published}
                          checked={payLoad.published}
                          onChange={payLoadChange}
                  />
                

              </div> : ''}
              
            

          </div>
          { /* Modal body */}

          {/* Modal footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={submitPost}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}