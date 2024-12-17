import { Container } from "@/components";
import React from 'react'
import MagicBadge from "@/components/ui/magic-badge";
import Blogs from "@/components/blog/blog";

const BlogPage = () => {
    return (
        <div className="flex flex-col items-center justify-center pb-20 my-24">
            <Container delay={0.1} className="w-full">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                    Blog
                </h1>
                <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                    Latest news and updates.
                </p>
            </Container>
            <Container delay={0.2} className="w-full pt-20">
                <Blogs />
            </Container>
        </div>
    )
};

export default BlogPage
