import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";



export const getStaticProps = async () => {
    const request = await fetch(
        `http://localhost:1337/api/videos/`
    );
    const posts = await request.json();
    return {
        props: {
            posts,
        },
    };
}
const Home = ({ posts }) => {
    const [render, setRender] = useState(false);

    useEffect(() => {
        setRender(true);
    }, []);

    return (
       
          
          
                
                    
                    

                        
                        <div className="grid w-lg gap-5  mx-18 mt-0 mt-12 transform -translate-y-44 lg:grid-cols-3 lg:max-w-none">
                            {posts.data.map((post) => (
                                <div
                                    key={post.id}
                                    className="flex flex-col bg-gray-400 bg-opacity-10  items-center overflow-hidden rounded-lg shadow-lg"
                                >
                                    <a href={"/videos/" + post.id}>


                                        <div className="w-full px-4 py-6 transition-all duration-150 ">
                                            <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 bg-gray-200 bg-opacity-10  transition-all duration-150 bg-transparent rounded-lg shadow-lg hover:shadow-2xl">
                                                <div className="md:flex-shrink-0">
                                                    <img
                                                        src={post.attributes.coverlink}
                                                        alt="Blog Cover"
                                                        className="object-fill w-full rounded-lg rounded-b-none md:h-56"
                                                    />
                                                </div>
                                                <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
                                                    <div className="flex flex-row items-center">
                                                        <div className="flex flex-row items-center mr-2 text-xs font-medium text-gray-500"></div>

                                                        <div className="flex flex-row items-center mr-2 text-xs font-medium text-gray-500"></div>

                                                        <div className="flex flex-row items-center text-xs font-medium text-gray-500"></div>
                                                    </div>
                                                </div>
                                                <div className="border-gray-300" />
                                                <div className="flex flex-wrap items-center flex-1 px-4 py-1 mx-auto text-center">
                                                    <div href="#" className="hover:underline">
                                                        <h2 className="text-2xl font-bold tracking-normal text-orange-700">
                                                            {post.attributes.title}
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div className="border-white-300" />
                                                <div className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
                                                    {post.attributes.description}
                                                </div>
                                                <div className="border-gray-300" />
                                                <div className="px-4 py-2 mt-2">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center flex-1">
                                                            <div className="flex flex-col mx-2">
                                                                <div
                                                                    href=""
                                                                    className="font-semibold text-gray-700 hover:underline"
                                                                >
                                                                    {post.attributes.author}
                                                                </div>
                                                                <div className="text-xs text-gray-600">
                                                                    {post.attributes.createdAt}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </a>
                                </div>
                            ))}
                        </div>
                    
              
        
    );
}