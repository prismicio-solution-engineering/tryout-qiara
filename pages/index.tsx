import Head from "next/head";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices/marketing";
import { components as componentsQiara } from "@/slices/qiara";
import { getLanguages } from "@/utils/getLanguages";
import MarketingLayout from "@/components/MarketingLayout";

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({
  page,
  header,
  footer,
  languages,
}: HomePageProps) {
  console.log(page.data.slices)
  return (
    <>
      <Head>
        <title>{page.data.meta_title || "Slicify | Home"}</title>
        <meta
          name="description"
          content={page.data.meta_title || "Slicify, slices for everyone."}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MarketingLayout
        header={header.data}
        footer={footer.data}
        languages={languages}
      >
        <div className="flex flex-col items-center pt-12 md:pt-12 lg:pt-12 xl:pt-24 pb-24 md:pb-32 lg:pb-40 gap-20 md:gap-32 lg:gap-40">
          <SliceZone slices={page.data.slices} components={{...components, ...componentsQiara}} />
        </div>
      </MarketingLayout>
    </>
  );
}

export async function getStaticProps({
  locales,
  locale,
  previewData,
}: GetStaticPropsContext) {
  const client = createClient({ previewData });
  //    ^ Automatically contains references to document types

  const page = await client.getSingle<Content.HomePageDocument>("home_page", {
    lang: locale,
  });
  //    ^ Typed as HomePageDocument

  const header = await client.getSingle<Content.HeaderDocument>("header", {
    lang: locale,
  });
  //    ^ Typed as HeaderDocument

  const footer = await client.getSingle<Content.FooterDocument>("footer", {
    lang: locale,
  });
  //    ^ Typed as FooterDocument

  const languages = await getLanguages(page, client, locales);

  return {
    props: {
      page,
      header,
      footer,
      languages,
    },
    revalidate: 10,
  };
}
