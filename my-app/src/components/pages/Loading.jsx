import {
  Box,
  // TextField,
} from '@mui/material';

import CircularProgress from '@mui/material/CircularProgress';

import PageCenter from '../templates/PageCenter/PageCenter';

function Loading() {
  return (
    <PageCenter>
      <Box sx={{
        display: 'flex',
      }}
      >
        <CircularProgress />
      </Box>
    </PageCenter>
  );
}

export default Loading;
