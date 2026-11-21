export const id = 303;
export const ids = [303];
export const modules = {
  41245: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      _HDRTextureLoader: () => uQ
    });
    var LQ = wQ(36696);
    class qQ {
      static ConvertPanoramaToCubemap(QQ, FQ, wQ, LQ) {
        let qQ, oQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          DQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!QQ) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (QQ.length != FQ * wQ * 3) {
          if (QQ.length != FQ * wQ * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          qQ = 4
        } else qQ = 3;
        return {
          front: this.CreateCubemapTexture(LQ, this.FACE_FRONT, QQ, FQ, wQ, oQ, DQ, qQ),
          back: this.CreateCubemapTexture(LQ, this.FACE_BACK, QQ, FQ, wQ, oQ, DQ, qQ),
          left: this.CreateCubemapTexture(LQ, this.FACE_LEFT, QQ, FQ, wQ, oQ, DQ, qQ),
          right: this.CreateCubemapTexture(LQ, this.FACE_RIGHT, QQ, FQ, wQ, oQ, DQ, qQ),
          up: this.CreateCubemapTexture(LQ, this.FACE_UP, QQ, FQ, wQ, oQ, DQ, qQ),
          down: this.CreateCubemapTexture(LQ, this.FACE_DOWN, QQ, FQ, wQ, oQ, DQ, qQ),
          size: LQ,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
        const vQ = new ArrayBuffer(QQ * QQ * 4 * 3),
          mQ = new Float32Array(vQ),
          uQ = oQ ? Math.max(1, Math.round(LQ / 4 / QQ)) : 1,
          HQ = 1 / uQ,
          bQ = HQ * HQ,
          YQ = FQ[1].subtract(FQ[0]).scale(HQ / QQ),
          xQ = FQ[3].subtract(FQ[2]).scale(HQ / QQ),
          AQ = 1 / QQ;
        let tQ = 0;
        for (let eQ = 0; eQ < QQ; eQ++)
          for (let oQ = 0; oQ < uQ; oQ++) {
            let oQ = FQ[0],
              vQ = FQ[2];
            for (let FQ = 0; FQ < QQ; FQ++)
              for (let HQ = 0; HQ < uQ; HQ++) {
                const uQ = vQ.subtract(oQ).scale(tQ).add(oQ);
                uQ.normalize();
                const HQ = this.CalcProjectionSpherical(uQ, wQ, LQ, qQ, kQ, DQ);
                mQ[eQ * QQ * 3 + 3 * FQ + 0] += HQ.r * bQ, mQ[eQ * QQ * 3 + 3 * FQ + 1] += HQ.g * bQ, mQ[eQ * QQ * 3 + 3 * FQ + 2] += HQ.b * bQ, oQ = oQ.add(YQ), vQ = vQ.add(xQ)
              }
            tQ += AQ * HQ
          }
        return mQ
      }
      static CalcProjectionSpherical(QQ, FQ, wQ, LQ, qQ, oQ) {
        let DQ = Math.atan2(QQ.z, QQ.x);
        const kQ = Math.acos(QQ.y);
        for (; DQ < -Math.PI;) DQ += 2 * Math.PI;
        for (; DQ > Math.PI;) DQ -= 2 * Math.PI;
        let vQ = DQ / Math.PI;
        const mQ = kQ / Math.PI;
        vQ = .5 * vQ + .5;
        let uQ = Math.round(vQ * wQ);
        uQ < 0 ? uQ = 0 : uQ >= wQ && (uQ = wQ - 1);
        let HQ = Math.round(mQ * LQ);
        HQ < 0 ? HQ = 0 : HQ >= LQ && (HQ = LQ - 1);
        const bQ = oQ ? LQ - HQ - 1 : HQ;
        return {
          r: FQ[bQ * wQ * qQ + uQ * qQ + 0],
          g: FQ[bQ * wQ * qQ + uQ * qQ + 1],
          b: FQ[bQ * wQ * qQ + uQ * qQ + 2]
        }
      }
    }

    function oQ(QQ, FQ, wQ, LQ, qQ, oQ) {
      qQ > 0 ? (qQ = function(QQ, FQ) {
        return FQ > 1023 ? QQ * Math.pow(2, 1023) * Math.pow(2, FQ - 1023) : FQ < -1074 ? QQ * Math.pow(2, -1074) * Math.pow(2, FQ + 1074) : QQ * Math.pow(2, FQ)
      }(1, qQ - 136), QQ[oQ + 0] = FQ * qQ, QQ[oQ + 1] = wQ * qQ, QQ[oQ + 2] = LQ * qQ) : (QQ[oQ + 0] = 0, QQ[oQ + 1] = 0, QQ[oQ + 2] = 0)
    }

    function DQ(QQ, FQ) {
      let wQ, LQ = "";
      for (let qQ = FQ; qQ < QQ.length - FQ && (wQ = String.fromCharCode(QQ[qQ]), "\n" != wQ); qQ++) LQ += wQ;
      return LQ
    }

    function kQ(QQ) {
      let FQ = DQ(QQ, 0);
      if ("#" != FQ[0] || "?" != FQ[1]) throw "Bad HDR Format.";
      let wQ = !1,
        LQ = !1,
        qQ = 0;
      do {
        qQ += FQ.length + 1, FQ = DQ(QQ, qQ), "FORMAT=32-bit_rle_rgbe" == FQ ? LQ = !0 : 0 == FQ.length && (wQ = !0)
      } while (!wQ);
      if (!LQ) throw "HDR Bad header format, unsupported FORMAT";
      qQ += FQ.length + 1, FQ = DQ(QQ, qQ);
      const oQ = /^-Y (.*) \+X (.*)$/g.exec(FQ);
      if (!oQ || oQ.length < 3) throw "HDR Bad header format, no size";
      const kQ = parseInt(oQ[2]),
        vQ = parseInt(oQ[1]);
      if (kQ < 8 || kQ > 32767) throw "HDR Bad header format, unsupported size";
      return qQ += FQ.length + 1, {
        height: vQ,
        width: kQ,
        dataPosition: qQ
      }
    }

    function vQ(QQ, FQ) {
      return function(QQ, FQ) {
        let wQ = FQ.height;
        const LQ = FQ.width;
        let qQ, DQ, kQ, vQ, uQ, HQ, bQ, YQ, xQ = FQ.dataPosition;
        const AQ = new ArrayBuffer(4 * LQ),
          tQ = new Uint8Array(AQ),
          eQ = new ArrayBuffer(FQ.width * FQ.height * 4 * 3),
          MQ = new Float32Array(eQ);
        for (; wQ > 0;) {
          if (qQ = QQ[xQ++], DQ = QQ[xQ++], kQ = QQ[xQ++], vQ = QQ[xQ++], 2 != qQ || 2 != DQ || 128 & kQ || FQ.width < 8 || FQ.width > 32767) return mQ(QQ, FQ);
          if ((kQ << 8 | vQ) != LQ) throw "HDR Bad header format, wrong scan line width";
          for (HQ = 0, YQ = 0; YQ < 4; YQ++)
            for (bQ = (YQ + 1) * LQ; HQ < bQ;)
              if (qQ = QQ[xQ++], DQ = QQ[xQ++], qQ > 128) {
                if (uQ = qQ - 128, 0 == uQ || uQ > bQ - HQ) throw "HDR Bad Format, bad scanline data (run)";
                for (; uQ-- > 0;) tQ[HQ++] = DQ
              } else {
                if (uQ = qQ, 0 == uQ || uQ > bQ - HQ) throw "HDR Bad Format, bad scanline data (non-run)";
                if (tQ[HQ++] = DQ, --uQ > 0)
                  for (let FQ = 0; FQ < uQ; FQ++) tQ[HQ++] = QQ[xQ++]
              } for (YQ = 0; YQ < LQ; YQ++) qQ = tQ[YQ], DQ = tQ[YQ + LQ], kQ = tQ[YQ + 2 * LQ], vQ = tQ[YQ + 3 * LQ], oQ(MQ, qQ, DQ, kQ, vQ, (FQ.height - wQ) * LQ * 3 + 3 * YQ);
          wQ--
        }
        return MQ
      }(QQ, FQ)
    }

    function mQ(QQ, FQ) {
      let wQ = FQ.height;
      const LQ = FQ.width;
      let qQ, DQ, kQ, vQ, mQ, uQ = FQ.dataPosition;
      const HQ = new ArrayBuffer(FQ.width * FQ.height * 4 * 3),
        bQ = new Float32Array(HQ);
      for (; wQ > 0;) {
        for (mQ = 0; mQ < FQ.width; mQ++) qQ = QQ[uQ++], DQ = QQ[uQ++], kQ = QQ[uQ++], vQ = QQ[uQ++], oQ(bQ, qQ, DQ, kQ, vQ, (FQ.height - wQ) * LQ * 3 + 3 * mQ);
        wQ--
      }
      return bQ
    }
    qQ.FACE_LEFT = [new LQ.p(-1, -1, -1), new LQ.p(1, -1, -1), new LQ.p(-1, 1, -1), new LQ.p(1, 1, -1)], qQ.FACE_RIGHT = [new LQ.p(1, -1, 1), new LQ.p(-1, -1, 1), new LQ.p(1, 1, 1), new LQ.p(-1, 1, 1)], qQ.FACE_FRONT = [new LQ.p(1, -1, -1), new LQ.p(1, -1, 1), new LQ.p(1, 1, -1), new LQ.p(1, 1, 1)], qQ.FACE_BACK = [new LQ.p(-1, -1, 1), new LQ.p(-1, -1, -1), new LQ.p(-1, 1, 1), new LQ.p(-1, 1, -1)], qQ.FACE_DOWN = [new LQ.p(1, 1, -1), new LQ.p(1, 1, 1), new LQ.p(-1, 1, -1), new LQ.p(-1, 1, 1)], qQ.FACE_UP = [new LQ.p(-1, -1, -1), new LQ.p(-1, -1, 1), new LQ.p(1, -1, -1), new LQ.p(1, -1, 1)];
    class uQ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(QQ, FQ, wQ) {
        const LQ = new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength),
          qQ = kQ(LQ),
          oQ = vQ(LQ, qQ),
          DQ = qQ.width * qQ.height,
          mQ = new Float32Array(4 * DQ);
        for (let kQ = 0; kQ < DQ; kQ += 1) mQ[4 * kQ] = oQ[3 * kQ], mQ[4 * kQ + 1] = oQ[3 * kQ + 1], mQ[4 * kQ + 2] = oQ[3 * kQ + 2], mQ[4 * kQ + 3] = 1;
        wQ(qQ.width, qQ.height, FQ.generateMipMaps, !1, (() => {
          const QQ = FQ.Wx();
          FQ.type = 1, FQ.format = 5, FQ._gammaSpace = !1, QQ._uploadDataToTextureDirectly(FQ, mQ)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);