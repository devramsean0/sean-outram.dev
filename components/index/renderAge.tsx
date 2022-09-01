export default function RenderAge() {
    const d = new Date();
    const n = d.getFullYear();
    const aob = 2008;
    const age = n - aob;
    return (
        <span>{age}</span>
    )
}