import { useState } from "react";
import * as C from "./styled";
import meuCurriculo from '/Curriculo Desenvolvedor - Robson Oliveira.pdf';

export const DownloadCV = () => {
    const [loading, setLoading] = useState(false);
    function handleClickDownload() {
        setLoading(true);
        var link = document.createElement('a');
        link.href = meuCurriculo;
        link.download = "Curriculo Desenvolvedor - Robson Oliveira.pdf";
        document.body.appendChild(link);
        link.click();

        setTimeout(() => {
            document.body.removeChild(link);
            setLoading(false);
        }, 1000);
    }
    return (
        <>
            <C.BotaoCurriculo onClick={handleClickDownload}>
                Download CV
            </C.BotaoCurriculo>
            {loading && (
                <C.Carregando>
                    <div className='p-8 rounded-full border-8 border-l-blue-700 animate-spin'></div>
                </C.Carregando>
            )}
        </>
    )
}