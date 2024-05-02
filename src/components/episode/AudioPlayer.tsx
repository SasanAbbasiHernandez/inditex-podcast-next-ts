import React, { useState, useRef, useEffect } from 'react';

import "../../styles/components/episode/audio-player.scss";

interface Props {
    audioSrc: string | undefined
}

const AudioPlayer = ({ audioSrc }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio(audioSrc));

  useEffect(() => {
    audioRef.current.addEventListener('timeupdate', updateTime);
    audioRef.current.addEventListener('loadedmetadata', () => {
      setDuration(audioRef.current.duration);
    });

    return () => {
      audioRef.current.removeEventListener('timeupdate', updateTime);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (e: { target: { value: any; }; }) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    updateTime();
  };

  return (
    <div className='audio-wrapper'>
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      <input
        type="range"
        value={currentTime}
        max={duration}
        onChange={handleSeek}
        className="progress-bar"
      />
      <span>{formatTime(currentTime)}</span>
    </div>
  );
};

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

export default AudioPlayer;