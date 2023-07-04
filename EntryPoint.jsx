/* eslint-disable */

import React from "react";
import HomePageNavigation from "./HomePageNavigation/HomePageNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BladeProvider } from '@razorpay/blade/components';
import { paymentTheme } from '@razorpay/blade/tokens';

const EntryPoint = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BladeProvider themeTokens={paymentTheme} colorScheme="light">
                <HomePageNavigation/>
            </BladeProvider>
        </GestureHandlerRootView>
    );
}

export default EntryPoint;

