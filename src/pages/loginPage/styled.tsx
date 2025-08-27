import styled from "styled-components";
export const StyledLoginPage = styled.main`
    .navigate{
        img{
            width: 70px;
        }
    }

    .title {
        font-family: var(--main-font);
        color: var(--primary-color-light);
        h1 {
            font-size: var(--font-size-xxxxl);
            text-align: center;
            font-style: normal;
            font-weight: var(--font-weight-normal);
        }

        h2 {
            font-size: var(--font-size-xxl);
            text-align: center;
            font-style: normal;
            font-weight: var(--font-weight-normal);
        }
            
        margin-bottom: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .socialIcons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;

        img {
            width: 60px;
        }
    }

    .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        

        .loginForm {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 500px;

            .input {
                display:flex;
                flex-direction: column;
                gap:5px;

                label {
                    font-size: 20px;
                    font-family: var(--main-font);   
                }
    
                input {
                    width: 100%;
                    height: 45px;
                    padding: 10px;
                    font-size: 20px;
                    border: 1px solid transparent;
                    border-radius: 10px;
                    background: rgba(217, 217, 217, 0.15);
                    color: var(--primary-color-light);
                    font-family: var(--main-font);
                }
    
                input::placeholder {
                    color: var(--primary-color-light);
                }
            }

        }

        .links {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            font-family: var(--main-font);
            a {
                text-decoration: none;
                color: var(--primary-color-light);
            }
        }

        .button{
            display: flex;
            align-items: center;
            justify-content: center;

            button{
                width: 200px;
                height: 60px;

                display: flex;
                flex-direction: column;
                justify-content: center;
                
                border-radius: 10px;
                border: 1px solid #2FFF00;
                
                color: #2FFF00;
                text-align: center;
                font-family: "Jersey 25";
                font-size: 30px;
                font-style: normal;
                font-weight: 400;

                background-color: rgba(47, 255, 0, 0.1);  

                &:hover {
                    background-color: rgba(137, 255, 63, 0.5);
                }
            }
        }
    }
`;
