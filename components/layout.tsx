export default function Layout(params: { children: React.ReactNode }) {
    return (
      <>
        <main className="grid">
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3"></div>
          <div className="box4"></div>
          <div className="box5">{params.children}</div>
          <div className="box6"></div>
          <div className="box7"></div>
          <div className="box8"></div>
          <div className="box9"></div>
        </main>
      </>
    )
  }