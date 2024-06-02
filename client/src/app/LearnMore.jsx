import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Spoiler from "../Components/Spoiler";
import { ContentWrapper } from "./pages/components/ContentWrapper";
import { Header } from "./pages/components/Header";

const LearnMore = () => {
  return (
    <ContentWrapper style={styles.container}>
      <Header title="APRENDA MAIS" />

      <ScrollView style={styles.scrollView}>
        <View style={styles.contentWrapper}>
          <Spoiler
            title="Lixo reciclável"
            content="Lixo reciclável inclui materiais como papel, plástico, vidro e metal, que são transformados em novos produtos, como papel reciclado, plásticos, vidros e metais reutilizados. Antes de descartá-los, é necessário limpar os resíduos. Exemplos incluem jornais, garrafas plásticas, potes de vidro e latas de alumínio."
          />
          <Spoiler
            title="Lixo não reciclável"
            content="Lixo não reciclável inclui materiais que não podem ser reaproveitados, como restos de alimentos, fraldas descartáveis, espelhos quebrados, cerâmicas e bitucas de cigarro.  Exemplos de lixo não reciclável são cascas de frutas, papéis engordurados, lâmpadas incandescentes e esponjas de limpeza."
          />
          <Spoiler
            title="Vidros quebrados"
            content="Vidros quebrados, como copos, pratos, janelas e espelhos, são considerados lixo especial. Eles não devem ser misturados com outros recicláveis para evitar acidentes e contaminações. Antes de descartá-los, envolva-os em papel grosso ou coloque-os em caixas para evitar cortes. Esses vidros podem ser reciclados em novas garrafas, frascos e outros produtos de vidro."
          />
          <Spoiler
            title="Restos de materiais de construção"
            content="Restos de materiais de construção, como tijolos, concreto, cerâmica, azulejos e gesso, são considerados entulho. Eles não devem ser descartados com o lixo comum. É necessário encaminhá-los a pontos de coleta específicos ou contratar serviços de caçambas. Esses materiais podem ser reciclados e reutilizados em novas obras, pavimentações e na fabricação de novos produtos de construção."
          />
          <Spoiler
            title="Lixo eletrônico"
            content="Lixo eletrônico inclui aparelhos como celulares, computadores, televisores e baterias. Esses itens contêm componentes tóxicos e valiosos que não devem ser descartados no lixo comum. Em vez disso, leve-os a pontos de coleta específicos ou programas de reciclagem de eletrônicos. Esses materiais podem ser reciclados para recuperar metais, plásticos e outros componentes."
          />
          <Spoiler
            title="Ciclo do lixo"
            content="O ciclo do lixo começa com a geração dos resíduos, que são separados em recicláveis, orgânicos e não recicláveis. Em seguida, os resíduos são coletados e transportados para locais apropriados. Os recicláveis são enviados para centros de triagem e reciclagem, onde são processados e transformados em novos produtos. Os resíduos orgânicos podem ser compostados para virar adubo. Já o lixo não reciclável é encaminhado para aterros sanitários ou incineradores. Este ciclo ajuda a reduzir o impacto ambiental e a promover a sustentabilidade."
          />
        </View>
      </ScrollView>
    </ContentWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "white",
    width: "100%",
  },
  contentWrapper: {
    gap: 15,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
});

export default LearnMore;
