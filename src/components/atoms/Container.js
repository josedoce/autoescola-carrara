import styled from 'styled-components';
import {BreakpointSize, BreakAt} from '../../styles/Breakpoints';

import PropTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${BreakAt(BreakpointSize.sm)}{
    padding: 0 16px;
  }
  ${BreakAt(BreakpointSize.lg)}{
    width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;
Container.defaultProps = {
    children: undefined
};
Container.propTypes = {
    children: PropTypes.node
};
export default Container;