/*
  home.component.ts
  Location: /FlashCourses_web/FlashCourse-web/src/app/home
  Primary Contributor: Lawrence Thompson
  Description: The main component of the Web-App, handles API calls.
  Completion Status: Prototyped. Individual datatypes will be moved
    to data services and individual components. For more information
    about suggested changes and improvements, refer to Web-App architecture -
    Next Steps.

*/

import { Component, OnInit } from '@angular/core';

// Needs to be implemented for versatility.
import { DataService } from '../data.service';
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';

// NgForm needs to be used to pass data more easily in Angular.
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

// Instance variables used to control data from API calls.
InstitutionsLoaded = false;
schools = [];
deckDataRaw = [];
deckData = [];
courseData = [];
courseDataRaw: Object;
CoursesLoaded = false;
cardData = [];
cardDataRaw = Object;
cardspot = 0;
currentCard = {};
front = true;
/*
  Instance variables used to make data appear/disappear.
  When each is set to true, the div will not appear in component.
*/
institutionShown = false;
courseShown = true;
deckShown = true;
cardsShown = false;

// Used for the data.service.ts implementation. For Future use.
  constructor(private http: Http, private dataService: DataService) { }

  // Used to hold objects passed by arguments.
  listData: Object;
  InstitutionData: Object;
  listdata: Object;

  ngOnInit() { }

/*
    TODO: Make error calls show up on screen as an alert/data/DOM.
    createInstitutions(form) -> Creates an Institution
    Argument of form -> Form Data generated in Angular View Event.
  Input JSON Example:
  {
      "ipeds": "183071",
      "institution_name": "University of New Hampshire, Manchester",
      "location": "Manchester, NH"
  }

    Output Success:
  {
      "unique_id": "5f98f627-30cf-417d-9056-0d888de6b3dc",
      "ipeds": "183071",
      "institution_name": "University of New Hampshire, Manchester",
      "location": "Manchester, NH"
  }

  HTTP Code 201

*/

async createInstitutions(form: NgForm) {
 return this.http
  .post(`http://159.65.236.42/courses/api/institution/create/`, {
      ipeds: form.value.ipeds,
      institution_name: form.value.institution_name,
      location: form.value.location
 })
 .subscribe(
   res => {
     console.log(res);
   },
   err => {
     console.log('Error occurred');
   }
 );
}
/*
  getInstitutions() -> API call to the Institutions List.
  Passes JSON Data to the this.InstitutionData Instance Variable.
*/
async getInstitutions() {
  this.institutionShown = true;
  return this.http
  .request(`http://159.65.236.42/courses/api/institution/list/`)
  .subscribe((res: Response) => {
    this.InstitutionData = res.json();
    this.schools = res.json();
    return this.InstitutionData;
  });
}

/*

    Input JSON Example:
  {
      "ipeds": "183071",
      "institution_name": "UNH Manchester",
      "location": "Manchester, NH"
  }

    Output Success:
  {
      "unique_id": "5f98f627-30cf-417d-9056-0d888de6b3dc",
      "ipeds": "183071",
      "institution_name": "UNH Manchester",
      "location": "Manchester, NH"
  }

      HTTP Code 200

*/
async editInstitution(schoolID, form) {
  return this.http
    .put(`http://159.65.236.42/courses/api/institution/update/${schoolID}`, {
      ipeds: form.value.ipeds,
      institution_name: form.value.institution_name,
      location: form.value.location
    }
  )
  .subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log('Error occurred');
    }
  );
}

/*
  Delete College-- Deletes an Institution

    Input JSON Example:
      Not required.
    Output Success:
      HTTP Code 204
    Output Failure:
  {
      "detail": "Not found."
  }
*/

async deleteCollege(schoolID) {
  return this.http
    .delete(`http://159.65.236.42/courses/api/institution/delete/${schoolID}`)
    .subscribe(res => console.log(res.json()));
}

/*
  createCourse(form) -> Allows the user to add in a Deck to a parent_course
    Argument of form -> the form data generated from the Angular View Event.
    Returns a res in the console for created Course.
    TODO: API needs to be updated to pass in parent UUID.
    ?Currently adds a course to the first institution in institution list.
    For Course Model:
    http://159.65.236.42/courses/api/course/create/
    Input JSON Example:
  {
      "course_title": "Advanced Website Development",
      "course_number": "1234",
      "course_id": "COMP 805",
      "parent_institution": 1
  }

    Output Success:
  {
      "unique_id": "828539cb-a9d5-4288-a2cb-ed5a97232748",
      "course_title": "Advanced Website Development",
      "course_number": "1234",
      "course_id": "COMP 805",
      "parent_institution": 1
  }

  HTTP Code 201

*/

