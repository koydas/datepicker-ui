const today = new Date()

let currentMonth
let currentYear

const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

function init() {
    currentMonth = today.getMonth()
    currentYear = today.getFullYear()

    setCurrentMonth(currentMonth)

    setCalendarDays()
}

function prevMonth() {
    if (--currentMonth < 0)
        {
            currentMonth = 11
            currentYear--
        }
    
        setCurrentMonth()
        setCalendarDays()
}

function nextMonth() {
    if (++currentMonth >= 12)
    {
        currentMonth = 0
        currentYear++
    }

    setCurrentMonth()
    setCalendarDays()
}

function getMonthName() {
    return monthNames[currentMonth]
}

function setCurrentMonth(month) {
    document.querySelector("#current-month").innerText = `${getMonthName()} ${currentYear}`
}

function setToday() {
    const tds = getTds()

    if (currentMonth == today.getMonth())

        tds.forEach(td => {
            if (td.innerText == today.getDate()) {
                td.classList.add("today")
            }
        })
    
    else 
        document.querySelector("#calendar-wrapper .today")?.classList.remove("today")

}

function setCalendarDays() {
    const firstDay = new Date(`${currentMonth+1}/1/${currentYear}`)
    const tds = getTds()

    const numberOfDays = new Date(currentYear, currentMonth+1, 0).getDate()

    let j = 1
    tds.forEach((td, i) => {
  
            td.innerText = ""
    })
    
    tds.forEach((td, i) => {
        if (i < firstDay.getDay()) 
            td.innerText = ""
        else if (j <= numberOfDays)
            td.innerText = j++
    })

    tds[firstDay.getDay()].innerText = 1

    setToday()
}

function getTds() {
    return document.querySelectorAll("#calendar-wrapper .body table tbody td")
}