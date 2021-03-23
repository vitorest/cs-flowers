import React, { Fragment } from 'react';
import { MDBBtn } from 'mdbreact';

const ButtonPage = () => {
  return (
    <Fragment>
      <MDBBtn color="primary" outline rounded>
        Primary
      </MDBBtn>
      <MDBBtn rounded outline>
        Default
      </MDBBtn>
    </Fragment>
  );
};

export default ButtonPage;
