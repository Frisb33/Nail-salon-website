import { navigation } from "../constants";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import MenuSvg from "../components/MenuSvg";
import logo from "/logo1.png"
const scrollToMiddle = (event, elementId) => {
  event.preventDefault();
  const element = document.getElementById(elementId);
  if (element) {
      const rect = element.getBoundingClientRect();
      const middle = rect.top + window.pageYOffset - (window.innerHeight / 2) + (rect.height / 2);

      window.scrollTo({
          top: middle,
          behavior: 'smooth'
      });
  }
};
const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const handleClick = (event, url) => {
    
      if (url.substring(1) === 'aboutus'||'services'||'gallery') {
        scrollToMiddle(event, url.substring(1));
      } else {
        window.location.href = item.url;
      }
    enablePageScroll();
    setOpenNavigation(false);  
  };
  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b bg-n-3/90 lg:backdrop-blur-sm backdrop-blur-sm">
      <div className="justify-between flex items-center px-5 lg:mx-20 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[8rem] xl:mr-8" href="#home">
          <img src={logo} alt="Logo Image" />
        </a>
        <nav className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-3/90 lg:static lg:flex lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col w-full bg-n-3/90 items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code text-sm uppercase text-n-2/50 transition-colors hover:text-n-5
                 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold   lg:leading-5 xl:px-12`}
                onClick={(event) => handleClick(event, item.url)}>
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <div
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </div>
      </div>
    </div>
  );
};
export default Header;