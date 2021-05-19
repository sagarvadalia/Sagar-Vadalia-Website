
import React from 'react';
import './Resume.css';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import Footer from '../../components/Footer/Footer';
import {Grid} from 'semantic-ui-react';


function Resume() {

    return (
        <Grid padded = {"vertically"} className = "resumePageGrid">
            <SiteHeader></SiteHeader>
            <Grid.Row className = "resumePageMainRow">
                <Grid.Column only = {"computer"} width = {3}/>
          <Grid.Column only={"computer"} width={10}>
            <a href= "https://drive.google.com/file/d/10x1PxPh9_1WUFocRLxZYRYZ4b-LuFuoZ/view">
               <iframe title = "desktop resume" className = "resumeIframe" src = "/SagarVadaliaResume.pdf"/>
            </a>

                </Grid.Column>
                <Grid.Column only = {"computer"} width = {3}/>


                <Grid.Column only = {"tablet mobile"} width = {1}/>
          <Grid.Column only={"tablet mobile"} width={14}>
            <a href="https://drive.google.com/file/d/10x1PxPh9_1WUFocRLxZYRYZ4b-LuFuoZ/view">
                 <iframe title = "mobile resume" className = "resumeIframe" src = "/SagarVadaliaResume.pdf"/>
            </a>

                </Grid.Column>

                <Grid.Column only = {"tablet mobile"} width = {1}/>
            </Grid.Row>
            <Footer></Footer>
        </Grid>
    );
  }

export default Resume;
