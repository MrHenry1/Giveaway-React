const theme = '#d76d6d'

const styles = {
  container: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    width: '100vw',
    height: '100vh',
    position:"relative"
  },
  header: {
    display:'flex',
    width:'100%',
    height:'140px',
    fontSize: '20pt',
    fontFamily:'Poppins, sans-serif',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:theme,
    color: 'white'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'space-between',
    margin:'30px 0',
    backgroundColor:"#fff8f7",
    width:'320px',
    minHeight:'190px',
    padding: '13px',
    borderRadius:"13px"
  },
  warn: {
    textIndent: '5px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight:'500',
    marginTop: '4px',
    fontSize:'10pt',
    color: 'gray'
  },
  input: {
    border:0,
    width:'100%',
    background:'none',
    borderBottom: '2px solid gray',
    textIndent: '4px',
    fontFamily:'Poppins, sans-serif'
  },
  legend: {
    fontFamily:'Poppins, sans-serif',
    fontWeight:700,
    fontSize:'10pt',
    color: '#060817'
  },
  field: {
    border:0
  },
  button: {
    fontFamily:'Poppins, sans-serif',
    fontSize:'15pt',
    fontWeight:500,
    marginTop: '13px',
    border:0,
    backgroundColor:'#ffbfbf',
    color:'white',
    borderRadius:'6px',
    padding:'5px',
    justifySelf:'flex-end'
  },
  button2: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '10pt',
    fontWeight: 500,
    border: 0,
    marginTop:'2px',
    color: '#ff7777',
    borderRadius: '6px',
    padding: '5px',
    backgroundColor:'transparent',
    alignSelf: 'flex-end'
  },
  participantPart: {
    width: '320px',
    display:'flex',
    flexDirection:'column',
  },
  noPart: {
    display: 'flex',
    alignItems: "center",
    justifyContent:"center",
    width: '100%',
    height: '125px',
    overflow: 'scroll',
    border: '7px solid #dedede',
    borderRadius: '9px',
    fontFamily:'Poppins, sans-serif',
    fontSize:'15pt',
    fontWeight:'bold',
    color:'gray'
  },
  participant: {
    display: "flex",
    flexDirection:"row",
    flexWrap: "wrap",
    width:'100%',
    height:'125px',
    overflow: 'scroll',
    border:'7px solid #dedede',
    borderRadius: '7px',
    padding: "6px",
    
  },
  icon: {
    color: '#512424',
    fontSize:'10pt',
    marginLeft:'5px'
  },
  giveBtn: {
    width:'240px',
    padding: '5px',
    color: 'white',
    backgroundColor:'#060817',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '15pt',
    fontWeight: 'bold',
    border:0,
    borderRadius:"9px",
    marginTop:'16px',
  },
}

export default styles