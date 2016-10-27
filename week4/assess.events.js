"use strict";
QUnit.module("Basics");

QUnit.test("Change the id method in index.js to return your student ID.",
    function(assert) {
        assert.notEqual(
            id(),
            "UP000000",
            "The ID function should return your student ID."
        );
    }
);

// create a copy of the original consoel.log function
console.originalLog = console.log;

// replace console.log with a veneer function that updates a global variable
// with whatever the parameters of the most recent  call to console.log were.
console.log = function(...x) {
  console.originalLog(...x);
  window.lastLog = x;
}

QUnit.module("Events");

function lovelyToggle() {
    window.thisisalovelyparagraph.classList.toggle("lovely");
}



QUnit.test(

    "Create a function `targetTextToConsole` that takes one parameter `event` and writes the text content of `event.target` to the console.  Create a second function tttcAttacher.  tttcAttacher should set `targetTextToConsole` as the event handler for the click event on `button0` - thus when the `Click Me` button is pressed, `Click Me` should appear on the console,",

    function(assert) {

        assert.ok(
            typeof targetTextToConsole === "function",
            "Create a `targetTextToConsole` function."
        );

        assert.ok(
            typeof tttcAttacher === "function",
            "Create a `tttcAttacher` function."
        );

        tttcAttacher();

        window.button0.dispatchEvent( new MouseEvent("click"));

        assert.equal(
            window.lastLog,
            "Click Me",
            "Clicking the button should put the button's text on the console."
        );

        window.button0.textContent = "Surprise!";
        window.button0.dispatchEvent( new MouseEvent("click"));
        assert.equal(
            window.lastLog,
            "Surprise!",
            "Clicking the button should put the button's text on the console (this time it's `Surprise!`)."
        );

        window.button0.textContent = "Click Me";
        window.button0.dispatchEvent( new MouseEvent("click"));
        assert.equal(
            window.lastLog,
            "Click Me",
            "Clicking the button should put the button's text on the console (now it's `Click Me` again)."
        );

        window.button0.parentElement.classList.add("done");

      }
);


QUnit.test(

    "Create a function `lovelyParaAttacher` that attaches an event listener to the `thisisalovelyparagraph` element.  When the paragraph is clicked the `lovelyToggle` function should be invoked.  You can find lovelyToggle in the `assess.events.js` file.",

    function(assert) {

        assert.ok(
            typeof lovelyParaAttacher === "function",
            "Create a lovelyParaAttacher function."
        );

        lovelyParaAttacher();

        assert.equal(
            window.thisisalovelyparagraph.className,
            "",
            "Before the first click event is fired, the element has no class."
        );

        window.thisisalovelyparagraph.dispatchEvent( new MouseEvent("click"));

        assert.equal(
            window.thisisalovelyparagraph.className,
            "lovely",
            "After the first click event is fired, the element class is `lovely`."
        );

        window.thisisalovelyparagraph.dispatchEvent( new MouseEvent("click"));

        assert.equal(
            window.thisisalovelyparagraph.className,
            "",
            "After the second click event is fired, the element has no class`."
        );

        window.thisisalovelyparagraph.parentElement.classList.add("done");

      }
);

QUnit.test(

    "Create a function `lovelyButtonAttacher` that attaches an event listener to the `button1` element.  When `button1` is clicked the `lovelyToggle` function should be invoked.",

    function(assert) {

        assert.ok(
            typeof lovelyButtonAttacher === "function",
            "Create a lovelyButtonAttacher function."
        );

        lovelyButtonAttacher();

        assert.equal(
            window.thisisalovelyparagraph.className,
            "",
            "Before the first click event is fired, the element has no class."
        );

        window.button1.dispatchEvent( new MouseEvent("click"));

        assert.equal(
            window.thisisalovelyparagraph.className,
            "lovely",
            "After the first click event is fired, the element class is `lovely`."
        );

        window.button1.dispatchEvent( new MouseEvent("click"));

        assert.equal(
            window.thisisalovelyparagraph.className,
            "",
            "After the second click event is fired, the element has no class`."
        );



        window.button1.parentElement.classList.add("done");

      }
);




QUnit.test(

    "Create a function `concatAttacher` that attaches an event listener to the `in1` and `in2` input elements.  Write an event handler function that fulfills the following requirement: when `in1` and `in2` change, their content should be joined together and placed inside the `out1` element, such that if you entered `Darth` and `Vader` the content of `out1` would be `DarthVader`.",

    function(assert) {

        assert.ok(
            typeof concatAttacher === "function",
            "Create a concatAttacher function."
        );

        concatAttacher();

        // // this first sanity check fails in firefox that helpfully remember last values of text fields and puts them right back on reload so in1/in2 are not empty the second time around
        // assert.equal(
        //     window.out1.textContent,
        //     window.in1.value + window.in2.value,
        //     "Before the first change, out1 has no text."
        // );

        window.in1.value = "Darth";
        window.in1.dispatchEvent( new Event("change") );
        window.in2.value = "Vader";
        window.in2.dispatchEvent( new Event("change") );

        assert.equal(
            window.out1.textContent,
            "DarthVader",
            "After the first change, out1 reads `DarthVader`."
        );

        window.in2.value = "Tyrannus";
        window.in2.dispatchEvent( new Event("change") );

        assert.equal(
            window.out1.textContent,
            "DarthTyrannus",
            "After the first change, out1 reads `DarthTyrannus`."
        );


        window.in1.value = "Luke";
        window.in1.dispatchEvent( new Event("change") );
        window.in2.value = "Skywalker";
        window.in2.dispatchEvent( new Event("change") );

        assert.equal(
            window.out1.textContent,
            "LukeSkywalker",
            "After the first change, out1 reads `LukeSkywalker`."
        );

        window.conzone.classList.add("done");

      }
);







