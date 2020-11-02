import styled from 'styled-components'

export const LoaderContainer = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;

  @keyframes jump-jump-1 {
    0%, 70% {
      box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
      transform: scale(0);
    }
    100% {
      box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
      transform: scale(1);
    }
  }

  @keyframes jump-jump-2 {
    0%, 40% {
      box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
      transform: scale(0);
    }
    100% {
      box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
      transform: scale(1);
    }
  }

  @keyframes jump-jump-3 {
    0%, 10% {
      box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
      transform: scale(0);
    }
    100% {
      box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
      transform: scale(1);
    }
  }
`

export const LoaderItemOne = styled.div`
  position: absolute;
  z-index: 3;
  width: 30px;
  height: 30px;
  top: 95px;
  left: 95px;
  background-color: rgba(8, 174, 234, 0.8);
  background-image: linear-gradient(315deg, rgba(8, 174, 234, 0.8), rgba(42, 245, 152, 0.8));
  border-radius: 50%;
  animation-fill-mode: both;
  animation: jump-jump-1 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
`

export const LoaderItemTwo = styled.div`
  position: absolute;
  z-index: 2;
  width: 60px;
  height: 60px;
  top: 80px;
  left: 80px;
  background-color: rgba(8, 174, 234, 0.8);
  background-image: linear-gradient(315deg, rgba(8, 174, 234, 0.8), rgba(42, 245, 152, 0.8));
  border-radius: 50%;
  animation-fill-mode: both;
  animation: jump-jump-2 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
`

export const LoaderItemThree = styled.div`
  position: absolute;
  z-index: 1;
  width: 90px;
  height: 90px;
  top: 65px;
  left: 65px;
  background-color: rgba(8, 174, 234, 0.8);
  background-image: linear-gradient(315deg, rgba(8, 174, 234, 0.8), rgba(42, 245, 152, 0.8));
  border-radius: 50%;
  animation-fill-mode: both;
  animation: jump-jump-3 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
`
