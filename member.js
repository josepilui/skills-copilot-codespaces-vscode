function skillsMember() {
    console.log("Skills Member function executed");
}
skillsMember.prototype.addSkill = function(skill) {
    if (!this.skills) {
        this.skills = [];
    }
    this.skills.push(skill);
    console.log(`Skill ${skill} added`);
};

skillsMember.prototype.listSkills = function() {
    if (!this.skills || this.skills.length === 0) {
        console.log("No skills available");
        return;
    }
    console.log("Skills:", this.skills.join(", "));
};