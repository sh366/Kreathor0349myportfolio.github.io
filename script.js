document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('section');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('animated');
            }
        });
    });

    sections.forEach(function(section) {
        observer.observe(section);
    });
});
