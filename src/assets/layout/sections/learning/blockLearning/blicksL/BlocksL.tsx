import styled from "styled-components";

type Props = {
    
};
export const BlocksL = (props: Props) => {
    return (
        <StyledBlocksL>
            <li>
                <div>
                </div>
            </li>
            <li>
                <div>
                </div>
            </li>
            <li>
                <div>
                </div>
            </li>
            <li>
                <div>
                </div>
            </li>
        </StyledBlocksL>
    );
};

const StyledBlocksL = styled.ul`

    display: flex;
    gap: 20px;
    list-style: none; /* Убираем маркеры списка */
    padding: 0;       /* Убираем внутренние отступы */
    margin: 0;
    overflow: hidden;        /* Убираем внешние отступы */

    div {
        width: 330px;
        max-width: 100%;
        height: 190px;
        background: #D9D9D9;
        border-radius:10px;
    }
`;
