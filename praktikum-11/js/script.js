document.querySelectorAll("a").forEach((a)=>{
    // Jika di klik akan menjalankan fungsi computeChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})
function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // Mengambil Element pilihat komputer
    let pilihanKomputer = document.querySelector("#result");

    // Membuat Pilihan Komputer Dengan Array
    let Choices = ["Rock", "Paper", "Scissors"];

    // Pilihan Random Untuk Penguuna
    pilihanKomputer.innerHTML = Choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // Jika Pilihan Komputer == Pilihan user (Draw)
    if(pilihanUser == pilihanKomputer){
        alert("Draw");
    }

    // Jika Pilihan Komputer Menang
    if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        alert("Komputer Win");
    }else if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        alert("Komputer Winn");
    }else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        alert("Komputer Winn");
    }
     // Jika Pilihan user Menang
     if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("User Win");
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("User Winn");
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("User Winn");
    }
}