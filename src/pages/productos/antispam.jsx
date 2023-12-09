import React from 'react'

import {motion} from "framer-motion"

export default function Antispam() {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione corrupti itaque, maxime dicta nihil vitae dignissimos nisi dolore reprehenderit. Ea minus error cum adipisci quia dolores ducimus tempore. Inventore, corrupti?</p>

            <h1>
                antispam
            </h1>

        </motion.div>
    )
}
