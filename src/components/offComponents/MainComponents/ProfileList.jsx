
import PropTypes from 'prop-types';

function ProfileList({ searchResults }) {
    return (
        <div>
            <h2></h2>
            {searchResults.map((profile) => (
                <div key={profile.id}>
                    <h3>{profile.name}</h3>
                    <p>{profile.description}</p>
                </div>
            ))}
        </div>
    );
}

ProfileList.propTypes = {
    searchResults: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ProfileList;