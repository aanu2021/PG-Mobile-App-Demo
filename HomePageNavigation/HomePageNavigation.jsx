/*  eslint-disable */

import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import TemplatePage from '../TemplatePage/TemplatePage';
import PaymentPage from '../PaymentPage/PaymentPage';
import PaymentPageDetails from '../DetailsPage/PaymentPageDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomePageNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="landingpage" component={LandingPage} />
                <Stack.Screen name="detailspage" component={PaymentPageDetails} />
                <Stack.Screen name="templatepage" component={TemplatePage} />
                <Stack.Screen name="paymentpage" component={PaymentPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default HomePageNavigation;
