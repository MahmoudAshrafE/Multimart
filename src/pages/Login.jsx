import React, { useState } from 'react';
import '../styles/login.css'
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

import CommonSection from '../components/UI/commonSection';

function Login() {

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <>
    <CommonSection title='Login' />

    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '90%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="lg"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="lg"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="lg"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="lg"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4 p-1' label='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4 p-1' label='Password' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100 fs-6">Sign in</MDBBtn>
          <p className="text-center">Not a member? <a href="#!" onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign un with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '90%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon className='common facebook-f' fab icon='facebook-f' size="lg"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon className='common twitter' fab icon='twitter' size="lg"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon className='common google' fab icon='google' size="lg"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon className='common github' fab icon='github' size="lg"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4 p-1' label='Name' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4 p-1' label='Username' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4 p-1' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4 p-1' label='Password' id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4 readAgree'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100 fs-6">Sign up</MDBBtn>
          <p className="text-center">you have an account? <a href="#!" onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>Login</a></p>
        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
    </>
  );
}

export default Login;