class charPlannerWindow extends FormApplication{
    constructor(...args) {
        super(...args)
        //game.users.apps.push(this)
    }

    static get defaultOptions() {
        const options = super.defaultOptions;
        options.title = "Character planner 5e"
        options.id = "cp5e"
        options.template = "modules/char-planner/templates/charPlanner.html";
        options.closeOnSubmit = true;
        options.popOut = true;
        options.width = 510;
        options.height = "auto";
        //options.classes = ["encounter-builder", "builder-form"];
        return options;
    }
}