import styled from "styled-components";

export const StyledConfigurationPage = styled.main` 
    display: flex;
    flex-direction: column;
    align-items: flex-start;


    .config-container {
        border: 0px solid #00ff00;
        background-color: #111;

        h1{
            font-size: 100px;
        }

        p {
            font-family: "Space Mono";
            font-size: 35px;
            margin-bottom: 20px;
        }
    }

    .section {
        display: flex;
        margin: 30px 0;
        flex-direction: column;
        gap: 10px;
        
        h2 {
            font-size: 30px;
        }
        p{
            font-family: "Space Mono";
            font-size: 20px;
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
        height: 8px; /* Altura da barra */
        background: #aaa; /* Cor do fundo */
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
        font-size: 30px;
    }

    .dropdown {
        width: 200px;
        height: 56px;
        padding: 5px;
        background:#121212;
        color: #00ff00;
        border: 2px solid #00ff00;
        font-size: 25px;
        border-radius: 5px;
    }

    .dropdown:focus{
        color: #00ff00;
    }

    .button-group {
        display: flex;
        gap: 15px;
    }

    span{
        color:rgba(0, 255, 0, 0.7)
    }

    .buttonBack{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

`;
