function skillsMember() {
    var member = document.getElementById("member").value;
    var skills = document.getElementById("skills").value;
    var memberSkills = document.getElementById("memberSkills").value;
    var memberSkillsArray = memberSkills.split(",");
    var memberSkillsArrayLength = memberSkillsArray.length;
    var memberSkillsArrayIndex = memberSkillsArray.indexOf(skills);
    if (memberSkillsArrayIndex == -1) {
        memberSkillsArray.push(skills);
        memberSkills = memberSkillsArray.join(",");
        document.getElementById("memberSkills").value = memberSkills;
    }
    else {
        alert("Skill already exists");
    }
}