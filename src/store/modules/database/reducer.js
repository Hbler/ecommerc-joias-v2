import Product from "../../../models/Product";

// Source: https://www.Bwlgari.com/pt-br/joias/por-cole%C3%A7%C3%A3o/serpenti?sz=48
const productInfo = [
  [
    "Serpenti Viper Colar",
    51000,
    "colar",
    "Interpretação ultramoderna do famoso ícone de glamour e sedução da Bwlgari, Serpenti Viper encanta com seu design inovador e de ponta. Evocando a cobra mítica por meio de formas geométricas e elegantes, este pingente se envolve ao redor da corrente, encantando com a beleza preciosa das escamas e com a sinuosidade inconfundível da coleção Serpenti. Colar Serpenti Viper em ouro branco 18K e pavê de diamantes.",
    ["ouro branco", "cravejado"],
    ["./img/SVC-OB-C-01.png", "./img/SVC-OB-C-02.png"],
  ],
  [
    "Serpenti Viper Colar",
    47900,
    "colar",
    "Interpretação ultramoderna do famoso ícone de glamour e sedução da Bwlgari, Serpenti Viper encanta com seu design inovador e de ponta. Evocando a cobra mítica por meio de formas geométricas e elegantes, este pingente se envolve ao redor da corrente, encantando com a beleza preciosa das escamas e com a sinuosidade inconfundível da coleção Serpenti. Colar Serpenti Viper em ouro rosa 18K e pavê de diamantes.",
    ["ouro rosa", "cravejado"],
    ["./img/SVC-OR-C-01.png", "./img/SVC-OR-C-02.png"],
  ],
  [
    "Serpenti Viper Colar",
    30200,
    "colar",
    "Interpretação ultramoderna do famoso ícone de glamour e sedução da Bwlgari, Serpenti Viper encanta com seu design inovador e de ponta. Evocando a cobra mítica por meio de formas geométricas e elegantes, este pingente se envolve ao redor da corrente, encantando com a beleza preciosa das escamas e com a sinuosidade inconfundível da coleção Serpenti. Colar Serpenti Viper em ouro rosa 18K semicravejado com pavê de diamantes.",
    ["ouro rosa", "semi-cravejado"],
    ["./img/SVC-OR-SC-01.png", "./img/SVC-OR-SC-02.png"],
  ],
  [
    "Serpenti Viper Colar",
    141000,
    "colar",
    "Interpretação ultramoderna do famoso ícone de glamour e sedução da Bwlgari, Serpenti Viper encanta com seu design inovador e de ponta. Evocando a cobra mítica por meio de formas geométricas e elegantes, este colar se envolve ao redor do pescoço, encantando com a beleza preciosa das escamas e com a sinuosidade inconfundível da coleção Serpenti. Colar Serpenti Viper em ouro rosa 18K semicravejado com pavê de diamantes.",
    ["ouro rosa", "semi-cravejado"],
    ["./img/SVC-OR-SC-03.png", "./img/SVC-OR-SC-04.png"],
  ],
  [
    "Serpenti Viper Colar",
    296000,
    "colar",
    "Em um tributo a seu espírito animal, a Bwlgari captura o poder de sedução neste colar Serpenti, camuflando sensualidade e tentação com um design hipnótico. Sofisticada e glamourosa, esta joia se envolve no pescoço, encantando com a beleza preciosa de escamas e com a sinuosidade inconfundível da serpente.",
    ["ouro rosa", "cravejado"],
    ["./img/SVC-OR-C-03.png", "./img/SVC-OR-C-04.png"],
  ],
  [
    "Serpenti Viper Pulseira",
    194000,
    "pulseira",
    "Em um tributo a seu espírito animal, a Bwlgari captura o poder de sedução nesta pulseira Serpenti, camuflando sensualidade e tentação com um design hipnótico. Sofisticada e glamorosa, esta joia se envolve no pulso, encantando com a beleza preciosa de escamas e com a sinuosidade inconfundível da serpente. Pulseira Serpenti slim em ouro branco 18K completamente cravejada com diamantes.",
    ["ouro branco", "cravejado"],
    ["./img/SVP-OB-C-01.png", "./img/SVP-OB-C-02.png"],
  ],
  [
    "Serpenti Viper Pulseira",
    186000,
    "pulseira",
    "Em um tributo a seu espírito animal, a Bwlgari captura o poder de sedução nesta pulseira Serpenti, camuflando sensualidade e tentação com um design hipnótico. Sofisticada e glamourosa, esta joia se envolve no pulso, encantando com a beleza preciosa de escamas e com a sinuosidade inconfundível da serpente.",
    ["ouro rosa", "cravejado"],
    ["./img/SVP-OR-C-01.png", "./img/SVP-OR-C-02.png"],
  ],
  [
    "Serpenti Viper Pulseira",
    60000,
    "pulseira",
    "Interpretação ultramoderna do famoso ícone de glamour e sedução da Bwlgari, Serpenti Viper encanta com seu design inovador e de ponta. Evocando a cobra mítica por meio de formas geométricas e elegantes, esta pulseira se envolve ao redor do pulso, encantando com a beleza preciosa das escamas e com a sinuosidade inconfundível da coleção Serpenti. Pulseira Serpenti Viper em ouro rosa 18K semicravejada com pavê de diamantes.",
    ["ouro rosa", "semi-cravejado"],
    ["./img/SVP-OR-SC-01.png", "./img/SVP-OR-SC-02.png"],
  ],
  [
    "Serpenti Pulseira",
    269000,
    "pulseira",
    "Fundindo dois dos mais icônicos símbolos do design Bwlgari, a pulseira Serpenti une a sinuosidade da serpente com a contemporaneidade do tubogas. Evocando tanto as curvas sensuais de uma mulher quanto a forma fluida da serpente, a pulseira é produzida com as linhas atraentes da técnica tubogas, com uma maleabilidade flexível e tubular. Irradiando glamour e um estilo verdadeiramente individual, esta joia Serpenti é magnética e natural. Pulseira Serpenti Tubogas em ouro rosa 18K com diamantes cravejados.",
    ["ouro rosa", "semi-cravejado"],
    ["./img/SP-OR-SC-01.png", "./img/SP-OR-SC-02.png"],
  ],
  [
    "Serpenti Viper Pulseira",
    186000,
    "pulseira",
    "Em um tributo a seu espírito animal, a Bwlgari captura o poder de sedução nesta pulseira Serpenti, camuflando sensualidade e tentação com um design hipnótico. Sofisticada e glamourosa, esta joia se envolve no pulso destacando-se pela preciosa beleza das escamas e a inconfundível sinuosidade da serpente. Pulseira Serpenti em ouro amarelo 18K com pavê de diamantes.",
    ["ouro amarelo", "cravejado"],
    ["./img/SVP-OA-C-01.png", "./img/SVP-OA-C-02.png"],
  ],
  [
    "Serpenti Viper Anel",
    51000,
    "anel",
    "Em um tributo a seu espírito animal, a Bwlgari captura o poder de sedução no anel Serpenti, camuflando sensualidade e tentação com um design hipnótico. Sofisticada e glamourosa, a joia se envolve no dedo destacando-se pela preciosa beleza das escamas e a inconfundível sinuosidade da serpente. Anel Serpenti em ouro amarelo 18K com pavê de diamantes.",
    ["ouro amarelo", "cravejado"],
    ["./img/SVA-OA-C-01.png", "./img/SVA-OA-C-02.png"],
  ],
  [
    "Serpenti Viper Anel",
    51000,
    "anel",
    "Em um tributo a seu espírito animal, a Bwlgari captura o poder de sedução no anel Serpenti, camuflando sensualidade e tentação com um design hipnótico. Sofisticada e glamourosa, a joia se envolve no dedo, encantando com a beleza preciosa das escamas e com a sinuosidade inconfundível da serpente. Anel Serpenti em ouro rosa 18K com pavê de diamantes.",
    ["ouro rosa", "cravejado"],
    ["./img/SVA-OR-C-01.png", "./img/SVA-OR-C-02.png"],
  ],
  [
    "Serpenti Viper Anel",
    53000,
    "anel",
    "Em um tributo a seu espírito animal, a Bwlgari captura o poder de sedução no anel Serpenti, camuflando sensualidade e tentação com um design hipnótico. Sofisticada e glamourosa, a joia se envolve no dedo, encantando com a beleza preciosa das escamas e com a sinuosidade inconfundível da serpente. Anel Serpenti em ouro branco 18K cravejado com pavê de diamantes.",
    ["ouro branco", "cravejado"],
    ["./img/SVA-OB-C-01.png", "./img/SVA-OB-C-02.png"],
  ],
  [
    "Serpenti Viper Anel",
    20200,
    "anel",
    "Em um tributo a seu espírito animal, a Bwlgari captura o poder de sedução neste anel Serpenti Viper, camuflando sensualidade e tentação com um design hipnótico. Sofisticada e glamourosa, esta joia se envolve no dedo, encantando com a beleza preciosa de escamas e com a sinuosidade inconfundível da serpente.",
    ["ouro rosa", "semi-cravejado"],
    ["./img/SVA-OR-SC-01.png", "./img/SVA-OR-SC-02.png"],
  ],
  [
    "Serpenti Viper Anel",
    9850,
    "anel",
    "Em um tributo a seu espírito animal, a Bwlgari captura o poder de sedução nesta aliança de casamento Serpenti, camuflando sensualidade e tentação com um design hipnótico. Sofisticada e glamorosa, esta joia se envolve no dedo, encantando com a beleza preciosa de escamas e com a sinuosidade inconfundível da serpente. Aliança de casamento Serpenti em ouro branco 18K.",
    ["ouro branco", "sem pedras"],
    ["./img/SVA-OB-SP-01.png", "./img/SVA-OB-SP-02.png"],
  ],
];

//// Objects
// All Products
const Products = [];

/// Filling elements
let id = 0;
for (let p of productInfo) {
  Products.push(new Product(id, p[0], p[1], p[2], p[3], p[4], p[5]));
  id++;
}

export default function productsReducer(state = Products, { type, payload }) {
  switch (type) {
    case "@database/UPDATE":
      return [...state, ...payload];
    default:
      return state;
  }
}
