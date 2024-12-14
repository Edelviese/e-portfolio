
const goToHomeSection = document.getElementById('go-to-home');
const goToAboutSection = document.getElementById('go-to-about');
const goToSkillSection = document.getElementById('go-to-skills');
const goToContactSection = document.getElementById('go-to-contact');

    goToHomeSection.addEventListener('click', () => {
      const id = 'Home';
      const url = `index.html#${id}`;
      window.location.href = url;
    });

    goToAboutSection.addEventListener('click', () => {
      const id = 'About';
      const url = `index.html#${id}`;
      window.location.href = url;
    });

    goToSkillSection.addEventListener('click', () => {
      const id = 'Skills';
      const url = `index.html#${id}`;
      window.location.href = url;
    });

    goToContactSection.addEventListener('click', () => {
      const id = 'Contact';
      const url = `index.html#${id}`;
      window.location.href = url;
    });

function showActivity(act) {
    const activities = document.querySelectorAll('.activity');
    activities.forEach(activity => {
        activity.style.display = 'none';
    });

    const selectedActivity = document.getElementById(act);
    if (selectedActivity) {
        selectedActivity.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showActivity('act-one');
});



function showQuiz(quiz) {
  const activities = document.querySelectorAll('.quizzes');
  activities.forEach(activity => {
      activity.style.display = 'none';
  });

  const selectedQuiz = document.getElementById(quiz);
  if (selectedQuiz) {
      selectedQuiz.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  showQuiz('quiz-one');
});