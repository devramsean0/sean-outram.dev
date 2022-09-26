import Img from "./invertedImage"
import Lanyard from "./lanyard"
export default function Layout(params: { children: React.ReactNode, lanyardData: any }) {
    return (
      <>
        <main className="grid">
          <div className="box1"></div>
          <div className="box2">
            <Lanyard data={params.lanyardData}/>
          </div>
          <div className="box3"></div>
          <div className="box4"></div>
          <div className="box5">{params.children}</div>
          <div className="box6"></div>
          <div className="box7">
            <Img src="/github.ico" alt="Github logo" width={50} height={50}/>
          </div>
          <div className="box8">
            <p>test</p>
          </div>
          <div className="box9">
            <Img src="/discord.webp" alt="Discord logo" width={50} height={50}/>
          </div>
        </main>
      </>
    )
  }