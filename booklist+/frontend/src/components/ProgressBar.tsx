import React from 'react';
import { ProgressBar } from 'react-bootstrap';

interface Props {
    progress: number;
}

const Progress: React.FC<Props> = ({ progress }) => {
    return (
        <ProgressBar now={progress} label={`${progress}%`} />
    );
};

export default Progress;
