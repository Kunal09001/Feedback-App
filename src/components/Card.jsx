export default function Card({children,reverse}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>
        {children}
        </div>
  )
}

Card.defaultProps = {
  reverse : false
}
