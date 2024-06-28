import styled from "styled-components";
import { SvgEdit } from "../../../../images/svg/SvgEdit";
import { SvgTabl } from "../../../../images/svg/SvgTabl";
import { SvgVideo } from "../../../../images/svg/SvgVideo";

type Props = {
    
};
export const Servic = (props: Props) => {
    return (
        <div>
            <ListServic>
                <li>
                    <SvgVideo/>
                    <p>Video Edit
                    Service</p>
                    <button>View More</button>
                </li>
                <li>
                    <SvgEdit/>
                    <p>Ui/Ux
                    Designer</p>
                    <button>View More</button>
                </li>
                <li>
                    <SvgTabl/>
                    <p>Website
                    Developer</p>
                    <button>View More</button>
                </li>
            </ListServic>
        </div>
    );
};

const ListServic = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
`