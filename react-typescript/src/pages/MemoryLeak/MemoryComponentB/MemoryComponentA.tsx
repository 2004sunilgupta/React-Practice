import { FC } from "react";
import sx from '../style';

const MemoryComponentB: FC = (): JSX.Element => {
    return (
        <div style={sx.cardBox}>
            <div style={sx.cardBody}>
                <h2>Component B</h2>
            </div>
        </div>
    )
}

export default MemoryComponentB;