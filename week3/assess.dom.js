"use strict";

QUnit.module("DOM");


// turns an array-like into an array
function arr(a) {
    return Array.prototype.slice.call(a);
}


QUnit.test("adding text",
    function(assert) {
        assert.ok(
            typeof addTextTo === "function",
            "Create a function addTextTo which gets two parameters: an element and a string. The function should append the given string to the content of the given element."
        );

        assert.strictEqual(
            document.getElementById('addto').textContent,
            "Does it work yet?"
        );

        addTextTo(document.querySelector("#addto"), ' No!');

        assert.strictEqual(
            document.getElementById('addto').textContent,
            "Does it work yet? No!"
        );

        addTextTo(document.querySelector("#addto"), ' Yes!');

        assert.strictEqual(
            document.getElementById('addto').textContent,
            "Does it work yet? No! Yes!"
        );

        window.addto.parentElement.classList.add("done");

    }
);



QUnit.test("replace text",
    function(assert) {
        assert.ok(
            typeof replaceText === "function",
            "Create a function replaceText which gets two parameters: an element and a string. The function should set the content of the given element to the given string."
        );

        assert.strictEqual(
            document.getElementById('replacethis').textContent,
            "𝔯𝔢𝔭𝔩𝔞𝔠𝔢 𝔱𝔥𝔦𝔰"
        );

        replaceText(document.getElementById('replacethis'), "The text has been replaced.");

        assert.strictEqual(
            document.getElementById('replacethis').textContent,
            "The text has been replaced."
        );

        replaceText(document.getElementById('replacethis'), "The text has been replaced <twice>.");

        assert.strictEqual(
            document.getElementById('replacethis').textContent,
            "The text has been replaced <twice>."
        );

        window.replacethis.parentElement.classList.add("done");
    }
);



QUnit.test("setAttributes",
    function(assert) {
        assert.ok(
            typeof moreBears === "function",
            "Create a function `moreBears` that replaces the image of a kitten with the image of a bear. Find the image of the kitten and then set its source URL to 'http://placebear.com/400/200', its alternative text to 'A bear.', and its title to 'A BEAR!'."
        );

        assert.strictEqual(
            document.getElementById('animals').src,
            "http://placekitten.com/400/200"
        );

        assert.strictEqual(
            document.getElementById('animals').alt,
            "A kitten."
        );

        assert.strictEqual(
            document.getElementById('animals').alt,
            "A kitten."
        );


        moreBears();

        assert.strictEqual(
            document.getElementById('animals').src,
            "http://placebear.com/400/200"
        );

        assert.strictEqual(
            document.getElementById('animals').alt,
            "A bear."
        );

        assert.strictEqual(
            document.getElementById('animals').title,
            "A BEAR!"
        );

        document.getElementById('animals').parentElement.classList.add("done");
    }
);



QUnit.test("setTheId",
    function(assert) {

        assert.ok(
            typeof setId === "function",
            "Create a function `setId` with two parameters, an element and a string. The function will set the element's ID to the given string. The return value of the function must be the given element."
        );

        var p = document.createElement("p");

        assert.notOk(
            p.id,
            "Before running, p has no Id."
        );

        var q = setId(p, "lalala");

        assert.strictEqual(
            q,
            p,
            "The function must return its element parameter."
        );

        assert.strictEqual(
            p.id,
            "lalala"
        );

        setId(p, "foobarbaz");

        assert.strictEqual(
            p.id,
            "foobarbaz"
        );
    }
);



QUnit.test("setTheClass",
    function(assert) {

        assert.ok(
            typeof setClass === "function",
            "Create a function `setClass` with two parameters, an element and a string. The function will set the element's class to the given string. The return value of the function must be the given element."
        );

        var p = document.getElementById("setmyclass");

        assert.notOk(
            p.className
        );

        var q = setClass(p, "banal");

        assert.strictEqual(
            q,
            p,
            "The function must return its element parameter."
        );

        assert.strictEqual(
            p.className,
            "banal"
        );

        setClass(p, "interesting");

        assert.strictEqual(
            p.className,
            "interesting"
        );

        window.setmyclass.parentElement.classList.add("done");
    }
);


QUnit.test("addAClass",
    function(assert) {

        assert.ok(
            typeof addAClass === "function",
            "Create a function `addAClass` with two parameters, an element and a string. The function will add the given string's value to the element's classes. The return value of the function must be the given element."
        );

        var p = document.getElementById("wantaborder");

        assert.strictEqual(
            p.classList.length,
            1
        );

        assert.strictEqual(
            p.className,
            "greatcontent"
        );

        var q = addAClass(p, "excellence");

        assert.strictEqual(
            q,
            p,
            "The function must return its element parameter."
        );


        assert.strictEqual(
            p.classList.length,
            2
        );

        assert.ok(
            p.classList.contains("excellence")
        );

        addAClass(p, "lovely");

        assert.strictEqual(
            p.classList.length,
            3
        );

        assert.ok(
            p.classList.contains("excellence")
        );

        assert.ok(
            p.classList.contains("lovely")
        );


        p = document.createElement("header");

        assert.strictEqual(
            p.classList.length,
            0
        );

        var q = addAClass(p, "excellence");

        assert.strictEqual(
            q,
            p,
            "The function must return its element parameter."
        );


        assert.strictEqual(
            p.classList.length,
            1
        );

        assert.ok(
            p.classList.contains("excellence")
        );


        window.wantaborder.parentElement.classList.add("done");
    }
);




