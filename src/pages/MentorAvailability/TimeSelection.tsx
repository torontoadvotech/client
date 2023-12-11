import React, {
    useEffect,
    useState,
} from "react";
import MentorCard from "../../components/MentorCard/MentorCard";
import { v4 as uuidv4 } from "uuid";
import API from "../../lib/API";
import { UserType } from "../../lib/types";
import "./mentorAvailability.scss";
import { Link } from "react-router-dom";
import SubmitModal from './SubmitModal';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';

interface Props {
    selectedDate: Date|string;
  }

const TimeSelection = ({ selectedDate }: Props) => {
    console.log(selectedDate);
    const history = useHistory();
    // const [mentors, setMentors] = useState<UserType[]>([]);
    // const [page, setPage] = useState<number>(1);
    // const [lastPage, setLastPage] = useState<number>();
    const [
        isDateSelected,
        setIsDateSelected,
    ] = useState<boolean>(false);


    const [
        selectedTimes,
        setSelectedTimes,
    ] = useState<Array<any>>([["09:00", "21:00"]]);

    const [
        isEditing,
        setIsEditing,
    ] = useState<boolean>(true);

    const [
        isFirstMeeting,
        setIsFirstMeeting,
    ] = useState<boolean>(true);

    
    const [
        isSubmitted,
        setIsSubmitted,
    ] = useState<boolean>(false);

    

    const handleAddAvailabilityClick = () => {
        const newSelectedTimes = [...selectedTimes];
        newSelectedTimes.push(["09:00", "21:00"]);
        setSelectedTimes(newSelectedTimes);
    }

    const handleSaveClick = () => {
        setIsEditing(false);
    }

    const handleSubmitClick = () => {
        console.log("handleSubmitClick");
        setIsSubmitted(true);
    }

    const getDate = () => {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        console.log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeZone: timeZone }).format(selectedDate));

        return new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeZone: timeZone }).format(selectedDate);
    }

    const onEdit = () => {
        console.log('onEdit');
        setIsEditing(true);
    }

    // useEffect(() => {
    //   const getMentors = async (page: number, limit: number) => {
    //     const res = await API.getAllMentors(page, limit);

    //     setMentors([...mentors, ...res.data.data]);

    //     // Calculate and store last page so load more button can be hidden
    //     // if there are no more mentors to fetch
    //     setLastPage(Math.ceil(res.count / limit));
    //   };

    //   const limit = 8;

    //   getMentors(page, limit);
    // }, [page]);

    const onRemove = (index:any) => {
        console.log('onRemove');
        const newSelectedTimes = selectedTimes.filter((timeSlot, ind) => ind !== index);
        setSelectedTimes(newSelectedTimes);
    }

    const closeModal = () =>{
        console.log('closeModal');
        setIsSubmitted(false);
        history.push("/profile");
    }

    const handleStartTimeChange = (e:any, id:number) => {
        console.log('selectedTimes before Start', selectedTimes)
        const newSelectedTimes = [...selectedTimes];
        newSelectedTimes[id][0] = e.target.value;
        setSelectedTimes(newSelectedTimes);
    }

    const handleEndTimeChange = (e:any, id:number) => {
        console.log('selectedTimes before End', selectedTimes)
        const newSelectedTimes = [...selectedTimes];
        newSelectedTimes[id][1] = e.target.value;
        setSelectedTimes(newSelectedTimes);
    }

     const listItems = selectedTimes.map((timeSlot, id) => {
        console.log(timeSlot);
            return (<div className="select-block">
            <div className="custom-select">
                <label
                    htmlFor={`start-time-select-${id}`}
                    className="sr-only"
                >
                    Start Time
                </label>
                <select
                    name={`start-time-select-${id}`}
                    id={`start-time-select-${id}`}
                    onChange={(e)=>handleStartTimeChange(e, id)}
                >
                    <option value="09:00" selected>
                        09:00
                    </option>
                    <option value="10:00">
                        10:00
                    </option>
                    <option value="11:00">
                        11:00
                    </option>
                    <option value="12:00">
                        12:00
                    </option>
                    <option value="13:00">
                        13:00
                    </option>
                    <option value="14:00">
                        14:00
                    </option>
                    <option value="15:00">
                        15:00
                    </option>
                    <option value="16:00">
                        16:00
                    </option>
                    <option value="17:00">
                        17:00
                    </option>
                    <option value="18:00">
                        18:00
                    </option>
                    <option value="19:00">
                        19:00
                    </option>
                    <option value="20:00" disabled>
                        20:00
                    </option>
                    <option value="21:00" disabled>
                        21:00
                    </option>
                </select>
            </div>
            <p>to</p>
            <div className="custom-select">
                <label
                    htmlFor={`end-time-select-${id}`}
                    className="sr-only"
                >
                    End Time
                </label>
                <select
                    name={`end-time-select-${id}`}
                    id={`end-time-select-${id}`}
                    onChange={(e)=>handleEndTimeChange(e, id)}
                >
                    <option value="09:00" disabled>
                        09:00
                    </option>
                    <option value="10:00" disabled>
                        10:00
                    </option>
                    <option value="11:00">
                        11:00
                    </option>
                    <option value="12:00">
                        12:00
                    </option>
                    <option value="13:00">
                        13:00
                    </option>
                    <option value="14:00">
                        14:00
                    </option>
                    <option value="15:00">
                        15:00
                    </option>
                    <option value="16:00">
                        16:00
                    </option>
                    <option value="17:00">
                        17:00
                    </option>
                    <option value="18:00">
                        18:00
                    </option>
                    <option value="19:00">
                        19:00
                    </option>
                    <option value="20:00">
                        20:00
                    </option>
                    <option value="21:00" selected>
                        21:00
                    </option>
                </select>
            </div>
            <button className="button button-primary book-meeting send-invitation" onClick={handleAddAvailabilityClick}>
                Add Availability
            </button>
        </div>)
        });

    const datesToSubmit = selectedTimes.map((timeSlot, ind) => {
        console.log(timeSlot);
            return (
            <div className="selected-slot"><p>{getDate()} at {timeSlot[0]}</p><div role="button" className="modal-close" tabIndex={0}  onClick={onEdit}><FontAwesomeIcon icon={faPen} /></div><div role="button" tabIndex={0} className="modal-close" onClick={()=> onRemove(ind)}><FontAwesomeIcon icon={faTimes} /></div></div>)
    });
    
 

    return (
        <>
            <h2>Available Hours</h2>
            <p>
                Time is based on your location
                Toronto, ON (EST)
            </p>
            {!isEditing ?
                <div>
                    <div>{datesToSubmit}</div>
                    <div className="btn-div submit">
                        {selectedTimes?.length > 0 ? <button className="button button-primary book-meeting save-button" onClick={handleSubmitClick}>Set Availabilty</button> : null}
                        </div>
                </div> :
            <>{listItems}
            <div className="btn-div"><button className="button button-primary book-meeting save-button" onClick={handleSaveClick}>Save</button></div>
            </>}
            {isSubmitted && <SubmitModal onClose={closeModal} />}
        </>
    );
};

export default TimeSelection;


