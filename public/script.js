var grids = document.querySelectorAll('.grid')
var headings = document.querySelectorAll('.home-text-wrap .idea-text-container .home-text')

var onScreen = (idx) => {
    const grid = grids[idx]
    const heading = headings[idx]
    const gridColumns = grid.querySelectorAll('.splash-col')

    grid.classList.add('active')

    gridColumns.forEach(ele => {
        ele.classList.remove('animate-before', 'animate-after')
    })


    heading.classList.remove('animate-before', 'animate-after')
}

var offScreen = (idx, delay) => {
    const grid = grids[idx]
    const heading = headings[idx]
    const gridColumns = grid.querySelectorAll('.splash-col')

    gridColumns.forEach(ele => {
        ele.classList.add('animate-after')
    })

    heading.classList.add('animate-after')

    setTimeout(() => {
        grid.classList.remove('active')
    }, delay)
}

var animate = ({ timePerScreen, delay }) => {
    const cycleTime = timePerScreen + delay
    let nextIndex = 0

    let nextCycle = () => {
        const currentIndex = nextIndex

        onScreen(currentIndex)

        setTimeout(() => offScreen(currentIndex, delay), timePerScreen)

        nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1
    }

    nextCycle()

    setInterval(nextCycle, cycleTime)
}

animate({
    timePerScreen: 5000,
    delay: 1400
})


