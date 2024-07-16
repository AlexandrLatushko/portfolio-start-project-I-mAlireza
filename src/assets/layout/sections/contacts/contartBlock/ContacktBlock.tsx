// @flow 
import * as React from 'react';
import { LocationSvg } from '../../../../images/svg/LocationSvg';
import { TelSvg } from '../../../../images/svg/TelSvg';
import { EmailSvg } from '../../../../images/svg/EmailSvg';
import styled from 'styled-components';

type ContactItemProps  = {
    Icon: React.ComponentType;
    label: string;
    value: string;
}


const ContactItem = ({Icon, label,value} : ContactItemProps) => (
    <ListItem>
        <Icon />
        <TextContainer>
            <Span>{label}</Span>
            <Span>{value}</Span>
        </TextContainer>
    </ListItem>
);

export const ContactBlock = () => {
    return (
        <Container>
            <List>
                <ContactItem Icon={LocationSvg} label="Location" value="Mashhad/Iran" />
                <ContactItem Icon={TelSvg} label="Phone" value="+989150063913" />
                <ContactItem Icon={EmailSvg} label="Email" value="arkn3913@gmail.com" />
            </List>
        </Container>
    );
};

const Container = styled.div`
  padding: 20px; /* Добавьте отступы, если необходимо */
`;

const List = styled.ul`
  list-style: none; /* Убираем точки в списке */
  padding: 0; /* Убираем отступы */
  margin: 0; /* Убираем отступы */
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start; /* Выравниваем элементы по верхнему краю */
  gap: 10px; /* Расстояние между SVG и текстом */
  margin-bottom: 10px; /* Расстояние между элементами списка */
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column; /* Размещаем спаны в колонке */
  gap: 5px; /* Расстояние между спанами */
`;

const Span = styled.span`
  display: block; /* Размещаем каждый спан на новой строке */
`;
