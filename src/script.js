const birdingStart = new Date(2026, 4, 9, 0);

const expiredGray = "rgb(152, 152, 152)";

const funFacts = [
  "Did you know? The bee hummingbird is the smallest bird in the world, native to Cuba, and measures only about 5.5 centimeters in length.",
  "Did you know? Arctic terns have the longest annual migration of any bird, traveling about 25,000 miles from the Arctic to the Antarctic and back again.",
  "Did you know? The Andean condor is the heaviest bird of prey, weighing up to 27 pounds.",
  "Did you know? Social weaverbirds build huge communal nests that can be up to 100 years old and house over 400 birds.",
  "Did you know? The peregrine falcon is the fastest bird, capable of exceeding 200 mph in its dives.",
  "Did you know? The Wandering Albatross has the largest wingspan of any bird, measuring up to 11.8 feet.",
  "Did you know? Gentoo penguins are the fastest swimming birds, reaching speeds of 22 mph.",
  "Did you know? The oldest known wild bird is Wisdom, a Laysan albatross, who is over 70 years old and still lays eggs.",
  "Did you know? Some ducks sleep with one eye open to watch for predators while the others sleep more deeply.",
  "Did you know? The kiwi, native to New Zealand, is sometimes referred to as an honorary mammal due to its unusual traits like marrow-filled bones and hair-like feathers.",
  "Did you know? Hoatzin chicks have claws on their wings to help them climb and escape predators.",
  "Did you know? The flamingos pink color comes from the beta-carotene in their diet of crustaceans and plankton.",
  "Did you know? The sword-billed hummingbird has a beak longer than its body, unique among birds.",
  "Did you know? A group of owls is called a parliament, and a group of crows is known as a murder.",
  "Did you know? Crows are capable of recognizing human faces and can remember those who treat them well or poorly.",
  "Did you know? The red-billed quelea is the most common wild bird, with an estimated 1.5 billion breeding pairs.",
  "Did you know? The chicken is the closest living relative to the Tyrannosaurus Rex.",
  "Did you know? Parrots and some ravens can mimic human speech, with African Greys being particularly adept at learning hundreds of words.",
  "Did you know? Birds evolved from dinosaurs during the Mesozoic Era, about 150 million years ago.",
  "Did you know? A birds feathers weigh more than its skeleton, aiding in flight despite seeming bulky.",
  "Did you know? Albatrosses can sleep while flying, using dynamic soaring and slope soaring techniques to stay airborne.",
  "Did you know? The Wandering Albatross is known to pair for life, often living 50 years or longer with the same mate.",
  "Did you know? The Ostrich is the fastest bird on land, capable of running up to 43 mph.",
  "Did you know? Penguins can convert saltwater into freshwater through a gland near their eyes that filters out salt.",
  "Did you know? The hummingbirds heart can beat up to 1,260 times per minute during flight.",
  "Did you know? Ravens are among the few non-human species who can point with their beak to indicate an object to another individual.",
  "Did you know? A chicken in Japan holds the record for the longest tail feathers ever measured on a bird, spanning 34.7 feet.",
  "Did you know? Hummingbirds are the only birds that can fly backwards and are also capable of hovering.",
  "Did you know? The male frigatebird inflates a red balloon-like pouch on its chest to attract females during mating season.",
  "Did you know? Owls can rotate their necks up to 270 degrees in either direction.",
  "Did you know? The Bald Eagle builds the largest tree nest of any bird species, which can be over 9 feet wide and weigh up to three tons.",
  "Did you know? A group of flamingos is called a flamboyance.",
  "Did you know? The Common Swift spends almost its entire life in flight, landing only to breed.",
  "Did you know? Birds are the only living creatures that have feathers.",
  "Did you know? The only bird that can swim but not fly is the Penguin.",
  "Did you know? The Lyrebird can mimic more than 80 different species of birds and even replicate man-made sounds like chainsaws and camera shutters.",
  "Did you know? The turkey vulture has a highly developed sense of smell and can detect carrion from over a mile away.",
  "Did you know? The blue jay uses its remarkable memory to recall the locations of thousands of food items it has cached away for later.",
  "Did you know? The Harpy Eagle has the largest talons of any living eagle and primarily preys on tree-dwelling mammals like monkeys and sloths.",
  "Did you know? The Oilbird is one of the few species that uses echolocation to navigate in complete darkness.",
  "Did you know? The Cassowary, native to New Guinea and Australia, has a helmet-like casque on its head that may amplify its vocalizations.",
  "Did you know? Hummingbirds are the only birds that can fly both forwards and upside down.",
  "Did you know? The Bee Hummingbird weighs less than a penny, making it the lightest bird in the world.",
  "Did you know? In ancient Greece, pigeons were used to deliver the results of the Olympic games.",
  "Did you know? The oldest parrot ever recorded was a Major Mitchells cockatoo named Cookie, who lived to be 82 years old.",
  "Did you know? The Marsh Warbler can mimic more than 80 different sounds, including other bird songs and man-made noises.",
  "Did you know? Some bird species, like the Arctic Tern, spend their entire lives at sea, only coming to land to breed.",
  "Did you know? The Greater Honeyguide bird has a mutual relationship with humans, guiding them to beehives for the honey while it feeds on the beeswax.",
  "Did you know? Vultures have stomach acid so corrosive that they can safely digest diseased carcasses without getting sick.",
  "Did you know? The American Goldfinch changes the color of its feathers from bright yellow in summer to a dull brown in winter.",
  "Did you know? The bowerbird from Australia and New Guinea builds elaborate structures decorated with brightly colored objects to attract mates.",
  "Did you know? Birds are the only animals that lay colored eggs, ranging from blue to green, red, and speckled patterns.",
  "Did you know? The Nightingale is famous not only for its beautiful song but also for its ability to sing more than 300 different melodies.",
  "Did you know? The Kori Bustard, found in Africa, is the heaviest flying bird, with males weighing up to 40 pounds.",
  "Did you know? The only bird known to fly backwards is the hummingbird.",
  "Did you know? Flamingos bend their legs at the ankle, not the knee, and what appears to be the birds knee is actually its ankle joint.",
  "Did you know? Peacocks are actually male peafowl; females are known as peahens, and together they are called peafowl.",
  "Did you know? The Peregrine Falcon can catch its prey in mid-air and has been recorded diving at speeds of over 240 miles per hour.",
  "Did you know? Crows are among the most intelligent birds, capable of using tools and solving complex problems.",
  "Did you know? The Malleefowl from Australia builds enormous mounds of vegetation to incubate its eggs, relying on the heat from decomposing materials.",
  "Did you know? Emperor Penguins are the tallest and heaviest of all penguin species, standing up to 48 inches tall.",
  "Did you know? The Bar-tailed Godwit can fly up to 7,000 miles nonstop from Alaska to New Zealand, making it one of the longest uninterrupted migrations known.",
  "Did you know? The Australian Brush Turkey can regulate the temperature of its nest by adding or removing vegetation to keep the eggs at a constant temperature.",
  "Did you know? Parrots have zygodactyl feet—two toes facing forward and two backward, which helps them to climb and hold food as they eat.",
  "Did you know? The Eurasian Magpie is considered one of the most intelligent birds, known for recognizing itself in a mirror.",
  "Did you know? The Gyrfalcon, the largest of the falcon species, can maintain speeds of over 130 km/h (80 mph) in flight.",
  "Did you know? The European Starlings plumage turns from shiny black to a dull brown during the winter, and it is speckled with white.",
  "Did you know? The Sooty Tern is known for spending up to five years at sea without touching land once it leaves its nest until it reaches maturity.",
  "Did you know? The Maleo, a bird endemic to Sulawesi in Indonesia, uses geothermal heat from volcanic sand to incubate its eggs.",
  "Did you know? The common loon has red eyes which may help them to see underwater and also might intimidate predators or rivals.",
  "Did you know? The Red Knot can change its color from a pale gray and white in winter to a rich rufous in summer, to attract mates.",
  "Did you know? The African Grey Parrot is known for its ability to mimic human speech and can have a vocabulary of over 1000 words.",
  "Did you know? Falcons have a so-called tooth on their beaks that is used to deliver a fatal bite to their preys neck.",
  "Did you know? The Indian Peafowls train is actually not its tail but its upper tail coverts, which are elongated upper tail feathers.",
  "Did you know? The Alpine Swift can stay in the air for up to six months without landing, even sleeping while flying.",
  "Did you know? The Hooded Pitohui of Papua New Guinea is one of the few known species of poisonous birds; its feathers contain potent neurotoxins.",
  "Did you know? The beak of the Toco Toucan accounts for nearly one third of its body length and helps regulate its body temperature.",
  "Did you know? A single swallow consumes up to 60 insects per hour, making them beneficial for natural pest control.",
  "Did you know? The California Condor was brought back from the brink of extinction; in 1987, all remaining wild individuals were captured for breeding.",
  "Did you know? The White-throated Kingfisher can often be found far from water, feeding on insects and small reptiles.",
  "Did you know? The Snowy Owl, famously known as Hedwig in the Harry Potter series, can detect prey under two feet of snow.",
  "Did you know? The Frigatebird can stay aloft for weeks at a time; it sleeps while flying during long oceanic flights.",
  "Did you know? The beaks of parrots are strong enough to crack nuts and seeds, which makes up a large part of their diet.",
  "Did you know? Flamingos can only eat with their heads upside down, which is unique among birds.",
  "Did you know? The Ruppells Griffon Vulture is the highest flying bird, detected at altitudes up to 37,000 feet.",
  "Did you know? The Bald Eagles nest can weigh up to two tons and be up to 8 feet in diameter, the largest of any North American bird.",
  "Did you know? Hummingbirds can beat their wings up to 80 times per second during courtship displays, creating a buzzing sound.",
  "Did you know? The Adelie Penguin, one of Antarcticas hardiest inhabitants, builds its nest entirely out of stones.",
  "Did you know? The African Fish Eagle is known for its haunting and beautiful call, often referred to as the voice of Africa.",
  "Did you know? The Mute Swan can be aggressive in protecting its nest, known to attack humans who venture too close.",
  "Did you know? The Yellow-eyed Penguin from New Zealand is one of the rarest penguin species, with only a few thousand pairs remaining.",
  "Did you know? Woodpeckers can peck up to 20 times per second, or up to 12,000 times a day.",
  "Did you know? The Potoo bird from Central and South America looks like a broken branch when perched, as camouflage against predators.",
  "Did you know? The European Bee-eater, a colorful bird, eats up to 250 bees a day, catching them in mid-air.",
  "Did you know? The Spotted Nutcracker has a pouch under its tongue to store seeds for later consumption, much like a chipmunks cheeks.",
  "Did you know? The Atlantic Puffin has a beak that changes color during the year, turning bright orange during the breeding season.",
  "Did you know? The Kea, a parrot from New Zealand, is known for its intelligence and curiosity, often engaging with tourists.",
  "Did you know? The Helmeted Hornbills casque is so large that it constitutes 10 percent of its body weight.",
  "Did you know? The Blue Jay can mimic the calls of hawks to scare away other birds from its territory.",
  "Did you know? The Turkey Vulture has an excellent sense of smell and can detect the scent of decaying animals from up to a mile away.",
  "Did you know? The King Vulture has a strikingly colorful face with hues of red, blue, and orange, contrasting its primarily white body.",
  "Did you know? The Osprey, also known as the sea hawk, is the only raptor whose diet is almost exclusively fish.",
  "Did you know? The Great Gray Owl, one of the tallest owls, has exceptionally large facial discs, which help direct sound to their ears.",
  "Did you know? The Fairy Tern, one of the few birds that does not build a nest, lays its egg directly on a tree branch.",
  "Did you know? The Shoebill Stork uses its massive, shoe-shaped bill to catch large prey such as snakes and frogs.",
  "Did you know? The Shrike, sometimes called the butcher bird, impales its prey on thorns or barbed wire to store it for later consumption.",
  "Did you know? The Cuckoo is known for its brood parasitism, where it lays its eggs in the nests of other birds, tricking them into raising its young.",
  "Did you know? The Kakapo, a flightless parrot from New Zealand, is the worlds heaviest parrot and known for its nocturnal habits.",
  "Did you know? The Harlequin Duck is named for its brightly colored plumage, which resembles the costume of a harlequin clown.",
  "Did you know? The Magnificent Frigatebird, known for its striking red throat pouch, can stay aloft for more than a week at a time.",
  "Did you know? The Alpine Swift can fly for six months straight without landing, even sleeping while in flight.",
  "Did you know? The Flamingo can drink boiling hot water from geothermal springs without harm.",
  "Did you know? The Hoopoe, with its distinctive crown of feathers, has a strong musky odor to deter predators.",
  "Did you know? The Sandhill Crane performs elaborate dancing rituals to strengthen bonding with its mate.",
  "Did you know? The Manakin can snap its wings at high speeds to produce a sound used in mating displays.",
  "Did you know? The Satin Bowerbird collects blue objects to decorate its nest in an effort to attract a mate.",
  "Did you know? The Northern Mockingbird can mimic the songs of over 200 other bird species as part of its mating rituals.",
  "Did you know? The African Jacana is known for its extremely long toes that allow it to walk on floating vegetation.",
  "Did you know? The Malachite Kingfisher, one of the smallest kingfishers, sports a striking blue and orange plumage.",
  "Did you know? The Andean Condor, one of the worlds largest flying birds, can soar for hours without flapping its wings.",
  "Did you know? The Chimney Swift builds its nest exclusively inside chimneys and other vertical structures, using its saliva as glue.",
  "Did you know? The Yellow Warbler can build a new nest over the old one if parasitized by a Cowbird, sometimes resulting in nests several layers deep.",
  "Did you know? The Ruby-throated Hummingbird can beat its wings up to 70 times per second and can double that rate during courtship.",
  "Did you know? The Eurasian Eagle-Owl has distinctive ear tufts and is one of the worlds largest owls, with a wingspan of up to 6 feet.",
  "Did you know? The Greater Flamingo, the largest of the flamingo species, can filter up to 20 gallons of water a day for food.",
  "Did you know? The Crested Caracara, a bird of prey, often walks on the ground and uses its talons to carry food like a falcon.",
  "Did you know? The American Woodcock has eyes positioned so far back on its head that it can see 360 degrees horizontally.",
  "Did you know? The Snow Petrel is one of only three birds found breeding in Antarctica and can live up to 20 years in the wild.",
  "Did you know? The Black Skimmer has a unique lower bill that is longer than its upper, which it uses to skim fish from the waters surface.",
  "Did you know? The Australian Pelican has the longest bill of any bird in the world, measuring up to 18.5 inches in length.",
  "Did you know? The Galapagos Cormorant is the only cormorant species that has lost the ability to fly and swims with its strong webbed feet instead.",
  "Did you know? The Trumpeter Swan is the heaviest native North American bird and one of the largest flying birds globally.",
  "Did you know? The Gila Woodpecker saves water by excreting waste through its cloaca as a dry powder.",
  "Did you know? The Common Nighthawk is not actually a hawk but belongs to the nightjar family, known for their silent flight.",
  "Did you know? The Azure Kingfisher dives headfirst into water from perches to catch small fish and aquatic invertebrates.",
  "Did you know? The Little Bee-eater, found across sub-Saharan Africa, catches insects on the wing and removes their stings by rubbing them against a hard surface before eating.",
  "Did you know? The Long-tailed Tit, a small bird found across Europe and Asia, constructs a detailed and insulated nest resembling a tennis ball.",
  "Did you know? The Puffin, often called the clown of the sea because of its colorful bill, can flap its wings up to 400 times per minute.",
  "Did you know? The White-backed Vulture is crucial for the ecosystem as it cleans up after other predators by consuming carrion.",
  "Did you know? The Horned Lark is the only true lark native to North America and can be recognized by its distinct feather tufts on its head.",
  "Did you know? The Barn Owl can hunt in complete darkness, relying solely on its acute sense of hearing to locate prey.",
  "Did you know? The Emperor Penguin is the only species of penguin that breeds during the Antarctic winter, trekking 50-120 miles over the ice to breeding colonies.",
  "Did you know? The Spectacled Eider, a sea duck, dives as deep as 180 feet underwater to forage for food.",
  "Did you know? The Resplendent Quetzal is revered in Mayan and Aztec cultures as the god of the air and is known for its vibrant plumage and long tail feathers.",
  "Did you know? The Bellbird, one of the worlds loudest birds, can be heard up to half a mile away in the dense forests of Central and South America.",
  "Did you know? The African Penguin, also known as the Jackass Penguin, makes a donkey-like braying noise, which is how it got its nickname.",
  "Did you know? The Turquoise-browed Motmot has a unique tail that it swings like a pendulum to communicate with other motmots.",
  "Did you know? The Brown Kiwi lays eggs that are almost 20 percent of its body weight, the largest egg relative to body size of any bird.",
  "Did you know? The Green Heron is one of the worlds few tool-using bird species, often using bait to fish for prey.",
  "Did you know? The male Ruff has a spectacular breeding plumage, showing off a large ornamental collar of feathers to attract females.",
  "Did you know? The Wilsons Bird-of-Paradise is so colorful that it appears almost neon under the dense canopy of New Guineas forests.",
  "Did you know? The Gyrfalcon, the largest falcon species, preys predominantly on large birds and can take down prey nearly its size.",
  "Did you know? The Golden Eagle is one of the best-known birds of prey in the Northern Hemisphere, but is also found as far afield as North Africa and Asia.",
  "Did you know? The American Flamingo feeds with its head upside-down in the water, which allows it to filter feed.",
  "Did you know? The Calliope Hummingbird, the smallest bird species in North America, measures just three inches long.",
  "Did you know? The Tawny Frogmouth, often mistaken for an owl, is actually more closely related to nightjars.",
  "Did you know? The Oriental Dwarf Kingfisher displays a vibrant palette of colors, including blues, greens, yellows, and purples.",
  "Did you know? The Ostrich has the largest eyes of any land animal, measuring almost 2 inches in diameter, which helps it see predators from afar.",
  "Did you know? The Lammergeier, or Bearded Vulture, is unique among vultures as it predominantly feeds on bones.",
  "Did you know? The Red-billed Streamertail, also known as the Doctor Bird, is native to Jamaica and is one of the most magnificent hummingbirds.",
  "Did you know? The Whooping Crane is North Americas tallest bird, and was once on the brink of extinction with only 16 individuals left in the wild.",
  "Did you know? The Macaroni Penguin is named not for the pasta but for its distinctive yellow crest, resembling the hats worn by 18th-century Englishmen called macaronis.",
  "Did you know? The Philippine Eagle, one of the largest and most powerful eagles, is critically endangered with only a few hundred left.",
  "Did you know? The Eurasian Capercaillie is the worlds largest grouse, known for its dramatic mating displays in the boreal forests of Europe and Asia.",
  "Did you know? The Vampire Bat Hummingbird, a nickname for the Juan Fernández Firecrown, has a striking red throat reminiscent of Draculas cape.",
  "Did you know? The Long-wattled Umbrellabird, found in the rainforests of Colombia and Ecuador, has a large wattle hanging from its neck, which it can inflate during courtship displays.",
  "Did you know? The Blue-footed Boobys bright blue feet play a crucial role in its courtship rituals and mate selection.",
  "Did you know? The Australian Magpie has one of the most complex bird songs, which can include mimicking over 35 species of birds and even mechanical sounds like camera shutters.",
  "Did you know? The Arctic Tern, during its life, can migrate distances equivalent to flying to the moon and back three times.",
  "Did you know? The Helmeted Honeyeater is Victoria, Australias bird emblem, known for its distinctive yellow tuft and critically endangered status.",
  "Did you know? The Mallee Emu-wren, a tiny Australian bird, is so light that it cannot fly on windy days, instead opting to hunker down and wait for calmer weather.",
  "Did you know? The Kakapos owl-like face and nocturnal habits have earned it the nickname night parrot.",
  "Did you know? The Smew, a small duck found in the boreal forests of Europe and Asia, is known for its striking black and white plumage.",
  "Did you know? The Hoatzin, also known as the stinkbird, has a unique digestive system that ferments vegetation like a cow, producing a noticeable odor.",
  "Did you know? The Peacocks tail feathers, or train, are not tail feathers at all but highly elongated upper tail coverts.",
  "Did you know? The African Fish Eagles distinctive call is considered one of the most evocative sounds of the African bush.",
  "Did you know? The Bee Hummingbird, the worlds smallest bird, weighs less than a dime and is only found in Cuba.",
  "Did you know? The Andean Condor, one of the longest-lived birds, can reach ages up to 75 years in captivity.",
  "Did you know? The Spectacled Owl, named for its distinctive facial markings, is one of the larger species of owls found in Central and South America.",
  "Did you know? The Nicobar Pigeon, with its iridescent plumage, is one of the closest living relatives to the extinct Dodo.",
  "Did you know? The Black-necked Stilt has the second-longest legs in proportion to its body of any bird, exceeded only by flamingos.",
  "Did you know? The Kea, a parrot from New Zealand, is known for pulling windshield wipers off cars and eating the strips of rubber from windows.",
  "Did you know? The Common Potoo is so adept at camouflage that it can make itself appear as a broken branch.",
  "Did you know? The Great Kiskadee is a bold and loud bird from Central and South America known for its distinctive kis-ka-dee call.",
  "Did you know? The Red-throated Loons call is considered one of the wildest and loneliest sounds of the Arctic.",
  "Did you know? The Fairy-wren is known for its elaborate mating dance and bright blue plumage during the breeding season.",
  "Did you know? The Cape Parrot is unique to South Africa and is one of the worlds most endangered parrot species due to habitat loss.",
  "Did you know? The African Grey Parrot has cognitive abilities comparable to those of a 4- to 6-year-old child in some tasks.",
  "Did you know? The Storm Petrel dances on the waters surface to pick up plankton and small fish, giving the appearance of walking on water.",
  "Did you know? The Sunbittern from Central and South America spreads its wings to display a large eye pattern to scare predators.",
  "Did you know? The Hornbill uses its large bill to create and defend cavities in trees where it nests and protects its young.",
  "Did you know? The Yellow-bellied Sapsucker drills holes in trees to lap up the leaking sap and any trapped insects.",
  "Did you know? The Tawny Owl, the quintessential owl of folklore, does not hoot but instead makes a sharp ke-wick sound.",
  "Did you know? The Shining Sunbeam, a hummingbird species, has iridescent plumage that can shimmer from green to purple in sunlight.",
  "Did you know? The Montezuma Oropendola constructs hanging nests that can be up to 6 feet long from a single tree.",
  "Did you know? The Snowy Egret, once hunted nearly to extinction for its fine plumes, now thrives thanks to conservation efforts.",
  "Did you know? The Little Spotted Kiwi is nocturnal and, unlike most birds, has a highly developed sense of smell.",
  "Did you know? The Painted Stork uses its partially open bill to sift through mud, searching for small fish.",
  "Did you know? The Secretary Bird is famous for its snake-killing prowess, using its long legs to stamp its prey to death.",
  "Did you know? The Purple Gallinule, with its vibrant plumage and long yellow legs, is often seen walking on floating vegetation in southern wetlands.",
  "Did you know? The Wattled Jacana is known for its long toes, which allow it to walk on floating vegetation without sinking.",
  "Did you know? The Eurasian Spoonbill uses its unique spoon-shaped bill to sift through mud for aquatic insects and small fish.",
  "Did you know? The Oilbird, found in the caves of South America, is one of the few birds that use echolocation to navigate in total darkness.",
  "Did you know? The Blue Jay is known for its intelligence and complex social behavior, often mimicking the calls of hawks to scare away other birds.",
  "Did you know? The Swallow-tailed Kite in North America is known for its graceful, acrobatic flight and almost exclusively eats insects on the wing.",
  "Did you know? The Australian Bowerbird can build intricate structures, called bowers, decorated with brightly colored objects to attract mates.",
  "Did you know? The Glaucous-winged Gull, found in the North Pacific, often incorporates human-made items into its nest construction.",
  "Did you know? The Mangrove Cuckoo, as its name suggests, lives primarily in mangrove forests and has a distinctive low-pitched call.",
  "Did you know? The Golden-crowned Kinglet is one of the smallest songbirds in North America and can survive freezing temperatures.",
  "Did you know? The Red-headed Woodpecker is notable not only for its bright red head but also for storing live grasshoppers in tree crevices for winter food.",
  "Did you know? The Violet-backed Starling, found in sub-Saharan Africa, displays striking sexual dimorphism; males are vibrant purple, while females are brown.",
  "Did you know? The Lesser Flamingo is the smallest species of flamingo and has the most extensive population among flamingos.",
  "Did you know? The Bearded Reedling can make its home in reed beds, which it never needs to leave, thanks to its specialized diet of reed seeds.",
  "Did you know? The Nene, also known as the Hawaiian Goose, is Hawaiis state bird and was brought back from near extinction in the mid-20th century.",
  "Did you know? The Andean Cock-of-the-rock is known for its brilliant orange plumage and its unusual mating dance performed in communal leks.",
  "Did you know? The White-faced Ibis forages in flocks in shallow waters, using its long, curved bill to probe the mud for food.",
  "Did you know? The European Bee-eater, despite its name, has a diet that consists largely of bees and wasps, which it catches in flight.",
  "Did you know? The Black-and-white Warbler is unique among warblers because it forages along tree trunks and branches like a nuthatch.",
  "Did you know? The Crested Ibis, once thought to be extinct in the wild, has been successfully reintroduced in parts of China.",
  "Did you know? The Palm Cockatoo, known for its impressive crest and powerful bill, uses sticks to drum on trees, creating a sound that can be heard up to 100 meters away.",
  "Did you know? The Green Peafowl, unlike its better-known relative the Blue Peafowl, features vibrant green plumage and is native to the tropical forests of Southeast Asia.",
  "Did you know? The Marabou Stork, often associated with African savannas, has a wingspan that can reach up to 10.5 feet, making it one of the largest flying birds.",
  "Did you know? The Bohemian Waxwing does not build its own nests but instead lays its eggs in the nests of other birds.",
  "Did you know? The Sanderling is notable for its behavior of running along beaches to chase receding waves, feeding on invertebrates left behind.",
  "Did you know? The Pygmy Falcon, Africas smallest raptor, often uses the abandoned nests of weaver birds as its own.",
  "Did you know? The Kakapo has a distinctive, musty odor that can be detected from a distance, which it uses to attract mates in the dense forests of New Zealand.",
  "Did you know? The Azure Tit, a relative of the chickadee, is known for its striking blue and white plumage and is found in Russia and Central Asia.",
  "Did you know? The Spectacled Weaver gets its name from the distinctive ring of white feathers around its eyes, resembling spectacles.",
  "Did you know? The Harpy Eagle, one of the largest eagles, preys primarily on monkeys and sloths in the rainforests of Central and South America.",
  "Did you know? The Northern Bald Ibis was revered in ancient Egypt and is depicted in many hieroglyphs, but its now critically endangered.",
  "Did you know? The Elf Owl, the smallest owl in the world, can be found in the southwestern United States and Mexico, and weighs about as much as a golf ball.",
  "Did you know? The American Bittern uses camouflage to blend into reeds and will stand motionless for hours to avoid detection by predators.",
  "Did you know? The Satin Bowerbird not only builds elaborate structures to attract a mate but also decorates them with blue items, from berries to bottle caps.",
  "Did you know? The Inca Tern, recognized by its distinctive mustache-like feathers, breeds along the rocky coasts of Peru and Chile.",
  "Did you know? The Antillean Nighthawk, found in the Caribbean, is often heard more than seen due to its nocturnal habits and cryptic plumage.",
  "Did you know? The Yellow-crested Cockatoo, native to Indonesia and East Timor, is critically endangered due to habitat loss and the pet trade.",
  "Did you know? The Giant Ibis, the national bird of Cambodia, is now listed as critically endangered with less than 300 individuals remaining in the wild.",
  "Did you know? The Clarks Nutcracker has a specialized tongue that allows it to extract seeds from pine cones, which it then stores for winter.",
  "Did you know? The Red-necked Phalarope spins in circles on water to create a vortex that brings small food items to the surface.",
  "Did you know? The King Bird-of-paradise is famous for its spectacular tail feathers used in courtship displays, which are like ribbons trailing behind it.",
  "Did you know? The Ruby-crowned Kinglet, despite its tiny size, has a very loud and complex song that can last up to 5 seconds.",
  "Did you know? The Asian Paradise Flycatcher is known for its exceptionally long tail feathers, which can be twice the length of its body.",
  "Did you know? The Purple Martin is the largest North American swallow and relies heavily on human-provided birdhouses for nesting sites.",
  "Did you know? The Golden Pheasant, native to forests in mountainous areas of western China, is one of the most colorful birds with vibrant red, blue, and gold plumage.",
  "Did you know? The Grey-crowned Crane, with its distinctive golden crown of feathers, is the national bird of Uganda.",
  "Did you know? The Yellowhammer, a songbird native to Eurasia, was introduced to New Zealand where it quickly became common.",
  "Did you know? The White-throated Dipper is Europes only aquatic songbird and can walk underwater to forage for insects.",
  "Did you know? The Snow Bunting, also known as the snowflake bird, breeds in the high Arctic and can tolerate temperatures as low as -30 degrees Celsius.",
  "Did you know? The Eurasian Magpie is one of the few non-mammal species known to be able to recognize itself in a mirror test.",
  "Did you know? The Atlantic Canary, native to the Canary Islands, Madeira, and the Azores, is famous for its melodious song which led to its widespread domestication.",
  "Did you know? The Shoebill, known for its shoe-shaped bill, often stands motionless for long periods to surprise fish with a deadly strike.",
  "Did you know? The Crested Auklet, found in the Bering Sea and Arctic Ocean, emits a citrus-like smell during breeding season, which likely plays a role in mate selection.",
  "Did you know? The Superb Lyrebird of Australia can mimic natural and artificial sounds from their environment, including chainsaws and camera shutters.",
  "Did you know? The Swainsons Hawk migrates over 6,000 miles from North America to Argentina, one of the longest migrations of any American raptor.",
  "Did you know? The African Crowned Eagle is known as one of the most powerful eagles in Africa, capable of preying on animals ten times its own weight.",
  "Did you know? The Band-tailed Pigeon, native to the Americas, has a distinctive white crescent at the nape of the neck and a loud clapping sound on takeoff.",
  "Did you know? The Greater Roadrunner, a bird famous from the cartoon, is a real bird that can run up to 20 miles per hour.",
  "Did you know? The Common Waxbill, native to sub-Saharan Africa, has a bright red bill and a distinctive red stripe through its eyes.",
  "Did you know? The Lesser Goldfinch males in the western United States have black backs, while those in the east have greenish backs.",
  "Did you know? The Black-capped Chickadees brain enlarges and shrinks seasonally, increasing in size in the fall to remember where food is stored for winter.",
  "Did you know? The Malachite Sunbird, native to southern Africa, has iridescent green feathers and a long tail, resembling a hummingbird in flight.",
  "Did you know? The Pied Avocet uses its upturned bill to sweep through shallow water, catching small invertebrates.",
  "Did you know? The Blue-throated Macaw, native to Bolivia, is critically endangered, with only a few hundred individuals remaining in the wild.",
  "Did you know? The Kookaburra, famous for its laughing call, is a large kingfisher native to Australia and New Guinea.",
  "Did you know? The American Kestrel can see ultraviolet light, which helps it detect the urine trails left by small mammals.",
  "Did you know? The Dodo, an extinct flightless bird from Mauritius, was driven to extinction in the late 17th century due to overhunting and introduced predators.",
  "Did you know? The Red Kite, once nearly extinct in the United Kingdom, has made a remarkable recovery thanks to conservation efforts.",
  "Did you know? The Helmeted Guineafowl, native to Africa, has a distinctive helmet-like casque on its head and is often kept for pest control.",
  "Did you know? The Flame Bowerbird, one of the most brilliantly colored bowerbirds, is known for its fiery orange and red plumage.",
  "Did you know? The Arctic Warbler migrates from Southeast Asia to the northernmost parts of Scandinavia, Russia, and Alaska for breeding.",
  "Did you know? The Common Myna, native to Asia, is considered one of the worlds most invasive bird species due to its adaptability and aggressiveness.",
  "Did you know? The Night Parrot, thought to be extinct for almost a century, was rediscovered in western Queensland, Australia, in 2013.",
  "Did you know? The Oriental Stork, once widespread across East Asia, now has its largest populations in protected areas in Japan and China.",
  "Did you know? The Painted Bunting is often called the most beautiful bird in North America due to its vibrant blue, green, and red colors.",
  "Did you know? The Sooty Albatross, known for its dark plumage, breeds on remote islands in the southern oceans and is considered endangered.",
  "Did you know? The Zebra Finch, a common songbird from Australia, is highly regarded for its vocal abilities and is a favorite among pet owners.",
  "Did you know? The Northern Goshawk, a formidable bird of prey, can maneuver deftly through dense forests in pursuit of other birds and mammals.",
  "Did you know? The Yellow-crowned Night Heron can be spotted by its striking black-and-white face and bright yellow crown.",
  "Did you know? The Magnificent Hummingbird, found in Central America, is noted for its size and vibrant, metallic green and blue plumage.",
  "Did you know? The African Skimmer has a lower mandible that is longer than the upper, helping it skim fish from the surface of water bodies.",
  "Did you know? The Greater Sage-Grouse performs one of the most elaborate courtship dances among North American birds.",
  "Did you know? The Long-tailed Tit, a small bird found across Europe and Asia, creates a spherical nest that is one of the most intricate of any bird species.",
  "Did you know? The Quetzal, revered by the ancient Mayans and Aztecs, is known for its brilliant plumage and long, flowing tail feathers.",
  "Did you know? The European Roller, the only member of the roller family of birds to breed in Europe, is known for its spectacular aerial acrobatics during courtship.",
  "Did you know? The Ocellated Turkey, native to the Yucatán Peninsula, features eye-like spots on its tail feathers, which resemble those of a peacock.",
  "Did you know? The Loggerhead Shrike is known as the butcher bird because it impales its prey on thorns or barbed wire to store and rip apart later.",
  "Did you know? The Wallaces Standardwing, one of only five bird-of-paradise species found outside New Guinea, is named after the naturalist Alfred Russel Wallace.",
  "Did you know? The Puffin is capable of carrying dozens of small fish crosswise in its bill, thanks to unique adaptations that allow them to hold fish while diving for more.",
  "Did you know? The Victoria Crowned Pigeon, named after Queen Victoria, is the largest pigeon species in the world and sports an elegant lace-like crest.",
  "Did you know? The Turquoise Parrot, once thought to be extinct, has vibrant blue and yellow plumage and has made a successful comeback in southeastern Australia.",
  "Did you know? The Black-headed Ibis, found in South and Southeast Asia, is known for its stark white body and contrasting black head and neck.",
  "Did you know? The African Pygmy Goose is not actually a goose but is considered one of the smallest waterfowl species in the world.",
  "Did you know? The Frilled Coquette Hummingbird, one of the smallest hummingbirds, sports a frilly throat feathers and is found in Brazil.",
  "Did you know? The Philippine Eagle is one of the worlds largest and most powerful eagles, known for its distinctive shaggy crest.",
  "Did you know? The Nicobar Pigeon, one of the closest living relatives to the extinct dodo, has iridescent feathers that shine in different colors.",
  "Did you know? The Laysan Albatross is known for its mating dance, which includes a variety of calls, head bobbing, and sky pointing.",
  "Did you know? The Spotted Owlet, active during the day unlike many owls, is common across the Indian subcontinent.",
  "Did you know? The Horned Grebe, during breeding season, has striking red and black plumage and ornate feather horns that it displays during courtship.",
  "Did you know? The Blue-footed Boobys mating dance includes lifting its bright blue feet high in a high-stepping display to attract a mate.",
  "Did you know? The Scarlet Macaw, known for its brilliant red, blue, and yellow plumage, is one of the most colorful and largest macaws.",
  "Did you know? The Kakapo is a nocturnal, flightless parrot from New Zealand, known for its strong, pleasant, musty odor used to attract mates over great distances.",
  "Did you know? The Crested Tit, a small passerine bird in Europe, is named for its distinctive erect crest, which is a prominent feature used in its courtship displays.",
  "Did you know? The Green Heron is one of the worlds few tool-using birds; it uses bait such as insects or small feathers to fish for prey.",
  "Did you know? The Osprey is unique among North American raptors for its diet almost exclusively of fish, and it can be found near ponds, rivers, lakes, and coastal waterways around the world.",
  "Did you know? The Galápagos Penguin is the only penguin species found north of the equator and the only one that lives in the wild on the Galápagos Islands.",
  "Did you know? The Himalayan Monal, the national bird of Nepal, is admired for its colorful plumage and is a popular symbol in Nepalese culture.",
  "Did you know? The Yellow-collared Lovebird, often seen in pairs or small groups in the wild, is noted for its striking green body and bright yellow collar.",
  "Did you know? The Hoopoe, the national bird of Israel, is famous for its distinctive crown of feathers and its ability to dig deep into the ground to catch insects and larvae.",
  "Did you know? The Blue Jay is known for its intelligence, complex social behavior, and ability to mimic human-made sounds as well as other bird calls.",
  "Did you know? The Black Skimmer has an unusual method of feeding; it flies low over the water, skimming its lower bill in the water until it feels a fish.",
  "Did you know? The Manx Shearwater, a seabird known for its incredible long-distance migrations, can travel over 6,000 miles from its breeding to wintering grounds.",
  "Did you know? The Australian Brush-turkey is known for its large mounds used to incubate eggs, which the male diligently maintains at the perfect temperature.",
  "Did you know? The American Dipper is North Americas only truly aquatic songbird, often seen dipping into streams and rivers to feed on aquatic insects.",
  "Did you know? The Bearded Bellbird, native to northern South America, produces one of the loudest bird calls heard in the rainforest.",
  "Did you know? The Wilsons Bird-of-Paradise, found on the islands of Indonesia, displays an extraordinary array of colors during its mating dance to attract females.",
  "Did you know? The Gyrfalcon, the largest falcon species, uses its incredible speed and powerful talons to catch prey in mid-air during flight.",
  "Did you know? The Ruby-throated Hummingbird can beat its wings 53 times per second and is capable of crossing the Gulf of Mexico on a nonstop flight.",
  "Did you know? The Sword-billed Hummingbird has a bill longer than its body, the only bird with such an adaptation, which it uses to feed from long tubular flowers.",
  "Did you know? The Keel-billed Toucan, also known as the rainbow-billed toucan, is famous for its colorful bill, which can reach up to one-third of its body length.",
  "Did you know? The Emperor Tamarin, although not a bird, is known for its distinctive long, white mustache, which reminded observers of a German emperor.",
  "Did you know? The Spectacled Owl, named for its distinctive eye-like plumage around its face, is a dominant nocturnal predator in the rainforests of Central and South America.",
  "Did you know? The Stellers Sea Eagle, one of the largest eagle species, has a wingspan of up to 8 feet and is primarily found in Russia and Japan.",
  "Did you know? The Capuchinbird, known for its bizarre, cow-like mooing call, is often heard before it is seen in the rainforests of South America.",
  "Did you know? The Smoky Honeyeater, found in the mountains of New Guinea, is notable for its smoky grey plumage and bright yellow legs.",
  "Did you know? The Clarks Nutcracker has a remarkable memory for recalling where it has stored thousands of seeds across its territory.",
  "Did you know? The Saker Falcon is one of the most highly regarded birds used in falconry due to its fierce demeanor and large size.",
  "Did you know? The Little Penguin, also known as the Fairy Penguin, is the smallest species of penguin and is found along the coastlines of southern Australia and New Zealand.",
  "Did you know? The Long-tailed Broadbill is known for its bright green plumage and a tail that is almost three times the length of its body.",
  "Did you know? The Inaccessible Island Rail is the worlds smallest flightless bird, found only on a remote volcanic island in the South Atlantic.",
  "Did you know? The Pin-tailed Whydah, a brood parasite, lays its eggs in the nests of other small finch-like birds, particularly the Common Waxbill.",
  "Did you know? The Northern Jacana is known for its exceptionally long toes and claws that allow it to walk on lily pads and other floating vegetation.",
  "Did you know? The Grey Parrot, also known as the African Grey Parrot, is famous for its high intelligence and ability to mimic human speech accurately.",
  "Did you know? The Yellow-breasted Chat, North Americas largest warbler, has a diverse repertoire of songs and calls it uses during mating rituals.",
  "Did you know? The Paradise Tanager, one of the most colorful birds in the Amazon, sports a multi-colored plumage ranging from blue to green to red.",
  "Did you know? The Turquoise-fronted Amazon, a large parrot from South America, is highly social and known for its boisterous nature and strong bond with its mate.",
  "Did you know? The Western Grebe has a dramatic courtship display that includes a synchronized dancing or rushing across the waters surface with its mate.",
  "Did you know? The Alpine Chough, found in high mountains of Europe and Asia, is known for its acrobatic flight maneuvers around rocky cliffs.",
  "Did you know? The Blue-crowned Motmot, found from Mexico to South America, wields a distinctive racket-like tail which it swings pendulum-like to communicate.",
  "Did you know? The Common Eider is known for its down feathers, which are highly prized for insulation and are collected sustainably from nests to make eiderdown.",
  "Did you know? The Magellanic Woodpecker, native to southern Chile and Argentina, is one of the largest woodpeckers in the world.",
  "Did you know? The White-winged Flufftail, one of the rarest and most secretive birds in Africa, has been recorded in only a handful of locations.",
  "Did you know? The Harlequin Duck is named for its colorful, clown-like plumage and is known for its ability to navigate fast-moving rivers.",
  "Did you know? The Pallass Fish Eagle, a rare raptor from Asia, is critically endangered due to habitat loss and pollution.",
  "Did you know? The African Oystercatcher has a bright red bill and eyes, and is known for its loud, piping call that can be heard along coastlines.",
  "Did you know? The Crested Coua, a stunning bird from Madagascar, displays a remarkable turquoise-blue eye and a crest of feathers on its head.",
  "Did you know? The Yellow-eyed Penguin, one of the rarest penguin species, is native to New Zealand and known for its pale yellow eyes.",
  "Did you know? The King Vulture has one of the most colorful faces among vultures, with shades of red, orange, and blue.",
  "Did you know? The Kagu, a flightless bird from New Caledonia, is known for its ghostly white or grey plumage and eerie calls.",
  "Did you know? The Australian Painted Snipe is critically endangered and notable for its distinctive plumage and secretive behavior.",
  "Did you know? The Bateleur Eagle, an African eagle, is known for its extremely short tail and vibrant red face and legs.",
  "Did you know? The Guianan Cock-of-the-rock, a South American bird, is famous for its bright orange plumage and unique mating dance performed in communal display grounds.",
  "Did you know? The Ibisbill, found along the stony riverbeds of the Himalayas, has a distinct downward curve to its bill, resembling an ibis.",
  "Did you know? The Spixs Macaw, a parrot native to Brazil, was considered extinct in the wild until recent conservation efforts aimed at reintroduction.",
  "Did you know? The Diademed Sandpiper-Plover, a rare Andean shorebird, is known for its striking head pattern and elusive nature.",
  "Did you know? The Horned Sungem, a hummingbird from South America, sports two distinctive black and white ear tufts.",
  "Did you know? The Purple-throated Carib, a hummingbird species, is known for its vibrant purple throat and aggressive defense of feeding territories.",
  "Did you know? The Masked Booby, the largest of the booby species, dives from high altitudes into the sea to catch fish.",
  "Did you know? The Grey-headed Albatross, known for its circumglobal range, is facing threats due to longline fishing practices.",
  "Did you know? The Philippine Trogon, a bird native to the Philippines, is known for its vibrant green and red plumage and shy behavior.",
  "Did you know? The Pygmy Falcon, Africas smallest raptor, often uses the large nests of weaver birds to roost and raise its young.",
  "Did you know? The Velvet Asity, a bird found only in Madagascar, is known for the males bright green plumage and distinctive black eye mask during the breeding season.",
  "Did you know? The Shoebill, known for its large, shoe-shaped bill, resides in the swamps of central tropical Africa and is often referred to as a living dinosaur due to its prehistoric appearance.",
  "Did you know? The Red-necked Tanager, native to South Americas rainforests, dazzles with its vividly colored plumage featuring shades of blue, green, and red.",
  "Did you know? The Tawny Frogmouth, native to Australia, is often mistaken for an owl due to its nocturnal habits and similar appearance, although it is not closely related to owls.",
  "Did you know? The Wattled Curassow, which lives in the Amazon Basin, is distinguished by its black plumage and striking blue and yellow wattles."
];

