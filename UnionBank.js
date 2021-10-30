import React from 'react'
import AndhraBank from './AndhraBank'
import CorporationBank from './CorporationBank'

export default function unionBank() {
    let data={
        firstName:'sri ',
        lastName:'durga'
    }
    return (
        <div>
            <AndhraBank info={data} />
            <CorporationBank info={data} />
        </div>
    )
}
