import "./OrderHistory.css"

export default function OrderHistory({listener}){
    return(
        <section className="OrderHistory">
            <div className="OrderHistory__Table">
                <div>
                    <h1>Yuko Maki</h1>
                    <p>2 days ago</p>
                </div>
                <div className="Button" onClick={() => listener()}>Return Dishes</div>
            </div>
        </section>
    )
}