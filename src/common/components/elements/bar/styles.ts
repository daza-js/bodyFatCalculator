import styled from "styled-components";
import {
  TypeRootBar,
  TypeContentCaption,
  TypeColor,
  TypeRootFlag,
} from "./types";
import { calcPercentageFlag } from "../../../../utils";

/* A styled component. */
export const RootBar = styled.div<TypeRootBar>`
  background: ${(props) =>
    `linear-gradient(to right,${props.captionsMetrics
      .map((item) => `${item.color.toString()} ${item.left}%`)
      .join(",")})`};
  width: 100%;
  height: 100px;
  border-radius: 10px;
  position: relative;
`;

export const RootCaption = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 80px;
  padding-top: 10px;
`;

export const RootContentBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContentCaption = styled.div<TypeContentCaption>`
  left: ${(props) => `${props.left - 5}%`};
  display: grid;
  position: absolute;
`;

export const RootBox = styled.div<TypeColor>`
  width: 10px;
  height: 10px;
  background: ${(props) => `${props.color}`};
  border-color: white;
  border: 1px solid;
  border-radius: 3px;
`;

export const RootContentFlag = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
`;

export const RootFlag = styled.div<TypeRootFlag>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${(props) =>
    `${calcPercentageFlag({ percentage: props.percentage, BFP: props.BFP })}%`};
  &:after {
    content: "";
    position: absolute;
    top: 25px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 20px solid #fff;
    clear: both;
  }
`;




