import { RightCircleOutlined } from "@ant-design/icons";
import { Box, Section2 } from "../styles/styles.jsx";
export default function Section() {
  return (
    <Section2 id="section2">
      <Box>
        <div id="title">Nossos Serviços</div>
        <div id="servicos">
          <div>
            <div>
              <RightCircleOutlined />
              <span>CRIAÇÃO COMPLETA DE SITES</span>
            </div>
            <div>
              <RightCircleOutlined />
              <span>TRÁFEGO PARA REDES SOCIAIS</span>
            </div>
            <div>
              <RightCircleOutlined />
              <span>VISIBILIDADE NOS BUSCADORES</span>
            </div>
            <div>
              <RightCircleOutlined />
              <span>CRIAÇÃO DE E-MAILS PROFISSIONAIS</span>
            </div>
          </div>
        </div>
      </Box>
    </Section2>
  );
}
