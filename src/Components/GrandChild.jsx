const GrandChild = (props) => {
    const { image, product, orderid, delivered_date } = props
    return (


        <>

            <div id="card">
                <img src={image} alt="image" />
                <h2>{product}</h2>
                <p>{orderid}</p>
                <p>{delivered_date}</p>
            </div>
        </>



    )
}

export default GrandChild