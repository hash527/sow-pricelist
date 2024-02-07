import './index.css'
function Sidebar() {
    return (
        <div className="menu-side-bar">
            <h2 className='side-heading'>Menu</h2>
            <div className='side-items'>
                <a className="" href="/">
                    <span className="side-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-file-filled"
                        >
                            <path
                                d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h5z"
                                fill="currentColor"
                                strokeWidth={0}
                            />
                            <path
                                d="M19 7h-4l-.001 -4.001z"
                                fill="currentColor"
                                strokeWidth={0}
                            />
                        </svg>
                        <p className="side-item-text">Invoices</p>
                    </span>
                </a>
                <a className="" href="/client">
                    <span className="side-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#28ffc1"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-user"
                        >
                            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                        <p className="side-item-text">Customer</p>
                    </span>
                </a>
                <a className="" href="/server">
                    <span className="side-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#54cfff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-settings"
                        >
                            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        </svg>
                        <p className="side-item-text">My Business</p>
                    </span>
                </a>
                <a className="" href="/extra">
                    <span className="side-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#5ae2ff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-book"
                        >
                            <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                            <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                            <path d="M3 6l0 13" />
                            <path d="M12 6l0 13" />
                            <path d="M21 6l0 13" />
                        </svg>
                        <p className="side-item-text">Invoice Journal</p>
                    </span>
                </a>
                <a className="" href="/dashboard/pricelist">
                    <span className="side-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffb257"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-tag"
                        >
                            <path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" />
                        </svg>
                        <p className="side-item-text">Price List</p>
                    </span>
                </a>
                <a className="" href="/">
                    <span className="side-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#54cfff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-file-description"
                        >
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            <path d="M9 17h6" />
                            <path d="M9 13h6" />
                        </svg>
                        <p className="side-item-text">Multiple Invoicing</p>
                    </span>
                </a> <a className="" href="/">
                    <span className="side-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ff4b97"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-circle-x"
                        >
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M10 10l4 4m0 -4l-4 4" />
                        </svg>
                        <p className="side-item-text">Unpaid Invoices</p>
                    </span>
                </a> <a className="" href="/">
                    <span className="side-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#f7c90b"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-receipt-tax"
                        >
                            <path d="M9 14l6 -6" />
                            <circle cx="9.5" cy="8.5" r=".5" fill="currentColor" />
                            <circle cx="14.5" cy="13.5" r=".5" fill="currentColor" />
                            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
                        </svg>
                        <p className="side-item-text">Offer</p>
                    </span>
                </a> <a className="" href="/">
                    <span className="side-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#16ceff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-clipboard-list"
                        >
                            <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                            <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                            <path d="M9 12l.01 0" />
                            <path d="M13 12l2 0" />
                            <path d="M9 16l.01 0" />
                            <path d="M13 16l2 0" />
                        </svg>
                        <p className="side-item-text">Inventory Control</p>
                    </span>
                </a> <a className="" href="/dashboard/pricelist">
                    <span className="side-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#1b9aff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-credit-card"
                        >
                            <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                            <path d="M3 10l18 0" />
                            <path d="M7 15l.01 0" />
                            <path d="M11 15l2 0" />
                        </svg>
                        <p className="side-item-text">Member Invoicing</p>
                    </span>
                </a> <a className="" href="/">
                    <span className="side-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#82b1ff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-cloud-upload"
                        >
                            <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                            <path d="M9 15l3 -3l3 3" />
                            <path d="M12 12l0 9" />
                        </svg>
                        <p className="side-item-text">Import / Export</p>
                    </span>
                </a>
                <a className="" href="/">
                    <span className="side-item">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            x="0px"
                            y="0px"
                            width={25}
                            height={25}
                            viewBox="0 0 32 32"
                            style={{ fill: "rgb(12, 255, 168)" }}
                            xmlSpace="preserve"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M14.332,16H4v-1h10.328l-3.477-3.471l0.706-0.708l4.687,4.678l-4.678,4.687l-0.708-0.706L14.332,16z M25.5,4h-20  C4.671,4,4,4.672,4,5.5V10h1V5.5C5,5.224,5.224,5,5.5,5h20C25.776,5,26,5.224,26,5.5v20c0,0.276-0.224,0.5-0.5,0.5h-20  C5.224,26,5,25.776,5,25.5V21H4v4.5C4,26.328,4.671,27,5.5,27h20c0.828,0,1.5-0.672,1.5-1.5v-20C27,4.672,26.328,4,25.5,4z"
                                style={{ fill: "rgb(12, 255, 168)" }}
                            />
                        </svg>
                        <p className="side-item-text">Logout</p>
                    </span>
                </a>
            </div>
        </div>

    );
}

export default Sidebar;
