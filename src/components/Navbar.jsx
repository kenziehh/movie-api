import movieIcon from "./../assets/icons/movie-icon.png";
const Navbar = () => {
  return (
    <nav className="flex bg-darkBlue p-6 justify-between">
      <div className="flex items-center gap-2">
        <img src={movieIcon} className="w-10" />
        <h1 className="text-size text-white text-4xl">Moviehh</h1>
      </div>
      <div className="flex items-center gap-9 sm:hidden md:hidden">
        <a href="#" className="text-white sm:hidden md:hidden" >
          Home
        </a>
        <a href="#" className="text-white sm:hidden md:hidden">
          About
        </a>
        <a href="#" className="text-white sm:hidden md:hidden">
          Contact
        </a>
      </div>
      <button className="text-darkBlue bg-white px-4 py-2 rounded-md">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
