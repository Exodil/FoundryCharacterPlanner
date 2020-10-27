(() => { })();


static getSceneControlButtons(buttons) {
    //Hooked on the left-hand set of buttons; add a Create Quick Encounter one
    let notesButton = buttons.find(b => b.name === "token");

    if (notesButton && game.user.isGM) {
        notesButton.tools.push({
            name: "linkEncounter",
            title: game.i18n.localize("QE.CreateQuickEncounter.BUTTON"),
            icon: "fas fa-fist-raised",
            toggle: false,
            button: true,
            visible: game.user.isGM,
            onClick: () => QuickEncounter.createOrRun()
        });
        notesButton.tools.push({
            name: "deleteEncounters",
            title: "Delete all Quick Encounter Map Notes",
            icon: "fas fa-trash",
            toggle: false,
            button: true,
            visible: false, //game.user.isGM,
            onClick: () => QuickEncounter.deleteAllEQMapNotes("Unknown")
        });
    }
}


Hooks.once('init', async function() {

});

Hooks.once('ready', async function() {

});