document.getElementById("title").addEventListener("click", speak);

var countdownInterval = setInterval(countdown, 1000);
countdown();

function countdown() {
  let timeZero = new Date();
  let remainingTime = birdingStart - timeZero;
  let d = remainingTime / (1000 * 60 * 60 * 24);
  let days = document.getElementById("d");
  days.innerHTML = Math.floor(d);
  if (remainingTime < 1000 * 60 * 60 * 24) {
    days.style.backgroundColor = expiredGray;
    let dLabel = document.getElementById("dLabel");
    dLabel.style.color = expiredGray;
  }
  let h = (d - Math.floor(d)) * 24;
  let hours = document.getElementById("h");
  hours.innerHTML = Math.floor(h);
  if (remainingTime < 1000 * 60 * 60) {
    hours.style.backgroundColor = expiredGray;
    let hLabel = document.getElementById("hLabel");
    hLabel.style.color = expiredGray;
  }
  let m = (h - Math.floor(h)) * 60;
  let minutes = document.getElementById("m");
  minutes.innerHTML = Math.floor(m);
  if (remainingTime < 1000 * 60) {
    minutes.style.backgroundColor = expiredGray;
    let mLabel = document.getElementById("mLabel");
    mLabel.style.color = expiredGray;
  }
  let s = (m - Math.floor(m)) * 60;
  let seconds = document.getElementById("s");
  seconds.innerHTML = Math.floor(s);
  if (remainingTime <= 200) {
    clearInterval(countdownInterval);
    timerGoesOff();
  }
}

