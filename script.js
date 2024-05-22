document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".bar");

    bars.forEach(bar => {
        bar.addEventListener("click", () => {
            let goal = parseInt(bar.dataset.goal);
            let count = parseInt(bar.dataset.count);

            if (count < goal) {
                count++;
                bar.dataset.count = count;
                const heightPercentage = (count / goal) * 100;
                bar.style.height = `${heightPercentage}%`;
                bar.querySelector(".counter").textContent = `${count}/${goal}`;
                if (count === goal) {
                    bar.querySelector(".counter").textContent = "Complete";
                }
            }
        });
    });
});
