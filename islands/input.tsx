import { useState } from 'preact/hooks';
import conversionRules from "../data/stamp.json" assert { type: "json" };
const RedirectForm = () => {
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const hiraganaKeys = Object.values(conversionRules['stamp-id']);

        if (!hiraganaKeys.includes(name)) {
            setErrorMessage('秘密の鍵が正しくありません');
        } else {
            window.location.href = name;
        }
    };

    return (
        <>
            <div class="space-y-2 py-14 font-semibold mb-8 text-center md:py-24 bg-red-500 space-y-3">
                <h1 class="text-white text-5xl md:text-7xl">Stamp rally</h1>
                <h1 class="text-white text-lg font-bold md:text-xl">スタンプラリーでポイントを貯めよう！</h1>
            </div>
            <div class="flex justify-center items-center h-40">
                <form onSubmit={handleSubmit} class="w-64">
                    <input
                        type="text"
                        value={name}
                        onInput={(event) => {
                            setName(event.target.value);
                            setErrorMessage('');
                        }}
                        placeholder="秘密の鍵を入力"
                        class="border p-2 w-full"
                    />
                    {errorMessage && (
                        <p class="text-red-500">{errorMessage}</p>
                    )}
                    <button type="submit" class="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                        認証
                    </button>
                </form>
            </div>
        </>
    );
};

export default RedirectForm;
