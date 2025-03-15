import GrandChild from "./grandChild";


const Child = (props) => {
    const { img, name, age, profession } = props;

    return (

        <>
            <GrandChild
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSey8xhs-RKVb-t9NQnkijorgfDjxgxYvVgqg&s"
                product="samsung s20"
                orderid="FX-250123-110-12345"
                delivered_date="27=02-2025"

            />

            <GrandChild

                image="https://static.zara.net/assets/public/239a/6143/cff9431cb2a6/273087e82dbb/04806345427-e1/04806345427-e1.jpg?ts=1722871776989"
                name="zara men jeans"
                orderid="MYN012356780"
                delivered_date="01-01-2024" />
            <div id="card">
                {/* <img src="data:image/jpeg;base64,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" alt="image" width={200} />
                <div>
                    <h1>Dr.Thomas</h1>
                    <p>General Physician</p>
                    <p>age:30</p>
                    <p>profession:MBBS</p> */}
                <img src={img} alt="img" />
                <h1>{name}</h1>
                <p>{age}</p>
                <p>{profession}</p>

            </div>

            {/* </div> */}
        </>

    )

}

export default Child