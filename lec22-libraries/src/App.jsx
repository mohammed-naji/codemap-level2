import {
  ArrowRight,
  Check,
  Droplets,
  Flower2,
  Leaf,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  SunMedium,
} from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Leaf,
    title: "Smart plant care",
    description:
      "Track watering, sunlight, and growth reminders tailored to every leafy companion.",
  },
  {
    icon: Droplets,
    title: "Water insights",
    description:
      "Know exactly when your plants need a refresh with personalized hydration guidance.",
  },
  {
    icon: SunMedium,
    title: "Light optimization",
    description:
      "Match placement and exposure to each plant’s natural rhythm for healthier growth.",
  },
];

const collections = [
  {
    name: "Pet-friendly picks",
    accent: "from-emerald-400 to-green-500",
    count: "18 plants",
  },
  {
    name: "Low-maintenance",
    accent: "from-teal-400 to-emerald-500",
    count: "24 plants",
  },
  {
    name: "Air-purifying",
    accent: "from-lime-400 to-emerald-500",
    count: "12 plants",
  },
  {
    name: "Indoor jungle",
    accent: "from-green-500 to-emerald-700",
    count: "31 plants",
  },
];

const benefits = [
  "Daily care routines built for busy schedules",
  "Species-specific guidance for healthier growth",
  "Reminders that prevent overwatering and stress",
  "Easy plant shopping and care journal in one place",
];

