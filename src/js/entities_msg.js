import Entity from './Entity.js';
import {loadSpriteSheet} from './loaders.js';

export function createTxt1(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(200,100);
        text.draw=function drawMsg(context){
			sprite.draw('text1',context,0,0);
		}

		return text;
	});
};

export function createTxt2(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(200,70);
        text.draw=function drawMsg(context){
			sprite.draw('text2',context,0,0);
		}

		return text;
	});
};

export function createTxt3(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(200,80);
        text.draw=function drawMsg(context){
			sprite.draw('text3',context,0,0);
		}

		return text;
	});
}

export function createTxt4(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(200,55);
        text.draw=function drawMsg(context){
			sprite.draw('text4',context,0,0);
		}

		return text;
	});
}

export function createTxt5(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(0,20);
        text.draw=function drawMsg(context){
			sprite.draw('text5',context,0,0);
		}

		return text;
	});
}

export function createTxt6(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(150,20);
        text.draw=function drawMsg(context){
			sprite.draw('text6',context,0,0);
		}

		return text;
	});
}

export function createTxt7(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(200,150);
        text.draw=function drawMsg(context){
			sprite.draw('text7',context,0,0);
		}

		return text;
	});
}

export function createTxt8(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(200,90);
        text.draw=function drawMsg(context){
			sprite.draw('text8',context,0,0);
		}

		return text;
	});
}

export function createTxt9(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(200,150);
        text.draw=function drawMsg(context){
			sprite.draw('text9',context,0,0);
		}

		return text;
	});
}

export function createTxt10(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(200,150);
        text.draw=function drawMsg(context){
			sprite.draw('text10',context,0,0);
		}

		return text;
	});
}

export function createTxt11(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(200,100);
        text.draw=function drawMsg(context){
			sprite.draw('text11',context,0,0);
		}

		return text;
	});
}

export function createTxt12(){
	return loadSpriteSheet('text')
	.then(sprite=>{
		const text = new Entity();
		text.size.set(200,150);
        text.draw=function drawMsg(context){
			sprite.draw('text12',context,0,0);
		}

		return text;
	});
}