export const id = 317;
export const ids = [317];
export const modules = {
  41984: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      _HDRTextureLoader: () => jT
    });
    var WT = mT(37188);
    class zT {
      static ConvertPanoramaToCubemap(TT, UT, mT, WT) {
        let zT, MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          gT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!TT) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (TT.length != UT * mT * 3) {
          if (TT.length != UT * mT * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          zT = 4
        } else zT = 3;
        return {
          front: this.CreateCubemapTexture(WT, this.FACE_FRONT, TT, UT, mT, MT, gT, zT),
          back: this.CreateCubemapTexture(WT, this.FACE_BACK, TT, UT, mT, MT, gT, zT),
          left: this.CreateCubemapTexture(WT, this.FACE_LEFT, TT, UT, mT, MT, gT, zT),
          right: this.CreateCubemapTexture(WT, this.FACE_RIGHT, TT, UT, mT, MT, gT, zT),
          up: this.CreateCubemapTexture(WT, this.FACE_UP, TT, UT, mT, MT, gT, zT),
          down: this.CreateCubemapTexture(WT, this.FACE_DOWN, TT, UT, mT, MT, gT, zT),
          size: WT,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(TT, UT, mT, WT, zT, MT, gT, nT) {
        const HT = new ArrayBuffer(TT * TT * 4 * 3),
          kT = new Float32Array(HT),
          jT = MT ? Math.max(1, Math.round(WT / 4 / TT)) : 1,
          lT = 1 / jT,
          LT = lT * lT,
          pT = UT[1].subtract(UT[0]).scale(lT / TT),
          BT = UT[3].subtract(UT[2]).scale(lT / TT),
          ZT = 1 / TT;
        let cT = 0;
        for (let vT = 0; vT < TT; vT++)
          for (let MT = 0; MT < jT; MT++) {
            let MT = UT[0],
              HT = UT[2];
            for (let UT = 0; UT < TT; UT++)
              for (let lT = 0; lT < jT; lT++) {
                const jT = HT.subtract(MT).scale(cT).add(MT);
                jT.normalize();
                const lT = this.CalcProjectionSpherical(jT, mT, WT, zT, nT, gT);
                kT[vT * TT * 3 + 3 * UT + 0] += lT.r * LT, kT[vT * TT * 3 + 3 * UT + 1] += lT.g * LT, kT[vT * TT * 3 + 3 * UT + 2] += lT.b * LT, MT = MT.add(pT), HT = HT.add(BT)
              }
            cT += ZT * lT
          }
        return kT
      }
      static CalcProjectionSpherical(TT, UT, mT, WT, zT, MT) {
        let gT = Math.atan2(TT.z, TT.x);
        const nT = Math.acos(TT.y);
        for (; gT < -Math.PI;) gT += 2 * Math.PI;
        for (; gT > Math.PI;) gT -= 2 * Math.PI;
        let HT = gT / Math.PI;
        const kT = nT / Math.PI;
        HT = .5 * HT + .5;
        let jT = Math.round(HT * mT);
        jT < 0 ? jT = 0 : jT >= mT && (jT = mT - 1);
        let lT = Math.round(kT * WT);
        lT < 0 ? lT = 0 : lT >= WT && (lT = WT - 1);
        const LT = MT ? WT - lT - 1 : lT;
        return {
          r: UT[LT * mT * zT + jT * zT + 0],
          g: UT[LT * mT * zT + jT * zT + 1],
          b: UT[LT * mT * zT + jT * zT + 2]
        }
      }
    }

    function MT(TT, UT, mT, WT, zT, MT) {
      zT > 0 ? (zT = function(TT, UT) {
        return UT > 1023 ? TT * Math.pow(2, 1023) * Math.pow(2, UT - 1023) : UT < -1074 ? TT * Math.pow(2, -1074) * Math.pow(2, UT + 1074) : TT * Math.pow(2, UT)
      }(1, zT - 136), TT[MT + 0] = UT * zT, TT[MT + 1] = mT * zT, TT[MT + 2] = WT * zT) : (TT[MT + 0] = 0, TT[MT + 1] = 0, TT[MT + 2] = 0)
    }

    function gT(TT, UT) {
      let mT, WT = "";
      for (let zT = UT; zT < TT.length - UT && (mT = String.fromCharCode(TT[zT]), "\n" != mT); zT++) WT += mT;
      return WT
    }

    function nT(TT) {
      let UT = gT(TT, 0);
      if ("#" != UT[0] || "?" != UT[1]) throw "Bad HDR Format.";
      let mT = !1,
        WT = !1,
        zT = 0;
      do {
        zT += UT.length + 1, UT = gT(TT, zT), "FORMAT=32-bit_rle_rgbe" == UT ? WT = !0 : 0 == UT.length && (mT = !0)
      } while (!mT);
      if (!WT) throw "HDR Bad header format, unsupported FORMAT";
      zT += UT.length + 1, UT = gT(TT, zT);
      const MT = /^-Y (.*) \+X (.*)$/g.exec(UT);
      if (!MT || MT.length < 3) throw "HDR Bad header format, no size";
      const nT = parseInt(MT[2]),
        HT = parseInt(MT[1]);
      if (nT < 8 || nT > 32767) throw "HDR Bad header format, unsupported size";
      return zT += UT.length + 1, {
        height: HT,
        width: nT,
        dataPosition: zT
      }
    }

    function HT(TT, UT) {
      return function(TT, UT) {
        let mT = UT.height;
        const WT = UT.width;
        let zT, gT, nT, HT, jT, lT, LT, pT, BT = UT.dataPosition;
        const ZT = new ArrayBuffer(4 * WT),
          cT = new Uint8Array(ZT),
          vT = new ArrayBuffer(UT.width * UT.height * 4 * 3),
          fT = new Float32Array(vT);
        for (; mT > 0;) {
          if (zT = TT[BT++], gT = TT[BT++], nT = TT[BT++], HT = TT[BT++], 2 != zT || 2 != gT || 128 & nT || UT.width < 8 || UT.width > 32767) return kT(TT, UT);
          if ((nT << 8 | HT) != WT) throw "HDR Bad header format, wrong scan line width";
          for (lT = 0, pT = 0; pT < 4; pT++)
            for (LT = (pT + 1) * WT; lT < LT;)
              if (zT = TT[BT++], gT = TT[BT++], zT > 128) {
                if (jT = zT - 128, 0 == jT || jT > LT - lT) throw "HDR Bad Format, bad scanline data (run)";
                for (; jT-- > 0;) cT[lT++] = gT
              } else {
                if (jT = zT, 0 == jT || jT > LT - lT) throw "HDR Bad Format, bad scanline data (non-run)";
                if (cT[lT++] = gT, --jT > 0)
                  for (let UT = 0; UT < jT; UT++) cT[lT++] = TT[BT++]
              } for (pT = 0; pT < WT; pT++) zT = cT[pT], gT = cT[pT + WT], nT = cT[pT + 2 * WT], HT = cT[pT + 3 * WT], MT(fT, zT, gT, nT, HT, (UT.height - mT) * WT * 3 + 3 * pT);
          mT--
        }
        return fT
      }(TT, UT)
    }

    function kT(TT, UT) {
      let mT = UT.height;
      const WT = UT.width;
      let zT, gT, nT, HT, kT, jT = UT.dataPosition;
      const lT = new ArrayBuffer(UT.width * UT.height * 4 * 3),
        LT = new Float32Array(lT);
      for (; mT > 0;) {
        for (kT = 0; kT < UT.width; kT++) zT = TT[jT++], gT = TT[jT++], nT = TT[jT++], HT = TT[jT++], MT(LT, zT, gT, nT, HT, (UT.height - mT) * WT * 3 + 3 * kT);
        mT--
      }
      return LT
    }
    zT.FACE_LEFT = [new WT.p(-1, -1, -1), new WT.p(1, -1, -1), new WT.p(-1, 1, -1), new WT.p(1, 1, -1)], zT.FACE_RIGHT = [new WT.p(1, -1, 1), new WT.p(-1, -1, 1), new WT.p(1, 1, 1), new WT.p(-1, 1, 1)], zT.FACE_FRONT = [new WT.p(1, -1, -1), new WT.p(1, -1, 1), new WT.p(1, 1, -1), new WT.p(1, 1, 1)], zT.FACE_BACK = [new WT.p(-1, -1, 1), new WT.p(-1, -1, -1), new WT.p(-1, 1, 1), new WT.p(-1, 1, -1)], zT.FACE_DOWN = [new WT.p(1, 1, -1), new WT.p(1, 1, 1), new WT.p(-1, 1, -1), new WT.p(-1, 1, 1)], zT.FACE_UP = [new WT.p(-1, -1, -1), new WT.p(-1, -1, 1), new WT.p(1, -1, -1), new WT.p(1, -1, 1)];
    class jT {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(TT, UT, mT) {
        const WT = new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength),
          zT = nT(WT),
          MT = HT(WT, zT),
          gT = zT.width * zT.height,
          kT = new Float32Array(4 * gT);
        for (let nT = 0; nT < gT; nT += 1) kT[4 * nT] = MT[3 * nT], kT[4 * nT + 1] = MT[3 * nT + 1], kT[4 * nT + 2] = MT[3 * nT + 2], kT[4 * nT + 3] = 1;
        mT(zT.width, zT.height, UT.generateMipMaps, !1, (() => {
          const TT = UT.eB();
          UT.type = 1, UT.format = 5, UT._gammaSpace = !1, TT._uploadDataToTextureDirectly(UT, kT)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);