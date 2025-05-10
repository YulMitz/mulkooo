import { useArticles } from '../utils/articleUtil';
import ArticlePreview from '../components/ArticlePreview';

function Home() {
    const { articles, loading } = useArticles();

    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className="flex flex-row h-screen w-screen overflow-hidden">
                    <div className="flex flex-row w-screen m-0.5 border-1 p-1">
                        {/* Side Bar Section */}
                        <div className="flex flex-col w-1/4 h-full m-0.5 border-1 p-1 bg-second-white">
                            <label htmlFor="my-drawer" className="btn drawer-button">文章列表</label>
                            <div className="avatar justify-center mt-6">
                                <div className="w-24 rounded-full">
                                    <img className="scale-170" src="assets/bernice.jpg"/>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-center mt-2">Mulkooo</h3>
                            </div>
                        </div>
                        {/* Main Content Section */}
                        <div className="flex flex-col flex-1 h-full overflow-hidden m-0.5 border-1 p-1">
                            {/* Ordering, Searching and Filtering Bar */}
                            <div>
                                <h3 className="text-3xl mt-2">老派程式之必要</h3>
                            </div>
                            <div className="flex flex-row space-x-4 mt-4 h-20 m-0.5 border-1 p-1">
                                <details className="dropdown">
                                    <summary className="btn m-1">貼文排序</summary>
                                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </ul>
                                </details>
                                <div className="ml-auto mr-4">
                                    <label className="input bg-second-white">
                                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                            >
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.3-4.3"></path>
                                            </g>
                                        </svg>
                                        <input type="search" className="grow" placeholder="Search" />
                                    </label>
                                </div>
                                <div className="mr-4">
                                    <details className="dropdown">
                                        <summary className="btn m-1">標籤</summary>
                                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                            <li><a>Item 1</a></li>
                                            <li><a>Item 2</a></li>
                                        </ul>
                                    </details>
                                </div>
                            </div>
                            {/* Article Section */}
                            <div className="flex flex-col m-0.5 p-1 border-1">
                                {!loading && articles.map(article => (
                                    <ArticlePreview key={article.slug} article={article} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Drawer Content */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    );
  }
  
  export default Home;
  