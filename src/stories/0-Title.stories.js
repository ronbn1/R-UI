import React from "react";
import Title from "../components/Title/Title.tsx";
import styled from "styled-components";
export default {
   title: "Title",
   component: Title,
};

export const TextButton = () => {
   return (
      <Container>
         <div>
            <Title text="Hello World" />
            <Title text="Hello World" color="secondary" />
            <Title text="Hello World" color="success" />
            <Title text="Hello World" color="dark" />
            <Title text="Hello World" color="light" />
         </div>
         <div>
            <Title text="Hello World" color="secondary" underline="secondary" />
            <Title text="Hello World" color="secondary" underline="success" />
            <Title text="Hello World" color="secondary" underline="primary" />
            <Title text="Hello World" color="secondary" underline="dark" />
            <Title text="Hello World" color="secondary" underline="light" />
         </div>
         <div>
            <Title text="Hello World" color="secondary" square="secondary" />
            <Title text="Hello World" color="secondary" square="success" />
            <Title text="Hello World" color="secondary" square="primary" />
            <Title text="Hello World" color="secondary" square="dark" />
            <Title text="Hello World" color="secondary" square="light" />
         </div>
      </Container>
   );
};

const Container = styled.div`
   div {
      display: flex;
   }
`;
