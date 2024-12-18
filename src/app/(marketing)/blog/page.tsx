import { Container } from "@/components";
import React from 'react'
import Blogs from "@/components/blog/blog";

const BlogPage = () => {
    return (
        <div className="flex flex-col items-center justify-center pb-10 pt-28 sm:pt-30 md:pt-28">
            <Container delay={0.1} className="w-full">
                <h1 className="text-5xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                    Blog
                </h1>
                <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                    Latest news and updates.
                </p>
            </Container>
            <Container delay={0.2} className="w-full pt-10">
                <Blogs />
            </Container>
        </div>
    )
};

export default BlogPage
