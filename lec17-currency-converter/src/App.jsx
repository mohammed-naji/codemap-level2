import { useEffect, useState } from "react";

const App = () => {
  const [amount, setAmount] = useState(10);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("ILS");
  const [loading, setLoading] = useState(true);
  const [rates, setRates] = useState({});
  const [result, setResult] = useState(0);

  const handleConvert = (e) => {
    e.preventDefault();

    const convertedAmount = amount * (rates[toCurrency] / rates[fromCurrency]);

    setResult(convertedAmount);
  };

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch("https://open.er-api.com/v6/latest");
        const data = await response.json();
        setRates(data.rates);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching exchange rates" + err);
      }
    };
    fetchRates();
  }, []);

  return (
    <div
      dir="rtl"
      class="bg-white w-full max-w-md rounded-2xl shadow-xl mx-auto mt-6 p-8 border border-slate-100 font-cairo"
    >
      <h2 class="text-2xl font-bold text-slate-900 text-center mb-8">
        محول العملات الذكي
      </h2>

      <form class="space-y-6" onSubmit={handleConvert}>
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">
            المبلغ المراد تحويله
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 text-lg transition-all"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">
            من عملة
          </label>
          <div class="relative">
            <select
              class="w-full px-4 py-3 pr-12 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 bg-white appearance-none cursor-pointer"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {Object.keys(rates).map((op) => (
                <option value={op}>{op}</option>
              ))}
            </select>
            <div class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
              <div class="w-6 h-4 bg-blue-900 rounded-sm overflow-hidden flex items-center justify-center border border-slate-200 shadow-sm">
                <span class="text-[8px] text-yellow-400 font-bold">🇪🇺</span>
              </div>
            </div>
            <div class="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
              ▼
            </div>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">
            إلى عملة
          </label>
          <div class="relative">
            <select
              class="w-full px-4 py-3 pr-12 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 bg-white appearance-none cursor-pointer"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {Object.keys(rates).map((op) => (
                <option value={op}>{op}</option>
              ))}
            </select>
            <div class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
              <div class="w-6 h-4 bg-white rounded-sm overflow-hidden flex items-center justify-center border border-slate-200 shadow-sm">
                <span class="text-[8px] font-bold">🇮🇱</span>
              </div>
            </div>
            <div class="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
              ▼
            </div>
          </div>
        </div>

        <button
          disabled={loading}
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-xl transition-colors shadow-lg shadow-blue-600/20 text-base disabled:bg-blue-200"
        >
          تحويل الآن
        </button>
      </form>

      <div class="mt-6 bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-3">
        <div class="flex justify-between items-center text-base">
          <span class="font-medium text-slate-800">المبلغ :</span>
          <span class="font-bold text-blue-600 text-lg">
            {result.toFixed(2)}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
