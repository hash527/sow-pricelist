import './index.css'
import { useState, useEffect } from 'react';
import { product } from '../../constants/server';

function MainPage() {
    const [data, setData] = useState([])
    const fetchData = async () => {
        const res = await fetch(product)
        const data = await res.json()
        setData(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (

        <section className="mt-10 main-price-list-container">
            <div className='options-container'>
                <div className='prod-content'>
                    <form className='search-bar'>
                        <input
                            className="search-box"
                            id="title"
                            type="text"
                            defaultValue=""
                            name="search"
                            placeholder="Search Product .."
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={25}
                            height={25}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#44dcff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="cursor-pointer"
                        >
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>
                    </form>
                </div>
                <div className='options'>
                    <button>
                        <span>
                            New Product
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            x="0px"
                            y="0px"
                            style={{
                                marginTop: 5
                            }}
                            width={32}
                            height={32}
                            xmlSpace="preserve"
                            preserveAspectRatio="none"
                            viewBox="0 0 32 32"
                        >
                            <rect className="st2" width={24} height={24} style={{ fill: "none" }} />
                            <path
                                id="58128982_shock_x5F_color_focus"
                                className="stshockcolor"
                                d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10  C22,6.48,17.52,2,12,2z"
                                data-st="fill:#66BB6A;;"
                                style={{ fill: "rgb(41, 246, 118)" }}
                            />
                            <path
                                className="st0"
                                d="M12,2C6.49,2,2,6.49,2,12s4.49,10,10,10s10-4.49,10-10S17.51,2,12,2z M12,20c-4.42,0-8-3.59-8-8  c0-4.42,3.58-8,8-8c4.41,0,8,3.58,8,8C20,16.41,16.41,20,12,20z"
                                style={{ opacity: "0.2", fill: "rgb(255, 255, 255)" }}
                            />
                            <polygon
                                className="st1"
                                points="17,13 13,13 13,17 11,17 11,13 7,13 7,11 11,11 11,7 13,7 13,11 17,11 "
                                style={{ fill: "rgb(255, 255, 255)" }}
                            />
                        </svg>

                    </button>
                    <button>
                        <span>
                            PrintList
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-printer "
                            style={{
                                width: "1.5rem",
                                height: "1.5rem",
                                fontWeight: 900,
                                borderRadius: "50%",
                                color: "rgb(102, 214, 242)",
                                marginTop: 0
                            }}
                        >
                            <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
                            <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
                            <path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
                        </svg>

                    </button>
                </div>
            </div>
            <div className='products-container'>
                <div className='headings'>
                    <p>Product Id</p>
                    <p className='first-item'>Product / Service</p>
                    <p>In Price</p>
                    <p>Price</p>
                    <p>In Stock</p>
                    <p className='last-item'>Description</p>
                </div>
                <div className='values-container'>
                    {
                        data && data?.map((item) => {
                            return (
                                <div key={item.id} style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between', gap: 10 }}>
                                    <div className='values'>
                                        <p>{item.id}</p>
                                        <p className='first-item'>{item.name}</p>
                                        <p>{item.inprice}</p>
                                        <p>{item.price}</p>
                                        <p>{item.instock}</p>
                                        <p className='last-item'>{item.description}</p>
                                    </div>
                                    <p className='other-options'><svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 16 16"
                                        style={{ color: "#0f7ee8", cursor: 'pointer' }}
                                        height={22}
                                        width={22}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg>
                                    </p>
                                </div>

                            )
                        })
                    }

                </div>

            </div>
        </section>

    );
}

export default MainPage;
