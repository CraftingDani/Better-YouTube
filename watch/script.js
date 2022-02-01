//-- Constants --\\

const vid = document.querySelector("[data-vidTemplate]")
const otherVidsSection = document.querySelector(".otherVids")

const vidCount = 10


//-- features --\\

for(let i = 0; i < vidCount; i++)
{
    otherVidsSection.appendChild(vid.content.cloneNode(true))
}
