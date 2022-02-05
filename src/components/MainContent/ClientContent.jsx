import React from 'react';
import  ClientTable from './clienttable'
import   RestContent from './restcontent';


function ClientContent()
{
  return(
      <div>
        <RestContent />
        <ClientTable />
    </div>
  )
}
export default ClientContent;