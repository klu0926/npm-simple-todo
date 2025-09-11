export const BTN_STYLE = `
  #my-simple-todo-btn {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 35px;
    height: 35px;
    border-radius: 10%;
    border: none;
    background: #ffffff00;
    color: black;
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 100%;
    transition: all 0.3s ease;
    z-index : 999;
  }
  #my-simple-todo-btn:hover {
    background: rgba(227, 227, 227, 0.5);
    opacity: 100%;
  }

  #my-simple-todo svg {
  width: 80%;
  height: 80%;
  pointer-events: none;
}
`

export const SCREEN_STYLE = `
#my-simple-todo-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* semi-transparent backdrop */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

#my-simple-todo-screen {
  width: 80%;
  max-width: 720px;
  background: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

#my-simple-todo-screen-filter-div{
  display: flex;
  gap: 15px;
  border-top: 1px solid rgba(0,0,0, 0.1);
  padding: 10px 15px 0px 15px;
}

#my-simple-todo-screen-filter-div .filter-button{
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  background-color: rgba(0,0,0,0.1);
  color: rgba(0, 0, 0, 0.5);
}

#my-simple-todo-screen-filter-div .filter-button.active{
  background-color: rgba(50, 111, 255, 1);
  color: white;
}


#my-simple-todo-screen-title-div{
  padding: 20px 20px 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#my-simple-todo-screen-title-div h1{
  color: rgba(0, 0,0, 0.4);
  font-size: 1.3rem;
  margin-top: 0;
  margin-bottom: 0;
}

#my-simple-todo-screen-title-div span{
  color: gray;
  font-size: 12px;
}

#my-simple-todo-screen-title-div span #special{
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.1);
  width: 20px;
  border-radius: 5px;
  color: black;
  font-size: 14px;
  font: bold;
  text-align: center;
}

#my-simple-todo-screen-input-div{
  position: relative;
  display: flex;
  padding: 10px 14px 0px 14px;
  border-top: 1px solid rgba(0,0,0, 0.1);
  gap: 10px;
}

#my-simple-todo-screen-input{
  flex: 1;
  padding: 16px 70px 16px 10px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  outline: none;
  margin: none;
}

#my-simple-todo-screen-input:focus{
 outline: none;
}

#my-simple-todo-screen-input-enter{
  position: absolute;
  right: 30px;
  top: 18px;
  width: 50px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.0);
  font-size: 13px;
  z-index: 1001;
  transition: all 0.3s ease;
}

#my-simple-todo-screen-input-enter:hover{
  color: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.6);
  background-color: rgba(0, 0, 0, 0.1);
  cursor:pointer;
}


#my-simple-todo-screen-list{
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 160px;
  max-height: 325px;
  overflow-y : scroll;
  border-top: 1px solid rgba(0,0,0, 0.1);
  padding: 15px 15px 20px 15px;
}

#my-simple-todo-screen-close{
  font-size: 20px;
  font: bold;
  width: 35px;
  height: 35px;
  margin-left: 10px;
  border: none;
  border-radius: 10px;
  color: rgba(0,0,0,0.4);
  background-color: rgba(0,0,0,0);
  }

  #my-simple-todo-screen-close:hover{
  color: rgba(0,0,0,0.6);
  background-color: rgba(0,0,0,0.1);
  }

#my-simple-todo-screen-list .simple-todo-item{
  display: flex;
  padding: 10px 0px 10px 0px;
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 5px;
  white-space: normal;   
  overflow-wrap: break-word;
  text-overflow: ellipsis;
}

#my-simple-todo-screen-list .start-div{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
}
#my-simple-todo-screen-list .middle-div{
  flex: 1;
  min-width: 0; 
  display: flex;
  gap: 7px;
  flex-direction: column; 
  overflow-wrap: break-word;
  white-space: normal;
}
#my-simple-todo-screen-list .end-div{
  display: flex;
  align-items: center;
  justify-content: center;
    width: 60px;
}

#my-simple-todo-screen-list .simple-todo-title{
  margin: 0px;
}

#my-simple-todo-screen-list .simple-todo-date{
  font-size: 12px;
  color: rgba(0, 0, 0, 0.)
}

#my-simple-todo-screen-list .simple-todo-delete{
  font-size: 14px;
  width: 35px;
  height: 35px;
  color: rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease;
}

#my-simple-todo-screen-list .simple-todo-delete:hover{
  color: rgba(0, 0, 0, 0.5);
  background-color: rgba(2, 1, 1, 0.1);
}



#my-simple-todo-screen-list .empty-notice{
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color : rgba(0, 0, 0, 0.4);
}





`