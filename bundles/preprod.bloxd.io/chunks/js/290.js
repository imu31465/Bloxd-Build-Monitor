export const id = 290;
export const ids = [290];
export const modules = {
  40321: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      _HDRTextureLoader: () => By
    });
    var Uy = Wy(35861);
    class hy {
      static ConvertPanoramaToCubemap(yb, bb, Wy, Uy) {
        let hy, fy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Zy = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!yb) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (yb.length != bb * Wy * 3) {
          if (yb.length != bb * Wy * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          hy = 4
        } else hy = 3;
        return {
          front: this.CreateCubemapTexture(Uy, this.FACE_FRONT, yb, bb, Wy, fy, Zy, hy),
          back: this.CreateCubemapTexture(Uy, this.FACE_BACK, yb, bb, Wy, fy, Zy, hy),
          left: this.CreateCubemapTexture(Uy, this.FACE_LEFT, yb, bb, Wy, fy, Zy, hy),
          right: this.CreateCubemapTexture(Uy, this.FACE_RIGHT, yb, bb, Wy, fy, Zy, hy),
          up: this.CreateCubemapTexture(Uy, this.FACE_UP, yb, bb, Wy, fy, Zy, hy),
          down: this.CreateCubemapTexture(Uy, this.FACE_DOWN, yb, bb, Wy, fy, Zy, hy),
          size: Uy,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
        const Py = new ArrayBuffer(yb * yb * 4 * 3),
          oy = new Float32Array(Py),
          By = fy ? Math.max(1, Math.round(Uy / 4 / yb)) : 1,
          Ky = 1 / By,
          ey = Ky * Ky,
          qb = bb[1].subtract(bb[0]).scale(Ky / yb),
          sy = bb[3].subtract(bb[2]).scale(Ky / yb),
          Sy = 1 / yb;
        let Ey = 0;
        for (let ly = 0; ly < yb; ly++)
          for (let fy = 0; fy < By; fy++) {
            let fy = bb[0],
              Py = bb[2];
            for (let bb = 0; bb < yb; bb++)
              for (let Ky = 0; Ky < By; Ky++) {
                const By = Py.subtract(fy).scale(Ey).add(fy);
                By.normalize();
                const Ky = this.CalcProjectionSpherical(By, Wy, Uy, hy, cb, Zy);
                oy[ly * yb * 3 + 3 * bb + 0] += Ky.r * ey, oy[ly * yb * 3 + 3 * bb + 1] += Ky.g * ey, oy[ly * yb * 3 + 3 * bb + 2] += Ky.b * ey, fy = fy.add(qb), Py = Py.add(sy)
              }
            Ey += Sy * Ky
          }
        return oy
      }
      static CalcProjectionSpherical(yb, bb, Wy, Uy, hy, fy) {
        let Zy = Math.atan2(yb.z, yb.x);
        const cb = Math.acos(yb.y);
        for (; Zy < -Math.PI;) Zy += 2 * Math.PI;
        for (; Zy > Math.PI;) Zy -= 2 * Math.PI;
        let Py = Zy / Math.PI;
        const oy = cb / Math.PI;
        Py = .5 * Py + .5;
        let By = Math.round(Py * Wy);
        By < 0 ? By = 0 : By >= Wy && (By = Wy - 1);
        let Ky = Math.round(oy * Uy);
        Ky < 0 ? Ky = 0 : Ky >= Uy && (Ky = Uy - 1);
        const ey = fy ? Uy - Ky - 1 : Ky;
        return {
          r: bb[ey * Wy * hy + By * hy + 0],
          g: bb[ey * Wy * hy + By * hy + 1],
          b: bb[ey * Wy * hy + By * hy + 2]
        }
      }
    }

    function fy(yb, bb, Wy, Uy, hy, fy) {
      hy > 0 ? (hy = function(yb, bb) {
        return bb > 1023 ? yb * Math.pow(2, 1023) * Math.pow(2, bb - 1023) : bb < -1074 ? yb * Math.pow(2, -1074) * Math.pow(2, bb + 1074) : yb * Math.pow(2, bb)
      }(1, hy - 136), yb[fy + 0] = bb * hy, yb[fy + 1] = Wy * hy, yb[fy + 2] = Uy * hy) : (yb[fy + 0] = 0, yb[fy + 1] = 0, yb[fy + 2] = 0)
    }

    function Zy(yb, bb) {
      let Wy, Uy = "";
      for (let hy = bb; hy < yb.length - bb && (Wy = String.fromCharCode(yb[hy]), "\n" != Wy); hy++) Uy += Wy;
      return Uy
    }

    function cb(yb) {
      let bb = Zy(yb, 0);
      if ("#" != bb[0] || "?" != bb[1]) throw "Bad HDR Format.";
      let Wy = !1,
        Uy = !1,
        hy = 0;
      do {
        hy += bb.length + 1, bb = Zy(yb, hy), "FORMAT=32-bit_rle_rgbe" == bb ? Uy = !0 : 0 == bb.length && (Wy = !0)
      } while (!Wy);
      if (!Uy) throw "HDR Bad header format, unsupported FORMAT";
      hy += bb.length + 1, bb = Zy(yb, hy);
      const fy = /^-Y (.*) \+X (.*)$/g.exec(bb);
      if (!fy || fy.length < 3) throw "HDR Bad header format, no size";
      const cb = parseInt(fy[2]),
        Py = parseInt(fy[1]);
      if (cb < 8 || cb > 32767) throw "HDR Bad header format, unsupported size";
      return hy += bb.length + 1, {
        height: Py,
        width: cb,
        dataPosition: hy
      }
    }

    function Py(yb, bb) {
      return function(yb, bb) {
        let Wy = bb.height;
        const Uy = bb.width;
        let hy, Zy, cb, Py, By, Ky, ey, qb, sy = bb.dataPosition;
        const Sy = new ArrayBuffer(4 * Uy),
          Ey = new Uint8Array(Sy),
          ly = new ArrayBuffer(bb.width * bb.height * 4 * 3),
          mb = new Float32Array(ly);
        for (; Wy > 0;) {
          if (hy = yb[sy++], Zy = yb[sy++], cb = yb[sy++], Py = yb[sy++], 2 != hy || 2 != Zy || 128 & cb || bb.width < 8 || bb.width > 32767) return oy(yb, bb);
          if ((cb << 8 | Py) != Uy) throw "HDR Bad header format, wrong scan line width";
          for (Ky = 0, qb = 0; qb < 4; qb++)
            for (ey = (qb + 1) * Uy; Ky < ey;)
              if (hy = yb[sy++], Zy = yb[sy++], hy > 128) {
                if (By = hy - 128, 0 == By || By > ey - Ky) throw "HDR Bad Format, bad scanline data (run)";
                for (; By-- > 0;) Ey[Ky++] = Zy
              } else {
                if (By = hy, 0 == By || By > ey - Ky) throw "HDR Bad Format, bad scanline data (non-run)";
                if (Ey[Ky++] = Zy, --By > 0)
                  for (let bb = 0; bb < By; bb++) Ey[Ky++] = yb[sy++]
              } for (qb = 0; qb < Uy; qb++) hy = Ey[qb], Zy = Ey[qb + Uy], cb = Ey[qb + 2 * Uy], Py = Ey[qb + 3 * Uy], fy(mb, hy, Zy, cb, Py, (bb.height - Wy) * Uy * 3 + 3 * qb);
          Wy--
        }
        return mb
      }(yb, bb)
    }

    function oy(yb, bb) {
      let Wy = bb.height;
      const Uy = bb.width;
      let hy, Zy, cb, Py, oy, By = bb.dataPosition;
      const Ky = new ArrayBuffer(bb.width * bb.height * 4 * 3),
        ey = new Float32Array(Ky);
      for (; Wy > 0;) {
        for (oy = 0; oy < bb.width; oy++) hy = yb[By++], Zy = yb[By++], cb = yb[By++], Py = yb[By++], fy(ey, hy, Zy, cb, Py, (bb.height - Wy) * Uy * 3 + 3 * oy);
        Wy--
      }
      return ey
    }
    hy.FACE_LEFT = [new Uy.n(-1, -1, -1), new Uy.n(1, -1, -1), new Uy.n(-1, 1, -1), new Uy.n(1, 1, -1)], hy.FACE_RIGHT = [new Uy.n(1, -1, 1), new Uy.n(-1, -1, 1), new Uy.n(1, 1, 1), new Uy.n(-1, 1, 1)], hy.FACE_FRONT = [new Uy.n(1, -1, -1), new Uy.n(1, -1, 1), new Uy.n(1, 1, -1), new Uy.n(1, 1, 1)], hy.FACE_BACK = [new Uy.n(-1, -1, 1), new Uy.n(-1, -1, -1), new Uy.n(-1, 1, 1), new Uy.n(-1, 1, -1)], hy.FACE_DOWN = [new Uy.n(1, 1, -1), new Uy.n(1, 1, 1), new Uy.n(-1, 1, -1), new Uy.n(-1, 1, 1)], hy.FACE_UP = [new Uy.n(-1, -1, -1), new Uy.n(-1, -1, 1), new Uy.n(1, -1, -1), new Uy.n(1, -1, 1)];
    class By {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(yb, bb, Wy) {
        const Uy = new Uint8Array(yb.buffer, yb.byteOffset, yb.byteLength),
          hy = cb(Uy),
          fy = Py(Uy, hy),
          Zy = hy.width * hy.height,
          oy = new Float32Array(4 * Zy);
        for (let cb = 0; cb < Zy; cb += 1) oy[4 * cb] = fy[3 * cb], oy[4 * cb + 1] = fy[3 * cb + 1], oy[4 * cb + 2] = fy[3 * cb + 2], oy[4 * cb + 3] = 1;
        Wy(hy.width, hy.height, bb.generateMipMaps, !1, (() => {
          const yb = bb.xh();
          bb.type = 1, bb.format = 5, bb._gammaSpace = !1, yb._uploadDataToTextureDirectly(bb, oy)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);