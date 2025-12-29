import React from 'react'

import styles from './footer.module.css'

export const Footer = () => (
  <div className={styles.footerWrapper}>
    <div className="bg-gray-800 text-white h-full">
      <div className="container mx-auto flex justify-center items-center h-full px-4">
        <div className="text-white/30">All rights reserved 2023</div>
      </div>
    </div>
  </div>
)
