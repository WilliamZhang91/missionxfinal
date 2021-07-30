import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import LoginPage from "./LoginPage";

// these styles at the top are done with styled components so will need
// styled-components to be installed to work.
const Nav = styled.nav`
  padding: 0 20px;
  height: 60px;
  background-color: #57baec;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  padding-left: 90px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  padding-bottom: 5px;

  li:nth-child(3) {
    margin: 0px 40px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

var Item = styled.li`
  padding-right: 60px;
  padding-bottom: 0px;
`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0 50px 0 20px;
`;
// this is what is called on the login/register bit
function LoginDialog(props) {
  const { onClose, selectedValue, open } = props;

  return (
    <Dialog
      open={props.openDialog}
      onClose={props.closeDialog}
      maxWidth="md"
    >
    <div style={{width:"800px"}}>
      <LoginPage  />
      </div>
    </Dialog>
  );
}

// A bit of code here with relating to react states for the pop up dialog for log in and register

const Navbar = () => {
  const [dialogOpen, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <Nav>
        <Logo>
          <div>
            <img
              className="heroImg"
              src="Mission X Images\Home Page\Star Logo 07-2.png"
              alt="LevelUp Works Logo"
              style={{ width: "150px" }}
            />
          </div>
        </Logo>
        <Menu>
          <div className="nav">
            <Item>
              <StyledLink to="/">
                <li>Home</li>
              </StyledLink>
            </Item>
            <Item>
              <StyledLink to="/">
                <li>Features</li>
              </StyledLink>
            </Item>
            <Item>
              <StyledLink to="/">
                <li>Teachers</li>
              </StyledLink>
            </Item>

            <Item>
              <img
                className="heroImg"
                src="Mission X Images\Home Page\LANG.png"
                alt="LANG"
                style={{ width: "30px", marginRight: "5px" }}
              />

              <img
                className="heroImg"
                src="Mission X Images\Home Page\NZ Flag@2x.png"
                alt="NZ Flag"
                style={{ width: "30px", marginRight: "5px", paddingTop: "3px" }}
              />
              <img
                className="heroImg"
                src="Mission X Images\Home Page\Maori Flag@2x.png"
                alt="Maori Flag"
                style={{ width: "30px", paddingTop: "3px" }}
              />

              <StyledLink onClick={handleClickOpen}>
                <li>
                  <img
                    className="heroImg"
                    src="Mission X Images\Home Page\icon awesome-user-circle.png"
                    alt="icon awesome-user-circle"
                    style={{ width: "30px" }}
                  />
                  Register | Login
                </li>
              </StyledLink>
              <LoginDialog openDialog={dialogOpen} closeDialog={handleClose} />
            </Item>
          </div>
        </Menu>
      </Nav>
    </>
  );
};

export default Navbar;
