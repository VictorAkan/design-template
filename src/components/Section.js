import flower from "./images/aloevera.png"

export default function Section() {
    return(
        <div>
            <div className="container">
                <div className="row promo">
                    <div className="promo_title col-md-6">
                        <h1>Design a better<br /> website template.</h1>
                        <p className="mt-4">Download possible nice websites template which you can definitely use <br/>
                        for many purposes, such as portfolio, CV, resume, personal businesses.</p>
                        <button className="p-3 px-4 mt-4">Free Download</button>
                    </div>
                    <div className="promo-img col-md-6">
                    <div className="play">
                        <a className="p-3 px-4 py-4" href="https://www.youtube.com/watch?v=WbiNr_b7oZk" target="_blank"><i class="fa-solid fa-play"></i></a>
                    </div>
                        <img className="bg-img mt-5" src={flower} />
                    </div>
                </div>
            </div>
        </div>
    )
}