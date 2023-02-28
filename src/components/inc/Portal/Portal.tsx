import { ReactElement, ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
    children: ReactNode
}

const Portal = ({ children }: PortalProps): ReactElement => {
    const ref = useRef<Element | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>('#portal')
        setMounted(true)
    }, [])

    return <>{mounted && ref.current ? createPortal(<div>{children}</div>, ref.current) : null}</>
}

export default Portal
