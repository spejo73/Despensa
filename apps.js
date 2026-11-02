const ALIMENTOS = [
  // FRUTAS
  { n:"Manzana Golden", u:"despensa", a:10, dias:14, c:false }, { n:"Manzana Fuji", u:"despensa", a:10, dias:14, c:false },
  { n:"Manzana Granny Smith", u:"nevera", a:10, dias:14, c:false }, { n:"Plátano de Canarias", u:"despensa", a:4, dias:6, c:false },
  { n:"Naranja de zumo", u:"despensa", a:10, dias:14, c:false }, { n:"Naranja de mesa", u:"despensa", a:10, dias:14, c:false },
  { n:"Mandarina", u:"despensa", a:7, dias:10, c:false }, { n:"Limón", u:"despensa", a:10, dias:21, c:false },
  { n:"Lima", u:"nevera", a:7, dias:14, c:false }, { n:"Pomelo", u:"despensa", a:10, dias:14, c:false },
  { n:"Pera Conferencia", u:"nevera", a:6, dias:10, c:false }, { n:"Pera Williams", u:"nevera", a:6, dias:10, c:false },
  { n:"Kiwi verde", u:"nevera", a:7, dias:14, c:false }, { n:"Kiwi amarillo", u:"nevera", a:7, dias:14, c:false },
  { n:"Fresas", u:"nevera", a:3, dias:5, c:false }, { n:"Frambuesas", u:"nevera", a:2, dias:4, c:false },
  { n:"Arándanos", u:"nevera", a:5, dias:10, c:false }, { n:"Moras", u:"nevera", a:2, dias:4, c:false },
  { n:"Uva blanca", u:"nevera", a:4, dias:7, c:false }, { n:"Uva negra", u:"nevera", a:4, dias:7, c:false },
  { n:"Melón piel de sapo", u:"nevera", a:3, dias:7, c:false }, { n:"Melón cantalupo", u:"nevera", a:3, dias:7, c:false },
  { n:"Sandía", u:"nevera", a:3, dias:7, c:false }, { n:"Melocotón", u:"nevera", a:4, dias:7, c:false },
  { n:"Nectarina", u:"nevera", a:4, dias:7, c:false }, { n:"Paraguayo", u:"nevera", a:4, dias:7, c:false },
  { n:"Ciruela roja", u:"nevera", a:4, dias:7, c:false }, { n:"Ciruela negra", u:"nevera", a:4, dias:7, c:false },
  { n:"Cereza", u:"nevera", a:4, dias:7, c:false }, { n:"Picota", u:"nevera", a:4, dias:7, c:false },
  { n:"Albaricoque", u:"nevera", a:4, dias:7, c:false }, { n:"Piña", u:"despensa", a:5, dias:10, c:false },
  { n:"Mango", u:"nevera", a:4, dias:7, c:false }, { n:"Papaya", u:"nevera", a:4, dias:7, c:false },
  { n:"Aguacate Hass", u:"nevera", a:2, dias:5, c:false }, { n:"Aguacate Bacon", u:"nevera", a:2, dias:5, c:false },
  { n:"Granada", u:"nevera", a:10, dias:21, c:false }, { n:"Higos", u:"nevera", a:2, dias:4, c:false },
  { n:"Brevas", u:"nevera", a:2, dias:4, c:false }, { n:"Caqui", u:"despensa", a:7, dias:14, c:false },
  { n:"Chirimoya", u:"nevera", a:3, dias:5, c:false }, { n:"Níspero", u:"nevera", a:4, dias:7, c:false },
  { n:"Maracuyá", u:"nevera", a:4, dias:7, c:false }, { n:"Pitahaya", u:"nevera", a:3, dias:5, c:false },
  { n:"Lichi", u:"nevera", a:3, dias:5, c:false }, { n:"Coco fresco", u:"despensa", a:7, dias:14, c:false },
  { n:"Physalis", u:"nevera", a:5, dias:10, c:false }, { n:"Membrillo", u:"nevera", a:14, dias:30, c:false },

  // VERDURAS Y HORTALIZAS
  { n:"Tomate rama", u:"nevera", a:5, dias:7, c:false }, { n:"Tomate pera", u:"nevera", a:5, dias:7, c:false },
  { n:"Tomate cherry", u:"nevera", a:4, dias:5, c:false }, { n:"Tomate kumato", u:"nevera", a:5, dias:7, c:false },
  { n:"Tomate verde", u:"nevera", a:5, dias:7, c:false }, { n:"Lechuga iceberg", u:"nevera", a:3, dias:5, c:false },
  { n:"Lechuga romana", u:"nevera", a:3, dias:5, c:false }, { n:"Lechuga batavia", u:"nevera", a:3, dias:5, c:false },
  { n:"Endivia", u:"nevera", a:3, dias:7, c:false }, { n:"Escarola", u:"nevera", a:3, dias:5, c:false },
  { n:"Espinacas frescas", u:"nevera", a:3, dias:5, c:false }, { n:"Acelgas", u:"nevera", a:3, dias:5, c:false },
  { n:"Kale", u:"nevera", a:3, dias:5, c:false }, { n:"Rúcula", u:"nevera", a:3, dias:5, c:false },
  { n:"Canónigos", u:"nevera", a:3, dias:5, c:false }, { n:"Cebolla dulce", u:"despensa", a:21, dias:30, c:false },
  { n:"Cebolla morada", u:"despensa", a:21, dias:30, c:false }, { n:"Cebolleta", u:"nevera", a:7, dias:10, c:false },
  { n:"Ajo morado", u:"despensa", a:60, dias:90, c:false }, { n:"Ajo blanco", u:"despensa", a:60, dias:90, c:false },
  { n:"Puerro", u:"nevera", a:7, dias:14, c:false }, { n:"Pimiento verde italiano", u:"nevera", a:6, dias:10, c:false },
  { n:"Pimiento verde padrón", u:"nevera", a:4, dias:7, c:false }, { n:"Pimiento rojo", u:"nevera", a:6, dias:10, c:false },
  { n:"Pimiento amarillo", u:"nevera", a:6, dias:10, c:false }, { n:"Pimiento choricero", u:"despensa", a:0, dias:30 },
  { n:"Guindilla", u:"nevera", a:7, dias:14 }, { n:"Zanahoria", u:"nevera", a:14, dias:21, c:false },
  { n:"Patata nueva", u:"despensa", a:14, dias:30, c:false }, { n:"Patata vieja", u:"despensa", a:21, dias:45, c:false },
  { n:"Patata roja", u:"despensa", a:14, dias:30, c:false }, { n:"Batata", u:"despensa", a:14, dias:30, c:false },
  { n:"Boniato", u:"despensa", a:14, dias:30, c:false }, { n:"Champiñón blanco", u:"nevera", a:3, dias:5 },
  { n:"Champiñón portobello", u:"nevera", a:3, dias:5 }, { n:"Seta ostra", u:"nevera", a:3, dias:5 },
  { n:"Seta shiitake", u:"nevera", a:4, dias:7 }, { n:"Níscalo", u:"nevera", a:3, dias:5 },
  { n:"Calabacín verde", u:"nevera", a:6, dias:10, c:false }, { n:"Calabacín blanco", u:"nevera", a:6, dias:10, c:false },
  { n:"Berenjena rayada", u:"nevera", a:6, dias:10, c:false }, { n:"Berenjena negra", u:"nevera", a:6, dias:10, c:false },
  { n:"Calabaza butternut", u:"despensa", a:14, dias:30, c:false }, { n:"Calabaza cacahuete", u:"despensa", a:14, dias:30, c:false },
  { n:"Judía verde plana", u:"nevera", a:4, dias:7 }, { n:"Judía verde redonda", u:"nevera", a:4, dias:7 },
  { n:"Guisantes frescos", u:"nevera", a:3, dias:5 }, { n:"Tirabeques", u:"nevera", a:3, dias:5 },
  { n:"Habas frescas", u:"nevera", a:3, dias:5 }, { n:"Brócoli", u:"nevera", a:4, dias:7, c:false },
  { n:"Coliflor", u:"nevera", a:4, dias:7, c:false }, { n:"Romancero", u:"nevera", a:4, dias:7, c:false },
  { n:"Repollo", u:"nevera", a:7, dias:14, c:false }, { n:"Lombarda", u:"nevera", a:7, dias:14, c:false },
  { n:"Col china", u:"nevera", a:5, dias:10, c:false }, { n:"Pak choi", u:"nevera", a:3, dias:5, c:false },
  { n:"Pepino", u:"nevera", a:5, dias:7, c:false }, { n:"Pepinillo", u:"nevera", a:7, dias:14 },
  { n:"Apio", u:"nevera", a:7, dias:14, c:false }, { n:"Espárrago verde", u:"nevera", a:4, dias:7 },
  { n:"Espárrago blanco", u:"nevera", a:4, dias:7 }, { n:"Alcachofa", u:"nevera", a:4, dias:7 },
  { n:"Mazorca de maíz", u:"nevera", a:3, dias:5 }, { n:"Remolacha", u:"nevera", a:7, dias:14 },
  { n:"Rábano", u:"nevera", a:5, dias:10 }, { n:"Jengibre fresco", u:"nevera", a:30, dias:90, c:false }
, // CARNES Y EMBUTIDOS
{ n:"Pechuga de pollo", u:"nevera", a:2, dias:3 }, { n:"Contramuslo de pollo", u:"nevera", a:2, dias:3 },
{ n:"Muslo de pollo", u:"nevera", a:2, dias:3 }, { n:"Alitas de pollo", u:"nevera", a:2, dias:3 },
{ n:"Pollo entero", u:"nevera", a:2, dias:3 }, { n:"Solomillo de ternera", u:"nevera", a:2, dias:3 },
{ n:"Entrecot de ternera", u:"nevera", a:2, dias:3 }, { n:"Filete de ternera", u:"nevera", a:2, dias:3 },
{ n:"Carne picada mixta", u:"nevera", a:2, dias:3 }, { n:"Carne picada de ternera", u:"nevera", a:2, dias:3 },
{ n:"Lomo de cerdo", u:"nevera", a:2, dias:3 }, { n:"Chuletas de cerdo", u:"nevera", a:2, dias:3 },
{ n:"Secreto de cerdo", u:"nevera", a:2, dias:3 }, { n:"Panceta fresca", u:"nevera", a:4, dias:10, c:false },
{ n:"Costillas de cerdo", u:"nevera", a:2, dias:3 }, { n:"Chuletillas de cordero", u:"nevera", a:2, dias:3 },
{ n:"Pierna de cordero", u:"nevera", a:2, dias:3 }, { n:"Pechuga de pavo", u:"nevera", a:2, dias:3 },
{ n:"Conejo troceado", u:"nevera", a:2, dias:3 }, { n:"Hígado de ternera", u:"nevera", a:1, dias:2 },
{ n:"Chorizo fresco", u:"nevera", a:7, dias:15, c:false }, { n:"Chorizo curado", u:"nevera", a:21, dias:60, c:false },
{ n:"Salchichón", u:"nevera", a:21, dias:45, c:false }, { n:"Jamón serrano", u:"nevera", a:21, dias:45, c:false },
{ n:"Jamón ibérico", u:"nevera", a:30, dias:90, c:false }, { n:"Jamón cocido extra", u:"nevera", a:4, dias:10, c:false },
{ n:"Bacon en lonchas", u:"nevera", a:7, dias:15, c:false }, { n:"Salchichas frescas", u:"nevera", a:3, dias:7 },
{ n:"Salchichas Frankfurt", u:"nevera", a:7, dias:15, c:false }, { n:"Morcilla", u:"nevera", a:7, dias:15, c:false },
{ n:"Cecina", u:"nevera", a:21, dias:60, c:false }, { n:"Salami", u:"nevera", a:21, dias:45, c:false },

// PESCADOS Y MARISCOS
{ n:"Merluza fresca", u:"nevera", a:1, dias:2 }, { n:"Salmón fresco", u:"nevera", a:1, dias:2 },
{ n:"Bacalao fresco", u:"nevera", a:1, dias:2 }, { n:"Atún fresco", u:"nevera", a:1, dias:2 },
{ n:"Sardinas frescas", u:"nevera", a:1, dias:2 }, { n:"Boquerones", u:"nevera", a:1, dias:2 },
{ n:"Lubina", u:"nevera", a:1, dias:2 }, { n:"Dorada", u:"nevera", a:1, dias:2 },
{ n:"Trucha", u:"nevera", a:1, dias:2 }, { n:"Rodaballo", u:"nevera", a:1, dias:2 },
{ n:"Lenguado", u:"nevera", a:1, dias:2 }, { n:"Rape", u:"nevera", a:1, dias:2 },
{ n:"Gambas frescas", u:"nevera", a:1, dias:2 }, { n:"Langostinos frescos", u:"nevera", a:1, dias:2 },
{ n:"Gambas cocidas", u:"nevera", a:2, dias:3 }, { n:"Mejillones", u:"nevera", a:1, dias:2 },
{ n:"Almejas", u:"nevera", a:1, dias:2 }, { n:"Berberechos", u:"nevera", a:1, dias:2 },
{ n:"Calamares", u:"nevera", a:1, dias:2 }, { n:"Chipirones", u:"nevera", a:1, dias:2 },
{ n:"Pulpo fresco", u:"nevera", a:1, dias:2 }, { n:"Sepia", u:"nevera", a:1, dias:2 },
{ n:"Sushi variado", u:"nevera", a:1, dias:1, c:false }, { n:"Salmón ahumado", u:"nevera", a:3, dias:7, c:false },
{ n:"Anchoas en aceite", u:"despensa", a:1, dias:365 }, { n:"Atún en aceite", u:"despensa", a:1, dias:365 },
{ n:"Atún al natural", u:"despensa", a:1, dias:365 }, { n:"Sardinas en lata", u:"despensa", a:1, dias:365 },
{ n:"Mejillones en lata", u:"despensa", a:1, dias:365 }, { n:"Berberechos en lata", u:"despensa", a:1, dias:365 },

// LÁCTEOS Y HUEVOS
{ n:"Leche entera", u:"nevera", a:4, dias:5, c:false }, { n:"Leche semidesnatada", u:"nevera", a:4, dias:5, c:false },
{ n:"Leche desnatada", u:"nevera", a:4, dias:5, c:false }, { n:"Leche sin lactosa", u:"nevera", a:4, dias:7, c:false },
{ n:"Leche UHT entera", u:"despensa", a:4, dias:90, c:false }, { n:"Leche condensada", u:"despensa", a:0, dias:365, c:false },
{ n:"Leche evaporada", u:"despensa", a:0, dias:365, c:false }, { n:"Bebida de soja", u:"despensa", a:4, dias:180, c:false },
{ n:"Bebida de avena", u:"despensa", a:4, dias:180, c:false }, { n:"Bebida de almendra", u:"despensa", a:4, dias:180, c:false },
{ n:"Bebida de arroz", u:"despensa", a:4, dias:180, c:false }, { n:"Bebida de coco", u:"despensa", a:4, dias:180, c:false },
{ n:"Bebida de avellana", u:"despensa", a:4, dias:180, c:false }, { n:"Yogur natural", u:"nevera", a:3, dias:14, c:false },
{ n:"Yogur griego", u:"nevera", a:3, dias:14, c:false }, { n:"Yogur desnatado", u:"nevera", a:3, dias:14, c:false },
{ n:"Yogur de sabores", u:"nevera", a:3, dias:14, c:false }, { n:"Yogur líquido", u:"nevera", a:3, dias:14, c:false },
{ n:"Queso curado", u:"nevera", a:21, dias:60, c:false }, { n:"Queso semicurado", u:"nevera", a:14, dias:30, c:false },
{ n:"Queso fresco de Burgos", u:"nevera", a:3, dias:7, c:false }, { n:"Queso tierno", u:"nevera", a:7, dias:15, c:false },
{ n:"Queso azul", u:"nevera", a:14, dias:30, c:false }, { n:"Queso parmesano", u:"nevera", a:21, dias:60, c:false },
{ n:"Queso mozzarella", u:"nevera", a:4, dias:10, c:false }, { n:"Queso rallado", u:"nevera", a:14, dias:30, c:false },
{ n:"Queso en lonchas", u:"nevera", a:7, dias:15, c:false }, { n:"Mantequilla", u:"nevera", a:21, dias:30 },
{ n:"Margarina", u:"nevera", a:14, dias:30 }, { n:"Nata líquida", u:"nevera", a:3, dias:7, c:false },
{ n:"Nata montada", u:"nevera", a:2, dias:5, c:false }, { n:"Huevos frescos M", u:"nevera", a:14, dias:21, c:false },
{ n:"Huevos frescos L", u:"nevera", a:14, dias:21, c:false }, { n:"Huevos de codorniz", u:"nevera", a:14, dias:21, c:false },
{ n:"Tofu firme", u:"nevera", a:3, dias:14, c:false }, { n:"Tofu sedoso", u:"nevera", a:3, dias:14, c:false },
{ n:"Seitán", u:"nevera", a:4, dias:10, c:false }, { n:"Tempeh", u:"nevera", a:3, dias:14, c:false },
{ n:"Hummus", u:"nevera", a:3, dias:7, c:false }, { n:"Queso vegano", u:"nevera", a:7, dias:21, c:false }
  , // DESPENSA Y CONSERVAS
  { n:"Arroz bomba", u:"despensa", a:0, dias:365 }, { n:"Arroz basmati", u:"despensa", a:0, dias:365 },
  { n:"Arroz integral", u:"despensa", a:0, dias:365 }, { n:"Arroz negro", u:"despensa", a:0, dias:365 },
  { n:"Arroz para sushi", u:"despensa", a:0, dias:365 }, { n:"Arroz redondo", u:"despensa", a:0, dias:365 },
  { n:"Pasta macarrones", u:"despensa", a:0, dias:365 }, { n:"Pasta espaguetis", u:"despensa", a:0, dias:365 },
  { n:"Pasta penne", u:"despensa", a:0, dias:365 }, { n:"Pasta fideos", u:"despensa", a:0, dias:365 },
  { n:"Placas de lasaña", u:"despensa", a:0, dias:365 }, { n:"Fideos de arroz", u:"despensa", a:0, dias:365 },
  { n:"Cuscús", u:"despensa", a:0, dias:365 }, { n:"Quinoa", u:"despensa", a:0, dias:365 },
  { n:"Harina de trigo", u:"despensa", a:0, dias:180 }, { n:"Harina de maíz", u:"despensa", a:0, dias:180 },
  { n:"Maicena", u:"despensa", a:0, dias:365 }, { n:"Levadura química", u:"despensa", a:0, dias:365 },
  { n:"Levadura fresca", u:"nevera", a:7, dias:14 }, { n:"Pan de molde", u:"despensa", a:6, dias:10 },
  { n:"Pan de hamburguesa", u:"despensa", a:3, dias:5 }, { n:"Pan de perrito", u:"despensa", a:3, dias:5 },
  { n:"Pan rallado", u:"despensa", a:0, dias:180 }, { n:"Lentejas pardinas", u:"despensa", a:0, dias:365 },
  { n:"Lentejas rojas", u:"despensa", a:0, dias:365 }, { n:"Garbanzos", u:"despensa", a:0, dias:365 },
  { n:"Alubias blancas", u:"despensa", a:0, dias:365 }, { n:"Alubias rojas", u:"despensa", a:0, dias:365 },
  { n:"Alubias negras", u:"despensa", a:0, dias:365 }, { n:"Soja texturizada", u:"despensa", a:0, dias:365 },
  { n:"Aceite de oliva virgen extra", u:"despensa", a:0, dias:365 }, { n:"Aceite de oliva 0,4", u:"despensa", a:0, dias:365 },
  { n:"Aceite de girasol", u:"despensa", a:0, dias:365 }, { n:"Aceite de coco", u:"despensa", a:0, dias:365 },
  { n:"Vinagre de vino", u:"despensa", a:0, dias:365 }, { n:"Vinagre balsámico", u:"despensa", a:0, dias:365 },
  { n:"Vinagre de manzana", u:"despensa", a:0, dias:365 }, { n:"Sal fina", u:"despensa", a:0, dias:365 },
  { n:"Sal gorda", u:"despensa", a:0, dias:365 }, { n:"Azúcar blanco", u:"despensa", a:0, dias:365 },
  { n:"Azúcar moreno", u:"despensa", a:0, dias:365 }, { n:"Sacarina", u:"despensa", a:0, dias:365 },
  { n:"Miel", u:"despensa", a:0, dias:365 }, { n:"Tomate triturado", u:"despensa", a:4, dias:365 },
  { n:"Tomate frito", u:"despensa", a:4, dias:365 }, { n:"Pimiento asado", u:"despensa", a:4, dias:365 },
  { n:"Mayonesa", u:"nevera", a:45, dias:180, c:false }, { n:"Kétchup", u:"nevera", a:45, dias:180 },
  { n:"Mostaza", u:"nevera", a:60, dias:180 }, { n:"Salsa de soja", u:"despensa", a:0, dias:365 },
  { n:"Salsa barbacoa", u:"nevera", a:30, dias:90 }, { n:"Salsa César", u:"nevera", a:14, dias:30 },
  { n:"Pesto", u:"nevera", a:7, dias:14 }, { n:"Café molido", u:"despensa", a:30, dias:180 },
  { n:"Café en grano", u:"despensa", a:30, dias:180 }, { n:"Café soluble", u:"despensa", a:60, dias:365 },
  { n:"Cacao en polvo", u:"despensa", a:60, dias:365 }, { n:"Cereales de maíz", u:"despensa", a:30, dias:180 },
  { n:"Copos de avena", u:"despensa", a:30, dias:180 }, { n:"Galletas María", u:"despensa", a:10, dias:180 },
  { n:"Mermelada de fresa", u:"nevera", a:21, dias:180 }, { n:"Mermelada de melocotón", u:"nevera", a:21, dias:180 },

  // ESPECIAS Y CONDIMENTOS
  { n:"Pimienta negra molida", u:"despensa", a:0, dias:365 }, { n:"Pimienta en grano", u:"despensa", a:0, dias:365 },
  { n:"Pimentón dulce", u:"despensa", a:0, dias:365 }, { n:"Pimentón picante", u:"despensa", a:0, dias:365 },
  { n:"Orégano", u:"despensa", a:0, dias:365 }, { n:"Tomillo", u:"despensa", a:0, dias:365 },
  { n:"Romero", u:"despensa", a:0, dias:365 }, { n:"Albahaca", u:"despensa", a:0, dias:365 },
  { n:"Laurel", u:"despensa", a:0, dias:365 }, { n:"Canela en polvo", u:"despensa", a:0, dias:365 },
  { n:"Nuez moscada", u:"despensa", a:0, dias:365 }, { n:"Comino", u:"despensa", a:0, dias:365 },
  { n:"Cúrcuma", u:"despensa", a:0, dias:365 }, { n:"Jengibre en polvo", u:"despensa", a:0, dias:365 },
  { n:"Curry en polvo", u:"despensa", a:0, dias:365 }, { n:"Azafrán", u:"despensa", a:0, dias:365 },

  // CONGELADOS
  { n:"Merluza congelada", u:"congelador", a:1, dias:180 }, { n:"Salmón congelado", u:"congelador", a:1, dias:180 },
  { n:"Gambas congeladas", u:"congelador", a:1, dias:180 }, { n:"Pollo congelado", u:"congelador", a:1, dias:180 },
  { n:"Hamburguesas congeladas", u:"congelador", a:1, dias:180 }, { n:"Nuggets de pollo", u:"congelador", a:1, dias:180 },
  { n:"Varitas de merluza", u:"congelador", a:1, dias:180 }, { n:"Guisantes congelados", u:"congelador", a:1, dias:365 },
  { n:"Judías verdes congeladas", u:"congelador", a:1, dias:365 }, { n:"Espinacas congeladas", u:"congelador", a:1, dias:365 },
  { n:"Wok de verduras", u:"congelador", a:1, dias:365 }, { n:"Patatas fritas congeladas", u:"congelador", a:1, dias:180 },
  { n:"Patatas gajo congeladas", u:"congelador", a:1, dias:180 }, { n:"Croquetas congeladas", u:"congelador", a:1, dias:180 },
  { n:"Pizza congelada", u:"congelador", a:1, dias:180 }, { n:"Lasaña congelada", u:"congelador", a:1, dias:180 },
  { n:"Hojaldre congelado", u:"congelador", a:1, dias:180 }, { n:"Masa quebrada congelada", u:"congelador", a:1, dias:180 },
  { n:"Helado de vainilla", u:"congelador", a:0, dias:180 }, { n:"Helado de chocolate", u:"congelador", a:0, dias:180 },

  // BEBIDAS
  { n:"Agua mineral", u:"despensa", a:0, dias:365 }, { n:"Agua con gas", u:"despensa", a:0, dias:365 },
  { n:"Refresco de cola", u:"despensa", a:0, dias:180 }, { n:"Refresco de naranja", u:"despensa", a:0, dias:180 },
  { n:"Refresco de limón", u:"despensa", a:0, dias:180 }, { n:"Cerveza rubia", u:"nevera", a:1, dias:90 },
  { n:"Cerveza sin alcohol", u:"nevera", a:1, dias:90 }, { n:"Vino tinto", u:"despensa", a:3, dias:365 },
  { n:"Vino blanco", u:"nevera", a:3, dias:365 }, { n:"Cava", u:"nevera", a:3, dias:365 },
  { n:"Zumo de naranja", u:"nevera", a:3, dias:7 }, { n:"Zumo de manzana", u:"nevera", a:3, dias:7 },
  { n:"Zumo de piña", u:"nevera", a:3, dias:7 }, { n:"Tónica", u:"despensa", a:0, dias:180 },
  { n:"Bitter", u:"despensa", a:0, dias:180 }, { n:"Batido de chocolate", u:"nevera", a:3, dias:7 }
];


