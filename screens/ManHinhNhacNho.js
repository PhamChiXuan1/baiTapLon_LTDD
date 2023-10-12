import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

function ManHinhNhacNho() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
        <Image
          style={styles.img}
          source={require("../assets/img/mhnn/Frame 8.png")}
        ></Image>
         </TouchableOpacity>
        <Text style={styles.textNN}>Nhắc nhở</Text>
       
      </View>

      <View style={styles.content}>
        <Image
          style={styles.imgContent}
          source={require("../assets/img/mhnn/envelope-open.png")}
        ></Image>
        <Text style={styles.textContent}>Chưa có thông báo</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.trangChu}>
          <TouchableOpacity>
            <Image
              source={require("../assets/img/mhnn/icon trang chủ.png")}
              style={styles.imgfooter}
            ></Image>
            <Text style={styles.textFooter}>Trang chủ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.thongBao}>
          <TouchableOpacity>
            <Image
              source={require("../assets/img/mhnn/icon chuông thông báo.png")}
              style={styles.imgfooter}
            ></Image>
            <Text style={styles.textFooter}>Nhắc nhở</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.maQR}>
          <TouchableOpacity>
            <View style={styles.bgMaQR}>
              <Image
                source={require("../assets/img/mhnn/icon qr.png")}
                style={styles.imgQR}
              ></Image>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.gopY}>
          <TouchableOpacity>
            <Image
              source={require("../assets/img/mhnn/icon góp ý.png")}
              style={styles.imgfooter}
            ></Image>
            <Text style={styles.textFooter}>Góp ý</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.taiKhoan}>
          <TouchableOpacity>
            <Image
              source={require("../assets/img/mhnn/user-alt.png")}
              style={styles.imgfooter}
            ></Image>
            <Text style={styles.textFooter}>Tài khoản</Text>
          </TouchableOpacity>
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
    flex: 1,
    height: "100px",
    width: "360px",
    backgroundColor: "rgba(62, 150, 231, 1)",
    flexDirection: "row",
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
  content: {
    flex: 8,
  },

  imgContent: {
    height: "100px",
    width: "100px",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top: "180px",
  },

  textContent: {
    fontFamily: "Poppins",
    fontSize: "16px",
    textAlign: "center",
    top: "200px",
  },
  footer: {
    flex: 2,
    height: "109px",
    width: "360px",
    flexDirection: "row",
  },

  imgfooter: {
    height: "19.44px",
    width: "25px",
    left: "20px",
    resizeMode: "contain",
    top:'50px'
  },

  textFooter: {
    fontFamily: "Poppins",
    fontSize: "12px",
    textAlign: "center",
    top:'60px'
  },

  trangChu: {
    flex: 1,
  },

  thongBao: {
    flex: 1,
  },

  maQR: {
    flex: 1,
  },

  imgQR: {
    height: "19.44px",
    width: "25px",
    left: "20px",
    resizeMode: "contain",
    position:'absolute',
    left:'14px'
  },
  bgMaQR: {
    height: "39px",
    width: "52px",
    backgroundColor: "rgba(62, 150, 231, 1)",
    borderRadius: "15px",
    justifyContent: "center",
    alignSelf: "center",
    top: '48px'
  },

  gopY: {
    flex: 1,
  },

  taiKhoan: {
    flex: 1,
  },
});
export default ManHinhNhacNho;
