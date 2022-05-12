import { TextField,Typography,Button, Box} from '@mui/material'
import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
 function Contact() {
     const formik=useFormik({
         initialValues:{
             firstName:"",
             lastName:"",
             phoneNumber:"",
             message:""
         },
         validationSchema:Yup.object({
             firstName:Yup.string().required("This is required"),
             lastName:Yup.string().required("This is required"),
             phoneNumber:Yup.string().required("This is required"),
             message:Yup.string().required("This is required")
         }),
         onSubmit:(values)=>{
             alert("hi! USER we will be back soon")
         }
     })
  return (
    <>
     <Typography variant='h4' mt={6} mb={6}><i>Contact Us</i></Typography>
<Box
component="form"
onSubmit={formik.handleSubmit}
>
<TextField
type="text"
name="firstName"
sx={{width:"300px",m:1}}
variant="outlined"
label="firstname"
onChange={formik.handleChange}
onBlur={formik.handleBlur}
error={formik.touched.firstName && Boolean(formik.errors.firstName)}
helperText={formik.errors.firstName}
/>
<TextField
type="text"
name="lastName"
sx={{width:"300px",m:1}}
variant="outlined"
label="lastname"
onChange={formik.handleChange}
onBlur={formik.handleBlur}
error={formik.touched.lastName && Boolean(formik.errors.lastName)}
helperText={formik.errors.lastName}
/>
<TextField
type="number"
name="phoneNumber"
sx={{width:"300px",m:1}}
variant="outlined"
label="phone no"
onChange={formik.handleChange}
onBlur={formik.handleBlur}
error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
helperText={formik.errors.phoneNumber}
/>
<TextField
type="text"
name="message"
fullWidth
rows={4}
multiline
variant="outlined"
label="message"
onChange={formik.handleChange}
onBlur={formik.handleBlur}
error={formik.touched.message && Boolean(formik.errors.message)}
helperText={formik.errors.message}
/>
<Button size="large" variant='contained' color='success' type="submit">Send</Button>
 

</Box>

    </>
  )
}
export default Contact