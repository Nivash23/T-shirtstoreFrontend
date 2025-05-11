import React, { useState } from "react";

function App() {
  const [choosedfile, setChoosedfile] = useState("No file choosen");
  const [previewsrc, setPreviewsrc] = useState("");
  const [selectbutstate, setSelectbutstate] = useState("Sbutactive");
  const [texttoprintstate, setTexttoprintstate] = useState("TtoPinactive");
  const [outernamestate, setOuternamestate] = useState("Onameinactive");
  const [texttoprint, setTexttoprint] = useState("");
  const [heightofuser, setHeightofuser] = useState("180cm");
  const [weightofuser, setWeightofuser] = useState("80kg");

  return (
    <div id="wholecontainer">
      <div>
        <h2>T-Shirt Store</h2>
        <div>
          <div id="Imageuploadingbox">
            <div id="uploadedimg">
              <img style={{width:"100%" , height:"100%"}} alt="Uploaded image" src={previewsrc}></img>
            </div>
            <div class={selectbutstate}>
              <div id="selectbutcontainer">
                <div id="selectbut">
                  <label for="fileinput">
                    <div>Select File</div>
                  </label>
                </div>
                <div>{choosedfile}</div>
              </div>
              <input
                type="file"
                id="fileinput"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && file.type.startsWith("image/")) {
                    setChoosedfile(file.name);
                    const previewurl = URL.createObjectURL(file);
                    setPreviewsrc(previewurl);
                  }
                  setSelectbutstate("Sbutinactive");
                  setTexttoprintstate("TtoPactive");
                  setOuternamestate("Onameactive");
                }}
                placeholder="Select File"
                accept="image/*"
                style={{ display: "none" }}
              ></input>
            </div>
          </div>
          <div class={outernamestate}>
            <div id="outernameoffile">Selected Image : {choosedfile}</div>
          </div>
          <div class={texttoprintstate}>
            <textarea
              id="printingtext"
              onChange={(e) => {
                setTexttoprint(e.target.value);
              }}
              placeholder="Give Some text to print on YOUR T-shirt"
            >
              {texttoprint}
            </textarea>
          </div>

          <div id="inputsofuser">
            <div class="userenteredinput">
              <div style={{width:"80px",height:"30px",textAlign:"center",paddingTop:"5px"}}>
                <label style={{fontWeight:"bold"}}>Height </label>
              </div>
              <div>
                <input
                  type="text"
                  value={heightofuser}
                  onChange={(e) => {
                    setHeightofuser(e.target.value);
                  }}
                  placeholder="Height"
                ></input>
              </div>
            </div>
            <div class="userenteredinput">
              <div style={{width:"80px",height:"30px",textAlign:"center",paddingTop:"5px"}}>
                <label style={{fontWeight:"bold"}}>Weight </label>
              </div>
              <div>
                <input
                  type="text"
                  value={weightofuser}
                  onChange={(e) => {
                    setWeightofuser(e.target.value);
                  }}
                  placeholder="weight"
                ></input>
              </div>
            </div>
            <div id="typeoftshirt">
              <div style={{width:"80px",height:"30px",textAlign:"center",paddingTop:"5px"}}>
                <label for="type" style={{fontWeight:"bold"}}>Type </label>
              </div>
              <div id="types">
                <div class="radios">
                  <div style={{padding:"2px 5px 0px 2px"}}><input type="radio" name="type" id="" /></div>
                  <div>lean</div>

                </div>
                <div class="radios">
                  <div style={{padding:"2px 5px 0px 2px"}}><input type="radio" name="type" id="" /></div>
                  <div>reg</div>

                </div>
                <div class="radios">
                  <div style={{padding:"2px 5px 0px 2px"}}><input type="radio" name="type" id="" /></div>
                  <div>athletic</div>

                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
