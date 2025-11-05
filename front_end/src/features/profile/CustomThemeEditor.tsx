import React, { useState } from 'react';

interface ThemeEditorProps {
  onApplyTheme: (html: string, css: string) => void;
}

const luckyThemeHtml = `<div id="TEMPLATE-LAYOUT">
            <div class="BOARD">
                <img src="https://files.catbox.moe/l9ice9.webp" style="float:left;">      
                <p>WELCOME!</p>
            </div>
            <header>
                <img src="https://files.catbox.moe/aphjmu.png" style="float:right;height:300px;position:relative;bottom:20px;">
                <h1 class="shadow" style="position:relative;color:hotpink;font-family:verdana;font-size:40px;margin:20px;"><img src="https://files.catbox.moe/moqz40.gif"> TITLE! ♪</h1>
            </header>
            <div class="marquee-box">
                <marquee>Welcome to my website! <font color="red">This is a F2U template.</marquee>
            </div>
            <div class="the-section">
                <div class="content">
                    <div class="container">
                        <!-- This section can editted to your liking... --> 
                        <p>
                            <img src="https://files.catbox.moe/cj0vmu.webp" style="float:right;">
                            <b>Hi there<font color="hotpink"> !</font></b> Welcome to my website. <br>This is the live preview of the "<font color="#7be37b">Lucky! ☆</font>" F2U template by <a href="#">Swirl ♪</a>. I hope you like it. (<font color="red">✿</font>◠‿◠)
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia, ligula ut bibendum gravida, ipsum ipsum interdum ex, vel dictum elit lorem id sapien. Quisque euismod, turpis vel hendrerit tristique, odio lorem feugiat nisi, vel volutpat libero sapien id odio. Nulla facilisi. Duis convallis ac nisl in dignissim.</p>
                        <!-- this much! --> 
                    </div>
                </div>
                <div class="box-left">
                    <div class="container">
                        <!-- This section can editted to your liking... --> 
                        <div class="button">
                            Header!
                        </div>
                        <p>something cool goes here! tipe to get creative ♪(´▽｀)</p>
                        <!-- this much! --> 
                    </div>
                </div>
                <div class="box-right">
                    <div class="container">
                        <!-- This section can editted to your liking... --> 
                        <div class="button">
                            Header!
                        </div>
                        <p>something cool goes here! tipe to get creative ♪(´▽｀)</p>
                        <!-- this much! --> 
                    </div>
                </div>
            </div>
            <div class="navigation">
                <!-- This section can editted to your liking... --> 
                <div class="button">
                    Navigation
                </div>
                <ul>
                    <li><a href="#">Homepage</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Webmaster</a></li>
                    <li><a href="#">Link4</a></li>
                    <li><a href="#">Link5</a></li>
                    <li><a href="#">Link6</a></li>
                    <li><a href="#">Link7</a></li>
                    <li><a href="#">Link8</a></li>
                </ul>
                <center><img src="https://files.catbox.moe/11ntvi.gif" style="position: absolute; bottom: 0;"></center>
                <!-- this much! --> 
            </div>
            <div class="marquee-box">
                <center>Uhh.. whatever you want!</center>
            </div>
            <!-- Credit below. Removing is forbidden! Please, let's keep the web friendly. (╯▽╰ ) -->    
            <center><a href="https://swirl.neocities.org/" style="color:#5e5e5e;position:Relative;top:15px;">Template by swirl</a> <a href="https://swirl.neocities.org/template/luckytheme-CODE" style="color:#5e5e5e;position:Relative;top:15px;">Code Here</a></center>
        </div>`;

