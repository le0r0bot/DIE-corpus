// |jit-test| skip-if: !('oomTest' in this)
a = o = s = r = [];
o2 = s2 = r2 = g2 = f2 = m2 = Map;
e2 = Set;
v2 = b2 = new ArrayBuffer();
t2 = new Uint8ClampedArray();
minorgc();
x = /x/;

for (var i = 0; i < 4; ++i) {
  function f1() {
    ;
  }
}

Object.defineProperty(a, 12, {}).push(1);

toString = function () {
  return a.reverse();
};

oomTest(Date.prototype.toJSON);

function f1000() {
  ;
}

function f1001() {
  ;
}

function f1002() {
  ;
}

function f1003() {
  ;
}

function f1004() {
  ;
}

function f1005() {
  ;
}

function f1006() {
  ;
}

function f1007() {
  ;
}

function f1008() {
  ;
}

function f1009() {
  ;
}

function f1010() {
  ;
}

function f1011() {
  ;
}

function f1012() {
  ;
}

function f1013() {
  ;
}

function f1014() {
  ;
}

function f1015() {
  ;
}

function f1016() {
  ;
}

function f1017() {
  ;
}

function f1018() {
  ;
}

function f1019() {
  ;
}

function f1020() {
  ;
}

function f1021() {
  ;
}

function f1022() {
  ;
}

function f1023() {
  ;
}

function f1024() {
  ;
}

function f1025() {
  ;
}

function f1026() {
  ;
}

function f1027() {
  ;
}

function f1028() {
  ;
}

function f1029() {
  ;
}

function f1030() {
  ;
}

function f1031() {
  ;
}

function f1032() {
  ;
}

function f1033() {
  ;
}

function f1034() {
  ;
}

function f1035() {
  ;
}

function f1036() {
  ;
}

function f1037() {
  ;
}

function f1038() {
  ;
}

function f1039() {
  ;
}

function f1040() {
  ;
}

function f1041() {
  ;
}

function f1042() {
  ;
}

function f1043() {
  ;
}

function f1044() {
  ;
}

function f1045() {
  ;
}

function f1046() {
  ;
}

function f1047() {
  ;
}

function f1048() {
  ;
}

function f1049() {
  ;
}

function f1050() {
  ;
}

function f1051() {
  ;
}

function f1052() {
  ;
}

function f1053() {
  ;
}

function f1054() {
  ;
}

function f1055() {
  ;
}

function f1056() {
  ;
}

function f1057() {
  ;
}

function f1058() {
  ;
}

function f1059() {
  ;
}

function f1060() {
  ;
}

function f1061() {
  ;
}

function f1062() {
  ;
}

function f1063() {
  ;
}

function f1064() {
  ;
}

function f1065() {
  ;
}

function f1066() {
  ;
}

function f1067() {
  ;
}

function f1068() {
  ;
}

function f1069() {
  ;
}

function f1070() {
  ;
}

function f1071() {
  ;
}

function f1072() {
  ;
}

function f1073() {
  ;
}

function f1074() {
  ;
}

function f1075() {
  ;
}

function f1076() {
  ;
}

function f1077() {
  ;
}

function f1078() {
  ;
}

function f1079() {
  ;
}

function f1080() {
  ;
}

function f1081() {
  ;
}

function f1082() {
  ;
}

function f1083() {
  ;
}

function f1084() {
  ;
}

function f1085() {
  ;
}

function f1086() {
  ;
}

function f1087() {
  ;
}

function f1088() {
  ;
}

function f1089() {
  ;
}

function f1090() {
  ;
}

function f1091() {
  ;
}

function f1092() {
  ;
}

function f1093() {
  ;
}

function f1094() {
  ;
}

function f1095() {
  ;
}

function f1096() {
  ;
}

function f1097() {
  ;
}

function f1098() {
  ;
}

function f1099() {
  ;
}

function f1100() {
  ;
}

function f1101() {
  ;
}

function f1102() {
  ;
}

function f1103() {
  ;
}

function f1104() {
  ;
}

function f1105() {
  ;
}

function f1106() {
  ;
}

function f1107() {
  ;
}

function f1108() {
  ;
}

function f1109() {
  ;
}

function f1110() {
  ;
}

function f1111() {
  ;
}

function f1112() {
  ;
}

function f1113() {
  ;
}

function f1114() {
  ;
}

function f1115() {
  ;
}

function f1116() {
  ;
}

function f1117() {
  ;
}

function f1118() {
  ;
}

function f1119() {
  ;
}

function f1120() {
  ;
}

function f1121() {
  ;
}

function f1122() {
  ;
}

function f1123() {
  ;
}

function f1124() {
  ;
}

function f1125() {
  ;
}

function f1126() {
  ;
}

function f1127() {
  ;
}

function f1128() {
  ;
}

function f1129() {
  ;
}

function f1130() {
  ;
}

function f1131() {
  ;
}

function f1132() {
  ;
}

