import React from 'react'

import LoadingTitle from './Loading.style'

function Loading() {
  const [animation, setAnimation] = React.useState('Preparing your drink')

  setTimeout(() => {
    setAnimation(prev => {
      if (prev === '...') {
        prev = 'Preparing your drink'
      } else {
        prev = prev + '.'
      }
    })
  }, 200)

  return <LoadingTitle>{animation}</LoadingTitle>
}

export default Loading
