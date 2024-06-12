import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,

} from 'react-share'

const ShareButtons=({url,title}) =>{
    return(
        <div className='share-buttons'>
            <FacebookShareButton url={url} quote={title}>
                <FacebookIcon size={32} round/>
            </FacebookShareButton>

            <TwitterShareButton url={url} title={title}>
                <TwitterIcon size={32} round/>
            </TwitterShareButton>

            <WhatsappShareButton url={url} title={title}>
                <WhatsappIcon size={32} round/>
            </WhatsappShareButton>

            
        </div>
    )
}
export default ShareButtons