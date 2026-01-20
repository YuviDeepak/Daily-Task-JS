

for (let i = 1; i <= 5; i++) {
            for (let j = 5; j >= 1; j--) {
                if (j <= i) {
                    document.writeln("*&nbsp")
                }
                else {
                    document.writeln("&nbsp&nbsp&nbsp")

                }
            }

            for (let j = 1; j <=i; j++) {
                    document.writeln("*&nbsp")
                
                
            }
            document.writeln("<br>")
        }