const luckyThemeCss = `
#TEMPLATE-LAYOUT {
    /* The CSS in the Theme Editor is injected into the main page, */
    /* so we override the body styles by targeting a parent container if needed */
    /* or just apply them to the #TEMPLATE-LAYOUT itself */
    background-image:url('https://files.catbox.moe/evn2nd.gif');
    font-family:Ms Ui Gothic;
    color:#5e5e5e;
    font-size:1em;
    line-height:19px;
    width:100%; /* Changed to be responsive within the container */
    max-width:740px;
    height:auto;
    padding:5px;
    margin-left:auto;
    margin-right:auto;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    align-items: stretch;
    margin: auto;
    justify-content: center;  
}
#TEMPLATE-LAYOUT header {
    width:70%;
    height:150px;
    background: rgb(255,189,200);
    background: linear-gradient(84deg, rgba(255,189,200,1) 0%, rgba(246,255,175,1) 12%, rgba(205,255,167,1) 25%, rgba(195,241,255,1) 50%, rgba(241,202,245,1) 69%, rgba(252,206,242,1) 91%); /* This is the rainbow BG. feel free to change into anything! */
    border-width:2px;
    border-style:ridge;
    border-color:pink;
    overflow:hidden;
}
#TEMPLATE-LAYOUT .shadow{
    text-shadow: rgb(255, 255, 255) 4px 0px 0px, rgb(255, 255, 255) 3.87565px 0.989616px 0px, rgb(255, 255, 255) 3.51033px 1.9177px 0px, rgb(255, 255, 255) 2.92676px 2.72656px 0px, rgb(255, 255, 255) 2.16121px 3.36588px 0px, rgb(255, 255, 255) 1.26129px 3.79594px 0px, rgb(255, 255, 255) 0.282949px 3.98998px 0px, rgb(255, 255, 255) -0.712984px 3.93594px 0px, rgb(255, 255, 255) -1.66459px 3.63719px 0px, rgb(255, 255, 255) -2.51269px 3.11229px 0px, rgb(255, 255, 255) -3.20457px 2.39389px 0px, rgb(255, 255, 255) -3.69721px 1.52664px 0px, rgb(255, 255, 255) -3.95997px 0.56448px 0px, rgb(255, 255, 255) -3.97652px -0.432781px 0px, rgb(255, 255, 255) -3.74583px -1.40313px 0px, rgb(255, 255, 255) -3.28224px -2.28625px 0px, rgb(255, 255, 255) -2.61457px -3.02721px 0px, rgb(255, 255, 255) -1.78435px -3.57996px 0px, rgb(255, 255, 255) -0.843183px -3.91012px 0px, rgb(255, 255, 255) 0.150409px -3.99717px 0px, rgb(255, 255, 255) 1.13465px -3.8357px 0px, rgb(255, 255, 255) 2.04834px -3.43574px 0px, rgb(255, 255, 255) 2.83468px -2.82216px 0px, rgb(255, 255, 255) 3.44477px -2.03312px 0px, rgb(255, 255, 255) 3.84068px -1.11766px 0px, rgb(255, 255, 255) 3.9978px -0.132717px 0px;
}
#TEMPLATE-LAYOUT .BOARD {
    width:29.3%;
    height:154px;
    background-image:url('https://files.catbox.moe/7nspmi.gif');
    border-width:2px;
    border-style:ridge;
    border-color:pink;
    padding:5px;
    box-sizing:border-box;
    border-right:0px;
}
#TEMPLATE-LAYOUT .BOARD p {
    margin:0px;
    padding:0px;
}
#TEMPLATE-LAYOUT .marquee-box {
    width:100%;
    height:18px;
    padding:3px;
    border-width:2px;
    border-style:ridge;
    border-color:pink;
    margin-top:5px;
    background:white;
}
#TEMPLATE-LAYOUT .navigation {
    width:22%;
    min-height:430px;
    border-width:2px;
    border-style:ridge;
    border-color:pink;
    margin-top:5px;
    margin-left:5px;
    background:white;
    overflow:hidden;
    position: relative  
}
#TEMPLATE-LAYOUT .button {
    width:100%;
    background: rgb(255,189,200);
    background: linear-gradient(84deg, rgba(255,189,200,1) 0%, rgba(246,255,175,1) 12%, rgba(205,255,167,1) 25%, rgba(195,241,255,1) 50%, rgba(241,202,245,1) 69%, rgba(252,206,242,1) 91%);
    height:auto;
    font-size:20px;
    padding:5px;
    text-align:center;
    border-bottom:3px ridge pink;
    font-weight:600;
}
#TEMPLATE-LAYOUT ul {
    list-style-type:none;
    padding:3.5px;
    margin:0px;
}
#TEMPLATE-LAYOUT .content {
    width:100%;
    height:240px;
    border-width:2px;
    border-style:ridge;
    border-color:pink; 
    margin-top:5px;
    background-image:url('https://files.catbox.moe/u3fdd5.gif');
    padding:10px;
    box-sizing:border-box;
}
#TEMPLATE-LAYOUT .container {
    width:100%;
    height:100%;
    border-width:2px;
    border-style:ridge;
    border-color:pink; 
    background:white;
    padding:5px;
    box-sizing:border-box;
    overflow-y:auto;
}
#TEMPLATE-LAYOUT .container p {
    margin:0px;
    padding:0px;
    margin-top:5px;
}
#TEMPLATE-LAYOUT .the-section {
    width:76.6%;
    height:430px;  
    display: flex;
    flex-wrap: wrap;
}
#TEMPLATE-LAYOUT .box-left {
    width:49.4%;
    padding:5px;
    box-sizing:border-box;  
    border-style:ridge;
    border-color:pink; 
    background:white;
    margin-top:5px;
    min-height:185px;
    background-image:url('https://files.catbox.moe/zmmapw.gif');
    padding:10px;  
}
#TEMPLATE-LAYOUT .box-right {
    width:49.4%;
    padding:5px;
    box-sizing:border-box;  
    border-style:ridge;
    border-color:pink; 
    background:white;
    margin-top:5px;
    min-height:185px;
    margin-left:5px;
    background-image:url('https://files.catbox.moe/nd8imm.gif');
    padding:10px;  
}
#TEMPLATE-LAYOUT .box-left .button {
    margin:-5px;
}
#TEMPLATE-LAYOUT .box-right .button {
    margin:-5px;
}
/* Ensure links are clickable */
#TEMPLATE-LAYOUT a {
    color: #0059B3;
}
#TEMPLATE-LAYOUT a:hover {
    text-decoration: underline;
}
`;


