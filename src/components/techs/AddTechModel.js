import React,{useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js' ;
import {connect} from 'react-redux';
import {addTech} from '../../actions/techActions';
import PropTypes from 'prop-types';
const AddTechModal = ({addTech}) => {
    const [firstname,setfirstName] = useState('');
    const [lastname,setlastName] = useState('');

    const onSubmit =(e)=>{
        if(firstname==='' || lastname===''){
            M.toast({
                html: "Please Enter The First and Last Name"
            })
        }else {
            addTech({
                    firstname,
                    lastname
                });   
                M.toast({
                    html: `${firstname} ${lastname} was added as a tech`
                })     
     // clear field
       setfirstName('');
       setlastName('');   
              }
       
    }
    return (
        <div  id='add-tech-modal' className="modal">
            <div className="modal-content">
                <h4>New Technician</h4>

                <div className="row">
                    <div className="input-field">
                        <input
                         type="text" 
                         name="firstname" 
                         value={firstname} 
                         onChange={e=>setfirstName(e.target.value)}/>
                        <label htmlFor="firstname" className="active "> 
                        First Name
                        </label>
                    </div>
                </div>
               <div className="row">
                    <div className="input-field">
                        <input
                         type="text" 
                         name="lastname" 
                         value={lastname} 
                         onChange={e=>setlastName(e.target.value)}/>
                        <label htmlFor="lastname" className="active "> 
                        Last Name
                        </label>
                    </div>
                </div>


                

            </div>

            <div className="modal-footer">
                <a
                 href="#!" 
                onClick={onSubmit} 
                className="modal-close waves-effect waves-light blue btn">
                    Enter
                </a>
            </div>
    </div>
    )
}

AddTechModal.propTypes ={
    addTech:PropTypes.func.isRequired,
}
export default connect(null,{addTech})(AddTechModal);
