import logoTecValles from '../../assets/logo_tecvalles.png';


function AsideLogo() {
    return (
        <section className='flex  items-center gap-5 w-[250px]'>
            <img src={logoTecValles} alt="Tecnologico Nacional De Mexico | Campus Ciudad Valles" className='h-[50px]' />
            <div className='flex flex-col items-center'>
                <h1 className='text-center font-Roboto'>Instituto Tecnologico De Ciudad Valles</h1>
            </div>
        </section>
    );
}

export default AsideLogo;
