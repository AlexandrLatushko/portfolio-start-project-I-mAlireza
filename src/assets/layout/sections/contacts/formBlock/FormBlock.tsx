// @flow 
import * as React from 'react';
import styled from 'styled-components';
type Props = {
    
};
export const FormBlock = (props: Props) => {
    return (
        <div>
            <StyledFormBlock>
                <h3>Get in touch</h3>
                <InputRow>
                    <Input placeholder="E-mail" type="email" />
                    <Input placeholder="Phone" type="phone" />
                </InputRow>
                <Textarea placeholder="Message" />
                <Button>Send</Button>
            </StyledFormBlock>
        </div>
    );
};

const StyledFormBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px; /* Расстояние между элементами */
    width: 30%;
`;

const InputRow = styled.div`
    display: flex;
    gap: 10px; /* Расстояние между input */
`;

const Input = styled.input`
  flex: 1; /* Заставляет input занимать равное пространство */
`;

const Textarea = styled.textarea`
  width: 100%; /* Заставляет textarea занимать всю ширину контейнера */
`;

const Button = styled.button`
  align-self: flex-start; /* Выравнивает кнопку по левому краю */
`;