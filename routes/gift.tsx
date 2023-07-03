import { Head } from "$fresh/runtime.ts";
import Input from "../islands/input.tsx";
export default function stamps() {
    return (
        <>
            <Head>
                <title>スタンプラリー｜スタンプ</title>
            </Head>
            <div class="bg-gray-100 h-screen">
                <Input></Input>
            </div>
        </>
    );
}
