import React from "react"
import Module from "./module"
import {programmeProps} from "../types/interfaces"

const Programme: React.FC<programmeProps> = (props) => {
const list = props.modules.map((module, index) => (
    <Module key={index} {...module} />
))
  return (
    <>
      <h2>{`${props.title} modules table`} </h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </>
  )
}

export default Programme;