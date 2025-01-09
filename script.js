document.addEventListener('DOMContentLoaded', function () {
    let skills = document.querySelectorAll('.skill');

    skills.forEach(function (skill) {
        skill.addEventListener('mouseenter', function () {
            let hiddenText = skill.querySelector('.hidden');
            if (hiddenText) {
                hiddenText.style.display = 'block';
            }
        });

        skill.addEventListener('mouseleave', function () {
            let hiddenText = skill.querySelector('.hidden');
            if (hiddenText) {
                hiddenText.style.display = 'none';
            }
        });
    });
});
