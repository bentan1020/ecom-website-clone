import React from 'react'   
import styled from 'styled-components'
import logo from '../images/Logo.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height:80px;
`

const Left = styled.div`
  flex:1;
  padding-top: 45px;
  padding-left: 65px;
`

const Right = styled.div`
  display: flex;
  flex:1;
  padding-top: 45px;
  align-items: center;
  justify-content: flex-end;
  padding-right: 50px;
`

const Menu = styled.div`
  Margin: 20px;
`

const Button = styled.button`
  background-color: rgb(73, 187, 73);
  color: white;
  border: None;
  font-size: 15px;
  padding: 15px 25px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 2;
`

const Navbar = () => {
  return (
    
    <Wrapper>

      <Left><img src={logo} width={140} height={42} alt="logo"/></Left>
      
      <Right>

        <Menu>
          <a href="cart.html">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill = "#ffffff" d="M0.87 0.959991C0.855 0.963742 0.84 0.969366 0.825 0.974991C0.358125 1.04062 0 1.43624 0 1.91999C0 2.45062 0.429375 2.87999 0.96 2.87999C1.49063 2.87999 1.92 2.45062 1.92 1.91999H4.155C4.75313 1.91999 5.06437 2.04374 5.295 2.24999C5.52187 2.45437 5.70562 2.79937 5.865 3.32999L9.705 18.825C9.84937 19.3744 9.99375 19.9406 10.395 20.4C10.5619 20.5912 10.7719 20.7469 11.025 20.865C10.7437 21.1987 10.56 21.6131 10.56 22.08C10.56 23.1356 11.4244 24 12.48 24C13.5356 24 14.4 23.1356 14.4 22.08C14.4 21.7275 14.2969 21.405 14.13 21.12H17.07C16.9031 21.405 16.8 21.7275 16.8 22.08C16.8 23.1356 17.6644 24 18.72 24C19.7756 24 20.64 23.1356 20.64 22.08C20.64 21.5869 20.4394 21.1462 20.13 20.805C20.1844 20.6587 20.1619 20.4937 20.0737 20.3662C19.9837 20.2369 19.8375 20.16 19.68 20.16H12.345C11.6044 20.16 11.3025 20.0025 11.1 19.77C10.8994 19.5394 10.7775 19.1362 10.635 18.6V18.585L10.305 17.28H19.11C19.3106 17.28 19.4925 17.1544 19.56 16.965L23.01 7.84499C23.0662 7.69874 23.0456 7.53374 22.9556 7.40437C22.8656 7.27499 22.7175 7.19812 22.56 7.19999H7.815L6.795 3.10499C6.795 3.09562 6.795 3.08437 6.795 3.07499C6.61125 2.45624 6.37312 1.91999 5.94 1.52999C5.50687 1.13999 4.8975 0.959991 4.155 0.959991H0.96C0.945 0.959991 0.93 0.959991 0.915 0.959991C0.9 0.959991 0.885 0.959991 0.87 0.959991ZM8.055 8.15999H21.87L18.78 16.32H10.08L8.055 8.15999ZM12.48 21.12C13.0162 21.12 13.44 21.5437 13.44 22.08C13.44 22.6162 13.0162 23.04 12.48 23.04C11.9437 23.04 11.52 22.6162 11.52 22.08C11.52 21.5437 11.9437 21.12 12.48 21.12ZM18.72 21.12C19.2562 21.12 19.68 21.5437 19.68 22.08C19.68 22.6162 19.2562 23.04 18.72 23.04C18.1837 23.04 17.76 22.6162 17.76 22.08C17.76 21.5437 18.1837 21.12 18.72 21.12Z"></path></svg>
          </a> 
        </Menu>

        <Menu><Button>Shop</Button></Menu>

      </Right>

    </Wrapper>
  
  )
}

export default Navbar