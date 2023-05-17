import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import id from '../assets/idea.svg'
import maker from '../assets/photomaker.svg'
import share from '../assets/ph.svg'
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';
import rock from '../assets/rocket.svg'


const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState('');

  const [prompt, setPrompt] = useState('');
  const [generatingImg, setGeneratingImg] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  })
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const openPopup = () => {
    setIsPopupOpen(true);
    setIsButtonVisible(false);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsButtonVisible(true);
  };

  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />
      case "filepicker":
        return <FilePicker
          file={file}
          setFile={setFile}
          readFile={readFile}
        />
      case "aipicker":
        return <AIPicker 
          prompt={prompt}
          setPrompt={setPrompt}
          generatingImg={generatingImg}
          handleSubmit={handleSubmit}
        />
      default:
        return null;
    }
  }

  const handleSubmit = async (type) => {
    if(!prompt) return alert("Please enter a prompt");

    try {
      setGeneratingImg(true);

      const response = await fetch('https://pray.onrender.com/api/v1/dalle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt,
        })
      })

      const data = await response.json();

      handleDecals(type, `data:image/png;base64,${data.photo}`)
    } catch (error) {
      alert(error)
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  }

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if(!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
          state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
          state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // after setting the state, activeFilterTab is updated

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })
  }

  const readFile = (type) => {
    reader(file)
      .then((result) => {
        handleDecals(type, result);
        setActiveEditorTab("");
      })
  }

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation('left')}
          >
             
            <div className="flex items-center min-h-screen">
              
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab 
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}
               

                {generateTabContent()}
              </div>
              
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            
            <div className='flex flex-col'>
            <a href="https://ai-am.vercel.app/"> <button className='px-2 py-1.5 flex-1 ml-9 rounded-md text-white font-bold bg-[#056f27]'>Go back</button></a> 
            
{isButtonVisible && (
  
      <img onClick={openPopup}
      className='w-[33px] ml-[60px] mt-2'
      src={id} />
      )}

      {isPopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-500 bg-opacity-75">
          <div className="bg-white w-[200px] h-[200px] rounded ">
            <div className="flex items-center justify-around m-2  ">
           
              <a href="https://everpray-timadev00.vercel.app/">
                <img
                  className="m-2 left-0"
                  src={maker}
                  alt="make"
                />
                
              </a>
              <a href=" https://trendshare.netlify.app/">
                <img src={share} alt="share" />
              </a>
        
            </div>
           
            <button
              onClick={closePopup}
              className="  ml-[70px] font-bold py-2 px-4 rounded mt-4  text-red-600 text-[30px]"
            >
              ✖
            </button>
          </div>
        </div>
      )}   
            </div>
          
     

          </motion.div>

          <motion.div
            className='filtertabs-container'
            {...slideAnimation("up")}
          >
          
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
              
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer