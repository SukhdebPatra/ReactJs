import React, { Component } from 'react'

 class ContactList extends Component {
  render() {
    return (
      <div>
          <h1>Contact List</h1>
      <pre>{JSON.stringify(this.props)}</pre>
      <div className="container">
          <div className="row">
              <div className="col">
                  <table className='table table-hover'>
                      <thead>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                      </thead>
                      <tbody>
                          {
                              this.props.contacts.map((contact)=>{
                                  return <tr key={contact.login.uuid}>
                                      <td>{contact.login.uuid.substring(32)}</td>
                                      <td>{contact.name.first + " "+ contact.name.last}</td>
                                      <td>{contact.email}</td>
                                  </tr>
                              })
                          }
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      </div>
    )
  }
}

export default ContactList