const foods = ["Shawerma", "Mansaf", "Maqlopa", "Msakhan"];
const loading = true;

const my_name = null;

function FoodItem({ text }) {
  return <div className="bg-red-100 p-10 rounded">{text}</div>;
}

const App = () => {
  return (
    <div>
      {/* {loading ? <p>Loading..</p> : foods.map((el) => <FoodItem text={el} />)} */}

      {my_name ?? "Default"}
      {loading && <p>Loading..</p>}
      {foods.length > 0 && foods.map((el) => <FoodItem text={el} />)}
    </div>
  );
};

export default App;
