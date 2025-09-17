export const BTN_STYLE = `
  #my-simple-todo-btn {
    position: fixed !important;
    top: 20px !important;
    right: 20px !important;
    width: 35px !important;
    height: 35px !important;
    border-radius: 10% !important;
    border: none !important;
    background: #ffffff00 !important;
    color: black !important;
    font-size: 10px !important;
    font-weight: bold !important;
    cursor: pointer !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    opacity: 100% !important;
    transition: all 0.3s ease !important;
    z-index: 999 !important;
  }
  #my-simple-todo-btn:hover {
    background: rgba(227, 227, 227, 0.5) !important;
    opacity: 100% !important;
  }
  #my-simple-todo svg {
    width: 25px !important;
    height: 25px !important;
    pointer-events: none !important;
  }
`

export const SCREEN_STYLE = `
#my-simple-todo-overlay {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background: rgba(0, 0, 0, 0.5) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  z-index: 1000 !important;
}

#my-simple-todo-screen {
  width: 80% !important;
  max-width: 720px !important;
  background: #fff !important;
  color: black !important;
  font-family: inherit !important;
  border-radius: 12px !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25) !important;
}

#my-simple-todo-screen-filter-div {
  display: flex !important;
  gap: 15px !important;
  border-top: 1px solid rgba(0,0,0, 0.1) !important;
  padding: 10px 15px 0px 15px !important;
}

#my-simple-todo-screen-filter-div .filter-button {
  width: 120px !important;
  min-width: 100px !important;
  max-width: 120px !important;
  height: 35px !important;
  color: rgba(0, 0,0, 0.4) !important;
  font-size: 14px !important;
  border: none !important;
  padding: 8px 15px !important;
  border-radius: 5px !important;
  background-color: rgba(0,0,0,0.1) !important;
  margin: 0px !important;
}

#my-simple-todo-screen-filter-div .filter-button.active {
  background-color: rgba(50, 111, 255, 1) !important;
  color: white !important;
}

#my-simple-todo-screen-title-div {
  padding: 20px 20px 0px 20px !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
}

#my-simple-todo-screen-title-div h1 {
  color: rgba(0, 0,0, 0.4) !important;
  font-size: 1.3rem !important;
  margin: 0px !important;
  min-height: 0px !important;
}

#my-simple-todo-screen-title-div span {
  color: gray !important;
  font-size: 12px !important;
}

#my-simple-todo-screen-title-div span #special {
  display: inline-block !important;
  background-color: rgba(0, 0, 0, 0.1) !important;
  height: 20px !important;
  width: 20px !important;
  border-radius: 5px !important;
  color: black !important;
  font-size: 14px !important;
  font: bold !important;
  text-align: center !important;
}

#my-simple-todo-screen-input-div {
  position: relative !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 10px 14px 0px 14px !important;
  border-top: 1px solid rgba(0,0,0, 0.1) !important;
  gap: 10px !important;
}

#my-simple-todo-screen-input {
  flex: 1 !important;
  height: 25px !important;
  padding: 16px 70px 16px 10px !important;
  font-size: 14px !important;
  border: none !important;
  border-radius: 5px !important;
  background-color: rgba(0, 0, 0, 0.1) !important;
  outline: none !important;
  margin: 0px !important;
}

#my-simple-todo-screen-input:focus {
  outline: none !important;
}

#my-simple-todo-screen-input-enter {
  position: absolute !important;
  right: 30px !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  width: 50px !important;
  height: 30px !important;
  border: 1px solid rgba(0, 0, 0, 0.3) !important;
  border-radius: 5px !important;
  color: rgba(0, 0, 0, 0.4) !important;
  background-color: rgba(0, 0, 0, 0.0) !important;
  font-size: 13px !important;
  z-index: 1001 !important;
  transition: all 0.3s ease !important;
}

#my-simple-todo-screen-input-enter:hover {
  color: rgba(0, 0, 0, 0.8) !important;
  border: 1px solid rgba(0, 0, 0, 0.6) !important;
  background-color: rgba(0, 0, 0, 0.1) !important;
  cursor: pointer !important;
}

#my-simple-todo-screen-list {
  display: flex !important;
  flex-direction: column !important;
  gap: 10px !important;
  min-height: 160px !important;
  max-height: 325px !important;
  overflow-y: scroll !important;
  border-top: 1px solid rgba(0,0,0, 0.1) !important;
  padding: 15px 15px 20px 15px !important;
}

#my-simple-todo-screen-close {
  font-size: 20px !important;
  font: bold !important;
  width: 35px !important;
  height: 35px !important;
  margin-left: 10px !important;
  border: none !important;
  border-radius: 10px !important;
  color: rgba(0,0,0,0.4) !important;
  background-color: rgba(0,0,0,0) !important;
}

#my-simple-todo-screen-close:hover {
  color: rgba(0,0,0,0.6) !important;
  background-color: rgba(0,0,0,0.1) !important;
}

#my-simple-todo-screen-list .simple-todo-item {
  display: flex !important;
  padding: 10px 0px 10px 0px !important;
  border: 1px solid rgba(0,0,0,0.3) !important;
  border-radius: 5px !important;
  white-space: normal !important;
  overflow-wrap: break-word !important;
  text-overflow: ellipsis !important;
}

#my-simple-todo-screen-list .start-div {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 60px !important;
}

#my-simple-todo-screen-list .middle-div {
  flex: 1 !important;
  min-width: 0 !important;
  display: flex !important;
  gap: 7px !important;
  flex-direction: column !important;
  overflow-wrap: break-word !important;
  white-space: normal !important;
}

#my-simple-todo-screen-list .end-div {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 60px !important;
}

#my-simple-todo-screen-list .simple-todo-title {
  margin: 0px !important;
}

#my-simple-todo-screen-list .simple-todo-date {
  font-size: 12px !important;
  color: rgba(0, 0, 0, 0.) !important;
}

#my-simple-todo-screen-list .simple-todo-delete {
  font-size: 14px !important;
  width: 35px !important;
  height: 35px !important;
  color: rgba(0, 0, 0, 0.3) !important;
  background-color: rgba(0, 0, 0, 0) !important;
  border: none !important;
  border-radius: 5px !important;
  transition: all 0.3s ease !important;
}

#my-simple-todo-screen-list .simple-todo-delete:hover {
  color: rgba(0, 0, 0, 0.5) !important;
  background-color: rgba(2, 1, 1, 0.1) !important;
}

#my-simple-todo-screen-list .empty-notice {
  display: flex !important;
  flex: 1 !important;
  justify-content: center !important;
  align-items: center !important;
  font-size: 14px !important;
  color: rgba(0, 0, 0, 0.4) !important;
}
`
