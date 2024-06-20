import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import PhopoMain from "./../../../images/PhotoMain.jpg"
import { SvgAi } from "../../../images/svg/SvgAi";
import { SvgFigma } from "../../../images/svg/SvgFigma";
import { SvgPh } from "../../../images/svg/SvgPh";
import { SvgAe } from "../../../images/svg/SvgAe";

type Props = {
    
};

export const Main = (props: Props) => {
    return (
        <StyledMain>
            <div>
                <img src={PhopoMain} alt="PhotoMain"/>
                <div>
                    <h1>I’m Alireza Kavousy nezjad</h1>
                    <p>Draft is a revolutionary mobile app built to help you manage your business easily and save your money.</p>
                    <button>
                        See Projects <Icon iconId=""/> 
                    </button>
                    <span>Download Resume</span>
                </div>
            </div>
            <div>
                <Scill>
                    <li>
                        <SvgPh/>
                        <div>
                            <h3>Photoshop</h3>
                        </div>
                    </li>
                    <li>
                        <SvgAe/>
                        <div>
                            <h3>After Effects</h3>
                        </div>
                    </li>
                    <li>
                        <SvgAi/>
                        <div>
                            <h3>Illustrator</h3>
                        </div>
                    </li>
                    <li>
                        <SvgFigma/>
                        <div>
                            <h3>Figma</h3>
                        </div>
                    </li>
                    
                </Scill>
            </div>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    background-color: #67d4c662;
    height: 100vh;
`

const Scill = styled.ul`
    display: flex;
    justify-content: end;
    align-items: center;
`