let existencias = []; let siguienteId = 1; let seleccionActual = null;

function cargar(){ try { const raw = localStorage.getItem('despensa_v1'); if (raw) { const d = JSON.parse(raw); existencias = d.existencias || []; siguienteId = d.siguienteId || 1; } } catch(e) { existencias = []; siguienteId = 1; } }
function guardar(){ localStorage.setItem('despensa_v1', JSON.stringify({ existencias: existencias, siguienteId: siguienteId })); }
function hoy(){ return new Date(); }
function aFecha(s){ if (!s) return null; const [y,m,d] = s.split('-').map(Number); return new Date(y, m-1, d); }
function diasHasta(fecha){ if (!fecha) return null; const f = aFecha(fecha); const h = hoy(); f.setHours(0,0,0,0); h.setHours(0,0,0,0); return Math.round((f - h) / (1000*60*60*24)); }
function formatoFecha(s){ if (!s) return '—'; const f = aFecha(s); return f.toLocaleDateString('es-ES', { day:'numeric', month:'short', year:'numeric' }); }
function buscarAlimento(nombre){ return ALIMENTOS.find(a => a.n.toLowerCase() === nombre.toLowerCase()); }

function renderTodo(){ ['nevera','congelador','despensa'].forEach(renderPanel); renderRecetas(); renderTrucos(); renderAvisos(); }

