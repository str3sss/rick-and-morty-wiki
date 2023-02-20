'use client'

import React, { useState } from 'react'
import { useSwipeable} from 'react-swipeable'

type Props = {
  children: JSX.Element
  status: boolean
}

function SwipeMenu({children , status = false} : Props) {
  const [active, setActive]  = useState<boolean>(status)
  const swipe = useSwipeable({
    onSwipedLeft: () => setActive(true),
    onSwipedRight: () => setActive(false)
  })
  console.log(active)
  return (
    <div {...swipe}>{children}</div>
  )
}

export default SwipeMenu