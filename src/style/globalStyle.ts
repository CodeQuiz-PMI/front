import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0; 
        box-sizing: border-box;               
        color: #88FF3F;
	}
		
	body{
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #2A2A2A;
	}
	main {
		width: 1024px;
		display: flex;
		flex-direction: column;
	}

    ul{
        list-style: none;
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

	  strong, li{
	 	font-family: "Space Mono"; 
	  }
    }
  }
`;
