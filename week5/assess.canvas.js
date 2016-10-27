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

QUnit.module("Canvas");

QUnit.test(

  "Create a `drawLines` function to draw two parallel lines. The first line should begin at a point 100 pixels to the right of, the origin (i.e. 0,0) and 100 pixels below it. It should be 400 pixels long. The second line should run parallel to the first line, exactly 100 pixels below it. It should start at a point 100 pixels from the edge of the canvas and be 200 pixels long.",

  function (assert) {
    assert.ok(
      typeof drawLines === "function",
      "Create a `drawLines` function."
    );

    drawLines(window.canvas4);

    assert.ok(
      true,
      "You need to check with your eyes that the lines match the picture opposite."
    );

    window.canvas4.parentElement.classList.add("done");
  }
);




QUnit.test(

  "Create a function `drawTriangle` that takes seven parameters: a canvas element, and x1, y1, x2, y2, x3, y3. The function draws a red triangle, filled solid with green, between the three points given by the parameters.",

  function (assert) {
    assert.ok(
      typeof drawTriangle === "function",
      "Create a `drawTriangle` function."
    );

    drawTriangle(window.canvas2, 10, 10, 10, 100, 100, 10);
    drawTriangle(window.canvas2, 30, 30, 30, 100, 100, 30);
    drawTriangle(window.canvas2, 190, 190, 190, 100, 100, 190);

    assert.ok(
      true,
      "You need to check with your eyes that there are three triangles like in the attached picture."
    );

    window.canvas2.parentElement.parentElement.classList.add("done");
  }
);


QUnit.test(

  "Create a function `drawSpartacus` that takes one parameter, a canvas element. The function will draw the stick figure Spartacus on the provided canvas. Make sure he wields a sword in his hand. For convenience, index.js contains a function `drawStickFigure` that does most of the job, given a canvas element. Challenge: make him walk around.",

  function (assert) {
    assert.ok(
      typeof drawSpartacus === "function",
      "Create a `drawSpartacus` function."
    );

    drawSpartacus(window.canvas);

    assert.ok(
      true,
      "You need to check with your eyes whether you see Spartacus with a sword."
    );

    window.canvas.parentElement.classList.add("done");
  }
);




QUnit.test(

  "Write a drawGrid function that fills the canvas with a grid to make squares 50px big.",

  function (assert) {
    assert.ok(
      typeof drawGrid === "function",
      "Create a `drawGrid` function."
    );

    drawGrid(window.canvas5);

    assert.ok(
      true,
      "You need to check with your eyes that you have in fact made a grid."
    );

    window.canvas5.parentElement.classList.add("done");
  }
);

QUnit.test(

  "Write a drawCzechFlag function to draw the Czech flag.",

  function (assert) {
    assert.ok(
      typeof drawCzechFlag === "function",
      "Create a `drawCzechFlag` function."
    );

    drawCzechFlag(window.canvas6);

    assert.ok(
      true,
      "You need to check with your eyes that you have in fact made the Czech flag."
    );

    window.canvas6.parentElement.classList.add("done");
  }
);


QUnit.test(

  "Create a function `showMessage` that takes two parameters: an element and a string that is a URL. The function will retrieve the URL with a synchronous request and put the response text into the text content of the provided element.",

  function (assert) {

    assert.ok(
      typeof showMessage === "function",
      "Create a `showMessage` function."
    );

    assert.equal(
      window.message.textContent,
      '',
      "Before running the function, the message is empty."
    );

    showMessage(window.message, 'http://jacek.soc.port.ac.uk/tmp/ws/hello');

    assert.equal(
      window.message.textContent,
      "Live long and prosper!\n",
      "The message from the server should be there."
    );

    showMessage(window.message, 'http://jacek.soc.port.ac.uk/tmp/ws/bye');

    assert.equal(
      window.message.textContent,
      "See you soon!\n",
      "When called the second time with a different URL, a new message from the server should be there."
    );

    window.message.parentElement.classList.add("done");
  }
);



