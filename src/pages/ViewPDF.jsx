import React, {useEffect, useState, useContext} from 'react'
import Container from '@mui/material/Container';
import {useLocation} from "react-router-dom"
import 
{ Typography,
    Snackbar,
    IconButton,
} from '@mui/material';
import a1office from '../assets/a1office.png'
import {DataContext} from '../context/DataContext'
import Loading from './Loading'
import ModalDownload from './handlers/ModalDownload'
import { useNavigate } from "react-router-dom";
 
// Import Worker
import { Worker, Viewer ,RenderPageProps} from '@react-pdf-viewer/core';
// Import the main Viewer component
import { toolbarPlugin, ToolbarSlot, TransformToolbarSlot  } from '@react-pdf-viewer/toolbar';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';

// Import the styles
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { getFilePlugin } from '@react-pdf-viewer/get-file';

// Import styles of default layout plugin
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';


const CustomPageLayer = (props) =>{
    useEffect(() => {
        if (props.renderPageProps.canvasLayerRendered) {
            props.renderPageProps.markRendered(props.renderPageProps.pageIndex);
        }
    }, [props.renderPageProps.canvasLayerRendered]);

    return (
        <>
            {props.renderPageProps.canvasLayer.children}
            {props.renderPageProps.annotationLayer.children}
        </>
    );

}

const ViewPDF = () => {


    const {search} = useLocation();
    const navigate = useNavigate()

    let ErrorComponent;

    const [response, setResponse] = useState();
    const [banner, setBanner] = useState(false);
    const [error, setError] = useState(false);

    const dataContext = useContext(DataContext)

    const getFilePluginInstance = getFilePlugin({
        fileNameGenerator: (file) => {
            // `file.name` is the URL of opened file
            console.log(file.data.split('/'))
            // const fileName = file.name.substring(file.name.lastIndexOf('/') + 1);
            return response.response.fileName;
        }
    });

    const toolbarPluginInstance = toolbarPlugin();
    const { Toolbar } = toolbarPluginInstance;
    const renderPage = (props) => <CustomPageLayer renderPageProps={props} />;
    const {DownloadButton} = getFilePluginInstance


    const handleQueryParams = () => {
        const query = new URLSearchParams(search)
        let FILEID = query.get('file_id')
    
        if(FILEID){
          handleReloadPDF(FILEID)
        }
        // return useMemo(() => new URLSearchParams(search), [search]);
    }
    
    const handleReloadPDF = async (file_id) =>{
        console.log(file_id)
        const headers = new Headers();
        await headers.append('Access-Control-Allow-Origin', '*');
        // await setLoading(true)

        await fetch(`${process.env.REACT_APP_GETFILEID_URL}?fileID=${file_id}`,{
            method:'GET',
            headers:headers,
        })
        .then(response =>  response.text())
        .then(async (result) => {
            let a = {
                response: JSON.parse(result)
            }
            console.log(JSON.parse(result))
            if(JSON.parse(result).msg){
                navigate('/PageNotFound')
            }else{
            // console.log(JSON.parse(result))
                await setBanner(true)
                await setResponse(a)
                await dataContext.handleFile(a.response)
                await handleNonPDF(a)
            }
        }).catch((e)=>{
            // setLoading(false)
            setError(true)
            console.log(e)
        })
    }
    const handleClose = () =>{
        setBanner(false)
    }

    const handleNonPDF = (a)=>{
        if(a.response.fileName.split('.')[1] !== 'pdf'){
            setError(true)
        }
    }

    useEffect(()=>{
        // if (performance.navigation.type === 1) {
          // console.log("This page is reloaded");
          handleQueryParams()
        // } else {
        //   console.log("This page is not reloaded");
        // }
      },[])

    return (
        <div>
        {/* {response.response.msg == "ID is Not Found" ? <PageNotFound />:<div></div>} */}
        {error  ? <ModalDownload /> : <div></div> }
        <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js">
            <div
            className="rpv-core__viewer"
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',    
                position:'fixed',
                top:'0',
                left:'0',
                width:'100%'            
            }}
            >
            <div
                style={{
                    alignItems: 'center',
                    backgroundColor: '#eeeeee',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    padding: '4px',
                }}
            >
                <Toolbar>
                    {(props) => {
                        const {
                            CurrentPageInput,
                            EnterFullScreen,
                            GoToNextPage,
                            GoToPreviousPage,
                            NumberOfPages,
                            Print,
                            Zoom,
                            ZoomIn,
                            ZoomOut,
                        } = props;
                        return (
                            <>
                                <div style={{ padding: '0px 2px' }}>
                                    <ZoomOut />
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    <Zoom />
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    <ZoomIn />
                                </div>                    
                                <div
                                    style={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        padding: '0px 2px',
                                        marginLeft:'auto',
                                        marginRight:'auto'
                                    }}
                                >
                                    <CurrentPageInput /> / <NumberOfPages />
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    <Print />
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    <DownloadButton />
                                </div>
                            </>
                        );
                    }}
                </Toolbar>
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                { response?
                <Viewer
                    fileUrl={response.response.fileUrl}
                    renderPage={renderPage}
                    theme='dark'
                    plugins={[toolbarPluginInstance, getFilePluginInstance]}
                />:
                <Loading />
                }
            </div>
        </div>
            </Worker>
            {
                error? <div></div>:
            
                <Snackbar
                open={banner}
                anchorOrigin=
                {{ vertical: 'bottom',
                    horizontal : 'center'
                }}
                
                sx={{
                    width:'95%',
                }}
                action={<Typography component="div" sx={{width:'65vw', display:"flex"}}>
                    <Typography sx={{ fontSize:{sm: 15,xs: 10}}}>An app that gives you power to take your documents whereever
                        you go. Allows you to create, convert, edit & share documents hassle-free. <a style={{color:'yellowgreen'}} href="/">Download App Here</a>
                    </Typography>
                    <Typography>
                    <IconButton sx={{color:'white'}} onClick={handleClose}>
                        x
                    </IconButton>
                    </Typography>
                </Typography>}
                // onClose={handleClose}
                message={<Typography component="div" alignContent="end" sx={{width:'15vw'}} >
                    <Typography component="div"><img style={{width:'60px'}} src={a1office} alt="" /></Typography>
                    <Typography component="div" sx={{ fontSize:{sm: 17,xs: 12}}}>A1 Office</Typography>
                </Typography>}
                
                />
            }
            </div>
        
        </div>
        
)}


export default ViewPDF