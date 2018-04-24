import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
service: DataService;
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
  constructor(private http: Http) {

  }
  listData: Object;
  InstitutionData: Object;
  ngOnInit() {
  }

/*
    createInstitutions
    --------Creates an Institution
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

async createInstitutions() {
 //`http://127.0.0.1:8000/courses/api/institution/create/`
}

async getInstitutions() {
  return this.http
  .request(`http://127.0.0.1:8000/courses/api/institution/list/`)
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
async editCollege(schoolID, institution_name, ipeds, location) {
  //`http://127.0.0.1:8000/courses/api/institution/update/${uuid}`
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
  //`http://127.0.0.1:8000/courses/api/institution/delete/${uuid}`
}

/*
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
async createCourse(schoolID, course_title, course_number, course_id) {
  //`http://127.0.0.1:8000/courses/api/course/create/`
}

/*

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
async createDeck(courseID, parent_institution, course_title, course_description) {
  //`http://127.0.0.1:8000/flashcards/api/deck/create/`
}

/*
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
  //`http://127.0.0.1:8000/courses/api/course/delete/${deckID}`
}

/*
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
async editDeck(deckID, parent_course, deck_title, deck_parent_user, deck_description) {
  //`http://127.0.0.1:8000/flashcards/api/deck/update/${deckID}`
}

async deleteCourse(courseID) {
  //`http://127.0.0.1:8000/flashcards/api/deck/delete/`
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
async editCourse(courseID, parent_institution, course_title, course_id, course_description) {
  //`http://127.0.0.1:8000/`
}


/*
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
async editCard(cardID, parent_deck, front, back) {
  //`http://127.0.0.1:8000/flashcards/api/card/update/`
}

/*
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
  //`http://127.0.0.1:8000/flashcards/api/card/delete/`
}


/*

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
async createCard(cardID, parent_user, front, back) {
  //`http://127.0.0.1:8000/flashcards/api/card/create/`
}

async grabListData() {
    return this.http
      .request(`http://127.0.0.1:8000/flashcards/api/deck/list/`)
      .subscribe((res: Response) => {
        this.listData = res.json();
      });
  }

async getCourseData(courseReq) {
  return this.http
    .request(`http://127.0.0.1:8000/courses/api/institution/detail/${courseReq}`)
    .subscribe((res: Response) => {
      this.courseDataRaw = res.json();
      this.showCourseData(this.courseDataRaw, courseReq);
    });
}

async showCourseData(courses, parentId) {
  const processCourse = Object.keys(courses).map(i => courses[i]);
  const courseArray = processCourse[processCourse.length - 1];
  for (let i = 0; i < courseArray.length; i++ ) {
    if (courseArray[i].parent_institution === parentId) {
      this.courseData.push(courseArray[i]);
    }
  }
}

async getDecks(courseID) {
  return this.http
    .request(`http://127.0.0.1:8000/flashcards/api/deck/list/`)
    .subscribe((res: Response) => {
      this.deckDataRaw = res.json();
      this.showDecks(courseID, this.deckDataRaw);
    });
}

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

async getCards(deck) {
  return this.http
    .request(`http://127.0.0.1:8000/flashcards/api/deck/detail/${deck}`)
    .subscribe((res: Response) => {
      this.cardDataRaw = res.json();
      this.showCards(this.cardDataRaw);
    });
}

async showCards(cards) {
  const processCards = Object.keys(cards).map(i => cards[i]);
  const trimCards = processCards[processCards.length - 1];
  for (let i = 0; i < trimCards.length; i++) {
    this.cardData.push(trimCards[i]);
  }
  this.renderCardForward();
}

async renderCardForward() {
  const current_spot = this.cardspot;
  console.log(current_spot);
  this.cardspot++;
  console.log(this.cardspot);
  this.currentCard = this.cardData[current_spot];
  return this.currentCard;
  }

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

}