async createCourse(form) {
  console.log(form.value);
  return this.http
    .post(`http://159.65.236.42/courses/api/course/create/`, {
        'course_title' : form.value.course_title,
        'course_number': form.value.course_number,
        'course_id': form.value.course_id,
        'parent_institution': 1,
        'course_description': form.value.course_description
    })
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occurred');
      }
    );
}

/*
   TODO: API needs to be updated to pass in parent UUID.
   TODO: Make dynamic update to the Deck Array.
   ?Currently adds a deck to the first course in course list.

   createDeck(form) -> Allows the user to add in a Deck to a parent_course
   Argument of form -> the form data generated from the Angular View Event.
   Returns a res in the console for created Deck.

  Input JSON Example:
  {
      "parent_user": 1,
      "parent_course": 1,
      "title": "Deck 2"
  }

    Output Success:
  {
      "unique_id": "47d1b2b1-2709-4aca-b616-e55e3f630c50",
      "parent_user": 1,
      "parent_course": 1,
      "title": "Deck 2"
  }

  HTTP Code 201
*/

async createDeck(form) {
  return this.http
    .post(`http://159.65.236.42/flashcards/api/deck/create/`, {
        'parent_user' : 1,
        'parent_course': 1,
        'title': form.value.title,
        'deck_description': form.value.deck_description
    })
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occurred');
      }
    );
}

/*
  TODO: make dynamic update and do another API call to the deck list.
  deleteDeck() -- deletes a Deck
  Input JSON Example:
      Not required.
    Output Success:
      HTTP Code 204
    Output Failure:
  {
      "detail": "Not found."
  }

  HTTP Code 404
*/
async deleteDeck(deckID) {
  return this.http
    .delete(`http://159.65.236.42/flashcards/api/deck/delete/${deckID}`)
    .subscribe(res => console.log(res.json()));
}

/*
  deleteCourse(courseID) -- deletes a Course
  Input JSON Example:
		Not required.
	Output Success:
		HTTP Code 204
	Output Failure:
  {
      "detail": "Not found."
  }

			HTTP Code 400
  -Returns Null on the console.
*/

async deleteCourse(courseID) {
  return this.http
  .delete(`http://159.65.236.42/courses/api/course/delete/${courseID}`)
  .subscribe(res => console.log(res.json()));
}




/*
  deleteCard(cardID) -> Deletes a targeted card from the Database.
  Argument of cardID -> the unique_id of the selected card.

  Input JSON Example:
      Not required.
    Output Success:
      HTTP Code 204
    Output Failure:
  {
      "detail": "Not found."
  }

  HTTP Code 404

*/
async deleteCard(cardID) {
  return this.http
    .delete(`http://159.65.236.42/flashcards/api/card/delete/${cardID}`)
    .subscribe(res => console.log(res.json()));
}


/*
  TODO: API needs to be updated to pass in parent_deck UUID.
   ?Currently adds a card to the first deck in deck list.
    Input JSON Example:
  {
      "parent_deck": "2acc2e14-ba15-4e21-b306-25d51ca32ae5",
      "front": "This is the front of the card.",
      "back": "This is the back of the card."
  }

    Output Success:
  {
      "unique_id": "28e3ca65-b0c1-4ac1-8407-256350150f2c",
      "parent_deck": "2acc2e14-ba15-4e21-b306-25d51ca32ae5",
      "front": "This is the front of the card.",
      "back": "This is the back of the card."
  }

  HTTP Code 201

*/
async createCard(form) {
    return this.http
      .post(`http://159.65.236.42/flashcards/api/card/create/`, {
        'parent_deck': 1,
        'front': form.value.front,
        'back': form.value.back
      })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occurred');
        }
      );

}

/*
  grabListData() - Returns all Deck objects.
  Output: All Deck objects.
  Output Fields: unique_id, parent_user,
        parent_course, title, deck_description

*/

async grabListData() {
    return this.http
      .request(`http://159.65.236.42/flashcards/api/deck/list/`)
      .subscribe((res: Response) => {
        this.listData = res.json();
      });
  }

/*
  getCourseData(courseReq) -> does an API call to grab course data.
  Returns a function call to courseDataRaw to show course data.

  -----API CALL INFORMATION----------
  Required Input Fields: <uuid> - Unique ID
  Output:
    A single Institution object with all Courses nested.
  Institution Output Fields:
      unique_id, ipeds, institution_name, location
  Course Output Fields:
      unique_id, course_title, course_number,
      course_id, parent_institution, course_description

*/

