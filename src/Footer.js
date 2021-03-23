import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { RuntimeGlobals } from 'webpack';




function Footer() {

  return (
      <div className ="footer" style={{ width: 10000, height: 700, fill: RuntimeGlobals(36,38,39)}}>
          <div className="footer-map" style={{ display:'flex' }}>
      </div>
        <MDBFooter className="font-small pt-4 mt-4">
          <MDBContainer className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title">Footer Content</h5>
                <p>
                  Here you can use rows and columns here to organize your footer
                  content.
                </p>
              </MDBCol>
              <MDBCol md="6">
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer>
              &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
  )
}

export default Footer
