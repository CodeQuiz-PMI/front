import styled from "styled-components";

export const StyledStorePage = styled.main` 
    nav {
    width: 100%;
    height: 100px;
    padding: 10px;
    background: #2fff0026;
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
            color: #2FFF00;
            font-family: "Jersey 25";
            font-size: 40px;
            font-style: normal;
            font-weight: 400;
        }
    }
  }    

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

                color: #2FFF00;
                text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
                font-family: "Jersey 25";
                font-size: 32px;
                font-style: normal;
                font-weight: 400;

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

            background-color: #393939;

            padding: 10px;

            border: 1px solid transparente;
            border-radius: 10px ;

            color: #2FFF00;

            font-family: "Jersey 25";
            font-size: 36px;
            font-style: normal;
            font-weight: 400;

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
                
                width: 240px;
                height: 200px;
                
                border: 1px solid transparent;
                border-radius: 10px;
                
                background-color: #393939;
                
                color: #2FFF00;
                font-family: "Jersey 25";
                font-size: 25px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                img{
                    width: 100px;
                }
            }
        }
    }
            
`;
