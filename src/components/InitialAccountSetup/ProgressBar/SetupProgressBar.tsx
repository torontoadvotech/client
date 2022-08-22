import React from 'react';
import { SetupProgressBarProps } from '../../../lib/types';
import './setupProgressBar.scss';

const MenteeProgressBarObject = [
  {
    progressNumber: 1,
    progressName: 'Account Setup',
  },
  {
    progressNumber: 2,
    progressName: 'Personal Details',
  },
  {
    progressNumber: 3,
    progressName: 'Form',
  }
]

const SetupProgressBar: React.FunctionComponent<SetupProgressBarProps> = (props) => {

  const currentProgress = props.currentProgress + 1;

  return (
    <div className="setup-progress-bar">
      <ol className={`progress-box-container current-progress-${currentProgress}`}>
        {MenteeProgressBarObject.map((menteeProgress, i) =>
          <li className="progress-step" key={i}>
            <div className={`progress-box ${currentProgress === menteeProgress.progressNumber ? 'highlight-progress' : ""}`}>{menteeProgress.progressNumber}
              <div className="progress-step-border"></div>
              {(i !== MenteeProgressBarObject.length - 1) && <div className="progress-step-connector"></div>}
            </div>
            <div className="progress-description">{menteeProgress.progressName}</div>
          </li>
        )}
      </ol>
    </div >
  )
}

export default SetupProgressBar;