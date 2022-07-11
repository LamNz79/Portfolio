const SKILL = ['Python', "Django", "Nodejs", "C#", "RESTful API"]

function showingSkill(skillList) {
    skillList.forEach(skill => {
        creatingSkillBox(skill)
    });

}
function creatingSkillBox(skill) {
    var countUp = this;
    var newNode = document.createElement('div');
    newNode.className = 'box2-skill';
    newNode.innerHTML = ` 
        ${skill}`
    document.getElementById('box2-skills-wrapper').appendChild(newNode);
}


window.onload = function () {
    showingSkill(SKILL)
}