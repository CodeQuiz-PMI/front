import styled from "styled-components";

export const StyledConfigurationPage = styled.main` 
    display: flex;
    flex-direction: column;
    align-items: flex-start;


    .config-container {
        border: 0px solid #88FF3F;
        background-color: #111;

        h1{
            font-size: 60px;
        }

        p {
            font-family: "Space Mono";
            font-size: 20px;
            margin-bottom: 20px;
        }
    }

    .section {
        display: flex;
        margin: 30px 0;
        flex-direction: column;
        gap: 10px;
        
        h2 {
            font-size: 25px;
            font-family: "Space Mono";
        }
        p{
            font-family: "Space Mono";
            font-size: 20px;
        }
        span {
            color:rgba(0, 255, 0, 0.7);
            font-family: "Space Mono";
        }   
    }

    .slider-container {
        display: flex;
        padding: 10px 0;
        width: 305px;
    }

    .custom-slider {
        -webkit-appearance: none;
        appearance: none;
        width: 50%;
        height: 8px;
        background: #aaa;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
    }

    .custom-slider::-webkit-slider-runnable-track {
        width: 50%;
        height: 8px;
        background: #88FF3F;
        border-radius: 4px;
    }

    input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 25rem;
    }

    input[type="range"]::-webkit-slider-runnable-track {
    background-color: #88FF3F;
    border-radius: 0.5rem;
    height: 0.5rem;
    }

    input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: -12px; /* Centers thumb on the track */
    background-color: #88FF3F;
    border-radius: 7px;
    height: 2rem;
    width: 1rem;
    }


    input[type="range"]::-moz-range-track {
    background-color: #88FF3F;
    border-radius: 0.5rem;
    height: 0.5rem;
    }

    input[type="range"]::-moz-range-thumb {
    background-color: #808080;
    border: none; /*Removes extra border that FF applies*/
    border-radius: 7px;
    height: 2rem;
    width: 1rem;
    }

    input[type="range"]:focus::-moz-range-thumb{
    outline: 3px solid #808080;
    outline-offset: 0.125rem;
    }

    label {
        font-size: 20px;
            font-family: "Space Mono";

    }

    .dropdown {
        width: 200px;
        height: 56px;
        padding: 5px;
        background:#121212;
        color: #88FF3F;
        border: 2px solid #88FF3F;
        font-size: 20px;
        border-radius: 5px;
            font-family: "Space Mono";

    }
    
    input {
        width: 100%;    
        height: 55px;
        padding: 10px;
        font-size: 20px;
        background-color: transparent;
        border: 1px solid #88FF3F;
        border-radius: 10px;
        color: #88FF3F;
            font-family: "Space Mono";

    }

    input::placeholder{
        color: #88FF3F;
            font-family: "Space Mono";

    }


    .dropdown:focus{
        color: #88FF3F;
            font-family: "Space Mono";

    }

    .button-group {
        display: flex;
        gap: 15px;
    }

    .buttonBack{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

`;
