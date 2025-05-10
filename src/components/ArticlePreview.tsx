import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleMetaData } from '../utils/articleUtil';

interface ArticlePreviewProps {
    article: ArticleMetaData;
}

const MAX_VISIBLE_TAGS = 4;

function ArticlePreview({article}: ArticlePreviewProps): React.ReactNode {
    const visibleTags = article.tags.slice(0, MAX_VISIBLE_TAGS);
    const hiddenTags = article.tags.slice(MAX_VISIBLE_TAGS);

    return (
        <div className="card bg-second-white w-full shadow-sm">
            <figure>
                <img
                    className="object-cover w-full h-48"
                    src={article.thumbnail}
                    alt={article.title}
                />
            </figure>
            <div className='card-body'>
                <Link to={`/article/${article.slug}`}>
                    <h2 className='card-title'>{article.title}</h2>
                </Link>
                <p>{article.excerpt}</p>
                <div className="card-actions justify-end">
                    {visibleTags.map((tag, _) => (
                        <div key={tag} className='badge badge-outline'>
                            {tag}
                        </div>
                    ))}
                    {hiddenTags.length > 0 && (
                        <div className='badge badge-outline cursor-pointer relative group' tabIndex={0}>
                            ...
                            <div className="
                                absolute z-10
                                top-full mt-2
                                right-0
                                min-w-[120px] max-w-[90vw]
                                bg-second-white
                                rounded shadow-lg p-2
                                opacity-0
                                group-hover:opacity-100 group-focus:opacity-100
                                group-hover:pointer-events-auto group-focus:pointer-events-auto
                                pointer-events-auto
                                transition-opacity
                            ">
                                {hiddenTags.map((tag, _) => (
                                    <span key={tag} className='badge badge-outline w-auto m-1 break-normal'>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ArticlePreview;