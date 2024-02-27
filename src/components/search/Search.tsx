import {
  Backdrop,
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState, useEffect } from "react";

function Search() {
  const theme = useTheme();

  const [searchTerm, setSearchTerm] = useState("");
  const [translations, setTranslations] = useState<string[]>([]);
  const [backdropState, setBackdropState] = useState(false);

  useEffect(() => {
    const allTranslations = [
      //Greetings
      "Hello - Hei",
      "Hi - Moi",
      "Good morning - Hyvää huomenta",
      "Good afternoon - Hyvää iltapäivää",
      "Good evening - Hyvää iltaa",
      "Good night - Hyvää yötä",
      "Goodbye - Näkemiin",
      "See you later - Nähdään myöhemmin",
      "See you soon - Nähdään pian",
      "Take care - Ole varovainen",
      "Have a good day - Hyvää päivänjatkoa",
      "Have a good trip - Hyvää matkaa",
      "Welcome - Tervetuloa",
      "How are you? - Mitä kuuluu?",
      "I'm fine, thank you - Kiitos hyvää",
      "Thank you - Kiitos",
      "You're welcome - Ole hyvä",
      "Excuse me - Anteeksi",
      "I'm sorry - Olen pahoillani",
      "Bless you - Terveydeksi",
      "Congratulations - Onneksi olkoon",
      "Happy birthday - Hyvää syntymäpäivää",
      "Happy new year - Hyvää uutta vuotta",
      "Merry Christmas - Hyvää joulua",
      "Good luck - Onnea",
      "Cheers - Kippis",
      "Bon appétit - Hyvää ruokahalua",
      "Get well soon - Pikaista paranemista",
      "I love you - Rakastan sinua",
      "I miss you - Minulla on ikävä sinua",
      "I need you - Tarvitsen sinua",
      "I want you - Haluan sinut",
      "I like you - Pidän sinusta",
      "I hate you - Vihaan sinua",
      "I'm happy - Olen onnellinen",
      "I'm sad - Olen surullinen",

      //Time
      "What time is it? - Paljonko kello on?",
      "It's one o'clock - Kello on yksi",
      "It's two o'clock - Kello on kaksi",
      "It's three o'clock - Kello on kolme",
      "It's four o'clock - Kello on neljä",
      "It's five o'clock - Kello on viisi",
      "It's six o'clock - Kello on kuusi",
      "It's seven o'clock - Kello on seitsemän",
      "It's eight o'clock - Kello on kahdeksan",
      "It's nine o'clock - Kello on yhdeksän",
      "It's ten o'clock - Kello on kymmenen",
      "It's eleven o'clock - Kello on yksitoista",
      "It's twelve o'clock - Kello on kaksitoista",
      "It's noon - Kello on keskipäivä",
      "It's midnight - Kello on keskiyö",
      "Morning - Aamu",
      "Afternoon - Iltapäivä",
      "Evening - Ilta",
      "Night - Yö",
      "Day - Päivä",
      "Week - Viikko",
      "Month - Kuukausi",
      "Year - Vuosi",
      "Today - Tänään",
      "Yesterday - Eilen",
      "Tomorrow - Huomenna",

      //Family
      "Family - Perhe",
      "Father - Isä",
      "Dad - Isä",
      "Mother - Äiti",
      "Mom - Äiti",
      "Parents - Vanhemmat",
      "Son - Poika",
      "Daughter - Tytär",
      "Brother - Veli",
      "Sister - Sisko",
      "Grandfather - Isoisä",
      "Grandpa - Isoisä",
      "Grandmother - Isoäiti",
      "Grandma - Isoäiti",
      "Grandparents - Isovanhemmat",
      "Uncle - Setä",
      "Aunt - Täti",
      "Cousin - Serkku",
      "Nephew - Veli poika",
      "Niece - Sisko tytär",
      "Husband - Mies",
      "Wife - Vaimo",
      "Spouse - Puoliso",

      //Colors
      "Color - Väri",
      "Red - Punainen",
      "Orange - Oranssi",
      "Yellow - Keltainen",
      "Green - Vihreä",
      "Blue - Sininen",
      "Purple - Violetti",
      "Pink - Pinkki",
      "Brown - Ruskea",
      "Black - Musta",
      "White - Valkoinen",
      "Gray - Harmaa",
      "Silver - Hopea",
      "Gold - Kulta",
      "Beige - Beige",
      "Rainbow - Sateenkaari",

      //Places
      "Place - Paikka",
      "Country - Maa",
      "City - Kaupunki",
      "Town - Kaupunki",
      "Village - Kylä",
      "Street - Katu",
      "Road - Tie",
      "Highway - Moottoritie",
      "Home - Koti",
      "House - Talo",
      "Apartment - Asunto",
      "Building - Rakennus",
      "School - Koulukoulu",
      "University - Yliopisto",
      "College - Korkeakoulu",
      "Library - Kirjasto",
      "Bookstore - Kirjakauppa",
      "Café - Kahvila",
      "Restaurant - Ravintola",
      "Bar - Baari",
      "Hotel - Hotelli",
      "Hospital - Sairaala",
      "Pharmacy - Apteekki",
      "Bank - Pankki",
      "Post office - Posti",
      "Store - Kauppa",
      "Supermarket - Supermarket",
      "Market - Markkinat",
      "Park - Puisto",
      "Beach - Ranta",
      "Lake - Järvi",
      "River - Joki",
      "Mountain - Vuori",
      "Forest - Metsä",
      "Garden - Puutarha",
      "Zoo - Eläintarha",
      "Museum - Museo",
      "Theater - Teatteri",
      "Cinema - Elokuvateatteri",
      "Stadium - Stadion",
      "Airport - Lentokenttä",
      "Train station - Rautatieasema",
      "Bus station - Linja-autoasema",

      //Food
      "Food - Ruoka",
      "Drink - Juoma",
      "Breakfast - Aamiainen",
      "Lunch - Lounas",
      "Dinner - Päivällinen",
      "Snack - Välipala",
      "Appetizer - Alkupala",
      "Main course - Pääruoka",
      "Dessert - Jälkiruoka",
      "Beverage - Juoma",
      "Water - Vesi",
      "Milk - Maito",
      "Tea - Tee",
      "Coffee - Kahvi",
      "Juice - Mehua",
      "Soda - Limonadi",
      "Beer - Olutta",
      "Wine - Viiniä",
      "Bread - Leipä",
      "Butter - Voi",
      "Cheese - Juusto",
      "Egg - Muna",
      "Rice - Riisi",
      "Pasta - Pasta",
      "Pizza - Pizza",

      //Clothing
      "Clothing - Vaatteet",
      "Shirt - Paita",
      "Blouse - Pusero",
      "T-shirt - T-paita",
      "Sweater - Neule",
      "Jacket - Takki",
      "Coat - Takki",
      "Dress - Mekko",
      "Skirt - Hame",
      "Pants - Housut",
      "Jeans - Farkut",
      "Shorts - Shortsit",
      "Socks - Sukat",
      "Shoes - Kengät",
      "Boots - Saappaat",
      "Hat - Hattu",
      "Gloves - Hanskat",
      "Scarf - Huivi",
      "Tie - Solmio",
      "Belt - Vyö",
      "Suit - Puku",
      "Dress - Puku",
      "Uniform - Univormu",
      "Swimsuit - Uimapuku",
      "Pajamas - Pyjama",
      "Underwear - Alusvaatteet",
      "Bra - Rintaliivit",
      "Panties - Pikkuhousut",
      "Sweatshirt - Collegepaita",
      "Raincoat - Sadetakki",
      "Umbrella - Sateenvarjo",
      "Sunglasses - Aurinkolasit",
      "Watch - Kello",
      "Jewelry - Korut",
      "Ring - Sormus",
      "Earrings - Korvakorut",
      "Necklace - Kaulakoru",
      "Bracelet - Rannekoru",
      "Anklet - Nilkkakoru",

      //Numbers
      "Zero - Nolla",
      "One - Yksi",
      "Two - Kaksi",
      "Three - Kolme",
      "Four - Neljä",
      "Five - Viisi",
      "Six - Kuusi",
      "Seven - Seitsemän",
      "Eight - Kahdeksan",
      "Nine - Yhdeksän",
      "Ten - Kymmenen",
      "Eleven - Yksitoista",
      "Twelve - Kaksitoista",
      "Thirteen - Kolmetoista",
      "Fourteen - Neljätoista",
      "Fifteen - Viisitoista",
      "Sixteen - Kuusitoista",
      "Seventeen - Seitsemäntoista",
      "Eighteen - Kahdeksantoista",
      "Nineteen - Yhdeksäntoista",
      "Twenty - Kaksikymmentä",

      //Days
      "Monday - Maanantai",
      "Tuesday - Tiistai",
      "Wednesday - Keskiviikko",
      "Thursday - Torstai",
      "Friday - Perjantai",
      "Saturday - Lauantai",
      "Sunday - Sunnuntai",
      "Week - Viikko",
      "Month - Kuukausi",
      "Year - Vuosi",
      "Today - Tänään",
      "Yesterday - Eilen",
      "Tomorrow - Huomenna",
      "Morning - Aamu",
      "Afternoon - Iltapäivä",
      "Evening - Ilta",
      "Night - Yö",
      "Day - Päivä",
      "Weekend - Viikonloppu",
      "Holiday - Loma",
      "Season - Vuodenaika",
      "Spring - Kevät",
      "Summer - Kesä",
      "Autumn - Syksy",
      "Winter - Talvi",
      "January - Tammikuu",
      "February - Helmikuu",
      "March - Maaliskuu",
      "April - Huhtikuu",

      // Phrase
      "How are you? - Mitä kuuluu?",
      "I'm fine, thank you - Kiitos hyvää",
      "What is your name? - Mikä sinun nimesi on?",
      "My name is... - Minun nimeni on...",
      "Where are you from? - Mistä olet kotoisin?",
      "I'm from... - Olen kotoisin...",
      "What time is it? - Paljonko kello on?",
      "Do you speak English? - Puhutko englantia?",
      "I don't understand - En ymmärrä",
      "I don't speak Finnish - En puhu suomea",
      "I don't know - En tiedä",
      "I'm sorry - Olen pahoillani",
      "I need help - Tarvitsen apua",
      "Can you help me? - Voitko auttaa minua?",
      "Where is the toilet? - Missä on vessa?",
      "How much is this? - Paljonko tämä maksaa?",
      "I would like... - Haluaisin...",
      "I want... - Haluan...",
      "I don't want... - En halua...",
      "I like... - Pidän...",
      "I don't like... - En pidä...",
      "I love... - Rakastan...",
      "I hate... - Vihaan...",
      "I am... - Olen...",
      "I'm not... - En ole...",
      "I can... - Voin...",
      "I can't... - En voi...",

      //Sentences
      "I am a student - Olen opiskelija",
      "I am a teacher - Olen opettaja",
      "I am a doctor - Olen lääkäri",
      "I am a nurse - Olen sairaanhoitaja",
      "I am a police officer - Olen poliisi",
      "I am a firefighter - Olen palomies",
      "I am a lawyer - Olen asianajaja",
      "I am a businessman - Olen liikemies",
      "I am a businesswoman - Olen liikenainen",
      "I am a chef - Olen kokki",
      "I am a waiter - Olen tarjoilija",
      "I am a waitress - Olen tarjoilija",
      "I am a pilot - Olen lentäjä",
      "I am a flight attendant - Olen lentoemäntä",
    ];

    const results = allTranslations.filter((translation) =>
      translation.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setTranslations(results);
  }, [searchTerm]);

  const handleSearch = () => {
    setBackdropState(true);
  };

  return (
    <Box
      sx={{
        // color: "white",
        pb: 5,
        display: "flex",
        height: "10vh",
        justifyContent: "space-between",
      }}
    >
      <TextField
        sx={{
          zIndex: 2,
          backgroundColor: "white",
          color: "black",
          borderRadius: "8px",
        }}
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <Button
        sx={{ backgroundColor: "white", color: "black", zIndex: 2 }}
        onClick={handleSearch}
      >
        Search
      </Button>
      <Backdrop open={backdropState} sx={{ zIndex: 1 }}>
        <Box>
          <Box
            sx={{
              height: "50vh",
              width: "90vw",
              backgroundColor: "white",
              color: "black",
              p: 2,
              border: "solid 3px #4eb6b0",
              borderRadius: "8px",

              overflowY: "scroll",
              overflowX: "hide",

              "&::-webkit-scrollbar": {
                width: "0.4em",
              },
              "&::-webkit-scrollbar-track": {
                background: theme.palette.background.default,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "black",
                borderRadius: "0 8px 8px 0",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: theme.palette.text.primary,
              },
            }}
          >
            {translations.map((translation, index) => (
              <Typography key={index}>{translation}</Typography>
            ))}
          </Box>
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              mt: 3,
              borderRadius: "8px",
            }}
            onClick={() => setBackdropState(false)}
          >
            Close Search
          </Button>
        </Box>
      </Backdrop>
    </Box>
  );
}

export default Search;
