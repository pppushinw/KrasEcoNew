import React from "react";
import styled from "styled-components";
import Title, { TitleSize } from "../../ui/title/title";

const ServiceGroup = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

const ServiceGroupElement = styled.li`
  list-style: none;
  flex-basis: 30%;
  border: 1px solid red;
  margin: 0 31px 20px 0;
`

export default function Service() {
  return (
    <>
      <Title size={TitleSize.BIG}>Услуги по дезинфекции</Title>
      <ServiceGroup>
        <ServiceGroupElement>
          <Title size={TitleSize.EXSMALL}>Уничтожение тараканов</Title>
        </ServiceGroupElement>
        <ServiceGroupElement>
          <Title size={TitleSize.EXSMALL}>Уничтожение клопов</Title>
        </ServiceGroupElement>
        <ServiceGroupElement>
          <Title size={TitleSize.EXSMALL}>Уничтожение термитов</Title>
        </ServiceGroupElement>
        <ServiceGroupElement>
          <Title size={TitleSize.EXSMALL}>Уничтожение муравьев</Title>
        </ServiceGroupElement>
        <ServiceGroupElement>
          <Title size={TitleSize.EXSMALL}>Уничтожение комаров</Title>
        </ServiceGroupElement>
        <ServiceGroupElement>
          <Title size={TitleSize.EXSMALL}>Уничтожение мух</Title>
        </ServiceGroupElement>
        <ServiceGroupElement>
          <Title size={TitleSize.EXSMALL}>Уничтожение мышей</Title>
        </ServiceGroupElement>
        <ServiceGroupElement>
          <Title size={TitleSize.EXSMALL}>Уничтожение крыс</Title>
        </ServiceGroupElement>
      </ServiceGroup>
    </>
  )
}