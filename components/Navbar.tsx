const Navbar = () => {
  return (
    <div className="flex justify-center">
      <img src="jeffrey-logo.png" alt="" className="h-auto w-12" />
      <div className="flex  py-5">
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
