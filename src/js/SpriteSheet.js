export default class SpriteSheet{
	constructor(image,width,height){
		this.image=image;
		this.width=width;
		this.height=height;
		this.tiles=new Map();
		this.animation=new Map();
	}

	defineAnim(name,animation){
		this.animation.set(name,animation);
	}

	define(name,x,y,width,height){
		const buffers = [false,true].map(flip=>{
		const buffer=document.createElement('canvas');
		buffer.width=width; //?
		buffer.height=height; //?

		const context =buffer.getContext('2d');

		if (flip){
		context.scale(-1,1);
		context.translate(-width,0);
		}

		context.drawImage(
				this.image,
				x, //pieces
				y,
				width,
				height,
				0, //coordinates
				0,
				width, //size
				height);
			return buffer;
		});
		this.tiles.set(name,buffers);
	}

	defineTile(name,x,y){
		this.define(name,x*this.width,y*this.height,this.width,this.height);
	}

	draw(name,context,x,y, flip=false){
		const buffer=this.tiles.get(name)[flip?1:0];
		context.drawImage(buffer,x,y);
	}

	drawAnim(name,context,x,y,distance){
		const animation = this.animation.get(name);
		this.drawtile(animation(distance),context,x,y);
	}

	drawtile(name,context,x,y){
		this.draw(name,context,x*this.width,y*this.height);
	}
}