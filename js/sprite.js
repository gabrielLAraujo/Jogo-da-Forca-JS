let createSprite = (selector) => {
    let moveFrame = (from, to) => {
        $el.removeClass(from)
            .addClass(to);
    };

    let reset = () => {

        moveFrame(frames[current], frames[0]);
        current = 0;
    };

    let isFinished = () => {

        return !hasNext();

    };

    let hasNext = () => {
        return current + 1 <= last;
    };

    let nextFrame = () => {
        if (hasNext()) {
            moveFrame(frames[current], frames[++current]);
        };
    }
    let $el = $(selector);


    let frames = [];
    let framesNumber = 9;

    for (let i = 1; i < framesNumber; i++) {
        frames.push("frame" + (i));
    }

    let current = 0;
    let last = frames.length - 1;

    $el.addClass(frames[current]);



    return {
        nextFrame: nextFrame,
        isFinished: isFinished,
        reset: reset

    };
};