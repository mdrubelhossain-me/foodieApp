import React, { useState } from 'react';
import Hero from '../Hero/Hero';
import ExploreMenu from '../ExploreMenu/ExploreMenu';

const Home = () => {
    const [category, setCategory] = useState("All");

    return (
        <div>
            <Hero/>
            <ExploreMenu category={category} setCategory={setCategory} />
        </div>
    );
};

export default Home;