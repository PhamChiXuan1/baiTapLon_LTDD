import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

const Database = [
  {
    id: 1,
    monHoc: "Toán cao cấp 1",
    hocPhi: "1.220.000",
    daNop: "1.220.000",
    khauTru: "0",
    congNo: "0",
  },
  {
    id: 2,
    monHoc: "Giáo dục thể chất 1",
    hocPhi: "2.440.000",
    daNop: "2.440.000",
    khauTru: "0",
    congNo: "0",
  },
  {
    id: 3,
    monHoc: "Triết học Mác - Lênin 1",
    hocPhi: "1.220.000",
    daNop: "1.220.000",
    khauTru: "0",
    congNo: "0",
  },
  {
    id: 4,
    monHoc: "Kỹ năng làm việc nhóm",
    hocPhi: "1.220.000",
    daNop: "1.220.000",
    khauTru: "0",
    congNo: "0",
  },
  {
    id: 5,
    monHoc: "Nhập môn tin học",
    hocPhi: "1.220.000",
    daNop: "1.220.000",
    khauTru: "0",
    congNo: "0",
  },

  {
    id: 6,
    monHoc: "Nhập môn lập trình",
    hocPhi: "1.960.000",
    daNop: "1.960.000",
    khauTru: "0",
    congNo: "0",
  },
];
function MannHinhCongNo({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Image
              style={styles.img}
              source={require("../assets/img/mhnn/Frame 8.png")}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.textNN}>Công nợ</Text>
        </View>

        <View style={styles.header1}>
          <View style={styles.btnH1}>
            <Text style={styles.textH1}>Chọn học kỳ</Text>
            <Image
              style={styles.imgH1}
              source={require("../assets/img/mhcn/Vector.png")}
            ></Image>
          </View>
        </View>
        <View>
          <View style={styles.header2}>
            <Text style={styles.textH2}>Mức học phí</Text>
            <Text style={styles.textH2}>Đã nộp</Text>
            <Text style={styles.textH2}>Khẩu trừ</Text>
            <Text style={styles.textH2}>Công nợ</Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View>
          <FlatList
            data={Database}
            renderItem={({ item }) => {
              return (
                <View>
                  <View style={styles.content1}>
                    <Text style={styles.textC1}>{item.monHoc}</Text>
                    <View style={{flexDirection:'row', marginTop:'10px',}}>
                    <Text style={styles.text1C1}>{item.hocPhi}</Text>
                    <Text style={styles.text2C1}>{item.daNop}</Text>
                    <Text style={styles.text3C1}>{item.khauTru}</Text>
                    <Text style={styles.text4C1}>{item.congNo}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flex: 2,
    height: "200px",
    backgroundImage: "linear-gradient(to right, #1E90FF,#00BFFF)",
    // flexDirection: "row",
  },

  img: {
    height: "46px",
    width: "40px",
    top: "15px",
  },

  textNN: {
    fontFamily: "Poppins",
    fontSize: "16px",
    color: "rgba(255, 255, 255, 1)",
    top: "33px",
    textAlign: "center",
  },

  header1: {
    marginTop: "15px",
    // alignItems:'center',
    marginLeft: "20px",
  },
  btnH1: {
    height: "37px",
    width: "138px",
    backgroundColor: "#00ddff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: "15px",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  imgH1: {
    width: "16px",
    height: "11px",
    resizeMode: "contain",
  },

  textH1: {
    fontSize: "16px",
    fontFamily: "Poppins",
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "400",
  },

  header2: {
    flexDirection: "row",
    marginTop: "18px",
    justifyContent: "space-around",
  },
  textH2: {
    fontSize: "16px",
    fontFamily: "Poppins",
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "400",
  },

  content: {
    flex: 8,
  },

  content1: {
    height: "80px",
    borderBottomWidth: "1px",
    borderBottomColor: "rgba(0, 0, 0, 0.25)",
  
  },
  textC1: {
    fontSize: "16px",
    fontFamily: "Poppins",
    fontWeight: "700",
    marginLeft:'15px',
    marginTop:'10px',
  },

  text1C1: {
    fontSize: "15px",
    fontFamily: "Poppins",
    fontWeight: "700",
    color:'rgba(251, 169, 151, 1)',
    marginLeft:'15px',
  },

  text2C1: {
    fontSize: "15px",
    fontFamily: "Poppins",
    fontWeight: "700",
    color:'rgba(62, 150, 231, 1)',
    marginLeft:"50px",
  },

  text3C1: {
    fontSize: "15px",
    fontFamily: "Poppins",
    fontWeight: "700",
    marginLeft:"20px",
    // color:'rgba(62, 150, 231, 1)',
  },

  text4C1: {
    fontSize: "15px",
    fontFamily: "Poppins",
    fontWeight: "700",
    marginLeft:"80px",
    // color:'rgba(62, 150, 231, 1)',
  },


});
export default MannHinhCongNo;
