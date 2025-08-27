import styled from "styled-components";


export const StyledChallengePage = styled.main`
    nav {
        width: 100%;
        height: 85px;
        padding: 10px;
        background: #ec5900d6;
        border-bottom: #FFFFFF 2px solid;
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

    .Title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    
        width: 100%;
        height: 130px;

        h1 {
            color: #EC5900;
            text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            font-family: "Jersey 25";
            font-size: 96px;
            font-style: normal;
            font-weight: 400;
        }

        img { 
            width: 100px;
            height: 100px;  
        }
    }

    .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: relative;


        .containerBody {
            display: flex;
            align-items: center;
            justify-content: space-around;

            width: 800px;
            height: 350px;
            
            background-color: #393939;

            border: 1px solid transparent;
            border-radius: 25px;

            position: relative;

            .info{
                position: absolute;
                bottom: 300px;
                right: 10px;

                img{
                    width: 35px;
                }
            }
            
            .lifes-counter{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                
                position: absolute;
                bottom: 410px;
                left: 1060px;

                font-size: 40px;
                color: white;
                flex-direction: row-reverse;

                background-color: #393939;
                padding: 10px 25px;
                border-radius: 10px;

                img{
                    width: 35px;
                }
            }
        }

        .record{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 30px;

            h2{
                color: #FFF;

                text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
                font-family: "Jersey 25";
                font-size: 40px;
                font-style: normal;
                font-weight: 400;
            }

            p{
                color: #FFF;

                text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
                font-family: "Jersey 25";
                font-size: 96px;
                font-style: normal;
                font-weight: 400;
            }
        }

        .ranking {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 5px;

            width: 350px;
            height: 300px;

            background-color: #473124;

            border: 1px solid transparent;
            border-radius: 25px;

            padding-top: 25px;
            
            h2 {
                color: #FFF;
                text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
                font-family: "Jersey 25";
                font-size: 30px;
                font-style: normal;
                font-weight: 400;
            }
            .ranking-list {
				list-style: none;
				padding: 10px 20px;
				margin-bottom: 20px;
				width: 100%;


				li {
					display: flex;
					justify-content: space-between;
					padding: 6px 0;
					font-size: 1.1rem;

					span {
						color: #FFF;
                        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
                        font-family: "Jersey 25";
                        font-size: 30px;
                        font-style: normal;
                        font-weight: 400;
					}
				}

				.no-ranking {
					text-align: center;
					font-style: italic;
					font-size: 1rem;
					}

			}
        }

        .buttons{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 180px;
            
            width: 100%;
            
            position: absolute;
            bottom: -70px;
            
            button {
                width: 110px;
                height: 90px;
                
                border-radius: 10px;
                border: 5px solid rgba(236, 89, 0, 0.38);
                
                background: #A13D00;
            }
        }
    }
`;