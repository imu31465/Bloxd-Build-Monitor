export const id = 303;
export const ids = [303];
export const modules = {
  41399: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      _HDRTextureLoader: () => IT
    });
    var lT = cT(36892);
    class MT {
      static ConvertPanoramaToCubemap(TT, kT, cT, lT) {
        let MT, KT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          OT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!TT) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (TT.length != kT * cT * 3) {
          if (TT.length != kT * cT * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          MT = 4
        } else MT = 3;
        return {
          front: this.CreateCubemapTexture(lT, this.FACE_FRONT, TT, kT, cT, KT, OT, MT),
          back: this.CreateCubemapTexture(lT, this.FACE_BACK, TT, kT, cT, KT, OT, MT),
          left: this.CreateCubemapTexture(lT, this.FACE_LEFT, TT, kT, cT, KT, OT, MT),
          right: this.CreateCubemapTexture(lT, this.FACE_RIGHT, TT, kT, cT, KT, OT, MT),
          up: this.CreateCubemapTexture(lT, this.FACE_UP, TT, kT, cT, KT, OT, MT),
          down: this.CreateCubemapTexture(lT, this.FACE_DOWN, TT, kT, cT, KT, OT, MT),
          size: lT,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(TT, kT, cT, lT, MT, KT, OT, yT) {
        const fT = new ArrayBuffer(TT * TT * 4 * 3),
          xT = new Float32Array(fT),
          IT = KT ? Math.max(1, Math.round(lT / 4 / TT)) : 1,
          AT = 1 / IT,
          CT = AT * AT,
          jT = kT[1].subtract(kT[0]).scale(AT / TT),
          vT = kT[3].subtract(kT[2]).scale(AT / TT),
          tT = 1 / TT;
        let hT = 0;
        for (let NT = 0; NT < TT; NT++)
          for (let KT = 0; KT < IT; KT++) {
            let KT = kT[0],
              fT = kT[2];
            for (let kT = 0; kT < TT; kT++)
              for (let AT = 0; AT < IT; AT++) {
                const IT = fT.subtract(KT).scale(hT).add(KT);
                IT.normalize();
                const AT = this.CalcProjectionSpherical(IT, cT, lT, MT, yT, OT);
                xT[NT * TT * 3 + 3 * kT + 0] += AT.r * CT, xT[NT * TT * 3 + 3 * kT + 1] += AT.g * CT, xT[NT * TT * 3 + 3 * kT + 2] += AT.b * CT, KT = KT.add(jT), fT = fT.add(vT)
              }
            hT += tT * AT
          }
        return xT
      }
      static CalcProjectionSpherical(TT, kT, cT, lT, MT, KT) {
        let OT = Math.atan2(TT.z, TT.x);
        const yT = Math.acos(TT.y);
        for (; OT < -Math.PI;) OT += 2 * Math.PI;
        for (; OT > Math.PI;) OT -= 2 * Math.PI;
        let fT = OT / Math.PI;
        const xT = yT / Math.PI;
        fT = .5 * fT + .5;
        let IT = Math.round(fT * cT);
        IT < 0 ? IT = 0 : IT >= cT && (IT = cT - 1);
        let AT = Math.round(xT * lT);
        AT < 0 ? AT = 0 : AT >= lT && (AT = lT - 1);
        const CT = KT ? lT - AT - 1 : AT;
        return {
          r: kT[CT * cT * MT + IT * MT + 0],
          g: kT[CT * cT * MT + IT * MT + 1],
          b: kT[CT * cT * MT + IT * MT + 2]
        }
      }
    }

    function KT(TT, kT, cT, lT, MT, KT) {
      MT > 0 ? (MT = function(TT, kT) {
        return kT > 1023 ? TT * Math.pow(2, 1023) * Math.pow(2, kT - 1023) : kT < -1074 ? TT * Math.pow(2, -1074) * Math.pow(2, kT + 1074) : TT * Math.pow(2, kT)
      }(1, MT - 136), TT[KT + 0] = kT * MT, TT[KT + 1] = cT * MT, TT[KT + 2] = lT * MT) : (TT[KT + 0] = 0, TT[KT + 1] = 0, TT[KT + 2] = 0)
    }

    function OT(TT, kT) {
      let cT, lT = "";
      for (let MT = kT; MT < TT.length - kT && (cT = String.fromCharCode(TT[MT]), "\n" != cT); MT++) lT += cT;
      return lT
    }

    function yT(TT) {
      let kT = OT(TT, 0);
      if ("#" != kT[0] || "?" != kT[1]) throw "Bad HDR Format.";
      let cT = !1,
        lT = !1,
        MT = 0;
      do {
        MT += kT.length + 1, kT = OT(TT, MT), "FORMAT=32-bit_rle_rgbe" == kT ? lT = !0 : 0 == kT.length && (cT = !0)
      } while (!cT);
      if (!lT) throw "HDR Bad header format, unsupported FORMAT";
      MT += kT.length + 1, kT = OT(TT, MT);
      const KT = /^-Y (.*) \+X (.*)$/g.exec(kT);
      if (!KT || KT.length < 3) throw "HDR Bad header format, no size";
      const yT = parseInt(KT[2]),
        fT = parseInt(KT[1]);
      if (yT < 8 || yT > 32767) throw "HDR Bad header format, unsupported size";
      return MT += kT.length + 1, {
        height: fT,
        width: yT,
        dataPosition: MT
      }
    }

    function fT(TT, kT) {
      return function(TT, kT) {
        let cT = kT.height;
        const lT = kT.width;
        let MT, OT, yT, fT, IT, AT, CT, jT, vT = kT.dataPosition;
        const tT = new ArrayBuffer(4 * lT),
          hT = new Uint8Array(tT),
          NT = new ArrayBuffer(kT.width * kT.height * 4 * 3),
          QT = new Float32Array(NT);
        for (; cT > 0;) {
          if (MT = TT[vT++], OT = TT[vT++], yT = TT[vT++], fT = TT[vT++], 2 != MT || 2 != OT || 128 & yT || kT.width < 8 || kT.width > 32767) return xT(TT, kT);
          if ((yT << 8 | fT) != lT) throw "HDR Bad header format, wrong scan line width";
          for (AT = 0, jT = 0; jT < 4; jT++)
            for (CT = (jT + 1) * lT; AT < CT;)
              if (MT = TT[vT++], OT = TT[vT++], MT > 128) {
                if (IT = MT - 128, 0 == IT || IT > CT - AT) throw "HDR Bad Format, bad scanline data (run)";
                for (; IT-- > 0;) hT[AT++] = OT
              } else {
                if (IT = MT, 0 == IT || IT > CT - AT) throw "HDR Bad Format, bad scanline data (non-run)";
                if (hT[AT++] = OT, --IT > 0)
                  for (let kT = 0; kT < IT; kT++) hT[AT++] = TT[vT++]
              } for (jT = 0; jT < lT; jT++) MT = hT[jT], OT = hT[jT + lT], yT = hT[jT + 2 * lT], fT = hT[jT + 3 * lT], KT(QT, MT, OT, yT, fT, (kT.height - cT) * lT * 3 + 3 * jT);
          cT--
        }
        return QT
      }(TT, kT)
    }

    function xT(TT, kT) {
      let cT = kT.height;
      const lT = kT.width;
      let MT, OT, yT, fT, xT, IT = kT.dataPosition;
      const AT = new ArrayBuffer(kT.width * kT.height * 4 * 3),
        CT = new Float32Array(AT);
      for (; cT > 0;) {
        for (xT = 0; xT < kT.width; xT++) MT = TT[IT++], OT = TT[IT++], yT = TT[IT++], fT = TT[IT++], KT(CT, MT, OT, yT, fT, (kT.height - cT) * lT * 3 + 3 * xT);
        cT--
      }
      return CT
    }
    MT.FACE_LEFT = [new lT.m(-1, -1, -1), new lT.m(1, -1, -1), new lT.m(-1, 1, -1), new lT.m(1, 1, -1)], MT.FACE_RIGHT = [new lT.m(1, -1, 1), new lT.m(-1, -1, 1), new lT.m(1, 1, 1), new lT.m(-1, 1, 1)], MT.FACE_FRONT = [new lT.m(1, -1, -1), new lT.m(1, -1, 1), new lT.m(1, 1, -1), new lT.m(1, 1, 1)], MT.FACE_BACK = [new lT.m(-1, -1, 1), new lT.m(-1, -1, -1), new lT.m(-1, 1, 1), new lT.m(-1, 1, -1)], MT.FACE_DOWN = [new lT.m(1, 1, -1), new lT.m(1, 1, 1), new lT.m(-1, 1, -1), new lT.m(-1, 1, 1)], MT.FACE_UP = [new lT.m(-1, -1, -1), new lT.m(-1, -1, 1), new lT.m(1, -1, -1), new lT.m(1, -1, 1)];
    class IT {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(TT, kT, cT) {
        const lT = new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength),
          MT = yT(lT),
          KT = fT(lT, MT),
          OT = MT.width * MT.height,
          xT = new Float32Array(4 * OT);
        for (let yT = 0; yT < OT; yT += 1) xT[4 * yT] = KT[3 * yT], xT[4 * yT + 1] = KT[3 * yT + 1], xT[4 * yT + 2] = KT[3 * yT + 2], xT[4 * yT + 3] = 1;
        cT(MT.width, MT.height, kT.generateMipMaps, !1, (() => {
          const TT = kT.Dv();
          kT.type = 1, kT.format = 5, kT._gammaSpace = !1, TT._uploadDataToTextureDirectly(kT, xT)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);