import foo from '../images/bannerSocial.png'
import insta from '../images/insta.png'
import face from '../images/face.png'
import twt from '../images/twitter.png'

function footer() {
    return (
        <div>
            <div>
                <img src={insta} height={50}/>
                <img src={face} height={50}/>
                <img src={twt} height={50}/>
            </div>
        </div>
    )
}

export default footer