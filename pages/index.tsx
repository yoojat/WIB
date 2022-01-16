import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import Seo from '../components/Seo';
import { media } from '../styles/theme';

const BannerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
  overflow: hidden;
`;

const BannerImageContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 900px;
  height: 600px;
  img {
    ${media.tablet} {
      transform: translateX(-10%);
    }
  }
`;
const ContentContainer = styled.div`
  position: absolute;
  margin-top: 150px;
`;

const TitleContainer = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 46px;
  font-weight: 700;
`;
const SubTitle = styled.h2`
  font-size: 17px;
  font-weight: 400;
  word-wrap: break-word;
  margin-top: 17px;
`;

const Home: NextPage = () => {
  return (
    <>
      <Seo title='홈' />
      <BannerContainer>
        <BannerImageContainer>
          <Image
            src={'/banner.jpg'}
            alt={'Website In Busan'}
            layout='fill'
            priority={true}
            // objectFit='contain'
          />
        </BannerImageContainer>
      </BannerContainer>
      <ContentContainer>
        <TitleContainer>
          <Title>
            홈페이지를
            <br />
            만들어드립니다.
          </Title>
          <SubTitle>원하시는 형태의 홈페이지를 말씀만 해주세요!</SubTitle>
        </TitleContainer>
      </ContentContainer>
    </>
  );
};

export default Home;
