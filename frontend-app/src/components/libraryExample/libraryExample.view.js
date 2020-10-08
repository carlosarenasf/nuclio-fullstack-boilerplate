import React, { useState } from 'react';
import { Slider } from 'antd';
import 'antd/dist/antd.css';
import usePost from '../../hooks/useResponsive';

// https://ant.design/
const LibraryExample = () => {
    const [sliderValue, setSliderValue] = useState(10);
    const [range, setRange] = useState([20, 50]);

    const { data, error } = usePost('POST', {});
    if (!data || error) {
        return <div />;
    }
    return (
        <>
            <Slider defaultValue={sliderValue} onAfterChange={(value) => setSliderValue(value)} />
            <p>Slider {sliderValue}</p>

            <Slider range step={10} defaultValue={[20, 50]} onChange={(value) => setRange(value)} />
            <p>{range[0]}</p>
            <p>{range[1]}</p>
        </>
    );
};

export default LibraryExample;
