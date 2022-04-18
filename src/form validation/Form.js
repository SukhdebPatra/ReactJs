

let Form=()=>{
    
    return (
        <>
    <div className='Form'>
        <form>

        <input type='email' name='email' placeholder='E-mail'/>
        <input type='password' name='password' placeholder='Password'/>
        <input type='text' name='username' placeholder="Username" />
        <input type='submit' value="submit" className="Sumit" />
        </form>

        


        </div>
        </>
    )


}

export {Form}