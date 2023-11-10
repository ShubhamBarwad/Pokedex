import SearchBar from "./SearchBar";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed z-50 top-0 left-0 bg-white flex justify-between w-full border-b py-3 px-2 md:px-20 lg:px-40 xl:56 gap-4 md:gap-20 shadow-md">
        <Logo/>
        <SearchBar/>
    </header>
  )
};
export default Header;