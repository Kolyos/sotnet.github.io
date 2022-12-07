import React from "react";
import S from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

const Dialogitem = (props) => {
let path = "/dialog/" + props.id;
   return (
      <div>
         <li className={S.name__names}>
            <NavLink to={path}>{props.name}</NavLink>
         </li>
      </div>
   );
}
const Messages =(props)=>{
   return(
      <div>
         <div className="mes__fone">{props.message}</div>
      </div>
   );
}

const Dialogs = (props) => {

   return (
      <div>
         <div className={S.dialog__body}>
            <div className={S.dialogs__names}>
               <ul className={S.names__item}>
                  <Dialogitem name="kolyos" id="1" />
                  <Dialogitem name="Sasha" id="2" />
                  <Dialogitem name="Sasha" id="3" />
                  <Dialogitem name="Valera" id="4" />
                  <Dialogitem name="Victor" id="5" />
                  <Dialogitem name="This is a list item" id="6" />
                  <Dialogitem name="Another list item" id="7" />
                  <Dialogitem name="This is a list item" id="8" />
                  <Dialogitem name="Yup, another list item" id="9" />
               </ul>
            </div>
            <div className="dialog__messages-body">
               <Messages message="hi"/>
               <Messages message="how are you"/>
               <Messages message="whar are you doing"/>
               <Messages message="say me"/>
            </div>
         </div>
      </div>
   )

}
export default Dialogs;