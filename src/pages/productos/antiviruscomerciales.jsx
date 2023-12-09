import React from 'react'

import {motion} from "framer-motion"

export default function Antiviruscomerciales() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ paddingTop: "100px" }}>
        <h1>   antiviruscomerciales</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, ex voluptatem iusto fugiat possimus eos dolorem? Perferendis natus voluptatum a exercitationem. Quasi, cupiditate. Dolorem quod iusto qui nemo ab ipsam!</p>
      </div>
    </motion.div>
  )
}