function f1133() {
  ;
}

function f1134() {
  ;
}

function f1135() {
  ;
}

function f1136() {
  ;
}

function f1137() {
  ;
}

function f1138() {
  ;
}

function f1139() {
  ;
}

function f1140() {
  ;
}

function f1141() {
  ;
}

function f1142() {
  ;
}

function f1143() {
  ;
}

function f1144() {
  ;
}

function f1145() {
  ;
}

function f1146() {
  ;
}

function f1147() {
  ;
}

function f1148() {
  ;
}

function f1149() {
  ;
}

function f1150() {
  ;
}

function f1151() {
  ;
}

function f1152() {
  ;
}

function f1153() {
  ;
}

function f1154() {
  ;
}

function f1155() {
  ;
}

function f1156() {
  ;
}

function f1157() {
  ;
}

function f1158() {
  ;
}

function f1159() {
  ;
}

function f1160() {
  ;
}

function f1161() {
  ;
}

function f1162() {
  ;
}

function f1163() {
  ;
}

function f1164() {
  ;
}

function f1165() {
  ;
}

function f1166() {
  ;
}

function f1167() {
  ;
}

function f1168() {
  ;
}

function f1169() {
  ;
}

function f1170() {
  ;
}

function f1171() {
  ;
}

function f1172() {
  ;
}

function f1173() {
  ;
}

function f1174() {
  ;
}

function f1175() {
  ;
}

function f1176() {
  ;
}

function f1177() {
  ;
}

function f1178() {
  ;
}

function f1179() {
  ;
}

function f1180() {
  ;
}

function f1181() {
  ;
}

function f1182() {
  ;
}

function f1183() {
  ;
}

function f1184() {
  ;
}

function f1185() {
  ;
}

function f1186() {
  ;
}

function f1187() {
  ;
}

function f1188() {
  ;
}

function f1189() {
  ;
}

function f1190() {
  ;
}

function f1191() {
  ;
}

function f1192() {
  ;
}

function f1193() {
  ;
}

function f1194() {
  ;
}

function f1195() {
  ;
}

function f1196() {
  ;
}

function f1197() {
  ;
}

function f1198() {
  ;
}

function f1199() {
  ;
}

function f1200() {
  ;
}

function f1201() {
  ;
}

function f1202() {
  ;
}

function f1203() {
  ;
}

function f1204() {
  ;
}

function f1205() {
  ;
}

function f1206() {
  ;
}

function f1207() {
  ;
}

function f1208() {
  ;
}

function f1209() {
  ;
}

function f1210() {
  ;
}

function f1211() {
  ;
}

function f1212() {
  ;
}

function f1213() {
  ;
}

function f1214() {
  ;
}

function f1215() {
  ;
}

function f1216() {
  ;
}

function f1217() {
  ;
}

function f1218() {
  ;
}

function f1219() {
  ;
}

function f1220() {
  ;
}

function f1221() {
  ;
}

function f1222() {
  ;
}

function f1223() {
  ;
}

function f1224() {
  ;
}

function f1225() {
  ;
}

function f1226() {
  ;
}

function f1227() {
  ;
}

function f1228() {
  ;
}

function f1229() {
  ;
}

function f1230() {
  ;
}

function f1231() {
  ;
}

function f1232() {
  ;
}

function f1233() {
  ;
}

function f1234() {
  ;
}

function f1235() {
  ;
}

function f1236() {
  ;
}

function f1237() {
  ;
}

function f1238() {
  ;
}

function f1239() {
  ;
}

function f1240() {
  ;
}

function f1241() {
  ;
}

function f1242() {
  ;
}

function f1243() {
  ;
}

function f1244() {
  ;
}

function f1245() {
  ;
}

function f1246() {
  ;
}

function f1247() {
  ;
}

function f1248() {
  ;
}

function f1249() {
  ;
}

function f1250() {
  ;
}

function f1251() {
  ;
}

function f1252() {
  ;
}

function f1253() {
  ;
}

function f1254() {
  ;
}

function f1255() {
  ;
}

function f1256() {
  ;
}

function f1257() {
  ;
}

function f1258() {
  ;
}

function f1259() {
  ;
}

function f1260() {
  ;
}

function f1261() {
  ;
}

function f1262() {
  ;
}

function f1263() {
  ;
}

function f1264() {
  ;
}

function f1265() {
  ;
}

function f1266() {
  ;
}

function f1267() {
  ;
}

function f1268() {
  ;
}

function f1269() {
  ;
}

function f1270() {
  ;
}

function f1271() {
  ;
}

function f1272() {
  ;
}

function f1273() {
  ;
}

function f1274() {
  ;
}

function f1275() {
  ;
}

function f1276() {
  ;
}

function f1277() {
  ;
}

function f1278() {
  ;
}

function f1279() {
  ;
}

function f1280() {
  ;
}

function f1281() {
  ;
}

function f1282() {
  ;
}
