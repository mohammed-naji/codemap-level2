import CSSImage from "./assets/css.png";
import Header from "./components/Header";
import User from "./components/User";
const users = [
  {
    id: 1,
    name: "Pedro 0",
    img: "https://i.pravatar.cc/300",
    facebook: "abc",
    twitter: "##",
  },
  {
    id: 2,
    name: "Pedro 1",
    img: "https://i.pravatar.cc/300",
    facebook: "abc",
    twitter: "##",
  },
  {
    id: 3,
    name: "Pedro 2",
    img: "https://i.pravatar.cc/300",
    facebook: "abc",
    twitter: "##",
  },
  {
    id: 4,
    name: "Pedro 3",
    img: "https://i.pravatar.cc/300",
    facebook: "abc",
    twitter: "##",
  },
  {
    id: 5,
    name: "Pedro 4",
    img: "https://i.pravatar.cc/300",
    facebook: "abc",
    twitter: "##",
  },
];
const App = () => {
  // const usersMarkup = users.map((user) => <User />);

  return (
    <div>
      <Header title="Welcome to our App" desc="lorem" />
      {/* <img src={CSSImage} alt="" /> */}

      <div className="max-w-5xl my-10 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>

      <Header title="Footer Here" />
    </div>
  );
};

export default App;
