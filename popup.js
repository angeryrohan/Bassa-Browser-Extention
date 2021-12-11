
// SHOW NOTIFICATION

function showNotification(message) {
  var n = new noty({
        text: message,
        layout: "bottomRight",
        animation: {
          closeWith: ["click"],
          open: "animated bounceInUp",
          close: "animated bounceOutRight"
        }
      });
}

// GRAPH DATA AND RENDERING GRAPH

var series = {
  monthDataSeries1: {
  bandwidthEfficiency: [88, 42, 53, 81, 68, 74],
  time: ["3 Min", "2.5 Min", "2 Min", "1.5 Min", "1 Min", "0.5 Min"]
  }
};

var options = {
  colors: ["#F44336", "#E91E63", "#9C27B0"],
  chart: {
    height: 350,
    type: "area",
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "straight"
  },
  series: [
    {
      name: "bandwidth efficiency (In %)",
      data: series.monthDataSeries1.bandwidthEfficiency
    }
  ],
  title: {
    align: "left"
  },
  subtitle: {
    align: "left"
  },
  labels: series.monthDataSeries1.time,
  xaxis: {
    type: "string"
  },
  yaxis: {
    opposite: true
  },
  legend: {
    horizontalAlign: "left"
  }
};

document.addEventListener("DOMContentLoaded", function() {
let chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
});

// FUNCTION TO ADD DOWNLOAD

function addDownload() {
  let downurl = document.getElementsByClassName("urlText")[0].value;
  const basePath = 'http://localhost:5000/';
  let downloadPath = basePath + 'api/download' + downurl;
  if (downurl === "" || downurl === undefined || !linkvalidator(downurl)) {
    showNotification("Please Enter a valid URL");
  }
  else {
    try {
      showNotification("Download Listed");
      $.post(downloadPath + downurl, downurl, function(data,status) {
        alert("Data: " + data + "\nStatus: " + status);
      });
    } 
    catch (error) {
      alert("Error");
    }
  }
}

// HIDE DIV ON TOGGLE SWITCH (ON/OFF SWITCH)

document.addEventListener("DOMContentLoaded", function() {
  let checkbox = $("#switch-1");
  let hidden = $("#hidden_fields");
  let populate = $("#populate");
  hidden.hide();
  checkbox.change(function() {
    if (checkbox.is(":checked")) {
      hidden.show();
    }
    else {
      hidden.hide();
    }
  });
});

// ON-CLICK BUTTON EVENT LISTENER

document.addEventListener("DOMContentLoaded", function() {
  var download_btn = document.getElementById("download_btn");
  download_btn.addEventListener("click", function() {
    addDownload();
  });
});

// LINK VALIDATOR

function linkvalidator(link) {
  let urlvalidator = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
  let magnetvalidator = /magnet:\?xt=/i;
  if (urlvalidator.test(link) || link.match(magnetvalidator) !== null) {
    return true;
  }
  else {
    return false;
  }
};
