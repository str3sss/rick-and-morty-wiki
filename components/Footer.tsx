import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="justify-around w-1/2 flex flex-1">
        <div className="flex justify-center items-center font-light">Copyright 2023 by str3sss</div>
        <div className="gap-1 flex flex-col items-center">
          <Link href={'https://t.me/str3s55'} className="hover:text-blue flex gap-2 items-center">
            <FontAwesomeIcon icon={faTelegram} height="18px" />
            <span>Telegram</span>
          </Link>
          <Link href={'https://github.com/str3sss'} className="hover:text-orange flex gap-2 items-center">
            <FontAwesomeIcon icon={faGithub} height="18px" />
            <span>Github</span>
          </Link>
          <Link href={'https://github.com/str3sss'} className="hover:text-pink flex gap-2 items-center">
            <FontAwesomeIcon icon={faDiscord} height="18px" />
            <span>Discord</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
