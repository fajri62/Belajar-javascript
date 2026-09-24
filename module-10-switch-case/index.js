 /* SWITCH CASE */

    let hari = "rabu";

    switch (hari) {
        case "senin":
            console.log("sekarang adalah hari senin");
            break;
        case "selasa":
            console.log("sekarang adalah hari selasa");
            break;
        case "rabu":
            console.log("sekarang adalah hari rabu");
            break;
        case "kamis":
            console.log("sekarang adalah hari kamis");
            break;
        case "jumat":
            console.log("sekarang adalah hari jumat");
            break;
        case "sabtu":
            console.log("sekarang adalah hari sabtu");
            break;
        case "minggu":
            console.log("sekarang adalah hari minggu");
            break;
        default:
            console.log("coba ulangi lagi dan masukan nama hari yang benar");
    };

let nilai = 93;

switch (true) {
    case (nilai >= 90 && nilai <= 100):
        console.log("A");
        break;
    case (nilai >= 80 && nilai <= 90):
        console.log("B");
        break;
    case (nilai >= 70 && nilai <= 80):
        console.log("C");
        break;
    default:
        console.log("D");
}