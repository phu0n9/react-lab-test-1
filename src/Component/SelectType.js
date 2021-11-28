import React from 'react'

export default function SelectType({typeList,selectOnChange}) {
    return (
        <select name="type" onChange={selectOnChange}>
            {
                typeList.map((type,index)=>{
                    return <option value={type.id} key={index}>{type.typeName}</option>
                })
            }
        </select>
    )
}
