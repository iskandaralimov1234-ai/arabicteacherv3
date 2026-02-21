"use client";

import useSound from 'use-sound';

// Users should place their downloaded premium sounds in the 'public/sounds' folder
// with the following filenames.
const SOUND_PATHS = {
    SUCCESS: '/sounds/success.mp3',
    ERROR: '/sounds/error.mp3',
    CLICK: '/sounds/click.mp3',
    APPLAUSE: '/sounds/applause.mp3',
    HOVER: '/sounds/hover.mp3'
};

export const useSoundEffects = () => {
    // using the useSound hook enables audio caching, prevents Safari blocking issues,
    // and allows for sound interruption during rapid clicks.
    const [playSuccess] = useSound(SOUND_PATHS.SUCCESS, { volume: 0.4 });
    const [playError] = useSound(SOUND_PATHS.ERROR, { volume: 0.3 });
    const [playClick] = useSound(SOUND_PATHS.CLICK, { volume: 0.2 });
    const [playApplause] = useSound(SOUND_PATHS.APPLAUSE, { volume: 0.5 });
    const [playHover] = useSound(SOUND_PATHS.HOVER, { volume: 0.1 });

    return {
        playSuccess,
        playError,
        playClick,
        playApplause,
        playHover
    };
};
