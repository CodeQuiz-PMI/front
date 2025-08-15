import styled from "styled-components";

export const StyledConfigurationPage = styled.main` 
    nav {
        width: 100%;
        height: 100px;
        padding: 10px;
        background: var(--nav-background);
        border-bottom: var(--primary-color-light) 2px solid;
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
    }

    .config-container{
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding-top: 20px;

        .title{
            display: flex;
            flex-direction: column;
            align-items: center;

            h1{
                color: var(--primary-color-light);
                font-family: var(--main-font);
                font-size: var(--font-size-xxxxlll);
                font-style: normal;
                font-weight: var(--font-weight-normal);
            }
            p{
                color: var(--primary-color-light);
                text-align: center;
                font-family: var(--main-font);
                font-size: var(--font-size-xxl);
                font-style: normal;
                font-weight: var(--font-weight-normal);
            }
        }
    }

    .container{
        display: flex;
        flex-direction: row;
        justify-content: center;

        .containerLeft{
            width: auto;
            
            display:flex;
            flex-direction: column;
            gap: 20px;

            padding: 20px;

            .inputs{
                width: 360px;
                height: 115px;
                border: 1px solid transparent;
                border-radius: 10px;
                background-color: var(--surface-color);
                padding: 10px;

                display: flex;
                flex-direction: column;
                justify-content: center;

                p{
                    color: var(--primary-color-light);
                    font-family: var(--main-font);
                    font-size: var(--font-size-xl);
                    font-style: normal;
                    font-weight: var(--font-weight-normal);

                    padding-bottom: 10px;
                }

                .volume-control{
                    display: flex;
                    align-items: center;

                    gap: 10px;

                    .volume-icon{
                        display: flex;
                        align-items: center;

                        background: none;
                        border: none;
                        color: var(--primary-color-light);
                        font-size: var(--font-size-xl);
                        cursor: pointer
                    }
                    
                    .volume-slider{
                        -webkit-appearance: none;
                        width: 100%;
                        height: 10px;
                        background: var(--primary-color-light);
                        border-radius: 4px;
                        outline: none;
                    }

                    .volume-slider::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        width: 30px;
                        height: 30px;
                        background: var(--primary-color-light);
                        border-radius: 50%;
                        cursor: pointer;
                        border: 1px solid transparente;
                    }

                    .volume-slider::-moz-range-thumb {
                        width: 30px;
                        height: 30px;
                        background: var(--primary-color-light);
                        border-radius: 50%;
                        cursor: pointer;
                        border: 2px solid transparente;
                    }
                }

                .button{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }


    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;

        .modal-content {
            background-color: #121212;
            padding: 30px;
            border-radius: 8px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;

            h2 {
                font-family: var(--main-font);
            }
        }
    }

`;
