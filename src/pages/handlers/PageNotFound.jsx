import React from 'react'
import {Typography, Grid, Box, Container, Button} from '@mui/material'
import { useNavigate } from "react-router-dom";
import a1Office from '../../assets/a1office.png'
import ellipse_3 from '../../assets/Ellipse_3.png'
import ellipse_4 from '../../assets/Ellipse_4.png'
import layer from '../../assets/Layer_2.png'
import frame from '../../assets/Frame.png'


const PageNotFound = () => {

    let navigate = useNavigate()

    const handleRedirectHomePage = () =>{
        navigate('/')
        console.log("click")
    }   
    return (
        <Box>
            <Typography component="div" sx={{
                display:'flex'
            }}> 
                <Typography>
                    <img src={ellipse_3} alt=""  style={{float: 'left', width:'74%'}}/>
                </Typography>
                
                <Grid spacing={2} sx={{marginTop: '36px', position:'absolute'}} container direction="row" justifyContent="center" textAlign="center">
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
               <Typography textAlign="right" sx={{position: 'absolute', right:0}}>
                    <img src={ellipse_4} alt="" style={{float: 'right', width:'74%'}} />
                </Typography>
            </Typography>

            <Container sx={{height: '48vh'}}>
                <Grid container direction="row" textAlign="center">
                    <Grid item sm={6}>
                        <img src={layer} alt="" style={{width:'60%'}} /> 
                    </Grid>
                    <Grid item sm={6}> 
                        <Typography component="div" sx={{
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: {
                                lg: 55,
                                md: 55,
                                sm: 50,
                                xs: 40
                            },
                            lineHeight: '115px',
                            textAlign: 'left',
                            color: '#000000'
                        }}>
                            Page Not Found
                        </Typography>
                        <Typography component="div" sx={{
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: {
                                lg: 35,
                                md: 30,
                                sm: 25,
                                xs: 20
                            },
                            textAlign: 'left',
                            lineHeight: {
                                lg:1.5,
                                md:1.5,
                                sm:1.5,
                                xs:1.5
                            },
                            color: '#707070'
                        }}>
                            Sorry. The content you're looking for doesn't exist. Either it was removed, or you mistyped the link.
                        </Typography>
                    </Grid>
                    <Grid item > 
                    {/* <Typography component="div">
                        Sorry. The content you're looking for doesn't exist. Either it was removed, or you mistyped the link.
                    </Typography> */}
                    </Grid>
                </Grid>
            </Container>
            <Grid container direction="row" sx={{marginTop: '70px'}}>
                {/* <Grid container justifyContent="center" textAlign="center" sx={{height: '0vh'}}>  */}
                    
                {/* </Grid> */}
                <Grid container textAlign="right" justifyContent="right" sx={{paddingRight:'3%', position: 'absolute',bottom: 0,paddingBottom: '15px'}}>
                    <img src={frame} alt="" />
                </Grid>
                
            </Grid>
            <Typography textAlign="center">
                <Button sx={{bgcolor:'#943033', width: '200px', marginY:3, height:'7vh'}} variant="contained" onClick={handleRedirectHomePage}>Go to Homepage</Button>
            </Typography>    
                

        </Box>
    )
}

export default PageNotFound
