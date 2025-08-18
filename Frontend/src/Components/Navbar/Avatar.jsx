function Avatar() {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} className="w-10 rounded-full cursor-pointer overflow-hidden">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="avatar" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>
    )
}

export default Avatar