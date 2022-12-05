import React, { useRef, useEffect } from 'react';
import {loadLevel} from './loaders/level.js';
import {createMario} from './entities.js';
import Timer from './Timer.js';
import {setupKeyboard} from './input.js';
import Camera from './Camera.js';
import './canvas.scss';
import * as msg from './entities_msg.js';
import {Button} from 'react-bootstrap';

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    //console.log(canvas);
    const context = canvas.getContext('2d');
    context.canvas.width=500;
    context.canvas.height=320;
    
    Promise.all([
      createMario(),
      loadLevel('1-1'),
      // msg.createTxt1(),
      // msg.createTxt2(),
      // msg.createTxt3(),
      // msg.createTxt4(),
      // msg.createTxt5(),
      // msg.createTxt6(),
      // msg.createTxt7(),
      // msg.createTxt8(),
      // msg.createTxt9(),
      // msg.createTxt10(),
      // msg.createTxt11(),
      // msg.createTxt12(),
    ])
    .then(([mario,level,text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11,text12])=>{
      const camera = new Camera();
      window.camera=camera;
   
      mario.pos.set(50,90);
      // text1.pos.set(50,90);
      // text2.pos.set(50,90);
      // text3.pos.set(500,80);
      // text4.pos.set(500,80);
      // text5.pos.set(720,80);
      // text6.pos.set(880,40);
      // text7.pos.set(1280,80);
      // text8.pos.set(1280,80);
      // text9.pos.set(1800,80);
      // text10.pos.set(2200,80);
      // text11.pos.set(2200,80);
      // text12.pos.set(2600,80);
   
      level.entities.add(mario);
      // level.entities.add(text1);
      // level.entities.add(text2);
      // level.entities.add(text3);
      // level.entities.add(text4);
      // level.entities.add(text5);
      // level.entities.add(text6);
      // level.entities.add(text7);
      // level.entities.add(text8);
      // level.entities.add(text9);
      // level.entities.add(text10);
      // level.entities.add(text11);
      // level.entities.add(text12);

      const input=setupKeyboard(mario);
      input.listenTo(window);
      // mario.onClick=()=>{mario.go.dir+=10};
   
      const timer= new Timer(1/60);
   
      timer.update =function update(deltaTime){
      level.comp.draw(context,camera);
      level.update(deltaTime);
      if (mario.pos.x>100){
        camera.pos.x=mario.pos.x-100
      }
    }
      timer.start();
    });
  },[])
  
  return(
    <>
    <canvas className="canvas" ref={canvasRef} {...props}/>
    <h2 className="guide">Arrow key left & right to move! Space to jump!</h2>
    <Button variant="contained" onMouseDown={()=>{window.dispatchEvent(new KeyboardEvent('keydown', {
    key: "Space",
    keyCode: 32,
    code: "Space",
    which: 32,
    shiftKey: false,
    ctrlKey: false,
    metaKey: false
}))}} onMouseUp={()=>{window.dispatchEvent(new KeyboardEvent('keyup', {
  key: "Space",
  keyCode: 32,
  code: "Space",
  which: 32,
  shiftKey: false,
  ctrlKey: false,
  metaKey: false
}))}}>Jump</Button>
    <Button variant="contained" onMouseDown={()=>{window.dispatchEvent(new KeyboardEvent('keydown', {
    key: "ArrowLeft",
    keyCode: 91,
    code: "ArrowLeft",
    which: 91,
    shiftKey: false,
    ctrlKey: false,
    metaKey: false
}))}} onMouseUp={()=>{window.dispatchEvent(new KeyboardEvent('keyup', {
  key: "ArrowLeft",
  keyCode: 91,
  code: "ArrowLeft",
  which: 91,
  shiftKey: false,
  ctrlKey: false,
  metaKey: false
}))}}>
  Left
  </Button>
    <Button variant="contained" onMouseDown={()=>{window.dispatchEvent(new KeyboardEvent('keydown', {
    key: "ArrowRight",
    keyCode: 92,
    code: "ArrowRight",
    which: 92,
    shiftKey: false,
    ctrlKey: false,
    metaKey: false
}))}} onMouseUp={()=>{window.dispatchEvent(new KeyboardEvent('keyup', {
  key: "ArrowRight",
  keyCode: 92,
  code: "ArrowRight",
  which: 92,
  shiftKey: false,
  ctrlKey: false,
  metaKey: false
}))}}>
  Right
  </Button>
    </>
  )
}

export default Canvas