import mlyn from "../../assets/images/atmo/mlyn.jpg"
import mlyn_square from "../../assets/images/atmo/mlyn-square.jpg"

import styles from './AtmoPhoto.module.css';

const AtmoPhoto = props => {
    const photos = [mlyn];
    const squares = [mlyn_square];
    const selector = Math.floor(Math.random() * 1);

    const image = photos[selector];
    const square = squares[selector];
    
    return <>
    <div className={props.wideClass || styles.hidden}>
          <img src={image} alt="" />
        </div>
        <div className={props.squareClass}>
          <img src={square} alt="" />
        </div>
    </>
}

export default AtmoPhoto;