QUnit.test(

  "Create a function `showList` that takes two parameters: an element and a string that is a URL. The function will retrieve the URL with a synchronous request, parse the retrieved data as JSON; the data is guaranteed to be an array of string. The function will then, like the `filler` function in `ws_dom`, put the contents of the array as list items into the provided element.",

  function (assert) {

    assert.ok(
      typeof showList === "function",
      "Create a `showList` function."
    );

    assert.equal(
      window.list1.children.length,
      0,
      "Before running the function, the list is empty."
    );

    showList(window.list1, 'http://jacek.soc.port.ac.uk/tmp/ws/arr7');

    assert.equal(
      window.list1.children.length,
      7,
      "After retrieving wsarr1, there are 7 elements."
    );

    assert.equal(
      window.list1.children[5].textContent,
      "Return of the Jedi"
    );


    showList(window.list2, 'http://jacek.soc.port.ac.uk/tmp/ws/arr2');

    assert.equal(
      window.list2.children.length,
      2,
      "After retrieving wsarr2, there are 2 elements."
    );

    assert.equal(
      window.list2.children[1].textContent,
      "Leia"
    );

    window.list1.parentElement.classList.add("done");
  }
);



QUnit.test(

  "Create a function `startShowingMessage` that takes two parameters: an element and a string that is a URL. The function will use `setInterval` to make the following task every 1s: retrieve the URL with an asynchronous request and put the response text into the text content of the provided element.",

  function (assert) {

    assert.ok(
      typeof startShowingMessage === "function",
      "Create a `startShowingMessage` function."
    );

    assert.equal(
      window.message2.textContent,
      '',
      "Before running the function, the message is empty."
    );

    startShowingMessage(window.message2, 'http://jacek.soc.port.ac.uk/tmp/ws/dyn1');

    var done = assert.async(2);

    setTimeout(checkMessage, 1500);
    setTimeout(checkMessage, 3000);

    var oldMessage = '';
    function checkMessage() {
      assert.notEqual(
        window.message2.textContent,
        oldMessage,
        "The message should be changing."
      );
      oldMessage = window.message2.textContent;
      done();
    }

    window.message2.parentElement.classList.add("done");
  }
);



QUnit.test(

  "Create a function 'handleError' that accepts an element and a url as a parameter, and with a synchronous request shows the text from the server there. If there is an error, the function should set the textcontent of the element to 'OH DEAR'.",

  function (assert) {


    assert.ok(
      typeof handleError === "function",
      "Create a `handleError` function."
    );

    assert.equal(
      window.message3.textContent,
      '',
      "Before running the function, the message is empty."
    );

    handleError(window.message3, 'http://jacek.soc.port.ac.uk/tmp/ws/hello');

    assert.strictEqual(
      window.message3.textContent,
      "Live long and prosper!\n",
      "The message from the server should be there."
    );

    handleError(window.message3, 'http://jacek.soc.port.ac.uk/tmp/ws/404');

    assert.strictEqual(
      window.message3.textContent,
      "OH DEAR",
      "The message should say 'OH DEAR' if there is an error."
    );

    window.message3.parentElement.classList.add("done");
  }
);



QUnit.test(

  "Create a function `drawBox', which accepts two parameters: a canvas element, and a URL which refers to a simple object with coordinates that you should retrieve with an asynchronous request from a server, and then draws a box there. Update the coordinates and redraw the box every 1 second.",

  function (assert) {
    assert.ok(
      typeof drawBox === "function",
      "Create a `drawBox` function."
    );

    var oldPicture = window.canvas.toDataURL();

    drawBox(window.canvas3, "http://jacek.soc.port.ac.uk/tmp/ws/dyn2" );

    assert.ok(
      true,
      "You need to check with your eyes that there is a box changing coordinates every second."
    );

    var done = assert.async(2);

    setTimeout(checkPicture, 1500);
    setTimeout(checkPicture, 3000);

    function checkPicture() {
      var newPicture = window.canvas3.toDataURL();
      assert.ok(
        newPicture != oldPicture,
        "The picture should be changing."
      );
      oldPicture = newPicture;
      done();
    }
    window.canvas3.parentElement.classList.add("done");
  }
);
