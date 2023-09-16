function toggleArticles(sectionHeader) {
    const articleList = sectionHeader.nextElementSibling;
    articleList.style.display = articleList.style.display === 'block' ? 'none' : 'block';
}

// Classes

class Article {
    constructor(title,link,isComplete){
        this.title = title;
        this.link = link;
        this.isComplete = isComplete;
    }
}

class Section {
    constructor(title,articleList){
        this.title = title;
        this.articleList = articleList;
        this.percentComplete = this.setPercentComplete() 
    }
    getTotalComplete () {
        let totalComplete = 0
        for (let i=0 ; i<this.getTotalArticles() ; i++){
            if (this.articleList[i].isComplete){
                totalComplete += 1
            }
        }
        return totalComplete
    }
    getTotalArticles () {
        return this.articleList.length
    }
    setPercentComplete () {
        this.percentComplete = (this.getTotalComplete() / this.getTotalArticles()) * 100; 
    }
}

// Hardcoded data , In future we would have to get this from backend

let article1 = new Article( "Why Responsible Waste Management Matters",".",true)
let article2 = new Article("Getting Started with Responsible Waste Management",".",false)
let article3 = new Article("The Basics of Recycling",".",true)
let article4 = new Article("Recycling Electronics and E-Waste",".",true)
let article5 = new Article("Paper and Cardboard Recycling",".",false)
let article6 = new Article("Composting 101",".",true)
let article7 = new Article("Reducing Food Waste",".",true)
let article8 = new Article("Safe Disposal of Hazardous Waste",".",false)
let article9 = new Article("Proper Disposal of Paint and Household Chemicals",".",false)
let article10 = new Article("Reducing Plastic Waste: A Starter Guide",".",true)
let article11 = new Article("Alternatives to Common Plastic Products",".",true)
let article12 = new Article("The Zero Waste Lifestyle: What Is It and How to Start",".",false)
let article13 = new Article("Zero Waste Grocery Shopping",".",false)
let article14 = new Article("Environmental Benefits of Responsible Waste Management",".",false)
let article15 = new Article("The Role of Communities in Waste Reduction",".",true)


let section1 = new Section("Introduction to Responsible Waste Management",[article1,article2])
let section2 = new Section("Recycling Practices",[article3,article4,article5])
let section3 = new Section("Composting and Organic Waste Management",[article6,article7])
let section4 = new Section("Hazardous Waste and Special Disposal",[article8,article9])
let section5 = new Section("Reducing Single-Use Plastics",[article10,article11])
let section6 = new Section("The Journey to Zero Waste",[article12,article13])
let section7 = new Section("Community and Environmental Impact",[article14,article15])

let sections = [section1,section2,section3,section4,section5,section6,section7]



// Displaying the scetions

let superEl = document.getElementById("super-section")
let sectionsHtml = ""
for (let i=0 ; i<sections.length ; i++){
    sections[i].setPercentComplete()
    let articlesHtml = ""
    for (let j=0 ; j<sections[i].articleList.length ; j++){ 
        articlesHtml += `
        <li class="article">
                    <span class="article-title">${sections[i].articleList[j].title}</span>
                    <span class="article-status completed">${(sections[i].articleList[j].isComplete ? '&#10003; Completed' : '')}</span> <!-- Checkmark if completed -->
                </li>
        `;
    }
    
    let sectionHtml = `
    <div class="section">
            <div class="section-header" onclick="toggleArticles(this)">
                <div class="dropdown-symbol"></div>
                <span class="section-title">${sections[i].title}</span>
                <div class="progress-bar" style="margin-right:10px;">
                    <div class="progress-fill" style="width: ${sections[i].percentComplete}%;"></div> <!-- Adjust width for section progress -->
                </div>
            </div>
            <ul class="article-list">
                ${articlesHtml}
            </ul>
        </div>
    `;
    sectionsHtml += sectionHtml
}
superEl.innerHTML = sectionsHtml

// Displaying the total progress
let totalComplete = 0
let totalArticles = 0
for (let i=0 ; i<sections.length ; i++) {
    totalArticles += sections[i].getTotalArticles()
    totalComplete += sections[i].getTotalComplete()
} 
totalPercent = (totalComplete / totalArticles) * 100

let progressFillEl = document.getElementById("total-progress-fill")
progressFillEl.style.width = `${totalPercent}%`