import { BlocksL } from "./blicksL/BlocksL";
import { TitleBlockLearning } from "./titleBlockl/TitleBlockLearning";

type Props = {
    
};
export const BlockLearning = (props: Props) => {
    return (
        <div>
            <TitleBlockLearning name="After Effects & Photoshop"/>
            <BlocksL/>
            <TitleBlockLearning name="Website , Html & cSS"/>
            <BlocksL/>

        </div>
    );
};