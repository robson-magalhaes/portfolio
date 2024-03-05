import * as C from './styled';

export const FlipSkill = (imagens) => {
    return (
        <>
            <C.FlipContainer>
                <C.FlipCard>
                    <C.FrontFace 
                    // imageUrl={imagens.imgF} 
                    className='bg-red-500'
                    />
                    <C.BackFace className='bg-blue-500'/>
                </C.FlipCard>
            </C.FlipContainer>
        </>
    )
}
export default FlipSkill;