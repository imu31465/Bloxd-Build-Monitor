export const id = 302;
export const ids = [302];
export const modules = {
  41191: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      _HDRTextureLoader: () => cU
    });
    var tU = gU(36600);
    class pU {
      static ConvertPanoramaToCubemap(UU, RU, gU, tU) {
        let pU, EU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          PU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!UU) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (UU.length != RU * gU * 3) {
          if (UU.length != RU * gU * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          pU = 4
        } else pU = 3;
        return {
          front: this.CreateCubemapTexture(tU, this.FACE_FRONT, UU, RU, gU, EU, PU, pU),
          back: this.CreateCubemapTexture(tU, this.FACE_BACK, UU, RU, gU, EU, PU, pU),
          left: this.CreateCubemapTexture(tU, this.FACE_LEFT, UU, RU, gU, EU, PU, pU),
          right: this.CreateCubemapTexture(tU, this.FACE_RIGHT, UU, RU, gU, EU, PU, pU),
          up: this.CreateCubemapTexture(tU, this.FACE_UP, UU, RU, gU, EU, PU, pU),
          down: this.CreateCubemapTexture(tU, this.FACE_DOWN, UU, RU, gU, EU, PU, pU),
          size: tU,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(UU, RU, gU, tU, pU, EU, PU, TU) {
        const qU = new ArrayBuffer(UU * UU * 4 * 3),
          KU = new Float32Array(qU),
          cU = EU ? Math.max(1, Math.round(tU / 4 / UU)) : 1,
          GU = 1 / cU,
          jU = GU * GU,
          uU = RU[1].subtract(RU[0]).scale(GU / UU),
          CU = RU[3].subtract(RU[2]).scale(GU / UU),
          hU = 1 / UU;
        let QU = 0;
        for (let eU = 0; eU < UU; eU++)
          for (let EU = 0; EU < cU; EU++) {
            let EU = RU[0],
              qU = RU[2];
            for (let RU = 0; RU < UU; RU++)
              for (let GU = 0; GU < cU; GU++) {
                const cU = qU.subtract(EU).scale(QU).add(EU);
                cU.normalize();
                const GU = this.CalcProjectionSpherical(cU, gU, tU, pU, TU, PU);
                KU[eU * UU * 3 + 3 * RU + 0] += GU.r * jU, KU[eU * UU * 3 + 3 * RU + 1] += GU.g * jU, KU[eU * UU * 3 + 3 * RU + 2] += GU.b * jU, EU = EU.add(uU), qU = qU.add(CU)
              }
            QU += hU * GU
          }
        return KU
      }
      static CalcProjectionSpherical(UU, RU, gU, tU, pU, EU) {
        let PU = Math.atan2(UU.z, UU.x);
        const TU = Math.acos(UU.y);
        for (; PU < -Math.PI;) PU += 2 * Math.PI;
        for (; PU > Math.PI;) PU -= 2 * Math.PI;
        let qU = PU / Math.PI;
        const KU = TU / Math.PI;
        qU = .5 * qU + .5;
        let cU = Math.round(qU * gU);
        cU < 0 ? cU = 0 : cU >= gU && (cU = gU - 1);
        let GU = Math.round(KU * tU);
        GU < 0 ? GU = 0 : GU >= tU && (GU = tU - 1);
        const jU = EU ? tU - GU - 1 : GU;
        return {
          r: RU[jU * gU * pU + cU * pU + 0],
          g: RU[jU * gU * pU + cU * pU + 1],
          b: RU[jU * gU * pU + cU * pU + 2]
        }
      }
    }

    function EU(UU, RU, gU, tU, pU, EU) {
      pU > 0 ? (pU = function(UU, RU) {
        return RU > 1023 ? UU * Math.pow(2, 1023) * Math.pow(2, RU - 1023) : RU < -1074 ? UU * Math.pow(2, -1074) * Math.pow(2, RU + 1074) : UU * Math.pow(2, RU)
      }(1, pU - 136), UU[EU + 0] = RU * pU, UU[EU + 1] = gU * pU, UU[EU + 2] = tU * pU) : (UU[EU + 0] = 0, UU[EU + 1] = 0, UU[EU + 2] = 0)
    }

    function PU(UU, RU) {
      let gU, tU = "";
      for (let pU = RU; pU < UU.length - RU && (gU = String.fromCharCode(UU[pU]), "\n" != gU); pU++) tU += gU;
      return tU
    }

    function TU(UU) {
      let RU = PU(UU, 0);
      if ("#" != RU[0] || "?" != RU[1]) throw "Bad HDR Format.";
      let gU = !1,
        tU = !1,
        pU = 0;
      do {
        pU += RU.length + 1, RU = PU(UU, pU), "FORMAT=32-bit_rle_rgbe" == RU ? tU = !0 : 0 == RU.length && (gU = !0)
      } while (!gU);
      if (!tU) throw "HDR Bad header format, unsupported FORMAT";
      pU += RU.length + 1, RU = PU(UU, pU);
      const EU = /^-Y (.*) \+X (.*)$/g.exec(RU);
      if (!EU || EU.length < 3) throw "HDR Bad header format, no size";
      const TU = parseInt(EU[2]),
        qU = parseInt(EU[1]);
      if (TU < 8 || TU > 32767) throw "HDR Bad header format, unsupported size";
      return pU += RU.length + 1, {
        height: qU,
        width: TU,
        dataPosition: pU
      }
    }

    function qU(UU, RU) {
      return function(UU, RU) {
        let gU = RU.height;
        const tU = RU.width;
        let pU, PU, TU, qU, cU, GU, jU, uU, CU = RU.dataPosition;
        const hU = new ArrayBuffer(4 * tU),
          QU = new Uint8Array(hU),
          eU = new ArrayBuffer(RU.width * RU.height * 4 * 3),
          WU = new Float32Array(eU);
        for (; gU > 0;) {
          if (pU = UU[CU++], PU = UU[CU++], TU = UU[CU++], qU = UU[CU++], 2 != pU || 2 != PU || 128 & TU || RU.width < 8 || RU.width > 32767) return KU(UU, RU);
          if ((TU << 8 | qU) != tU) throw "HDR Bad header format, wrong scan line width";
          for (GU = 0, uU = 0; uU < 4; uU++)
            for (jU = (uU + 1) * tU; GU < jU;)
              if (pU = UU[CU++], PU = UU[CU++], pU > 128) {
                if (cU = pU - 128, 0 == cU || cU > jU - GU) throw "HDR Bad Format, bad scanline data (run)";
                for (; cU-- > 0;) QU[GU++] = PU
              } else {
                if (cU = pU, 0 == cU || cU > jU - GU) throw "HDR Bad Format, bad scanline data (non-run)";
                if (QU[GU++] = PU, --cU > 0)
                  for (let RU = 0; RU < cU; RU++) QU[GU++] = UU[CU++]
              } for (uU = 0; uU < tU; uU++) pU = QU[uU], PU = QU[uU + tU], TU = QU[uU + 2 * tU], qU = QU[uU + 3 * tU], EU(WU, pU, PU, TU, qU, (RU.height - gU) * tU * 3 + 3 * uU);
          gU--
        }
        return WU
      }(UU, RU)
    }

    function KU(UU, RU) {
      let gU = RU.height;
      const tU = RU.width;
      let pU, PU, TU, qU, KU, cU = RU.dataPosition;
      const GU = new ArrayBuffer(RU.width * RU.height * 4 * 3),
        jU = new Float32Array(GU);
      for (; gU > 0;) {
        for (KU = 0; KU < RU.width; KU++) pU = UU[cU++], PU = UU[cU++], TU = UU[cU++], qU = UU[cU++], EU(jU, pU, PU, TU, qU, (RU.height - gU) * tU * 3 + 3 * KU);
        gU--
      }
      return jU
    }
    pU.FACE_LEFT = [new tU.n(-1, -1, -1), new tU.n(1, -1, -1), new tU.n(-1, 1, -1), new tU.n(1, 1, -1)], pU.FACE_RIGHT = [new tU.n(1, -1, 1), new tU.n(-1, -1, 1), new tU.n(1, 1, 1), new tU.n(-1, 1, 1)], pU.FACE_FRONT = [new tU.n(1, -1, -1), new tU.n(1, -1, 1), new tU.n(1, 1, -1), new tU.n(1, 1, 1)], pU.FACE_BACK = [new tU.n(-1, -1, 1), new tU.n(-1, -1, -1), new tU.n(-1, 1, 1), new tU.n(-1, 1, -1)], pU.FACE_DOWN = [new tU.n(1, 1, -1), new tU.n(1, 1, 1), new tU.n(-1, 1, -1), new tU.n(-1, 1, 1)], pU.FACE_UP = [new tU.n(-1, -1, -1), new tU.n(-1, -1, 1), new tU.n(1, -1, -1), new tU.n(1, -1, 1)];
    class cU {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(UU, RU, gU) {
        const tU = new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength),
          pU = TU(tU),
          EU = qU(tU, pU),
          PU = pU.width * pU.height,
          KU = new Float32Array(4 * PU);
        for (let TU = 0; TU < PU; TU += 1) KU[4 * TU] = EU[3 * TU], KU[4 * TU + 1] = EU[3 * TU + 1], KU[4 * TU + 2] = EU[3 * TU + 2], KU[4 * TU + 3] = 1;
        gU(pU.width, pU.height, RU.generateMipMaps, !1, (() => {
          const UU = RU.WC();
          RU.type = 1, RU.format = 5, RU._gammaSpace = !1, UU._uploadDataToTextureDirectly(RU, KU)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);