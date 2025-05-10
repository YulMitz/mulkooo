import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
    children, 
    title = "mulkooo", 
    description = "yolo" 
}) => {
    return (
        <div className="flex flex-row h-screen w-screen overflow-hidden">
            <div className="flex flex-row w-screen m-0.5 border-1 p-1">
                <div className="flex flex-col w-1/4 h-full m-0.5 border-1 p-1 bg-second-white">
                    <title className="text-xl mt-2">{title}</title>
                    <meta name="description" content={description} />
                </div>
                <div className="flex flex-col flex-1 h-full overflow-hidden m-0.5 border-1 p-1">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;