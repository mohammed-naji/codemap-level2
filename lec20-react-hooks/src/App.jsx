import { useMemo, useReducer, useState } from "react";

const users = [
  { id: 1, name: "Amina Hassan", age: 24, role: "Designer" },
  { id: 2, name: "Omar Khaled", age: 31, role: "Developer" },
  { id: 3, name: "Lina Saad", age: 28, role: "Product manager" },
  { id: 4, name: "Yousef Adel", age: 36, role: "Researcher" },
  { id: 5, name: "Nour Ibrahim", age: 22, role: "Content writer" },
  { id: 6, name: "Mariam Nabil", age: 42, role: "Team lead" },
];

const initialState = {
  count: 0,
};

function reducer(state, action) {
  // if (action == "inc") {
  //   return { ...state, count: state.count + 1 };
  // }

  // if (action == "dec") {
  //   return { ...state, count: state.count - 1 };
  // }

  // if (action == "reset") {
  //   return { ...state, count: 0 };
  // }

  switch (action) {
    case "inc":
      return { ...state, count: state.count + 1 };

    case "dec":
      return { ...state, count: state.count - 1 };

    case "reset":
      return { ...state, count: 0 };
  }
}

const App = () => {
  const [nameQuery, setNameQuery] = useState("");
  const [ageFilter, setAgeFilter] = useState("all");
  const [isDarkMode, setIsDarkMode] = useState(true);
  // const [count, setCount] = useState(0);

  const [counter, dispatch] = useReducer(reducer, initialState);

  const filteredUsers = useMemo(() => {
    const normalizedQuery = nameQuery.trim().toLowerCase();

    return users.filter((user) => {
      const matchesName = user.name.toLowerCase().includes(normalizedQuery);
      const matchesAge =
        ageFilter === "all" ||
        (ageFilter === "under-30" && user.age < 30) ||
        (ageFilter === "30-39" && user.age >= 30 && user.age < 40) ||
        (ageFilter === "40-plus" && user.age >= 40);

      return matchesName && matchesAge;
    });
  }, [ageFilter, nameQuery]);

  return (
    <main
      className={`min-h-screen px-5 py-12 transition-colors sm:px-8 ${
        isDarkMode
          ? "bg-slate-950 text-slate-100"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <section className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p
              className={`mb-2 text-sm font-semibold uppercase tracking-[0.2em] ${
                isDarkMode ? "text-cyan-300" : "text-cyan-700"
              }`}
            >
              User directory
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Find your people.
            </h1>
            <p
              className={`mt-3 max-w-xl ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              Search the sample directory by name or narrow it down by age.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsDarkMode((current) => !current)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              isDarkMode
                ? "border-slate-700 text-slate-200 hover:border-cyan-400"
                : "border-slate-300 text-slate-700 hover:border-cyan-600"
            }`}
          >
            {isDarkMode ? "Light mode" : "Dark mode"}
          </button>
        </div>

        <div
          className={`mb-6 grid gap-4 rounded-2xl border p-4 sm:grid-cols-[1fr_220px] ${
            isDarkMode
              ? "border-slate-800 bg-slate-900"
              : "border-slate-200 bg-white"
          }`}
        >
          <label
            className={`flex flex-col gap-2 text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
          >
            Name
            <input
              type="search"
              value={nameQuery}
              onChange={(event) => setNameQuery(event.target.value)}
              placeholder="Try searching for Lina"
              className={`rounded-xl border px-4 py-3 text-base outline-none transition placeholder:text-slate-500 focus:border-cyan-400 ${
                isDarkMode
                  ? "border-slate-700 bg-slate-950 text-slate-100"
                  : "border-slate-300 bg-slate-50 text-slate-900"
              }`}
            />
          </label>

          <label
            className={`flex flex-col gap-2 text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
          >
            Age
            <select
              value={ageFilter}
              onChange={(event) => setAgeFilter(event.target.value)}
              className={`rounded-xl border px-4 py-3 text-base outline-none transition focus:border-cyan-400 ${
                isDarkMode
                  ? "border-slate-700 bg-slate-950 text-slate-100"
                  : "border-slate-300 bg-slate-50 text-slate-900"
              }`}
            >
              <option value="all">All ages</option>
              <option value="under-30">Under 30</option>
              <option value="30-39">30 to 39</option>
              <option value="40-plus">40 and older</option>
            </select>
          </label>
        </div>

        <div
          className={`mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border p-4 ${
            isDarkMode
              ? "border-slate-800 bg-slate-900"
              : "border-slate-200 bg-white"
          }`}
        >
          <div>
            <p
              className={`text-sm font-medium ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              Counter
            </p>
            <p className="text-3xl font-bold">{counter.count}</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => dispatch("dec")}
              className="rounded-xl bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Decrement
            </button>
            <button
              type="button"
              onClick={() => dispatch("reset")}
              className={`rounded-xl border px-4 py-2 font-semibold transition-colors ${
                isDarkMode
                  ? "border-slate-700 text-slate-200 hover:border-cyan-400"
                  : "border-slate-300 text-slate-700 hover:border-cyan-600"
              }`}
            >
              Reset
            </button>
            <button
              type="button"
              onClick={() => dispatch("inc")}
              className="rounded-xl bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Increment
            </button>
          </div>
        </div>

        <p
          className={`mb-3 text-sm ${isDarkMode ? "text-slate-500" : "text-slate-600"}`}
        >
          {filteredUsers.length} {filteredUsers.length === 1 ? "user" : "users"}{" "}
          found
        </p>

        {filteredUsers.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {filteredUsers.map((user) => (
              <article
                key={user.id}
                className={`flex items-center gap-4 rounded-2xl border p-5 ${
                  isDarkMode
                    ? "border-slate-800 bg-slate-900"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="grid size-12 shrink-0 place-items-center rounded-full bg-cyan-400 font-bold text-slate-950">
                  {user.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <h2 className="font-semibold">{user.name}</h2>
                  <p
                    className={`mt-1 text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
                  >
                    {user.role} · {user.age} years old
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div
            className={`rounded-2xl border border-dashed px-5 py-12 text-center ${isDarkMode ? "border-slate-700 text-slate-400" : "border-slate-300 text-slate-600"}`}
          >
            No users match those filters.
          </div>
        )}
      </section>
    </main>
  );
};

export default App;
