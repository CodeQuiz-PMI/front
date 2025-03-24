import styled from "styled-components";

export const StyleLevelPage = styled.main`

    .header{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        .config {
            display: flex;
            align-items: center;

            &:hover {
                cursor: pointer;
                img {
                    border: 0px solid transparent;
                    border-radius: 50%;
                    background-color: rgba(137, 255, 63, 0.5);
                }
            }
        }

        .title {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            h1{
                font-size: 50px;
            }

            p{
                font-size: 25px;
            }
        }
    }

    .buttons{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 5px;

        div{
            display: flex;
            gap: 10px;
        }
    }

    .listCards{
        .text{
            display: flex;
            justify-content: space-between;
            font-size: 50px;
        }

        ul{
            display: flex;
            flex-wrap: wrap;
            gap: 15px 100px;
            justify-content: space-evenly;
        }
    }

    .back{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
    }

`;