export const id = 302;
export const ids = [302];
export const modules = {
  40650: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      _HDRTextureLoader: () => ST
    });
    var iT = IT(36118);
    class zT {
      static ConvertPanoramaToCubemap(TT, oT, IT, iT) {
        let zT, kT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          WT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!TT) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (TT.length != oT * IT * 3) {
          if (TT.length != oT * IT * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          zT = 4
        } else zT = 3;
        return {
          front: this.CreateCubemapTexture(iT, this.FACE_FRONT, TT, oT, IT, kT, WT, zT),
          back: this.CreateCubemapTexture(iT, this.FACE_BACK, TT, oT, IT, kT, WT, zT),
          left: this.CreateCubemapTexture(iT, this.FACE_LEFT, TT, oT, IT, kT, WT, zT),
          right: this.CreateCubemapTexture(iT, this.FACE_RIGHT, TT, oT, IT, kT, WT, zT),
          up: this.CreateCubemapTexture(iT, this.FACE_UP, TT, oT, IT, kT, WT, zT),
          down: this.CreateCubemapTexture(iT, this.FACE_DOWN, TT, oT, IT, kT, WT, zT),
          size: iT,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(TT, oT, IT, iT, zT, kT, WT, XT) {
        const BT = new ArrayBuffer(TT * TT * 4 * 3),
          FT = new Float32Array(BT),
          ST = kT ? Math.max(1, Math.round(iT / 4 / TT)) : 1,
          DT = 1 / ST,
          LT = DT * DT,
          xT = oT[1].subtract(oT[0]).scale(DT / TT),
          cT = oT[3].subtract(oT[2]).scale(DT / TT),
          KT = 1 / TT;
        let MT = 0;
        for (let rT = 0; rT < TT; rT++)
          for (let kT = 0; kT < ST; kT++) {
            let kT = oT[0],
              BT = oT[2];
            for (let oT = 0; oT < TT; oT++)
              for (let DT = 0; DT < ST; DT++) {
                const ST = BT.subtract(kT).scale(MT).add(kT);
                ST.normalize();
                const DT = this.CalcProjectionSpherical(ST, IT, iT, zT, XT, WT);
                FT[rT * TT * 3 + 3 * oT + 0] += DT.r * LT, FT[rT * TT * 3 + 3 * oT + 1] += DT.g * LT, FT[rT * TT * 3 + 3 * oT + 2] += DT.b * LT, kT = kT.add(xT), BT = BT.add(cT)
              }
            MT += KT * DT
          }
        return FT
      }
      static CalcProjectionSpherical(TT, oT, IT, iT, zT, kT) {
        let WT = Math.atan2(TT.z, TT.x);
        const XT = Math.acos(TT.y);
        for (; WT < -Math.PI;) WT += 2 * Math.PI;
        for (; WT > Math.PI;) WT -= 2 * Math.PI;
        let BT = WT / Math.PI;
        const FT = XT / Math.PI;
        BT = .5 * BT + .5;
        let ST = Math.round(BT * IT);
        ST < 0 ? ST = 0 : ST >= IT && (ST = IT - 1);
        let DT = Math.round(FT * iT);
        DT < 0 ? DT = 0 : DT >= iT && (DT = iT - 1);
        const LT = kT ? iT - DT - 1 : DT;
        return {
          r: oT[LT * IT * zT + ST * zT + 0],
          g: oT[LT * IT * zT + ST * zT + 1],
          b: oT[LT * IT * zT + ST * zT + 2]
        }
      }
    }

    function kT(TT, oT, IT, iT, zT, kT) {
      zT > 0 ? (zT = function(TT, oT) {
        return oT > 1023 ? TT * Math.pow(2, 1023) * Math.pow(2, oT - 1023) : oT < -1074 ? TT * Math.pow(2, -1074) * Math.pow(2, oT + 1074) : TT * Math.pow(2, oT)
      }(1, zT - 136), TT[kT + 0] = oT * zT, TT[kT + 1] = IT * zT, TT[kT + 2] = iT * zT) : (TT[kT + 0] = 0, TT[kT + 1] = 0, TT[kT + 2] = 0)
    }

    function WT(TT, oT) {
      let IT, iT = "";
      for (let zT = oT; zT < TT.length - oT && (IT = String.fromCharCode(TT[zT]), "\n" != IT); zT++) iT += IT;
      return iT
    }

    function XT(TT) {
      let oT = WT(TT, 0);
      if ("#" != oT[0] || "?" != oT[1]) throw "Bad HDR Format.";
      let IT = !1,
        iT = !1,
        zT = 0;
      do {
        zT += oT.length + 1, oT = WT(TT, zT), "FORMAT=32-bit_rle_rgbe" == oT ? iT = !0 : 0 == oT.length && (IT = !0)
      } while (!IT);
      if (!iT) throw "HDR Bad header format, unsupported FORMAT";
      zT += oT.length + 1, oT = WT(TT, zT);
      const kT = /^-Y (.*) \+X (.*)$/g.exec(oT);
      if (!kT || kT.length < 3) throw "HDR Bad header format, no size";
      const XT = parseInt(kT[2]),
        BT = parseInt(kT[1]);
      if (XT < 8 || XT > 32767) throw "HDR Bad header format, unsupported size";
      return zT += oT.length + 1, {
        height: BT,
        width: XT,
        dataPosition: zT
      }
    }

    function BT(TT, oT) {
      return function(TT, oT) {
        let IT = oT.height;
        const iT = oT.width;
        let zT, WT, XT, BT, ST, DT, LT, xT, cT = oT.dataPosition;
        const KT = new ArrayBuffer(4 * iT),
          MT = new Uint8Array(KT),
          rT = new ArrayBuffer(oT.width * oT.height * 4 * 3),
          AT = new Float32Array(rT);
        for (; IT > 0;) {
          if (zT = TT[cT++], WT = TT[cT++], XT = TT[cT++], BT = TT[cT++], 2 != zT || 2 != WT || 128 & XT || oT.width < 8 || oT.width > 32767) return FT(TT, oT);
          if ((XT << 8 | BT) != iT) throw "HDR Bad header format, wrong scan line width";
          for (DT = 0, xT = 0; xT < 4; xT++)
            for (LT = (xT + 1) * iT; DT < LT;)
              if (zT = TT[cT++], WT = TT[cT++], zT > 128) {
                if (ST = zT - 128, 0 == ST || ST > LT - DT) throw "HDR Bad Format, bad scanline data (run)";
                for (; ST-- > 0;) MT[DT++] = WT
              } else {
                if (ST = zT, 0 == ST || ST > LT - DT) throw "HDR Bad Format, bad scanline data (non-run)";
                if (MT[DT++] = WT, --ST > 0)
                  for (let oT = 0; oT < ST; oT++) MT[DT++] = TT[cT++]
              } for (xT = 0; xT < iT; xT++) zT = MT[xT], WT = MT[xT + iT], XT = MT[xT + 2 * iT], BT = MT[xT + 3 * iT], kT(AT, zT, WT, XT, BT, (oT.height - IT) * iT * 3 + 3 * xT);
          IT--
        }
        return AT
      }(TT, oT)
    }

    function FT(TT, oT) {
      let IT = oT.height;
      const iT = oT.width;
      let zT, WT, XT, BT, FT, ST = oT.dataPosition;
      const DT = new ArrayBuffer(oT.width * oT.height * 4 * 3),
        LT = new Float32Array(DT);
      for (; IT > 0;) {
        for (FT = 0; FT < oT.width; FT++) zT = TT[ST++], WT = TT[ST++], XT = TT[ST++], BT = TT[ST++], kT(LT, zT, WT, XT, BT, (oT.height - IT) * iT * 3 + 3 * FT);
        IT--
      }
      return LT
    }
    zT.FACE_LEFT = [new iT.m(-1, -1, -1), new iT.m(1, -1, -1), new iT.m(-1, 1, -1), new iT.m(1, 1, -1)], zT.FACE_RIGHT = [new iT.m(1, -1, 1), new iT.m(-1, -1, 1), new iT.m(1, 1, 1), new iT.m(-1, 1, 1)], zT.FACE_FRONT = [new iT.m(1, -1, -1), new iT.m(1, -1, 1), new iT.m(1, 1, -1), new iT.m(1, 1, 1)], zT.FACE_BACK = [new iT.m(-1, -1, 1), new iT.m(-1, -1, -1), new iT.m(-1, 1, 1), new iT.m(-1, 1, -1)], zT.FACE_DOWN = [new iT.m(1, 1, -1), new iT.m(1, 1, 1), new iT.m(-1, 1, -1), new iT.m(-1, 1, 1)], zT.FACE_UP = [new iT.m(-1, -1, -1), new iT.m(-1, -1, 1), new iT.m(1, -1, -1), new iT.m(1, -1, 1)];
    class ST {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(TT, oT, IT) {
        const iT = new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength),
          zT = XT(iT),
          kT = BT(iT, zT),
          WT = zT.width * zT.height,
          FT = new Float32Array(4 * WT);
        for (let XT = 0; XT < WT; XT += 1) FT[4 * XT] = kT[3 * XT], FT[4 * XT + 1] = kT[3 * XT + 1], FT[4 * XT + 2] = kT[3 * XT + 2], FT[4 * XT + 3] = 1;
        IT(zT.width, zT.height, oT.generateMipMaps, !1, (() => {
          const TT = oT.Zc();
          oT.type = 1, oT.format = 5, oT._gammaSpace = !1, TT._uploadDataToTextureDirectly(oT, FT)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);