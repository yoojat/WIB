import Head from 'next/head';

interface IProps {
  title: string;
}

export default function Seo({ title }: IProps) {
  return (
    <Head>
      <title>{title} | 웹사이트 인 부산</title>
    </Head>
  );
}