QUnit.test("removeAClass",
    function(assert) {

        assert.ok(
            typeof removeAClass === "function",
            "Create a function `removeAClass` with two parameters, an element and a string. The function will remove the given string's value from the element's classes. The return value of the function must be the given element."
        );

        var p = document.getElementById("helpme");

        assert.strictEqual(
            p.classList.length,
            3
        );


        assert.ok(
            p.classList.contains("downer"),
            "Before running, the array of classes contains `downer`."
        );

        removeAClass(p, "downer");

        assert.notOk(
            p.classList.contains("downer")
        );

        assert.strictEqual(
            p.classList.length,
            2
        );

        p.parentElement.classList.add("done");
    }
);








QUnit.test("creating elements",
    function(assert) {
        assert.ok(
            typeof newElement === "function",
            "Write a function `newElement` which, given one parameter called name, returns a newly created element with that tag name."
        );

        var x = newElement('li');

        assert.strictEqual(
            x.parentElement,
            null
        );

        assert.strictEqual(
            x.nodeName,
            "LI"
        );

        x = newElement('p');

        assert.strictEqual(
            x.parentElement,
            null
        );

        assert.strictEqual(
            x.nodeName,
            "P"
        );
    }

);



QUnit.test("findElementById",
    function(assert) {
        assert.ok(
            typeof findElementById === "function",
            "Create a function `findElementById` which, given one parameter called ID, returns the element that has that id."
        );

        assert.strictEqual(
            findElementById('thisisaparagraph'),
            window.thisisaparagraph
        );

        assert.strictEqual(
            findElementById('selectus'),
            window.selectus
        );

        assert.strictEqual(
            findElementById('mustnotexist'),
            null
        );

        window.thisisaparagraph.parentElement.classList.add("done");
        window.selectus.classList.add("done");
    }

);




QUnit.test("findElementByQuery",
    function(assert) {
        assert.ok(
            typeof findElementByQuery === "function",
            "Create a function `findElementByQuery` which, given one parameter called query, returns all the elements that match the query selector in that parameter."
        );

        assert.deepEqual(
            arr(findElementByQuery('#thisisaparagraph')), [window.thisisaparagraph]
        );


        assert.deepEqual(
            arr(findElementByQuery('#selectus *')),
            arr(window.selectus.children)
        );

        assert.deepEqual(
            arr(findElementByQuery('.selectus')),
            arr(window.selectus.getElementsByTagName('P'))
        );

        assert.deepEqual(
            arr(findElementByQuery('mustnotexist')), []
        );
    }
);




QUnit.test("reverseList",
    function(assert) {

        assert.ok(
            typeof reverseList === "function",
            "Create a function `reverseList` that can reverse the content of a list.  The function should take one parameter which is a selector, used to choose which list is reversed (select the list (the UL or OL) not the list items).  Return the selected element."
        );

        assert.strictEqual(
            window.reverseme.firstElementChild.textContent,
            "1",
            "Before running, first element is 1."
        );

        reverseList("#reverseme");

        assert.strictEqual(
            window.reverseme.firstElementChild.textContent,
            "5",
            "After running, first element must be 5."
        );

        assert.strictEqual(
            window.reverseme.lastElementChild.textContent,
            "1",
            "After running, last element must be 1."
        );

        // reverse another list
        var returnedList = reverseList("#reversemetoo");

        assert.strictEqual(
            window.reversemetoo.firstElementChild.textContent,
            "The Force Awakens",
            "After running again, first element is The Force Awakens."
        );

        assert.strictEqual(
            returnedList,
            window.reversemetoo,
            "The selected element is returned."
        );

        window.reverseme.parentElement.classList.add("done");

    }
);


