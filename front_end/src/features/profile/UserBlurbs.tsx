import React, { useEffect } from 'react';
import OrangeModule from '../../components/common/OrangeModule';

const BlurbSection: React.FC<{ title: string }> = ({ title }) => (
    <div className="mb-3">
        <h3 className="font-bold text-red-600">{title}</h3>
        <a href="#/profile/edit" className="text-[#6699CC] hover:underline">[edit]</a>
    </div>
);

interface UserBlurbsProps {
    customHtml?: string;
}

// Add a declaration to the global window object for TypeScript to recognize 'matrixInterval'
declare global {
    interface Window {
        matrixInterval?: number;
    }
}

const UserBlurbs: React.FC<UserBlurbsProps> = ({ customHtml }) => {
    
    useEffect(() => {
        // This function will find and execute scripts from the HTML string
        const executeScripts = () => {
            if (!customHtml) return;

            // Use the browser's parser to find script tags, which is more robust than regex.
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = customHtml;
            const scripts = tempDiv.getElementsByTagName('script');
            
            const scriptsToExecute: string[] = [];
            for (let i = 0; i < scripts.length; i++) {
                scriptsToExecute.push(scripts[i].innerHTML);
            }

            // Execute all found scripts
            scriptsToExecute.forEach(scriptContent => {
                 try {
                    // Using new Function() is a safer way to execute dynamic code than eval()
                    new Function(scriptContent)();
                } catch (error) {
                    console.error("Error executing custom script:", error);
                }
            });
        };
        
        // This function cleans up ALL side effects created by the custom script
        const cleanupScripts = () => {
            // Clear the interval using the ID stored on the window object
            if (window.matrixInterval) {
                clearInterval(window.matrixInterval);
                window.matrixInterval = undefined; 
            }
            // Find and remove the canvas from the document body
            const canvas = document.getElementById('matrix-rain');
            if (canvas) {
                canvas.remove();
            }
        };

        // Cleanup previous effects before running new ones
        cleanupScripts();
        // Execute the scripts from the new HTML
        executeScripts();
        
        // Return the cleanup function to be called when the component unmounts or the prop changes
        return cleanupScripts;

    }, [customHtml]);


    return (
        <OrangeModule title="matter's Blurbs">
            {customHtml ? (
                // This will render non-script HTML like the <canvas> tag's container,
                // but won't execute the <script> tags themselves.
                // The useEffect hook above handles the script execution.
                <div dangerouslySetInnerHTML={{ __html: customHtml }} />
            ) : (
                <>
                    <BlurbSection title="About me:" />
                    <BlurbSection title="Who I'd like to meet:" />
                </>
            )}
        </OrangeModule>
    );
};

export default UserBlurbs;
