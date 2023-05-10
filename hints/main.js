window.onload = function () {
    setTimeout(() => {
        const preEl = document.querySelector('.prettyprint');

        // Hide all children elements
        preEl.querySelectorAll('span').forEach(codeEl => {
            codeEl.style.display = 'none';
        });

        // Reveal all children elements and characters sequentially with a delay
        let delay = 0;
        preEl.querySelectorAll('span').forEach(codeEl => {
            const chars = codeEl.innerText.split('');
            const fulltext = codeEl.innerText
            chars.forEach((char, index) => {
                setTimeout(() => {
                    codeEl.innerText = fulltext.slice(0, index + 1);
                    codeEl.style.display = 'inline';
                }, delay);
                delay += 40;
            });
        });
    // Hardwait for all JS to be finished
    }, 10);
};