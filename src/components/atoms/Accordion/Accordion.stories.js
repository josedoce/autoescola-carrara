import React from "react";
import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
    title: "Components/Atoms/Accordion",
    component: Accordion
}

export const usage = () => (
    <>
    <Accordion title="Como eu renovo minha CNH?">
         Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.
    </Accordion>
    <Accordion title="Como faço a mudança de categória?">
         Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
         Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.
    </Accordion>
    </>
)

export const withGroup = () => (
     <AccordionGroup>
          <Accordion title="Como eu renovo minha CNH?">
               Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.
          </Accordion>
          <Accordion title="Como faço a mudança de categória?">
               Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.
          </Accordion>
          <Accordion title="Fui multado, e agora?">
               Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amed, consectetur adipiscing elit, sed do eiusmod tempor.
          </Accordion>
     </AccordionGroup>
)