import styled from "styled-components";

export const StyledConfigurationPage = styled.main` 
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
                color: #2FFF00;
                font-family: "Jersey 25";
                font-size: 80px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
            p{
                color: #2FFF00;
                text-align: center;
                font-family: "Jersey 25";
                font-size: 30px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
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

            border-right: 1px solid grey;

            padding: 20px;

            .inputs{
                width: 300px;
                height: 90px;
                border: 1px solid transparent;
                border-radius: 10px;
                background-color: #393939;
                padding: 10px;

                p{
                    color: #2FFF00;
                    font-family: "Jersey 25";
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;

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
                        color: #2fff00;
                        font-size: 25px;
                        cursor: pointer
                    }
                    
                    .volume-slider{
                        -webkit-appearance: none;
                        width: 100%;
                        height: 10px;
                        background: #2fff00;
                        border-radius: 4px;
                        outline: none;
                    }

                    .volume-slider::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        width: 30px;
                        height: 30px;
                        background: #2fff00;
                        border-radius: 50%;
                        cursor: pointer;
                        border: 1px solid transparente;
                    }

                    .volume-slider::-moz-range-thumb {
                        width: 30px;
                        height: 30px;
                        background: #2fff00;
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

        .containerRight{
            width: auto;
            
            display:flex;
            flex-direction: column;
            gap: 20px;

            padding: 20px;

            .background{
                display:flex;
                flex-direction: column;
                align-items: center;
                
                width: 300px;
                height: auto;

                background-color: #393939;
                
                border-radius: 10px;
                border: 1px solid transparent;
                
                padding: 10px;

                p{
                    color: #2FFF00;
                    font-family: "Jersey 25";
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
    
                    padding-bottom: 10px;
                }

                .gold{
                    display:flex;
                    flex-direction: column;
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
        font-family: "Space Mono", monospace;
      }
    }
  }

`;
