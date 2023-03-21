function getFibonacci(n) {
        if (typeof n !== "number" || isNaN(n)) {
          return "not allowed";
        }
        if (n < 1 || n > 10) {
          return "not allowed";
        }
        const series = [1, 1];
        for (let i = 2; i < n; i++) {
          const num = series[i - 1] + series[i - 2];
          series.push(num);
        }
        return series;
      }

      function generateFibonacci() {
        const input = document.getElementById("input").value;
        const output = document.getElementById("output");

        const n = parseInt(input);
        const series = getFibonacci(n);

        if (series === "not allowed") {
          output.innerHTML = "Invalid input";
        } else {
          output.innerHTML = series.join(", ");
        }
      }

    