const featurestabs = document.getElementsByClassName ('features-tab');
const tabs = [...featurestabs];

tabs.forEach ((tab) => {
    tab.addEventListener('click'  , (e) => {
        console.log(e)
        tabs.forEach(item => item.classList.remove('active'));
        console.log(this);
        // this.classList.add("active");
        const element = document.getElementById (e.target.id);
        element.classList.add("active");
        
    })
})



document.addEventListener('DOMContentLoaded', function() {
    var faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            var faqItem = this.parentNode;
            faqItem.classList.toggle('open');
        });
    });
});



