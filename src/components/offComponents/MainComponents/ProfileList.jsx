import PropTypes from "prop-types";

function ProfileList({ profiles }) {
    return (
        <div>
            {Array.isArray(profiles) ? (
                profiles.map((profile) => (
                    <div key={profile.id}>
                        {/* Wyświetlanie danych profili */}
                        <p>{profile.name}</p>
                        {/* ... */}
                    </div>
                ))
            ) : (
                <p>Brak profili do wyświetlenia.</p>
            )}
        </div>
    );
}

ProfileList.propTypes = {
    profiles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            // Dodaj inne wymagane typy danych dla profili
        })
    ).isRequired,
};

export default ProfileList;
