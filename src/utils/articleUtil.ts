import { useState, useEffect } from "react";

export interface ArticleMetaData {
    title: string;
    description: string;
    date: string;
    excerpt: string;
    thumbnail: string;
    tags: string[];
    slug: string;
}

// The "extends" will inherit the properties of ArticleMetaData
export interface Article extends ArticleMetaData {
    html: string;
    path: string;
}

// This function will import all articles using Vite's import.meta.glob
export function useArticles() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        const loadArticles = async () => {
            try {
                console.log("Loading articles...");
                // Use import.meta.glob to get all markdown files
                const articleFiles = import.meta.glob('../features/posts/*.md');

                const articlesData = await Promise.all(
                    Object.entries(articleFiles).map(async ([path, resolver]) => {
                        const fileContent = await resolver() as { attributes: ArticleMetaData; html: string };
                        
                        return {
                            ...fileContent.attributes,
                            html: fileContent.html,
                            path
                        } as Article;
                    })
                );

                // Sort articles by date in descending order
                const sortedArticles = articlesData.sort(
                    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
                );

                setArticles(sortedArticles);
            } catch (error) {
                console.error("Error loading articles:", error);
            } finally {
                setLoading(false);
            }
        };

        loadArticles();
    }, []);

    return { articles, loading };
}