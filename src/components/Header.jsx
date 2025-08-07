import useFetch from "../useFetch";


const Header = ({setRqdEvents}) => {
    const {data, loading, error} = useFetch("https://meetup-app-backend-theta.vercel.app/events")

    const handleSrchChange = (e) => {
        const {value} = e.target
        setRqdEvents(data.filter(event => (            
            (event.name.toLowerCase().includes(value.toLowerCase()) || (event.tags.map((tag) => (tag.toLowerCase()))).includes(value.toLowerCase()))
        )))
    }

    return (
    <div className="bg-body-tertiary">
    <nav className="navbar  container">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src="https://www.pngitem.com/pimgs/m/41-418117_meetup-logo-new-meet-up-logo-png-transparent.png" alt="mainLogo" className="img-fluid" width="150"/> 
            </a>  
            <input className="me-2 w-25 form-control" role="search" onChange={handleSrchChange} type="search" placeholder="Search by title and tag..." aria-label="Search"/>
        </div>
    </nav>
    </div> 
    )
}

export default Header;