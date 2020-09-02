import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { square_delete } from "react-icons-kit/ikons/square_delete";
import { removeItem } from "../actions";
import { useDispatch } from "react-redux";

const CartItem = ({ id, quantity }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <ItemNameWrapper>
        <ItemName>{id}</ItemName>
        <StyledIcon
          icon={square_delete}
          onClick={() => dispatch(removeItem({ id }))}
        />
      </ItemNameWrapper>
      <QuantityWrapper>
        <p>Quantity: {quantity}</p>
      </QuantityWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px dashed white;
  margin-bottom: 20px;
`;

const ItemNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
`;

const ItemName = styled.h3`
  text-transform: uppercase;
`;

const StyledIcon = styled(Icon)`
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`;
const QuantityWrapper = styled.div`
  background-color: #150917;
  padding: 5px 10px;
`;

export default CartItem;
