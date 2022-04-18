
import Title from "./Title";
import data from "../public/data.json";
import Image from "next/image";



const Blog = () => {
  return (
    <div id="blog" className="mt-20 md:mx-20">
      <Title num={2} title="Gigs I worked on" />
      <div className="flex flex-wrap justify-between mt-10">
        {data.gigs.map((post) => {
          return (
            <a
              href={`${post.link}`}
              key={post._id}
              target="_blank"
              rel="noreferrer"
              className="relative flex flex-col m-5 my-5 mt-5 rounded-lg md:mb-0 md:mx-5 w-80 md:w-96 dark:bg-darkerblue"
            >
              <div className="relative"><Image
                objectFit="cover"
                width={1500}
                height={786}
                className="rounded-lg"
                src={post.image}
                alt={post.about}
              /></div>


              <div className="flex flex-col p-4 pb-0">
                <h2 className="text-2xl font-semibold text-neongreen">{post.name}</h2>
                <p className="mt-4 text-base break-words text-text">{post.about}</p>
              </div>

            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
