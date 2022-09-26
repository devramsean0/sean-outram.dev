import Layout from "../components/layout"
export async function getServerSideProps() {
  const data = await (await fetch(`${process.env.HOST}/api/lanyard/getData`)).json();
  return {
    props: {
      lanyardData: data
    }
  }
}
export default function Home(props: {lanyardData: any}) {
  return (
    <div>
      <Layout lanyardData={props.lanyardData}>
        <div style={{ lineHeight: '100%', marginTop: "37%", marginBottom: "25%"}}>
          <h1>Hi, I&apos;m Sean</h1>
          <text>
            Developer and Student
          </text>
        </div>
      </Layout>
    </div>
  )
}