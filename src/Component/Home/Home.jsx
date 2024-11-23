import React, { useState } from 'react';
import Hero from '../Hero/Hero';
import ExploreMenu from '../ExploreMenu/ExploreMenu';
import FoodDisplay from '../FoodDisplay/FoodDisplay';

const Home = () => {
    const [category, setCategory] = useState("All");

    return (
        <div>
            <Hero/>
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
        </div>
    );
};

export default Home;