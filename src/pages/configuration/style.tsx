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

        button{
            width: 80px;
            height: 50px;

            display: flex;
            flex-direction: column;
            justify-content: center;
            

            border: 1px solid transparent;
        
            background-color: #2A2A2A;
        }

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
            flex-direction: row;
            gap: 20px;

            padding: 20px;

            .left{
                display: flex;
                flex-direction: column;
                gap: 20px;

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

                    .custom-select{
                        position: relative;
                    }
                    .custom-select select {
                        appearance: none;
                        -webkit-appearance: none;
                        width: 100%;
                        font-size: 18px;
                        padding: 5px 10px 5px 10px;
                        background-color: #4A4A4A;
                        border: 1px solid #2FFF00;
                        border-radius: 5px;
                        color: #2FFF00;
                        cursor: pointer;
                        outline: none;
                    }

                    .custom-select select:focus {
                        background: #4A4A4A;
                        border: 1px solid #1C9800;
                        border-radius: 5px;
                    }

                    .custom-select::after {
                        content: "";
                        position: absolute;
                        pointer-events: none;
                        top: 50%;
                        right: 10px;
                        transform: translate(0, -50%);
                        width: 12px;
                        height: 12px;
                        background-color: #2FFF00;
                        clip-path: polygon(8% 17%, 0% 25%, 50% 84%, 100% 25%, 92% 17%, 50% 65%);
                    }

                    .volume-control{
                        display: flex;
                        align-items: center;

                        gap: 10px;

                        padding-top: 10px;

                        .volume-icon{
                            display: flex;
                            align-items: center;

                            background: none;
                            border: none;
                            color: var(--primary-color-light);
                            font-size: var(--font-size-xl);
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
                            border: 1px solid transparente;
                        }

                        .volume-slider::-moz-range-thumb {
                            width: 30px;
                            height: 30px;
                            background: var(--primary-color-light);
                            border-radius: 50%;
                            border: 2px solid transparente;
                        }
                    }

                    .button{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .buttonConfigPage{
                            width: 100%;
                            height: 40px;

                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            
                            border-radius: 10px;
                            border: 2px solid #2FFF00;
                            
                            color: #2FFF00;
                            text-align: center;
                            font-family: "Jersey 25";
                            font-size: 36px;
                            font-style: normal;
                            font-weight: 400;

                            background-color: #4A4A4A;  

                            &:hover {
                                background-color: rgba(137, 255, 63, 0.5);
                            }
                        }

                        .buttonConfigPage2{
                            width: 100%;
                            height: 40px;

                            display: flex;
                            flex-direction: row;
                            justify-content: flex-end;
                            align-items: center;
                            gap: 100px;

                            border-radius: 10px;
                            border: 2px solid #2FFF00;

                            color: #2FFF00;

                            text-align: center;
                            font-family: "Jersey 25";
                            font-size: 36px;
                            font-style: normal;
                            font-weight: 400;
                            background-color: #4A4A4A;

                            padding: 5px;

                            img{
                                width: 30px
                            }

                            &:hover {
                                background-color: rgba(137, 255, 63, 0.5);
                            }
                        }
                    }
                }
            }

            .rigth{
                display: flex;
                flex-direction: column;
                gap: 20px;

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

                .button{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .buttonConfigPage{
                        width: 100%;
                        height: 40px;

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        
                        border-radius: 10px;
                        border: 2px solid #2FFF00;
                        
                        color: #2FFF00;
                        text-align: center;
                        font-family: "Jersey 25";
                        font-size: 36px;
                        font-style: normal;
                        font-weight: 400;

                        background-color: #4A4A4A;  

                        &:hover {
                            background-color: rgba(137, 255, 63, 0.5);
                        }
                    }

                    .buttonConfigPage2{
                        width: 100%;
                        height: 40px;

                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;
                        align-items: center;
                        gap: 100px;

                        border-radius: 10px;
                        border: 2px solid #2FFF00;

                        color: #2FFF00;

                        text-align: center;
                        font-family: "Jersey 25";
                        font-size: 36px;
                        font-style: normal;
                        font-weight: 400;
                        background-color: #4A4A4A;

                        padding: 5px;

                        img{
                            width: 30px
                        }

                        &:hover {
                            background-color: rgba(137, 255, 63, 0.5);
                        }
                    }
                }
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

            .buttonExit2{
                width: 200px;
                height: 50px;

                display: flex;
                flex-direction: column;
                justify-content: center;
                
                border-radius: 10px;
                border: 1px solid #2FFF00;
                
                color: #2FFF00;
                text-align: center;
                font-family: "Jersey 25";
                font-size: 36px;
                font-style: normal;
                font-weight: 400;

                background-color: rgba(47, 255, 0, 0.1);  

                &:hover {
                    background-color: rgba(137, 255, 63, 0.5);
                }
            }

            .button-group{
                display: flex;
                align-items: center;
                gap: 10px;

                button{
                    width: 200px;
                    height: 50px;

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    
                    border-radius: 10px;
                    border: 1px solid #2FFF00;
                    
                    color: #2FFF00;
                    text-align: center;
                    font-family: "Jersey 25";
                    font-size: 36px;
                    font-style: normal;
                    font-weight: 400;

                    background-color: rgba(47, 255, 0, 0.1);  

                    &:hover {
                        background-color: rgba(137, 255, 63, 0.5);
                    }
                }
            }
        }
    }

`;