function timerGoesOff() {
  let days = document.getElementById("d");
  days.innerHTML = "0";
  let hours = document.getElementById("h");
  hours.innerHTML = "0";
  let minutes = document.getElementById("m");
  minutes.innerHTML = "0";
  let seconds = document.getElementById("s");
  seconds.innerHTML = "0";
  seconds.style.backgroundColor = expiredGray;
  let sLabel = document.getElementById("sLabel");
  sLabel.style.color = expiredGray;
  let announce = document.getElementById("goBird1");
  announce.innerHTML = "LET'S GO BIRDING!";
  let breakfast = document.getElementById("wendys");
  breakfast.src = "./wendys_breakfast.jpg";
}

function speak() {
  if (!("speechSynthesis" in window)) {
    alert("Sorry, your browser does not support the Web Speech API");
    return;
  }

  speechSynthesis.cancel();

  let title = document.getElementById("title");
  title.classList.add("speaking");

  let timeZero = new Date();
  let remainingTime = birdingStart - timeZero;
  let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

  if (days < 0) {
    const utterance = new SpeechSynthesisUtterance("Lets GOOOOOOOOOOO");
    utterance.onend = function () { title.classList.remove("speaking"); };
    speechSynthesis.speak(utterance);
  } else if (days < 100) {
    const utterance = new SpeechSynthesisUtterance(
      "Bro... Seriously, Bro... Can you believe it?" +
      title.innerText + " " +
      `will be here in less than ${days + 1} days...`
    );
    speechSynthesis.speak(utterance);
    const utterance2 = new SpeechSynthesisUtterance("And in the meantime...");
    speechSynthesis.speak(utterance2);
    const utterance3 = new SpeechSynthesisUtterance(funFacts[days % funFacts.length]);
    utterance3.onend = function () { title.classList.remove("speaking"); };
    speechSynthesis.speak(utterance3);
  } else {
    const utterance = new SpeechSynthesisUtterance(
      "Bro... I am sorry to say... " +
      title.innerText + " " +
      `is still more than ${days} days away...`
    );
    speechSynthesis.speak(utterance);
    const utterance2 = new SpeechSynthesisUtterance("But in the meantime...");
    speechSynthesis.speak(utterance2);
    const utterance3 = new SpeechSynthesisUtterance(funFacts[days % funFacts.length]);
    utterance3.onend = function () { title.classList.remove("speaking"); };
    speechSynthesis.speak(utterance3);
  }
}
