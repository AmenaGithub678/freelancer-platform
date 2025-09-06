import React from 'react';
import Counter from '../Componets/Counter';
import Different from '../Componets/Different';
import Banner from '../Componets/Banner';
import FeatureTask from '../Componets/FeatureTask';
import Works from '../Componets/Works';

const Home = () => {
    return (
        <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-gray">
<Banner></Banner>
<FeatureTask></FeatureTask>
<Different></Different>
<Works></Works>
<Counter></Counter>
        </div>
    );
};

export default Home;