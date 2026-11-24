export const id = 317;
export const ids = [317];
export const modules = {
  42098: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      _HDRTextureLoader: () => Xt
    });
    var Ot = Vt(37336);
    class qt {
      static ConvertPanoramaToCubemap(tt, et, Vt, Ot) {
        let qt, Dt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          mt = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!tt) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (tt.length != et * Vt * 3) {
          if (tt.length != et * Vt * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          qt = 4
        } else qt = 3;
        return {
          front: this.CreateCubemapTexture(Ot, this.FACE_FRONT, tt, et, Vt, Dt, mt, qt),
          back: this.CreateCubemapTexture(Ot, this.FACE_BACK, tt, et, Vt, Dt, mt, qt),
          left: this.CreateCubemapTexture(Ot, this.FACE_LEFT, tt, et, Vt, Dt, mt, qt),
          right: this.CreateCubemapTexture(Ot, this.FACE_RIGHT, tt, et, Vt, Dt, mt, qt),
          up: this.CreateCubemapTexture(Ot, this.FACE_UP, tt, et, Vt, Dt, mt, qt),
          down: this.CreateCubemapTexture(Ot, this.FACE_DOWN, tt, et, Vt, Dt, mt, qt),
          size: Ot,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(tt, et, Vt, Ot, qt, Dt, mt, dt) {
        const jt = new ArrayBuffer(tt * tt * 4 * 3),
          Ht = new Float32Array(jt),
          Xt = Dt ? Math.max(1, Math.round(Ot / 4 / tt)) : 1,
          Qt = 1 / Xt,
          lt = Qt * Qt,
          Et = et[1].subtract(et[0]).scale(Qt / tt),
          ft = et[3].subtract(et[2]).scale(Qt / tt),
          wt = 1 / tt;
        let yt = 0;
        for (let Nt = 0; Nt < tt; Nt++)
          for (let Dt = 0; Dt < Xt; Dt++) {
            let Dt = et[0],
              jt = et[2];
            for (let et = 0; et < tt; et++)
              for (let Qt = 0; Qt < Xt; Qt++) {
                const Xt = jt.subtract(Dt).scale(yt).add(Dt);
                Xt.normalize();
                const Qt = this.CalcProjectionSpherical(Xt, Vt, Ot, qt, dt, mt);
                Ht[Nt * tt * 3 + 3 * et + 0] += Qt.r * lt, Ht[Nt * tt * 3 + 3 * et + 1] += Qt.g * lt, Ht[Nt * tt * 3 + 3 * et + 2] += Qt.b * lt, Dt = Dt.add(Et), jt = jt.add(ft)
              }
            yt += wt * Qt
          }
        return Ht
      }
      static CalcProjectionSpherical(tt, et, Vt, Ot, qt, Dt) {
        let mt = Math.atan2(tt.z, tt.x);
        const dt = Math.acos(tt.y);
        for (; mt < -Math.PI;) mt += 2 * Math.PI;
        for (; mt > Math.PI;) mt -= 2 * Math.PI;
        let jt = mt / Math.PI;
        const Ht = dt / Math.PI;
        jt = .5 * jt + .5;
        let Xt = Math.round(jt * Vt);
        Xt < 0 ? Xt = 0 : Xt >= Vt && (Xt = Vt - 1);
        let Qt = Math.round(Ht * Ot);
        Qt < 0 ? Qt = 0 : Qt >= Ot && (Qt = Ot - 1);
        const lt = Dt ? Ot - Qt - 1 : Qt;
        return {
          r: et[lt * Vt * qt + Xt * qt + 0],
          g: et[lt * Vt * qt + Xt * qt + 1],
          b: et[lt * Vt * qt + Xt * qt + 2]
        }
      }
    }

    function Dt(tt, et, Vt, Ot, qt, Dt) {
      qt > 0 ? (qt = function(tt, et) {
        return et > 1023 ? tt * Math.pow(2, 1023) * Math.pow(2, et - 1023) : et < -1074 ? tt * Math.pow(2, -1074) * Math.pow(2, et + 1074) : tt * Math.pow(2, et)
      }(1, qt - 136), tt[Dt + 0] = et * qt, tt[Dt + 1] = Vt * qt, tt[Dt + 2] = Ot * qt) : (tt[Dt + 0] = 0, tt[Dt + 1] = 0, tt[Dt + 2] = 0)
    }

    function mt(tt, et) {
      let Vt, Ot = "";
      for (let qt = et; qt < tt.length - et && (Vt = String.fromCharCode(tt[qt]), "\n" != Vt); qt++) Ot += Vt;
      return Ot
    }

    function dt(tt) {
      let et = mt(tt, 0);
      if ("#" != et[0] || "?" != et[1]) throw "Bad HDR Format.";
      let Vt = !1,
        Ot = !1,
        qt = 0;
      do {
        qt += et.length + 1, et = mt(tt, qt), "FORMAT=32-bit_rle_rgbe" == et ? Ot = !0 : 0 == et.length && (Vt = !0)
      } while (!Vt);
      if (!Ot) throw "HDR Bad header format, unsupported FORMAT";
      qt += et.length + 1, et = mt(tt, qt);
      const Dt = /^-Y (.*) \+X (.*)$/g.exec(et);
      if (!Dt || Dt.length < 3) throw "HDR Bad header format, no size";
      const dt = parseInt(Dt[2]),
        jt = parseInt(Dt[1]);
      if (dt < 8 || dt > 32767) throw "HDR Bad header format, unsupported size";
      return qt += et.length + 1, {
        height: jt,
        width: dt,
        dataPosition: qt
      }
    }

    function jt(tt, et) {
      return function(tt, et) {
        let Vt = et.height;
        const Ot = et.width;
        let qt, mt, dt, jt, Xt, Qt, lt, Et, ft = et.dataPosition;
        const wt = new ArrayBuffer(4 * Ot),
          yt = new Uint8Array(wt),
          Nt = new ArrayBuffer(et.width * et.height * 4 * 3),
          Mt = new Float32Array(Nt);
        for (; Vt > 0;) {
          if (qt = tt[ft++], mt = tt[ft++], dt = tt[ft++], jt = tt[ft++], 2 != qt || 2 != mt || 128 & dt || et.width < 8 || et.width > 32767) return Ht(tt, et);
          if ((dt << 8 | jt) != Ot) throw "HDR Bad header format, wrong scan line width";
          for (Qt = 0, Et = 0; Et < 4; Et++)
            for (lt = (Et + 1) * Ot; Qt < lt;)
              if (qt = tt[ft++], mt = tt[ft++], qt > 128) {
                if (Xt = qt - 128, 0 == Xt || Xt > lt - Qt) throw "HDR Bad Format, bad scanline data (run)";
                for (; Xt-- > 0;) yt[Qt++] = mt
              } else {
                if (Xt = qt, 0 == Xt || Xt > lt - Qt) throw "HDR Bad Format, bad scanline data (non-run)";
                if (yt[Qt++] = mt, --Xt > 0)
                  for (let et = 0; et < Xt; et++) yt[Qt++] = tt[ft++]
              } for (Et = 0; Et < Ot; Et++) qt = yt[Et], mt = yt[Et + Ot], dt = yt[Et + 2 * Ot], jt = yt[Et + 3 * Ot], Dt(Mt, qt, mt, dt, jt, (et.height - Vt) * Ot * 3 + 3 * Et);
          Vt--
        }
        return Mt
      }(tt, et)
    }

    function Ht(tt, et) {
      let Vt = et.height;
      const Ot = et.width;
      let qt, mt, dt, jt, Ht, Xt = et.dataPosition;
      const Qt = new ArrayBuffer(et.width * et.height * 4 * 3),
        lt = new Float32Array(Qt);
      for (; Vt > 0;) {
        for (Ht = 0; Ht < et.width; Ht++) qt = tt[Xt++], mt = tt[Xt++], dt = tt[Xt++], jt = tt[Xt++], Dt(lt, qt, mt, dt, jt, (et.height - Vt) * Ot * 3 + 3 * Ht);
        Vt--
      }
      return lt
    }
    qt.FACE_LEFT = [new Ot.n(-1, -1, -1), new Ot.n(1, -1, -1), new Ot.n(-1, 1, -1), new Ot.n(1, 1, -1)], qt.FACE_RIGHT = [new Ot.n(1, -1, 1), new Ot.n(-1, -1, 1), new Ot.n(1, 1, 1), new Ot.n(-1, 1, 1)], qt.FACE_FRONT = [new Ot.n(1, -1, -1), new Ot.n(1, -1, 1), new Ot.n(1, 1, -1), new Ot.n(1, 1, 1)], qt.FACE_BACK = [new Ot.n(-1, -1, 1), new Ot.n(-1, -1, -1), new Ot.n(-1, 1, 1), new Ot.n(-1, 1, -1)], qt.FACE_DOWN = [new Ot.n(1, 1, -1), new Ot.n(1, 1, 1), new Ot.n(-1, 1, -1), new Ot.n(-1, 1, 1)], qt.FACE_UP = [new Ot.n(-1, -1, -1), new Ot.n(-1, -1, 1), new Ot.n(1, -1, -1), new Ot.n(1, -1, 1)];
    class Xt {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(tt, et, Vt) {
        const Ot = new Uint8Array(tt.buffer, tt.byteOffset, tt.byteLength),
          qt = dt(Ot),
          Dt = jt(Ot, qt),
          mt = qt.width * qt.height,
          Ht = new Float32Array(4 * mt);
        for (let dt = 0; dt < mt; dt += 1) Ht[4 * dt] = Dt[3 * dt], Ht[4 * dt + 1] = Dt[3 * dt + 1], Ht[4 * dt + 2] = Dt[3 * dt + 2], Ht[4 * dt + 3] = 1;
        Vt(qt.width, qt.height, et.generateMipMaps, !1, (() => {
          const tt = et.Jf();
          et.type = 1, et.format = 5, et._gammaSpace = !1, tt._uploadDataToTextureDirectly(et, Ht)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);