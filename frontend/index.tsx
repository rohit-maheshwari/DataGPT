import {initializeBlock, useBase, useRecords} from '@airtable/blocks/ui';
import React from 'react';
import { useState } from 'react';

function HelloWorldApp() {
    // YOUR CODE GOES HERE

    const [userTask, setUserTask] = useState('')

    
    const base = useBase()
    const table = base.tables[0];
    const view = table.views[0];
    console.log(view.name)
    let query = useRecords(view);


    
    return <div>
        <ul>
             {query.map(record => {
                 return <li key={record.id}>{record.name}
                        <ul>
                            <li>{record.getCellValueAsString("Notes")}</li>
                            <ul>
                                <li>{record.getCellValueAsString("Status")}</li>
                            </ul>
                        </ul>
                    </li>
             })}
         </ul>

         <br></br><br></br>

         <input placeholder='Task Name' defaultValue={userTask} onChange={event => setUserTask(event.target.value)} />
         <ul>
            {query.map(record => {
                if (record.name == userTask) {
                    return <li key={record.id}>{record.name}
                        <ul>
                            <li>{record.getCellValueAsString("Notes")}</li>
                            <ul>
                                <li>{record.getCellValueAsString("Status")}</li>
                            </ul>
                        </ul>
                    </li>
                }
            })}
         </ul>
    </div>;
}

initializeBlock(() => <HelloWorldApp />);
