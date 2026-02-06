"use client";

const SOUNDS = {
    SUCCESS: 'https://assets.mixkit.co/active_storage/sfx/600/600-preview.mp3',
    ERROR: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
    CLICK: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'
};

export const useSoundEffects = () => {
    const playSound = (url: string, volume: number) => {
        try {
            const audio = new Audio(url);
            audio.volume = volume;
            const playPromise = audio.play();

            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error("Audio playback interrupted or blocked:", error);
                });
            }
        } catch (err) {
            console.error("Failed to create Audio object:", err);
        }
    };

    return {
        playSuccess: () => playSound(SOUNDS.SUCCESS, 0.4),
        playError: () => playSound(SOUNDS.ERROR, 0.3),
        playClick: () => playSound(SOUNDS.CLICK, 0.2)
    };
};
