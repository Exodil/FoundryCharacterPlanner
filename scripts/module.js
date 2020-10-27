class characterPlanner{

    static toTheAtom(event){
        if (characterPlanner.plannerWindow === undefined){
            characterPlanner.plannerWindow = new charPlannerWindow();
            console.log("undefined")
        }
        characterPlanner.plannerWindow.render(true);
        console.log(characterPlanner.plannerWindow === undefined);
    }

    static getSceneControlButtons(buttons) {
        let tokenButton = buttons.find(b => b.name == "token")
    
        if (tokenButton) {
            tokenButton.tools.push({
                name: "char-planner",
                title: "Character planner",
                icon: "fas fa-atom",
                visible: game.user.isGM,
                onClick: () => characterPlanner.toTheAtom(),
                button: true
            });
        }
    }

    
}




Hooks.once('init', async function() {
console.log("its initing")
});

Hooks.once('ready', async function() {
console.log("its readying")
});

Hooks.on('getSceneControlButtons', characterPlanner.getSceneControlButtons)