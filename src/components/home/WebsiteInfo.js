import React, { Component } from 'react';
import './home.css';
import './Benifit.css';

class WebsiteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div
        className="benifit-con noMargin noPadding"
        style={{ marginTop: '0' }}
      >
        <div className="benifit-title">
          <h1 className="benifit-title">Lợi ích khi đến với chúng tôi</h1>
        </div>
        <div className="benifit-value">
          <div className="benifit-value-left">
            <div className="benifit-img">
              <div className="benifit-img">
                <i className="fas fa-thumbs-up" />
              </div>
            </div>
            <div className="benifit-value-title">
              <div className="benifit-value-title1">
                <p className="benifit-value-title">
                  <b>Chất lượng, Khách quan</b>
                </p>
              </div>
              <div className="benifit1">
                <p className="benifit1">
                  Chất lượng gia sư được đánh gia khách quan từ chính phụ huynh
                  và học sinh.
                </p>
              </div>
            </div>
          </div>
          <div className="benifit-value-right">
            <div className="benifit-img">
              <div className="benifit-img">
                <i className="fas fa-handshake" />
              </div>
            </div>
            <div className="benifit-value-title">
              <div className="benifit-value-title1">
                <p className="benifit-value-title">
                  <b>Kết nối trực tiếp</b>
                </p>
              </div>
              <div className="benifit1">
                <p className="benifit1">
                  Kết nối trực tiếp hàng nghìn học viên với gia sư khắp cả nước.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="benifit-value">
          <div className="benifit-value-left">
            <div className="benifit-img">
              <div className="benifit-img">
                <i className="far fa-clock" />
              </div>
            </div>
            <div className="benifit-value-title">
              <div className="benifit-value-title1">
                <p className="benifit-value-title">
                  <b>Nhanh chóng</b>
                </p>
              </div>
              <div className="benifit1">
                <p className="benifit1">
                  Chỉ mất 3 phút để thực hiện đăng yêu cầu tìm gia sư.
                </p>
              </div>
            </div>
          </div>
          <div className="benifit-value-right">
            <div className="benifit-img">
              <div className="benifit-img">
                <i className="fas fa-dollar-sign" />
              </div>
            </div>
            <div className="benifit-value-title">
              <div className="benifit-value-title1">
                <p className="benifit-value-title">
                  <b>Tùy chọn học phí</b>
                </p>
              </div>
              <div className="benifit1">
                <p className="benifit1">
                  Mức học phí đa dạng phù hợp với nhiều đối tượng học viên, gia
                  sư và giáo viên.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="benifit-value">
          <div className="benifit-value-left">
            <div className="benifit-img">
              <div className="benifit-img">
                <i className="fas fa-check-double" />
              </div>
            </div>
            <div className="benifit-value-title">
              <div className="benifit-value-title1">
                <p className="benifit-value-title">
                  <b>Lựa chọn đa dạng</b>
                </p>
              </div>
              <div className="benifit1">
                <p className="benifit1">
                  Gia sư có thể là sinh viên, giáo viên, người đi làm,...
                </p>
              </div>
            </div>
          </div>
          <div className="benifit-value-right">
            <div className="benifit-img">
              <div className="benifit-img">
                <i className="fas fa-shipping-fast" />
              </div>
            </div>
            <div className="benifit-value-title">
              <div className="benifit-value-title1">
                <p className="benifit-value-title">
                  <b>Linh hoạt</b>
                </p>
              </div>
              <div className="benifit1">
                <p className="benifit1">
                  Cung cấp các dịch vụ linh hoạt, tùy chỉnh dễ dàng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WebsiteInfo;