QUnit.test("listMover",
    function(assert) {

        assert.ok(
            typeof mover === "function",
            "Create a function `mover` that accepts two parameters, the first is a selector for the element to move, the second is a selector for the element that it should be appended to."
        );

        assert.ok(
            window.moveme.parentElement == window.listone,
            "Before, `moveme` has `listone` as a parent."
        );


        assert.strictEqual(
            window.listone.children.length,
            4,
            "Before running, list one has 4 elements."
        );

        assert.strictEqual(
            window.listtwo.children.length,
            3,
            "Before running, list two has 3 elements."
        );

        mover("#moveme", "#listtwo")

        assert.strictEqual(
            window.listone.children.length,
            3,
            "After running, list one has 3 elements."
        );

        assert.strictEqual(
            window.listtwo.children.length,
            4,
            "After running, list two has 4 elements."
        );

        assert.ok(
            window.moveme.parentElement == window.listtwo,
            "After, moveme has a new parent."
        );

        mover("#moveme", "#listone")

        assert.strictEqual(
            window.listone.children.length,
            4,
            "After running again, list one has 4 elements."
        );

        assert.strictEqual(
            window.listtwo.children.length,
            3,
            "Before running again, list one has 3 elements."
        );


        mover("#moveme", "#listone");

        assert.strictEqual(
            window.listone.children.length,
            4,
            "After running, list one has 4 elements."
        );

        assert.strictEqual(
            window.listtwo.children.length,
            3,
            "After running, list two has 3 elements."
        );

        assert.ok(
            window.moveme.parentElement == window.listone,
            "After, moveme has a new parent."
        );


        window.moveme.parentElement.parentElement.classList.add("done");

    }
);




QUnit.test("listFiller",
    function(assert) {

        assert.ok(
            typeof filler === "function",
            "Write a function `filler` that accepts two parameters, the first is a list element that should be added to, the second is an array of strings that will be turned into list items."
        );

        var ul = document.getElementById("fillthislist");

        var entries = ["Shmi", "Anakin", "Luke"];

        filler(ul, entries)

        for (var i = 0; i < ul.children.length; i++) {
            assert.strictEqual(
                ul.children[i].tagName,
                "LI"
            );
            assert.strictEqual(
                ul.children[i].textContent,
                entries[i],
                "Text in each element should match the text in the array."
            );
        }

        assert.strictEqual(
            ul.children.length,
            3,
            "There should be exactly three list items."
        );


        var unshowntest = document.createElement("ul");
        filler(unshowntest, []);
        assert.strictEqual(
            unshowntest.children.length,
            0,
            "There should be exactly zero list items if called with an empty array."
        );

        filler(unshowntest, ["Sloane", "Kyrell", "Wexley", "Rax"]);
        assert.strictEqual(
            unshowntest.children.length,
            4,
            "There should be exactly four list items if called with an array of four items."
        );


        window.fillthislist.parentElement.classList.add("done");

    }
);


QUnit.test("duplication",
    function(assert) {

        var thingToBeDuped = window.dupeme;

        assert.ok(
            typeof dupe === "function",
            "Write a function `dupe` that accepts one parameter, a selector.  The function should duplicate the element chosen by the selector (and any children of it)."
        );

        assert.strictEqual(
            thingToBeDuped.parentElement.children.length,
            2,
            "The parent of #dupeme should have just two children before the test run, a heading and #dupeme."
        );

        dupe("#dupeme");

        assert.strictEqual(
            thingToBeDuped.parentElement.children.length,
            3,
            "The parent of #dupeme should have three children after the test run, a heading and #dupeme AND the duplicate."
        );

        var paras = thingToBeDuped.parentElement.querySelectorAll("p");

        assert.strictEqual(
            paras.length,
            2,
            "There should be two paras after the test."
        );

        assert.strictEqual(
            paras[0].textContent,
            paras[1].textContent,
            "The two paragraphs should have the same text."
        );


        thingToBeDuped.parentElement.classList.add("done");

    }
);



QUnit.test("removeAllMatchingNodes",
    function(assert) {

        var parent = window.noevens;

        assert.ok(
            typeof removeAll === "function",
            "Write a function `removeAll` that accepts one parameter, a selector.  All nodes that match that selector should be removed."
        );

        removeAll("#noevens p:nth-child(odd)");

        var paras = document.querySelectorAll("#noevens p");

        assert.strictEqual(
            paras.length,
            3,
            "There should be three paras after the test."
        );

        for (var i = 0; i < paras.length; i++) {
            assert.strictEqual(
                paras[i].textContent,
                "I love you",
                "The remaining text should only say I love you."
            );
        }

        parent.classList.add("done");
    }
);


QUnit.test("form elements",
    function(assert) {
        assert.ok(
            typeof getUserData === "function",
            "Write a function `getUserData` that returns an object with information from the #username, #speed, #student form input fields. The result should be an object like this: { name: 'john', speed: '30', student: true }."
        );

        var user = getUserData();

        assert.deepEqual(
            user, {
                name: 'John',
                speed: 70,
                student: true
            }
        )

        window.username.value = "Jane";
        window.speed.value = 100;
        window.student.checked = false;

        var user = getUserData();

        assert.deepEqual(
            user, {
                name: 'Jane',
                speed: 100,
                student: false
            }
        )
        window.username.parentElement.parentElement.classList.add('done');
    }
);
