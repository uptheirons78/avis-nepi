import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const SocialShare = ({ socialConfig }) => (
  <div>
    <div className="flex my-5">
      <FacebookShareButton
        url={socialConfig.config.url}
        className="mr-1 transition-all duration-300 ease-in-out transform hover:-translate-y-1 facebook"
      >
        <FacebookIcon size={32} />
      </FacebookShareButton>
      <LinkedinShareButton
        url={socialConfig.config.url}
        className="mr-1 transition-all duration-300 ease-in-out transform hover:-translate-y-1 linkedin"
      >
        <LinkedinIcon size={32} />
      </LinkedinShareButton>
      <TwitterShareButton
        url={socialConfig.config.url}
        className="mr-1 transition-all duration-300 ease-in-out transform hover:-translate-y-1 twitter"
      >
        <TwitterIcon size={32} />
      </TwitterShareButton>
      <WhatsappShareButton
        url={socialConfig.config.url}
        className="mr-1 transition-all duration-300 ease-in-out transform hover:-translate-y-1 whatsapp"
      >
        <WhatsappIcon size={32} />
      </WhatsappShareButton>
      <EmailShareButton
        url={socialConfig.config.url}
        className="mr-1 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
      >
        <EmailIcon size={32} />
      </EmailShareButton>
    </div>
  </div>
);

export default SocialShare;
