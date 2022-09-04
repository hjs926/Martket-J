import styled from "styled-components";

const FooterBox = styled.div`
  width: 100%;
  margin: 100px auto 0;
  padding: 50px 0 50px;
  background: #1f1f1f;
  position: relative;
  transform: translateY(100%);
`;

const FooterWrap = styled.div`
  color: #d4d4d4;
  margin: 0 0 0 50px;
  text-align: left;
  font-size: 12px;
`;
const FooterMeru = styled.ul`
  display: flex;
`;

const FontSizeSmall = styled.p`
  font-size: 11px;
  line-height: 1.8;
  margin: 0;
`;

const FontSizeBig = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
const FontSizeBold = styled.p`
  margin-top: 0px;
  font-weight: bold;
  font-size: 14px;
`;

const FooterAddressContainer = styled.li``;

const FooterServiceCente = styled.li`
  min-width: 210px;
  max-width: 210px;
`;

const Footer = () => {
  return (
    <FooterBox>
      <FooterWrap className="footer-wrap">
        <FooterMeru className="footer-meru">
          <FooterServiceCente className="footer-service_center">
            <FontSizeSmall>
              <b>고객센터</b>
            </FontSizeSmall>
            <FontSizeBig>1234-5678</FontSizeBig>
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
          </FooterServiceCente>
          <FooterAddressContainer className="footer-address">
            <FontSizeBold>(주)Js Team</FontSizeBold>
            <FontSizeSmall>
              <span>대표 : 홍길동 </span>
              <span>이메일 12345@gmail.com </span>
              <span>개인정보관리책임자 : 홍길동</span>
            </FontSizeSmall>
            <FontSizeSmall>
              <span>전화 1234-5678 </span>
              <span>(제휴/광고/거래처관련 문의는 메일만 받습니다)</span>
            </FontSizeSmall>
            <FontSizeSmall>
              <span>사업자 등록번호 : 123-45-678910 </span>
              <span>통신판매업 신고 : 1234-서울서울-5678</span>
            </FontSizeSmall>
            <FontSizeSmall>
              <span>주소 : [123456] 서울서울 구구 동동 0층 </span>
            </FontSizeSmall>
            <FontSizeSmall>
              <span>교환/반품 주소 : 서울서울 구구 동동 , 0층</span>
            </FontSizeSmall>
            <FontSizeSmall>
              <span>
                <b>
                  <br />※ 사이트의 모든 사진 포함 모든 이미지 저작권은 JS Team에
                  없으며 상업적 도용시 민,형사상 법적 책임을 요구할 수 없습니다.
                </b>
              </span>
            </FontSizeSmall>
          </FooterAddressContainer>

          <li className="footer-service_guide"></li>
        </FooterMeru>
      </FooterWrap>
    </FooterBox>
  );
};

export default Footer;
