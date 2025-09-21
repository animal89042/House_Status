import Single_Entry from "./Single_Entry.jsx";

export default function Entry_List ({ entries }){
    return (
        <div className="entry-list">
            {entries.map((entry, i) => (
                <Single_Entry key={i} entry={entry}/>
            ))}
        </div>
    )
}