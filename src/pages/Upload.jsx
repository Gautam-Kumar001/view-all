import React, {useEffect, useState, useRef} from 'react'
import Container from '@mui/material/Container';
import Loading from './Loading'
import 
{ Typography,
     Button,
    TextField,
    List,
    ListItem,
    ListItemText,
    Snackbar,
    IconButton,
    Box
} from '@mui/material';
import { useNavigate, useLocation } from "react-router-dom"

const Upload = () => {

    const [file, newFile] = useState();
    const [IsSelected, setIsSelected] = useState(false);
    const [response, setResponse] = useState();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    const onFileChange = (event) => {
    
        // Update the state
        console.log(event.target.files[0])
        var type = event.target.files[0].type.split('/')[1]
        // if(type == 'pdf'){
          newFile(event.target.files[0])
          setIsSelected(true)
        // }
        
        // this.setState({ selectedFile: event.target.files[0] });
      
      };

    const handleUpload =  async () =>{
        const formData = new FormData();
        const headers = new Headers();
    
        await setLoading(true)
    
        await formData.append(
          "file",
          file
        );
    
        // await headers.append('Content-Type','multipart/form-data')
        // await headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        // await headers.append('Access-Control-Allow-Credentials', 'true');
    
        // var config = {
        //   method: 'POST',
        //   headers: { 
        //     'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI3ZGRlMTAyMDAyMGI3OGZiODc2ZDdiMjVlZDhmMGE5Y2UwNmRiNGQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiYW1yIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3JwZGV2LWRldmVsb3BtZW50IiwiYXVkIjoicnBkZXYtZGV2ZWxvcG1lbnQiLCJhdXRoX3RpbWUiOjE2NDUyMjY3MjEsInVzZXJfaWQiOiI5MDA4Y0dJRmp6VjQxWjVXNnN4QjFTMEExRHExIiwic3ViIjoiOTAwOGNHSUZqelY0MVo1VzZzeEIxUzBBMURxMSIsImlhdCI6MTY0NTIyNjcyMSwiZXhwIjoxNjQ1MjMwMzIxLCJlbWFpbCI6ImFtc2hlaGFseUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhbXNoZWhhbHlAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.nxCf19lLHM-57yQhqhyGgERrdq5quG7orjE7npgozzKcVJ-4TdNp1tdWX1-6QrmSO1_h2aeinBptxWAbWzCYpUvs3TRAZwjypf7mKiKnEjUMDQ0DlWLAqDQ6p8xiezNeJ3SuL6tpKUsKj9fKvhP7k5ngeDpTwB63JG_Bs11W6hsNxkB9Kb0W7LO8jcASOf7PgHYbrzwY7paBwPAA8l5nK0sbK7ZGFjfn6-maAIvTTYSjdWLZTjg0KXdteoR00wMcR8EGPbENcVGXe5QIezNxSO_J_9iDDJnaSmQSqkcXRkOIFCWnU7f4sG1hjw-We-tvBvaFtyKCNXNqAznlepvWSg',
        //     'Content-Type' : 'multipart/form-data;',
        //   },
        //   body : formData
        // };
    
        await fetch(`${process.env.REACT_APP_UPLOADFILE_URL}?uid=ObcpqsJCdDV4pYTrnncjmHQNFSm1`, {
          headers: headers,
          method: 'POST',
          body: formData,
        })
        .then(response =>  response.text())
      .then(result => {
        console.log(JSON.parse(result))
        setResponse(JSON.parse(result))
        setLoading(false)
      })
      .catch(error => {
        console.log('error', error)
        setLoading(false)
      });
    
        console.log(...formData)
    }

    useEffect(()=>{
        if(response) {
          setLoading(false)
        //   setSharelink(true)
        //   setBanner(true)
          navigate({
            pathname:'/view',
            search: `?file_id=${response.response.file_id}`
          })
      }
    },[response])
    return (
        <Container sx={{backgroundColor: '#a0aab4'}}>
            {loading? <Loading />: <div></div>}
        <Box sx={{ bgcolor: 'white', height: '100vh', border:3, p:5, m:1, borderRadius:5, boxShadow: 20}}>
          <Typography alignContent="center"  variant="h5" textAlign="center" component="h6" sx=
          {{
            p:1,
            fontSize: {
              lg: 30,
              md: 20,
              sm: 15,
              xs: 10
            }
          }}>
              Upload any file the file should be of those extensions: pdf, pptx, ppt, xls, xlsx, doc, docx, txt
          </Typography>
          <Typography component="div" textAlign="center" sx={{marginY:5 ,display:'block'}}>
            <TextField sx={{width:'100%'}} type="file" variant="standard" label="" placeholder="no file choosen" onChange={onFileChange}/>
            <Button sx=
            {{
              marginBlockStart:'10%' ,
              fontSize: {
                lg: 25,
                md: 20,
                sm: 15,
                xs: 10
            }}} 
            variant="contained" onClick={handleUpload}>
              Upload file
            </Button>
          </Typography>
          <Typography component="div" sx={{overflow:"overlay"}}>
          {IsSelected ? (
              <List>
                <ListItem >
                    <ListItemText primary="File Name" secondary={file.name} />
                </ListItem>
                <ListItem >
                    <ListItemText primary="File Type"  secondary={file.type} />
                </ListItem>
                <ListItem >
                    <ListItemText primary="Size in bytes" secondary={file.size} />
                </ListItem>
                <ListItem >
                    <ListItemText primary="Last Modified Date" secondary={file.lastModifiedDate.toLocaleDateString()} />
                </ListItem>
              </List>
            ) : (
              <Typography sx={{marginY:5, textAlign:"center", fontSize:20 , color:'white'}}>
                Select a file to show details
              </Typography>
            )}
          </Typography>
        </Box>
      </Container>
    )
}


export default Upload