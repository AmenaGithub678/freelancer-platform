import React from 'react';
import Counter from '../Componets/Counter';
import Different from '../Componets/Different';
import Banner from '../Componets/Banner';
import FeatureTask from '../Componets/FeatureTask';

const Home = () => {
    return (
        <div>
<Banner></Banner>
<FeatureTask></FeatureTask>
<Different></Different>
<Counter></Counter>
        </div>
    );
};

export default Home;