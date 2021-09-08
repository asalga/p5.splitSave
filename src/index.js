'use strict';

(function () {

    let p5 = window.p5;

    p5.prototype.splitSave = function (str, cols, rows) {
        let w = p5.prototype.floor(this.width / cols);
        let h = p5.prototype.floor(this.height / rows);

        // don't use p5.prototype here
        let gfx = this.createGraphics(w, h, this._renderer);

        for (let x = 0; x < cols; x++) {
            for (let y = 0; y < rows; y++) {
                gfx.clear();
                gfx.image(this, 0, 0, w, h, x * w, y * h, w, h);
                gfx.save(`${str}-${x}-${y}`);
            }
        }
    };

})();
