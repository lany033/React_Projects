import React from 'react';

//matrial UI Components
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography';

const Copyright = () => {
    return (
       <Typography variant='body2' color='GrayText' align='center'>
        {'Copyright (c) '}
           <Link color = 'inherit' href='https://google.com'>Google</Link>
           { ' ' }
           { new Date().getFullYear() }
       </Typography>
    );
}

export default Copyright;
