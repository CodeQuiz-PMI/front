import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }

  body {
    background-color: #2A2A2A;
    font-family: 'Jersey 25', cursive;
    color: #88FF3F;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main {
    width: 100vw;
    max-width: 100vw;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  input, button {
    font-family: inherit;
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
	  	height: auto;

		border-radius: 10px;
		border: 5px solid #88FF3F;

		background: rgba(48, 91, 38, 1);

      	text-align: center;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		padding: 30px 40px;
		width: 90%;
		max-width: 600px;

		position: relative;

		.modalMusics{
			display: flex;
			align-items: center;
			justify-content: center;
			position:relative;

			.coins{
				position: absolute;
				top: 0px;
				right: 0px;
				background: #393939;
				padding: 10px;
				border: 1px solid transparent;
    			border-radius: 10px;
			}

			.modalTitleMusics{
				display: flex;
				flex-direction: column;
				justify-content: center;
				gap: 10px;

				h2{
					color: #2FFF00;
					text-align: center;
					font-family: "Jersey 25";
					font-size:50px;
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

		.listMusics{
			ul{
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 10px;

				.liMusics{
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 10px;

					width: 400px;

					.price{
						display: flex;
    					align-items: center;
						gap: 10px;

						background: #393939;
						
						padding: 10px;
						
						border: 1px solid transparent;
    					border-radius: 10px;
						p{
							color: #2FFF00;
							font-family: "Jersey 25";
							font-size: 25px;
							font-style: normal;
							font-weight: 400;
							line-height: normal;
						}
						img{
							width: 25px;
						}
					}

					.musicTitle{
						display: flex;
						align-items: center;
						justify-content: center;
						gap: 10px;
						
						background: #393939;
						
						padding: 10px;
						
						border: 1px solid transparent;
						border-radius: 20px;
						
						width: 270px;

						p{
							color: #2FFF00;
							font-family: "Jersey 25";
							font-size: 25px;
							font-style: normal;
							font-weight: 400;
							line-height: normal;
						}
					}

					.ButtonPlay{
						button{
							display: flex;
							align-items: center;
							gap: 10px;

							background: #393939;
							
							padding: 10px;
							
							border: 1px solid transparent;
							border-radius: 10px;

							color: #2FFF00;
						}
					}
				}
			}
		}

		.listLifes{
			.hintsUl{
				gap: 15px 36px;
			}
			ul{
			    display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				gap: 15px 36px;

				.liLifes{
				    display: flex;
					flex-direction: column;
					gap: 5px;
					
					.lifesTitle{
						display: flex;
						flex-direction: column;
    					align-items: center;
						gap: 10px;

						background: #393939;
						
						padding: 15px;
						
						border: 1px solid transparent;
    					border-radius: 10px;

						img{
							width: 69px;
						}
					}

					.price{
						display: flex;
    					align-items: center;
						justify-content: center;
						gap: 10px;

						background: #393939;
						
						padding: 10px;
						
						border: 1px solid transparent;
    					border-radius: 10px;
						p{
							color: #2FFF00;
							font-family: "Jersey 25";
							font-size: 25px;
							font-style: normal;
							font-weight: 400;
							line-height: normal;
						}
						img{
							width: 25px;
						}
					}
				}
			}
		}
	
	  	.ranking-title {
			display: flex;
			align-items: center;
			gap: 10px;
			margin-bottom: 20px;

			h2 {
				color: #2FFF00;
				text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
				font-family: "Jersey 25";
				font-size: 48px;
				font-style: normal;
				font-weight: 400;
				line-height: normal;
			}

			img {
				width: 24px;
				height: 24px;
			}
		}

	  	.ranking-list {
			list-style: none;
			padding: 0;
			margin-bottom: 20px;
			width: 70%;

			li {
				display: flex;
				justify-content: space-between;
				padding: 6px 0;
				font-size: 1.1rem;

				span {
					color: #2FFF00;
					text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
					font-family: "Jersey 25";
					font-size: 30px;
					font-style: normal;
					font-weight: 400;
					line-height: normal;
				}
			}

			.player-points {
				font-weight: bold;
			}

			
			.no-ranking {
				text-align: center;
				font-style: italic;
				font-size: 1rem;
				}
				
		}

		.ranking-buttons {
			display: flex;
			justify-content: space-around;
			margin-top: 20px;
			position: absolute;
			bottom: -60px;
    		gap: 25px;
		}

		.Store-buttons {
			display: flex;
			margin-top: 20px;
			position: absolute;
			bottom: -40px;
			gap: 25px;
			justify-content: center;
			width: 87%;
		}

		.hintModel{
			display: flex;
			flex-direction: column;
			gap: 20px;
		}

		.imgmodel{
			display: flex;
			align-items: center;
			gap: 10px;

			color: #2FFF00;
			text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
			font-family: "Jersey 25";
			font-size: 30px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			img{
				width: 50px;
			}
		}

		.imgBetinha{
			position: absolute;
			width: 110px;
			right: 0px;
			top: 0px;
		}

		.butons{
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 20px;
		}
    }
  }
`;
