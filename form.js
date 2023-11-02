let send = window.document.querySelector("button.send")
send.addEventListener("click", function () {
    let fullName = document.querySelector("input[name=fullName]").value
    let gender = document.querySelector("select[name=gender]").value
    let age = document.querySelector("select[name=age]").value
    let married = document.querySelector("select[name=married]").value
    let degree = document.querySelector("select[name=degree]").value

    let year
    if (age === "15") {
        year = "2008"
    } else if (age === "16") {
        year = "2007"
    } else if (age === "17") {
        year = "2006"
    } else if (age === "18") {
        year = "2005"
    } else if (age === "19") {
        year = "2004"
    } else if (age === "20") {
        year = "2003"
    } else if (age === "21") {
        year = "2002"
    } else if (age === "22") {
        year = "2001"
    } else if (age === "23") {
        year = "2000"
    } else if (age === "24") {
        year = "1999"
    } else if (age === "25") {
        year = "1998"
    } else if (age === "26") {
        year = "1997"
    } else if (age === "27") {
        year = "1996"
    } else if (age === "28") {
        year = "1995"
    } else if (age === "29") {
        year = "1994"
    } else if (age === "30") {
        year = "1993"
    } else if (age === "31") {
        year = "1992"
    } else if (age === "32") {
        year = "1991"
    } else if (age === "33") {
        year = "1990"
    } else if (age === "34") {
        year = "1989"
    } else if (age === "35") {
        year = "1988"
    } else if (age === "36") {
        year = "1987"
    } else if (age === "37") {
        year = "1986"
    } else if (age === "38") {
        year = "1985"
    } else if (age === "39") {
        year = "1984"
    } else if (age === "40") {
        year = "1983"
    } else if (age === "41") {
        year = "1982"
    } else if (age === "42") {
        year = "1981"
    } else if (age === "43") {
        year = "1980"
    } else if (age === "44") {
        year = "1979"
    } else if (age === "45") {
        year = "1978"
    } else if (age === "46") {
        year = "1977"
    } else if (age === "47") {
        year = "1976"
    } else if (age === "48") {
        year = "1975"
    } else if (age === "49") {
        year = "1974"
    } else {
        year = "1973"
    }

    let root = document.querySelector("div#root")
    root.innerHTML = `
    <div class="opt1"> 
      <div class="name">
        <p class="name"> FullName : </p>
        <span class="name bg"> ${fullName} </span>
      </div> 
      <div class="gender">
        <p class="gender"> gender : </p>
        <span class="gender bg"> ${gender} </span>
      </div> 
    </div>

    <div class="opt2"> 
      <div class="age">
        <p class="age"> Year : </p>
        <span class="age bg"> ${year} </span>
      </div> 
      <div class="married">
        <p class="married"> marital status : </p>
        <span class="married bg"> ${married} </span>
      </div> 
      <div class="degree">
        <p class="degree"> degree : </p>
        <span class="degree bg"> ${degree} </span>
      </div> 
    </div>
    `
})