/** Add your relevant code here for the issue to reproduce */
import dynamic from 'next/dynamic'
import OtherClientComponent from './OtherClientComponent'

const ConditionalComponent = dynamic(() => import('./DynamicClientComponent'))

export default function Home() {
    return <>
        <OtherClientComponent/>
    </>
}
