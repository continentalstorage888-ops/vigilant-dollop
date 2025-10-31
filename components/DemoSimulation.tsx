import React, { useState, useCallback, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { PlayCircle, MousePointer2 } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

// Helper function for delays
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const DemoSimulation: React.FC = () => {
    const [isSimulating, setIsSimulating] = useState(false);
    const [caption, setCaption] = useState('');
    const { 
        closeAllWindows,
        setSearchOpen,
        openWindow,
        setDemoSearchQuery,
        closeWindow: closeAppContextWindow,
        setTheme,
        theme,
        setWallpaper,
        setPetDoingBackflip,
    } = useAppContext();
    const cursorControls = useAnimation();
    const highlighterControls = useAnimation();
    const simulationRef = useRef<boolean>(false);

    const setCaptionWithDelay = async (text: string, delay: number) => {
        if (!simulationRef.current) throw new Error("Simulation stopped");
        setCaption(text);
        await wait(delay);
    };

    const moveCursor = async (coords: { x: number | string; y: number | string; }, duration: number = 1.5) => {
        if (!simulationRef.current) throw new Error("Simulation stopped");
        await cursorControls.start({ 
            ...coords, 
            transition: { duration, ease: [0.25, 0.1, 0.25, 1] } // Smooth cubic bezier
        });
    };

    const highlightElement = async (selector: string, padding: number = 8) => {
        if (!simulationRef.current) throw new Error("Simulation stopped");
        
        await wait(200);
        
        const element = document.querySelector(selector);
        if (!element) {
            console.warn(`Element not found: ${selector}`);
            return;
        }

        const rect = element.getBoundingClientRect();
        await highlighterControls.start({ 
            x: rect.left - padding, 
            y: rect.top - padding, 
            width: rect.width + (padding * 2), 
            height: rect.height + (padding * 2),
            opacity: 1, 
            scale: 1, 
            transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } 
        });
    };

    const hideHighlighter = async () => {
        if (!simulationRef.current) return;
        await highlighterControls.start({ 
            opacity: 0, 
            scale: 1.05, 
            transition: { duration: 0.5, ease: 'easeOut' } 
        });
    };
    
    const typeInSearch = async (text: string) => {
        let currentText = '';
        for (const char of text) {
            if (!simulationRef.current) throw new Error("Simulation stopped");
            currentText += char;
            setDemoSearchQuery(currentText);
            await wait(150);
        }
    };

    const moveCursorToElement = async (selector: string, duration: number = 1.5) => {
        if (!simulationRef.current) throw new Error("Simulation stopped");
        
        await wait(200);
        const element = document.querySelector(selector);
        if (!element) {
            console.warn(`Element not found: ${selector}`);
            return;
        }

        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        await moveCursor({ x: centerX, y: centerY }, duration);
    };

    const runSimulation = useCallback(async () => {
        if (simulationRef.current) return;
        simulationRef.current = true;
        setIsSimulating(true);
        const originalTheme = theme;
        const originalWallpaper = 'dots'; // Assuming this is the default

        try {
            // --- 1. SETUP & ENTRANCE ---
            closeAllWindows();
            await wait(1000);
            await cursorControls.start({ 
                x: window.innerWidth / 2, 
                y: window.innerHeight / 2, 
                opacity: 1, 
                transition: { duration: 1.2, ease: 'easeOut' } 
            });
            await setCaptionWithDelay("Welcome to my interactive portfolio.", 4000);

            // --- 2. HIGHLIGHT MENU BAR ---
            await moveCursorToElement('header button[aria-label="About Tanmay Kalbande"]', 1.5);
            await highlightElement('header', 12);
            await setCaptionWithDelay("This is the menu bar for quick info and system access.", 5000);
            await hideHighlighter();
            await wait(800);

            // --- 3. OPEN PROJECTS APP ---
            await moveCursorToElement('div[aria-label="Open Projects"]', 1.5);
            await setCaptionWithDelay("Desktop icons launch key sections. Let's look at my projects.", 4500);
            openWindow('projects');
            await wait(1200);
            await highlightElement('div[style*="z-index"]', 16);
            await setCaptionWithDelay("Here, you can browse my work, from complex AI models to fun side-projects.", 6000);
            await wait(1000);
            closeAppContextWindow('projects');
            await hideHighlighter();
            await wait(1000);

            // --- 4. EXPLORE SETTINGS & CUSTOMIZATION ---
            await moveCursorToElement('button[aria-label="Open Settings"]', 1.5);
            await setCaptionWithDelay("The OS is fully customizable. Let's open Settings from the dock.", 5000);
            openWindow('settings');
            await wait(1200);
            await highlightElement('div[style*="z-index"]', 16);
            await setCaptionWithDelay("You can change the color theme...", 3500);

            const newTheme = theme === 'dark' ? 'light' : 'dark';
            const themeButton = Array.from(document.querySelectorAll('button')).find(el => el.textContent?.includes(newTheme === 'dark' ? 'Dark' : 'Light'));
            if (themeButton) {
                const rect = themeButton.getBoundingClientRect();
                await moveCursor({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }, 1.2);
                await wait(800);
                setTheme(newTheme);
            }
            await setCaptionWithDelay("...and even the wallpaper to match your style.", 4000);

            await moveCursorToElement('button:has(> div.wallpaper-circuit-dark), button:has(> div.wallpaper-circuit-light)', 1.5);
            await wait(800);
            setWallpaper('circuit');
            await wait(2500);
            closeAppContextWindow('settings');
            await hideHighlighter();
            await wait(1000);

            // --- 5. UNIVERSAL SEARCH ---
            await moveCursorToElement('button[aria-label="Open search (Cmd+K)"]', 1.5);
            await highlightElement('button[aria-label="Open search (Cmd+K)"]', 8);
            await setCaptionWithDelay("Universal Search (Cmd+K) helps you find anything instantly.", 5000);
            await hideHighlighter();
            await wait(500);
            setSearchOpen(true);
            await wait(1000);
            await setCaptionWithDelay("Let's search for an article I wrote...", 3000);
            await typeInSearch("Pustakam");
            await wait(2000);
            await moveCursor({ x: window.innerWidth / 2, y: window.innerHeight * 0.15 + 90 }, 1.2);
            await wait(1000);
            openWindow('articles');
            setSearchOpen(false);
            await wait(4000);
            closeAppContextWindow('articles');
            await wait(1000);

            // --- 6. INTERACT WITH PET ---
            await moveCursorToElement('div[class*="fixed z-50"] > div[class*="w-24 h-24"]', 2);
            await setCaptionWithDelay("And this is my little AI helper! It can give you tips.", 5000);
            await setCaptionWithDelay("Triple-click it for a surprise backflip!", 4000);
            setPetDoingBackflip(true);
            await wait(1000);
            setPetDoingBackflip(false);
            await wait(2500);

            // --- 7. FINAL MESSAGE ---
            closeAllWindows();
            await wait(1500);
            await hideHighlighter();
            await moveCursor({ x: window.innerWidth / 2, y: window.innerHeight / 2 }, 1.8);
            await setCaptionWithDelay("This portfolio is fully interactive. Feel free to explore.", 5000);
            await setCaptionWithDelay("Check out the games, read my articles, or chat with my AI. Enjoy!", 6000);
        
        } catch (error) {
            console.log("Simulation stopped.", error);
        } finally {
            // --- CLEANUP & END ---
            simulationRef.current = false;
            setTheme(originalTheme);
            setWallpaper(originalWallpaper);
            closeAllWindows();
            setCaption('');
            setDemoSearchQuery('');
            await Promise.all([
                hideHighlighter(),
                cursorControls.start({ opacity: 0, transition: { duration: 0.8 } })
            ]);
            setIsSimulating(false);
        }
    }, [
        closeAllWindows, cursorControls, highlighterControls, setSearchOpen, openWindow, setDemoSearchQuery, theme, setTheme, setWallpaper, setPetDoingBackflip, closeAppContextWindow
    ]);

    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
            <AnimatePresence>
            {!isSimulating && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={runSimulation}
                    className="fixed bottom-4 right-4 z-[10000] pointer-events-auto bg-amber-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-amber-600 transition-all group"
                    aria-label="Play Demo Simulation"
                >
                    <PlayCircle size={18} className="group-hover:scale-110 transition-transform" />
                    <span>Play Demo</span>
                </motion.button>
            )}
            </AnimatePresence>
            
            <motion.div
                className="absolute border-3 border-amber-400 rounded-xl shadow-2xl shadow-amber-500/50 backdrop-blur-[1px]"
                animate={highlighterControls}
                initial={{ opacity: 0, scale: 1.1 }}
                style={{ pointerEvents: 'none', borderWidth: '3px' }}
            />

            <motion.div
                className="absolute -translate-x-1 -translate-y-1"
                animate={cursorControls}
                initial={{ opacity: 0 }}
                style={{ pointerEvents: 'none' }}
            >
                <MousePointer2 
                    size={28} 
                    className="text-amber-400" 
                    style={{ 
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))',
                        strokeWidth: 2.5
                    }}
                />
            </motion.div>
            
            <AnimatePresence>
                {isSimulating && caption && (
                    <motion.div
                        key={caption}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className="fixed bottom-28 left-1/2 -translate-x-1/2 bg-amber-500/80 backdrop-blur-md text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-2xl border border-amber-400 max-w-md text-center"
                    >
                        {caption}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
