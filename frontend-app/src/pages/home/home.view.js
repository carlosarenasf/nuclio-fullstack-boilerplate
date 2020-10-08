import React from 'react';
import CloudinaryContext from 'cloudinary-react/lib/components/CloudinaryContext';

import UploadPhoto from '../../components/uploadPhoto/uploadPhoto.view';
import { cloudName, uploadPreset } from '../../contants/cloudinary';

const Home = () => {
    return (
        <CloudinaryContext cloudName={cloudName} uploadPreset={uploadPreset}>
            <UploadPhoto />
        </CloudinaryContext>
    );
};

export default Home;
