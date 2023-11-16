import React from 'react'
import {styles} from "@/utils/styles"

type Props = {}

const UploadPrompt = (props: Props) => {
  return (
    <div>
        <h1 className={`${styles.heading} text-center py-5`}>
            Upload Your Prompt
        </h1>
    </div>
  )
}

export default UploadPrompt