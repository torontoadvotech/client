import React from 'react';
import { SetupProgressBarProps } from '../../lib/types';

const MenteeProgressBarObject = [
  {
    progressNumber: 1,
    progressName: 'Account Setup'
  },
  {
    progressNumber: 2,
    progressName: 'Personal Details'
  },
  {
    progressNumber: 3,
    progressName: 'Form'
  }
]

const SetupProgressBar: React.FunctionComponent<SetupProgressBarProps> = (props) => {

  return (
    <div className="setup-progress-bar">
      <ol>
        {MenteeProgressBarObject.map(menteeProgress =>
          <li>
            <div className={`progress-box ${props.currentProgress === menteeProgress.progressNumber && 'highlight-progress'}`}>{menteeProgress.progressNumber}</div>
            <div className="progress-description">{menteeProgress.progressName}</div>
          </li>
        )}
      </ol>
    </div>
  )
}

export default SetupProgressBar;