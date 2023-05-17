import { motion, AnimatePresence } from 'framer-motion'; 
import { useSnapshot } from 'valtio'; 
import React, { useEffect } from 'react'; 
 
 
import state from '../store'; 
import { CustomButton } from '../components'; 
import { 
  headContainerAnimation, 
  headContentAnimation, 
  headTextAnimation, 
  slideAnimation 
} from '../config/motion'; 
 
const Home = () => { 
  const snap = useSnapshot(state); 
 
  useEffect(() => { 
    const timer = setTimeout(() => { 
      state.intro = false; 
    }, 1); 
 
    return () => clearTimeout(timer); 
  }, []); 
 
  return ( 
    <AnimatePresence> 
      {snap.intro && ( 
        <motion.section className="home" {...slideAnimation('left')}> 
          
 
          <motion.div className="home-content" {...headContainerAnimation}> 
            
            <motion.div 
              {...headContentAnimation} 
              className="flex flex-col gap-5" 
            > 
              
 
              <button handleClick={() => state.intro = false} >.</button>
            </motion.div> 
          </motion.div> 
        </motion.section> 
      )} 
    </AnimatePresence> 
  ); 
}; 
 
export default Home;
