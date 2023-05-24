import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import {Navigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import {deepOrange, deepPurple} from '@mui/material/colors';
import Popover from '@mui/material/Popover';
import LogoutIcon from '@mui/icons-material/Logout';
import { Margin } from "@mui/icons-material";
import {Formik} from 'formik';
import * as Yup from "yup";

export const Login = () => {
    const [name,setName] = useState("Dev");
    const [email,setEmail] = useState("devnkheradiya@gmail.com");
    const [open,setOpen] = useState(false); 
    const Navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);

    // useEffect(()=>{
    //     // console.log("The new value of Name: ", name);

    //     // return ()=>{
    //     //     console.log("The old value of Name: ", name)
    //     // };
    // },[]);

    const initialValues ={
        "name" :"",
        "email" :""

    }

    const validationSchema=Yup.object().shape({
        "name":Yup.string().min(3,"Please Make Sure you have Entered your name Atleast 3 characters long..."),
        "email":Yup.string().email("Please Enter Valid Email")
      });

    const onFormSubmit = (values,{setSubmitting}) => {
        console.log("On Form Submit:",values);
        setTimeout(() => {
         alert(JSON.stringify(values, null, 2));
         setSubmitting(false);
       }, 400);  
        alert("Form Submitted Successfully....")
    };
    const onHomePageButtonClick = () => {
        Navigate("/");
        console.log("Button clicked");
    };
    const handleClick = (event) => {
        console.log(123);
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
    const handleClose = (event) => {
        setAnchorEl(null);
        setOpen(false);
    };
    return ( 
        <>
        <div div style={{
            padding: 5
        }}>
            {/* <h1>Apple Page</h1> */}
            <div
                style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}
            >
                <div onClick={handleClick}
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding:5,
                    alignItems: 'center',
                    columnGap: 5
                }}>
                    <Avatar sx={{bgcolor: "#526D82"}}>DK</Avatar>
                </div>
                
            </div>
            <Popover
            //     anchorReference="anchorPosition"
            //     anchorPosition={{
            //     top: 200,
            //     left: 400
            // }}
                open={open}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
            }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
            }}
            anchorEl={anchorEl}
            onClose={handleClose}
            >
                <div
                style={{
                    padding:5, 
                    Margin:5,
                    alignItems: 'center'
                }}
                >
                    {/* <Button variant="contained" className="button" onClick={onHomePageButtonClick}>LogOut</Button> */}
                    <h3>LOGOUT <LogoutIcon onClick={onHomePageButtonClick}/>  </h3>
                </div>
            </Popover>
        </div>
         <div
         style={{
         padding: 10,
         rowGap: 10,
         display: 'flex',
         flexDirection: 'column'
     }}>
         <Formik 
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onFormSubmit}
         
         >
             {({values, errors,touched, isSubmitting, handleChange,handleBlur,handleSubmit})=>{
                return(
                  <form onSubmit={handleSubmit}>
                  <div style={{
                    display:"flex",
                    flexDirection:'column',
                    marginBottom:5,
                    rowGap:10
                }}>
                <TextField
                    type="text"
                    // value={name}
                    name="name"
                    label="Name"
                    color="secondary"
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                    {errors.name && touched.name && 
                    <span style={{
                     color:'red',
                     fontSize:15,
                     marginBottom:5
                     }}>{errors.name}</span>}
                <TextField
                    type="email"
                    // value={email}
                    name="email"
                    label="Email"
                    color="secondary"
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                    {errors.email && touched.email && 
                    <span style={{
                     color:'red',
                     fontSize:15,
                     marginBottom:5
                     }}>{errors.email}</span>}
                <Button variant="contained" className="button" type="submit" >Submit</Button>
                </div>
                </form>
                )
             }}
        
         </Formik>
     </div>
     </>
    );
};
