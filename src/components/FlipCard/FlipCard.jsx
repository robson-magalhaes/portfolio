import * as C from './styled';
import * as P from '../../pages/styled';

export const FlipCard = (imagens) => {
    return (
        <>
            <C.FlipContainer>
                <C.FlipCard>
                    <C.FrontFace imageUrl={imagens.imgF} />
                    <C.BackFace>
                        {imagens.imgB.map(x => (
                            <C.BoxCard>
                                <P.InfoSubTitulo>{x.nome}</P.InfoSubTitulo>
                                {x.descricao}
                                <P.ExpSkill>
                                    {x.skills.map(x => (
                                        <P.ItemT>
                                            {x}
                                        </P.ItemT>
                                    ))}
                                </P.ExpSkill>
                            </C.BoxCard>
                        ))}
                    </C.BackFace>
                </C.FlipCard>
            </C.FlipContainer>
        </>
    )
}
export default FlipCard;