import './Tarjeta.css'

const VideoCard = (props) => {

    const {title, link, img, category, description, code} = props.data

    return <div className='videoCard'>
        <div className='videoCard-info'>
            <a href={link} target='blank'><img src={img} alt={title} /></a>
        </div>
        <div className='videoCard-buttons'>
            <p className='videoCard-button'>Editar</p>
            <p className='videoCard-button'>borrar</p>
        </div>
    </div>
}

export default VideoCard