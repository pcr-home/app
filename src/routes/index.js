import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import DefaultProps from '../constants/navigation';
import AppConfig from '../constants/config';

import {ArticlesList, ArticlesSingle } from '../containers';

import {infoScreen, testStartScreen, testResultsScreen, testAnalysisScreen } from '../components';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="articlesList"
          title="Articles List"
          icon={() => <Icon name="home" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="articlesList" component={ArticlesList} />
          <Scene key="articlesSingle" component={ArticlesSingle} />
        </Stack> 

        <Stack
          key="home"
          icon={() => <Icon name="ios-add-circle-outline" {...DefaultProps.middle_icon} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="testStartScreen" component={testStartScreen} />
          <Scene key="testResultsScreen" component={testResultsScreen} />
          <Scene key="testAnalysisScreen" component={testAnalysisScreen} />
        </Stack>

        <Stack
          key="infoScreen"
          icon={() => <Icon name="information-circle-outline" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="infoScreen" component={infoScreen} />
        </Stack>
      </Tabs>
    </Scene>
  </Stack>
);

export default Index;
