import React from 'react';
import { connect } from 'react-redux';
// reactstrap components
import { NavDropdown, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import userActions from '../../actions/user.action';
import history from '../../helpers/history';
import './navbar.css';

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetail: null,
      openTopupDialog: false,
      bankValue: 'NCB',
      amount: 0
    };
  }

  componentDidMount() {
    const { data } = this.props;
    const userInfo = JSON.parse(data);
    const { getProfile } = this.props;
    getProfile(userInfo.userId, res => {
      this.setState({
        userDetail: res.data
      });
    });
  }

  logOut = () => {
    localStorage.clear();
    history.push('/');
    window.location.reload();
  };

  handleTopupClick = () => {
    this.setState({ openTopupDialog: true });
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleTopup = () => {
    const { bankValue, amount } = this.state;
    const { createPayment } = this.props;
    this.setState({ openTopupDialog: false });
    if (bankValue && amount > 0) createPayment(bankValue, amount);
  };

  handleClose() {
    this.setState({ openTopupDialog: false });
  }

  render() {
    const { userDetail, openTopupDialog } = this.state;
    return (
      <>
        <NavDropdown
          className="float-right"
          title={
            <div
              className="pull-left dropdown-title"
              style={{ display: 'inline' }}
            >
              <img
                className="thumbnail-image rounded-circle"
                src={
                  userDetail && userDetail.avatar
                    ? userDetail.avatar
                    : 'https://res.cloudinary.com/dsqfchskj/image/upload/v1576583327/Tutor/default-avatar_iyzn7y.png'
                }
                alt="avatar"
              />
              <div style={{ display: 'inline' }} className="ml-3">
                {userDetail ? userDetail.name : null}
              </div>
            </div>
          }
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item className=" noPadding ">
            <ListItem>
              <ListItemIcon>
                <AccountBalanceWalletIcon style={{ color: '#F7BF54' }} />
              </ListItemIcon>
              <ListItemText
                primary={`${userDetail ? userDetail.balance : 0}K VND`}
                className="noMargin noPadding"
              />
            </ListItem>
          </NavDropdown.Item>
          <Dropdown.Divider />
          <NavDropdown.Item>
            <NavLink to="/profile" tag={Link}>
              Thông tin cá nhân
            </NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <NavLink to="/student-contract" tag={Link}>
              Lịch sử thuê
            </NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <NavLink to="/change-password" tag={Link}>
              Đổi mật khẩu
            </NavLink>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item
            className=" noPadding "
            onSelect={() => this.handleTopupClick()}
          >
            <ListItem>
              <ListItemIcon>
                <AttachMoneyIcon style={{ color: '#F7BF54' }} />
              </ListItemIcon>
              <ListItemText primary="Nạp tiền" className="noMargin noPadding" />
            </ListItem>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <NavLink tag={Link} onClick={this.logOut}>
              Đăng xuất
            </NavLink>
          </NavDropdown.Item>
        </NavDropdown>
        <Dialog
          open={openTopupDialog}
          onClose={() => this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Nạp tiền vào tài khoản
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Website hỗ trợ nạp tiền vào tài khoản bằng thẻ nội địa, thẻ quốc
              tế, ví điện tử, internet banking. Vui lòng nhập số tiền muốn nạp
              vào ô bên dưới
            </DialogContentText>
            <FormControl fullWidth>
              <InputLabel htmlFor="age-native-simple">
                Chọn ngân hàng
              </InputLabel>
              <Select native name="bankValue" onChange={e => this.onChange(e)}>
                <option value="NCB">Ngân hàng NCB</option>
                <option value="SCB">Ngân hàng SCB</option>
                <option value="SACOMBANK">Ngân hàng SACOMBANK</option>
                <option value="EXIMBANK">Ngân hàng EXIMBANK</option>
                <option value="MSBANK">Ngân hàng MSBANK</option>
                <option value="NAMABANK">Ngân hàng NAMABANK</option>
                <option value="VISA">Ngân hàng VISA</option>
                <option value="VNMART">Ngân hàng VNMART</option>
                <option value="VIETINBANK">Ngân hàng VIETINBANK</option>
                <option value="VIETCOMBANK">Ngân hàng VIETCOMBANK</option>
                <option value="HDBANK">Ngân hàng HDBANK</option>
                <option value="DONGABANK">Ngân hàng Dong A</option>
                <option value="TPBANK">Ngân hàng Tp Bank</option>
              </Select>
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              type="number"
              id="name"
              name="amount"
              label="Số tiền muốn nạp"
              onChange={e => this.onChange(e)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleClose()} color="primary">
              Bỏ qua
            </Button>
            <Button onClick={() => this.handleTopup()} color="primary">
              Đi đến trang nạp tiền
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProfile: (id, cb) => dispatch(userActions.requestProfile(id, cb)),
  createPayment: (bankValue, amount) =>
    dispatch(userActions.createPayment(bankValue, amount))
});

export default connect(
  null,
  mapDispatchToProps
)(UserHeader);
