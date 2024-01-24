/** Add your relevant code here for the issue to reproduce */
import dynamic from 'next/dynamic'
import OtherClientComponent from '../OtherClientComponent'
import { Suspense } from 'react'

const ConditionalComponent = dynamic(() => import('../DynamicClientComponent'))

const shouldRender = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    return true
}

const ComponentWithCondition = async () => {
    const shouldRenderComponent = await shouldRender()
    if (shouldRenderComponent) {
        return <ConditionalComponent/>
    }
    return null
}

export default function Home() {
    return <>
        <Suspense fallback={'Loading...'}><ComponentWithCondition/></Suspense>
        <OtherClientComponent/>
    </>
}
