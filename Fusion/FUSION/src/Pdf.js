import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf/dist/esm/entry.webpack'
import pdf from './SIH.pdf';



function Pdf() {


  pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset){
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function changePageBack(){
    changePage(-1)
  }
  function changePageNext(){
    changePage(+1)
  }

  return (
    <div>
      <Document  file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page height="500" pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      {pageNumber > 1 && <button onClick={changePageBack}>Previous</button> }
      {pageNumber < numPages && <button onClick={changePageNext}>Next</button>}
    </div>
  );
}

export default Pdf;