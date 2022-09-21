function Header(props) {

  const headerStyles = {
    backgroundColor : props.bgColor,
    color : props.c
  }  

  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{props.text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text : 'FeedBack UI',
    number : 12,
    bgColor : 'rgba(0,0,0,0.4)',
    c : '#ff6a95'
}

export default Header