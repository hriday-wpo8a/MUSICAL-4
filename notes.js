class Note{
    constructor(num) {
    this.note = createSprite(0,0,40,40);
    this.note.x = Math.round(random(20,780));
    this.note.scale = 0.3;
    this.note.img = num;
    this.note.velocityY = 10;
    }
    draw(){
       switch(this.note.img){
           case 1: this.note.addImage(note1Image);
           note1Group.add(this.note);
           break;
           case 2: this.note.addImage(note2Image);
           note2Group.add(this.note);
           break;
           case 3: this.note.addImage(note3Image);
           note3Group.add(this.note);
           break;
           case 4: this.note.addImage(note4Image);
           this.note.scale = 0.5;
           note4Group.add(this.note);
           break;
           case 5: this.note.addImage(note5Image);
           this.note.scale = 0.5;
           note5Group.add(this.note);
           break;
           case 6: this.note.addImage(note6Image);
           note6Group.add(this.note);
           break;
           case 7: this.note.addImage(note7Image);
           note7Group.add(this.note);
           break;
           case 8: this.note.addImage(note8Image);
           note8Group.add(this.note);
           break;
           case 9: this.note.addImage(note9Image);
           this.note.scale = 0.5;
           note9Group.add(this.note);
           break;
           case 10: this.note.addImage(note10Image);
           note10Group.add(this.note);
           break;
           case 11: this.note.addImage(note11Image);
           note11Group.add(this.note);
           break;
           case 12: this.note.addImage(note12Image);
           note12Group.add(this.note);
           break;
           case 13: this.note.addImage(note13Image);
           note13Group.add(this.note);
           break;
           case 14: this.note.addImage(note14Image);
           note14Group.add(this.note);
           break;
           case 15: this.note.addImage(note15Image);
           note15Group.add(this.note);
           break;
           default:break;
       }
    }
}