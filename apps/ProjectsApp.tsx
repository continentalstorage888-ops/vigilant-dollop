import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data';
import { Project } from '../types';
import { Folder, ExternalLink, Github } from 'lucide-react';
import { useWindowManager } from '../hooks/useWindowManager';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectContextMenu: React.FC<{
    x: number;
    y: number;
    project: Project;
    onClose: () => void;
}> = ({ x, y, project, onClose }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);
    
    const menuItems = Object.entries(project.links).filter(([_, url]) => url);

    return (
        <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            style={{ top: y, left: x }}
            className="fixed w-48 bg-stone-200/80 dark:bg-stone-800/80 backdrop-blur-md p-1.5 rounded-lg shadow-xl border border-stone-300/50 dark:border-stone-700/50 z-[2000]"
        >
            <ul className="text-sm text-stone-800 dark:text-stone-200">
                {menuItems.map(([type, url]) => (
                    <li
                        key={type}
                        // Fix: Cast url to string as TypeScript infers it as 'unknown' here.
                        onClick={() => { window.open(url as string, '_blank'); onClose(); }}
                        className="flex items-center justify-between px-3 py-1.5 rounded-md hover:bg-stone-300/50 dark:hover:bg-stone-700/50 cursor-pointer capitalize"
                    >
                        <span>Open {type === 'live' ? 'Live Demo' : type}</span>
                        {type === 'github' ? <Github size={16} /> : <ExternalLink size={16} />}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};


const ProjectFolder: React.FC<{ 
    project: Project;
    onContextMenu: (event: React.MouseEvent, project: Project) => void;
}> = ({ project, onContextMenu }) => {
    const { openWindow } = useWindowManager();

    const handleDoubleClick = () => {
        if (project.appId) {
            openWindow(project.appId);
        } else if (project.links.live) {
            window.open(project.links.live, '_blank');
        } else if (project.links.website) {
            window.open(project.links.website, '_blank');
        } else if (project.links.github) {
            window.open(project.links.github, '_blank');
        }
    };

    return (
        <div
            onDoubleClick={handleDoubleClick}
            onContextMenu={(e) => onContextMenu(e, project)}
            className="flex flex-col items-center text-center w-36 h-32 p-2 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-black/10 dark:hover:bg-white/10 focus:bg-black/20 dark:focus:bg-white/20 focus:outline-none select-none"
            aria-label={`Open ${project.title}`}
        >
            <Folder size={64} className="text-amber-500 drop-shadow-lg" />
            <span className="text-sm font-medium mt-2 w-full truncate leading-tight">
                {project.title}
            </span>
        </div>
    );
};

const ProjectsApp: React.FC = () => {
    const [contextMenu, setContextMenu] = useState<{ x: number, y: number, project: Project } | null>(null);

    const handleContextMenu = (e: React.MouseEvent, project: Project) => {
        e.preventDefault();
        setContextMenu({ x: e.clientX, y: e.clientY, project });
    };

    const handleCloseContextMenu = () => {
        setContextMenu(null);
    };

    return (
        <div className="h-full flex flex-col bg-stone-100 dark:bg-stone-900 p-4" onClick={handleCloseContextMenu}>
            <header className="mb-4 flex-shrink-0">
                <h2 className="text-2xl font-extrabold text-stone-900 dark:text-white">Projects</h2>
                <p className="text-sm text-stone-600 dark:text-stone-400">Double-click to open, right-click for options.</p>
            </header>
            <main className="flex-grow overflow-y-auto">
                <div className="flex flex-wrap gap-4 justify-start">
                    {portfolioData.projects.map((project, index) => (
                        <ProjectFolder key={index} project={project} onContextMenu={handleContextMenu} />
                    ))}
                </div>
            </main>
            <AnimatePresence>
                {contextMenu && (
                    <ProjectContextMenu
                        x={contextMenu.x}
                        y={contextMenu.y}
                        project={contextMenu.project}
                        onClose={handleCloseContextMenu}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectsApp;
