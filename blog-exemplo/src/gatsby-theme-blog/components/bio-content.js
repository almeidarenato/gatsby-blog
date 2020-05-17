import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Olá Meu nome é{" "}
    <Styled.a href="https://github.com/almeidamrq">Renato Almeida</Styled.a>.{" "}
    {` `}
    Seja bem-vindo.
  </Fragment>
)
