import React from 'react';
import GoogleButton from 'react-google-button'
import Grid from '@mui/material/Grid';
import Image from 'mui-image';
import logo from '../styling/scvnjrny_logo_stacked.svg';
import world from '../styling/altWorld.png';
import world2 from '../styling/altWorld2.png';
import map from '../styling/scvMap.png'




const Welcome: React.FC = () => {

  const googleLogin = () => {
    window.open('/auth/google', '_self');
  }
  return (
    <div
      style={{
        backgroundImage: `url(${map})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: 'auto'
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        padding='20px'
        paddingTop='60px'
      >

          <Image src={logo} width='200px' />
          <p
            style={{
              fontFamily: 'Secular One',
              fontSize: '20px',
              // color: '#9e5528'
            }}
          >
             <b style={{color: '#9e5528'}}>Get ready to put your problem-solving skills to the test as you follow the clues to explore your neighborhood, your city, or locations abroad.</b>
          </p>
        <GoogleButton
          className='google-button'
          onClick={googleLogin}
        />
      </Grid>
    </div>
  )
}

export default Welcome;
