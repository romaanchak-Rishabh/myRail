function ProfileDropdown({ user, logout }) {
    return (
        <div className="absolute right-0 top-12 w-48 bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-lg shadow-lg overflow-hidden">
            <div className="px-4 py-3 border-b border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-text-muted)]">
                    Logged in as
                </p>
                <p className="text-[var(--color-text-primary)] font-medium">
                    {user?.name}
                </p>
            </div>
            <button className="w-full text-left px-4 py-3 text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] transition">
                Profile
            </button>
            <button className="w-full text-left px-4 py-3 text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] transition">
                Settings
            </button>
            <button className="w-full text-left px-4 py-3 text-[var(--color-danger)] hover:bg-[var(--color-surface)] transition" onClick={logout}>
                Logout
            </button>
        </div>
    )
}

export default ProfileDropdown

// function ProfileDropdown({ user, logout }) {
//     return (
//         <div>
//             <div>
//                 <p>{user?.name}</p>
//                 <p>{user?.email}</p>
//             </div>

//             <button>Profile</button>

//             <button>Settings</button>

//             <button onClick={logout}>
//                 Logout
//             </button>
//         </div>
//     );
// }

// export default ProfileDropdown