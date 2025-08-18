import styled from "styled-components";

export const StyledStorePage = styled.main` 
    .Notification{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        padding: 40px 20px 0px 0px;

        .balon{
            display: flex;
            align-items: center;
            position: relative;
            
            .text {
                position: relative;
                width: 720px;

                color: var(--primary-color-light);
                text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
                font-family: var(--main-font);
                font-size: var(--font-size-xxl);
                font-style: normal;
                font-weight: var(--font-weight-normal);

                .p1{
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    width: 550px;
                }

                .p2{
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    width: 550px;
                }
            }

            .img{
                width: 270px;
                position: relative;

                img{
                    position: absolute;
                    width: 270px;
                    right: 30px;
                    top: -70px;
                }
            }
        }

        .coins{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;

            background-color: var(--surface-color);

            padding: 10px;

            border: 1px solid transparente;
            border-radius: var(--border-radius-sm);

            color: var(--primary-color);

            font-family: var(--main-font);
            font-size: var(--font-size-xxl);
            font-style: normal;
            font-weight: var(--font-weight-normal);

            width: 120px;
        }
    }

    .Divlist{
        width: 100%;
        padding-top: 80px;
        .list{
            display: flex;
            justify-content: space-evenly;
            padding: 0px 100px 0px 50px;
            
            li{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 10px;

                button{
                    background: transparent;
                    border: 1px solid transparent;
                    color: var(--primary-color-light);
                    font-family: var(--main-font);
                    font-size: var(--font-size-xl);
                    font-style: normal;
                    font-weight: var(--font-weight-normal);
                    line-height: normal;
                }
                
                width: 240px;
                height: 200px;
                
                border: 1px solid transparent;
                border-radius: var(--border-radius-sm);
                
                background-color: var(--surface-color);
                
                img{
                    width: 100px;
                }
            }
        }
    }
            
`;
