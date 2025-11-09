// Load and render FAQ from JSON file
fetch('/faq.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('faq-container');

    data.faqs.forEach(faq => {
      const questionWrap = document.createElement('div');
      questionWrap.className = 'question-wrap';

      const question = document.createElement('div');
      question.className = 'question';
      question.textContent = `Q. ${faq.question}`;

      const answer = document.createElement('div');
      answer.className = 'answer';
      // Convert markdown links [text](url) to HTML links
      const answerText = faq.answer.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
      answer.innerHTML = `A. ${answerText}`;

      questionWrap.appendChild(question);
      questionWrap.appendChild(answer);
      container.appendChild(questionWrap);
    });
  })
  .catch(error => {
    console.error('Error loading FAQ:', error);
    document.getElementById('faq-container').innerHTML = '<p>Unable to load FAQ. Please try again later.</p>';
  });