QUnit.test(

    "The div `mousewatcher` contains a paragraph `snitch`.  When the mouse is pointing at `mousewatcher`, the `snitch` paragraph should say `IN`, otherwise it should say `OUT`.  Write a function `snitchAttacher`.  `snitchAttacher` should associate the (provided) `snitchUpdater` function with the `mouseover` and `mouseout` events.",

    function(assert) {

        assert.ok(
            typeof snitchAttacher === "function",
            "Create a snitchAttacher function."
        );

        snitchAttacher();

        window.mousewatcher.dispatchEvent( new MouseEvent("mouseover") );

        assert.equal(
            window.snitch.textContent,
            "IN",
            "After a `mousein` event, the `snitch` text should be `IN`."
        );

        window.mousewatcher.dispatchEvent( new MouseEvent("mouseout") );

        assert.equal(
            window.snitch.textContent,
            "OUT",
            "After a `mousein` event, the `snitch` text should be `OUT`."
        );

        window.mousewatcher.parentElement.classList.add("done");

      }
);





QUnit.test(

    "The div `mousereporter` contains a paragraph `report`.  When the mouse is anywhere over `mousereporter`, the `report` paragraph should be updated to include the position of the mouse within the screen, thus `x: 000 y: 000`.  Write a function `reportAttacher` that associates the the mouseover event with a `reporterUpdater` function.  Also write the reporterUpdater function (you may wish to base this on `snitchUpdater`) which receives an single event object parameter and used the data in this object to update populate the `report` element.  Hint: there are screenX and screenY properties in the event object.",

    function(assert) {

        assert.ok(
            typeof reportAttacher === "function",
            "Create a `reportAttacher` function."
        );

        assert.ok(
            typeof reportUpdater === "function",
            "Create a `reportUpdater` function."
        );

        reportAttacher();

        window.mousereporter.dispatchEvent( new MouseEvent("mousemove", {screenX: 10, screenY: 20}) );

        assert.equal(
            window.report.textContent,
            "x: 10 y: 20",
            "After a `mousemove` event, the `report` text should reflect mouse position x10y20."
        );

        window.mousereporter.dispatchEvent( new MouseEvent("mousemove", {screenX: 11, screenY: 21}) );

        assert.equal(
            window.report.textContent,
            "x: 11 y: 21",
            "After a `mousemove` event, the `report` text should reflect mouse position x11y21."
        );

        window.mousereporter.parentElement.classList.add("done");

      }
);





QUnit.test(

    "The input field `newid` is meant for the user to type an ID of an HTML element; IDs cannot have spaces in them, so the field needs to report when the user has a space in there. Write a function `idValidationAttacher` that gives the `newid` input field an event handler that checks the value whenever it has changed (use the `input` event). If the value contains any space, the event handler will add a class `invalid` to the `newid` input element, so that an error message shows.",

    function(assert) {

        assert.ok(
            typeof idValidationAttacher === "function",
            "Create a `idValidationAttacher` function."
        );

        window.newid.value = 'Obi van Kenobi';
        window.newid.dispatchEvent( new Event("input") );

        assert.ok(
          window.getComputedStyle(window.newiderror).display == "none" &&
            !window.newid.classList.contains('invalid'),
          "Before calling `idValidationAttacher`, the error never shows."
        );

        idValidationAttacher();

        window.newid.dispatchEvent( new Event("input") );

        assert.ok(
          window.getComputedStyle(window.newiderror).display == "inline" &&
            window.newid.classList.contains('invalid'),
          "After calling `idValidationAttacher`, the error gets triggered."
        );

        window.newid.value = 'test';
        window.newid.dispatchEvent( new Event("input") );

        assert.ok(
          window.getComputedStyle(window.newiderror).display == "none" &&
            !window.newid.classList.contains('invalid'),
          "If the value does not have any spaces, the error should be hidden."
        );

        window.newid.value = ' Khaaaaan!';
        window.newid.dispatchEvent( new Event("input") );

        assert.ok(
          window.getComputedStyle(window.newiderror).display == "inline" &&
            window.newid.classList.contains('invalid'),
          "Even with a space as the first character, the error should show."
        );

        window.newids.classList.add("done");

      }
);
