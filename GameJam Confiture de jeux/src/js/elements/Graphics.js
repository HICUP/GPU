var Graphics = function() 
{
    // GUI
    PIXI.Graphics.call(this);

    this.transparent = false;

    this.Resize = function ()
    {
		this.clear();
        if (this.transparent)
        {
            this.beginFill(0x000000, 0.0);
        }
        else
        {
            this.beginFill(0x000000);
        }
	    this.drawRect(0, 0, Screen.size.width, Screen.size.height);
	    this.endFill();
    };

    this.Resize();
};

Graphics.prototype = Object.create(PIXI.Graphics.prototype);
Graphics.prototype.constructor = Graphics;