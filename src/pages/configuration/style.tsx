import styled from "styled-components";

export const StyledConfigurationPage = styled.main` 

.config-container {
    max-width: 1500PX;
    margin: 100px auto;
    padding: 20px;
    border: 0px solid #00ff00;
    background-color: #111;
}

.title {
    font-size: 50px;
}

.subtitle {
    font-size: 30px;
    margin-bottom: 20px;
}

.section {
    margin: 30px 0;
}

h2 {
    font-size: 30px;
}

label {
    display: block;
    margin: 25px 0;
}

.button-group {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 10px 0;
}

.btn {
    background: black;
    color: #00ff00;
    border: 2px solid #00ff00;
    padding: 10px;
    font-size: 12px;
    cursor: pointer;
    border-radius: 5px;
}

.btn:hover {
    background: #00ff00;
    color: black;
}

.btn.large {
    width: 150px;
}

.btn.small {
    width: 80px;
}

.btn.danger {
    background: rgb(0, 0, 0);
    border-color: #88FF3F;
    color: #88FF3F;
}

.btn.danger:hover {
    background: #88FF3F;
    color: rgb(0, 0, 0);
}

.btn.back {
    width: 200px;
    margin-top: 20px;
}

.dropdown {
    width: 200px;
    padding: 5px;
    background: black;
    color: #00ff00;
    border: 2px solid #00ff00;
    font-size: 12px;
       border-radius: 5px;
}

.slider-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
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

/* Estiliza a barra de progresso */
.custom-slider::-webkit-slider-runnable-track {
    width: 50%;
    height: 8px;
    background: #88FF3F;
    border-radius: 4px;
}

/* Estiliza o "thumb" (botão que desliza) */
.custom-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 20px;
    background: rgb(0, 0, 0);
    border: 2px solid #ffffff;
    cursor: pointer;
    margin-top: -6px;
}

/* Firefox */
.custom-slider::-moz-range-track {
    width: 100%;
    height: 8px;
    background: #aaa;
    border-radius: 4px;
}

.custom-slider::-moz-range-thumb {
    width: 12px;
    height: 20px;
    background: black;
    border: 2px solid #aaa;
    cursor: pointer;
}

`
