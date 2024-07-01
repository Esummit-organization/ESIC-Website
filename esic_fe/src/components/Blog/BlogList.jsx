import React from "react";
import { useState,useEffect } from "react";
import { featuredCard,blogs,filters } from "./BlogConstants";
import BlogListCard from "@/components/Blog/BlogListCard";
import { Link } from "react-router-dom";
import {
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { IconFilter } from "@tabler/icons-react";

function BlogPageTitle({ children }) {
  return (
    <h1
      className="p-8 lg:px-20 xl:px-40 bg-blog-50 text-3xl tracking-wider relative hover:tracking-widest cursor-pointer
                  transition-all hover:text-sponsor-50
                  "
    >
      {children}
    </h1>
  );
}

export function BlogList() {
    const [filteredBlogs, setFilteredBlogs] = useState(blogs);
    const [selectedFilter, setSelectedFilter] = useState("all");
    

    const filterBlogs = (filter)=>{       
            if(filter==="all"){
                setSelectedFilter("all");
                setFilteredBlogs(blogs);
            }
            else{
                setSelectedFilter(filter);

                    setFilteredBlogs(blogs.filter((blog)=>{
                        return blog.tags.some((tag) => tag === filter)
                    })
                    )
            }
    }

  return (
    <div className="pb-8 bg-blog-50">
      <BlogPageTitle>Featured</BlogPageTitle>

      <div className="px-8 lg:px-20 xl:px-40 bg-blog-50">
        <BlogListCard {...featuredCard} horizontal />
      </div>

        <div className="bg-blog-50 flex justify-between pr-8 lg:pr-20 xl:pr-40">
      <BlogPageTitle>Recent Blogs</BlogPageTitle>
      
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 m-2 hover:text-sponsor-50 h-30 text-lg outline-none">
                <IconFilter></IconFilter>
                {selectedFilter === "all" ? "All" : selectedFilter}
            </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
            <DropdownMenuRadioGroup value={selectedFilter}>
                
                    <DropdownMenuRadioItem value="all" onClick={()=>filterBlogs("all")}>All</DropdownMenuRadioItem>
                    {
                        filters.map((filter)=>{
                            return(
                                <DropdownMenuRadioItem key={filters.indexOf(filter)} value={filter} onClick={()=>filterBlogs(filter)}>{filter}</DropdownMenuRadioItem>
                            )
                        })
                    }
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
        
           
        </div>

        <div className="bg-blog-50 text-center text-xl">
          {     
                !filteredBlogs.length && (
                    <div className="text-gray-400 py-10">
                        No blogs found
                    </div>
                )
            } 
            </div>
      <div className="grid grid-cols-1 bg-blog-50 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-8 lg:px-20 xl:px-40">
        {filteredBlogs.map((blog)=>{
            let slug = blog.slug;
            return (
                <Link to={slug}><BlogListCard {...blog} ></BlogListCard></Link>             
            )
        })}
      </div>

      {/* <div className="grid place-items-center p-8 bg-gradient bg-gradient-to-tr from-blog-50 to-blog-100">
        <Link
          to="#"
          className="text-sm border p-4 hover:bg-white hover:text-blog-50 transition"
        >
          Load More...
        </Link>
      </div> */}
    </div>
  );
}
