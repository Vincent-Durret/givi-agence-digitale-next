import Link from "next/link";
import React from "react";

const HomeOurNews = () => {
  const itemsNews = [
    {
      id: 1,
      img: "/assets/Home/OurNews/news-one.jpg",
      title: "I'm SamiraHadid.",
      secondTitle: "Nice to meet you!",
      text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
    },
    {
      id: 2,
      img: "/assets/Home/OurNews/news-two.jpg",
      title: "I'm SamiraHadid.",
      secondTitle: "Nice to meet you!",
      text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
    },
    {
      id: 3,
      img: "/assets/Home/OurNews/news-three.jpg",
      title: "I'm SamiraHadid.",
      secondTitle: "Nice to meet you!",
      text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
    },
  ];
  return (
    <section className="mt-[4rem] flex items-center justify-center flex-col">
      <h2 className="text-[5rem] font-bold">Nos dernières actualités</h2>
      <div className="mt-[2rem] flex flex-row items-center justify-between w-[70%] ">
        {itemsNews.map((item) => (
          <div key={item.id} className="max-w-[19rem]  bg-white ">
            <Link href="/nos-actualites">
              <img src={item.img} alt="" />
            </Link>
            <div className="p-5 bg-black rounded-b-[1rem]">
              <Link href="/nos-actualites">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  {item.title} <br /> {item.secondTitle}
                </h5>
              </Link>
              <p className="mb-3 text-[0.7rem] font-normal text-white">
                {item.text}
              </p>
              <Link
                href="/nos-actualites"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg"
              >
                En savoir plus
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <hr className="w-[60%] mt-[3rem] mb-[3rem] border-[1px] border-black" />
    </section>
  );
};

export default HomeOurNews;
