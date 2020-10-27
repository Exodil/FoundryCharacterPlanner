

function getSceneControlButtons(buttons) {
    let tokenButton = buttons.find(b => b.name == "token")

    if (tokenButton) {
        tokenButton.tools.push({
            name: "char-planner",
            title: "Character planner",
            icon: "fas fa-atom",
            visible: game.user.isGM,
            onClick: () => console.log("clicked"),
            button: true
        });
    }
}



Hooks.once('init', async function() {
console.log("its initing")
});

Hooks.once('ready', async function() {
console.log("its readying")
});

Hooks.on('getSceneControlButtons', getSceneControlButtons)