import styled from "styled-components";
export const StyledLoginPage = styled.main`
    gap: 90px;
    .title {
        h1 {
            font-size: 80px;
            color: #88FF3F;
            text-shadow: 0px 0px 30px #88FF3F;
        }

        h2 {
            font-size: 40px;
        }

        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .container{
        display: flex;
        justify-content: space-between;
        
        .loginForm {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 304px;

            label{
                font-size: 20px;
            }

            input {
                width: 100%;
                height: 45px;
                padding: 10px;
                font-size: 20px;
                background-color: transparent;
                border: 1px solid #88FF3F;
                border-radius: 10px;
                color: #88FF3F;
            }

            input::placeholder{
                color: #88FF3F;
            }
        }
            
        .links {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
                
        .socialIcons{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
        
        .bottomRight{
            display: flex;
            flex-direction: column;
            gap: 10px;
            justify-content: flex-end;
        }
    }
`;