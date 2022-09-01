import Head from 'next/head'
import gridStyles from './../css/grid.module.scss';
export default function Layout(params) {
    return (
        <>
            <Head>
                <title>{params.title}</title>
            </Head>
            <div className={gridStyles.parent}>
                <div className={gridStyles[`div${1}`]}>
                    <h1 className='header'>
                        Sean
                        <br />
                        Outram
                    </h1>
                </div>
                <div className={gridStyles[`div${2}`]}>

                </div>
                <div className={gridStyles[`div${3}`]}>
                </div>
                <div className={gridStyles[`div${4}`]}>
                </div>
                <div className={gridStyles[`div${5}`]}>
                    <p className='text'>&copy; 2022 Sean Outram</p>
                </div>
                <div className={gridStyles[`div${6}`]}>
                </div>
                <div className={`${gridStyles[`div${7}`]} mainSection`}>
                    <section className='text'>
                        {params.children}
                    </section>
                </div>
                <div className={gridStyles[`div${8}`]}>
                    <h1 className='header'>{params.title}</h1>
                </div>
                <div className={gridStyles[`div${9}`]}>
                </div>
                <div className={gridStyles[`div${10}`]}>
                </div>
                <div className={gridStyles[`div${11}`]}>
                </div>
            </div>
        </>
    );
}