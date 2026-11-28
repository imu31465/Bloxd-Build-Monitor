export const id = 631;
export const ids = [631];
export const modules = {
  54255: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      _HDRTextureLoader: () => Qd
    });
    var Wd = md(38636);
    class Fd {
      static ConvertPanoramaToCubemap(dd, Od, md, Wd) {
        let Fd, Rd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Xd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!dd) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (dd.length != Od * md * 3) {
          if (dd.length != Od * md * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          Fd = 4
        } else Fd = 3;
        return {
          front: this.CreateCubemapTexture(Wd, this.FACE_FRONT, dd, Od, md, Rd, Xd, Fd),
          back: this.CreateCubemapTexture(Wd, this.FACE_BACK, dd, Od, md, Rd, Xd, Fd),
          left: this.CreateCubemapTexture(Wd, this.FACE_LEFT, dd, Od, md, Rd, Xd, Fd),
          right: this.CreateCubemapTexture(Wd, this.FACE_RIGHT, dd, Od, md, Rd, Xd, Fd),
          up: this.CreateCubemapTexture(Wd, this.FACE_UP, dd, Od, md, Rd, Xd, Fd),
          down: this.CreateCubemapTexture(Wd, this.FACE_DOWN, dd, Od, md, Rd, Xd, Fd),
          size: Wd,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
        const hd = new ArrayBuffer(dd * dd * 4 * 3),
          vd = new Float32Array(hd),
          Qd = Rd ? Math.max(1, Math.round(Wd / 4 / dd)) : 1,
          td = 1 / Qd,
          od = td * td,
          Nd = Od[1].subtract(Od[0]).scale(td / dd),
          qd = Od[3].subtract(Od[2]).scale(td / dd),
          Hd = 1 / dd;
        let yd = 0;
        for (let bd = 0; bd < dd; bd++)
          for (let Rd = 0; Rd < Qd; Rd++) {
            let Rd = Od[0],
              hd = Od[2];
            for (let Od = 0; Od < dd; Od++)
              for (let td = 0; td < Qd; td++) {
                const Qd = hd.subtract(Rd).scale(yd).add(Rd);
                Qd.normalize();
                const td = this.CalcProjectionSpherical(Qd, md, Wd, Fd, Kd, Xd);
                vd[bd * dd * 3 + 3 * Od + 0] += td.r * od, vd[bd * dd * 3 + 3 * Od + 1] += td.g * od, vd[bd * dd * 3 + 3 * Od + 2] += td.b * od, Rd = Rd.add(Nd), hd = hd.add(qd)
              }
            yd += Hd * td
          }
        return vd
      }
      static CalcProjectionSpherical(dd, Od, md, Wd, Fd, Rd) {
        let Xd = Math.atan2(dd.z, dd.x);
        const Kd = Math.acos(dd.y);
        for (; Xd < -Math.PI;) Xd += 2 * Math.PI;
        for (; Xd > Math.PI;) Xd -= 2 * Math.PI;
        let hd = Xd / Math.PI;
        const vd = Kd / Math.PI;
        hd = .5 * hd + .5;
        let Qd = Math.round(hd * md);
        Qd < 0 ? Qd = 0 : Qd >= md && (Qd = md - 1);
        let td = Math.round(vd * Wd);
        td < 0 ? td = 0 : td >= Wd && (td = Wd - 1);
        const od = Rd ? Wd - td - 1 : td;
        return {
          r: Od[od * md * Fd + Qd * Fd + 0],
          g: Od[od * md * Fd + Qd * Fd + 1],
          b: Od[od * md * Fd + Qd * Fd + 2]
        }
      }
    }

    function Rd(dd, Od, md, Wd, Fd, Rd) {
      Fd > 0 ? (Fd = function(dd, Od) {
        return Od > 1023 ? dd * Math.pow(2, 1023) * Math.pow(2, Od - 1023) : Od < -1074 ? dd * Math.pow(2, -1074) * Math.pow(2, Od + 1074) : dd * Math.pow(2, Od)
      }(1, Fd - 136), dd[Rd + 0] = Od * Fd, dd[Rd + 1] = md * Fd, dd[Rd + 2] = Wd * Fd) : (dd[Rd + 0] = 0, dd[Rd + 1] = 0, dd[Rd + 2] = 0)
    }

    function Xd(dd, Od) {
      let md, Wd = "";
      for (let Fd = Od; Fd < dd.length - Od && (md = String.fromCharCode(dd[Fd]), "\n" != md); Fd++) Wd += md;
      return Wd
    }

    function Kd(dd) {
      let Od = Xd(dd, 0);
      if ("#" != Od[0] || "?" != Od[1]) throw "Bad HDR Format.";
      let md = !1,
        Wd = !1,
        Fd = 0;
      do {
        Fd += Od.length + 1, Od = Xd(dd, Fd), "FORMAT=32-bit_rle_rgbe" == Od ? Wd = !0 : 0 == Od.length && (md = !0)
      } while (!md);
      if (!Wd) throw "HDR Bad header format, unsupported FORMAT";
      Fd += Od.length + 1, Od = Xd(dd, Fd);
      const Rd = /^-Y (.*) \+X (.*)$/g.exec(Od);
      if (!Rd || Rd.length < 3) throw "HDR Bad header format, no size";
      const Kd = parseInt(Rd[2]),
        hd = parseInt(Rd[1]);
      if (Kd < 8 || Kd > 32767) throw "HDR Bad header format, unsupported size";
      return Fd += Od.length + 1, {
        height: hd,
        width: Kd,
        dataPosition: Fd
      }
    }

    function hd(dd, Od) {
      return function(dd, Od) {
        let md = Od.height;
        const Wd = Od.width;
        let Fd, Xd, Kd, hd, Qd, td, od, Nd, qd = Od.dataPosition;
        const Hd = new ArrayBuffer(4 * Wd),
          yd = new Uint8Array(Hd),
          bd = new ArrayBuffer(Od.width * Od.height * 4 * 3),
          Td = new Float32Array(bd);
        for (; md > 0;) {
          if (Fd = dd[qd++], Xd = dd[qd++], Kd = dd[qd++], hd = dd[qd++], 2 != Fd || 2 != Xd || 128 & Kd || Od.width < 8 || Od.width > 32767) return vd(dd, Od);
          if ((Kd << 8 | hd) != Wd) throw "HDR Bad header format, wrong scan line width";
          for (td = 0, Nd = 0; Nd < 4; Nd++)
            for (od = (Nd + 1) * Wd; td < od;)
              if (Fd = dd[qd++], Xd = dd[qd++], Fd > 128) {
                if (Qd = Fd - 128, 0 == Qd || Qd > od - td) throw "HDR Bad Format, bad scanline data (run)";
                for (; Qd-- > 0;) yd[td++] = Xd
              } else {
                if (Qd = Fd, 0 == Qd || Qd > od - td) throw "HDR Bad Format, bad scanline data (non-run)";
                if (yd[td++] = Xd, --Qd > 0)
                  for (let Od = 0; Od < Qd; Od++) yd[td++] = dd[qd++]
              } for (Nd = 0; Nd < Wd; Nd++) Fd = yd[Nd], Xd = yd[Nd + Wd], Kd = yd[Nd + 2 * Wd], hd = yd[Nd + 3 * Wd], Rd(Td, Fd, Xd, Kd, hd, (Od.height - md) * Wd * 3 + 3 * Nd);
          md--
        }
        return Td
      }(dd, Od)
    }

    function vd(dd, Od) {
      let md = Od.height;
      const Wd = Od.width;
      let Fd, Xd, Kd, hd, vd, Qd = Od.dataPosition;
      const td = new ArrayBuffer(Od.width * Od.height * 4 * 3),
        od = new Float32Array(td);
      for (; md > 0;) {
        for (vd = 0; vd < Od.width; vd++) Fd = dd[Qd++], Xd = dd[Qd++], Kd = dd[Qd++], hd = dd[Qd++], Rd(od, Fd, Xd, Kd, hd, (Od.height - md) * Wd * 3 + 3 * vd);
        md--
      }
      return od
    }
    Fd.FACE_LEFT = [new Wd.j(-1, -1, -1), new Wd.j(1, -1, -1), new Wd.j(-1, 1, -1), new Wd.j(1, 1, -1)], Fd.FACE_RIGHT = [new Wd.j(1, -1, 1), new Wd.j(-1, -1, 1), new Wd.j(1, 1, 1), new Wd.j(-1, 1, 1)], Fd.FACE_FRONT = [new Wd.j(1, -1, -1), new Wd.j(1, -1, 1), new Wd.j(1, 1, -1), new Wd.j(1, 1, 1)], Fd.FACE_BACK = [new Wd.j(-1, -1, 1), new Wd.j(-1, -1, -1), new Wd.j(-1, 1, 1), new Wd.j(-1, 1, -1)], Fd.FACE_DOWN = [new Wd.j(1, 1, -1), new Wd.j(1, 1, 1), new Wd.j(-1, 1, -1), new Wd.j(-1, 1, 1)], Fd.FACE_UP = [new Wd.j(-1, -1, -1), new Wd.j(-1, -1, 1), new Wd.j(1, -1, -1), new Wd.j(1, -1, 1)];
    class Qd {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(dd, Od, md) {
        const Wd = new Uint8Array(dd.buffer, dd.byteOffset, dd.byteLength),
          Fd = Kd(Wd),
          Rd = hd(Wd, Fd),
          Xd = Fd.width * Fd.height,
          vd = new Float32Array(4 * Xd);
        for (let Kd = 0; Kd < Xd; Kd += 1) vd[4 * Kd] = Rd[3 * Kd], vd[4 * Kd + 1] = Rd[3 * Kd + 1], vd[4 * Kd + 2] = Rd[3 * Kd + 2], vd[4 * Kd + 3] = 1;
        md(Fd.width, Fd.height, Od.generateMipMaps, !1, (() => {
          const dd = Od.Iq();
          Od.type = 1, Od.format = 5, Od._gammaSpace = !1, dd._uploadDataToTextureDirectly(Od, vd)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);