const CustomThemeEditor: React.FC<ThemeEditorProps> = ({ onApplyTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [html, setHtml] = useState(luckyThemeHtml);
    const [css, setCss] = useState(luckyThemeCss);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onApplyTheme(html, css);
        alert('Custom theme applied!');
    };

    const toggleEditor = () => setIsOpen(!isOpen);

    return (
        <div className="border-2 border-[#6699CC]">
            <header 
                className="bg-[#6699CC] text-white font-bold p-1.5 flex justify-between items-center text-sm cursor-pointer"
                onClick={toggleEditor}
                aria-expanded={isOpen}
                aria-controls="theme-editor-content"
            >
                <h2>🎨 Custom Theme Engine</h2>
                <span className="text-sm select-none">{isOpen ? '▼' : '►'}</span>
            </header>
            {isOpen && (
                <div id="theme-editor-content" className="p-2.5 bg-white">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="custom-html" className="block font-bold text-gray-700 mb-1.5">HTML Layout</label>
                            <textarea
                                id="custom-html"
                                value={html}
                                onChange={(e) => setHtml(e.target.value)}
                                className="w-full h-48 p-1.5 border border-black bg-white font-mono text-xs"
                                placeholder="Paste your custom HTML here. This will override the 'Blurbs' section."
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="custom-css" className="block font-bold text-gray-700 mb-1.5">CSS Styles</label>
                            <textarea
                                id="custom-css"
                                value={css}
                                onChange={(e) => setCss(e.target.value)}
                                className="w-full h-48 p-1.5 border border-black bg-white font-mono text-xs"
                                placeholder="Paste your custom CSS here. Example: body { background-color: #000; }"
                            />
                        </div>
                        <button
                            type="submit"
                            className="font-bold text-white bg-[#5cb85c] border-2 border-outset border-[#4cae4c] px-4 py-1 cursor-pointer hover:bg-[#449d44]"
                        >
                            Apply Custom Theme
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default CustomThemeEditor;
