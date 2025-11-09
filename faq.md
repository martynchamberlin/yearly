---
layout: default
title: FAQ
permalink: /faq/
show_privacy_link: false
load_faq: true
---

## Frequently Asked Questions

<div id="faq-container"></div>

<script>
  // Load and render FAQ from JSON file (also used by the iOS app)
  fetch('{{ "/faq.json" | relative_url }}')
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
        // Handle bold text **text**
        const formattedAnswer = answerText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        answer.innerHTML = `A. ${formattedAnswer}`;

        questionWrap.appendChild(question);
        questionWrap.appendChild(answer);
        container.appendChild(questionWrap);
      });
    })
    .catch(error => {
      console.error('Error loading FAQ:', error);
      document.getElementById('faq-container').innerHTML = '<p>Unable to load FAQ. Please try again later.</p>';
    });
</script>

