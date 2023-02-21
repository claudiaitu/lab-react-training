
const IdCard = (props) => {

    return (
        <div id="card">
            <img alt="profile"/>
            <div>
                <p><span className="card-span">First name:</span></p>
                <p><span>Last name:</span></p>
                <p><span>Gender:</span></p>
                <p><span>Height:</span></p>
                <p><span>Birth:</span></p>
            </div>
        </div>
    )
}

export default IdCard