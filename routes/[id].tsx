import { Head } from "$fresh/runtime.ts";
import StampPage from "../islands/gift.tsx";
import { PageProps } from "$fresh/server.ts";

export default function login(props: PageProps) {
    console.log(props.params.name)
  return (
    <>
      <Head>
        <title>付与中...</title>
      </Head>
      <StampPage id={props.params.id} />
    </>
  );
}
