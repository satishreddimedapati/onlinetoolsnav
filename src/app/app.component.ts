import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  currentTheme: string = 'light-theme';  // Default theme

  categories: string[] = [
    'Resume and Portfolio',
    'Carrer',
    'Language and Learning',
    'Tools and Utilities',
    'Health and Fitness',
    'Entertainment and Media',
    'Miscellaneous',
    'Learning and Practice',
    'Productivity Tools',
    'Well-being and Relaxation',
    'Shopping and Services',
    'Technology and Development',
    'Miscellaneous Tools',
    'AI Models'
  ];

  websites = [
    {
      name: 'Kudosites',
      url: 'https://www.kudosites.com',
      description: 'Resume to Portfolio Site - Website Builder',
      category: 'Resume and Portfolio'
    },
    {
      name: 'create a resume',
      url: 'https://rabbitresume.com/resume-builder',
      description: 'create a resume and send it to over 200 recruitment firms with just one click',
      category: 'Resume and Portfolio'
     
    },
    {
      name: 'Enhance your resumer',
      url: 'https://streamable.com/k3fs86',
      description: 'Rewrite and Enhance your resume the right way',
      category: 'Resume and Portfolio'
     
    },
    {
      name: 'Free Resume Score Checker',
      url: 'https://resumeboostai.com/resume-checker',
      description: 'Get Resume Score for Free',
      category: 'Resume and Portfolio'
     
    },
    {
      name: 'Free Certificate genereter',
      url: 'https://templated.io/tools/free-online-certificate-maker/',
      description: 'Free Certificate (of Achievement) Maker 📜',
      category: 'Resume and Portfolio'
     
    },
    {
      name: 'own website creation ',
      url: 'https://linksca.pe/demos',
      description: 'a website for anyone to create their own website very easily in a nice UI.',
      category: 'Resume and Portfolio'
     
    },
    {
      name: 'Thousands of Free Certificates from Google, Microsoft, Harvard',
      url: 'https://www.classcentral.com/report/free-certificates/',
      description: '[2024] Thousands of Free Certificates from Google, Microsoft, Harvard, and others',
      category: 'Resume and Portfolio'
     
    },
    {
      name: 'Latest job search engine ',
      url: 'https://hiring.cafe/',
      description: 'Frustrated with Indeed, I used ChatGPT to scrape 1.5 million jobs directly from company websites',
      category: 'Carrer'
     
    },
    {
      name: 'collection of business ideas',
      url: 'https://indieideas.io/?ref=internetisbeautiful',
      description: 'made a collection of business ideas based on pain points expressed by Reddit users.',
      category: 'Carrer'
     
    },
    {
      name: 'The Banned Book Club',
      url: 'https://dp.la/',
      description: 'DPLA has launched The Banned Book Club to ensure that all readers have access to the books they want to read',
      category: 'Learning and Practice'
    },
    {
      name: 'High Valyrian Dictionary',
      url: 'https://wikiofthrones.com/high-valyrian-dictionary',
      description: 'Type the English word and you will get the related word and phrases',
      category: 'Learning and Practice'
    },
    {
      name: 'Daily Spelling Bee',
      url: 'https://workbooks.persera.ca/vocabulary/daily/',
      description: 'A daily spelling bee (English)',
      category: 'Learning and Practice'
    },
    {
      name: 'Free English Practice',
      url: 'https://FreeEnglishPractice.com',
      description: 'Free English Practice',
      category: 'Learning and Practice'
    },
    {
      name: 'See3ee',
      url: 'https://see3ee.com/',
      description: 'Compare cars and bikes in text-only format.',
      category: 'Tools and Utilities'
    },
    {
      name: 'Confetti Therapy',
      url: 'https://ConfettiTherapy.com/',
      description: 'I made a site that lets you pop unlimited confetti (to reduce stress and relax)',
      category: 'Well-being and Relaxation'
    },
    {
      name: 'Workout Generator',
      url: 'https://musclewiki.com/workout-generator',
      description: 'Workout Generator I built',
      category: 'Productivity Tools'
    },
    {
      name: 'Instantly converts documents to any format 📄',
      url: 'https://onlineconvertfree.com/converter/documents/',
      description: 'Just upload the original file and choose the desired output format.',
      category: 'Productivity Tools'
    },
    {
      name: 'Spelling Bee',
      url: 'https://workbooks.persera.ca/vocabulary/daily/',
      description: 'A self-hostable search engine with auto-summarization',
      category: 'Learning and Practice'
    },
    {
      name: 'AetheriumAI',
      url: 'https://aetheriumai.vercel.app/',
      description: 'Surf through PDFs faster',
      category: 'AI Models'
    },
    {
      name: 'automate data extraction and integration. Model',
      url: 'https://parseflow.io',
      description: 'Eliminate manual entry! automate data extraction and integration.',
      category: 'AI Models'
    },
    {
      name: 'interior design service API Model',
      url: 'https://www.decor8.ai/ai-virtual-staging-api',
      description: 'Surf through PDFs faster',
      category: 'AI Models'
    },
    {
      name: 'Therapy Chatbot',
      url: 'https://www.aitherapistfree.com/agent',
      description: ' built a Therapy Chatbot',
      category: 'AI Models'
    },
    {
      name: 'Mini Search engine',
      url: 'https://huggingface.co/spaces/felladrin/minisearch',
      description: 'A self-hostable search engine, but with auto-summarization generated directly from your browser. No account nor API keys needed. Works out of the box. (Open-Source)',
      category: 'AI Models'
    },
    {
      name: 'Amara Music Model',
      url: 'https://form.typeform.com/to/JnqcXJky',
      description: ' built Amara – an ADHD-friendly DJ that creates personalized playlists based on your music personality',
      category: 'AI Models'
    },
    {
      name: 'AiChattyBot',
      url: 'http://aichattybot.com',
      description: 'built AiChattyBot, which allows you to make your own personal chatbot for FREE. ',
      category: 'AI Models'
    },
    {
      name: 'Job Interview Simulator',
      url: 'https://ziqai.com/ai-interviewer/',
      description: 'Simulate and practice job interviews without ads or signup',
      category: 'Learning and Practice'
    },
    {
      name: 'GitHub Repos',
      url: 'https://awesome.facts.dev/',
      description: 'A GitHub Awesome Lists Directory',
      category: 'Learning and Practice'
    },
    {
      name: 'Free mock interview practice with real peopler',
      url: 'https://peerfect.net/',
      description: 'Free mock interview practice with real people',
      category: 'Learning and Practice'
    },
   
    {
      name: 'Book Summaries',
      url: 'https://sobrief.com/',
      description: 'A beautiful site with 73,530 free book summaries (with paid audio)',
      category: 'Learning and Practice'
    },
    {
      name: 'Digital Bullet Journal',
      url: 'https://www.bulletjournal.click/',
      description: 'I built a Digital Bullet Journal: Would Love Your Feedback!',
      category: 'Productivity Tools'
    },
    {
      name: 'Invoice Generator',
      url: 'https://medv.io/invoicer/',
      description: 'Invoice generator using contentEditable',
      category: 'Productivity Tools'
    },
    {
      name: 'minimal habit tracker ',
      url: 'https://redoit.app',
      description: 'cute and minimal habit tracker [Free & Open Source]',
      category: 'Productivity Tools'
    },
    {
      name: 'presentations with markdown',
      url: 'https://foldwrap.com/tools/markdown-slides',
      description: 'built a free tool to make a presentations with markdown',
      category: 'Productivity Tools'
    },
    {
      name: 'ToolNest.io',
      url: 'https://toolnest.io',
      description: 'ToolNest.io: A Beautiful, Free Toolbox for All Your Online Needs',
      category: 'Productivity Tools'
    },
    {
      name: 'Quick Timers',
      url: 'https://neonwatty.github.io/todo_timers/',
      description: 'A simple web app for creating and managing timers for your daily todos',
      category: 'Productivity Tools'
    },
    // {
    //   name: 'Leaflet',
    //   url: 'https://example.com/leaflet',
    //   description: 'Leaflet: an app for making quick fun documents, with custom themes, easy sharing, no account needed',
    //   category: 'Productivity Tools'
    // },
    {
      name: 'Meeting Productivity',
      url: 'http://www.transcribble.app',
      description: 'Use this app if you want to be 10x more productive during meetings',
      category: 'Productivity Tools'
    },
    
    {
      name: 'Mood Compliments',
      url: 'https://dropcheer.com',
      description: 'A personal Pocket of Positivity - Generate Instant Mood-Boosting Compliments!',
      category: 'Well-being and Relaxation'
    },
    {
      name: 'diet plan ',
      url: 'https://nutrimealsapp.com/diet-plan-generator',
      description: 'tool to generate diet plan for free!',
      category: 'Well-being and Relaxation'
    },
    {
      name: 'Free Recipe',
      url: 'https://aiexpert.world/recipe-scaler/',
      description: 'I Built a Free Recipe Scaler App Thats Free to Use. Feedback Appreciated!',
      category: 'Well-being and Relaxation'
    },

    {
      name: 'LoFi Music',
      url: 'https://www.lofizen.co',
      description: 'I made a website where you can listen to LoFi music, ambient sounds, and use different kinds of timers for working or studying',
      category: 'Well-being and Relaxation'
    },
    {
      name: 'Product Recommendation Engine',
      url: 'https://example.com/product-recommendation',
      description: 'Kiss goodbye to Sponsored Google results. I built a free product recommendation engine',
      category: 'Shopping and Services'
    },
    {
      name: 'Multi Calculator',
      url: 'https://www.houseofcalculators.com/',
      description: 'Made My First multi calculator website',
      category: 'Shopping and Services'
    },
    {
      name: 'Free Logo Maker',
      url: 'https://logo.im',
      description: 'I built a Free Logo Maker with drag & drop editing',
      category: 'Shopping and Services'
    },
    {
      name: 'Fake Address Generator',
      url: 'https://best-randoms.com/',
      description: 'I built a website that generates a fake United States address',
      category: 'Shopping and Services'
    },
    {
      name: 'Diff Text',
      url: 'https://difftext.com/',
      description: 'Diff Text - Compare Text Online',
      category: 'Technology and Development'
    },
    {
      name: 'The app store for professionals',
      url: 'https://insiderapps.com/',
      description: ' Looks like a much cleaner version of G2 (Appears it hasnt been updated in a while sadly)',
      category: 'Technology and Development'
    },
    {
      name: 'Paragraph Rewriter',
      url: 'https://paragraphrewrite.com/demo',
      description: 'I built a paragraph rewriter that runs 100% on your browser',
      category: 'Technology and Development'
    },
    // {
    //   name: 'GitHub Awesome Lists',
    //   url: 'https://example.com/github-awesome',
    //   description: 'A GitHub Awesome Lists Directory',
    //   category: 'Technology and Development'
    // },
    {
      name: 'Quick Website Generator',
      url: 'https://www.loopple.com/ai-website-builder',
      description: 'This tool lets you create your website in 30 seconds from a single prompt',
      category: 'Technology and Development'
    },
    {
      name: 'Decision Maker Pro',
      url: 'https://decisionmakerpro.net/',
      description: 'Decision Maker Pro - Free Decision-Making Tool',
      category: 'Miscellaneous Tools'
    },
    {
      name: 'making quick fun documents',
      url: 'https://leaflet.pub',
      description: 'Leaflet: an app for making quick fun documents, with custom themes, easy sharing, no account needed',
      category: 'Miscellaneous Tools'
    },
    {
      name: 'budgeting app',
      url: 'https://guitos.app/',
      description: 'guitos - a simple budgeting app that helps you figure out where your money went, plan your budget ahead of time and analyze past expenditures',
      category: 'Miscellaneous Tools'
    },
    {
      name: 'Travel Itinerary Generator',
      url: 'http://planvel.io',
      description: 'Create itineraries for travel in seconds without registering',
      category: 'Miscellaneous Tools'
    },
    {
      name: 'Phishing Report Tool',
      url: 'https://domainreporter.net',
      description: 'A website that lets you report any phishing or scam domain directly to its registrar',
      category: 'Miscellaneous Tools'
    },
    {
      name: 'Text to PDF Tool',
      url: 'https://formatmagic.ai',
      description: 'site that converts plain text into beautifully formatted PDF documents with one click.',
      category: 'Miscellaneous Tools'
    },
    {
      name: 'MassiveMark',
      url: 'https://www.bibcit.com/en/massivemark',
      description: 'Try MassiveMark: Copy Paste Content from ChatGPT to Docx/PDF with all formatting preserved',
      category: 'Miscellaneous Tools'
    }
  ];

  filteredWebsites = this.websites;
  searchQuery: string = '';
  selectedCategory: string = '';

  // Method to handle category change
  onCategoryChange(event: Event): void {
    const selectedCategory = (event.target as HTMLSelectElement).value;
    this.selectedCategory = selectedCategory;
    this.applyFilters();
  }

  // Method to handle search input change
  onSearchChange(): void {
    this.applyFilters();
  }

  // Apply both category and search filters
  applyFilters(): void {
    this.filteredWebsites = this.websites.filter(website => {
      const matchesCategory = this.selectedCategory
        ? website.category === this.selectedCategory
        : true;

      const matchesSearch = website.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            website.description.toLowerCase().includes(this.searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }
  onThemeChange() {
    console.log('Theme changed to:', this.currentTheme);
  }
}
