import mainSectStyles from "../style/lanyard/main.module.css";
import Image from "next/image";
function Content(props: {data: any}) {
    var status;
    if (props.data.user.status == "dnd") status = "red"
    if (props.data.user.status == "online") status = "green"
    if (props.data.user.status == "idle") status = "ffff00b8"
    if (props.data.user.status == "offline") status = "gray"
    return (
        <div>
            <p>Discord Info</p>
            <div style={{marginTop: "5px", paddingTop: "5px"}}>
            <div className={mainSectStyles.parent}>
                <div className={mainSectStyles.div1}>
                    <Image src={`https://cdn.discordapp.com/avatars/${props.data.user.id}/${props.data.user.avatar}.webp?size=32`} alt="Discord Avatar" width={"50px"} height={"50px"}></Image>
                </div>
                <div className={mainSectStyles.div2}>
                    <text>{`${props.data.user.username} #${props.data.user.discriminator}`}</text>
                </div>
                <div className={mainSectStyles.div3}>
                    <div className={mainSectStyles.dot} style={{backgroundColor: status}}></div> 
                </div>
                <div className={mainSectStyles.div4}>
                    <text>
                        Active on Web?
                        <br />
                        {`${props.data.active.web}`}
                    </text>
                </div>
                <div className={mainSectStyles.div5}>
                    <text>
                        Active on Mobile?
                        <br />
                        {`${props.data.active.mobile}`}
                    </text>
                </div>
                <div className={mainSectStyles.div6}>
                    <text>
                        Active on Desktop?
                        <br />
                        {`${props.data.active.desktop}`}
                    </text>
                </div>
            </div>
        </div>
        </div>
    )
}
export default function Lanyard(props: {data: any}) {
    if (!props.data.success) return <span style={{color: "red"}}>Failed to fetch from Lanyard API</span>
    return <Content data={props.data} />
}