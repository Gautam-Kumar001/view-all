import React, {useState} from 'react'
import {Document, Page} from 'react-pdf'

const Pdfview = () => {

    const [numPage, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);


    const onDocumentLoadSucess = (numPages) =>{
        console.log(numPages)
        setNumPages(numPages.numPages);
        setPageNumber(1);
    }

    const OnChangePage = (offSet) =>{
        setPageNumber(prevPageNumber => prevPageNumber + offSet)
    }

    const OnChangePageBackward = (offSet) =>{
        OnChangePage(-1)
    }

    const onChangePageNext = () =>{
        OnChangePage(+1)
    }
    return (
        <div >
              <Document file="https://firebasestorage.googleapis.com/v0/b/rpdev-development.appspot.com/o/public%2FL11%20Handsoff.pdf?alt=media&token=d43afab4-9a94-43ff-8853-2f3350dab314" onLoadSuccess={onDocumentLoadSucess}>      
              <div style={{backgroundColor:'white'}}>Pages {pageNumber} of {numPage}</div>
              <div style={{ overflow: 'scroll' , transform:'translate(0px, 50px)', height:'80vh', width:'fit-content'}}>  
              {
                Array.from(
                  new Array(numPage),
                  (el,index) =>(
                    <Page 
                      key={`page_${index+1}`}
                      pageNumber={index+1}
                      on
                      onClick={
                        ()=> console.log(el)
                      }
                    />
                  )
                )
              }
              </div>  
              
            </Document>
        </div>
    )
}

export default Pdfview
