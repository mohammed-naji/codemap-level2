import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function User({ user }) {
  // const { name, img, facebook, twitter } = user;

  return (
    <div className="shadow border border-gray-200 pb-6 text-center">
      <img src={user.img} alt="" />
      <h3 className="font-bold">{user.name}</h3>
      <div className="flex justify-center gap-4">
        <a href={user.facebook}>
          <FaFacebookF />
        </a>
        <a href={user.twitter}>
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}
