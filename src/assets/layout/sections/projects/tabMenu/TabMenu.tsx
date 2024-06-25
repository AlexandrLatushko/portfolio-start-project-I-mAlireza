import styled from "styled-components";

type Props = {
    
};
export const TabMenu = (props: Props) => {
    return (
        <TabMetuList>
            <li>
                <button>Story</button>
            </li>
            <li>
                <button>Post</button>
            </li>
            <li>
                <button>Banner</button>
            </li>
            <li>
                <button>Trailer</button>
            </li>
            <li>
                <button>Desighn</button>
            </li>
            <li>
                <button>More</button>
            </li>
        </TabMetuList>
    );
};

const TabMetuList = styled.ul`
    display: flex;
    justify-content: space-around;
`