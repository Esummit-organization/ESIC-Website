import React from "react";
import { Blog } from "@/components/Blog/Blog";
import { useParams } from "react-router-dom";

export function BlogPost() {
  const { slug } = useParams();

  return (
    <>
      <Blog slug={slug}/>
    </>
  );
}
