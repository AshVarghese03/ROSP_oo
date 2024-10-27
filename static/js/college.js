const colleges = [
        // Nashik Colleges
        { name: "K. K. Wagh Institute of Engineering Education and Research", city: "Nashik", state: "Maharashtra", cityRank: 1, stateRank: 5,learnMoreUrl: "https://www.kkwagh.edu.in/engineering/", logo: "" },
        { name: "D. Y. Patil College of Engineering", city: "Nashik", state: "Maharashtra", cityRank: 2, stateRank: 10,learnMoreUrl: "https://www.dypcoeakurdi.ac.in/", logo: "https://www.dypcoeakurdi.ac.in/assets/images/DYP_LOGO.png" },
        { name: "M. S. Bidve Engineering College", city: "Nashik", state: "Maharashtra", cityRank: 3, stateRank: 12,learnMoreUrl: "https://www.msbecl.ac.in/", logo: "" },
        { name: "Shah and Anchor Kutchhi Engineering College", city: "Nashik", state: "Maharashtra", cityRank: 4, stateRank: 15,learnMoreUrl: "https://www.sakec.ac.in/", logo: "" },
        { name: "S. B. Patil College of Engineering", city: "Nashik", state: "Maharashtra", cityRank: 5, stateRank: 18,learnMoreUrl: "https://www.sbpcoe.com/", logo: "https://www.sbpcoe.com/wp-content/uploads/2019/02/cropped-engg-logo-png.png" },
        { name: "J. D. College of Engineering and Management", city: "Nashik", state: "Maharashtra", cityRank: 6, stateRank: 20,learnMoreUrl: "https://jdcoem.ac.in/", logo: "" },
        { name: "Smt. Chandaben Home Science College", city: "Nashik", state: "Maharashtra", cityRank: 7, stateRank: 25,learnMoreUrl: "https://cmphmc.org/", logo: "" },
        { name: "Nashik Institute of Technology", city: "Nashik", state: "Maharashtra", cityRank: 8, stateRank: 30,learnMoreUrl: "https://www.nitnasik.com/", logo: "" },
        { name: "Mahatma Gandhi Mission's College of Engineering", city: "Nashik", state: "Maharashtra", cityRank: 9, stateRank: 35,learnMoreUrl: "http://www.mgmmumbai.ac.in/mgmcet/home", logo: "" },
        { name: "Sahyadri Valley College of Engineering", city: "Nashik", state: "Maharashtra", cityRank: 10, stateRank: 40 ,learnMoreUrl: "https://www.sahyadrivalleycollege.com/", logo: ""},
        { name: "D. Y. Patil Institute of Technology", city: "Nashik", state: "Maharashtra", cityRank: 11, stateRank: 42,learnMoreUrl: "https://engg.dypvp.edu.in/", logo: "" },
        { name: "Smt. Hiraben Nanavati Institute of Technology", city: "Nashik", state: "Maharashtra", cityRank: 12, stateRank: 43 ,learnMoreUrl: "https://hnimr.org/", logo: ""},
        { name: "K. K. Wagh College of Pharmacy", city: "Nashik", state: "Maharashtra", cityRank: 13, stateRank: 45,learnMoreUrl: "https://pharmacy.kkwagh.edu.in/", logo: "" },
        { name: "Nashik Engineering College", city: "Nashik", state: "Maharashtra", cityRank: 14, stateRank: 47 ,learnMoreUrl: "#", logo: ""},
        { name: "Sulaiman Abdur Rahman College of Engineering", city: "Nashik", state: "Maharashtra", cityRank: 15, stateRank: 50 ,learnMoreUrl: "#", logo: ""},
        { name: "K. T. Patil College of Engineering", city: "Nashik", state: "Maharashtra", cityRank: 16, stateRank: 52 ,learnMoreUrl: "https://ktpcoeo.com/", logo: ""},
        { name: "Nashik Institute of Technology", city: "Nashik", state: "Maharashtra", cityRank: 17, stateRank: 55 ,learnMoreUrl: "https://www.nitnasik.com/", logo: ""},
        { name: "Nashik Engineering College", city: "Nashik", state: "Maharashtra", cityRank: 18, stateRank: 58 ,learnMoreUrl: "#", logo: ""},
        { name: "Sulaiman Abdur Rahman College of Engineering", city: "Nashik", state: "Maharashtra", cityRank: 19, stateRank: 60 ,learnMoreUrl: "#", logo: ""},
        { name: "G. N. Khalsa College of Engineering and Management", city: "Nashik", state: "Maharashtra", cityRank: 20, stateRank: 62 ,learnMoreUrl: "https://gnkhalsa.edu.in/", logo: ""},
    
        // Nagpur Colleges
        { name: "Visvesvaraya National Institute of Technology", city: "Nagpur", state: "Maharashtra", cityRank: 1, stateRank: 2,learnMoreUrl: "https://vnit.ac.in/", logo: "" },
        { name: "G.H. Raisoni College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 2, stateRank: 6,learnMoreUrl: "https://ghrce.raisoni.net/", logo: "" },
        { name: "Priyadarshini Institute of Engineering and Technology", city: "Nagpur", state: "Maharashtra", cityRank: 3, stateRank: 11 ,learnMoreUrl: "http://pcenagpur.edu.in/", logo: ""},
        { name: "Dr. D. Y. Patil Institute of Technology", city: "Nagpur", state: "Maharashtra", cityRank: 4, stateRank: 17 ,learnMoreUrl: "https://engg.dypvp.edu.in/", logo: ""},
        { name: "K.D. Kachhawa College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 5, stateRank: 22 ,learnMoreUrl: "#", logo: ""},
        { name: "Nagpur Institute of Technology", city: "Nagpur", state: "Maharashtra", cityRank: 6, stateRank: 38 ,learnMoreUrl: "https://nit.edu.in/", logo: ""},
        { name: "Shri Ramdeobaba College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 7, stateRank: 36 ,learnMoreUrl: "https://www.rknec.edu/", logo: ""},
        { name: "Rajiv Gandhi College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 8, stateRank: 32 ,learnMoreUrl: "https://www.mctrgit.ac.in/", logo: ""},
        { name: "Yeshwantrao Chavan College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 9, stateRank: 39 ,learnMoreUrl: "https://ycce.edu/", logo: ""},
        { name: "Smt. Radhikatai Pandav College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 10, stateRank: 40 ,learnMoreUrl: "https://srpce.ac.in/", logo: ""},
        { name: "Lata Mangeshkar College of Music and Technology", city: "Nagpur", state: "Maharashtra", cityRank: 11, stateRank: 41 ,learnMoreUrl: "#", logo: ""},
        { name: "Priyadarshini College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 12, stateRank: 45 ,learnMoreUrl: "http://pcenagpur.edu.in/", logo: ""},
        { name: "Shri Sai College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 13, stateRank: 46 ,learnMoreUrl: "https://sscet.in/", logo: ""},
        { name: "N. M. Institute of Engineering and Technology", city: "Nagpur", state: "Maharashtra", cityRank: 14, stateRank: 47 ,learnMoreUrl: "https://nmiet.ac.in/", logo: ""},
        { name: "Shri Datta Meghe College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 15, stateRank: 49 ,learnMoreUrl: "https://www.dmce.ac.in/", logo: ""},
        { name: "G. S. Mandal's Institute of Technology", city: "Nagpur", state: "Maharashtra", cityRank: 16, stateRank: 50 ,learnMoreUrl: "https://engg.mit.asia/", logo: ""},
        { name: "Smt. Radhikatai Pandav College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 17, stateRank: 51 ,learnMoreUrl: "https://srpce.ac.in/", logo: ""},
        { name: "Dr. Anusaya D. Patil College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 18, stateRank: 53 ,learnMoreUrl: "#", logo: ""},
        { name: "D. S. S. College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 19, stateRank: 54 ,learnMoreUrl: "#", logo: ""},
        { name: "K. D. Kachhawa College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 20, stateRank: 55 ,learnMoreUrl: "#", logo: ""},
    
        // Mumbai Colleges
        { name: "Veermata Jijabai Technological Institute (VJTI)", city: "Mumbai", state: "Maharashtra", cityRank: 1, stateRank: 4 ,learnMoreUrl: "https://vjti.ac.in/", logo: ""},
        { name: "Sardar Patel Institute of Technology (SPIT)", city: "Mumbai", state: "Maharashtra", cityRank: 2, stateRank: 6 ,learnMoreUrl: "https://www.spit.ac.in/", logo: ""},
        { name: "D. J. Sanghvi College of Engineering", city: "Mumbai", state: "Maharashtra", cityRank: 3, stateRank: 7 ,learnMoreUrl: "https://www.djsce.ac.in/", logo: ""},
        { name: "Thadomal Shahani Engineering College", city: "Mumbai", state: "Maharashtra", cityRank: 4, stateRank: 10 ,learnMoreUrl: "https://tsec.edu/", logo: ""},
        { name: "Rizvi College of Engineering", city: "Mumbai", state: "Maharashtra", cityRank: 5, stateRank: 11 ,learnMoreUrl: "https://eng.rizvi.edu.in/", logo: ""},
        { name: "K. J. Somaiya College of Engineering", city: "Mumbai", state: "Maharashtra", cityRank: 6, stateRank: 15 ,learnMoreUrl: "https://kjsce.somaiya.edu/en/", logo: ""},
        { name: "Shivaji University", city: "Mumbai", state: "Maharashtra", cityRank: 7, stateRank: 18 ,learnMoreUrl: "https://www.unishivaji.ac.in/", logo: ""},
        { name: "Dwarkadas J. Sanghvi College of Engineering", city: "Mumbai", state: "Maharashtra", cityRank: 8, stateRank: 22 ,learnMoreUrl: "https://www.djsce.ac.in/", logo: ""},
        { name: "Fr. Conceicao Rodrigues College of Engineering", city: "Mumbai", state: "Maharashtra", cityRank: 9, stateRank: 23 ,learnMoreUrl: "http://www.frcrce.ac.in/", logo: ""},
        { name: "Shri Chhatrapati Shivaji Maharaj College of Engineering", city: "Mumbai", state: "Maharashtra", cityRank: 10, stateRank: 25 ,learnMoreUrl: "https://scoea.org/", logo: ""},
        { name: "Don Bosco Institute of Technology", city: "Mumbai", state: "Maharashtra", cityRank: 11, stateRank: 28 ,learnMoreUrl: "https://www.dbit.in/", logo: ""},
        { name: "St. Francis Institute of Technology", city: "Mumbai", state: "Maharashtra", cityRank: 12, stateRank: 30 ,learnMoreUrl: "https://www.sfit.ac.in/", logo: ""},
        { name: "Vivekanand Education Society's Institute of Technology", city: "Mumbai", state: "Maharashtra", cityRank: 13, stateRank: 31 ,learnMoreUrl: "https://vesit.ves.ac.in/", logo: ""},
        { name: "Shri Bhagubhai Mafatlal Polytechnic", city: "Mumbai", state: "Maharashtra", cityRank: 14, stateRank: 33 ,learnMoreUrl: "https://sbmp.ac.in/", logo: ""},
        { name: "Bharati Vidyapeeth College of Engineering", city: "Mumbai", state: "Maharashtra", cityRank: 15, stateRank: 35 ,learnMoreUrl: "https://bvcoend.ac.in/", logo: ""},
        { name: "K. J. Somaiya College of Engineering", city: "Mumbai", state: "Maharashtra", cityRank: 16, stateRank: 37 ,learnMoreUrl: "https://bvcoend.ac.in/", logo: ""},
        { name: "Shri Balaji College of Engineering and Management", city: "Mumbai", state: "Maharashtra", cityRank: 17, stateRank: 38 ,learnMoreUrl: "https://www.sribalajiuniversity.org/", logo: ""},
        { name: "Indira Gandhi Institute of Aeronautics", city: "Mumbai", state: "Maharashtra", cityRank: 18, stateRank: 40 ,learnMoreUrl: "https://www.igiaindia.in/", logo: ""},
        { name: "T. M. M. Engineering College", city: "Mumbai", state: "Maharashtra", cityRank: 19, stateRank: 45 ,learnMoreUrl: "https://tkmce.ac.in/", logo: ""},
        { name: "M. H. Saboo Siddik College of Engineering", city: "Mumbai", state: "Maharashtra", cityRank: 20, stateRank: 47 ,learnMoreUrl: "https://www.mhssce.ac.in/", logo: ""},
    
        // Pune Colleges
        { name: "College of Engineering Pune (COEP)", city: "Pune", state: "Maharashtra", cityRank: 1, stateRank: 1,learnMoreUrl: "https://www.coep.org.in/", logo: "" },
        { name: "Vishwakarma Institute of Technology (VIT)", city: "Pune", state: "Maharashtra", cityRank: 2, stateRank: 5 ,learnMoreUrl: "https://www.vit.edu/", logo: ""},
        { name: "Pimpri Chinchwad College of Engineering (PCCOE)", city: "Pune", state: "Maharashtra", cityRank: 3, stateRank: 8 ,learnMoreUrl: "http://www.pccoepune.com/", logo: ""},
        { name: "MIT College of Engineering", city: "Pune", state: "Maharashtra", cityRank: 4, stateRank: 9 ,learnMoreUrl: "https://mitaoe.ac.in/", logo: ""},
        { name: "Bharati Vidyapeeth College of Engineering", city: "Pune", state: "Maharashtra", cityRank: 5, stateRank: 13 ,learnMoreUrl: "https://bvcoend.ac.in/", logo: ""},
        { name: "Dr. D. Y. Patil Institute of Technology", city: "Pune", state: "Maharashtra", cityRank: 6, stateRank: 14 ,learnMoreUrl: "https://engg.dypvp.edu.in/", logo: ""},
        { name: "Smt. Kashibai Navale College of Engineering", city: "Pune", state: "Maharashtra", cityRank: 7, stateRank: 19 ,learnMoreUrl: "https://cms.sinhgad.edu/sinhgad_engineering_institutes/skncoe_vadgaon/institute_details.aspx", logo: ""},
        { name: "Indira College of Engineering and Management", city: "Pune", state: "Maharashtra", cityRank: 8, stateRank: 20 ,learnMoreUrl: "https://indiraicem.ac.in/", logo: ""},
        { name: "Sinhgad Academy of Engineering", city: "Pune", state: "Maharashtra", cityRank: 9, stateRank: 21 ,learnMoreUrl: "https://cms.sinhgad.edu/sinhgad_engineering_institutes/saoe/about_us.aspx", logo: ""},
        { name: "Jayawantrao Sawant College of Engineering", city: "Pune", state: "Maharashtra", cityRank: 10, stateRank: 24 ,learnMoreUrl: "https://jspmjscoe.edu.in/", logo: ""},
        { name: "Pimpri Chinchwad College of Engineering", city: "Pune", state: "Maharashtra", cityRank: 11, stateRank: 25 ,learnMoreUrl: "http://www.pccoepune.com/", logo: ""},
        { name: "K. K. Wagh Institute of Engineering Education and Research", city: "Pune", state: "Maharashtra", cityRank: 12, stateRank: 28 ,learnMoreUrl: "https://www.kkwagh.edu.in/engineering/", logo: ""},
        { name: "R. A. Podar College of Commerce and Economics", city: "Pune", state: "Maharashtra", cityRank: 13, stateRank: 29 ,learnMoreUrl: "https://www.rapodar.ac.in/", logo: ""},
        { name: "G. H. Raisoni College of Engineering", city: "Pune", state: "Maharashtra", cityRank: 14, stateRank: 30 ,learnMoreUrl: "https://ghrce.raisoni.net/", logo: ""},
        { name: "Sanjivani College of Engineering", city: "Pune", state: "Maharashtra", cityRank: 15, stateRank: 32 ,learnMoreUrl: "https://sanjivanicoe.org.in/", logo: ""},
        { name: "D. Y. Patil Institute of Technology", city: "Pune", state: "Maharashtra", cityRank: 16, stateRank: 34 ,learnMoreUrl: "https://engg.dypvp.edu.in/", logo: ""},
        { name: "Fergusson College", city: "Pune", state: "Maharashtra", cityRank: 17, stateRank: 36 ,learnMoreUrl: "https://www.fergusson.edu/", logo: ""},
        { name: "Bharti Vidyapeeth's College of Engineering", city: "Pune", state: "Maharashtra", cityRank: 18, stateRank: 39 ,learnMoreUrl: "https://bvcoend.ac.in/", logo: ""},
        { name: "M. A. Rangoonwala College of Dental Science", city: "Pune", state: "Maharashtra", cityRank: 19, stateRank: 41 ,learnMoreUrl: "https://mardentalcollege.org/", logo: ""},
        { name: "S. S. G. M. College of Engineering", city: "Pune", state: "Maharashtra", cityRank: 20, stateRank: 42 ,learnMoreUrl: "https://www.ssgmce.ac.in/", logo: ""},
    ];

    function handleSelection() {
        const container = document.getElementById('college-container');
        container.innerHTML = ''; // Clear previous results
    
        // Get the selected city and rank filter
        const selectedCity = document.getElementById("college-selector").value;
        const rankFilter = document.getElementById("rank-selector").value;
    
        // Filter colleges based on selection
        let filteredColleges = colleges;
        if (selectedCity !== 'All') {
            filteredColleges = colleges.filter(college => college.city === selectedCity);
        }
    
        // Sort by state rank
        filteredColleges.sort((a, b) => a.stateRank - b.stateRank);
    
        // Limit the number of colleges based on the selected rank filter
        if (rankFilter !== 'All') {
            filteredColleges = filteredColleges.slice(0, rankFilter);
        }
    
        // Create and append college cards
        filteredColleges.forEach(college => {
            console.log(`College: ${college.name}, URL: ${college.learnMoreUrl}`);

            const card = document.createElement('div');
            card.className = 'college-card'; // Updated class name to match your HTML
        
            card.innerHTML = `
                <div class="card-content">
                    <h2 class="card-title">${college.name}</h2>
                    <p class="card-description">City Rank: <strong>${college.cityRank}</strong>, State Rank: <strong>${college.stateRank}</strong></p>
                    <p class="card-location"><i class="fas fa-map-marker-alt"></i> ${college.city}, ${college.state}</p>
                    <a href="${college.learnMoreUrl}" class="learn-more-button" target="_blank">Learn More</a>
                </div>
            `;
            console.log(college.learnMoreUrl);

            container.appendChild(card);
        });
        
    }
    // Initialize with all colleges displayed
    handleSelection();
  