async getCourseData(courseReq) {
  this.institutionShown = false;
  return this.http
    .request(`http://159.65.236.42/courses/api/institution/detail/${courseReq}`)
    .subscribe((res: Response) => {
      this.courseDataRaw = res.json();
      this.showCourseData(this.courseDataRaw, courseReq);
    });
}

/*
  showCourseData(courses, parentId)
  Processes course data to render courses.
  courses - a JSON result
  parentId - the argument from the previous API call.
*/

async showCourseData(courses, parentId) {
  const processCourse = Object.keys(courses).map(i => courses[i]);
  const courseArray = processCourse[processCourse.length - 1];
  for (let i = 0; i < courseArray.length; i++ ) {
    if (courseArray[i].parent_institution === parentId) {
      this.courseData.push(courseArray[i]);
    }
  }
}

/*
  getDecks(courseID)
  Argument of courseID
    Input JSON Example:
      Not required.
    Output JSON Example:
  [
      {
          "unique_id": "2acc2e14-ba15-4e21-b306-25d51ca32ae5",
          "parent_user": 1,
          "parent_course": 1,
          "title": "Deck 1",
          “deck_description”: “Deck 1 Description”
      },
      {
          "unique_id": "47d1b2b1-2709-4aca-b616-e55e3f630c50",
          "parent_user": 1,
          "parent_course": 1,
          "title": "Deck Object 2A",
          “deck_description”: “Deck Object 2A Description”
      }
  ]

  HTTP Code 200

*/

async getDecks(courseID) {
  this.courseShown = false;
  return this.http
    .request(`http://159.65.236.42/flashcards/api/deck/list/`)
    .subscribe((res: Response) => {
      this.deckDataRaw = res.json();
      this.showDecks(courseID, this.deckDataRaw);
    });
}
/*
  Processes the deck list from getDecks to return data about the Decks.

*/
async showDecks(course, deck) {
  const processDeck = Object.keys(deck).map(i => deck[i]);
  const deckArray = processDeck;
  console.log(processDeck);
  for (let i = 0; i < deckArray.length; i++) {
    if (deckArray[i].parent_course === course) {
      this.deckData.push(deckArray[i]);
      console.log(this.deckData);
    }
  }
}

/*
  getCards(deck) -> Makes a request to get a deck list in detail, cards included.
  Uses argument of Deck: the detail_id of the card requested.


  Input JSON Example:
      Not required.
    Output Success:
  {
      "unique_id": "2324a149-a2f2-4d2f-9cdc-9a601a835981",
      "parent_user": "patrick",
      "parent_course": "ebe3cab4-06c3-4800-8775-b382c2045bbb",
      "title": "Testing 1 2 3",
      “deck_description”: “Deck Testing 1 2 3 Description”
      "parent_course_url": "/courses/api/course/retrieve/ebe3cab4-06c3-4800-8775-b382c2045bbb",
      "cards": [
          {
              "unique_id": "aa4752d6-b5b9-4984-b682-fff9c4ea6b7a",
              "parent_deck": "2324a149-a2f2-4d2f-9cdc-9a601a835981",
              "front": "Test 1",
              "back": "Test 1",
              "parent_deck_url": "/flashcards/api/deck/retrieve/2324a149-a2f2-4d2f-9cdc-9a601a835981"
          },
          {
              "unique_id": "ea193ef8-a870-446e-94a8-9f464149c4ca",
              "parent_deck": "2324a149-a2f2-4d2f-9cdc-9a601a835981",
              "front": "Test 2",
              "back": "Test 2",
              "parent_deck_url": "/flashcards/api/deck/retrieve/2324a149-a2f2-4d2f-9cdc-9a601a835981"
          },
      ]
  }

  HTTP Code 200

    Output Failure:
  {
      "detail": "Not found."
  }

  HTTP Code 404

*/

async getCards(deck) {
  this.deckShown = false;
  this.cardsShown = true;
  return this.http
    .request(`http://159.65.236.42/flashcards/api/deck/detail/${deck}`)
    .subscribe((res: Response) => {
      this.cardDataRaw = res.json();
      this.showCards(this.cardDataRaw);
    });
}

// Processes API and renders the card object on screen.
// Will return a call to the renderCard function.

async showCards(cards) {
  const processCards = Object.keys(cards).map(i => cards[i]);
  const trimCards = processCards[processCards.length - 1];
  for (let i = 0; i < trimCards.length; i++) {
    this.cardData.push(trimCards[i]);
  }
  this.renderCardForward();
}

