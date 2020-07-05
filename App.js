import React from 'react';
import {useInitData} from './js/hooks/useInitData';
import HomePage from './js/components/home/home-page';
import SplashScreen from "./js/components/splash-screen/splash-screen";

const App = () => {
    // Load main app data
    const {loading} = useInitData();
    return loading ? <SplashScreen/> : <HomePage/>;
};

export default App;
