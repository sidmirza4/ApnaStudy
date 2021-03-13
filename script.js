const mainContent = document.querySelector('.main-content');
const makeCard = (title) => {
    const markup = `<div class="card">
                    <div class="card-body">
                        <div class="card-title-div">
                            <h4 class="card-title">${title}</h4>
                        </div>
                        <div>
                            <i class="fas fa-question"></i>
                            30 Questions
                        </div>
                        <div>
                            <i class="fas fa-clock"></i>
                            30 Minutes
                        </div>
                        <div><i class="lni lni-rupee"></i> &nbsp; 2 /-</div>
                        <div>
                            <span class="heading">Rating</span>
                            <i class="lni lni-star"></i>
                            <i class="lni lni-star"></i>
                            <i class="lni lni-star"></i>
                            <i class="lni lni-star"></i>
                            <i class="lni lni-star"></i>
                        </div>
                        <div class="card-cta">
                            <button class="btn">Start Test</button>
                            <button class="btn btn-2">Share</button>
                        </div>
                    </div>
                </div>`;

    const card = document.createElement('div');
    card.innerHTML = markup;

    mainContent.appendChild(card);
};

const titles = [
    'Current Affairs Test 1',
    'Biology Test 1',
    'General Awareness Test 1',
    'Environmental Science Test 1',
    'Economics Test 1',
    'Geology Test 1',
    'English Test 1',
    'Commerce Test 1',
    'Science and Technology Test 1',
    'Physics Test 1',
    'Chemistry Test 1',
    'Aptitude Test 1',
    'Polity Test 1',
    'IT Test 1',
    'Zoology Test 1',
    'General Science Test 1',
    'History Test 1',
    'Sociology Test 1',
    'Geography Test 1',
    'Botany Test 1',
    'Reasoning Test 1',
    'Management Test 1',
    'Current Affairs Test 2',
    'Biology Test 2',
    'Environmental Science Test 2',
    'Economics Test 2',
    'Geology Test 2',
    'Biology Test 3',
];

titles.forEach((title) => makeCard(title));
