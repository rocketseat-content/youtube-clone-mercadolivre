import React from "react";

import tshirtImage from "../../assets/tshirt.png";
import ProductAction from "../ProductAction";
import SellerInfo from "../SellerInfo";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra Garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et dolor
      bibendum diam ullamcorper bibendum vitae a ex. Ut in ipsum lacus. Nullam
      dictum nisi sem, sed sagittis arcu ultricies ut. Mauris sodales nisl
      velit. Mauris quis velit at urna bibendum viverra. Pellentesque sodales
      laoreet nunc, et blandit libero lobortis eget. Pellentesque pellentesque
      sed mauris dictum porttitor.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Etiam semper a dui ac lacinia. Curabitur at nisi ut urna aliquet
      venenatis. Nullam eget leo nec lectus euismod finibus vel in enim. Vivamus
      sollicitudin nisi est, cursus rhoncus orci finibus in. Cras volutpat
      sodales neque. Vestibulum ante ipsum primis in faucibus orci luctus et
      ultrices posuere cubilia curae; Donec imperdiet lorem a efficitur viverra.
      Donec consectetur orci id ex sollicitudin vulputate. Nulla eget sapien
      tortor. Aenean iaculis pellentesque felis, facilisis molestie risus mollis
      non. Proin tempus, nunc non pulvinar tristique, ligula risus porta odio,
      non pulvinar elit nisi vitae velit. Morbi vulputate dolor eu tortor
      iaculis ultricies. Aliquam accumsan aliquam cursus. Curabitur id egestas
      dolor. Ut sed nulla vestibulum, condimentum lacus a, semper augue.
      Vestibulum sagittis dui ut lorem scelerisque rhoncus. In id facilisis leo.
      Sed porttitor faucibus fringilla. Aenean eget mi vitae est convallis
      pretium eget sed quam. Phasellus purus magna, consequat id laoreet in,
      blandit quis eros. Integer fringilla justo nisi, vitae vulputate erat
      finibus et. Duis lacinia ultrices purus. Curabitur ipsum purus, lacinia ut
      nisl nec, rutrum tristique ipsum. Duis luctus est sem, a laoreet quam
      scelerisque eget. Phasellus justo ex, pellentesque et dignissim nec,
      malesuada at justo. Cras porta vel lacus in ultricies. Curabitur id tempus
      tellus. Pellentesque hendrerit massa sit amet vulputate varius.
    </p>
  </Description>
);

export default Product;