function renderPanel(ubi){
  const panel = document.getElementById('panel-' + ubi); if (!panel) return;
  const items = existencias.filter(e => e.ubicacion === ubi && !e.gastado);
  if (items.length === 0){ panel.innerHTML = '<div style="text-align:center; color:#888; padding:20px;">No hay nada en ' + ubi + '.</div>'; return; }
  items.sort((a,b) => { const da = diasHasta(a.caduca); const db = diasHasta(b.caduca); if (da === null) return 1; if (db === null) return -1; return da - db; });
  let html = '';
  items.forEach(e => {
    const dias = diasHasta(e.caduca);
    let btnMover = ubi === 'congelador' ? '<button class="btn-mover" onclick="moverProducto(' + e.id + ', \'nevera\')">🔥</button>' : '<button class="btn-mover" onclick="moverProducto(' + e.id + ', \'congelador\')">❄️</button>';
    let fechaTxt = e.caduca ? '📅 ' + formatoFecha(e.caduca) : '';
    if (dias !== null) fechaTxt += ' · ' + (dias < 0 ? '❌ caducado' : (dias === 0 ? '⚠️ hoy' : '⏳ ' + dias + ' días'));
    html += '<div class="item"><div><div class="nombre">' + (e.abierto ? '🔓 ' : '📦 ') + e.nombre + '</div><div class="detalle">' + fechaTxt + '</div></div><div class="acciones">' + btnMover + (e.abierto ? '' : '<button class="btn-abrir" onclick="abrirProducto(' + e.id + ')">Abrir</button>') + '<button class="btn-gastar" onclick="gastarProducto(' + e.id + ')">Gastar</button></div></div>';
  });
  panel.innerHTML = html;
}

