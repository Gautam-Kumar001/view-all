import React, {useContext} from 'react'
import {Typography, Box, Grid, Modal, Button, IconButton, Container } from '@mui/material'
import a1Office from '../../assets/a1office.png'
import { useNavigate } from "react-router-dom";
import {DataContext} from '../../context/DataContext'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4,
    width:{
        lg:'40%',
        md:'40%',
        sm: '90%',
        xs: '90%'
    }, 
    height:{
        lg:650,
        md:650
    },
    borderRadius:'5%'
  };

const ModalDownload = () => {

    let navigate = useNavigate()
    const {file} = useContext(DataContext)

    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = async() => {
       await setOpen(false)
       await navigate('/')
    };

    const handleDownloadApp = () =>{
        window.location.href ="https://a1office.co/download"
    }

    const handleDownload = () =>{
        fetch(file.ShareableLink)
			.then(response => {
                console.log(response)
				response.blob().then(blob => {
                    console.log(blob)
                    let url = window.URL.createObjectURL(blob);
                    console.log(url)
					let a = document.createElement('a');
					a.href = url;
					a.download = file.fileName
					a.click();
				});
				// window.location.href = response.url;
		});
    }   

    return (
        <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center">
            <Grid spacing={2} container direction="row" justifyContent="center" textAlign="center">
                <Grid item sm={4} xs={2}>

                </Grid>
                <Grid item>
                    <img style={{borderRadius:'5px', width:'32px'}} src={a1Office} alt="" />
                </Grid>
                <Grid item>
                    <Typography variant="h5" sx={{
                        fontFamily: 'Lato',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '20px',
                        lineHeight: '33px'}}
                        >
                            A1 Office
                    </Typography> 
                </Grid>
                <Grid sm={4} xs={3} item justifyContent="flex-end">
                    <Typography textAlign="right">
                        <IconButton onClick={handleClose}>
                            X
                        </IconButton>
                    </Typography>
                </Grid>
            </Grid>
          </Typography>
            <Typography sx={{
                fontFamily: 'Lato',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '120%',
                marginTop:'47px',
                textAlign: 'center',
                color: '#344054'
                }}>
                Get a Better view with our app
            </Typography>
            <Typography textAlign="center">
                <Grid spacing={2} container direction="row" justifyContent="center" textAlign="center">
                    <Grid item>
                        <Typography textAlign="center" sx={{
                        background: '#F7F8FA',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '16px',
                        width: '102px',
                        height: '104px',
                        marginTop:'48px'
                        }}>
                            <Typography sx={{
                                position: 'absolute',
                                background: '#AFB6C0',
                                borderRadius:'20%',
                                m:'33px',
                                width:'37px',
                                height:'37px'
                            }}>
                               <Typography sx={{
                                    color:'white',
                                    fontFamily: 'Lato',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '65%',
                                    paddingTop:'25%'
                                }}>
                                   {file.fileName.split('.')[1].toUpperCase()}
                               </Typography>
                            </Typography>
                        </Typography> 
                    </Grid>
                </Grid>
            </Typography>

            <Box>
                <Typography textAlign="center" sx={{
                    fontFamily: 'Lato',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '120%',
                    marginTop:'47px',
                    textAlign: 'center',
                    color: '#344054'
                }}>
                    {file.fileName}
                </Typography>
            </Box>
            <Typography  textAlign="center" sx={{
                fontFamily: 'Lato',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '120%',
                marginTop:'25px',
                textAlign: 'center',
                color: '#8A989F',
                display:'none'
            }}>
                Raj Kale Shared this file with you
            </Typography>
            <Typography textAlign="center" sx={{
                fontFamily: 'Lato',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '120%',
                marginTop:'50px',
                textAlign: 'center',
                width:'55%',
                marginInlineStart:'23%',
                color: '#8A989F'
            }}>
                Trapping Get the app will copy a link and open the content in the app
            </Typography>
            <Typography textAlign="center">
                <Button sx={{bgcolor:'#943033', width: {lg:'312px',md:'312px'}, marginY:3, height:'5vh'}} variant="contained" onClick={handleDownloadApp}>Download App</Button>
            </Typography>
            <Typography textAlign="center" onClick={handleDownload} sx={{
                fontFamily: 'Lato',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '17px',
                /* identical to box height */
                
                textDecorationLine: 'underline',
                
                color: '#344054'
            }}>
                Download File
            </Typography>
        </Box>
      </Modal>
    </div>
    )
}

export default ModalDownload
