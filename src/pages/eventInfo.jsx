import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Footer from "../components/Footer";



const MoreDetails = () => {
    const {id} = useParams()
    console.log(id)
    const {data, loading, error} = useFetch(`https://meetup-app-backend-ten.vercel.app/events/${id}`)
    console.log(data)
    return (
        <div className="bg-body-tertiary">
        <div className="container">
            <div className="bg-body-tertiary">
            <nav className="navbar  container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://www.pngitem.com/pimgs/m/41-418117_meetup-logo-new-meet-up-logo-png-transparent.png" alt="mainLogo" className="img-fluid  pt-2 " style={{width: "25%"}} /> 
                    </a>  
                </div>
            </nav>
            </div>
            <hr />
            {loading && <p>Loading...</p>}
            {data && 
            <div className="row mt-lg-5 mt-md-3 mt-sm-2">
                <div className="col-xl-8 col-lg-6 col-md-12 col-sm-12">
                    <h2>{data.name}</h2>
                    <section className="pb-3">
                        <span>Hosted By:</span><br />
                        <h4>{data.hostName.join(", ")}</h4>
                    </section>
                    <img src={data.eventImgUrl} alt="eventImg" className="d-flex justify-content-start img-fluid" width="700" />
                    <section className="py-3">
                        <h3>Details: </h3>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-9">
                        <p>{data.eventDetails}</p>
                        </div>
                    </section>
                </div>
                
                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                    <div className="card ms-xl-0 ms-lg-5">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-2">
                                    <img src="https://imgs.search.brave.com/2hH9RYb8wYx5ergWLRPTdcha0UvNTkoK98w9KQYna9I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ibGFj/ay10aW1lLWNsb2Nr/LWljb24taXNvbGF0/ZWQtd2hpdGUtYmFj/a2dyb3VuZC1ibGFj/ay10aW1lLWNsb2Nr/LWljb24tMTE3NDQy/MjU4LmpwZw" alt="clkIcon" className="img-fluid my-2 ms-3" width="30" />
                                </div>
                                <div className="col-10">
                                    <span>
                                    {new Date(data.date).toLocaleString('en-IN', {
                                        weekday: 'short',
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                    <span className="mx-2">at</span>
                                    {new Date(data.startingTime).toLocaleString('en-IN', {
                                        hour: 'numeric',
                                        minute: '2-digit',
                                        second: '2-digit',
                                        hour12: true,
                                        timeZoneName: 'short'
                                    })} to
                                    </span><br />
                                    <span>
                                    {new Date(data.date).toLocaleString('en-IN', {
                                        weekday: 'short',
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                    <span className="mx-2">at</span>
                                    {new Date(data.endingTime).toLocaleString('en-IN', {
                                        hour: 'numeric',
                                        minute: '2-digit',
                                        second: '2-digit',
                                        hour12: true,
                                        timeZoneName: 'short'
                                    })}
                                    </span>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-2">
                                    <img src="https://imgs.search.brave.com/gMJJxrSqWAC-dY6iRPiD1cA65eccJ5aeKRY6_ks29jU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvYWJzdHJhY3Qt/bG9jYXRpb24tcGlu/ay12ZWN0b3ItaWNv/bi1ncHMtbG9jYXRp/b25zLWxvZ28tc3lt/Ym9sLWZsYXQtc3R5/bGUtbWFwLXBvaW50/ZXItZGVzaWduXzY4/Mjg1OS0yNTkuanBn/P3NlbXQ9YWlzX2l0/ZW1zX2Jvb3N0ZWQm/dz03NDA" alt="mapIcon" className="img-fluid  ms-3" width="30" />
                                </div>
                                <div className="col-10">
                                    <p>{data.address}</p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-2">
                                    <img src="https://imgs.search.brave.com/O0ZH6vKS2GwKiSLtXZDXl4rqXhwCSgD92Q-NYZZFKH4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBiLzhl/LzEyLzBiOGUxMmUw/YmRmNTI2NzY5YTVh/MzUzMjdhOWU3NjU4/LmpwZw" alt="mapIcon" className="img-fluid my-2 ms-4" width="10" />
                                </div>
                                <div className="col-10">
                                    {data.price != 0 ? data.price : "No Fee"}                                   
                                </div>
                            </div>                            
                        </div>
                    </div>
                    <section className="mt-4 ms-xl-0 ms-lg-5">
                        {data.speakers && 
                            <>
                            <h2>Speakers: ({data.speakers.length})</h2>
                            <div className="row d-flex">
                                {data.speakers.map(speaker => (
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-3">
                                    <div className="card h-100">
                                        <div className="card-body text-center">
                                            <img src={speaker.speakerImgUrl} alt="speakerImg" className="img-fluid rounded-circle mb-3" width="100" /><br />
                                            <strong>{speaker.name}</strong><br />
                                            <span>{speaker.designation}</span>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            
                            </div>
                            </>
                        }
                    </section>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-12 mt-md-4 mt-sm-4 col-sm-12 mt-4">
                    <section>
                        <h3>Additional Information: </h3>
                         {Object.entries(data.additionalInfo).map(([key, value]) => (
                            <p><strong>{key.charAt(0).toUpperCase() + key.slice(1)}: </strong>{value}</p>
                         ))}                     
                    </section>
                    <section >
                    <h3>Event Tags: </h3>
                        <div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row">
                            {data.tags.map(tag => (
                                <div className="badge bg-danger p-sm-2 p-2 p-md-3 text-white  fs-lg-6 fs-xl-6 fw-light text-wrap m-2" style={{width: "30%"}}>
                                    {tag}
                                </div>                    
                            ))}
                        </div>
                    </section>
                </div>
            </div>
            }
        </div> 
        <Footer/>
        </div>
    ) 
}

export default MoreDetails;