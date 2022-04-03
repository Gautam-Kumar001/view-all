import React, {useContext} from 'react'
import a1Office from '../../assets/a1office.png'
import Wallet from '../../assets/Wallet.png'
import Ellipse_1 from '../../assets/Ellipse_1.png'
import Ellipse_2 from '../../assets/Ellipse_2.png'
import Ellipse_5 from '../../assets/Ellipse_5.png'
import Ellipse_6 from '../../assets/Ellipse_6.png'
import {DataContext} from '../../context/DataContext'
import { useNavigate } from "react-router-dom";



import {Container, Typography, Box, Grid, Paper, Button, Card, CardContent} from '@mui/material'

const OpenFileError = () => {

    let navigate = useNavigate()

    const {file} = useContext(DataContext)
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
        <Box>
            <Typography textAlign="left" component="div" sx={{
                    marginLeft: '-40px',
                    width:'300px',
                    height:'185px'
            }}>
                <Typography textAlign="left" component="div" sx={{
                    marginBottom: '-150px'
                }}>
                    <img src={Ellipse_6} alt="" />
                </Typography>
                <Typography textAlign="left" component="div" sx={{
                        marginInlineStart: '-40px'
                }}>
                    <img src={Ellipse_5} alt="" />
                </Typography>
            </Typography>
        
        {/* <Container> */}
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" sx={{
                top:0,
                marginTop:'20px',
                position:'absolute'
            }}>
                <Grid item>

                </Grid>
                <Grid item> 
                   <img style={{borderRadius:'5px', width:'45px'}} src={a1Office} alt="" />
                </Grid>
                <Grid item>
                    <Typography variant="h5" sx={{
                        fontFamily: 'Lato',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '29.8125px',
                        lineHeight: '45px'}}
                        >
                            A1 Office
                    </Typography> 
                </Grid>
            </Grid>

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                sx={{position:'absolute'}}
                >
            <Grid item xs={3} sx={{width:{sx: 300, sm: 800 ,md: 1055},height: '507px'}}> 
            <Card sx={{
                boxShadow: '0px 2px 30px rgba(0, 0, 0, 0.1)',
                borderRadius: '24px',
            }}>
                <CardContent variant="outlined">
                    <Typography textAlign="center">
                        <img src={Wallet} alt="" />
                    </Typography>
                    <Typography textAlign="center" variant="h6" component="div" sx={{
                        fontSize:{
                            lg: 35,
                            md: 30,
                            sm: 25,
                            xs: 15
                        },
                        fontStyle: 'normal',
                        fontFamily:'Lato',
                        fontWeight: 700,
                        lineHeight: '43px',
                        marginBottom:'36px'
                    }}>
                        We couldn't open the file
                    </Typography>
                    <Typography textAlign="center" variant="h6" component="div" sx={{
                        color: '#656565',
                        fontSize:{
                            lg: 27,
                            md: 25,
                            sm: 20,
                            xs: 17
                        },
                        fontFamily:'Lato',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '29px',
                        marginBottom:'14px'
                    }}>
                        you maybe offline, or the file isn't supported. You can download the file instead.
                    </Typography>
                    <Typography textAlign="center" variant="h6" sx={{
                        color: '#C1272D',
                        fontSize:{
                            lg: 26,
                            md: 24,
                            sm: 21,
                            xs: 18
                        },
                        fontFamily:'Lato',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '26px',
                        marginY:3
                    }}>
                        {file.fileName}
                    </Typography>
                    <Typography textAlign="center">
                        <Button sx={{bgcolor:'#943033', width: '160px', marginY:3}} variant="contained" onClick={handleDownload}>Ok</Button>
                    </Typography>
                </CardContent>
            </Card>
            </Grid>   
            </Grid>
        {/* </Container> */}

        <Typography textAlign="right" component="div" sx={{
            overflow: 'hidden',
            position: 'absolute',
            bottom: 0,
            right: 0
        }}>
            <Typography textAlign="right" component="div" sx={{
                    marginBlockEnd: '-190px'
            }}>
                <img src={Ellipse_1} alt="" />
            </Typography>
            <Typography textAlign="right" component="div">
                <img src={Ellipse_2} alt="" />
            </Typography>
        </Typography>

    </Box>
    )
}


export default OpenFileError