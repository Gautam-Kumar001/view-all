import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
    return (
        <div className="my-spinner">
            <CircularProgress thickness={2} size={120} 
            sx=
            {{
                position: 'fixed',
                top: '45%',
                left: '40%',
            }}/>
      </div>
    )
}

export default Loading
