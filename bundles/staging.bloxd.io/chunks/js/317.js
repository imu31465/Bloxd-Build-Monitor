export const id = 317;
export const ids = [317];
export const modules = {
  42294: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      _HDRTextureLoader: () => VG
    });
    var wG = ZG(37439);
    class SG {
      static ConvertPanoramaToCubemap(GG, bG, ZG, wG) {
        let SG, LG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          yG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!GG) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (GG.length != bG * ZG * 3) {
          if (GG.length != bG * ZG * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          SG = 4
        } else SG = 3;
        return {
          front: this.CreateCubemapTexture(wG, this.FACE_FRONT, GG, bG, ZG, LG, yG, SG),
          back: this.CreateCubemapTexture(wG, this.FACE_BACK, GG, bG, ZG, LG, yG, SG),
          left: this.CreateCubemapTexture(wG, this.FACE_LEFT, GG, bG, ZG, LG, yG, SG),
          right: this.CreateCubemapTexture(wG, this.FACE_RIGHT, GG, bG, ZG, LG, yG, SG),
          up: this.CreateCubemapTexture(wG, this.FACE_UP, GG, bG, ZG, LG, yG, SG),
          down: this.CreateCubemapTexture(wG, this.FACE_DOWN, GG, bG, ZG, LG, yG, SG),
          size: wG,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(GG, bG, ZG, wG, SG, LG, yG, kG) {
        const UG = new ArrayBuffer(GG * GG * 4 * 3),
          YG = new Float32Array(UG),
          VG = LG ? Math.max(1, Math.round(wG / 4 / GG)) : 1,
          pG = 1 / VG,
          fG = pG * pG,
          QG = bG[1].subtract(bG[0]).scale(pG / GG),
          KG = bG[3].subtract(bG[2]).scale(pG / GG),
          hG = 1 / GG;
        let dG = 0;
        for (let JG = 0; JG < GG; JG++)
          for (let LG = 0; LG < VG; LG++) {
            let LG = bG[0],
              UG = bG[2];
            for (let bG = 0; bG < GG; bG++)
              for (let pG = 0; pG < VG; pG++) {
                const VG = UG.subtract(LG).scale(dG).add(LG);
                VG.normalize();
                const pG = this.CalcProjectionSpherical(VG, ZG, wG, SG, kG, yG);
                YG[JG * GG * 3 + 3 * bG + 0] += pG.r * fG, YG[JG * GG * 3 + 3 * bG + 1] += pG.g * fG, YG[JG * GG * 3 + 3 * bG + 2] += pG.b * fG, LG = LG.add(QG), UG = UG.add(KG)
              }
            dG += hG * pG
          }
        return YG
      }
      static CalcProjectionSpherical(GG, bG, ZG, wG, SG, LG) {
        let yG = Math.atan2(GG.z, GG.x);
        const kG = Math.acos(GG.y);
        for (; yG < -Math.PI;) yG += 2 * Math.PI;
        for (; yG > Math.PI;) yG -= 2 * Math.PI;
        let UG = yG / Math.PI;
        const YG = kG / Math.PI;
        UG = .5 * UG + .5;
        let VG = Math.round(UG * ZG);
        VG < 0 ? VG = 0 : VG >= ZG && (VG = ZG - 1);
        let pG = Math.round(YG * wG);
        pG < 0 ? pG = 0 : pG >= wG && (pG = wG - 1);
        const fG = LG ? wG - pG - 1 : pG;
        return {
          r: bG[fG * ZG * SG + VG * SG + 0],
          g: bG[fG * ZG * SG + VG * SG + 1],
          b: bG[fG * ZG * SG + VG * SG + 2]
        }
      }
    }

    function LG(GG, bG, ZG, wG, SG, LG) {
      SG > 0 ? (SG = function(GG, bG) {
        return bG > 1023 ? GG * Math.pow(2, 1023) * Math.pow(2, bG - 1023) : bG < -1074 ? GG * Math.pow(2, -1074) * Math.pow(2, bG + 1074) : GG * Math.pow(2, bG)
      }(1, SG - 136), GG[LG + 0] = bG * SG, GG[LG + 1] = ZG * SG, GG[LG + 2] = wG * SG) : (GG[LG + 0] = 0, GG[LG + 1] = 0, GG[LG + 2] = 0)
    }

    function yG(GG, bG) {
      let ZG, wG = "";
      for (let SG = bG; SG < GG.length - bG && (ZG = String.fromCharCode(GG[SG]), "\n" != ZG); SG++) wG += ZG;
      return wG
    }

    function kG(GG) {
      let bG = yG(GG, 0);
      if ("#" != bG[0] || "?" != bG[1]) throw "Bad HDR Format.";
      let ZG = !1,
        wG = !1,
        SG = 0;
      do {
        SG += bG.length + 1, bG = yG(GG, SG), "FORMAT=32-bit_rle_rgbe" == bG ? wG = !0 : 0 == bG.length && (ZG = !0)
      } while (!ZG);
      if (!wG) throw "HDR Bad header format, unsupported FORMAT";
      SG += bG.length + 1, bG = yG(GG, SG);
      const LG = /^-Y (.*) \+X (.*)$/g.exec(bG);
      if (!LG || LG.length < 3) throw "HDR Bad header format, no size";
      const kG = parseInt(LG[2]),
        UG = parseInt(LG[1]);
      if (kG < 8 || kG > 32767) throw "HDR Bad header format, unsupported size";
      return SG += bG.length + 1, {
        height: UG,
        width: kG,
        dataPosition: SG
      }
    }

    function UG(GG, bG) {
      return function(GG, bG) {
        let ZG = bG.height;
        const wG = bG.width;
        let SG, yG, kG, UG, VG, pG, fG, QG, KG = bG.dataPosition;
        const hG = new ArrayBuffer(4 * wG),
          dG = new Uint8Array(hG),
          JG = new ArrayBuffer(bG.width * bG.height * 4 * 3),
          rG = new Float32Array(JG);
        for (; ZG > 0;) {
          if (SG = GG[KG++], yG = GG[KG++], kG = GG[KG++], UG = GG[KG++], 2 != SG || 2 != yG || 128 & kG || bG.width < 8 || bG.width > 32767) return YG(GG, bG);
          if ((kG << 8 | UG) != wG) throw "HDR Bad header format, wrong scan line width";
          for (pG = 0, QG = 0; QG < 4; QG++)
            for (fG = (QG + 1) * wG; pG < fG;)
              if (SG = GG[KG++], yG = GG[KG++], SG > 128) {
                if (VG = SG - 128, 0 == VG || VG > fG - pG) throw "HDR Bad Format, bad scanline data (run)";
                for (; VG-- > 0;) dG[pG++] = yG
              } else {
                if (VG = SG, 0 == VG || VG > fG - pG) throw "HDR Bad Format, bad scanline data (non-run)";
                if (dG[pG++] = yG, --VG > 0)
                  for (let bG = 0; bG < VG; bG++) dG[pG++] = GG[KG++]
              } for (QG = 0; QG < wG; QG++) SG = dG[QG], yG = dG[QG + wG], kG = dG[QG + 2 * wG], UG = dG[QG + 3 * wG], LG(rG, SG, yG, kG, UG, (bG.height - ZG) * wG * 3 + 3 * QG);
          ZG--
        }
        return rG
      }(GG, bG)
    }

    function YG(GG, bG) {
      let ZG = bG.height;
      const wG = bG.width;
      let SG, yG, kG, UG, YG, VG = bG.dataPosition;
      const pG = new ArrayBuffer(bG.width * bG.height * 4 * 3),
        fG = new Float32Array(pG);
      for (; ZG > 0;) {
        for (YG = 0; YG < bG.width; YG++) SG = GG[VG++], yG = GG[VG++], kG = GG[VG++], UG = GG[VG++], LG(fG, SG, yG, kG, UG, (bG.height - ZG) * wG * 3 + 3 * YG);
        ZG--
      }
      return fG
    }
    SG.FACE_LEFT = [new wG.p(-1, -1, -1), new wG.p(1, -1, -1), new wG.p(-1, 1, -1), new wG.p(1, 1, -1)], SG.FACE_RIGHT = [new wG.p(1, -1, 1), new wG.p(-1, -1, 1), new wG.p(1, 1, 1), new wG.p(-1, 1, 1)], SG.FACE_FRONT = [new wG.p(1, -1, -1), new wG.p(1, -1, 1), new wG.p(1, 1, -1), new wG.p(1, 1, 1)], SG.FACE_BACK = [new wG.p(-1, -1, 1), new wG.p(-1, -1, -1), new wG.p(-1, 1, 1), new wG.p(-1, 1, -1)], SG.FACE_DOWN = [new wG.p(1, 1, -1), new wG.p(1, 1, 1), new wG.p(-1, 1, -1), new wG.p(-1, 1, 1)], SG.FACE_UP = [new wG.p(-1, -1, -1), new wG.p(-1, -1, 1), new wG.p(1, -1, -1), new wG.p(1, -1, 1)];
    class VG {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(GG, bG, ZG) {
        const wG = new Uint8Array(GG.buffer, GG.byteOffset, GG.byteLength),
          SG = kG(wG),
          LG = UG(wG, SG),
          yG = SG.width * SG.height,
          YG = new Float32Array(4 * yG);
        for (let kG = 0; kG < yG; kG += 1) YG[4 * kG] = LG[3 * kG], YG[4 * kG + 1] = LG[3 * kG + 1], YG[4 * kG + 2] = LG[3 * kG + 2], YG[4 * kG + 3] = 1;
        ZG(SG.width, SG.height, bG.generateMipMaps, !1, (() => {
          const GG = bG.CK();
          bG.type = 1, bG.format = 5, bG._gammaSpace = !1, GG._uploadDataToTextureDirectly(bG, YG)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);