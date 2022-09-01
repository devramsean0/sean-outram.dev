import Layout from "../components/shared/layout"
import RenderAge from "../components/index/renderAge";
export default function HomePage() {
    return (
        <Layout title="Home">
            <div>
                <h2 className='header'> Who am i?</h2>
                <p className='text'>
                    I am a software developer focusing on NodeJS, typescript and C#.
                    <br />
                    I am currently <RenderAge/> years old and i live in England.
                    <br />
                    I also do commisions over at <a href="https://discord.gg/XtX9wx3qre">This discord server</a>.
                </p>

            </div>
        </Layout>
    );
  }