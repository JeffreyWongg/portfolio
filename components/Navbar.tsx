const Navbar = () => {
  return (
    <div className="py-5">
      <img src="jeffrey-logo.png" alt="" className="absolute px-5 sm:px-10 h-16 w-auto" />
      <div className="flex justify-center">
        <div className="border-white border-2 rounded-[50px] p-5">
          <ul className="flex font-afacad font-semibold gap-5 text-xl">
            <li className="text-jwPink">About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
