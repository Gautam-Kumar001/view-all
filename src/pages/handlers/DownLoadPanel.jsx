import React from 'react'
import {Typography, Box, Grid, Card, CardContent, Container, Modal} from '@mui/material'
import a1Office from '../../assets/a1office.png'


const DownLoadPanel = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <Box sx={{background: 'rgb(0,0,0,0.88)', height:'100vh'}}>   
            <Container sx={{
                position:'fixed',
                 top:{
                    lg:'8%',
                    md:'8%',
                    sm:'3%',
                    xs: '3%'
                 },
                left:{
                    lg:'33%',
                    md:'20%',
                    sm:'20%',
                    xs: '0%'
                }
            }}>
                <Card sx={{ 
                width:{
                    lg:'40%',
                    md:'40%',
                    sm: '100%',
                    xs: '100%'
                }, 
                height:618,
                borderRadius:'5%'
                }}>
                    <CardContent>
                        <Typography textAlign="center">
                            <Grid spacing={2} container direction="row" justifyContent="center" textAlign="center">
                                <Grid item sm={4} xs={3}>

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
                                        X
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
                    </CardContent>
                </Card>
            </Container>
        </Box>
    )
}

export default DownLoadPanel
