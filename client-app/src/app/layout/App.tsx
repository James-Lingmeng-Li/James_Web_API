import React,{ useEffect, useState} from 'react';
import axios from 'axios';
import { Container} from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/dashboard/ActivityDashboard';
import agent from '../api/agent';
import LoadingConmponent from './LoadingComponent';
import { useStore } from '../stores/store';
import {observer} from 'mobx-react-lite';

function App() {
  const {activityStore} = useStore();

  useEffect(()=>{
    activityStore.loadActivities();

  },[activityStore])

  if (activityStore.loadingInitial) return <LoadingConmponent content='Loading app'/>
  return (
    <>
      <NavBar />
      <Container style={{marginTop:'7em'}}>
      <ActivityDashboard />
      </Container>
    </>
  );
}

export default observer(App);
