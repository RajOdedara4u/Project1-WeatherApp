// API KEY : M9FSZRENPPBEPA2PU7CTUBVB5
// I just create this wheather site using html css and js using weather api from weather.visualcrossing.com

const GetData = async () => {
  document.getElementById("space").innerHTML = "Fetching Data"; // Showing Message Fetching while retriving data from api

  // We Cover The Code Into Try Block For Error Handaling..
  // If The Function Is Unable To Fetch Data From Api Then it Execute Then Block

  try {
    const city = document.getElementById("getCountry").value; //Accesing The Entered Country Or Inputed Data From User...

    // Fetching Data From Api Accroding To City
    const data = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=M9FSZRENPPBEPA2PU7CTUBVB5`
    );

    let realData = await data.json(); // Converting Data Into Json Formate...

    // Conditions For Hero Seaction Image Day or Night-----------------------------------------------------------------------
    const Dtime = realData.currentConditions.datetime; // Getting The Currunt Time Into Variable From Api
    let CurruntTime = parseInt(Dtime); // Converting String Into Number

    if (CurruntTime >= 18 || CurruntTime < 6) {
      document.getElementById("s").src = "./images/monnclouds.png";
      document.getElementById("space").innerHTML = Dtime + " Night...🌉";
    } else {
      document.getElementById("s").src = "./images/realsun.png";
      document.getElementById("space").innerHTML = Dtime + " Day...🌄";
    }

    document.getElementById("tempp").innerHTML =
      realData.currentConditions.temp + "C";
    document.getElementById("TempDesc").innerHTML = realData.description;

    // --------- Hero Seaction 3 Icon's Part
    // --------- Icon 1 -------
    document.getElementById("tempp").innerHTML =
      realData.currentConditions.temp + "C";
    document.getElementById("TempDesc").innerHTML =
      realData.currentConditions.icon;

    // --------- Icon 2 -------
    document.getElementById("humidity").innerHTML =
      realData.currentConditions.humidity + "%";
    document.getElementById("humidityDesc").innerHTML =
      realData.currentConditions.conditions;

    // --------- Icon 3 -------
    document.getElementById("wind").innerHTML =
      realData.currentConditions.dew + "km / h";
    document.getElementById("windDesc").innerHTML = realData.timezone;

    // ------------------ 3 Day Forcast Part -------------------------------------
    document.getElementById("ss2").src = "./images/sunrain.png";
    document.getElementById("ss3").src = "./images/fullrain.png";
    document.getElementById("ss4").src = "./images/monnclouds.png";

    // ------------------ Box 1 -------------------------------------
    document.getElementById("boxt0").innerHTML = "NOW";
    document.getElementById("boxc0").innerHTML =
      realData.currentConditions.temp + "C";

    // ------------------ Box 2 -------------------------------------
    document.getElementById("boxc1").innerHTML =
      realData.days[0].hours[0].temp + " C ";
    document.getElementById("boxt1").innerHTML =
      realData.days[0].hours[0].datetime;

    // ------------------ Box 3 -------------------------------------
    document.getElementById("boxc2").innerHTML =
      realData.days[0].hours[15].temp + " C ";
    document.getElementById("boxt2").innerHTML =
      realData.days[0].hours[15].datetime;

    // ------------------ Box 4 -------------------------------------
    document.getElementById("boxc3").innerHTML =
      realData.days[0].hours[20].temp + " C ";
    document.getElementById("boxt3").innerHTML =
      realData.days[0].hours[20].datetime;

    // ------------------ Box 5 -------------------------------------
    document.getElementById("boxc4").innerHTML =
      realData.days[0].hours[23].temp + " C ";
    document.getElementById("boxt4").innerHTML =
      realData.days[0].hours[23].datetime;

    // ------------------ Error Handaling... -------------------------------------
  } catch (er) {
    document.getElementById("space").innerHTML = "Please Enter Valid Country.."; // If The Data Of Country was not fatched It will throw Coustom Error
  }
};
