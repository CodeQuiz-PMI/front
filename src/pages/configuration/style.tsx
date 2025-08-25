import styled from "styled-components";

export const StyledConfigurationPage = styled.main`

   overflow-x: hidden; 
   height: 100vh;
        

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
    .profile-container {
        background: rgba(255, 255, 255, 0.07);
        border-radius: 30px;
        margin-top: 40px; 
        padding: 30px;  
        display: flex;
        flex-direction: column;
        gap: 30px;

        max-width: 900px; 
        width: 80%;       
        margin: 40px auto; 
    }
     

        .edit-profile {
            background: rgba(255, 255, 255, 0.07);
            border-radius: 30px;
            padding: 30px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px 30px;

            input {
                height: 56px;
                border: 1px solid #2FFF00;
                border-radius: 10px;
                padding: 0 16px;
                font-size: 20px;
                font-family: "Jersey 25";
                color: #2FFF00;
                background: transparent;
                outline: none;
            }

            .button-row {
                grid-column: 1 / -1;
                display: flex;
                justify-content: center;
                gap: 24px;
                margin-top: 10px;

                .btn-discard,
                .btn-save {
                    height: 58px;
                    min-width: 280px;
                    padding: 0 24px;
                    border-radius: 10px;
                    font-family: "Jersey 25";
                    font-size: 28px;
                    border: 1px solid #2FFF00;
                    color: #2FFF00;
                    cursor: pointer;
                    transition: 0.25s ease;
                }

                .btn-discard {
                    background: rgba(236, 89, 0, 0.15);
                    &:hover { background: rgba(236, 89, 0, 0.25); }
                }

                .btn-save {
                    background: rgba(47, 255, 0, 0.15);
                    &:hover { background: rgba(47, 255, 0, 0.3); }
                }
            }
        }

        .containerLeft {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;

            .inputs {
                background: rgba(255, 255, 255, 0.07);
                border-radius: 30px;
                padding: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 150px;
                gap: 16px;

                p {
                    font-family: "Jersey 25";
                    font-size: 32px;
                    color: #2FFF00;
                    margin: 0 0 6px 0;
                    text-align: center;
                }

                .button,
                button {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                }

                .buttonConfigPage,
                .buttonConfigPage2,
                button {
                    font-family: "Jersey 25";
                    font-size: 28px;
                    color: #2FFF00;
                    background: rgba(47, 255, 0, 0.15);
                    border: 1px solid #2FFF00;
                    border-radius: 10px;
                    padding: 14px 20px;
                    cursor: pointer;
                    transition: 0.3s;
                    width: 80%;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;

                    &:hover { background: rgba(47, 255, 0, 0.3); }
                }

                .volume-control {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    width: 100%;

                    .volume-icon {
                        font-size: 24px;
                        color: #2FFF00;
                        cursor: pointer;
                    }

                    .volume-slider {
                        flex: 1;
                        height: 12px;
                        border-radius: 19px;
                        appearance: none;
                        background: rgba(47, 255, 0, 0.5);
                        cursor: pointer;

                        &::-webkit-slider-thumb {
                            appearance: none;
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            background: #2FFF00;
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
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.6);

        .modal-content {
            background: #2A2A2A;
            border: 1px solid #2FFF00;
            border-radius: 20px;
            padding: 40px;
            display: flex;
            flex-direction: column;
            gap: 30px;
            width: 600px;

            h2 {
                font-family: "Jersey 25";
                font-size: 40px;
                color: #2FFF00;
                text-align: center;
                margin: 0; 
                padding: 0; 
                border: none;
                outline: none; 
            }
                p {
                font-family: "Space Mono", monospace;
                font-size: 18px;
                color: #FFFFFF;
                text-align: center;
                margin: 0;
                line-height: 1.5;
    }
            .button-group {
                display: flex;
                justify-content: center;
                gap: 30px; 
                margin-top: 10px;
                
            input {
                border: 1px solid #2FFF00;
                border-radius: 10px;
                padding: 12px;
                font-size: 20px;
                font-family: "Jersey 25";
                color: #2FFF00;
                background: transparent;
                outline: none;
                width: 100%;
                box-sizing: border-box;
            }

     .buttonExit2 {
        font-family: "Jersey 25";
        font-size: 28px;
        color: #2FFF00;
        border: 1px solid #2FFF00;
        border-radius: 10px;
        padding: 12px 30px; 
        min-width: 140px; 

        &:hover {
            box-shadow: 0 4px 8px rgba(47, 255, 0, 0.2);
            }
        }
    }
`;
