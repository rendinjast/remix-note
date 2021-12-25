import { Link } from 'remix';
import styled from 'styled-components';
import { rgba } from 'polished';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 90px;
  position: fixed;
  background-color: #f7f6fb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 174px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  @media screen and (max-width: 1024px) {
    padding: 0 74px;
  }
  @media screen and (max-width: 540px) {
    padding: 0 24px;
  }
`;
export const HeaderTitle = styled(Link).attrs({ to: '/' })`
  font-size: 1.5rem;
  font-weight: 600;
  color: #3e3e3e;
  text-decoration: none;
  &:active,
  &:visited {
    color: #3e3e3e;
  }
  @media screen and (max-width: 540px) {
    font-size: 1.2rem;
  }
`;

export const AddNodeButton = styled(Link).attrs({ to: '/new' })`
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  background-color: white;
  padding: 4px 14px;
  border: none;
  margin-right: 80px;
  text-decoration: none;
  border-style: solid;
  border-width: 3px;
  animation: spin 3s linear infinite;
  &:hover {
  }
  &:active,
  &:visited {
    color: #3e3e3e;
  }
  @media screen and (max-width: 1200px) {
    margin-right: 0;
  }
  @media screen and (max-width: 540px) {
    height: 34px;
    border-radius: 12px;
    padding: 2px 8px;
  }
  @keyframes spin {
    0% {
      border-color: #fd91b1;
      color: #fd91b1;
      box-shadow: 0 10px 20px ${rgba('#fd91b1', 0.6)};
    }
    20% {
      border-color: #fed3a0;
      color: #fed3a0;
      box-shadow: 0 10px 20px ${rgba('#fed3a0', 0.6)};
    }
    40% {
      border-color: #b19ffd;
      color: #b19ffd;
      box-shadow: 0 10px 20px ${rgba('#b19ffd', 0.6)};
    }
    60% {
      border-color: #89e5fe;
      color: #89e5fe;
      box-shadow: 0 10px 20px ${rgba('#89e5fe', 0.6)};
    }
    80% {
      border-color: #ffbebe;
      color: #ffbebe;
      box-shadow: 0 10px 20px ${rgba('#ffbebe', 0.6)};
    }
    90% {
      border-color: #94f6d0;
      color: #94f6d0;
      box-shadow: 0 10px 20px ${rgba('#94f6d0', 0.6)};
    }
    100% {
      border-color: #fd91b1;
      box-shadow: 0 10px 20px ${rgba('#fd91b1', 0.6)};
      color: #fd91b1;
    }
  }
`;
