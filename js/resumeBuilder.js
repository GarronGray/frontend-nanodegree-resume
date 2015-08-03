// $("#main").append("Garron Gray");


// var firstName = "Garron";
// var age = 35;
// console.log(firstName);
// var awesomeThoughts = "I am Garron and I am AWESOME!";
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);

// var email = "garron.gray@momentum.co.za";
// var newEmail = email.replace("momentum.co.za", "gmail.com");
// console.log(email);
// console.log(newEmail);

// var name = "Garron Gray";
// var role = "Web Developer";
// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// var skills = ["HTML", "CSS", "JS"];

// $("#main").append(skills);
// $("#main").append(skills[0]);
// $("#main").append(skills.length);

// $("#main").append(bio.skills);
// $("#main").append(work["position"]);
// $("#main").append(education.name);

var bio = {
  "name" : "Garron Gray",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "+27 (0) 82 619 2023",
    "email" : "garron.gray@gmail.com",
    "twitter" : "@GarronGray",
    "github" : "GarronGray",
    "location" : "Johannesburg, South Africa"
  },
  "pic" : "images/garron-tshirt-8-bit-280px.png",
  "welcomeMessage" : "Thanks for coming around. My name is Garron. I'm a product manager at Momentum, and hobbyist web developer.",
  "skills" : [
    "HTML",
    "CSS",
    "JS"
  ]
};

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#header").append(HTMLbioPic.replace("%data%", bio.pic));
$("#header").append(HTMLskillsStart);
$("#header").append(HTMLskills.replace("%data%", bio.skills));

$("#topContacts").prepend(HTMLlocation.replace("%data%", bio.contacts.location));
$("#topContacts").prepend(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").prepend(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts").prepend(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile));


var work = {
  "jobs" : [
    {
      "employer" : "Momentum",
      "title" : "Product Manager",
      "location" : "Centurion, South Africa",
      "dates" : "2012-Present",
      "description" : ""
    },
    {
      "employer" : "Discovery",
      "title" : "Senior Business Analyst",
      "location" : "Sandton, South Africa",
      "dates" : "2011-2012",
      "description" : ""
    },
    {
      "employer" : "Momentum",
      "title" : "Business Analyst",
      "location" : "Centurion, South Africa",
      "dates" : "2008-2011",
      "description" : ""
    },
    {
      "employer" : "Discovery",
      "title" : "Business Analyst",
      "location" : "Sandton, South Africa",
      "dates" : "2005-2008",
      "description" : ""
    }
  ]
};

$("#workExperience").prepend(HTMLworkStart);
$("#workExperience").prepend(HTMLworkEmployer.replace("%data%", work.employer));
$("#workExperience").prepend(HTMLworkTitle.replace("%data%", work.title));
$("#workExperience").prepend(HTMLworkDates.replace("%data%", work.dates));
$("#workExperience").prepend(HTMLworkLocation.replace("%data%", work.location));
$("#workExperience").prepend(HTMLworkDescription.replace("%data%", work.description));




var projects = {
  "projects" : [
    {
      "title" : "momentum.co.za",
      "dates" : "",
      "description" : "",
      "images" : [
        "images/file.png"
      ]
    },
    {
      "title" : "mmiholdings.com",
      "dates" : "",
      "description" : "",
      "images" : [
        "images/file.png"
      ]
    },
    {
      "title" : "mmifoundation.org.za",
      "dates" : "",
      "description" : "",
      "images" : [
        "images/file.png"
      ]
    },
    {
      "title" : "momentumconsult.co.za",
      "dates" : "",
      "description" : "",
      "images" : [
        "images/file.png"
      ]
    },
    {
      "title" : "momentum.co.uk",
      "dates" : "",
      "description" : "",
      "images" : [
        "images/file.png"
      ]
    },
    {
      "title" : "momentumgim.co.uk",
      "dates" : "",
      "description" : "",
      "images" : [
        "images/file.png"
      ]
    },
    {
      "title" : "momentum.co.gg",
      "dates" : "",
      "description" : "",
      "images" : [
        "images/file.png"
      ]
    },
    {
      "title" : "momentumfinancialtechnology.com",
      "dates" : "",
      "description" : "",
      "images" : [
        "images/file.png"
      ]
    },
    {
      "title" : "discovery.co.za",
      "dates" : "",
      "description" : "",
      "images" : [
        "images/file.png"
      ]
    },
    {
      "title" : "Save Thru Spend",
      "dates" : "",
      "description" : "",
      "images" : [
        "images/file.png"
      ]
    },
    {
      "title" : "powerofvitality.com",
      "dates" : "",
      "description" : "",
      "images" : [
        "images/file.png"
      ]
    },
    {
      "title" : "destinyhealth.com",
      "dates" : "",
      "description" : "",
      "images" : [
        "images/file.png"
      ]
    }
  ]
};

var education = {
  "schools" : [
    {
      "name" : "UNISA",
      "location" : "Pretoria, South Africa",
      "degree" : "LLB",
      "majors" : "",
      "dates  " : "2002-2008",
      "url" : "http://www.unisa.ac.za"
    },
    {
      "name" : "AAA School of Advertising",
      "location" : "Johannesburg, South Africa",
      "degree" : "Digital Marketing Strategy",
      "majors" : "",
      "dates" : 2010,
      "url" : "http://www.aaaschool.co.za"
    },
    {
      "name" : "UNISA",
      "location" : "Pretoria, South Africa",
      "degree" : "BCom",
      "majors" : "Informatics",
      "dates" : "2010-2015",
      "url" : "http://www.unisa.ac.za"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-end Web Developer Nanodegree",
      "school" : "Udacity",
      "dates" : 2015,
      "url" : "https://www.udacity.com"
    }
  ]
}
