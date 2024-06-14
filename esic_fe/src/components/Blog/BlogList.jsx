import React from "react";
import BlogListCard from "./BlogListCard";
import BlogListGrid from "./BlogListGrid";

export function BlogList() {
    return (
        <div>
            <div className="flex justify-center bg-gradient-to-br from-blog-50 to-blog-100">
                <BlogListGrid />
            </div>           
        </div>
    );
    }
