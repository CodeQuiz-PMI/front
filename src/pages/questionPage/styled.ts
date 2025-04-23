import styled from "styled-components";

export const QuestionPageStyled = styled.main`
	align-items: center;
	.header {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 100%;

		h1{
			text-align: center;
		}

		div{
			display: flex;
			justify-content: flex-end;
			width: 45%;
		}
	}

	.container {
		display: flex;
    	justify-content: space-between;
		margin-bottom: 20px;
		margin-top: 50px;

		.text {
			width: 50%;
			padding-right: 10px;
			p {
				font-family: "Space Mono", monospace;
    			text-align: justify;
			}
		}

		.question{
			width: 50%;
			padding-left: 10px;
			border-left: 2px solid green;
			
			h3{
				font-family: "Space Mono", monospace;	
			}
			form {

				label {
					font-family: "Space Mono", monospace;	
					display: block;
					padding: 10px;
					margin-bottom: 10px;
					border: 2px solid green;
					border-radius: 8px;
					cursor: pointer;
					transition: 0.3s ease;
				}

				label:hover {
					background-color: rgba(0, 128, 0, 0.1);
				}

				label.selected {
					background-color: green;
					color: white;
				}

				input[type="radio"] {
					margin-right: 10px;
					accent-color: green;
					display: none;
				}
			}
		}
	}
`;