import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";

import CartItem from "./CartItem";

const Cart = () => {
  const itemArray = useSelector(getStoreItemArray);

  return (
    <Wrapper>
      <ItemWrapper>
        <h2>Your Cart</h2>
        <p>
          {itemArray.length} {itemArray.length === 1 ? "item" : "items"}
        </p>
        {itemArray &&
          itemArray.map((item) => {
            return <CartItem id={item.id} quantity={item.quantity} />;
          })}
      </ItemWrapper>
      <PurchaseWrapper>
        <h2>Total: </h2>
        <StyledButton>Purchase</StyledButton>
      </PurchaseWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  color: white;
  background-color: #381a3d;
  height: 100vh;
  min-width: 300px;
  padding: 0px 50px 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemWrapper = styled.div``;

const PurchaseWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  height: 40px;
  width: 150px;
`;

export default Cart;
