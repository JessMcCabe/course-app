import React from "react"
import {moduleProps} from "../types/interfaces"

const Module: React.FC<moduleProps> = (module) => {

    return (
        <tr>
        <td>{module.name}</td>
        <td>{module.noLectures}</td>
        <td>{module.noPracticals}</td>
      </tr>
    );
  };
  
  export default Module;
