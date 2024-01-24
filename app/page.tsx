/** Add your relevant code here for the issue to reproduce */
import dynamic from 'next/dynamic'
import OtherClientComponent from './OtherClientComponent'

const ConditionalComponent = dynamic(() => import('./ClientComponent'))

export default function Home() {
    return <>
        <OtherClientComponent/>
    </>
}
