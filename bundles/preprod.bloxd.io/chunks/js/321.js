export const id = 321;
export const ids = [321];
export const modules = {
  42086: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      _HDRTextureLoader: () => gQ
    });
    var wQ = XQ(37370);
    class qQ {
      static ConvertPanoramaToCubemap(QQ, WQ, XQ, wQ) {
        let qQ, TQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          zQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!QQ) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (QQ.length != WQ * XQ * 3) {
          if (QQ.length != WQ * XQ * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          qQ = 4
        } else qQ = 3;
        return {
          front: this.CreateCubemapTexture(wQ, this.FACE_FRONT, QQ, WQ, XQ, TQ, zQ, qQ),
          back: this.CreateCubemapTexture(wQ, this.FACE_BACK, QQ, WQ, XQ, TQ, zQ, qQ),
          left: this.CreateCubemapTexture(wQ, this.FACE_LEFT, QQ, WQ, XQ, TQ, zQ, qQ),
          right: this.CreateCubemapTexture(wQ, this.FACE_RIGHT, QQ, WQ, XQ, TQ, zQ, qQ),
          up: this.CreateCubemapTexture(wQ, this.FACE_UP, QQ, WQ, XQ, TQ, zQ, qQ),
          down: this.CreateCubemapTexture(wQ, this.FACE_DOWN, QQ, WQ, XQ, TQ, zQ, qQ),
          size: wQ,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
        const FQ = new ArrayBuffer(QQ * QQ * 4 * 3),
          PQ = new Float32Array(FQ),
          gQ = TQ ? Math.max(1, Math.round(wQ / 4 / QQ)) : 1,
          JQ = 1 / gQ,
          rQ = JQ * JQ,
          IQ = WQ[1].subtract(WQ[0]).scale(JQ / QQ),
          jQ = WQ[3].subtract(WQ[2]).scale(JQ / QQ),
          BQ = 1 / QQ;
        let yQ = 0;
        for (let VQ = 0; VQ < QQ; VQ++)
          for (let TQ = 0; TQ < gQ; TQ++) {
            let TQ = WQ[0],
              FQ = WQ[2];
            for (let WQ = 0; WQ < QQ; WQ++)
              for (let JQ = 0; JQ < gQ; JQ++) {
                const gQ = FQ.subtract(TQ).scale(yQ).add(TQ);
                gQ.normalize();
                const JQ = this.CalcProjectionSpherical(gQ, XQ, wQ, qQ, sQ, zQ);
                PQ[VQ * QQ * 3 + 3 * WQ + 0] += JQ.r * rQ, PQ[VQ * QQ * 3 + 3 * WQ + 1] += JQ.g * rQ, PQ[VQ * QQ * 3 + 3 * WQ + 2] += JQ.b * rQ, TQ = TQ.add(IQ), FQ = FQ.add(jQ)
              }
            yQ += BQ * JQ
          }
        return PQ
      }
      static CalcProjectionSpherical(QQ, WQ, XQ, wQ, qQ, TQ) {
        let zQ = Math.atan2(QQ.z, QQ.x);
        const sQ = Math.acos(QQ.y);
        for (; zQ < -Math.PI;) zQ += 2 * Math.PI;
        for (; zQ > Math.PI;) zQ -= 2 * Math.PI;
        let FQ = zQ / Math.PI;
        const PQ = sQ / Math.PI;
        FQ = .5 * FQ + .5;
        let gQ = Math.round(FQ * XQ);
        gQ < 0 ? gQ = 0 : gQ >= XQ && (gQ = XQ - 1);
        let JQ = Math.round(PQ * wQ);
        JQ < 0 ? JQ = 0 : JQ >= wQ && (JQ = wQ - 1);
        const rQ = TQ ? wQ - JQ - 1 : JQ;
        return {
          r: WQ[rQ * XQ * qQ + gQ * qQ + 0],
          g: WQ[rQ * XQ * qQ + gQ * qQ + 1],
          b: WQ[rQ * XQ * qQ + gQ * qQ + 2]
        }
      }
    }

    function TQ(QQ, WQ, XQ, wQ, qQ, TQ) {
      qQ > 0 ? (qQ = function(QQ, WQ) {
        return WQ > 1023 ? QQ * Math.pow(2, 1023) * Math.pow(2, WQ - 1023) : WQ < -1074 ? QQ * Math.pow(2, -1074) * Math.pow(2, WQ + 1074) : QQ * Math.pow(2, WQ)
      }(1, qQ - 136), QQ[TQ + 0] = WQ * qQ, QQ[TQ + 1] = XQ * qQ, QQ[TQ + 2] = wQ * qQ) : (QQ[TQ + 0] = 0, QQ[TQ + 1] = 0, QQ[TQ + 2] = 0)
    }

    function zQ(QQ, WQ) {
      let XQ, wQ = "";
      for (let qQ = WQ; qQ < QQ.length - WQ && (XQ = String.fromCharCode(QQ[qQ]), "\n" != XQ); qQ++) wQ += XQ;
      return wQ
    }

    function sQ(QQ) {
      let WQ = zQ(QQ, 0);
      if ("#" != WQ[0] || "?" != WQ[1]) throw "Bad HDR Format.";
      let XQ = !1,
        wQ = !1,
        qQ = 0;
      do {
        qQ += WQ.length + 1, WQ = zQ(QQ, qQ), "FORMAT=32-bit_rle_rgbe" == WQ ? wQ = !0 : 0 == WQ.length && (XQ = !0)
      } while (!XQ);
      if (!wQ) throw "HDR Bad header format, unsupported FORMAT";
      qQ += WQ.length + 1, WQ = zQ(QQ, qQ);
      const TQ = /^-Y (.*) \+X (.*)$/g.exec(WQ);
      if (!TQ || TQ.length < 3) throw "HDR Bad header format, no size";
      const sQ = parseInt(TQ[2]),
        FQ = parseInt(TQ[1]);
      if (sQ < 8 || sQ > 32767) throw "HDR Bad header format, unsupported size";
      return qQ += WQ.length + 1, {
        height: FQ,
        width: sQ,
        dataPosition: qQ
      }
    }

    function FQ(QQ, WQ) {
      return function(QQ, WQ) {
        let XQ = WQ.height;
        const wQ = WQ.width;
        let qQ, zQ, sQ, FQ, gQ, JQ, rQ, IQ, jQ = WQ.dataPosition;
        const BQ = new ArrayBuffer(4 * wQ),
          yQ = new Uint8Array(BQ),
          VQ = new ArrayBuffer(WQ.width * WQ.height * 4 * 3),
          DQ = new Float32Array(VQ);
        for (; XQ > 0;) {
          if (qQ = QQ[jQ++], zQ = QQ[jQ++], sQ = QQ[jQ++], FQ = QQ[jQ++], 2 != qQ || 2 != zQ || 128 & sQ || WQ.width < 8 || WQ.width > 32767) return PQ(QQ, WQ);
          if ((sQ << 8 | FQ) != wQ) throw "HDR Bad header format, wrong scan line width";
          for (JQ = 0, IQ = 0; IQ < 4; IQ++)
            for (rQ = (IQ + 1) * wQ; JQ < rQ;)
              if (qQ = QQ[jQ++], zQ = QQ[jQ++], qQ > 128) {
                if (gQ = qQ - 128, 0 == gQ || gQ > rQ - JQ) throw "HDR Bad Format, bad scanline data (run)";
                for (; gQ-- > 0;) yQ[JQ++] = zQ
              } else {
                if (gQ = qQ, 0 == gQ || gQ > rQ - JQ) throw "HDR Bad Format, bad scanline data (non-run)";
                if (yQ[JQ++] = zQ, --gQ > 0)
                  for (let WQ = 0; WQ < gQ; WQ++) yQ[JQ++] = QQ[jQ++]
              } for (IQ = 0; IQ < wQ; IQ++) qQ = yQ[IQ], zQ = yQ[IQ + wQ], sQ = yQ[IQ + 2 * wQ], FQ = yQ[IQ + 3 * wQ], TQ(DQ, qQ, zQ, sQ, FQ, (WQ.height - XQ) * wQ * 3 + 3 * IQ);
          XQ--
        }
        return DQ
      }(QQ, WQ)
    }

    function PQ(QQ, WQ) {
      let XQ = WQ.height;
      const wQ = WQ.width;
      let qQ, zQ, sQ, FQ, PQ, gQ = WQ.dataPosition;
      const JQ = new ArrayBuffer(WQ.width * WQ.height * 4 * 3),
        rQ = new Float32Array(JQ);
      for (; XQ > 0;) {
        for (PQ = 0; PQ < WQ.width; PQ++) qQ = QQ[gQ++], zQ = QQ[gQ++], sQ = QQ[gQ++], FQ = QQ[gQ++], TQ(rQ, qQ, zQ, sQ, FQ, (WQ.height - XQ) * wQ * 3 + 3 * PQ);
        XQ--
      }
      return rQ
    }
    qQ.FACE_LEFT = [new wQ.s(-1, -1, -1), new wQ.s(1, -1, -1), new wQ.s(-1, 1, -1), new wQ.s(1, 1, -1)], qQ.FACE_RIGHT = [new wQ.s(1, -1, 1), new wQ.s(-1, -1, 1), new wQ.s(1, 1, 1), new wQ.s(-1, 1, 1)], qQ.FACE_FRONT = [new wQ.s(1, -1, -1), new wQ.s(1, -1, 1), new wQ.s(1, 1, -1), new wQ.s(1, 1, 1)], qQ.FACE_BACK = [new wQ.s(-1, -1, 1), new wQ.s(-1, -1, -1), new wQ.s(-1, 1, 1), new wQ.s(-1, 1, -1)], qQ.FACE_DOWN = [new wQ.s(1, 1, -1), new wQ.s(1, 1, 1), new wQ.s(-1, 1, -1), new wQ.s(-1, 1, 1)], qQ.FACE_UP = [new wQ.s(-1, -1, -1), new wQ.s(-1, -1, 1), new wQ.s(1, -1, -1), new wQ.s(1, -1, 1)];
    class gQ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(QQ, WQ, XQ) {
        const wQ = new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength),
          qQ = sQ(wQ),
          TQ = FQ(wQ, qQ),
          zQ = qQ.width * qQ.height,
          PQ = new Float32Array(4 * zQ);
        for (let sQ = 0; sQ < zQ; sQ += 1) PQ[4 * sQ] = TQ[3 * sQ], PQ[4 * sQ + 1] = TQ[3 * sQ + 1], PQ[4 * sQ + 2] = TQ[3 * sQ + 2], PQ[4 * sQ + 3] = 1;
        XQ(qQ.width, qQ.height, WQ.generateMipMaps, !1, (() => {
          const QQ = WQ.Uj();
          WQ.type = 1, WQ.format = 5, WQ._gammaSpace = !1, QQ._uploadDataToTextureDirectly(WQ, PQ)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);