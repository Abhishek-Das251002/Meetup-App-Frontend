import useFetch from "../useFetch";
import { Link } from "react-router-dom";

const Header = ({setRqdEvents}) => {
    const {data, loading, error} = useFetch("https://meetup-app-backend-ten.vercel.app/events")

    const handleSrchChange = (e) => {
        const {value} = e.target
        setRqdEvents(data.filter(event => (            
            (event.name.toLowerCase().includes(value.toLowerCase()) || (event.tags.map((tag) => (tag.toLowerCase()))).includes(value.toLowerCase()))
        )))
    }

    return (
    <div className="bg-body-tertiary">
    <nav className="navbar  container">
        <div className="container">
            <div className="row w-100 align-items-center">
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-12">
                    <Link className="navbar-brand" to="/">
                    <img src="https://www.pngitem.com/pimgs/m/41-418117_meetup-logo-new-meet-up-logo-png-transparent.png" alt="mainLogo" className="img-fluid" style={{width: "25%"}}/> 
                    </Link>
                </div> 
                <div className="mt-sm-2 col-xl-3  col-lg-3 col-md-6 col-sm-12 d-flex ms-xl-auto"> 
                    <input className="form-control" role="search" onChange={handleSrchChange} type="search" placeholder="Search by title and tag..." aria-label="Search"/>
                </div>
            </div>
            </div>
    </nav>
    </div> 
    )
}

export default Header;