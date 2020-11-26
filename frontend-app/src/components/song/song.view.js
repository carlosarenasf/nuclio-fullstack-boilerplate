import React, { useEffect, useState } from 'react';

const Song = () => {
    const [song, setSong] = useState();
    const [ctx, setCtx] = useState(new AudioContext());
    const [currentPlay, setCurrentPlay] = useState();

    useEffect(() => {
        const url = 'http://localhost:3001/track/5fbe12e2f2ae5bb7e9d1c458';

        // fetch(url)
        //     .then((response) => {
        //         if (response.status === 200) {
        //             return response;
        //         }
        //         return Promise.reject(response.status);
        //     })
        //     .then((data) => data.arrayBuffer())
        //     .then((arrayBuffer) => ctx.decodeAudioData(arrayBuffer))
        //     .then((decodedAudio) => {
        //         setSong(decodedAudio);
        //     });

        const options = {
            method: 'GET',
            headers: new Headers({
                Accept: 'mp3',
            }),
            mode: 'cors',
        };

        fetch(url, options)
            .then((response) => {
                if (response.status === 200) {
                    return response;
                }
                return Promise.reject(response.status);
            })
            .then((payload) => {
                // eslint-disable-next-line no-debugger
                debugger;
                setSong(payload.body);
            })
            .catch((error) => {
                // eslint-disable-next-line no-debugger
                debugger;
                console.log(error);
            });
    }, []);

    const playback = () => {
        const playSound = ctx.createBufferSource();
        playSound.buffer = song;
        playSound.connect(ctx.destination);
        playSound.start(ctx.currentTime);
        setCurrentPlay(playSound);
    };

    return (
        <div>
            {song && (
                <>
                    <p>song</p>
                    <audio>
                        <source src={song} />
                    </audio>
                </>
            )}
            <input type="button" value="play" onClick={playback} />
        </div>
    );
};

export default Song;
