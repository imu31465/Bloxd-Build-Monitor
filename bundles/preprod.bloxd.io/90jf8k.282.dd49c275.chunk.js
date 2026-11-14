export const id = 282;
export const ids = [282];
export const modules = {
  39678: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      _HDRTextureLoader: () => RF
    });
    var CF = SF(35623);
    class AF {
      static ConvertPanoramaToCubemap(FF, WF, SF, CF) {
        let AF, uF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          hF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!FF) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (FF.length != WF * SF * 3) {
          if (FF.length != WF * SF * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          AF = 4
        } else AF = 3;
        return {
          front: this.CreateCubemapTexture(CF, this.FACE_FRONT, FF, WF, SF, uF, hF, AF),
          back: this.CreateCubemapTexture(CF, this.FACE_BACK, FF, WF, SF, uF, hF, AF),
          left: this.CreateCubemapTexture(CF, this.FACE_LEFT, FF, WF, SF, uF, hF, AF),
          right: this.CreateCubemapTexture(CF, this.FACE_RIGHT, FF, WF, SF, uF, hF, AF),
          up: this.CreateCubemapTexture(CF, this.FACE_UP, FF, WF, SF, uF, hF, AF),
          down: this.CreateCubemapTexture(CF, this.FACE_DOWN, FF, WF, SF, uF, hF, AF),
          size: CF,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(FF, WF, SF, CF, AF, uF, hF, bW) {
        const dF = new ArrayBuffer(FF * FF * 4 * 3),
          PF = new Float32Array(dF),
          RF = uF ? Math.max(1, Math.round(CF / 4 / FF)) : 1,
          iW = 1 / RF,
          eF = iW * iW,
          EF = WF[1].subtract(WF[0]).scale(iW / FF),
          QF = WF[3].subtract(WF[2]).scale(iW / FF),
          rW = 1 / FF;
        let gW = 0;
        for (let tW = 0; tW < FF; tW++)
          for (let uF = 0; uF < RF; uF++) {
            let uF = WF[0],
              dF = WF[2];
            for (let WF = 0; WF < FF; WF++)
              for (let iW = 0; iW < RF; iW++) {
                const RF = dF.subtract(uF).scale(gW).add(uF);
                RF.normalize();
                const iW = this.CalcProjectionSpherical(RF, SF, CF, AF, bW, hF);
                PF[tW * FF * 3 + 3 * WF + 0] += iW.r * eF, PF[tW * FF * 3 + 3 * WF + 1] += iW.g * eF, PF[tW * FF * 3 + 3 * WF + 2] += iW.b * eF, uF = uF.add(EF), dF = dF.add(QF)
              }
            gW += rW * iW
          }
        return PF
      }
      static CalcProjectionSpherical(FF, WF, SF, CF, AF, uF) {
        let hF = Math.atan2(FF.z, FF.x);
        const bW = Math.acos(FF.y);
        for (; hF < -Math.PI;) hF += 2 * Math.PI;
        for (; hF > Math.PI;) hF -= 2 * Math.PI;
        let dF = hF / Math.PI;
        const PF = bW / Math.PI;
        dF = .5 * dF + .5;
        let RF = Math.round(dF * SF);
        RF < 0 ? RF = 0 : RF >= SF && (RF = SF - 1);
        let iW = Math.round(PF * CF);
        iW < 0 ? iW = 0 : iW >= CF && (iW = CF - 1);
        const eF = uF ? CF - iW - 1 : iW;
        return {
          r: WF[eF * SF * AF + RF * AF + 0],
          g: WF[eF * SF * AF + RF * AF + 1],
          b: WF[eF * SF * AF + RF * AF + 2]
        }
      }
    }

    function uF(FF, WF, SF, CF, AF, uF) {
      AF > 0 ? (AF = function(FF, WF) {
        return WF > 1023 ? FF * Math.pow(2, 1023) * Math.pow(2, WF - 1023) : WF < -1074 ? FF * Math.pow(2, -1074) * Math.pow(2, WF + 1074) : FF * Math.pow(2, WF)
      }(1, AF - 136), FF[uF + 0] = WF * AF, FF[uF + 1] = SF * AF, FF[uF + 2] = CF * AF) : (FF[uF + 0] = 0, FF[uF + 1] = 0, FF[uF + 2] = 0)
    }

    function hF(FF, WF) {
      let SF, CF = "";
      for (let AF = WF; AF < FF.length - WF && (SF = String.fromCharCode(FF[AF]), "\n" != SF); AF++) CF += SF;
      return CF
    }

    function bW(FF) {
      let WF = hF(FF, 0);
      if ("#" != WF[0] || "?" != WF[1]) throw "Bad HDR Format.";
      let SF = !1,
        CF = !1,
        AF = 0;
      do {
        AF += WF.length + 1, WF = hF(FF, AF), "FORMAT=32-bit_rle_rgbe" == WF ? CF = !0 : 0 == WF.length && (SF = !0)
      } while (!SF);
      if (!CF) throw "HDR Bad header format, unsupported FORMAT";
      AF += WF.length + 1, WF = hF(FF, AF);
      const uF = /^-Y (.*) \+X (.*)$/g.exec(WF);
      if (!uF || uF.length < 3) throw "HDR Bad header format, no size";
      const bW = parseInt(uF[2]),
        dF = parseInt(uF[1]);
      if (bW < 8 || bW > 32767) throw "HDR Bad header format, unsupported size";
      return AF += WF.length + 1, {
        height: dF,
        width: bW,
        dataPosition: AF
      }
    }

    function dF(FF, WF) {
      return function(FF, WF) {
        let SF = WF.height;
        const CF = WF.width;
        let AF, hF, bW, dF, RF, iW, eF, EF, QF = WF.dataPosition;
        const rW = new ArrayBuffer(4 * CF),
          gW = new Uint8Array(rW),
          tW = new ArrayBuffer(WF.width * WF.height * 4 * 3),
          TF = new Float32Array(tW);
        for (; SF > 0;) {
          if (AF = FF[QF++], hF = FF[QF++], bW = FF[QF++], dF = FF[QF++], 2 != AF || 2 != hF || 128 & bW || WF.width < 8 || WF.width > 32767) return PF(FF, WF);
          if ((bW << 8 | dF) != CF) throw "HDR Bad header format, wrong scan line width";
          for (iW = 0, EF = 0; EF < 4; EF++)
            for (eF = (EF + 1) * CF; iW < eF;)
              if (AF = FF[QF++], hF = FF[QF++], AF > 128) {
                if (RF = AF - 128, 0 == RF || RF > eF - iW) throw "HDR Bad Format, bad scanline data (run)";
                for (; RF-- > 0;) gW[iW++] = hF
              } else {
                if (RF = AF, 0 == RF || RF > eF - iW) throw "HDR Bad Format, bad scanline data (non-run)";
                if (gW[iW++] = hF, --RF > 0)
                  for (let WF = 0; WF < RF; WF++) gW[iW++] = FF[QF++]
              } for (EF = 0; EF < CF; EF++) AF = gW[EF], hF = gW[EF + CF], bW = gW[EF + 2 * CF], dF = gW[EF + 3 * CF], uF(TF, AF, hF, bW, dF, (WF.height - SF) * CF * 3 + 3 * EF);
          SF--
        }
        return TF
      }(FF, WF)
    }

    function PF(FF, WF) {
      let SF = WF.height;
      const CF = WF.width;
      let AF, hF, bW, dF, PF, RF = WF.dataPosition;
      const iW = new ArrayBuffer(WF.width * WF.height * 4 * 3),
        eF = new Float32Array(iW);
      for (; SF > 0;) {
        for (PF = 0; PF < WF.width; PF++) AF = FF[RF++], hF = FF[RF++], bW = FF[RF++], dF = FF[RF++], uF(eF, AF, hF, bW, dF, (WF.height - SF) * CF * 3 + 3 * PF);
        SF--
      }
      return eF
    }
    AF.FACE_LEFT = [new CF.r(-1, -1, -1), new CF.r(1, -1, -1), new CF.r(-1, 1, -1), new CF.r(1, 1, -1)], AF.FACE_RIGHT = [new CF.r(1, -1, 1), new CF.r(-1, -1, 1), new CF.r(1, 1, 1), new CF.r(-1, 1, 1)], AF.FACE_FRONT = [new CF.r(1, -1, -1), new CF.r(1, -1, 1), new CF.r(1, 1, -1), new CF.r(1, 1, 1)], AF.FACE_BACK = [new CF.r(-1, -1, 1), new CF.r(-1, -1, -1), new CF.r(-1, 1, 1), new CF.r(-1, 1, -1)], AF.FACE_DOWN = [new CF.r(1, 1, -1), new CF.r(1, 1, 1), new CF.r(-1, 1, -1), new CF.r(-1, 1, 1)], AF.FACE_UP = [new CF.r(-1, -1, -1), new CF.r(-1, -1, 1), new CF.r(1, -1, -1), new CF.r(1, -1, 1)];
    class RF {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(FF, WF, SF) {
        const CF = new Uint8Array(FF.buffer, FF.byteOffset, FF.byteLength),
          AF = bW(CF),
          uF = dF(CF, AF),
          hF = AF.width * AF.height,
          PF = new Float32Array(4 * hF);
        for (let bW = 0; bW < hF; bW += 1) PF[4 * bW] = uF[3 * bW], PF[4 * bW + 1] = uF[3 * bW + 1], PF[4 * bW + 2] = uF[3 * bW + 2], PF[4 * bW + 3] = 1;
        SF(AF.width, AF.height, WF.generateMipMaps, !1, (() => {
          const FF = WF.sC();
          WF.type = 1, WF.format = 5, WF._gammaSpace = !1, FF._uploadDataToTextureDirectly(WF, PF)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);