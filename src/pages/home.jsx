import { useState } from "react"
import useFetch from "../useFetch"


export const AllEvents = ({rqdEvents}) => {
    const {data, loading, error} = useFetch("https://meetup-app-backend-ten.vercel.app/events")
    const [eventType, setEventType] = useState("")

    let finalData;
    rqdEvents.length != 0 ? finalData = rqdEvents : finalData = data

    const handleChange = (e) => {
        const {value} = e.target
        if(value){
            setEventType(value)
        }
    }
     
    let filteredEvents;

    if(eventType){
        filteredEvents = eventType != "both" ? finalData?.filter(event => event.type === eventType) : finalData
    }else{
        filteredEvents = finalData
    }

    return (
        <>
        <div className="row">
            <div className="col-lg-9 col-md-6 col-sm-12">
                <h1>Meetup Events</h1>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <select className="form-select" value={eventType} onChange={handleChange}>
                <option value="">Select Event Type...</option>
                <option value="both">Both</option>
                <option value="offline">Offline</option>
                <option value="online">Online</option>
                </select>
            </div>
        </div>
        {loading && <p>Loading...</p>}
        {finalData && 
        <div className="row">
            {filteredEvents.map(event => (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 my-4">
                    <div className="position-relative" style={{aspectRatio: "1/1", overflow: "hidden"}}>
                        <div className="position-absolute badge bg-light text-wrap text-dark  top-0 m-3 fs-5 fw-normal z-1">
                            {`${event.type} Event`}
                        </div>
                        <a href={`eventDetails/${event._id}`}><img src={event.eventImgUrl} alt="eventImg" className="rounded img-fluid w-100 h-100 object-fit-cover" /></a>
                    </div>
                    <span className="text-secondary">
                    {new Date(event.date).toLocaleString('en-IN', {
                        weekday: 'short',
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                    })}
                    <span className="mx-2">&bull;</span>
                    {new Date(event.startingTime).toLocaleString('en-IN', {
                        hour: 'numeric',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: true,
                        timeZoneName: 'short'
                    })}
                    </span>
                    <h4>{event.name}</h4>
                </div>  
            ))}
        </div>
        }
        </>
    )
}

export default AllEvents;