// Gets the next card in the deck.
// Alters currentCard to retain in instance of changed data across functions.
async renderCardForward() {
  const current_spot = this.cardspot;
  console.log(current_spot);
  this.cardspot++;
  console.log(this.cardspot);
  this.currentCard = this.cardData[current_spot];
  return this.currentCard;
  }


// Shows the previous card in the deck.
// Alters currentCard to retain in instance of changed data across functions.

async renderCardBackwards() {
  if (this.cardspot !== 0) {
  const current_spot = this.cardspot;
  console.log(current_spot);
  this.cardspot--;
  console.log(this.cardspot);
  this.currentCard = this.cardData[current_spot];
  return this.currentCard;
}
}

/*
  flipCard() -> Flips the current card for interactivity.
*/
flipCard( ) {
  if (this.front === true) {
    this.front = false;
  } else if (this.front === false) {
    this.front = true;
  }
}

}
/*

 ? UNIMPLEMENTED CODE DUE TO UNKNOWN FACTORS/ TIME CONSTRAINTS


*/

/*

New Paradigm - Uses dataService to grabInstitutions. Unimplemented.

async getList() {
  this.listdata = this.dataService.grabInstitutionData();
}

*/

/*
  editDeck: User can Edit a Deck, passes in a DeckID and the form.
  TODO: Edit parent course in API.
  TODO: Implement Login Functionality.
  /flashcards/api/deck/update/<uuid>
  Input JSON Example:
  {
      "unique_id": "47d1b2b1-2709-4aca-b616-e55e3f630c50",
      "parent_user": 1,
      "parent_course": 1,
      "title": "Deck Object 2A"
  }

  Output Success:
  {
    "unique_id": "47d1b2b1-2709-4aca-b616-e55e3f630c50",
    "parent_user": 1,
    "parent_course": 1,
    "title": "Deck Object 2A"
  }
		HTTP Code 200
*/
    // async editDeck(form, deckID) {
    //   return this.http
    //     .put(`http://127.0.0.1:8000/flashcards/api/deck/update/${deckID}` , {
    //       'unique_id': deckID,
    //       'parent_user': 1,
    //       'parent_course': 1,
    //       'title': form.value.title,
    //       'deck_description': form.value.deck

    //     })
    //     .subscribe(
    //       res => {
    //         console.log(res);
    //       },
    //       err => {
    //         console.log('Error occurred');
    //       }
    //     );
    // }

/*
  editCourse - Will edit the
  TODO: API needs to be updated to pass in parent UUID.
   ?Currently edits a targeted course.
  Input JSON Example:
  {
    "ipeds": "183071",
    "institution_name": "UNH Manchester",
    "location": "Manchester, NH"
  }

	Output Success:
  {
    "unique_id": "5f98f627-30cf-417d-9056-0d888de6b3dc",
    "ipeds": "183071",
    "institution_name": "UNH Manchester",
    "location": "Manchester, NH"
  }

		HTTP Code 200

*/
    // async editCourse(courseID, form) {
    //   return this.http
    //     .post(`http://127.0.0.1:8000/courses/api/course/update/${courseID}`, {
    //         'course_title' : form.value.course_title,
    //         'course_number': form.value.course_number,
    //         'course_id': form.value.course_id,
    //         'parent_institution': 1,
    //         'course_description': form.value.course_description
    //     })
    //     .subscribe(
    //       res => {
    //         console.log(res);
    //       },
    //       err => {
    //         console.log('Error occurred');
    //       }
    //     );
    // }


/*
  TODO: UPDATE API TO TAKE IN UUID OF PARENT DECK
  ?Edit the current Card.
  editCard - Will Edit the Card Currently Displayed
    Input JSON Example:
  {
      "unique_id": "963ececc-d7a3-4cf6-a5a5-cd4e79240201",
      "parent_deck": "2acc2e14-ba15-4e21-b306-25d51ca32ae5",
      "front": "This is the front of the card - Test 1.",
      "back": "This is the back of the card - Test 1."
  }

    Output Success:
  {
      "unique_id": "963ececc-d7a3-4cf6-a5a5-cd4e79240201",
      "parent_deck": "2acc2e14-ba15-4e21-b306-25d51ca32ae5",
      "front": "This is the front of the card - Test 1.",
      "back": "This is the back of the card - Test 1."
  }

      HTTP Code 200

*/
    // async editCard(cardID, parent_deck, front, back) {
    //  `http://127.0.0.1:8000/flashcards/api/card/update/`
    // }
