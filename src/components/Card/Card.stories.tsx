import React, { useState } from "react";
import Card from "./Card";
import { jsxDecorator } from "storybook-addon-jsx";
import onlineTheme from "../../themes/online";
import { Sizes, Colors } from "../../enums";
import { iconType } from "../../types/types";

export default {
   title: "Cards",
   component: Card,
   decorators: [jsxDecorator],
};

export const CardComponent = () => {
   return (
      <div
         style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
         }}
      >
         <Card width={Sizes.SMALL} style={{ margin: "1rem" }}>
            <Card.Body>
               <Card.Title size="m" style={{ textAlign: "center" }}>
                  Card Title
               </Card.Title>
               <Card.Subtitle
                  style={{ textAlign: "center" }}
                  size="s"
                  color="dark"
               >
                  Card Subtitle
               </Card.Subtitle>
            </Card.Body>
         </Card>

         <Card width={Sizes.XS} style={{ margin: "1rem" }}>
            <Card.Body>
               <Card.TopIcon icon="increase" color={Colors.SUCCESS} />
               <Card.Title color="dark" size="m">
                  $1,553
               </Card.Title>
               <Card.Subtitle style={{ fontSize: "0.8rem" }}>
                  Average Daily Cost
               </Card.Subtitle>
            </Card.Body>
         </Card>

         <Card width={Sizes.XS} style={{ margin: "1rem" }}>
            <Card.Body>
               <Card.TopIcon icon="decrease" color={Colors.PRIMARY} />
               <Card.Title color="dark" size="m">
                  $1,553
               </Card.Title>
               <Card.Subtitle style={{ fontSize: "0.8rem" }}>
                  {" "}
                  Average Daily Cost
               </Card.Subtitle>
            </Card.Body>
         </Card>

         <Card width={Sizes.SMALL} style={{ margin: "1rem" }}>
            <Card.Body>
               <Card.Title size="m">Card Title</Card.Title>
               <Card.Subtitle size="s" color="secondary">
                  Card Subtitle
               </Card.Subtitle>
               <Card.Text style={{ textAlign: "center", padding: "1rem" }}>
                  one can create a single module concentrating various exports
                  from various modules using
               </Card.Text>
               <Card.LinksContainer>
                  <Card.Link color="secondary">Card Link</Card.Link>
                  <Card.Link color="secondary">Another Link</Card.Link>
               </Card.LinksContainer>
            </Card.Body>
         </Card>

         <Card width={Sizes.LARGE} style={{ margin: "1rem" }}>
            <Card.Body>
               <Card.Title size="m" style={{ textAlign: "center" }}>
                  Card Title
               </Card.Title>
               <Card.Subtitle
                  style={{ textAlign: "center" }}
                  size="s"
                  color="dark"
               >
                  Card Subtitle
               </Card.Subtitle>
               <Card.Text style={{ padding: "1rem", textAlign: "center" }}>
                  one can create a single module concentrating various exports
                  from various modules using
               </Card.Text>
               <Card.LinksContainer style={{ flexWrap: "wrap" }}>
                  <Card width={Sizes.XS} style={{ margin: "0.5rem" }}>
                     <Card.Body>
                        <Card.TopIcon icon="increase" color={Colors.SUCCESS} />
                        <Card.Title
                           style={{ textAlign: "center" }}
                           color="dark"
                           size="m"
                        >
                           $1,553
                        </Card.Title>
                        <Card.Subtitle
                           style={{ fontSize: "0.8rem", textAlign: "center" }}
                        >
                           Average Daily Cost
                        </Card.Subtitle>
                     </Card.Body>
                  </Card>
                  <Card width={Sizes.XS} style={{ margin: "0.5rem" }}>
                     <Card.Body>
                        <Card.TopIcon icon="increase" color={Colors.SUCCESS} />
                        <Card.Title
                           style={{ textAlign: "center" }}
                           color="dark"
                           size="m"
                        >
                           $1,553
                        </Card.Title>
                        <Card.Subtitle
                           style={{ fontSize: "0.8rem", textAlign: "center" }}
                        >
                           Average Daily Cost
                        </Card.Subtitle>
                     </Card.Body>
                  </Card>
               </Card.LinksContainer>
               <Card.LinksContainer style={{ padding: "1rem" }}>
                  <Card.Link color="secondary">Card Link</Card.Link>
                  <Card.Link color="secondary">Another Link</Card.Link>
               </Card.LinksContainer>
            </Card.Body>
         </Card>

         <Card width={Sizes.LARGE} style={{ margin: "1rem" }}>
            <Card.Body>
               <Card.TopIcon icon="increase" color={Colors.SUCCESS} />
               <Card.Title size="m">Card Title</Card.Title>
               <Card.Subtitle size="s" color="dark">
                  Card Subtitle
               </Card.Subtitle>
               <Card.Text style={{ padding: "1rem", textAlign: "center" }}>
                  one can create a single module concentrating various exports
                  from various modules using
               </Card.Text>
               <Card.LinksContainer style={{ flexWrap: "wrap" }}>
                  <Card width={Sizes.XS} style={{ margin: "0.5rem" }}>
                     <Card.Body>
                        <Card.TopIcon icon="increase" color={Colors.SUCCESS} />
                        <Card.Title color="dark" size="m">
                           $1,553
                        </Card.Title>
                        <Card.Subtitle style={{ fontSize: "0.8rem" }}>
                           Average Daily Cost
                        </Card.Subtitle>
                     </Card.Body>
                  </Card>
                  <Card width={Sizes.XS} style={{ margin: "0.5rem" }}>
                     <Card.Body>
                        <Card.TopIcon icon="increase" color={Colors.SUCCESS} />
                        <Card.Title color="dark" size="m">
                           $1,553
                        </Card.Title>
                        <Card.Subtitle style={{ fontSize: "0.8rem" }}>
                           Average Daily Cost
                        </Card.Subtitle>
                     </Card.Body>
                  </Card>
                  <Card width={Sizes.XS} style={{ margin: "0.5rem" }}>
                     <Card.Body>
                        <Card.TopIcon icon="increase" color={Colors.SUCCESS} />
                        <Card.Title color="dark" size="m">
                           $1,553
                        </Card.Title>
                        <Card.Subtitle style={{ fontSize: "0.8rem" }}>
                           Average Daily Cost
                        </Card.Subtitle>
                     </Card.Body>
                  </Card>
                  <Card width={Sizes.XS} style={{ margin: "0.5rem" }}>
                     <Card.Body>
                        <Card.TopIcon icon="increase" color={Colors.SUCCESS} />
                        <Card.Title color="dark" size="m">
                           $1,553
                        </Card.Title>
                        <Card.Subtitle style={{ fontSize: "0.8rem" }}>
                           Average Daily Cost
                        </Card.Subtitle>
                     </Card.Body>
                  </Card>
               </Card.LinksContainer>
            </Card.Body>
         </Card>
      </div>
   );
};
