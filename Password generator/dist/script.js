let upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let lowerset = "abcdefghijklmnopqrstuvwxyz";
        let numberset = "0123456789";
        let symbolset = "*/$@#&_-!<>?[]";

        let result = document.getElementById("result");
        let passlength = document.getElementById("passLength");
        let uppercase = document.getElementById("upper");
        let lowercase = document.getElementById("lower");
        let numbers = document.getElementById("number");
        let symbols = document.getElementById("symbol");

        let getRandomData = (dataset) => {
            return dataset[Math.floor(Math.random() * dataset.length)];
        }

        function generatePassword() {
            let password = "";
            let availableSets = [];
            if (uppercase.checked) {
                availableSets.push(upperset);
            }
            if (lowercase.checked) {
                availableSets.push(lowerset);
            }
            if (numbers.checked) {
                availableSets.push(numberset);
            }
            if (symbols.checked) {
                availableSets.push(symbolset);
            }

            if (availableSets.length === 0) {
                alert("Please select at least one character set.");
                return;
            }
            // console.log(availableSets);
            

            for (let i = 0; i < passlength.value; i++) {
                let selectedSet = availableSets[Math.floor(Math.random() * availableSets.length)];
                // console.log(selectedSet)
                password += getRandomData(selectedSet);
                console.log(password);
                
            }

            result.innerText = password;
        }

        generatePassword();

        document.getElementById("btn").addEventListener("click", function () {
            generatePassword();
        });
