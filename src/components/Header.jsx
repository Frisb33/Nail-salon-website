import { navigation } from "../constants";
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

const handleClick = (event, url) => {
  if (url.substring(1) === 'aboutus'||'services'||'gallery') {
      scrollToMiddle(event, url.substring(1));
  } else {
      window.location.href = item.url;
  }
};
const Header = () => {
  
  return (
    <div className="fixed top-0 left-0 w-full z-50  border-b bg-n-3/90 lg:backdrop-blur-sm backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#home">
          Logo
        </a>
        <nav className={`hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-3/90 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
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
      </div>
    </div>
  );
};

export default Header;