import React, { Component } from 'react';
import { Page, Text, Document, StyleSheet, Font } from '@react-pdf/renderer';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Be Vietnam', 'sans-serif']
  }
});

export default class PDFContract extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Document>
        <Page style={styles.body}>
          <Text style={styles.header}>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</Text>
          <Text style={styles.subHeader}>Độc lập - Tự do - Hạnh phúc</Text>
          <Text style={styles.subHeader}>---------</Text>
          <Text style={styles.title}>HỢP ĐỒNG LÀM GIA SƯ</Text>
          <Text style={styles.text}>
            Hôm nay, ngày 12/12/2019 chúng tôi gồm có:
          </Text>
          <Text style={styles.text}>Bên A: (Bên thuê dịch vụ)</Text>
          <Text style={styles.text}>
            Họ và tên: ........................................
          </Text>
          <Text style={styles.text}>Bên B: (Bên thực hiện dịch vụ)</Text>

          <Text style={styles.text}>
            Họ và tên: ........................................{' '}
          </Text>
          <Text style={styles.text}>
            Sau khi trao đổi và bàn bạc hai bên đi đến thống nhất lập hợp đồng
            dịch vụ với nội dung và điều khoản sau:
          </Text>
          <Text style={styles.text}>Điều 1: Đối tượng hợp đồng</Text>
          <Text style={styles.text}>
            Bên A đồng ý để bên B (Là:...........................) làm gia sư
            dạy cho .... với yêu cầu sau:
          </Text>
          <Text style={styles.text}>
            - Địa điểm học: tại tư gia của bên A tại địa chỉ ....
          </Text>
          <Text style={styles.text}>
            Về giáo trình: Bên B biên soạn và được bên A thông qua
          </Text>
          <Text style={styles.text}>
            Điều 2: Thù lao và phương thức thanh toán
          </Text>
          <Text style={styles.text}>
            - Bên A đồng ý trả cho bên B một giờ giảng cháu là....... đồng
          </Text>
          <Text style={styles.text}>
            - Bắt đầu từ ngày ... và kết thúc vào ngày ....
          </Text>
          <Text style={styles.text}>- Tổng số giờ dạy là .....</Text>
          <Text style={styles.text}>
            - Đồng tiền thanh toán là đồng Việt Nam
          </Text>
          <Text style={styles.text}>Điều 3: Nghĩa vụ của bên A</Text>
          <Text style={styles.text}>
            - Bảo đảm địa điểm, thời gian, dụng cụ giảng dạy và phương tiện giúp
            cho học sinh đạt kết quả
          </Text>
          <Text style={styles.text}>
            - Thanh toán tiền thù lao cho bên B đầy đủ và đúng hạn
          </Text>
          <Text style={styles.text}>Điều 4: Nghĩa vụ của bên B</Text>
          <Text style={styles.text}>
            - Có giáo trình, giáo án theo đúng yêu cầu
          </Text>
          <Text style={styles.text}>
            - Giữ gìn bí mật về những thông tin của gia cảnh trong suốt thời
            gian giảng dạy cũng như sau này (hoặc nói cách khác là không làm
            phương hại đến gia đình của bên A) mà trong thời gian giảng dạy tại
            gia đình.
          </Text>
          <Text style={styles.text}>
            - Không được chuyển giao nghĩa vụ cho người thứ ba nếu chưa được bên
            A chấp nhận.
          </Text>
          <Text style={styles.text}>Điều 5: Những thỏa thuận khác</Text>
          <Text style={styles.text}>
            - Hai bên cam kết thực hiện đầy đủ các điều khoản ghi trong hợp
            đồng, nếu có vấn đề bất lợi gì phát sinh, các bên phải chủ động trao
            đổi, bàn bạc giúp đỡ lẫn nhau trên cơ sở bình đẳng, tôn trọng và
            hiểu biết lẫn nhau.
          </Text>
          <Text style={styles.text}>
            Điều 6: Thời gian có hiệu lực của hợp đồng
          </Text>
          <Text style={styles.text}>
            Hợp đồng có hiệu lực kể từ ngày ký và được lập thành hai bản, mỗi
            bên giữ một bản để theo dõi thực hiện
          </Text>
          <Text style={styles.Signature1}>Đại diện bên A (ký tên)</Text>
          <Text style={styles.Signature2}>Đại diện bên B (ký tên)</Text>

          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      </Document>
    );
  }
}

Font.register({
  family: 'Roboto Regular',
  src: 'http://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf'
});

Font.register({
  family: 'Roboto Bold',
  src:
    'http://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf'
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: 'Roboto Regular',
    color: '#000000',
    fontSize: 11
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
    fontFamily: 'Roboto Bold',
    marginBottom: 8
  },

  text: {
    marginLeft: 16,
    marginTop: 14,
    fontSize: 9,
    textAlign: 'justify',
    fontFamily: 'Roboto Regular'
  },
  Signature1: {
    textAlign: 'left',
    marginLeft: 18,
    marginTop: 12
  },
  Signature2: {
    textAlign: 'right',
    marginRight: 18,
    marginTop: -16
  },
  header: {
    fontSize: 11,
    textAlign: 'center'
  },
  subHeader: {
    fontSize: 8,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Roboto Regular'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 9,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey'
  }
});
