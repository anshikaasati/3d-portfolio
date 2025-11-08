const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a className="social-icon" href="https://github.com/anshikaasati" target="_blank" rel="noreferrer">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a className="social-icon" href="http://linkedin.com/in/anshika-asati-8ba882245" target="_blank" rel="noreferrer">
          <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
        </a>
        <a className="social-icon" href="https://www.codingninjas.com/studio/profile/c46fc146-8b23-4b4e-bde7-e305436c32f9" target="_blank" rel="noreferrer">
          <img src="/assets/codechef.svg" alt="codechef" className="w-1/2 h-1/2" />
        </a>
        <a className="social-icon" href="https://codeforces.com/profile/asatianshika" target="_blank" rel="noreferrer">
          <img src="/assets/codeforces.svg" alt="codeforces" className="w-1/2 h-1/2" />
        </a>
        <a className="social-icon" href="https://leetcode.com/asatianshika14/" target="_blank" rel="noreferrer">
          <img src="/assets/leetcode.svg" alt="leetcode" className="w-1/2 h-1/2" />
        </a>
        <a className="social-icon" href="https://www.geeksforgeeks.org/user/asatiansnx95/" target="_blank" rel="noreferrer">
          <img src="/assets/gfg.svg" alt="geeksforgeeks" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2025 Anshika Asati. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
