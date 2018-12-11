const createSprite = (selector) => {

    const moveFrame = (from, to) => {
        $el.removeClass(from)
            .addClass(to);
    };

    const reset = () => {

        moveFrame(frames[current], frames[0]);
        current = 0;
    };

    const isFinished = () => !hasNext();


    const hasNext = () => current + 1 <= last;
    

    const nextFrame = () => {
        if (hasNext()) {
            moveFrame(frames[current], frames[++current]);
        };
    }
    let $el = $(selector);


    let frames = [];
    const framesNumber = 9;

    for (let i = 1; i < framesNumber; i++) {
        frames.push("frame" + (i));
    }

    let current = 0;
    const last = frames.length - 1;

    $el.addClass(frames[current]);



    return {
        nextFrame,
        isFinished,
        reset

    };
};