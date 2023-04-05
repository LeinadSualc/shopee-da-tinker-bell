import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    bgColor?: string;
}

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    margin-top: 10px;
`;

export const THtr = styled.tr`
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 6px;
    text-align: center;
    border: 1px solid #ddd;
    /* background-color: #04AA6D; */
    /* color: white; */
`;
export const THTh = styled.th`
    padding: 6px;
    text-align: center;
    border: 1px solid #ddd;
`;

export const Td = styled.td`
    padding: 6px;
    text-align: center;
    border: 1px solid #ddd;
`;
export const TBTr = styled.tr`
    padding: 6px;
    text-align: center;
    border: 1px solid #ddd;

    :hover {
        background-color: #ddd;
    }
`;

export const Button = styled.button<ButtonProps>`
    border: 0;
    padding: 15px;
    border-radius: 8px;
    background-color: ${(props: any) => props.bgColor || `var(--red)`};
    :hover {
        filter: brightness(1.3);
    }
    margin-top: 10px;
`;
export const TextButton = styled.h3`
    color: var(--white);
`;
