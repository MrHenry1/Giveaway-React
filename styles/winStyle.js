const styles = {
  modal: {
    position: 'absolute',
    width: '100vw',
    height:'100vh',
    backgroundColor:'rgba(0, 0, 0, 0.36)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  box: {
    opacity:'1',
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    backgroundColor:'#fff8f7',
    width:'calc(100% - 20px)',
    height:'410px',
    padding:'5px'
  },
  closeContainer: {
    width:'100%',
    display:"flex",
    padding:'4px 12px 0 0',
    justifyContent:'flex-end',
    alignItems:'flex-start'
  },
  header: {
    display:'flex',
    justifyContent:'center',
    width:'100%',
    padding:'0 8px',
  },
  title: {
    color: '#d76d6d',
    fontFamily:'Poppins, sans-serif',
    fontWeight:'bold',
    fontSize:'31pt'
  },
  close: {
    color:'#a0041e'
  },
  gift: {
    position:'relative',
    color:'#ff8922',
    transform:' scale(8)',
    marginTop:'70px'
  },
  messageBox: {
    display:'flex',
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    marginTop:'70px'
  },
  winner: {
    fontFamily:'Poppins, sans-serif',
    fontWeight:'bold',
    color:'#dd2e44',
    fontSize:'14pt'
  },
  message: {
    fontFamily:'Poppins, sans-serif',
    fontWeight:'500',
    letterSpacing:'2px',
    fontSize:'20pt',
    color:'#ff7777'
  },
  footer: {
    fontFamily:'Poppins, sans-serif',
    color:'#666666',
    fontSize:'12pt'
  },
}

export default styles