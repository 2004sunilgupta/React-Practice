import { FC, useState } from "react";
import MemoryComponentA from "./MemoryComponentA/MemoryComponentA";
import MemoryComponentB from "./MemoryComponentB/MemoryComponentA";
import sx from "./style";

const MemoryLeak: FC  = (): JSX.Element => {
    const [active,setActive] = useState('CmpA');

    return(
        <>
        <div>
            <h1>Memory Leak Test</h1>
            <div style={sx.flexBox}>
                <button type="button" onClick={()=> setActive('CmpA')}>Component A</button>
                <button type="button" onClick={()=> setActive('CmpB')}>Component B</button>
            </div>
            {active === 'CmpA' && <MemoryComponentA/>}
            {active === 'CmpB' && <MemoryComponentB/>}
        </div>
        </>
    )
}

export default MemoryLeak;