function renderAvisos(){
  const cont = document.getElementById('avisos-globales'); if (!cont) return;
  const proximos = existencias.filter(e => !e.gastado && e.caduca).map(e => ({ e, dias: diasHasta(e.caduca) })).filter(x => x.dias !== null && x.dias <= 3).sort((a,b) => a.dias - b.dias);
  if (proximos.length === 0){ cont.innerHTML = ''; return; }
  let html = '';
  proximos.forEach(x => {
    const clase = x.dias < 0 ? 'rojo' : 'ambar';
    const txt = x.dias < 0 ? 'Caducado' : (x.dias === 0 ? 'Caduca hoy' : 'Caduca en ' + x.dias + ' días');
    const alim = ALIMENTOS.find(a => a.n.toLowerCase() === x.e.nombre.toLowerCase());
    const esCongelable = alim ? (alim.c !== false) : true; 
    let sug = (x.dias >= 0 && x.e.ubicacion !== 'congelador') ? (esCongelable ? ' (Puedes congelarlo ❄️)' : ' (¡Gástalo pronto! No congela bien)') : '';
    html += '<div class="aviso ' + clase + '"><b>' + (x.dias < 0 ? '❌ ' : '⚠️ ') + txt + ':</b> ' + x.e.nombre + sug + '</div>';
  });
  cont.innerHTML = html;
}

