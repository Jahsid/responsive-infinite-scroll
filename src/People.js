import './People.css';
const People = ({ userData }) => {
    return (
        <div className="card">
            <div className="card__image"><img src={userData.picture.medium}/></div>
            <div className="card__title">{userData.name.first} {userData.name.last}</div>
            <div className="card__body">
                <p>{userData.gender}</p>
                <p>Age {userData.dob.age}</p>
                <p>{userData.location.country}</p>
            </div>

        </div>
    )
};

export default People;