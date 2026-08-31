import { CgShoppingBag } from "react-icons/cg";

const Header = ({ cart }) => {
  return (
    <div className="flex sticky top-0 justify-between items-center bg-sky-200 px-20 py-6">
      <span className="text-2xl font-semibold">Code Map Original</span>
      <div className="relative">
        <CgShoppingBag size={30} />
        <span className="absolute w-4 h-4 flex justify-center items-center rounded-full bg-sky-900 text-white text-xs -top-1 -right-1">
          {cart.reduce((acc, curr) => acc + curr.qty, 0)}
        </span>
      </div>
    </div>
  );
};

export default Header;