function abrirProducto(id){
  const e = existencias.find(x => x.id === id); if (!e) return;
  const alim = buscarAlimento(e.nombre); const dias = alim && alim.a ? alim.a : 3;
  const nueva = new Date(hoy().getTime() + dias * 24*60*60*1000); const impresa = aFecha(e.caduca);
  let final = nueva; if (impresa && impresa < nueva) final = impresa;
  e.abierto = true; e.caduca = final.toISOString().slice(0,10); guardar(); renderTodo();
}

function gastarProducto(id){
  const e = existencias.find(x => x.id === id); if (!e) return;
  if (!confirm('¿Gastar ' + e.nombre + '?')) return;
  e.gastado = true; guardar(); renderTodo();
}

function moverProducto(id, destino){
  const e = existencias.find(x => x.id === id); if (!e) return;
  e.ubicacion = destino;
  if(destino === 'congelador'){
    const nueva = new Date(hoy().getTime() + 90 * 24*60*60*1000);
    e.caduca = nueva.toISOString().slice(0,10); e.abierto = false; 
  } else if (destino === 'nevera'){
    const nueva = new Date(hoy().getTime() + 2 * 24*60*60*1000);
    e.caduca = nueva.toISOString().slice(0,10);
  }
  guardar(); renderTodo();
}

