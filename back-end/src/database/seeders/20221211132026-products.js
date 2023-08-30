'use strict';

require('dotenv').config();

// const port = process.env.API_PORT || 3001;

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Cerveja Heineken barril 5 litros',
        price: 94.99,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_938580-MLU47592238550_092021-F.jpg'
      },
      {
        name: 'Cerveja Colorado Indica Garrafa 600ml',
        price: 6.99,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_974954-MLU47592247535_092021-F.jpg'
      },
      {
        name: 'Cerveja Vixnu Colorado Garrafa 600ml',
        price: 6.99,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_674295-MLU47593215973_092021-F.jpg'
      },
      {
        name: 'Cerveja Mexicana Corona Garrafa 330ml Com 6 Unidades',
        price: 38.95,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_759659-MLB52868604184_122022-F.jpg'
      },
      {
        name: 'Cerveja Munich Helles Puro Malte Spaten Lata 350ml- 12 Und ',
        price: 52.69,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_763721-MLB48082480098_102021-F.jpg'
      },
      {
        name: 'Cerveja Belga Witbier Hoegaarden Long Neck 330ml',
        price: 5,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_683544-MLU47593752053_092021-F.jpg'
      },
      {
        name: 'Pack cerveja chopp zero 350mL 12 unidades Brahma',
        price: 45.49,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_607547-MLU69444026377_052023-F.jpg'
      },
      {
        name: 'Cerveja Colorado Demoiselle Garrafa 600ml',
        price: 6.99,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_955847-MLA50173080583_062022-F.jpg'
      },
      {
        name: 'Cerveja Mexicana Corona Garrafa 330ml Com 6 Unidades',
        price: 32.39,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_759659-MLB52868604184_122022-F.jpg'
      },
      {
        name: 'Cerveja Coronita Extra Garrafa 210ml Com 6 Unidades',
        price: 22.89,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_762111-MLB52370892741_112022-F.jpg'
      },
      {
        name: 'Cerveja Faxe Belgian Witbier lata 500ml',
        price: 18.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_688242-MLU47584200309_092021-F.jpg'
      },
      {
        name: 'Cerveja Puro Malte Lager Premium Com 8 Latas 269ml Heineken',
        price: 28.7,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_894178-MLB52990057469_122022-F.jpg'
      },
      {
        name: 'Cerveja Duplo Malte Brahma 310ml 15 Unidades',
        price: 37.49,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_684340-MLB49938847950_052022-F.jpg'
      },
      {
        name: 'Cerveja Americana Goose Island Midway Long Neck 355ml',
        price: 6.29,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_657896-MLA49201160307_022022-F.jpg'
      },
      {
        name: 'Cerveja Colorado Cauim Garrafa 600ml',
        price: 13.99,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_708918-MLU47592131773_092021-F.jpg'
      },
      {
        name: '12 Cerveja Amstel Lager Ultra 269ml Sem Glúten 71cal Lowcarb',
        price: 34.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_609044-MLB48608535996_122021-F.jpg'
      },
      {
        name: 'Cerveja escura stout Draught 440mL Guinness',
        price: 39.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_861658-MLU48285780938_112021-F.jpg'
      },
      {
        name: 'Cerveja Lager Lata Budweiser 310ml 15 Unidades',
        price: 38.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_671329-MLB49938848523_052022-F.jpg'
      },
      {
        name: 'Pack Cerveja Stella Artois Lata 269ml - 08 Unidades',
        price: 25.09,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_704968-MLB50235049461_062022-F.jpg'
      },
      {
        name: 'Pack Cerveja Witbier  Hoegaarden Lata 269ml Com 8 Unidades',
        price: 31.99,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_798866-MLB50582010950_072022-F.jpg'
      },
      {
        name: 'Cerveja Coronita Extra Garrafa 210ml Com 6 Unidades',
        price: 26.95,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_762111-MLB52370892741_112022-F.jpg'
      },
      {
        name: 'Pack Cerveja Budweiser 330 Ml Long Neck Com 6 Unidades',
        price: 29.95,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_758537-MLU70216071933_062023-F.jpg'
      },
      {
        name: 'Cerveja Americana IPA Goose Island Long Neck 355ml',
        price: 9.99,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_714852-MLU47592205647_092021-F.jpg'
      },
      {
        name: 'Cerveja Cerpa Export Garrafa 350ml',
        price: 12,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_740166-MLU47592142788_092021-F.jpg'
      },
      {
        name: 'Brahma Duplo Malte Tostada 350ml - Pack C/12',
        price: 50.28,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_615719-MLU70400144596_072023-F.jpg'
      },
      {
        name: 'Pack Cerveja Alemã Becks Garrafa 330ml Com 6 Unidades',
        price: 30.59,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_832148-MLB53286484405_012023-F.jpg'
      },
      {
        name: 'Cerveja Budweiser American Lager lata 350ml 12 u',
        price: 40.69,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_602568-MLA51339720493_082022-F.jpg'
      },
      {
        name: 'Cerveja Argentina Bohemiam Pilsener Patagonia Garrafa 740ml',
        price: 13.99,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_977803-MLU47592254553_092021-F.jpg'
      },
      {
        name: 'Cerveja Pabst Blue Ribbon 350ml Pack 12 Latas',
        price: 59.99,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_671524-MLB45335424486_032021-F.jpg'
      },
      {
        name: 'Cerveja Patagonia Amber Lager Gfa 355ml Com 12 Unidades',
        price: 0,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_908603-MLU70620654024_072023-F.jpg'
      },
      {
        name: 'Cerveja Heineken Premium Puro Malte 350ml Caixa 12 Unidades',
        price: 48.49,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_991323-MLU69483826876_052023-F.jpg'
      },
      {
        name: 'Cerveja Brahma Duplo Malte Black 350ml Com 12 Unidades',
        price: 45.29,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_626428-MLU70885145203_082023-F.jpg'
      },
      {
        name: 'Pack Cerveja Heineken Zero Álcool Garrafa 330ml - 6 Unidades',
        price: 35.94,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_641603-MLB53099883624_122022-F.jpg'
      },
      {
        name: 'Cerveja Fruitbier Morango 355ml Barbarella',
        price: 9.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_857581-MLA46040476097_052021-F.jpg'
      },
      {
        name: 'Pack Cerveja Pilsen Skol Lata 18 Unidades 350ml Cada Embalagem Econômica',
        price: 49.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_734814-MLU50019194258_052022-F.jpg'
      },
      {
        name: 'Cerveja Schornstein Weiss 500ml',
        price: 11.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_935556-MLA53130199841_012023-F.jpg'
      },
      {
        name: 'Cerveja Colorado Ribeirão 600ml Com 12 Unidades',
        price: 83.89,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_874756-MLB54717361738_032023-F.jpg'
      },
      {
        name: 'Cerveja Argentina Amber Lager Patagonia Garrafa 740ml',
        price: 13.99,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_755637-MLU47592148774_092021-F.jpg'
      },
      {
        name: 'Cerveja Easy Ipa Roleta Russa 350ml',
        price: 6.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_702160-MLB49119474186_022022-F.jpg'
      },
      {
        name: 'Cerveja Spaten Munich Helles Lata 350ml - Pack Com 12 Unid',
        price: 43.19,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_615869-MLB49576169488_042022-F.jpg'
      },
      {
        name: 'Cerveja Schornstein IPA com 500mL',
        price: 17.95,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_848561-MLA53089537206_122022-F.jpg'
      },
      {
        name: 'Cerveja Leuven Pilsen Celebration 500ml',
        price: 11.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_730811-MLU48286163841_112021-F.jpg'
      },
      {
        name: 'Barril Cerveja Paulaner Hefe Weissbier Naturtrub 5 Litros ',
        price: 159.6,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_657986-MLB44389702242_122020-F.jpg'
      },
      {
        name: 'Cerveja Heineken premium garrafa 6 long neck 330ml',
        price: 34.95,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_869140-MLB48330631029_112021-F.jpg'
      },
      {
        name: 'Cerveja Heineken Barril 5 Litros',
        price: 94.99,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_635512-MLB53099839661_122022-F.jpg'
      },
      {
        name: 'Kit Cerveja Wienbier 58 Red Wine 710ml (12 Un)',
        price: 139.99,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_721118-MLB54459762146_032023-F.jpg'
      },
      {
        name: 'Pack Cerveja Heineken Long Neck Garrafa 330ml - 6 Unidades',
        price: 38.94,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_614400-MLB50235106026_062022-F.jpg'
      },
      {
        name: 'Cerveja Amstel Premium Lager Puro Malte  Lata 350ml 12 Und',
        price: 37.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_668386-MLB51812972321_102022-F.jpg'
      },
      {
        name: 'Brahma Duplo Malte Trigo 350ml',
        price: 40.89,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_870611-MLU70355214504_072023-F.jpg'
      },
      {
        name: 'Cerveja Brewdog Punk Ipa Lt 500ml',
        price: 37.97,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_713945-MLB48446999166_122021-F.jpg'
      },
      {
        name: 'Cerveja Colorado Ribeirão 600ml  Com 12 Unidades',
        price: 83.89,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_946056-MLB54717361702_032023-F.jpg'
      },
      {
        name: 'Cerveja Patagonia Amber Lager Gfa 355ml Com 12 Unidades',
        price: 38.89,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_655836-MLB54716148997_032023-F.jpg'
      },
      {
        name: 'Cerveja Antarctica Subzero Pilsen Lata 350 Ml 18 Unidades',
        price: 44.99,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_733567-MLU70343473660_072023-F.jpg'
      },
      {
        name: 'Pack Cerveja Stella Artois Lata 269ml - 08 Unidades',
        price: 25.09,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_704968-MLB50235049461_062022-F.jpg'
      },
      {
        name: 'Pack Cerveja Burguesa Pilsen 350ml Com 12 Unidades',
        price: 30.99,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_802889-MLB52022966214_102022-F.jpg'
      },
      {
        name: 'Cerveja Brahma Duplo Malte Trigo 350ml Com 12 Unidades',
        price: 57.49,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_796492-MLB70787297332_082023-F.jpg'
      },
      {
        name: 'Cerveja Praya Witbier 600ml',
        price: 13.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_637586-MLU47584221756_092021-F.jpg'
      },
      {
        name: 'Cerveja Colorado Ribeirão 600ml  Com 12 Unidades',
        price: 83.89,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_946056-MLB54717361702_032023-F.jpg'
      },
      {
        name: 'Cerveja Colorado Ribeirão 600ml Com 12 Unidades',
        price: 83.89,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_874756-MLB54717361738_032023-F.jpg'
      },
      {
        name: 'Cerveja Brahma Duplo Malte Tostada 350ml Com 12 Unidades',
        price: 45,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_889133-MLB70818500975_082023-F.jpg'
      },
      {
        name: 'Cerveja Michelob Ultra Long Neck 330ml Com 6 Unidades',
        price: 31.15,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_927171-MLB52043465181_102022-F.jpg'
      },
      {
        name: 'Cerveja Colorado Ribeirão Lager Lata 350ml',
        price: 6.49,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_807286-MLU47592289379_092021-F.jpg'
      },
      {
        name: 'Cerveja Budweiser Zero 350ml (8 Unidades)',
        price: 49.4,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_803661-MLB53087689194_122022-F.jpg'
      },
      {
        name: 'Cerveja Mexicana Corona Garrafa 330ml Com 6 Unidades',
        price: 32.39,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_759659-MLB52868604184_122022-F.jpg'
      },
      {
        name: 'Cerveja Roleta Russa EASY IPA Sem Álcool - Lata 350 ML',
        price: 6.71,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_665450-MLB48655218474_122021-F.jpg'
      },
      {
        name: 'Kit Com 12 Cerveja Roleta Russa Easy Ipa S/ Alcool - Lata 35',
        price: 78.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_938476-MLB54247739147_032023-F.jpg'
      },
      {
        name: 'Cerveja Apa Roleta Russa 500ml',
        price: 16.05,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_703363-MLB49938869435_052022-F.jpg'
      },
      {
        name: 'Cerveja Spaten Puro Malte 355 Ml - 6 Unidades',
        price: 28.59,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_791837-MLB47579878971_092021-F.jpg'
      },
      {
        name: 'Cerveja Wals Session One Way 600ml',
        price: 11.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_688893-MLU47592200670_092021-F.jpg'
      },
      {
        name: 'Cerveja Unicorn Hoppy Lager 350ml',
        price: 6.99,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_850273-MLU71314217773_082023-F.jpg'
      },
      {
        name: "Pack Cerveja Beck's Puro Malte Lata 350ml Com 8 Unidades   ",
        price: 33.99,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_996715-MLB49087630940_022022-F.jpg'
      },
      {
        name: 'Cerveja Fruitbier Framboesa 355ml Barbarella',
        price: 9.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_768864-MLA46040475445_052021-F.jpg'
      },
      {
        name: 'Cerveja Erdinger Weissbier 500ml',
        price: 26.98,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_891977-MLU47584266526_092021-F.jpg'
      },
      {
        name: 'Cerveja New England Ipa Lata 350ml Roleta Russa',
        price: 7.27,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_686796-MLB48688007554_122021-F.jpg'
      },
      {
        name: 'Cerveja Wals Belgian Witte One Way 600ml',
        price: 11.99,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_986673-MLU47592153737_092021-F.jpg'
      },
      {
        name: 'Cerveja Easy Ipa Roleta Russa 355ml',
        price: 7.29,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_927415-MLB47967375725_102021-F.jpg'
      },
      {
        name: 'Cerveja Roleta Russa IPA lata 350ml',
        price: 6.72,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_965447-MLU48382430412_112021-F.jpg'
      },
      {
        name: 'Cerveja Skol Pilsen lata 350ml 12 u',
        price: 33.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_998431-MLU48285940146_112021-F.jpg'
      },
      {
        name: 'Pack Cerveja Serramalte Lata 350ml Com 6 Unidades',
        price: 26.35,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_775763-MLU71187474660_082023-F.jpg'
      },
      {
        name: 'Kit copo Erdinger e cerveja Weissbier Erdinger 500ml',
        price: 64.59,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_970835-MLA54968384063_042023-F.jpg'
      },
      {
        name: 'Cerveja Brahma Duplo Malte Trigo 350ml Com 12 Unidades',
        price: 57.49,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_796492-MLB70787297332_082023-F.jpg'
      },
      {
        name: 'Cerveja Paulaner Lemon Radler Lata 500ml - Alemã',
        price: 23.89,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_678882-MLA51740086503_092022-F.jpg'
      },
      {
        name: 'Kit De Insumos Cerveja Artesanal Estilo Witbier 10 Litros',
        price: 119.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_965978-MLB47336650756_092021-F.jpg'
      },
      {
        name: 'Pack Cerveja Witbier  Hoegaarden Lata 269ml Com 8 Unidades',
        price: 39.95,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_798866-MLB50582010950_072022-F.jpg'
      },
      {
        name: 'Pack Cerveja Brahma Zero Lata 350ml Com 12 Unidades',
        price: 45.49,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_934566-MLB52230530174_112022-F.jpg'
      },
      {
        name: 'Kit Copo + Cerveja Budweiser 2 Unidades 330ml Cada',
        price: 18.89,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_839309-MLU50019125530_052022-F.jpg'
      },
      {
        name: 'Cerveja Colorado Appia Garrafa 600ml',
        price: 10.45,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_876814-MLU47592137811_092021-F.jpg'
      },
      {
        name: 'Cerveja Michelob Ultra Lata 350ml - Pack Com 8 Unidades',
        price: 43.82,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_902988-MLB48891896705_012022-F.jpg'
      },
      {
        name: 'Cerveja Dama Bier Stout 600ml',
        price: 22.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_672135-MLB50303753834_062022-F.jpg'
      },
      {
        name: 'Cerveja Michelob Ultra Long Neck 330ml - Pack Com 6 Unidades',
        price: 35.93,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_719695-MLB51830147320_102022-F.jpg'
      },
      {
        name: 'Cerveja Vedett Extra White 330ml',
        price: 17.99,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_702215-MLB44019724029_112020-F.jpg'
      },
      {
        name: 'Cerveja Hocus Pocus Magic Trap Belgian Golden Ale 500 Ml',
        price: 24.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_810980-MLB49644013498_042022-F.jpg'
      },
      {
        name: 'Cerveja Weihenstephaner Premium Bavaricum Dunkelweizen 500ml',
        price: 26.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_741485-MLU50970483862_082022-F.jpg'
      },
      {
        name: 'Cerveja Stella Artois 330ml - Pack Com 6 Unidades',
        price: 34.74,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_767063-MLB52336493746_112022-F.jpg'
      },
      {
        name: 'Cerveja Elementum Witbier 500ml',
        price: 17.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_940003-MLU71274127959_082023-F.jpg'
      },
      {
        name: 'Cerveja Hocus Pocus Alma Oat Lager 500ml',
        price: 20.28,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_754192-MLB49643759654_042022-F.jpg'
      },
      {
        name: 'Cerveja Caracu Lata 350ml Com 12 Unidades',
        price: 51.49,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_864983-MLU71133906271_082023-F.jpg'
      },
      {
        name: 'Cerveja Therezópolis Jade IPA 500ml',
        price: 11.99,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_666350-MLU50970614304_082022-F.jpg'
      },
      {
        name: 'Cerveja Brahma Duplo Malte Trigo 350ml Com 12 Unidades',
        price: 43.09,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_808094-MLB70786841062_082023-F.jpg'
      },
      {
        name: 'Cerveja Schornstein Pilsen com 500 mL',
        price: 11.9,
        url_image: 'https://http2.mlstatic.com/D_NQ_NP_981121-MLA53725489371_022023-F.jpg'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('products', null, {});
  }
};
