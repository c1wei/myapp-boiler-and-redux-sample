import { PropTypes } from 'prop-types';
import { Box } from '@mui/material';

function PageCenter({ children }) {
  return (
    <Box sx={{
      height: '100xh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      {children}
    </Box>
  );
}

PageCenter.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PageCenter;