function abrirModal(){
  seleccionActual = null; document.getElementById('in-nombre').value = ''; document.getElementById('in-caduca').value = ''; document.getElementById('in-ubi').value = 'nevera';
  document.getElementById('sugerencias').style.display = 'none'; document.getElementById('ocr-estado').style.display = 'none';
  document.getElementById('modal').classList.add('abierto');
}
function cerrarModal(){ document.getElementById('modal').classList.remove('abierto'); }

function alEscribirNombre(){
  const v = document.getElementById('in-nombre').value.trim().toLowerCase(); const cont = document.getElementById('sugerencias');
  if (v.length < 2){ cont.style.display = 'none'; return; }
  const matches = ALIMENTOS.filter(a => a.n.toLowerCase().includes(v)).slice(0, 8);
  if (matches.length === 0){ cont.innerHTML = '<div style="padding:10px; cursor:pointer;" onclick="elegirLibre()">Usar «' + document.getElementById('in-nombre').value + '» (nuevo)</div>'; cont.style.display = 'block'; return; }
  cont.innerHTML = matches.map(a => '<div style="padding:10px; cursor:pointer; border-bottom:1px solid #eee;" onclick="elegirAlimento(\'' + a.n.replace(/'/g, "\\'") + '\')">' + a.n + '</div>').join(''); cont.style.display = 'block';
}

function elegirAlimento(nombre){
  document.getElementById('in-nombre').value = nombre; document.getElementById('sugerencias').style.display = 'none';
  seleccionActual = buscarAlimento(nombre);
  if (seleccionActual){
    document.getElementById('in-ubi').value = seleccionActual.u;
    if (seleccionActual.dias && seleccionActual.dias > 0) {
      const f = new Date(hoy().getTime() + seleccionActual.dias * 24*60*60*1000);
      document.getElementById('in-caduca').value = f.toISOString().slice(0,10);
    }
  }
}
function elegirLibre(){ seleccionActual = null; document.getElementById('sugerencias').style.display = 'none'; }

function guardarProducto(){
  const nombre = document.getElementById('in-nombre').value.trim(); const caduca = document.getElementById('in-caduca').value;
  const ubi = document.getElementById('in-ubi').value;
  if (!nombre){ alert('Escribe un nombre'); return; }
  existencias.push({ id: siguienteId++, nombre: nombre, caduca: caduca, ubicacion: ubi, abierto: false, gastado: false });
  guardar(); cerrarModal(); renderTodo();
}

function renderRecetas(){
  const panel = document.getElementById('panel-recetas'); if (!panel) return;
  const abiertos = existencias.filter(e => !e.gastado).map(e => e.nombre.toLowerCase());
  const proximos = existencias.filter(e => !e.gastado).filter(e => { const d = diasHasta(e.caduca); return d !== null && d <= 5; }).map(e => e.nombre.toLowerCase());
  const todas = RECETAS.map(r => {
    const usa = r.ing.filter(i => abiertos.some(a => a.includes(i.toLowerCase()) || i.toLowerCase().includes(a)));
    const deCaducan = r.ing.filter(i => proximos.some(p => p.includes(i.toLowerCase()) || i.toLowerCase().includes(p)));
    return { r: r, usa: usa.length, deCaducan: deCaducan.length };
  }).sort((a,b) => b.deCaducan - a.deCaducan || b.usa - a.usa || a.r.n.localeCompare(b.r.n));

  let html = '<h2 style="margin:0 0 10px;color:#2c3e2e">Recetario</h2>';
  html += '<input type="text" id="buscador-receta" class="buscador" placeholder="🔍 Buscar receta..." onkeyup="filtrarRecetas(this.value)">';
  html += '<div id="lista-recetas">';
  todas.forEach(x => {
    let badge = x.deCaducan > 0 ? '<b style="color:#c62828; font-size:12px;">(¡Gastar pronto!)</b>' : (x.usa >= 2 ? '<b style="color:#2e7d32; font-size:12px;">(Puedes hacerlo)</b>' : '');
    html += '<div class="receta" data-nombre="' + x.r.n.toLowerCase() + '"><h3>' + x.r.n + ' ' + badge + '</h3><div class="meta">⏱ ' + x.r.t + ' min · tienes ' + x.usa + ' de ' + x.r.ing.length + ' ing.</div><div class="ing">' + x.r.ing.map(i => { const tiene = abiertos.some(a => a.includes(i.toLowerCase()) || i.toLowerCase().includes(a)); return '<span class="' + (tiene ? 'tiene' : 'falta') + '">' + (tiene ? '✓ ' : '· ') + i + '</span>'; }).join(' · ') + '</div><ol class="pasos">' + x.r.pasos.map(p => '<li>' + p + '</li>').join('') + '</ol></div>';
  });
  html += '</div>';
  panel.innerHTML = html;
}

function renderTrucos(){
  const panel = document.getElementById('panel-trucos'); if (!panel) return;
  let html = '<h2 style="margin:0 0 10px;color:#2c3e2e">Trucos de Cocina</h2>';
  html += '<input type="text" id="buscador-trucos" class="buscador" placeholder="🔍 Buscar truco..." onkeyup="filtrarTrucos(this.value)">';
  html += '<div id="lista-trucos">';
  TRUCOS.forEach(t => {
    html += '<div class="receta" data-nombre="' + (t.t + " " + t.c).toLowerCase() + '"><h3 style="font-size:16px;">' + t.t + '</h3><div class="meta">' + t.c + '</div><div class="pasos" style="padding-left:0; margin-top:4px;">' + t.d + '</div></div>';
  });
  html += '</div>';
  panel.innerHTML = html;
}

function filtrarRecetas(texto) { const filtro = texto.toLowerCase(); document.querySelectorAll('#lista-recetas .receta').forEach(r => { r.style.display = r.getAttribute('data-nombre').includes(filtro) ? 'block' : 'none'; }); }
function filtrarTrucos(texto) { const filtro = texto.toLowerCase(); document.querySelectorAll('#lista-trucos .receta').forEach(r => { r.style.display = r.getAttribute('data-nombre').includes(filtro) ? 'block' : 'none'; }); }

function extraerFechaInteligente(texto) {
  let t = texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const meses = {"ene":"01","feb":"02","mar":"03","abr":"04","may":"05","jun":"06","jul":"07","ago":"08","sep":"09","oct":"10","nov":"11","dic":"12"};
  for (let m in meses) { t = t.replace(new RegExp(m + "[a-z]*", "g"), meses[m]); }
  let d=null, m=null, a=null;
  let match = t.match(/(20\d{2})[\/\-\.\s](\d{1,2})[\/\-\.\s](\d{1,2})/);
  if (match) { a = match[1]; m = match[2].padStart(2,'0'); d = match[3].padStart(2,'0'); }
  if (!a) {
    match = t.match(/(\d{1,2})[\/\-\.\s](\d{1,2})[\/\-\.\s](20\d{2}|\d{2})/);
    if (match) { d = match[1].padStart(2,'0'); m = match[2].padStart(2,'0'); a = match[3]; }
  }
  if (a && a.length === 2) a = "20" + a;
  if (d && m && a && parseInt(d) <= 31 && parseInt(m) <= 12) return a + "-" + m + "-" + d;
  return null;
}

document.addEventListener('DOMContentLoaded', function(){
  let reloj = document.getElementById('fecha-hoy');
  if (reloj) reloj.textContent = hoy().toLocaleDateString('es-ES', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
  
  document.querySelectorAll('.tab').forEach(t => { t.addEventListener('click', () => { document.querySelectorAll('.tab').forEach(x => x.classList.remove('activa')); document.querySelectorAll('.panel').forEach(x => x.classList.remove('activa')); t.classList.add('activa'); document.getElementById('panel-' + t.dataset.tab).classList.add('activa'); }); });
  
  document.getElementById('fab-add').addEventListener('click', abrirModal); 
  document.getElementById('btn-cancelar').addEventListener('click', cerrarModal);
  document.getElementById('btn-guardar').addEventListener('click', guardarProducto); 
  document.getElementById('in-nombre').addEventListener('input', alEscribirNombre);

  function configurarMicro(btnId, targetInputId, esFecha) {
    document.getElementById(btnId).addEventListener('click', function(){
      if (!('webkitSpeechRecognition' in window)) { alert('Tu móvil no soporta dictado por voz.'); return; }
      const rec = new webkitSpeechRecognition(); rec.lang = 'es-ES'; rec.interimResults = false; rec.maxAlternatives = 1;
      rec.onstart = () => { this.textContent = '🔴'; this.style.background = '#ffcccc'; };
      rec.onresult = (e) => { 
        let txt = e.results[0][0].transcript;
        if (esFecha) {
          let f = extraerFechaInteligente(txt);
          if(f) document.getElementById(targetInputId).value = f;
          else alert("No entendí la fecha. Prueba a decir: 'doce de noviembre de 2024'.");
        } else { document.getElementById(targetInputId).value = txt; alEscribirNombre(); }
      };
      rec.onend = () => { this.textContent = '🎤'; this.style.background = '#f0f0f0'; };
      rec.start();
    });
  }
  configurarMicro('btn-micro-nombre', 'in-nombre', false); configurarMicro('btn-micro-fecha', 'in-caduca', true);

  function configurarCamara(btnId, inputFileId, esFecha) {
    document.getElementById(btnId).addEventListener('click', () => { document.getElementById(inputFileId).click(); });
    document.getElementById(inputFileId).addEventListener('change', function(e){
      if (!e.target.files.length) return;
      const file = e.target.files[0]; const estado = document.getElementById('ocr-estado');
      estado.style.display = 'block'; estado.textContent = '⏳ Analizando imagen...'; estado.style.color = '#3e5c42';
      Tesseract.recognize(file, 'spa').then(({ data: { text } }) => {
        const fechaEncontrada = extraerFechaInteligente(text);
        if (esFecha) {
          if (fechaEncontrada) { document.getElementById('in-caduca').value = fechaEncontrada; estado.textContent = '✅ Fecha detectada: ' + fechaEncontrada.split('-').reverse().join('/'); estado.style.color = '#2e7d32'; } 
          else { estado.textContent = '⚠️ No se ve bien la fecha.'; estado.style.color = '#c62828'; }
        } else {
          let lineas = text.split('\n').filter(l => l.trim().length > 2);
          if (lineas.length > 0) {
            let nombreDetectado = lineas[0].trim(); document.getElementById('in-nombre').value = nombreDetectado; alEscribirNombre(); 
            estado.textContent = '✅ Texto leído: ' + nombreDetectado; estado.style.color = '#2e7d32';
            if (fechaEncontrada) document.getElementById('in-caduca').value = fechaEncontrada;
          } else { estado.textContent = '⚠️ No se ha leído texto claro.'; estado.style.color = '#c62828'; }
        }
      }).catch(err => { estado.textContent = '❌ Error al procesar la imagen.'; estado.style.color = '#c62828'; });
    });
  }
  configurarCamara('btn-camara-nombre', 'in-foto-nombre', false); configurarCamara('btn-camara-fecha', 'in-foto-fecha', true);

  document.getElementById('btn-backup').addEventListener('click', function(){
    const data = localStorage.getItem('despensa_v1');
    if(!data || data === '{"existencias":[],"siguienteId":1}') { alert("La despensa está vacía."); return; }
    prompt("Copia este texto y guárdalo:", data);
  });
  document.getElementById('btn-restore').addEventListener('click', function(){
    const data = prompt("Pega aquí la copia de seguridad:");
    if(data){ try { JSON.parse(data); localStorage.setItem('despensa_v1', data); alert("¡Copia cargada!"); location.reload(); } catch(e) { alert("El texto no es válido."); } }
  });
  
  cargar(); 
  renderTodo();
});