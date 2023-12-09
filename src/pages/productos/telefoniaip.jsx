import React from 'react'

import {motion} from "framer-motion"

export default function Telefoniaip() {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae aliquam quia, impedit incidunt id reiciendis dolore ullam quam illum, totam magni nobis hic, laboriosam consequuntur necessitatibus in nisi officia?</p>

            <h1>
                telefoniaip
            </h1>
        </motion.div>
    )
}
