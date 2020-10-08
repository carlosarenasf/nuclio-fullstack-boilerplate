import React, { useRef, useState } from 'react';
import * as request from 'superagent';
import Image from 'cloudinary-react/lib/components/Image';
import Transformation from 'cloudinary-react/lib/components/Transformation';
import { cloudName, uploadPreset } from '../../contants/cloudinary';

const UploadPhoto = () => {
    const [titleEl, setTitleEl] = useState('');
    const [photoId, setPhotoId] = useState(0);
    const fileInputEl = useRef(null);
    const [photoIds, setPhotoIds] = useState([]);

    const onPhotoUploaded = (photoIdIn, fileName, response) => {
        console.debug(photoIdIn, fileName, response);
        setPhotoIds([...photoIds, response.body.public_id]);
    };

    const onPhotoSelected = (files) => {
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
        const title = titleEl;
        // eslint-disable-next-line no-restricted-syntax
        for (const file of files) {
            setPhotoId(photoId + 1);
            const fileName = file.name;

            request
                .post(url)
                .field('upload_preset', uploadPreset)
                .field('file', file)
                .field('multiple', true)
                .field('tags', title ? `myphotoalbum,${title}` : 'myphotoalbum')
                .field('context', title ? `photo=${title}` : '')
                .on('progress', (progress) => console.debug(photoId, file.name, progress))
                .end((error, response) => {
                    onPhotoUploaded(photoId, fileName, response);
                });
        }
    };

    return (
        <div>
            <div id="direct_upload">
                <h1>New Photo</h1>
                <h2>Direct upload from the browser with React File Upload</h2>
                <p>You can also drag and drop an image file into the dashed area.</p>
                <form>
                    <div className="form_line">
                        <p path="title">Title:</p>
                        <input
                            type="text"
                            onChange={(e) => setTitleEl(e.target.value)}
                            className="form-control"
                            placeholder="Title"
                        />
                    </div>
                    <div className="form_line">
                        <p>Image:</p>
                        <div className="form_controls">
                            <div className="upload_button_holder">
                                <label className="upload_button" htmlFor="fileupload">
                                    Upload
                                    <input
                                        type="file"
                                        id="fileupload"
                                        accept="image/*"
                                        multiple="multiple"
                                        ref={fileInputEl}
                                        onChange={() => onPhotoSelected(fileInputEl.current.files)}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
                <h2>Status</h2>
            </div>
            {photoIds.map((publicId) => (
                <Image
                    publicId={publicId}
                    className="thumbnail inline"
                    width="400"
                    height="400"
                    crop="fit"
                    quality="180"
                >
                    <Transformation quality="auto" fetchFormat="auto" />
                </Image>
            ))}
        </div>
    );
};

export default UploadPhoto;
