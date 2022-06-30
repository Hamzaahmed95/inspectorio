import styled from 'styled-components';

import { Box } from '../index';

const Flex = styled(Box)`
  overflow-x:${props => props.overflow || "none"}; 
  height:${props => props.heightTab || "auto"};
  border:${props => props.borders || "none"};    
`;

Flex.propTypes = Box.propTypes;

Flex.defaultProps = {
  display: 'flex',
};

export default Flex;
