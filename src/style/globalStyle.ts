import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		/* Cores */
		--primary-color: #88FF3F;
		--primary-color-light: #2fff00;
		--background-color: #2A2A2A;
		--surface-color: #393939;
		--modal-background: rgba(48, 91, 38, 1);
		--modal-overlay: rgba(0, 0, 0, 0.5);
		--nav-background: #384A2D;

		/* Tipografia */
		--main-font: 'Jersey 25', cursive;
		--second-font: "Space Mono";
		--font-size-base: 1rem; // 16px
		--font-size-base2: 1.22rem; // 16px
		--font-size-lg: 1.2rem; // 19.2px
		--font-size-xl: 1.56rem; // 25px
		--font-size-xxl: 1.875rem; // 30px
		--font-size-xxxl: 3rem; // 48px
		--font-size-xxxxl: 3.125rem; // 50px
		--font-size-xxxxlll: 5rem; // 80px
		--font-size-xxxxxll: 4.6rem; // 73px
		--font-size-xxxxxl: 6rem; // 96px
		--font-size-xxxxxxl: 8rem; // 128px
		--font-weight-normal: 400;

		/* Bordas */
		--border-radius-sm: 10px;
		--border-radius-md: 20px;
		--border-width-lg: 5px;
	}

	*, *::before, *::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	body {
		background-color: var(--background-color);
		font-family: var(--main-font);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: var(--primary-color-light);
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

	button{
		background: transparent;
    	border: 1px solid transparent;
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
			border: 5px solid var(--primary-color-light);

			background: var(--modal-background);

			text-align: center;

			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;

			padding: 30px 40px;
			width: 90%;
			max-width: 600px;

			position: relative;

			#inp{
				width: 100%;
				height: 45px;
				padding: 10px;
				font-size: 20px;
				border: 1px solid transparent;
				border-radius: 10px;
				background: rgba(43, 43, 43, 0.43);
				color: var(--primary-color-light);
				font-family: var(--main-font);
			}

			.modalMusics{
				display: flex;
				align-items: center;
				justify-content: center;
				position:relative;

				.coins{
					position: absolute;
					top: 0px;
					right: 0px;
					background: var(--surface-color);
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
						color: var(--primary-color-light);
						text-align: center;
						font-family: var(--main-font);
						font-size:50px;
						font-style: normal;
						font-weight: 400;
						line-height: normal;
					}

					p{
						color: var(--primary-color-light);
						text-align: center;
						font-family: var(--main-font);
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

						width: 355px;

						.price{
							display: flex;
							align-items: center;
							gap: 10px;

							background: var(--surface-color);

							padding: 10px;

							border: 1px solid transparent;
							border-radius: 10px;
							p{
								color: var(--primary-color-light);
								font-family: var(--main-font);
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

							background: var(--surface-color);

							padding: 10px;

							border: 1px solid transparent;
							border-radius: 20px;

							width: 190px;

							p{
								color: var(--primary-color-light);
								font-family: var(--main-font);
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

								background: var(--surface-color);

								padding: 10px;

								border: 1px solid transparent;
								border-radius: 10px;

								color: var(--primary-color-light);
							}
						}
					}
				}
			}

			.listLifes{
				#cursor{
					gap: 15px 15px;
					li .lifesTitle {
						width: 130px;
					}
				}
				ul{
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					gap: 15px 36px;
					justify-content: center;
					
					.liLifes{
						display: flex;
						flex-direction: column;
						gap: 5px;

						.lifesTitle{
							display: flex;
							flex-direction: column;
							align-items: center;
							gap: 10px;

							background: var(--surface-color);

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

							background: var(--surface-color);

							padding: 10px;

							border: 1px solid transparent;
							border-radius: 10px;
							p{
								color: var(--primary-color-light);
								font-family: var(--main-font);
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
					color: var(--primary-color-light);
					text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
					font-family: var(--main-font);
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
						color: var(--primary-color-light);
						text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
						font-family: var(--main-font);
						font-size: 30px;
						font-style: normal;
						font-weight: 400;
						line-height: normal;
					}
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

				button{
					width: 100px;
                    height: 100px;

                    padding: 10px;

                    border-radius: 10px;
                    border: 5px solid #2B4E23;

                    background-color: #2FFF00;
				}
			}

			.Store-buttons {
				display: flex;
				margin-top: 20px;
				position: absolute;
				bottom: -60px;
				gap: 25px;
				justify-content: center;
				width: 87%;

				.buttonModalStore{
					width: 100px;
					height: 75px;

					padding: 10px;

					border-radius: 10px;
					border: 5px solid #2B4E23;

					background-color: #2FFF00;

					display: flex;
					align-items: center;
					justify-content: center;
				}
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

				color: var(--primary-color-light);
				text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
				font-family: var(--main-font);
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

				button{
					width: auto;
					height: 50px;

					padding: 10px;

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
					
					background: #214419;  

					&:hover {
						background-color: rgba(137, 255, 63, 0.5);
					}
				}
			}
		}
	}
`;
