import React, { useState, useRef } from 'react';
import PlantCard from '../components/PlantCard';
import Footer from '../components/Footer';
import QuizPopup from '../components/QuizPopup';
import { Link } from 'react-router-dom';
import FirstPage from '../components/FirstPage'; // Going into the 'components' folder
import AyushCards from '../components/AyushCards';

function Home() {
  // State to handle filter panel visibility
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterRegion, setFilterRegion] = useState('All Regions');
  const [filterType, setFilterType] = useState('All Types');
  const [searchTerm, setSearchTerm] = useState('');
  const [bookmarks, setBookmarks] = useState([]); // For storing bookmarked plants
  const [showBookmarks, setShowBookmarks] = useState(false); // To toggle between bookmarks and main view
  // State to handle chatbot visibility
  const [showChatbot, setShowChatbot] = useState(false);


  // Function to toggle filter panel
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Function to toggle chatbot visibility
  const toggleChatbot1 = () => {
    setShowChatbot(!showChatbot);
  };

  // Function to handle filter changes
  const handleRegionChange = (e) => setFilterRegion(e.target.value);
  const handleTypeChange = (e) => setFilterType(e.target.value);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  // Popup state for plant details
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);

  // Function to open the popup
  const openPopup = (plant) => {
    setSelectedPlant(plant);
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedPlant(null);
  };

  // Function to toggle chatbot visibility
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  // Function to handle downloading notes
  const handleDownloadNotes = () => {
    const notesContent = document.getElementById('notes-textarea').value; // Get the content of the textarea
    const element = document.createElement('a');
    const file = new Blob([notesContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'notes.txt';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  // Function to handle sharing notes by copying to clipboard
  const handleShareNotes = () => {
    const notesContent = document.getElementById('notes-textarea').value; // Get the content of the textarea
    navigator.clipboard.writeText(notesContent).then(() => {
      alert("Notes copied to clipboard! You can now share them.");
    }, () => {
      alert("Failed to copy notes to clipboard.");
    });
  };

  // Plant data
  const plants = [
    { imageSrc: '/images/New Tusli.jpg', multimedia: ['/images/tulsi2.png', '/images/tulsi3.png', '/images/tulsi4.png', 'https://www.youtube.com/embed/iDTMnk50Rdc?si=3S23mLyAKsOCIDl6'], name: 'Tulsi', region: 'Tropical', type: 'Herb', habitat: 'Tropical, Subtropical', botname: 'Ocimum tenuiflorum', comnames: 'Tulsi, Holy Basil', meduses: 'Boosts immunity, treats respiratory disorders', methofcul: 'Seed propagation, requires full sunlight', description: 'Tulsi, also known as holy basil, is a revered plant in Ayurveda known for its healing properties. Rich in antioxidants, it helps boost immunity, relieve stress, and support respiratory health. Tulsi is also considered sacred in Indian culture and is often worshiped in households.', sketchfabModelUrl: 'https://sketchfab.com/models/c604e8f52c234f2e9259d895fe028819/embed?autospin=1&autostart=1', audioSrc: "/audio/tulsi.mp3" },
    { imageSrc: '/images/New Neem.png', multimedia: ['/images/neem2.png', '/images/neem3.png', '/images/neem4.png', 'https://www.youtube.com/embed/fA-l1t_Aotw?si=oc1PFJNyG7iFARLx'], name: 'Neem', region: 'Tropical', type: 'Tree', habitat: 'Tropical, Subtropical', botname: 'Azadirachta indica', comnames: 'Neem, Indian Lilac', meduses: 'Antibacterial, Antifungal, Immunity Booster', methofcul: 'Grown from seeds or saplings', description: 'Neem is a fast-growing tree widely used in traditional medicine for its antibacterial and antifungal properties. It helps boost immunity and promotes skin and dental health. Neem leaves, bark, and oil are commonly used in Ayurvedic treatments for infections and skin disorders.', sketchfabModelUrl: 'https://sketchfab.com/models/a735f2f13d184cb79cb4eb5ff9c5f66b/embed?autospin=1&autostart=1', audioSrc: "/audio/neem.mp3" },
    { imageSrc: '/images/New aloevera.png', multimedia: ['/images/aloevera2.png', '/images/aloevera3.png', '/images/aloevera4.png', 'https://www.youtube.com/embed/7NqgGS1_zmE?si=9WEnCcRm58nCJoSy'], name: 'Aloe Vera', region: 'Tropical', type: 'Succulent', habitat: 'Ayurveda', botname: 'Aloe barbadensis miller', comnames: 'Aloe, Ghritkumari', meduses: 'Used for skin healing, digestion, and immunity boost', methofcul: 'Requires well-drained soil and bright, indirect sunlight', description: 'Aloe Vera is a succulent plant known for its numerous medicinal and skincare benefits. It is rich in vitamins, minerals, and antioxidants, making it highly effective in soothing burns, healing wounds, and moisturizing the skin. Aloe Vera is also used in digestive health, as its gel helps relieve acidity, constipation, and inflammation.', sketchfabModelUrl: 'https://sketchfab.com/models/689a4edc310149938fddf1e875bf2562/embed?autospin=1&autostart=1', audioSrc: "/audio/aloe vera.mp3" },
    { imageSrc: '/images/New lavender.jpg', multimedia: ['/images/lavender2.png', '/images/lavender3.png', '/images/lavender4.png', 'https://www.youtube.com/embed/8Oxw4BgqQ2Y?si=MVyTAJ43oFLRvUza'], name: 'Lavender', region: 'Mediterranean', type: 'Herb', habitat: 'Dry, well-drained soil, full sunlight', botname: 'Lavandula angustifolia', comnames: 'Lavender, English Lavender, True Lavender', meduses: 'Used for stress relief, sleep aid, and skincare; has anti-inflammatory and antiseptic properties', methofcul: 'Grows best in full sun with well-drained, sandy soil; requires moderate watering and pruning after flowering', description: 'Lavender is a fragrant herb known for its calming properties. It is widely used in aromatherapy, skincare, and herbal medicine to reduce stress, improve sleep, and soothe skin irritations.', sketchfabModelUrl: 'https://sketchfab.com/models/08f35ae30b924678955b4bb483b86a70/embed?autospin=1&autostart=1', audioSrc: "/audio/lavender.mp3" },
    { imageSrc: '/images/New sage.png', multimedia: ['/images/sage2.png', '/images/sage3.png', '/images/sage4.png', 'https://www.youtube.com/embed/aaKJm9jad6Q?si=fcqs8MYzl1HTKTAi'], name: 'Sage', region: 'Mediterranean', type: 'Herb', habitat: 'Well-drained soil, full sunlight', botname: 'Salvia officinalis', comnames: 'Common Sage, Garden Sage, Culinary Sage', meduses: 'Used for improving digestion, boosting memory, supporting respiratory health, and has antimicrobial and anti-inflammatory properties', methofcul: 'Thrives in full sun with well-drained soil; requires moderate watering and occasional pruning to encourage growth', description: 'Sage is a medicinal herb known for its antioxidant and antimicrobial properties. It is commonly used in cooking, herbal teas, and traditional medicine to boost memory, improve digestion, and support respiratory health.', sketchfabModelUrl: 'https://sketchfab.com/models/f41f028de9ca4be2b2e85df0820508ae/embed?autospin=1&autostart=1', audioSrc: "/audio/sage.mp3" },
    { imageSrc: '/images/New cactus.png', multimedia: ['/images/cactus2.png', '/images/cactus3.png', '/images/cactus4.png', 'https://www.youtube.com/embed/Uds_rPbFkpU?si=Z5pkrP2xGsrmN1G9'], name: 'Cactus', region: 'Desert', type: 'Succulent', habitat: 'Arid, dry environments', botname: 'Cactaceae', comnames: 'Prickly Pear, Saguaro, Barrel Cactus', meduses: 'Used for treating burns, wounds, hydration, and as a food source; rich in antioxidants and fiber', methofcul: 'Thrives in sandy, well-drained soil with minimal watering; requires full sunlight and warm temperatures', description: 'Cactus plants are adapted to survive in harsh desert conditions. They store water in their thick stems and provide food, medicine, and shelter for wildlife. Some varieties have medicinal benefits, such as treating burns and wounds.', sketchfabModelUrl: 'https://sketchfab.com/models/e3482c16415841568e2a05fe9e76b183/embed?autospin=1&autostart=1', audioSrc: "/audio/cactus.mp3" },
    { imageSrc: '/images/New dandelion.jpg', multimedia: ['/images/dandelion2.png', '/images/dandelion3.png', '/images/dandelion4.png', 'https://www.youtube.com/embed/T6pjGwkK2po?si=ar7M8GDjw34P89hu'], name: 'Dandelion', region: 'Temperate', type: 'Herb', habitat: 'Grasslands, meadows, gardens', botname: 'Taraxacum officinale', comnames: 'Common Dandelion, Lion’s Tooth, Blowball', meduses: 'Supports liver function, aids digestion, detoxifies the body, and is rich in vitamins A, C, and K', methofcul: 'Grows well in nutrient-rich, well-drained soil with full to partial sunlight; can be propagated by seeds', description: 'Dandelion is a common herb with powerful medicinal properties. Its leaves and roots are used for detoxification, digestion, and liver health. It is also rich in vitamins and antioxidants.', sketchfabModelUrl: 'https://sketchfab.com/models/dae101f697f54fb38e78dcfd6cb0e31c/embed?autospin=1&autostart=1', audioSrc: "/audio/dandelion.mp3" },
    { imageSrc: '/images/New eucalyptus.png', multimedia: ['/images/eucalyptus2.png', '/images/eucalyptus3.png', '/images/eucalyptus4.png', 'https://www.youtube.com/embed/N8xcQRCSKbQ?si=xxaP0Y4XMRM4sVXP'], name: 'Eucalyptus', region: 'Australia', type: 'Tree', habitat: 'Warm, dry climates', botname: 'Eucalyptus globulus', comnames: 'Gum Tree, Blue Gum, Fever Tree', meduses: 'Used for respiratory relief, antibacterial properties, pain relief, and as an insect repellent', methofcul: 'Thrives in well-drained soil with full sunlight; propagated through seeds or cuttings', description: 'Eucalyptus is a fast-growing tree known for its essential oils, which have antibacterial and respiratory benefits. It is commonly used in cold remedies, aromatherapy, and as a natural insect repellent.', sketchfabModelUrl: 'https://sketchfab.com/models/d021e7909df44e03b976c1374bfab9dc/embed?autospin=1&autostart=1', audioSrc: "/audio/eucalyptus.mp3" },
    { imageSrc: '/images/New hibiscus.png', multimedia: ['/images/hibiscus2.png', '/images/hibiscus3.png', '/images/hibiscus4.png', 'https://www.youtube.com/embed/4W44xiXvUAI?si=T-hBaOKpbJ32CCpe'], name: 'Hibiscus', region: 'Tropical', type: 'Flowering plant', habitat: 'Warm, humid climates', botname: 'Hibiscus rosa-sinensis', comnames: 'Rose Mallow, Chinese Hibiscus, Shoeblackplant', meduses: 'Used to lower blood pressure, improve digestion, promote hair growth, and support heart health', methofcul: 'Grows in well-drained soil with full sun to partial shade; propagated through cuttings or seeds', description: 'Hibiscus is a vibrant flowering plant known for its health benefits. Hibiscus tea is rich in antioxidants and is used to support heart health, reduce blood pressure, and boost immunity.', sketchfabModelUrl: 'https://sketchfab.com/models/120-7f7e3be6a04847f79de0151300de32bb/embed?autospin=1&autostart=1', audioSrc: "/audio/hibiscus.mp3" },
    { imageSrc: '/images/New rosemary.png', multimedia: ['/images/rosemary2.png', '/images/rosemary3.png', '/images/rosemary4.png', 'https://www.youtube.com/embed/GrnrDsGao20?si=SOGnrcs5UROhX536'], name: 'Rosemary', region: 'Mediterranean', type: 'Herb', habitat: 'Well-drained soil, full sunlight', botname: 'Salvia rosmarinus', comnames: 'Dew of the Sea, Compass Weed, Polar Plant', meduses: 'Enhances memory, supports digestion, relieves muscle pain, and has antimicrobial properties', methofcul: 'Grows best in sandy, well-drained soil with full sun; propagated through cuttings or seeds', description: 'Rosemary is a fragrant herb known for its culinary and medicinal properties. It enhances memory, supports digestion, and has anti-inflammatory and antimicrobial effects. It is commonly used in cooking and herbal remedies.', sketchfabModelUrl: 'https://sketchfab.com/models/d5c0f249ff8a4d13840abf681bb92d29/embed?autospin=1&autostart=1', audioSrc: "/audio/rosemary.mp3" },
    { imageSrc: '/images/New ashwagandha.png', multimedia: ['/images/ashwagandha2.png', '/images/ashwagandha3.png', '/images/ashwagandha4.png', 'https://www.youtube.com/embed/OE14JsyuEII?si=mqgjr9iTqhlU9kOU'], name: 'Ashwagandha', region: 'Arid', type: 'Shrub', habitat: 'Dry Regions, India, Africa', botname: 'Withania somnifera', comnames: 'Indian Ginseng, Winter Cherry', meduses: 'Reduces stress, boosts immunity, enhances brain function, and improves energy levels', methofcul: 'Grows in dry, well-drained soil with full sun; propagated through seeds', description: 'Ashwagandha is a powerful adaptogenic herb used in Ayurvedic medicine to reduce stress, boost immunity, and enhance brain function. It is known for its rejuvenating properties and is widely used in herbal supplements.', sketchfabModelUrl: 'https://sketchfab.com/models/88b1bf03a6254dc2b56cec4dce3f22f1/embed?autospin=1&autostart=1', audioSrc: "/audio/ashwaganda.mp3" },
    { imageSrc: '/images/New ginger.png', multimedia: ['/images/ginger2.png', '/images/ginger3.png', '/images/ginger4.png', 'https://www.youtube.com/embed/uniaqvtHVhw?si=5ooLbhjODICnEbX2'], name: 'Ginger', region: 'Tropical & Subtropical', type: 'Rhizome', habitat: 'Moist, well-drained soil with warm temperatures', botname: 'Zingiber officinale', comnames: 'Adrak, Gingembre', meduses: 'Aids digestion, reduces nausea, relieves inflammation, supports immunity', methofcul: 'Grows in warm, humid climates; propagated through rhizome division', description: 'Ginger is a widely used spice and medicinal plant known for its anti-inflammatory and digestive benefits. It helps with nausea, boosts immunity, and has antioxidant properties.', sketchfabModelUrl: 'https://sketchfab.com/models/7394ddf198fa45e5ae23568de58de415/embed?autospin=1&autostart=1', audioSrc: "/audio/ginger.mp3" }
  ];

  // Filtered plants based on selected filters
  const filteredPlants = plants.filter(plant =>
    (filterRegion === 'All Regions' || plant.region === filterRegion) &&
    (filterType === 'All Types' || plant.type === filterType) &&
    (plant.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Toggle bookmark
  const toggleBookmark = (plantName) => {
    setBookmarks(prevBookmarks => {
      if (prevBookmarks.includes(plantName)) {
        // Remove from bookmarks
        return prevBookmarks.filter(name => name !== plantName);
      } else {
        // Add to bookmarks
        return [...prevBookmarks, plantName];
      }
    });
  };

  // Toggle between displaying bookmarks and plant cards
  const handleShowBookmarks = () => {
    setShowBookmarks(!showBookmarks);
  };

  // State for quiz popup
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Function to toggle quiz popup
  const toggleQuiz = () => {
    setIsQuizOpen(!isQuizOpen);
  };

  // Check if there are any bookmarks
  const hasBookmarks = bookmarks.length > 0;

  const [currentMultimediaIndex, setCurrentMultimediaIndex] = useState(0);

  // Function to handle navigation between multimedia items
  const handleNextMultimedia = () => {
    if (selectedPlant) {
      setCurrentMultimediaIndex((prevIndex) =>
        prevIndex === selectedPlant.multimedia.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePreviousMultimedia = () => {
    if (selectedPlant) {
      setCurrentMultimediaIndex((prevIndex) =>
        prevIndex === 0 ? selectedPlant.multimedia.length - 1 : prevIndex - 1
      );
    }
  };

  const plantCardsRef = useRef(null);
  // Function to scroll to the PlantCards section
  const scrollToPlantCards = () => {
    if (plantCardsRef.current) {
      plantCardsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Create a ref for the audio element
  const audioRef = useRef(null);

  // Function to play the audio
  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <div className="font-poppins scrollbar-thin">
        {/* Navbar */}
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-30">
          <div className="container mx-auto flex items-center py-4 px-8">
            {/* Logo */}
            <div className="flex-shrink-0 text-black text-2xl font-semibold">
              <img src="/images/AYURB.png" alt="AYURB Logo" className="h-10 ml-5" />
            </div>

            {/* Middle: Links */}
            <div className="flex-grow flex justify-center space-x-8">
              <Link to="/" className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-sub-color hover:text-sub-color transition-colors duration-200">
                Home
              </Link>
              <Link to="/about" className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-sub-color hover:text-sub-color transition-colors duration-200">
                About
              </Link>
              <Link to="/ar" className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-sub-color hover:text-sub-color transition-colors duration-200">
                AR
              </Link>
              <Link to="/health-wellness" className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-sub-color hover:text-sub-color transition-colors duration-200">
                Health
              </Link>
              <button
                onClick={handleShowBookmarks}
                className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-sub-color hover:text-sub-color transition-colors duration-200"
              >
                Bookmarks
              </button>
            </div>

            {/* Right Side: Search Bar, Filter, Quiz, AR */}
            <div className="flex items-center space-x-4">
              {/* Search Box */}
              <div className="flex items-center w-80">
                <span className="material-icons text-main-color ml-2 mr-3">search</span>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="flex-grow p-2 border rounded-xl border-main-color bg-sec-color placeholder:text-gray-400"
                  placeholder="Search for plants..."
                />
              </div>

              {/* Filter Button */}
              <button
                onClick={toggleFilter}
                className="flex items-center px-4 py-2 border border-main-color text-main-color rounded-xl bg-sec-color hover:bg-main-color hover:text-white transition-colors duration-200"
              >
                <i className="fa-solid fa-filter mr-2"></i>Filter
              </button>

              {/* Quiz Button */}
              <button
                onClick={toggleQuiz}
                className="px-4 py-2 border border-main-color text-main-color rounded-xl bg-sec-color hover:bg-main-color hover:text-white transition-colors duration-200"
              >
                <i className="fa-solid fa-question-circle mr-2"></i>Quiz
              </button>
            </div>
          </div>
        </nav>


        {/* Filter Slider (Fixed with Transparency and Blur Effect) */}
        <div
          className={`fixed top-16 z-20 left-0 w-full bg-white bg-opacity-80 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out ${isFilterOpen ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <div className="flex flex-wrap px-8 py-4">
            {/* Filter by Region */}
            <div className="flex-1 mb-2 mr-5 mt-3">
              <label className="block text-gray-700">Filter by Region:</label>
              <select
                value={filterRegion}
                onChange={handleRegionChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option>All Regions</option>
                <option>Tropical</option>
                <option>Arid</option>
                <option>Mediterranean</option>
                <option>Temperate</option>
                <option>North America</option>
              </select>
            </div>

            {/* Filter by Type */}
            <div className="flex-1 mb-2 mr-5 mt-3">
              <label className="block text-gray-700">Filter by Type:</label>
              <select
                value={filterType}
                onChange={handleTypeChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option>All Types</option>
                <option>Herb</option>
                <option>Succulent</option>
                <option>Shrub</option>
                <option>Flowering Plant</option>
              </select>
            </div>

            {/* Filter by Medicinal Uses */}
            <div className="flex-1 mb-2 mt-3">
              <label className="block text-gray-700">Filter by Medicinal Uses:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Search by Ayush, Naturopathy, etc."
              />
            </div>
          </div>
        </div>

        <FirstPage onGetStartedClick={scrollToPlantCards} />

        {/* Plant Cards or Bookmarked Plants */}
        <div className="container mx-auto mt-12 px-8 py-10 shadow-lg" ref={plantCardsRef}>
          {showBookmarks ? (
            <>
              {bookmarks.length > 0 ? (  // Check if there are any bookmarks
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {/* Show bookmarked plants */}
                  {plants
                    .filter(plant => bookmarks.includes(plant.name))
                    .map((plant, index) => (
                      <PlantCard
                        key={index}
                        imageSrc={plant.imageSrc}
                        name={plant.name}
                        region={plant.region}
                        type={plant.type}
                        ayush={plant.ayush}
                        audioSrc={plant.audioSrc} // Pass audio source as a prop
                        isBookmarked={bookmarks.includes(plant.name)}
                        onBookmarkToggle={() => toggleBookmark(plant.name)}
                        onLearnMore={() => openPopup(plant)}
                      />
                    ))}
                </div>
              ) : (
                <p className="text-center text-gray-500">NO BOOKMARKS SAVED</p>  // Show "NO BOOKMARKS SAVED" if no bookmarks exist
              )}
            </>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Show all plants */}
              {filteredPlants.map((plant, index) => (
                <PlantCard
                  key={index}
                  imageSrc={plant.imageSrc}
                  name={plant.name}
                  type={plant.type}
                  audioSrc={plant.audioSrc} // Pass audio source as a prop
                  isBookmarked={bookmarks.includes(plant.name)}
                  onBookmarkToggle={() => toggleBookmark(plant.name)}
                  onLearnMore={() => openPopup(plant)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Popup content with dynamic 3D model and description */}
      {isPopupOpen && selectedPlant && (
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-black bg-opacity-50">
          <div className="bg-sec-color rounded-lg p-8 w-4/5 max-w-4xl overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-3xl font-medium text-gray-600 hover:text-red-500"
            >
              &times;
            </button>

            {/* Popup Content */}
            <div className=" grid grid-cols-2 grid-rows-2 gap-4">
              {/* Left side: 3D Model and Multimedia */}
              <div className="row-span-1">
                <iframe
                  title={selectedPlant.name}
                  src={selectedPlant.sketchfabModelUrl}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-72 rounded-lg"
                ></iframe>
              </div>

              {/* Plant Info and Audio Wrapper */}
              <div className=" row-span-1 ml-4 leading-8" style={{ maxHeight: '310px', overflowY: 'hidden' }}>

                {/* Right side: Plant Info */}
                <div className="overflow-y-auto" style={{ maxHeight: '235px' }}>
                  <h2 className="text-xl font-semibold mb-2">{selectedPlant.name}</h2>
                  <p className="mt-4 text-lg">{selectedPlant.description}</p>
                  <div className="mt-4">
                    <p><b>Region:</b> {selectedPlant.region}</p>
                    <p><b>Type:</b> {selectedPlant.type}</p>
                    <p><b>Habitat:</b> {selectedPlant.habitat}</p>
                    <p><b>Botanical Name:</b> {selectedPlant.botname}</p>
                    <p><b>Common Names:</b> {selectedPlant.comnames}</p>
                    <p><b>Medicinal Uses:</b> {selectedPlant.meduses}</p>
                    <p><b>Methods of Cultivation:</b> {selectedPlant.methofcul}</p>
                    {/* Add more plant information here */}
                  </div>
                </div>

                {/* Audio Player: Positioned below the plant info section */}
                <div className="mt-2">
                  <audio
                    ref={audioRef}
                    src={selectedPlant.audioSrc} // Use the selected plant's audio source
                    controls // Adds the default browser audio controls
                    className="w-full bg-gray-100 rounded-full" // Adjust width and styling as needed
                  >
                    Your browser does not support the audio element.
                  </audio>
                </div>

              </div>

              {/* Section 3: Multimedia (Bottom Left) */}
              <div className="row-span-1 mt-5 relative">
                {/* Conditionally render image or video */}
                {selectedPlant && selectedPlant.multimedia && (
                  <>
                    {selectedPlant.multimedia[currentMultimediaIndex].includes('youtube.com') ? (
                      // If it's a YouTube video
                      <iframe
                        className="h-64 object-cover w-full rounded-lg"
                        src={selectedPlant.multimedia[currentMultimediaIndex]}
                        frameBorder="0"
                        allowFullScreen
                        title="Video"
                      ></iframe>
                    ) : (
                      // If it's an image
                      <img
                        src={selectedPlant.multimedia[currentMultimediaIndex]}
                        alt={selectedPlant.name}
                        className="h-64 object-cover w-full rounded-lg"
                      />
                    )}

                    {/* Left Arrow Button */}
                    <button
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 hover:bg-gray-300 p-2 rounded-full"
                      onClick={handlePreviousMultimedia}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>

                    {/* Right Arrow Button */}
                    <button
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 hover:bg-gray-300 p-2 rounded-full"
                      onClick={handleNextMultimedia}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </>
                )}
              </div>

              {/* Section 4: Notes */}
              <div className="row-span-1 p-4 mt-5">
                <h3 className="text-xl font-semibold mb-5">Notes :</h3>
                <textarea
                  id="notes-textarea"
                  rows="5"
                  className="w-full p-2 border rounded-md"
                  placeholder="Write your notes here..."
                ></textarea>

                {/* Flex container for buttons and audio player */}
                <div className="flex items-center mt-2">
                  {/* Download Button */}
                  <button
                    className="text-sm px-4 py-2 bg-main-color text-white rounded hover:bg-sub-color transition-colors duration-200"
                    onClick={handleDownloadNotes}
                  >
                    <i className="fa-solid fa-download mr-2"></i>
                    Download
                  </button>

                  {/* Share Button */}
                  <button
                    className="text-sm px-4 py-2 bg-main-color text-white rounded ml-2 hover:bg-sub-color transition-colors duration-200"
                    onClick={handleShareNotes}
                  >
                    <i className="fa-solid fa-share mr-2"></i>
                    Share
                  </button>

                  {/* Comment Button */}
                  <button
                    className="text-sm px-4 py-2 bg-main-color text-white rounded ml-2 hover:bg-sub-color transition-colors duration-200"
                  >
                    <i class="fa-regular fa-comment mr-2"></i>
                    Comment
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      <AyushCards />

      {/* Chatbot Button and Iframe */}
      <div className="fixed bottom-4 right-4 z-50">
        {/* Chatbot Toggle Button */}
        <button
          onClick={toggleChatbot1}
          className={`bg-main-color text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center ${showChatbot ? 'hidden' : ''}`}
          style={{ width: '50px', height: '50px' }} // Adjust the button size
        >
          <span className="material-icons" style={{ fontSize: '28px' }}>chat</span> {/* Adjust icon size */}
        </button>

        {/* Chatbot Iframe */}
        {showChatbot && (
          <div className="relative">
            <iframe
              width="350"
              height="430"
              allow="microphone;"
              src="https://console.dialogflow.com/api-client/demo/embedded/501ea8ff-d991-47ee-90f1-faaa49b0963f"
              className="border border-gray-300 rounded-lg shadow-lg"
              style={{ zIndex: 9999 }}
            ></iframe>
            <button
              onClick={toggleChatbot}
              className="absolute top-2 right-2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
              style={{ zIndex: 10000 }}
            >
              <span className="material-icons" style={{ width: '20px', height: '5px' }} >close</span> {/* Adjust close icon size */}
            </button>
          </div>
        )}
      </div>

      <Footer />

      {/* Quiz Popup */}
      <QuizPopup isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </>
  );
}

export default Home;
