import { Head } from "$fresh/runtime.ts";
import Stamp from "../islands/stamp.tsx";
export default function stamps() {
    return (
        <>
            <Head>
                <title>スタンプラリー｜スタンプ</title>
            </Head>
            <div class="bg-gray-100 h-screen">
                <Stamp></Stamp>
            </div>
        </>
    );
}
