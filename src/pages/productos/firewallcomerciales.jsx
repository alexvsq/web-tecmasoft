import React from 'react'

import {motion} from "framer-motion"

import ScrollToTop from '../../components/ScrollToTop';

export default function Firewallcomerciales() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <ScrollToTop />
        

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod eveniet excepturi impedit dolor distinctio quis molestias vero ducimus voluptate corporis, perspiciatis quas ullam neque soluta perferendis veniam animi enim.</p>
   
   <h1>firewallcomerciales</h1>
    </motion.div>
  )
}
