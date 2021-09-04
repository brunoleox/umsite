import { Box, Section1 } from "./styles.jsx";

export default function Section() {
  return (
    <Section1 id="section1">
      <Box>
        <div id="box">
          <span id="criando">criando</span>
          <div id="flip">
            <div>
              <div>visibilidade</div>
            </div>
            <div>
              <div>presença</div>
            </div>
            <div>
              <div>inovação</div>
            </div>
          </div>
          <span id="mensagem">gerando</span>
        </div>
      </Box>
      <Box style={{marginBottom: "130px"}}>        
          <div id="flip">
            <div>
              <div>resultados</div>
            </div>
            <div>
              <div>engajamento</div>
            </div>
            <div>
              <div>diferencial</div>
            </div>
          </div>        
      </Box>
    </Section1>
  );
}
