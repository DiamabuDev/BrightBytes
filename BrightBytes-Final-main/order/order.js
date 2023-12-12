var isRepair = true

window.addEventListener("load", (_) => {
  changeStateSwitch();
});

function changeStateSwitch() {

  var btnRepair = document.getElementById("btn-repair");
  var btnPurchase = document.getElementById("btn-purchase");

  if (isRepair) {
    btnRepair.classList.remove("btn-disabled");
    btnRepair.classList.add("btn-enabled");

    btnPurchase.classList.add("btn-disabled");
    btnPurchase.classList.remove("btn-enabled");

  } else {
    btnRepair.classList.add("btn-disabled");
    btnRepair.classList.remove("btn-enabled");

    btnPurchase.classList.remove("btn-disabled");
    btnPurchase.classList.add("btn-enabled");
  }

  isRepair = !isRepair;
}
