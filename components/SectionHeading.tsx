export function SectionHeading({eyebrow,title,copy,align="left"}:{eyebrow?:string;title:string;copy?:string;align?:"left"|"center"}){return <div className={`${align==="center"?"mx-auto text-center":""} max-w-3xl`}>
  {eyebrow&&<p className="eyebrow mb-4">{eyebrow}</p>}<h2 className="h2">{title}</h2>{copy&&<p className="muted mt-5 text-lg">{copy}</p>}
</div>}
