import { Link, useParams } from "react-router";
import news from "../data/news";

const BlogDetails = () => {
  const { id } = useParams();
  const article = news.find((item) => item.id === Number(id));
  return (
    <main
      dir="rtl"
      className="min-h-[70vh] bg-[#f5f3ec] px-5 py-10 text-emerald-950 sm:px-8 sm:py-16"
    >
      <article className="mx-auto max-w-3xl">
        <Link
          to="/blogs"
          className="text-sm font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 hover:text-emerald-950"
        >
          العودة إلى الأخبار
        </Link>

        {article ? (
          <>
            <div className="mt-8 border-t border-emerald-950/15 pt-7">
              <p className="mb-4 text-sm font-semibold text-amber-700">
                {article.category}{" "}
                <span className="px-2 text-stone-400">/</span>
                خبر رقم {String(article.id).padStart(2, "0")}
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
                {article.title}
              </h1>
              <p className="mt-7 text-lg leading-9 text-stone-700">
                {article.summary}
              </p>
            </div>

            <section className="mt-12 border-t border-emerald-950/15 pt-7">
              <h2 className="text-2xl font-bold">قد يعجبك أيضًا</h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {news
                  .filter((item) => item.id !== article.id)
                  .slice(0, 2)
                  .map((relatedArticle) => (
                    <Link
                      key={relatedArticle.id}
                      to={`/blogs/${relatedArticle.id}`}
                      className="border-b border-emerald-950/15 py-4 transition-colors hover:border-amber-600"
                    >
                      <span className="text-xs font-bold text-amber-700">
                        {relatedArticle.category}
                      </span>
                      <h3 className="mt-2 font-bold leading-7">
                        {relatedArticle.title}
                      </h3>
                    </Link>
                  ))}
              </div>
            </section>
          </>
        ) : (
          <div className="mt-8 border-t border-emerald-950/15 pt-7">
            <h1 className="text-3xl font-bold">الخبر غير موجود</h1>
            <p className="mt-4 leading-7 text-stone-600">
              لم نعثر على خبر بهذا الرقم. ارجع إلى قائمة الأخبار واختر خبرًا
              آخر.
            </p>
          </div>
        )}
      </article>
    </main>
  );
};

export default BlogDetails;
