export const id = 312;
export const ids = [312];
export const modules = {
  41855: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      _HDRTextureLoader: () => Rm
    });
    var hm = fm(37185);
    class Am {
      static ConvertPanoramaToCubemap(mm, Tm, fm, hm) {
        let Am, am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          xm = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!mm) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (mm.length != Tm * fm * 3) {
          if (mm.length != Tm * fm * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          Am = 4
        } else Am = 3;
        return {
          front: this.CreateCubemapTexture(hm, this.FACE_FRONT, mm, Tm, fm, am, xm, Am),
          back: this.CreateCubemapTexture(hm, this.FACE_BACK, mm, Tm, fm, am, xm, Am),
          left: this.CreateCubemapTexture(hm, this.FACE_LEFT, mm, Tm, fm, am, xm, Am),
          right: this.CreateCubemapTexture(hm, this.FACE_RIGHT, mm, Tm, fm, am, xm, Am),
          up: this.CreateCubemapTexture(hm, this.FACE_UP, mm, Tm, fm, am, xm, Am),
          down: this.CreateCubemapTexture(hm, this.FACE_DOWN, mm, Tm, fm, am, xm, Am),
          size: hm,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(mm, Tm, fm, hm, Am, am, xm, wm) {
        const Dm = new ArrayBuffer(mm * mm * 4 * 3),
          im = new Float32Array(Dm),
          Rm = am ? Math.max(1, Math.round(hm / 4 / mm)) : 1,
          pm = 1 / Rm,
          Em = pm * pm,
          om = Tm[1].subtract(Tm[0]).scale(pm / mm),
          Om = Tm[3].subtract(Tm[2]).scale(pm / mm),
          Ym = 1 / mm;
        let qm = 0;
        for (let jm = 0; jm < mm; jm++)
          for (let am = 0; am < Rm; am++) {
            let am = Tm[0],
              Dm = Tm[2];
            for (let Tm = 0; Tm < mm; Tm++)
              for (let pm = 0; pm < Rm; pm++) {
                const Rm = Dm.subtract(am).scale(qm).add(am);
                Rm.normalize();
                const pm = this.CalcProjectionSpherical(Rm, fm, hm, Am, wm, xm);
                im[jm * mm * 3 + 3 * Tm + 0] += pm.r * Em, im[jm * mm * 3 + 3 * Tm + 1] += pm.g * Em, im[jm * mm * 3 + 3 * Tm + 2] += pm.b * Em, am = am.add(om), Dm = Dm.add(Om)
              }
            qm += Ym * pm
          }
        return im
      }
      static CalcProjectionSpherical(mm, Tm, fm, hm, Am, am) {
        let xm = Math.atan2(mm.z, mm.x);
        const wm = Math.acos(mm.y);
        for (; xm < -Math.PI;) xm += 2 * Math.PI;
        for (; xm > Math.PI;) xm -= 2 * Math.PI;
        let Dm = xm / Math.PI;
        const im = wm / Math.PI;
        Dm = .5 * Dm + .5;
        let Rm = Math.round(Dm * fm);
        Rm < 0 ? Rm = 0 : Rm >= fm && (Rm = fm - 1);
        let pm = Math.round(im * hm);
        pm < 0 ? pm = 0 : pm >= hm && (pm = hm - 1);
        const Em = am ? hm - pm - 1 : pm;
        return {
          r: Tm[Em * fm * Am + Rm * Am + 0],
          g: Tm[Em * fm * Am + Rm * Am + 1],
          b: Tm[Em * fm * Am + Rm * Am + 2]
        }
      }
    }

    function am(mm, Tm, fm, hm, Am, am) {
      Am > 0 ? (Am = function(mm, Tm) {
        return Tm > 1023 ? mm * Math.pow(2, 1023) * Math.pow(2, Tm - 1023) : Tm < -1074 ? mm * Math.pow(2, -1074) * Math.pow(2, Tm + 1074) : mm * Math.pow(2, Tm)
      }(1, Am - 136), mm[am + 0] = Tm * Am, mm[am + 1] = fm * Am, mm[am + 2] = hm * Am) : (mm[am + 0] = 0, mm[am + 1] = 0, mm[am + 2] = 0)
    }

    function xm(mm, Tm) {
      let fm, hm = "";
      for (let Am = Tm; Am < mm.length - Tm && (fm = String.fromCharCode(mm[Am]), "\n" != fm); Am++) hm += fm;
      return hm
    }

    function wm(mm) {
      let Tm = xm(mm, 0);
      if ("#" != Tm[0] || "?" != Tm[1]) throw "Bad HDR Format.";
      let fm = !1,
        hm = !1,
        Am = 0;
      do {
        Am += Tm.length + 1, Tm = xm(mm, Am), "FORMAT=32-bit_rle_rgbe" == Tm ? hm = !0 : 0 == Tm.length && (fm = !0)
      } while (!fm);
      if (!hm) throw "HDR Bad header format, unsupported FORMAT";
      Am += Tm.length + 1, Tm = xm(mm, Am);
      const am = /^-Y (.*) \+X (.*)$/g.exec(Tm);
      if (!am || am.length < 3) throw "HDR Bad header format, no size";
      const wm = parseInt(am[2]),
        Dm = parseInt(am[1]);
      if (wm < 8 || wm > 32767) throw "HDR Bad header format, unsupported size";
      return Am += Tm.length + 1, {
        height: Dm,
        width: wm,
        dataPosition: Am
      }
    }

    function Dm(mm, Tm) {
      return function(mm, Tm) {
        let fm = Tm.height;
        const hm = Tm.width;
        let Am, xm, wm, Dm, Rm, pm, Em, om, Om = Tm.dataPosition;
        const Ym = new ArrayBuffer(4 * hm),
          qm = new Uint8Array(Ym),
          jm = new ArrayBuffer(Tm.width * Tm.height * 4 * 3),
          Vm = new Float32Array(jm);
        for (; fm > 0;) {
          if (Am = mm[Om++], xm = mm[Om++], wm = mm[Om++], Dm = mm[Om++], 2 != Am || 2 != xm || 128 & wm || Tm.width < 8 || Tm.width > 32767) return im(mm, Tm);
          if ((wm << 8 | Dm) != hm) throw "HDR Bad header format, wrong scan line width";
          for (pm = 0, om = 0; om < 4; om++)
            for (Em = (om + 1) * hm; pm < Em;)
              if (Am = mm[Om++], xm = mm[Om++], Am > 128) {
                if (Rm = Am - 128, 0 == Rm || Rm > Em - pm) throw "HDR Bad Format, bad scanline data (run)";
                for (; Rm-- > 0;) qm[pm++] = xm
              } else {
                if (Rm = Am, 0 == Rm || Rm > Em - pm) throw "HDR Bad Format, bad scanline data (non-run)";
                if (qm[pm++] = xm, --Rm > 0)
                  for (let Tm = 0; Tm < Rm; Tm++) qm[pm++] = mm[Om++]
              } for (om = 0; om < hm; om++) Am = qm[om], xm = qm[om + hm], wm = qm[om + 2 * hm], Dm = qm[om + 3 * hm], am(Vm, Am, xm, wm, Dm, (Tm.height - fm) * hm * 3 + 3 * om);
          fm--
        }
        return Vm
      }(mm, Tm)
    }

    function im(mm, Tm) {
      let fm = Tm.height;
      const hm = Tm.width;
      let Am, xm, wm, Dm, im, Rm = Tm.dataPosition;
      const pm = new ArrayBuffer(Tm.width * Tm.height * 4 * 3),
        Em = new Float32Array(pm);
      for (; fm > 0;) {
        for (im = 0; im < Tm.width; im++) Am = mm[Rm++], xm = mm[Rm++], wm = mm[Rm++], Dm = mm[Rm++], am(Em, Am, xm, wm, Dm, (Tm.height - fm) * hm * 3 + 3 * im);
        fm--
      }
      return Em
    }
    Am.FACE_LEFT = [new hm.p(-1, -1, -1), new hm.p(1, -1, -1), new hm.p(-1, 1, -1), new hm.p(1, 1, -1)], Am.FACE_RIGHT = [new hm.p(1, -1, 1), new hm.p(-1, -1, 1), new hm.p(1, 1, 1), new hm.p(-1, 1, 1)], Am.FACE_FRONT = [new hm.p(1, -1, -1), new hm.p(1, -1, 1), new hm.p(1, 1, -1), new hm.p(1, 1, 1)], Am.FACE_BACK = [new hm.p(-1, -1, 1), new hm.p(-1, -1, -1), new hm.p(-1, 1, 1), new hm.p(-1, 1, -1)], Am.FACE_DOWN = [new hm.p(1, 1, -1), new hm.p(1, 1, 1), new hm.p(-1, 1, -1), new hm.p(-1, 1, 1)], Am.FACE_UP = [new hm.p(-1, -1, -1), new hm.p(-1, -1, 1), new hm.p(1, -1, -1), new hm.p(1, -1, 1)];
    class Rm {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(mm, Tm, fm) {
        const hm = new Uint8Array(mm.buffer, mm.byteOffset, mm.byteLength),
          Am = wm(hm),
          am = Dm(hm, Am),
          xm = Am.width * Am.height,
          im = new Float32Array(4 * xm);
        for (let wm = 0; wm < xm; wm += 1) im[4 * wm] = am[3 * wm], im[4 * wm + 1] = am[3 * wm + 1], im[4 * wm + 2] = am[3 * wm + 2], im[4 * wm + 3] = 1;
        fm(Am.width, Am.height, Tm.generateMipMaps, !1, (() => {
          const mm = Tm.dO();
          Tm.type = 1, Tm.format = 5, Tm._gammaSpace = !1, mm._uploadDataToTextureDirectly(Tm, im)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);