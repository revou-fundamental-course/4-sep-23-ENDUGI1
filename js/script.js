document.addEventListener("DOMContentLoaded", function () {
    const squareForm = document.getElementById("squareForm");
    const areaResult = document.getElementById("areaResult");
    const perimeterResult = document.getElementById("perimeterResult");
    const resetButton = document.getElementById("resetButton");

    squareForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const sideLength = parseFloat(document.getElementById("sideLength").value);

        if (!isNaN(sideLength)) {
            const area = sideLength * sideLength;
            const perimeter = 4 * sideLength;

            areaResult.textContent = area;
            perimeterResult.textContent = perimeter;

            document.getElementById("result").style.display = "block";
        } else {
            alert("Masukkan panjang sisi yang valid.");
        }
    });

    resetButton.addEventListener("click", function () {
        document.getElementById("sideLength").value = "";
        areaResult.textContent = "-";
        perimeterResult.textContent = "";
        document.getElementById("result").style.display = "none";
    });
});
