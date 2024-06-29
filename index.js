document.addEventListener('DOMContentLoaded', function() {
    var faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            var faqItem = this.parentNode;
            faqItem.classList.toggle('open');
        });
    });
});
