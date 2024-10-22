document.querySelectorAll('.Slack, .Outlook, .Teams').forEach((element) => {
    // Store the initial background color for each element
    const initialBackgroundColor = window.getComputedStyle(element).backgroundColor;

    element.addEventListener('click', () => {
        if (element.style.backgroundColor === 'rgb(206, 184, 136)') {
            element.style.backgroundColor = initialBackgroundColor;
        } else {
            element.style.backgroundColor = '#CEB888';
        }
    });
});