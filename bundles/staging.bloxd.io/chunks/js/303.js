export const id = 303;
export const ids = [303];
export const modules = {
  41799: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      _HDRTextureLoader: () => Kd
    });
    var pd = kd(37251);
    class Nd {
      static ConvertPanoramaToCubemap(dd, Jd, kd, pd) {
        let Nd, Wd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Pd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!dd) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (dd.length != Jd * kd * 3) {
          if (dd.length != Jd * kd * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          Nd = 4
        } else Nd = 3;
        return {
          front: this.CreateCubemapTexture(pd, this.FACE_FRONT, dd, Jd, kd, Wd, Pd, Nd),
          back: this.CreateCubemapTexture(pd, this.FACE_BACK, dd, Jd, kd, Wd, Pd, Nd),
          left: this.CreateCubemapTexture(pd, this.FACE_LEFT, dd, Jd, kd, Wd, Pd, Nd),
          right: this.CreateCubemapTexture(pd, this.FACE_RIGHT, dd, Jd, kd, Wd, Pd, Nd),
          up: this.CreateCubemapTexture(pd, this.FACE_UP, dd, Jd, kd, Wd, Pd, Nd),
          down: this.CreateCubemapTexture(pd, this.FACE_DOWN, dd, Jd, kd, Wd, Pd, Nd),
          size: pd,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
        const gd = new ArrayBuffer(dd * dd * 4 * 3),
          Cd = new Float32Array(gd),
          Kd = Wd ? Math.max(1, Math.round(pd / 4 / dd)) : 1,
          od = 1 / Kd,
          ld = od * od,
          Qd = Jd[1].subtract(Jd[0]).scale(od / dd),
          Ld = Jd[3].subtract(Jd[2]).scale(od / dd),
          Od = 1 / dd;
        let ed = 0;
        for (let Rd = 0; Rd < dd; Rd++)
          for (let Wd = 0; Wd < Kd; Wd++) {
            let Wd = Jd[0],
              gd = Jd[2];
            for (let Jd = 0; Jd < dd; Jd++)
              for (let od = 0; od < Kd; od++) {
                const Kd = gd.subtract(Wd).scale(ed).add(Wd);
                Kd.normalize();
                const od = this.CalcProjectionSpherical(Kd, kd, pd, Nd, Zd, Pd);
                Cd[Rd * dd * 3 + 3 * Jd + 0] += od.r * ld, Cd[Rd * dd * 3 + 3 * Jd + 1] += od.g * ld, Cd[Rd * dd * 3 + 3 * Jd + 2] += od.b * ld, Wd = Wd.add(Qd), gd = gd.add(Ld)
              }
            ed += Od * od
          }
        return Cd
      }
      static CalcProjectionSpherical(dd, Jd, kd, pd, Nd, Wd) {
        let Pd = Math.atan2(dd.z, dd.x);
        const Zd = Math.acos(dd.y);
        for (; Pd < -Math.PI;) Pd += 2 * Math.PI;
        for (; Pd > Math.PI;) Pd -= 2 * Math.PI;
        let gd = Pd / Math.PI;
        const Cd = Zd / Math.PI;
        gd = .5 * gd + .5;
        let Kd = Math.round(gd * kd);
        Kd < 0 ? Kd = 0 : Kd >= kd && (Kd = kd - 1);
        let od = Math.round(Cd * pd);
        od < 0 ? od = 0 : od >= pd && (od = pd - 1);
        const ld = Wd ? pd - od - 1 : od;
        return {
          r: Jd[ld * kd * Nd + Kd * Nd + 0],
          g: Jd[ld * kd * Nd + Kd * Nd + 1],
          b: Jd[ld * kd * Nd + Kd * Nd + 2]
        }
      }
    }

    function Wd(dd, Jd, kd, pd, Nd, Wd) {
      Nd > 0 ? (Nd = function(dd, Jd) {
        return Jd > 1023 ? dd * Math.pow(2, 1023) * Math.pow(2, Jd - 1023) : Jd < -1074 ? dd * Math.pow(2, -1074) * Math.pow(2, Jd + 1074) : dd * Math.pow(2, Jd)
      }(1, Nd - 136), dd[Wd + 0] = Jd * Nd, dd[Wd + 1] = kd * Nd, dd[Wd + 2] = pd * Nd) : (dd[Wd + 0] = 0, dd[Wd + 1] = 0, dd[Wd + 2] = 0)
    }

    function Pd(dd, Jd) {
      let kd, pd = "";
      for (let Nd = Jd; Nd < dd.length - Jd && (kd = String.fromCharCode(dd[Nd]), "\n" != kd); Nd++) pd += kd;
      return pd
    }

    function Zd(dd) {
      let Jd = Pd(dd, 0);
      if ("#" != Jd[0] || "?" != Jd[1]) throw "Bad HDR Format.";
      let kd = !1,
        pd = !1,
        Nd = 0;
      do {
        Nd += Jd.length + 1, Jd = Pd(dd, Nd), "FORMAT=32-bit_rle_rgbe" == Jd ? pd = !0 : 0 == Jd.length && (kd = !0)
      } while (!kd);
      if (!pd) throw "HDR Bad header format, unsupported FORMAT";
      Nd += Jd.length + 1, Jd = Pd(dd, Nd);
      const Wd = /^-Y (.*) \+X (.*)$/g.exec(Jd);
      if (!Wd || Wd.length < 3) throw "HDR Bad header format, no size";
      const Zd = parseInt(Wd[2]),
        gd = parseInt(Wd[1]);
      if (Zd < 8 || Zd > 32767) throw "HDR Bad header format, unsupported size";
      return Nd += Jd.length + 1, {
        height: gd,
        width: Zd,
        dataPosition: Nd
      }
    }

    function gd(dd, Jd) {
      return function(dd, Jd) {
        let kd = Jd.height;
        const pd = Jd.width;
        let Nd, Pd, Zd, gd, Kd, od, ld, Qd, Ld = Jd.dataPosition;
        const Od = new ArrayBuffer(4 * pd),
          ed = new Uint8Array(Od),
          Rd = new ArrayBuffer(Jd.width * Jd.height * 4 * 3),
          Id = new Float32Array(Rd);
        for (; kd > 0;) {
          if (Nd = dd[Ld++], Pd = dd[Ld++], Zd = dd[Ld++], gd = dd[Ld++], 2 != Nd || 2 != Pd || 128 & Zd || Jd.width < 8 || Jd.width > 32767) return Cd(dd, Jd);
          if ((Zd << 8 | gd) != pd) throw "HDR Bad header format, wrong scan line width";
          for (od = 0, Qd = 0; Qd < 4; Qd++)
            for (ld = (Qd + 1) * pd; od < ld;)
              if (Nd = dd[Ld++], Pd = dd[Ld++], Nd > 128) {
                if (Kd = Nd - 128, 0 == Kd || Kd > ld - od) throw "HDR Bad Format, bad scanline data (run)";
                for (; Kd-- > 0;) ed[od++] = Pd
              } else {
                if (Kd = Nd, 0 == Kd || Kd > ld - od) throw "HDR Bad Format, bad scanline data (non-run)";
                if (ed[od++] = Pd, --Kd > 0)
                  for (let Jd = 0; Jd < Kd; Jd++) ed[od++] = dd[Ld++]
              } for (Qd = 0; Qd < pd; Qd++) Nd = ed[Qd], Pd = ed[Qd + pd], Zd = ed[Qd + 2 * pd], gd = ed[Qd + 3 * pd], Wd(Id, Nd, Pd, Zd, gd, (Jd.height - kd) * pd * 3 + 3 * Qd);
          kd--
        }
        return Id
      }(dd, Jd)
    }

    function Cd(dd, Jd) {
      let kd = Jd.height;
      const pd = Jd.width;
      let Nd, Pd, Zd, gd, Cd, Kd = Jd.dataPosition;
      const od = new ArrayBuffer(Jd.width * Jd.height * 4 * 3),
        ld = new Float32Array(od);
      for (; kd > 0;) {
        for (Cd = 0; Cd < Jd.width; Cd++) Nd = dd[Kd++], Pd = dd[Kd++], Zd = dd[Kd++], gd = dd[Kd++], Wd(ld, Nd, Pd, Zd, gd, (Jd.height - kd) * pd * 3 + 3 * Cd);
        kd--
      }
      return ld
    }
    Nd.FACE_LEFT = [new pd.n(-1, -1, -1), new pd.n(1, -1, -1), new pd.n(-1, 1, -1), new pd.n(1, 1, -1)], Nd.FACE_RIGHT = [new pd.n(1, -1, 1), new pd.n(-1, -1, 1), new pd.n(1, 1, 1), new pd.n(-1, 1, 1)], Nd.FACE_FRONT = [new pd.n(1, -1, -1), new pd.n(1, -1, 1), new pd.n(1, 1, -1), new pd.n(1, 1, 1)], Nd.FACE_BACK = [new pd.n(-1, -1, 1), new pd.n(-1, -1, -1), new pd.n(-1, 1, 1), new pd.n(-1, 1, -1)], Nd.FACE_DOWN = [new pd.n(1, 1, -1), new pd.n(1, 1, 1), new pd.n(-1, 1, -1), new pd.n(-1, 1, 1)], Nd.FACE_UP = [new pd.n(-1, -1, -1), new pd.n(-1, -1, 1), new pd.n(1, -1, -1), new pd.n(1, -1, 1)];
    class Kd {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(dd, Jd, kd) {
        const pd = new Uint8Array(dd.buffer, dd.byteOffset, dd.byteLength),
          Nd = Zd(pd),
          Wd = gd(pd, Nd),
          Pd = Nd.width * Nd.height,
          Cd = new Float32Array(4 * Pd);
        for (let Zd = 0; Zd < Pd; Zd += 1) Cd[4 * Zd] = Wd[3 * Zd], Cd[4 * Zd + 1] = Wd[3 * Zd + 1], Cd[4 * Zd + 2] = Wd[3 * Zd + 2], Cd[4 * Zd + 3] = 1;
        kd(Nd.width, Nd.height, Jd.generateMipMaps, !1, (() => {
          const dd = Jd.eL();
          Jd.type = 1, Jd.format = 5, Jd._gammaSpace = !1, dd._uploadDataToTextureDirectly(Jd, Cd)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);