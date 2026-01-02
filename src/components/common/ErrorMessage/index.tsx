import React from 'react'

export const ErrorMessage = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 pointer-events-none">
      <p className="font-starjedi text-black text-[30px] text-center px-4">
        ooops, something goes wrong... <br />
        try to restart page
      </p>
    </div>
  )
}
