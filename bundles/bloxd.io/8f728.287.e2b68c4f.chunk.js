export const id = 287;
export const ids = [287];
export const modules = {
  39780: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      _HDRTextureLoader: () => qB
    });
    var Vc = nc(35756);
    class Ic {
      static ConvertPanoramaToCubemap(cB, Bc, nc, Vc) {
        let Ic, rB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          uc = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!cB) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (cB.length != Bc * nc * 3) {
          if (cB.length != Bc * nc * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          Ic = 4
        } else Ic = 3;
        return {
          front: this.CreateCubemapTexture(Vc, this.FACE_FRONT, cB, Bc, nc, rB, uc, Ic),
          back: this.CreateCubemapTexture(Vc, this.FACE_BACK, cB, Bc, nc, rB, uc, Ic),
          left: this.CreateCubemapTexture(Vc, this.FACE_LEFT, cB, Bc, nc, rB, uc, Ic),
          right: this.CreateCubemapTexture(Vc, this.FACE_RIGHT, cB, Bc, nc, rB, uc, Ic),
          up: this.CreateCubemapTexture(Vc, this.FACE_UP, cB, Bc, nc, rB, uc, Ic),
          down: this.CreateCubemapTexture(Vc, this.FACE_DOWN, cB, Bc, nc, rB, uc, Ic),
          size: Vc,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
        const Mc = new ArrayBuffer(cB * cB * 4 * 3),
          Pc = new Float32Array(Mc),
          qB = rB ? Math.max(1, Math.round(Vc / 4 / cB)) : 1,
          Oc = 1 / qB,
          Tc = Oc * Oc,
          fc = Bc[1].subtract(Bc[0]).scale(Oc / cB),
          mB = Bc[3].subtract(Bc[2]).scale(Oc / cB),
          ec = 1 / cB;
        let tB = 0;
        for (let Sc = 0; Sc < cB; Sc++)
          for (let rB = 0; rB < qB; rB++) {
            let rB = Bc[0],
              Mc = Bc[2];
            for (let Bc = 0; Bc < cB; Bc++)
              for (let Oc = 0; Oc < qB; Oc++) {
                const qB = Mc.subtract(rB).scale(tB).add(rB);
                qB.normalize();
                const Oc = this.CalcProjectionSpherical(qB, nc, Vc, Ic, sc, uc);
                Pc[Sc * cB * 3 + 3 * Bc + 0] += Oc.r * Tc, Pc[Sc * cB * 3 + 3 * Bc + 1] += Oc.g * Tc, Pc[Sc * cB * 3 + 3 * Bc + 2] += Oc.b * Tc, rB = rB.add(fc), Mc = Mc.add(mB)
              }
            tB += ec * Oc
          }
        return Pc
      }
      static CalcProjectionSpherical(cB, Bc, nc, Vc, Ic, rB) {
        let uc = Math.atan2(cB.z, cB.x);
        const sc = Math.acos(cB.y);
        for (; uc < -Math.PI;) uc += 2 * Math.PI;
        for (; uc > Math.PI;) uc -= 2 * Math.PI;
        let Mc = uc / Math.PI;
        const Pc = sc / Math.PI;
        Mc = .5 * Mc + .5;
        let qB = Math.round(Mc * nc);
        qB < 0 ? qB = 0 : qB >= nc && (qB = nc - 1);
        let Oc = Math.round(Pc * Vc);
        Oc < 0 ? Oc = 0 : Oc >= Vc && (Oc = Vc - 1);
        const Tc = rB ? Vc - Oc - 1 : Oc;
        return {
          r: Bc[Tc * nc * Ic + qB * Ic + 0],
          g: Bc[Tc * nc * Ic + qB * Ic + 1],
          b: Bc[Tc * nc * Ic + qB * Ic + 2]
        }
      }
    }

    function rB(cB, Bc, nc, Vc, Ic, rB) {
      Ic > 0 ? (Ic = function(cB, Bc) {
        return Bc > 1023 ? cB * Math.pow(2, 1023) * Math.pow(2, Bc - 1023) : Bc < -1074 ? cB * Math.pow(2, -1074) * Math.pow(2, Bc + 1074) : cB * Math.pow(2, Bc)
      }(1, Ic - 136), cB[rB + 0] = Bc * Ic, cB[rB + 1] = nc * Ic, cB[rB + 2] = Vc * Ic) : (cB[rB + 0] = 0, cB[rB + 1] = 0, cB[rB + 2] = 0)
    }

    function uc(cB, Bc) {
      let nc, Vc = "";
      for (let Ic = Bc; Ic < cB.length - Bc && (nc = String.fromCharCode(cB[Ic]), "\n" != nc); Ic++) Vc += nc;
      return Vc
    }

    function sc(cB) {
      let Bc = uc(cB, 0);
      if ("#" != Bc[0] || "?" != Bc[1]) throw "Bad HDR Format.";
      let nc = !1,
        Vc = !1,
        Ic = 0;
      do {
        Ic += Bc.length + 1, Bc = uc(cB, Ic), "FORMAT=32-bit_rle_rgbe" == Bc ? Vc = !0 : 0 == Bc.length && (nc = !0)
      } while (!nc);
      if (!Vc) throw "HDR Bad header format, unsupported FORMAT";
      Ic += Bc.length + 1, Bc = uc(cB, Ic);
      const rB = /^-Y (.*) \+X (.*)$/g.exec(Bc);
      if (!rB || rB.length < 3) throw "HDR Bad header format, no size";
      const sc = parseInt(rB[2]),
        Mc = parseInt(rB[1]);
      if (sc < 8 || sc > 32767) throw "HDR Bad header format, unsupported size";
      return Ic += Bc.length + 1, {
        height: Mc,
        width: sc,
        dataPosition: Ic
      }
    }

    function Mc(cB, Bc) {
      return function(cB, Bc) {
        let nc = Bc.height;
        const Vc = Bc.width;
        let Ic, uc, sc, Mc, qB, Oc, Tc, fc, mB = Bc.dataPosition;
        const ec = new ArrayBuffer(4 * Vc),
          tB = new Uint8Array(ec),
          Sc = new ArrayBuffer(Bc.width * Bc.height * 4 * 3),
          yB = new Float32Array(Sc);
        for (; nc > 0;) {
          if (Ic = cB[mB++], uc = cB[mB++], sc = cB[mB++], Mc = cB[mB++], 2 != Ic || 2 != uc || 128 & sc || Bc.width < 8 || Bc.width > 32767) return Pc(cB, Bc);
          if ((sc << 8 | Mc) != Vc) throw "HDR Bad header format, wrong scan line width";
          for (Oc = 0, fc = 0; fc < 4; fc++)
            for (Tc = (fc + 1) * Vc; Oc < Tc;)
              if (Ic = cB[mB++], uc = cB[mB++], Ic > 128) {
                if (qB = Ic - 128, 0 == qB || qB > Tc - Oc) throw "HDR Bad Format, bad scanline data (run)";
                for (; qB-- > 0;) tB[Oc++] = uc
              } else {
                if (qB = Ic, 0 == qB || qB > Tc - Oc) throw "HDR Bad Format, bad scanline data (non-run)";
                if (tB[Oc++] = uc, --qB > 0)
                  for (let Bc = 0; Bc < qB; Bc++) tB[Oc++] = cB[mB++]
              } for (fc = 0; fc < Vc; fc++) Ic = tB[fc], uc = tB[fc + Vc], sc = tB[fc + 2 * Vc], Mc = tB[fc + 3 * Vc], rB(yB, Ic, uc, sc, Mc, (Bc.height - nc) * Vc * 3 + 3 * fc);
          nc--
        }
        return yB
      }(cB, Bc)
    }

    function Pc(cB, Bc) {
      let nc = Bc.height;
      const Vc = Bc.width;
      let Ic, uc, sc, Mc, Pc, qB = Bc.dataPosition;
      const Oc = new ArrayBuffer(Bc.width * Bc.height * 4 * 3),
        Tc = new Float32Array(Oc);
      for (; nc > 0;) {
        for (Pc = 0; Pc < Bc.width; Pc++) Ic = cB[qB++], uc = cB[qB++], sc = cB[qB++], Mc = cB[qB++], rB(Tc, Ic, uc, sc, Mc, (Bc.height - nc) * Vc * 3 + 3 * Pc);
        nc--
      }
      return Tc
    }
    Ic.FACE_LEFT = [new Vc.p(-1, -1, -1), new Vc.p(1, -1, -1), new Vc.p(-1, 1, -1), new Vc.p(1, 1, -1)], Ic.FACE_RIGHT = [new Vc.p(1, -1, 1), new Vc.p(-1, -1, 1), new Vc.p(1, 1, 1), new Vc.p(-1, 1, 1)], Ic.FACE_FRONT = [new Vc.p(1, -1, -1), new Vc.p(1, -1, 1), new Vc.p(1, 1, -1), new Vc.p(1, 1, 1)], Ic.FACE_BACK = [new Vc.p(-1, -1, 1), new Vc.p(-1, -1, -1), new Vc.p(-1, 1, 1), new Vc.p(-1, 1, -1)], Ic.FACE_DOWN = [new Vc.p(1, 1, -1), new Vc.p(1, 1, 1), new Vc.p(-1, 1, -1), new Vc.p(-1, 1, 1)], Ic.FACE_UP = [new Vc.p(-1, -1, -1), new Vc.p(-1, -1, 1), new Vc.p(1, -1, -1), new Vc.p(1, -1, 1)];
    class qB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(cB, Bc, nc) {
        const Vc = new Uint8Array(cB.buffer, cB.byteOffset, cB.byteLength),
          Ic = sc(Vc),
          rB = Mc(Vc, Ic),
          uc = Ic.width * Ic.height,
          Pc = new Float32Array(4 * uc);
        for (let sc = 0; sc < uc; sc += 1) Pc[4 * sc] = rB[3 * sc], Pc[4 * sc + 1] = rB[3 * sc + 1], Pc[4 * sc + 2] = rB[3 * sc + 2], Pc[4 * sc + 3] = 1;
        nc(Ic.width, Ic.height, Bc.generateMipMaps, !1, (() => {
          const cB = Bc.RV();
          Bc.type = 1, Bc.format = 5, Bc._gammaSpace = !1, cB._uploadDataToTextureDirectly(Bc, Pc)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);