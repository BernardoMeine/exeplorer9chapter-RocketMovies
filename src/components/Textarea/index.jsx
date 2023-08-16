/* eslint-disable react/prop-types */
import { Container } from "./style";

export function Textarea({ value, ...rest }) {
  return (
    <Container {...rest}>
      {value}
    </Container>
  )
}