function ProfileDropdown({ user, logout }) {
    return (
        <div className="mr-profile-dropdown">

            <div className="mr-profile-dropdown__header">
                <p className="mr-profile-dropdown__label">
                    Logged in as
                </p>

                <p className="mr-profile-dropdown__name">
                    {user?.name || 'User'}
                </p>
            </div>

            <button
                type="button"
                className="mr-profile-dropdown__item"
            >
                Profile
            </button>

            <button
                type="button"
                className="mr-profile-dropdown__item"
            >
                Settings
            </button>

            <button
                type="button"
                className="mr-profile-dropdown__item mr-profile-dropdown__item--danger"
                onClick={logout}
            >
                Logout
            </button>

        </div>
    )
}

export default ProfileDropdown