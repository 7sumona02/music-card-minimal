'use client'
import React, { useState, useEffect, MouseEvent } from 'react';

const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration] = useState<number>(210); // 3:30 in seconds
  const [currentTime, setCurrentTime] = useState<number>(0);
  
  // Format time from seconds to MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };
  
  // Update progress when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prevTime => {
          if (prevTime >= duration) {
            setIsPlaying(false);
            return duration;
          }
          return prevTime + 1;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, duration]);
  
  // Update progress percentage when current time changes
  useEffect(() => {
    setProgress((currentTime / duration) * 100);
  }, [currentTime, duration]);
  
  // Handle manual seek
  const handleSeek = (e: MouseEvent<HTMLDivElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = (offsetX / rect.width) * 100;
    const newTime = (duration * newProgress) / 100;
    
    setCurrentTime(newTime);
    setProgress(newProgress);
  };

  return (
    <div className="w-60 absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <div 
        className="w-full h-1 bg-neutral-300 rounded-full cursor-pointer relative"
        onClick={handleSeek}
      >
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 transform translate-x-1/2 -translate-y-1/3 w-2 h-2 bg-white rounded-full shadow-md"></div>
        </div>
      </div>
      
      <div className="flex justify-between text-xs text-neutral-600 mt-1">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default ProgressBar;