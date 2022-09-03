import styled from "styled-components";

const FooterBox = styled.div`
  margin: 100px auto 0;
  padding: 50px 0 40px;
  background: #1f1f1f;
  bottom: 0;
`;

const FooterWrap = styled.div`
  color: #d4d4d4;
  margin: 0 0 0 50px;
  text-align: left;
  font-size: 12px;
`;
const FooterMeru = styled.ul``;

const FontSizeSmall = styled.p`
  font-size: 11px;
  line-height: 1.8;
  margin: 0;
`;

const FontSizeBig = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <FooterBox>
      <FooterWrap className="footer-wrap">
        <FooterMeru className="footer-meru">
          <li className="footer-service_center">
            <h3>고객센터</h3>
            <FontSizeBig>1234-4915</FontSizeBig>
            <FontSizeSmall>
              <b>평일 </b>
              <b>AM10:00 ~ PM18:00</b>
            </FontSizeSmall>
            <FontSizeSmall>
              <b>점심 </b>
              <b>PM12:00 ~ PM13:00</b>
            </FontSizeSmall>
            <FontSizeSmall>
              <b>휴무</b>
              <b> 토요일,일요일,공휴일</b>
            </FontSizeSmall>
          </li>
          <li className="footer-address"></li>
          <li className="footer-service_guide"></li>
        </FooterMeru>
      </FooterWrap>
    </FooterBox>
  );
};

export default Footer;
