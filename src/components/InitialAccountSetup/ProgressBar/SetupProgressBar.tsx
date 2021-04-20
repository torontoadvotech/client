import React, { useEffect, useState } from 'react';
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

const CurrentProgress = 2;

const SetupProgressBar: React.FunctionComponent<SetupProgressBarProps> = (props) => {

  const [currentProgress, setCurrentProgress] = useState<number>(CurrentProgress);

  // useEffect(() => {
  //   setCurrentProgress(CurrentProgress);
  // })

  // const CurrentProgressBox = () => {
  //   const currentProgressIs = MenteeProgressBarObject.indexOf(progress => {
  //     return progress.progressCurrent;
  //   });
  //   console.log();

  // }

  return (
    <div className="setup-progress-bar">
      <ol className={`progress-box-container current-progress-${currentProgress}`}>
        {MenteeProgressBarObject.map((menteeProgress, i) =>
          <li className="progress-step" key={i}>
            <div className={`progress-box ${props.currentProgress === menteeProgress.progressNumber ? 'highlight-progress' : ""}`}>{menteeProgress.progressNumber}
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