class School{
    constructor(name,level,numberOfStudents,testScores,schoolOverview){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
        this._testScores = testScores;
        this._schoolOverview = schoolOverview;
    }
    
    get name(){
        return this._name;
    }

    get level(){
        return this._level;
    }

    get numberOfStudents(){    
        return this._numberOfStudents;
    }
    
    get testScores(){
        return this._testScores.join(', ');
    }
    
    get schoolOverview(){
        return this._schoolOverview;
    }

    set testScores(testScores){
        if (Array.isArray(testScores)) {
            this._testScores = testScores;
        } else{
            console.log('Invalid input: testScores must be set to an Array.');
        }
    }
    
    set numberOfStudents(numberOfStudents){
        if (typeof numberOfStudents === 'number') {
            this._numberOfStudents = numberOfStudents;
        } else{
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }

    set schoolOverview(schoolOverview){
        if (typeof schoolOverview === 'string') {
            this._schoolOverview = schoolOverview;
        } else{
            console.log('Invalid input: schoolOverview must be set to a String.');
        }
    }
    
    quickFacts(){
       return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`; 
    }


    get averageTestScores(){
        return Math.round(this._testScores.reduce((a, b) => a + b, 0) / this._testScores.length)+"%";
    }

    static pickSubstituteTeacher(substituteTeachers) {
        const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
        return `Substitutute Teacher: ${substituteTeachers[randomIndex]}`;
    }
    
}

class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy,testScores,schoolOverview){
        super(name, 'primary', numberOfStudents,testScores,schoolOverview);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy(){
        return this._pickupPolicy;
    }

    set pickupPolicy(pickupPolicy){
        if (typeof pickupPolicy === 'string') {
            this._pickupPolicy = pickupPolicy;
        } else{
            console.log('Invalid input: pickupPolicy must be set to a String.');
        }
    }
}

class MiddleSchool extends School{
    constructor(name,numberOfStudents,testScores,schoolOverview){
        super(name, 'middle', numberOfStudents,testScores,schoolOverview);
    }
}


class HighSchool extends School{
    constructor(name,numberOfStudents,sportsTeams,testScores,schoolOverview){
        super(name, 'high', numberOfStudents,testScores,schoolOverview);
        this._sportsTeams = sportsTeams;
    }

    set sportsTeams(sportsTeams){
        if (Array.isArray(sportsTeams)) {
            this._sportsTeams = sportsTeams;
        } else{
            console.log('Invalid input: sportsTeams must be set to an Array.');
        }
    }

    get sportsTeams(){
        return this._sportsTeams.join(', ');
    }
}

class SchoolCatalog{
    constructor(){
        this._schools = [];
    }

    addSchool(school){
        this._schools.push(school);
    }

    get schools(){
        return this._schools.map(school => school.name).join(', ');
    }
}


//Primary School Instance
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury');
lorraineHansbury.numberOfStudents = 514;
lorraineHansbury.pickupPolicy = 'Students must be picked up by a parent, guardian, or a family member over the age of 13.';
lorraineHansbury.testScores = [93, 95, 88, 92, 94, 96, 97, 98, 99, 100];
lorraineHansbury.schoolOverview = 'Lorraine Hansbury is a primary school located in Brooklyn, New York City.';
console.log(lorraineHansbury.quickFacts());
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
console.log('School Overview: ' + lorraineHansbury.schoolOverview);
console.log('Pickup Policy: ' + lorraineHansbury.pickupPolicy);
console.log('Average Test Score: ' + lorraineHansbury.averageTestScores);
console.log('-------------------------');

//High School Instance
const alSmith = new HighSchool('Al E. Smith');
alSmith.numberOfStudents = 415;
alSmith.sportsTeams = ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'];
alSmith.testScores = [76, 82, 91, 95, 89, 97, 92, 87, 90, 94];
alSmith.schoolOverview = 'Al E. Smith is a high school located in Brooklyn, New York City.';
console.log(alSmith.quickFacts());
console.log('School Overview: ' + alSmith.schoolOverview);
console.log('Sports Teams: ' + alSmith.sportsTeams);
console.log('Average Test Score: ' + alSmith.averageTestScores);
console.log('-------------------------');

//Middle School Instance
const greenHorizon = new MiddleSchool('Green Horizon');
greenHorizon.numberOfStudents = 369;
greenHorizon.testScores = [89, 92, 95, 90, 91, 87, 94, 96, 98, 99];
greenHorizon.schoolOverview = 'Green Horizon is a middle school located in Brooklyn, New York City.';
console.log(greenHorizon.quickFacts());
console.log('School Overview: ' + greenHorizon.schoolOverview);
console.log('Average Test Score: ' + greenHorizon.averageTestScores);
console.log('-------------------------');

//School Catalog Instance
const schoolCatalog = new SchoolCatalog();
schoolCatalog.addSchool(lorraineHansbury);
schoolCatalog.addSchool(alSmith);
schoolCatalog.addSchool(greenHorizon);
console.log('School Catalog: ' + schoolCatalog.schools);
