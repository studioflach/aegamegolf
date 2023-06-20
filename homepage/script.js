document.addEventListener('DOMContentLoaded', function () {
    const serviceItems = document.querySelectorAll('.services__item');
    const approachStep = document.querySelectorAll('.approach__step');

    function handleClick(elements) {
        elements.forEach((element, i) => {
            element.addEventListener('click', (e) => {
                let isToggle = e.target.classList.contains('toggle');
                let isOpen = e.currentTarget.classList.contains('open');

                if (isToggle && !isOpen) {
                    elements.forEach((element, index) => {
                        if (index !== i) {
                            element.classList.remove('open');
                        } else {
                            element.classList.add('open');
                        }
                    });
                }
            });
        });
    }

    handleClick(serviceItems);
    handleClick(approachStep);
});