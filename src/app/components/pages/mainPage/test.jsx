import React from "react";

const WaveAnimation = () => {
  // const a = window.innerWidth;
  // console.log(a);
  // const b = `${a}px`;
  const a = window.innerHeight;
  console.log(a);
  const b = `${a}px`;
  return (
    <svg
      // width={b}
      width="100%"
      // height="400px"
      height={b}
      id="svg"
      viewBox="0 0 1440 490"
      reserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-300 ease-in-out delay-150 TEST"
    >
      <style>
        {`
          .path-0{
            animation:pathAnim-0 10s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          @keyframes pathAnim-0{
            0%{
              d: path("M 0,500 L 0,93 C 58.58229013254787,93.38273195876289 117.16458026509574,93.76546391752576 180,99 C 242.83541973490426,104.23453608247424 309.9239690721649,114.3208762886598 369,124 C 428.0760309278351,133.6791237113402 479.1395434462445,142.95103092783506 533,131 C 586.8604565537555,119.04896907216495 643.5178571428571,85.875 703,72 C 762.4821428571429,58.125 824.7890279823271,63.54896907216495 890,66 C 955.2109720176729,68.45103092783505 1023.3260309278351,67.92912371134021 1080,80 C 1136.673969072165,92.07087628865979 1181.906848306333,116.73453608247422 1240,121 C 1298.093151693667,125.26546391752578 1369.0465758468335,109.13273195876289 1440,93 L 1440,500 L 0,500 Z");
            }
            25%{
              d: path("M 0,500 L 0,93 C 64.82787187039764,74.04491899852724 129.6557437407953,55.08983799705449 193,52 C 256.3442562592047,48.91016200294551 318.2048969072165,61.685567010309285 383,73 C 447.7951030927835,84.31443298969072 515.5246686303387,94.1678939617084 569,107 C 622.4753313696613,119.8321060382916 661.6964285714286,135.64285714285717 712,128 C 762.3035714285714,120.35714285714285 823.689617083947,89.26067746686303 885,84 C 946.310382916053,78.73932253313697 1007.5451030927834,99.31443298969072 1073,97 C 1138.4548969072166,94.68556701030928 1208.1299705449192,69.48159057437408 1270,65 C 1331.8700294550808,60.51840942562592 1385.9350147275404,76.75920471281296 1440,93 L 1440,500 L 0,500 Z");
            }
            50%{
              d: path("M 0,500 L 0,93 C 45.09057437407954,70.6610824742268 90.18114874815907,48.322164948453604 146,57 C 201.81885125184093,65.6778350515464 268.36597938144325,105.37242268041237 342,127 C 415.63402061855675,148.62757731958763 496.35493372606777,152.1881443298969 553,138 C 609.6450662739322,123.8118556701031 642.2142857142858,91.875 698,71 C 753.7857142857142,50.125 832.7879234167896,40.3118556701031 896,47 C 959.2120765832104,53.6881443298969 1006.6340206185564,76.87757731958762 1072,77 C 1137.3659793814436,77.12242268041238 1220.675994108984,54.1778350515464 1285,53 C 1349.324005891016,51.8221649484536 1394.662002945508,72.4110824742268 1440,93 L 1440,500 L 0,500 Z");
            }
            75%{
              d: path("M 0,500 L 0,93 C 63.03663475699558,117.940353460972 126.07326951399116,142.880706921944 185,133 C 243.92673048600884,123.11929307805597 298.7435567010309,78.41752577319589 356,78 C 413.2564432989691,77.58247422680411 472.9525036818852,121.44918998527245 525,127 C 577.0474963181148,132.55081001472755 621.4464285714287,99.78571428571429 686,85 C 750.5535714285713,70.21428571428571 835.2617820324004,73.40795287187039 901,66 C 966.7382179675996,58.59204712812961 1013.5064432989691,40.58247422680413 1064,51 C 1114.493556701031,61.41752577319587 1168.712444771723,100.26215022091311 1232,112 C 1295.287555228277,123.73784977908689 1367.6437776141383,108.36892488954345 1440,93 L 1440,500 L 0,500 Z");
            }
            100%{
              d: path("M 0,500 L 0,93 C 58.58229013254787,93.38273195876289 117.16458026509574,93.76546391752576 180,99 C 242.83541973490426,104.23453608247424 309.9239690721649,114.3208762886598 369,124 C 428.0760309278351,133.6791237113402 479.1395434462445,142.95103092783506 533,131 C 586.8604565537555,119.04896907216495 643.5178571428571,85.875 703,72 C 762.4821428571429,58.125 824.7890279823271,63.54896907216495 890,66 C 955.2109720176729,68.45103092783505 1023.3260309278351,67.92912371134021 1080,80 C 1136.673969072165,92.07087628865979 1181.906848306333,116.73453608247422 1240,121 C 1298.093151693667,125.26546391752578 1369.0465758468335,109.13273195876289 1440,93 L 1440,500 L 0,500 Z");
            }
          }
          .path-1{
            animation:pathAnim-1 10s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          @keyframes pathAnim-1{
            0%{
              d: path("M 0,500 L 0,218 C 59.34425625920471,200.0581737849779 118.68851251840942,182.11634756995582 175,199 C 231.31148748159058,215.88365243004418 284.59020618556707,267.59278350515467 346,263 C 407.40979381443293,258.40721649484533 476.95066273932264,197.5125184094256 545,198 C 613.0493372606774,198.4874815905744 679.6071428571429,260.3571428571429 735,257 C 790.3928571428571,253.64285714285714 834.6207658321061,185.05891016200295 897,175 C 959.3792341678939,164.94108983799705 1039.9097938144328,213.40721649484536 1097,231 C 1154.0902061855672,248.59278350515464 1187.7400589101621,235.3122238586156 1241,228 C 1294.2599410898379,220.6877761413844 1367.129970544919,219.3438880706922 1440,218 L 1440,500 L 0,500 Z");
            }
            25%{
              d: path("M 0,500 L 0,218 C 73.3613770250368,208.98306332842415 146.7227540500736,199.9661266568483 203,204 C 259.2772459499264,208.0338733431517 298.47036082474233,225.1185567010309 360,239 C 421.52963917525767,252.8814432989691 505.3958026509573,263.559646539028 570,248 C 634.6041973490427,232.44035346097198 679.9464285714287,190.64285714285714 735,194 C 790.0535714285713,197.35714285714286 854.8184830633282,245.8689248895434 911,245 C 967.1815169366718,244.1310751104566 1014.7796391752579,193.88144329896906 1076,189 C 1137.220360824742,184.11855670103094 1212.0629602356405,224.60530191458028 1275,237 C 1337.9370397643595,249.39469808541972 1388.9685198821799,233.69734904270985 1440,218 L 1440,500 L 0,500 Z");
            }
            50%{
              d: path("M 0,500 L 0,218 C 68.29197349042708,214.0220913107511 136.58394698085417,210.04418262150222 188,206 C 239.41605301914583,201.95581737849778 273.9561855670103,197.84536082474224 337,215 C 400.0438144329897,232.15463917525776 491.5913107511045,270.57437407952875 556,264 C 620.4086892488955,257.42562592047125 657.6785714285716,205.85714285714283 717,203 C 776.3214285714284,200.14285714285717 857.6944035346097,245.99705449189992 925,251 C 992.3055964653903,256.0029455081001 1045.5438144329896,220.15463917525773 1096,204 C 1146.4561855670104,187.84536082474227 1194.1303387334315,191.3843888070692 1251,197 C 1307.8696612665685,202.6156111929308 1373.9348306332843,210.3078055964654 1440,218 L 1440,500 L 0,500 Z");
            }
            75%{
              d: path("M 0,500 L 0,218 C 47.58818114874816,229.1592415316642 95.17636229749633,240.31848306332842 150,237 C 204.82363770250367,233.68151693667158 266.88273195876286,215.88530927835052 335,213 C 403.11726804123714,210.11469072164948 477.2927098674521,222.1402798232695 537,237 C 596.7072901325479,251.8597201767305 641.9464285714287,269.55357142857144 698,260 C 754.0535714285713,250.44642857142858 820.9215758468333,213.6454344624448 880,197 C 939.0784241531667,180.3545655375552 990.3672680412371,183.86469072164948 1055,203 C 1119.6327319587629,222.13530927835052 1197.6093519882181,256.8958026509573 1264,262 C 1330.3906480117819,267.1041973490427 1385.195324005891,242.55209867452135 1440,218 L 1440,500 L 0,500 Z");
            }
            100%{
              d: path("M 0,500 L 0,218 C 59.34425625920471,200.0581737849779 118.68851251840942,182.11634756995582 175,199 C 231.31148748159058,215.88365243004418 284.59020618556707,267.59278350515467 346,263 C 407.40979381443293,258.40721649484533 476.95066273932264,197.5125184094256 545,198 C 613.0493372606774,198.4874815905744 679.6071428571429,260.3571428571429 735,257 C 790.3928571428571,253.64285714285714 834.6207658321061,185.05891016200295 897,175 C 959.3792341678939,164.94108983799705 1039.9097938144328,213.40721649484536 1097,231 C 1154.0902061855672,248.59278350515464 1187.7400589101621,235.3122238586156 1241,228 C 1294.2599410898379,220.6877761413844 1367.129970544919,219.3438880706922 1440,218 L 1440,500 L 0,500 Z");
            }
          }
          .path-2{
            animation:pathAnim-2 10s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          @keyframes pathAnim-2{
            0%{
              d: path("M 0,500 L 0,343 C 74.27687776141383,350.72477908689245 148.55375552282766,358.44955817378496 206,352 C 263.44624447717234,345.55044182621504 304.06185567010306,324.9265463917526 349,323 C 393.93814432989694,321.0734536082474 443.19882179675994,337.8442562592047 514,334 C 584.80117820324,330.1557437407953 677.1428571428571,305.6964285714286 742,310 C 806.8571428571429,314.3035714285714 844.2297496318114,347.37002945508095 892,353 C 939.7702503681886,358.62997054491905 997.9381443298969,336.82345360824746 1066,324 C 1134.0618556701031,311.17654639175254 1212.0176730486007,307.3361561119293 1276,312 C 1339.9823269513993,316.6638438880707 1389.9911634756995,329.83192194403534 1440,343 L 1440,500 L 0,500 Z");
            }
            25%{
              d: path("M 0,500 L 0,343 C 72.4675994108984,344.99742268041234 144.9351988217968,346.99484536082474 203,347 C 261.0648011782032,347.00515463917526 304.72680412371125,345.01804123711344 359,337 C 413.27319587628875,328.98195876288656 478.157584683358,314.9329896907216 543,310 C 607.842415316642,305.0670103092784 672.6428571428571,309.25000000000006 736,316 C 799.3571428571429,322.74999999999994 861.2709867452135,332.0670103092783 916,343 C 970.7290132547865,353.9329896907217 1018.2731958762888,366.4819587628866 1069,375 C 1119.7268041237112,383.5180412371134 1173.6362297496316,388.00515463917526 1236,382 C 1298.3637702503684,375.99484536082474 1369.1818851251842,359.49742268041234 1440,343 L 1440,500 L 0,500 Z");
            }
            50%{
              d: path("M 0,500 L 0,343 C 61.24374079528718,337.43262150220914 122.48748159057436,331.86524300441823 178,347 C 233.51251840942564,362.13475699558177 283.29381443298973,397.9716494845361 342,385 C 400.70618556701027,372.0283505154639 468.3372606774667,310.24815905743736 537,310 C 605.6627393225333,309.75184094256264 675.3571428571429,371.03571428571433 740,378 C 804.6428571428571,384.96428571428567 864.2341678939616,337.60898379970547 918,313 C 971.7658321060384,288.39101620029453 1019.7061855670104,286.5283505154639 1071,303 C 1122.2938144329896,319.4716494845361 1176.941089837997,354.2776141384389 1239,364 C 1301.058910162003,373.7223858615611 1370.5294550810015,358.3611929307806 1440,343 L 1440,500 L 0,500 Z");
            }
            75%{
              d: path("M 0,500 L 0,343 C 46.68593519882178,344.0574374079529 93.37187039764356,345.11487481590575 161,352 C 228.62812960235644,358.88512518409425 317.19845360824746,371.5979381443299 375,374 C 432.80154639175254,376.4020618556701 459.83431516936673,368.4933726067747 508,365 C 556.1656848306333,361.5066273932253 625.4642857142859,362.4285714285714 703,364 C 780.5357142857141,365.5714285714286 866.3085419734904,367.7923416789396 932,368 C 997.6914580265096,368.2076583210604 1043.3015463917525,366.40206185567007 1099,362 C 1154.6984536082475,357.59793814432993 1220.4852724594994,350.59941089838 1279,347 C 1337.5147275405006,343.40058910162 1388.7573637702503,343.20029455081 1440,343 L 1440,500 L 0,500 Z");
            }
            100%{
              d: path("M 0,500 L 0,343 C 74.27687776141383,350.72477908689245 148.55375552282766,358.44955817378496 206,352 C 263.44624447717234,345.55044182621504 304.06185567010306,324.9265463917526 349,323 C 393.93814432989694,321.0734536082474 443.19882179675994,337.8442562592047 514,334 C 584.80117820324,330.1557437407953 677.1428571428571,305.6964285714286 742,310 C 806.8571428571429,314.3035714285714 844.2297496318114,347.37002945508095 892,353 C 939.7702503681886,358.62997054491905 997.9381443298969,336.82345360824746 1066,324 C 1134.0618556701031,311.17654639175254 1212.0176730486007,307.3361561119293 1276,312 C 1339.9823269513993,316.6638438880707 1389.9911634756995,329.83192194403534 1440,343 L 1440,500 L 0,500 Z");
            }
          }
        `}
      </style>
      <defs>
        <linearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="5%" stopColor="#0693e3"></stop>
          <stop offset="95%" stopColor="#0693e3"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,500 L 0,93 C 58.58229013254787,93.38273195876289 117.16458026509574,93.76546391752576 180,99 C 242.83541973490426,104.23453608247424 309.9239690721649,114.3208762886598 369,124 C 428.0760309278351,133.6791237113402 479.1395434462445,142.95103092783506 533,131 C 586.8604565537555,119.04896907216495 643.5178571428571,85.875 703,72 C 762.4821428571429,58.125 824.7890279823271,63.54896907216495 890,66 C 955.2109720176729,68.45103092783505 1023.3260309278351,67.92912371134021 1080,80 C 1136.673969072165,92.07087628865979 1181.906848306333,116.73453608247422 1240,121 C 1298.093151693667,125.26546391752578 1369.0465758468335,109.13273195876289 1440,93 L 1440,500 L 0,500 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        fillOpacity="0.4"
        className="transition-all duration-300 ease-in-out delay-150 path-0"
      ></path>
      <path
        d="M 0,500 L 0,218 C 59.34425625920471,200.0581737849779 118.68851251840942,182.11634756995582 175,199 C 231.31148748159058,215.88365243004418 284.59020618556707,267.59278350515467 346,263 C 407.40979381443293,258.40721649484533 476.95066273932264,197.5125184094256 545,198 C 613.0493372606774,198.4874815905744 679.6071428571429,260.3571428571429 735,257 C 790.3928571428571,253.64285714285714 834.6207658321061,185.05891016200295 897,175 C 959.3792341678939,164.94108983799705 1039.9097938144328,213.40721649484536 1097,231 C 1154.0902061855672,248.59278350515464 1187.7400589101621,235.3122238586156 1241,228 C 1294.2599410898379,220.6877761413844 1367.129970544919,219.3438880706922 1440,218 L 1440,500 L 0,500 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        fillOpacity="0.53"
        className="transition-all duration-300 ease-in-out delay-150 path-1"
      ></path>
      <path
        d="M 0,500 L 0,343 C 74.27687776141383,350.72477908689245 148.55375552282766,358.44955817378496 206,352 C 263.44624447717234,345.55044182621504 304.06185567010306,324.9265463917526 349,323 C 393.93814432989694,321.0734536082474 443.19882179675994,337.8442562592047 514,334 C 584.80117820324,330.1557437407953 677.1428571428571,305.6964285714286 742,310 C 806.8571428571429,314.3035714285714 844.2297496318114,347.37002945508095 892,353 C 939.7702503681886,358.62997054491905 997.9381443298969,336.82345360824746 1066,324 C 1134.0618556701031,311.17654639175254 1212.0176730486007,307.3361561119293 1276,312 C 1339.9823269513993,316.6638438880707 1389.9911634756995,329.83192194403534 1440,343 L 1440,500 L 0,500 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        fillOpacity="1"
        className="transition-all duration-300 ease-in-out delay-150 path-2"
      ></path>
    </svg>
  );
};

export default WaveAnimation;
