export const id = 303;
export const ids = [303];
export const modules = {
  41157: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      _HDRTextureLoader: () => lv
    });
    var hv = Pv(36594);
    class Sv {
      static ConvertPanoramaToCubemap(vv, zv, Pv, hv) {
        let Sv, ev = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          gv = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!vv) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (vv.length != zv * Pv * 3) {
          if (vv.length != zv * Pv * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          Sv = 4
        } else Sv = 3;
        return {
          front: this.CreateCubemapTexture(hv, this.FACE_FRONT, vv, zv, Pv, ev, gv, Sv),
          back: this.CreateCubemapTexture(hv, this.FACE_BACK, vv, zv, Pv, ev, gv, Sv),
          left: this.CreateCubemapTexture(hv, this.FACE_LEFT, vv, zv, Pv, ev, gv, Sv),
          right: this.CreateCubemapTexture(hv, this.FACE_RIGHT, vv, zv, Pv, ev, gv, Sv),
          up: this.CreateCubemapTexture(hv, this.FACE_UP, vv, zv, Pv, ev, gv, Sv),
          down: this.CreateCubemapTexture(hv, this.FACE_DOWN, vv, zv, Pv, ev, gv, Sv),
          size: hv,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(vv, zv, Pv, hv, Sv, ev, gv, pv) {
        const dv = new ArrayBuffer(vv * vv * 4 * 3),
          Nv = new Float32Array(dv),
          lv = ev ? Math.max(1, Math.round(hv / 4 / vv)) : 1,
          Tv = 1 / lv,
          Wv = Tv * Tv,
          wv = zv[1].subtract(zv[0]).scale(Tv / vv),
          av = zv[3].subtract(zv[2]).scale(Tv / vv),
          sv = 1 / vv;
        let Cv = 0;
        for (let iv = 0; iv < vv; iv++)
          for (let ev = 0; ev < lv; ev++) {
            let ev = zv[0],
              dv = zv[2];
            for (let zv = 0; zv < vv; zv++)
              for (let Tv = 0; Tv < lv; Tv++) {
                const lv = dv.subtract(ev).scale(Cv).add(ev);
                lv.normalize();
                const Tv = this.CalcProjectionSpherical(lv, Pv, hv, Sv, pv, gv);
                Nv[iv * vv * 3 + 3 * zv + 0] += Tv.r * Wv, Nv[iv * vv * 3 + 3 * zv + 1] += Tv.g * Wv, Nv[iv * vv * 3 + 3 * zv + 2] += Tv.b * Wv, ev = ev.add(wv), dv = dv.add(av)
              }
            Cv += sv * Tv
          }
        return Nv
      }
      static CalcProjectionSpherical(vv, zv, Pv, hv, Sv, ev) {
        let gv = Math.atan2(vv.z, vv.x);
        const pv = Math.acos(vv.y);
        for (; gv < -Math.PI;) gv += 2 * Math.PI;
        for (; gv > Math.PI;) gv -= 2 * Math.PI;
        let dv = gv / Math.PI;
        const Nv = pv / Math.PI;
        dv = .5 * dv + .5;
        let lv = Math.round(dv * Pv);
        lv < 0 ? lv = 0 : lv >= Pv && (lv = Pv - 1);
        let Tv = Math.round(Nv * hv);
        Tv < 0 ? Tv = 0 : Tv >= hv && (Tv = hv - 1);
        const Wv = ev ? hv - Tv - 1 : Tv;
        return {
          r: zv[Wv * Pv * Sv + lv * Sv + 0],
          g: zv[Wv * Pv * Sv + lv * Sv + 1],
          b: zv[Wv * Pv * Sv + lv * Sv + 2]
        }
      }
    }

    function ev(vv, zv, Pv, hv, Sv, ev) {
      Sv > 0 ? (Sv = function(vv, zv) {
        return zv > 1023 ? vv * Math.pow(2, 1023) * Math.pow(2, zv - 1023) : zv < -1074 ? vv * Math.pow(2, -1074) * Math.pow(2, zv + 1074) : vv * Math.pow(2, zv)
      }(1, Sv - 136), vv[ev + 0] = zv * Sv, vv[ev + 1] = Pv * Sv, vv[ev + 2] = hv * Sv) : (vv[ev + 0] = 0, vv[ev + 1] = 0, vv[ev + 2] = 0)
    }

    function gv(vv, zv) {
      let Pv, hv = "";
      for (let Sv = zv; Sv < vv.length - zv && (Pv = String.fromCharCode(vv[Sv]), "\n" != Pv); Sv++) hv += Pv;
      return hv
    }

    function pv(vv) {
      let zv = gv(vv, 0);
      if ("#" != zv[0] || "?" != zv[1]) throw "Bad HDR Format.";
      let Pv = !1,
        hv = !1,
        Sv = 0;
      do {
        Sv += zv.length + 1, zv = gv(vv, Sv), "FORMAT=32-bit_rle_rgbe" == zv ? hv = !0 : 0 == zv.length && (Pv = !0)
      } while (!Pv);
      if (!hv) throw "HDR Bad header format, unsupported FORMAT";
      Sv += zv.length + 1, zv = gv(vv, Sv);
      const ev = /^-Y (.*) \+X (.*)$/g.exec(zv);
      if (!ev || ev.length < 3) throw "HDR Bad header format, no size";
      const pv = parseInt(ev[2]),
        dv = parseInt(ev[1]);
      if (pv < 8 || pv > 32767) throw "HDR Bad header format, unsupported size";
      return Sv += zv.length + 1, {
        height: dv,
        width: pv,
        dataPosition: Sv
      }
    }

    function dv(vv, zv) {
      return function(vv, zv) {
        let Pv = zv.height;
        const hv = zv.width;
        let Sv, gv, pv, dv, lv, Tv, Wv, wv, av = zv.dataPosition;
        const sv = new ArrayBuffer(4 * hv),
          Cv = new Uint8Array(sv),
          iv = new ArrayBuffer(zv.width * zv.height * 4 * 3),
          cv = new Float32Array(iv);
        for (; Pv > 0;) {
          if (Sv = vv[av++], gv = vv[av++], pv = vv[av++], dv = vv[av++], 2 != Sv || 2 != gv || 128 & pv || zv.width < 8 || zv.width > 32767) return Nv(vv, zv);
          if ((pv << 8 | dv) != hv) throw "HDR Bad header format, wrong scan line width";
          for (Tv = 0, wv = 0; wv < 4; wv++)
            for (Wv = (wv + 1) * hv; Tv < Wv;)
              if (Sv = vv[av++], gv = vv[av++], Sv > 128) {
                if (lv = Sv - 128, 0 == lv || lv > Wv - Tv) throw "HDR Bad Format, bad scanline data (run)";
                for (; lv-- > 0;) Cv[Tv++] = gv
              } else {
                if (lv = Sv, 0 == lv || lv > Wv - Tv) throw "HDR Bad Format, bad scanline data (non-run)";
                if (Cv[Tv++] = gv, --lv > 0)
                  for (let zv = 0; zv < lv; zv++) Cv[Tv++] = vv[av++]
              } for (wv = 0; wv < hv; wv++) Sv = Cv[wv], gv = Cv[wv + hv], pv = Cv[wv + 2 * hv], dv = Cv[wv + 3 * hv], ev(cv, Sv, gv, pv, dv, (zv.height - Pv) * hv * 3 + 3 * wv);
          Pv--
        }
        return cv
      }(vv, zv)
    }

    function Nv(vv, zv) {
      let Pv = zv.height;
      const hv = zv.width;
      let Sv, gv, pv, dv, Nv, lv = zv.dataPosition;
      const Tv = new ArrayBuffer(zv.width * zv.height * 4 * 3),
        Wv = new Float32Array(Tv);
      for (; Pv > 0;) {
        for (Nv = 0; Nv < zv.width; Nv++) Sv = vv[lv++], gv = vv[lv++], pv = vv[lv++], dv = vv[lv++], ev(Wv, Sv, gv, pv, dv, (zv.height - Pv) * hv * 3 + 3 * Nv);
        Pv--
      }
      return Wv
    }
    Sv.FACE_LEFT = [new hv.l(-1, -1, -1), new hv.l(1, -1, -1), new hv.l(-1, 1, -1), new hv.l(1, 1, -1)], Sv.FACE_RIGHT = [new hv.l(1, -1, 1), new hv.l(-1, -1, 1), new hv.l(1, 1, 1), new hv.l(-1, 1, 1)], Sv.FACE_FRONT = [new hv.l(1, -1, -1), new hv.l(1, -1, 1), new hv.l(1, 1, -1), new hv.l(1, 1, 1)], Sv.FACE_BACK = [new hv.l(-1, -1, 1), new hv.l(-1, -1, -1), new hv.l(-1, 1, 1), new hv.l(-1, 1, -1)], Sv.FACE_DOWN = [new hv.l(1, 1, -1), new hv.l(1, 1, 1), new hv.l(-1, 1, -1), new hv.l(-1, 1, 1)], Sv.FACE_UP = [new hv.l(-1, -1, -1), new hv.l(-1, -1, 1), new hv.l(1, -1, -1), new hv.l(1, -1, 1)];
    class lv {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(vv, zv, Pv) {
        const hv = new Uint8Array(vv.buffer, vv.byteOffset, vv.byteLength),
          Sv = pv(hv),
          ev = dv(hv, Sv),
          gv = Sv.width * Sv.height,
          Nv = new Float32Array(4 * gv);
        for (let pv = 0; pv < gv; pv += 1) Nv[4 * pv] = ev[3 * pv], Nv[4 * pv + 1] = ev[3 * pv + 1], Nv[4 * pv + 2] = ev[3 * pv + 2], Nv[4 * pv + 3] = 1;
        Pv(Sv.width, Sv.height, zv.generateMipMaps, !1, (() => {
          const vv = zv.ma();
          zv.type = 1, zv.format = 5, zv._gammaSpace = !1, vv._uploadDataToTextureDirectly(zv, Nv)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);