import { FC } from "react";
import sx from '../style';

const MemoryComponentA: FC = (): JSX.Element => {
    return (
        <div style={sx.cardBox}>
            <div style={sx.cardBody}>
                <h2>Component A</h2>
            </div>
        </div>
    )
}

export default MemoryComponentA;