import styled from "styled-components";

export const StyledNavBar = styled.nav`
    width: 100%;
    height: 85px;
    padding: 10px;
    background: var(--nav-background);
    border-bottom: #2FFF00 2px solid;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .img{
        width: 96px;
        height: auto;
        padding-left: 20px;
    }

    .nav{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 20px;
        padding-right: 20px;
        a {
            width: auto;
            text-decoration: none;
            color: var(--primary-color-light);
            font-family: var(--main-font);
            font-size: var(--font-size-xxl);
            font-style: normal;
            font-weight: var(--font-weight-normal);
        }
    }
`;