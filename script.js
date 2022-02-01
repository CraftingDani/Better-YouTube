//-- Constants --\\

const vid = document.querySelector("[data-vidTemplate]")
const main1Section = document.querySelector(".main1")
const specialSection = document.querySelector(".special")
const main2Section = document.querySelector(".main2")

const main1VidCount = 5
const specialVidCount = 5
const main2VidCount = 100


//-- features --\\

for(let i = 0; i < main1VidCount; i++)
{
    main1Section.appendChild(vid.content.cloneNode(true))
}

for(let i = 0; i < specialVidCount; i++)
{
    specialSection.appendChild(vid.content.cloneNode(true))
}

for(let i = 0; i < main2VidCount; i++)
{
    main2Section.appendChild(vid.content.cloneNode(true))
}