const reviews = [
  {
    name: "Maya K.",
    text: "My apartment feels calmer and healthier. The app made plant care feel easy and fun.",
  },
  {
    name: "Noah T.",
    text: "I finally stopped killing my herbs. The reminders are actually helpful and not annoying.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_30%),linear-gradient(180deg,#f6fff9_0%,#eefaf4_100%)] text-slate-900">
      <motion.div
        className="absolute -left-16 top-20 h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-32 h-72 w-72 rounded-full bg-lime-200/40 blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, 22, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-1/3 h-52 w-52 rounded-full bg-teal-200/35 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <header className="mx-auto max-w-6xl px-6 pt-6 pb-10">
        <nav className="flex items-center justify-between rounded-full border border-emerald-200/80 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm">
              <Leaf className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.22em] text-emerald-700 uppercase">
                Verdant
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#features">Features</a>
            <a href="#collections">Collections</a>
            <a href="#care">Care</a>
            <a href="#reviews">Reviews</a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Log in
            </Button>
            <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
              Get the app
            </Button>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl space-y-24 px-6 pb-20">
        <motion.section
          className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div className="space-y-8" variants={fadeUp}>
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="h-4 w-4" />
              Grow greener, every day
            </motion.div>

            <div className="space-y-5">
              <motion.h1
                className="max-w-xl text-5xl font-black tracking-tight text-slate-900 md:text-6xl"
                variants={fadeUp}
              >
                The smart app for happier, healthier plants.
              </motion.h1>
              <motion.p
                className="max-w-lg text-lg text-slate-600"
                variants={fadeUp}
              >
                Build a calmer home with guided care, plant recommendations, and
                reminders that keep each leaf thriving.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              variants={fadeUp}
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="h-12 gap-2 bg-emerald-600 px-6 text-base text-white hover:bg-emerald-700">
                  Start free <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="outline" className="h-12 px-6 text-base">
                  Explore plants
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-8 pt-4 text-sm text-slate-600"
              variants={fadeUp}
            >
              <div>
                <div className="text-2xl font-bold text-slate-900">12k+</div>
                <div>happy plant parents</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">4.9/5</div>
                <div>average rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">98%</div>
                <div>care success rate</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            variants={fadeUp}
            animate={{ y: [0, -10, 0], rotate: [0, 0.6, -0.6, 0] }}
            transition={{ duration: 5, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute -left-7 top-10 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-lg"
              animate={{ rotate: [0, 18, -12, 0], y: [0, -10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Leaf className="h-6 w-6" />
            </motion.div>
            <motion.div
              className="absolute -right-8 bottom-12 flex h-16 w-16 items-center justify-center rounded-full bg-lime-100 text-lime-700 shadow-lg"
              animate={{ rotate: [0, -16, 12, 0], y: [0, 12, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="h-7 w-7" />
            </motion.div>
            <div className="rounded-[32px] border border-emerald-200 bg-white p-4 shadow-[0_25px_80px_rgba(16,185,129,0.12)]">
              <div className="rounded-[28px] bg-gradient-to-br from-emerald-500 via-green-500 to-lime-400 p-5 text-white">
                <div className="flex items-center justify-between pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-100">
                      Today
                    </p>
                    <h2 className="mt-2 text-3xl font-bold">Plant check-in</h2>
                  </div>
                  <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
                    <Flower2 className="h-6 w-6" />
                  </div>
                </div>

                <div className="rounded-[24px] bg-white/12 p-4 backdrop-blur-sm">
                  <div className="mb-3 flex items-center justify-between text-sm text-emerald-50">
                    <span>Monstera Deliciosa</span>
                    <span className="rounded-full bg-white/15 px-2 py-1 text-xs">
                      Healthy
                    </span>
                  </div>
                  <div className="space-y-3 text-sm text-emerald-50/90">
                    <div className="flex items-center justify-between">
                      <span>Watering</span>
                      <span>3 days left</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/20">
                      <motion.div
                        className="h-2 rounded-full bg-white"
                        initial={{ width: 0 }}
                        animate={{ width: "72%" }}
                        transition={{ duration: 1, delay: 0.4 }}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Sunlight</span>
                      <span>Bright indirect</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="rounded-2xl bg-white/12 p-3">
                    <div className="text-xl font-bold">24</div>
                    <div className="text-emerald-100">Plants</div>
                  </div>
                  <div className="rounded-2xl bg-white/12 p-3">
                    <div className="text-xl font-bold">8</div>
                    <div className="text-emerald-100">Tasks</div>
                  </div>
                  <div className="rounded-2xl bg-white/12 p-3">
                    <div className="text-xl font-bold">92%</div>
                    <div className="text-emerald-100">Care</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          id="features"
          className="space-y-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div
            className="flex items-end justify-between gap-4"
            variants={fadeUp}
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Why Verdant
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                Everything your plants need
              </h2>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                variants={fadeUp}
                transition={{
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                }}
                whileHover={{ y: -10, scale: 1.02, rotateX: 3 }}
              >
                <Card className="h-full border-emerald-100 bg-white/80 shadow-sm">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-7 text-slate-600">
                      {description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="collections"
          className="space-y-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <motion.div
            className="flex items-end justify-between gap-4"
            variants={fadeUp}
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Shop by vibe
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                Curated plant collections
              </h2>
            </div>
            <Button variant="link" className="gap-2 px-0 text-emerald-700">
              View all collections <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {collections.map(({ name, accent, count }, index) => (
              <motion.div
                key={name}
                variants={fadeUp}
                transition={{
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 160,
                  damping: 18,
                }}
                whileHover={{ y: -10, rotate: 0.5, scale: 1.02 }}
                className="group overflow-hidden rounded-[28px] border border-emerald-100 bg-white p-5 shadow-sm"
              >
                <div
                  className={`mb-5 flex h-44 items-end rounded-[22px] bg-gradient-to-br ${accent} p-4`}
                >
                  <div className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm">
                    <Leaf className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {name}
                    </h3>
                    <p className="text-sm text-slate-500">{count}</p>
                  </div>
                  <button className="rounded-full bg-emerald-50 p-2 text-emerald-700 transition-colors hover:bg-emerald-100">
                    <ShoppingBag className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="care"
          className="grid gap-8 rounded-[32px] border border-emerald-100 bg-white/80 p-6 shadow-sm md:p-10 lg:grid-cols-[1fr_1.1fr]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <motion.div className="space-y-6" variants={fadeUp}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Care simplified
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                A gentle routine for every room
              </h2>
            </div>

            <div className="space-y-4">
              {benefits.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-emerald-50 p-3 text-slate-700"
                  variants={fadeUp}
                  transition={{ delay: index * 0.06 }}
                >
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <Check className="h-4 w-4" />
                  </div>
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-[28px] bg-gradient-to-br from-slate-900 via-emerald-950 to-emerald-800 p-6 text-white"
            variants={fadeUp}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">
                  Care score
                </p>
                <h3 className="mt-2 text-4xl font-bold">86%</h3>
              </div>
              <div className="rounded-full bg-white/10 p-3">
                <ShieldCheck className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-white/8 p-4">
                <div className="mb-2 flex items-center justify-between text-sm text-emerald-100">
                  <span>Water schedule</span>
                  <span>Every 4 days</span>
                </div>
                <div className="h-2 rounded-full bg-white/15">
                  <motion.div
                    className="h-2 rounded-full bg-emerald-300"
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                  />
                </div>
              </div>
              <div className="rounded-2xl bg-white/8 p-4">
                <div className="mb-2 flex items-center justify-between text-sm text-emerald-100">
                  <span>Light balance</span>
                  <span>Optimal</span>
                </div>
                <div className="h-2 rounded-full bg-white/15">
                  <motion.div
                    className="h-2 rounded-full bg-lime-300"
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.1 }}
                  />
                </div>
              </div>
              <div className="rounded-2xl bg-white/8 p-4">
                <div className="mb-2 flex items-center justify-between text-sm text-emerald-100">
                  <span>Humidity support</span>
                  <span>Great</span>
                </div>
                <div className="h-2 rounded-full bg-white/15">
                  <motion.div
                    className="h-2 rounded-full bg-teal-300"
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          id="reviews"
          className="space-y-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div variants={fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Loved by plant lovers
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Real stories from happy homes
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map(({ name, text }, index) => (
              <motion.div
                key={name}
                variants={fadeUp}
                transition={{
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 140,
                  damping: 16,
                }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full border-emerald-100 bg-white shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg leading-8 text-slate-700">“{text}”</p>
                    <div className="font-semibold text-slate-900">{name}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="pb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-[32px] bg-gradient-to-r from-emerald-600 via-green-600 to-lime-500 px-6 py-10 text-center text-white shadow-[0_25px_60px_rgba(22,163,74,0.3)] md:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-100">
              Ready to grow?
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Bring more life home.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-emerald-50 md:text-lg">
              Start your healthier home routine today with a plant app designed
              to support each leaf, every day.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="h-12 bg-white px-6 text-emerald-700 hover:bg-emerald-50">
                  Download now
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className="h-12 border-white/50 bg-transparent px-6 text-white hover:bg-white/10"
                >
                  See demo
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default App;
