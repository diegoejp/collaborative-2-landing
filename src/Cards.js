


const Card = (({tittle,text,imgUrl,link,textLink})=>{
    return(
        <div className="card col-3 m-2" style={{
            width: "18rem"
        }}>
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{tittle}</h5>
                <p className="card-text">{text}</p>
                <a href={link} className="btn btn-primary">{textLink}</a>
            </div>
        </div>
    )
})


export default Card;