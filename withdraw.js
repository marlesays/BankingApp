
function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [balance, setBalance]         = React.useState('');
  const [withdraw, setWithdraw]       = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(balance,withdraw);
    if (!validate(balance,     'balance'))     return;
    if (!validate(withdraw,    'withdraw'))    return;
    ctx.users.push({balance,withdraw,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setBalance('');
    setWithdraw('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Withdraw"
      status={status}
      body={show ? (  
              <>
              Balance<br/>
              <input type="input" className="form-control" id="balance" placeholder="Enter balance" value={balance} onChange={e => setBalance(e.currentTarget.value)} /><br/>
              Withdraw<br/>
              <input type="input" className="form-control" id="Withdraw" placeholder="Enter withdrawal amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Submit Withdraw</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>New Withdraw</button>
              </>
            )}
    />
  )
}