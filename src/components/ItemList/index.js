import React from 'react'
import { useHistory } from 'react-router-dom';

const SingleItem = ({
    id,
    image,
    alt = "item",
    name,
    address,
    isRedirect = true
}) => {
    const history = useHistory();

    /**
     * Got to store detail
     */
    const onStoreClick = () => {
        history.push(`/stores/${id}`)
    }

    return (
        <div
            onClick={isRedirect ? onStoreClick : null}
            className="animate__animated animate__rubberBand">
            <div className={`d-flex flex-column ${isRedirect ? "c-pointer hvr-grow" : ""}`}>
                <img src={image} alt={alt} className="img-fluid" />
                <div className="mt-3">{name}</div>
                {address && <small className="text-muted">{address}</small>}
            </div>
        </div>
    )
}

const ItemList = ({
    items,
    isRedirect = true,
}) => (
        <div
            className="d-flex flex-wrap">
            {
                items.length > 0 ? (
                    items.map((item, index) => (
                        <div
                            key={`item${index}`}
                            className="mx-auto ml-md-0 mr-md-4 mb-4">
                            <SingleItem
                                {...item}
                                isRedirect={isRedirect} />
                        </div>
                    ))
                ) : (
                        <span>Sin resultados</span>
                    )
            }
        </div>
    )

export default ItemList