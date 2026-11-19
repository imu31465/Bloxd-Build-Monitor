export const id = 243;
export const ids = [243];
export const modules = {
  38851: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => LT,
      e: () => DT,
      g: () => BT,
      i: () => xT,
      m: () => FT,
      n: () => XT,
      o: () => ST
    });
    var iT = IT(37660),
      zT = IT(38853);

    function kT(TT, oT, IT, iT) {
      switch (oT) {
        case 5120: {
          let oT = TT.getInt8(IT);
          return iT && (oT = Math.max(oT / 127, -1)), oT
        }
        case 5121: {
          let oT = TT.getUint8(IT);
          return iT && (oT /= 255), oT
        }
        case 5122: {
          let oT = TT.getInt16(IT, !0);
          return iT && (oT = Math.max(oT / 32767, -1)), oT
        }
        case 5123: {
          let oT = TT.getUint16(IT, !0);
          return iT && (oT /= 65535), oT
        }
        case 5131:
          return (0, zT.b)(TT.getUint16(IT, !0));
        case 5124:
          return TT.getInt32(IT, !0);
        case 5125:
          return TT.getUint32(IT, !0);
        case 5126:
          return TT.getFloat32(IT, !0);
        default:
          throw new Error(`Invalid component type ${oT}`)
      }
    }

    function WT(TT, oT, IT, iT, kT) {
      switch (oT) {
        case 5120:
          iT && (kT = Math.round(127 * kT)), TT.setInt8(IT, kT);
          break;
        case 5121:
          iT && (kT = Math.round(255 * kT)), TT.setUint8(IT, kT);
          break;
        case 5122:
          iT && (kT = Math.round(32767 * kT)), TT.setInt16(IT, kT, !0);
          break;
        case 5123:
          iT && (kT = Math.round(65535 * kT)), TT.setUint16(IT, kT, !0);
          break;
        case 5131:
          TT.setUint16(IT, (0, zT.i)(kT), !0);
          break;
        case 5124:
          TT.setInt32(IT, kT, !0);
          break;
        case 5125:
          TT.setUint32(IT, kT, !0);
          break;
        case 5126:
          TT.setFloat32(IT, kT, !0);
          break;
        default:
          throw new Error(`Invalid component type ${oT}`)
      }
    }

    function XT(TT) {
      switch (TT) {
        case 5120:
        case 5121:
          return 1;
        case 5122:
        case 5123:
        case 5131:
          return 2;
        case 5124:
        case 5125:
        case 5126:
          return 4;
        default:
          throw new Error(`Invalid type '${TT}'`)
      }
    }

    function BT(TT, oT, IT, iT, zT, BT, FT, ST) {
      const DT = new Array(iT),
        LT = new Array(iT);
      if (TT instanceof Array) {
        let zT = oT / 4;
        const kT = IT / 4;
        for (let oT = 0; oT < BT; oT += iT) {
          for (let oT = 0; oT < iT; oT++) DT[oT] = LT[oT] = TT[zT + oT];
          ST(LT, oT);
          for (let oT = 0; oT < iT; oT++) DT[oT] !== LT[oT] && (TT[zT + oT] = LT[oT]);
          zT += kT
        }
      } else {
        const xT = ArrayBuffer.isView(TT) ? new DataView(TT.buffer, TT.byteOffset, TT.byteLength) : new DataView(TT),
          cT = XT(zT);
        for (let TT = 0; TT < BT; TT += iT) {
          for (let TT = 0, IT = oT; TT < iT; TT++, IT += cT) DT[TT] = LT[TT] = kT(xT, zT, IT, FT);
          ST(LT, TT);
          for (let TT = 0, IT = oT; TT < iT; TT++, IT += cT) DT[TT] !== LT[TT] && WT(xT, zT, IT, FT, LT[TT]);
          oT += IT
        }
      }
    }

    function FT(TT, oT, IT, zT, kT, WT, FT, ST) {
      const DT = oT * XT(IT),
        LT = FT * oT;
      if (5126 !== IT || kT !== DT) {
        const iT = new Float32Array(LT);
        return BT(TT, zT, kT, oT, IT, LT, WT, ((TT, IT) => {
          for (let zT = 0; zT < oT; zT++) iT[IT + zT] = TT[zT]
        })), iT
      }
      if (!(TT instanceof Array || TT instanceof Float32Array) || 0 !== zT || TT.length !== LT) {
        if (TT instanceof Array) {
          const oT = zT / 4;
          return TT.slice(oT, oT + LT)
        }
        if (ArrayBuffer.isView(TT)) {
          const oT = TT.byteOffset + zT;
          return 0 !== (3 & oT) && (iT.d.Warn("Float array must be aligned to 4-bytes border"), ST = !0), ST ? new Float32Array(TT.buffer.slice(oT, oT + LT * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(TT.buffer, oT, LT)
        }
        return new Float32Array(TT, zT, LT)
      }
      return ST ? TT.slice() : TT
    }

    function ST(TT, oT, IT, zT, kT, WT, FT) {
      const ST = XT(IT),
        DT = function(TT) {
          switch (TT) {
            case 5120:
              return Int8Array;
            case 5121:
              return Uint8Array;
            case 5122:
              return Int16Array;
            case 5123:
            case 5131:
              return Uint16Array;
            case 5124:
              return Int32Array;
            case 5125:
              return Uint32Array;
            case 5126:
              return Float32Array;
            default:
              throw new Error(`Invalid component type '${TT}'`)
          }
        }(IT),
        LT = WT * oT;
      if (Array.isArray(TT)) {
        if (0 !== (3 & zT) || 0 !== (3 & kT)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const iT = zT / 4,
          XT = kT / 4;
        if (iT + (WT - 1) * XT + oT > TT.length) throw new Error("Last accessed index is out of bounds.");
        if (XT < oT) throw new Error("Data stride cannot be smaller than the component size.");
        if (XT !== oT) {
          const iT = new DT(LT);
          return BT(TT, zT, kT, oT, IT, LT, !1, ((TT, IT) => {
            for (let zT = 0; zT < oT; zT++) iT[IT + zT] = TT[zT]
          })), iT
        }
        return new DT(TT.slice(iT, iT + LT))
      }
      let xT, cT = zT;
      ArrayBuffer.isView(TT) ? (xT = TT.buffer, cT += TT.byteOffset) : xT = TT;
      if (cT + (WT - 1) * kT + oT * ST > xT.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const KT = oT * ST;
      if (kT < KT) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (kT !== KT) {
        const TT = new DT(LT),
          IT = new Uint8Array(xT, cT),
          iT = new Uint8Array(TT.buffer),
          zT = oT * ST;
        for (let oT = 0, XT = 0, BT = 0; oT < WT; oT++, XT += kT, BT += zT) iT.set(IT.subarray(XT, XT + zT), BT);
        return TT
      }
      return 1 !== ST && 0 !== (cT & ST - 1) && (iT.d.Warn("Array must be aligned to border of element size. Data will be copied."), FT = !0), FT ? new DT(xT.slice(cT, cT + LT * ST)) : new DT(xT, cT, LT)
    }

    function DT(TT, oT, IT, zT, kT, WT, FT, ST) {
      const DT = oT * XT(IT),
        LT = FT * oT;
      if (ST.length !== LT) throw new Error("Output length is not valid");
      if (5126 === IT && kT === DT)
        if (TT instanceof Array) {
          const oT = zT / 4;
          ST.set(TT, oT)
        } else if (ArrayBuffer.isView(TT)) {
        const oT = TT.byteOffset + zT;
        if (0 !== (3 & oT)) return iT.d.Warn("Float array must be aligned to 4-bytes border"), void ST.set(new Float32Array(TT.buffer.slice(oT, oT + LT * Float32Array.BYTES_PER_ELEMENT)));
        const IT = new Float32Array(TT.buffer, oT, LT);
        ST.set(IT)
      } else {
        const oT = new Float32Array(TT, zT, LT);
        ST.set(oT)
      } else BT(TT, zT, kT, oT, IT, LT, WT, ((TT, IT) => {
        for (let iT = 0; iT < oT; iT++) ST[IT + iT] = TT[iT]
      }))
    }

    function LT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(TT)) {
        for (let zT = 0; zT < oT; zT++)
          if (TT[IT + zT] - iT > 65535) return !0;
        return !1
      }
      return 4 === TT.BYTES_PER_ELEMENT
    }

    function xT(TT) {
      const oT = TT.buffer;
      if (oT instanceof ArrayBuffer) return TT;
      const IT = new ArrayBuffer(TT.byteLength);
      return new Uint8Array(IT).set(new Uint8Array(oT, TT.byteOffset, TT.byteLength)), IT
    }
  },
  38647: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => RT,
      f: () => mT,
      j: () => eT,
      h: () => JT,
      k: () => UT
    });
    class iT {
      constructor() {
        this.children = []
      }
      isValid(TT) {
        return !0
      }
      process(TT, oT, IT) {
        let iT = "";
        if (this.line) {
          let IT = this.line;
          const zT = oT.processor;
          if (zT) {
            zT.lineProcessor && (IT = zT.lineProcessor(IT, oT.isFragment, oT.processingContext));
            const iT = oT.processor?.attributeKeywordName ?? "attribute",
              kT = oT.isFragment && oT.processor?.varyingFragmentKeywordName ? oT.processor?.varyingFragmentKeywordName : !oT.isFragment && oT.processor?.varyingVertexKeywordName ? oT.processor?.varyingVertexKeywordName : "varying";
            if (!oT.isFragment && zT.attributeProcessor && this.line.startsWith(iT)) IT = zT.attributeProcessor(this.line, TT, oT.processingContext);
            else if (zT.varyingProcessor && (zT.varyingCheck?.(this.line, oT.isFragment) || !zT.varyingCheck && this.line.startsWith(kT))) IT = zT.varyingProcessor(this.line, oT.isFragment, TT, oT.processingContext);
            else if (zT.uniformProcessor && zT.uniformRegexp && zT.uniformRegexp.test(this.line)) oT.lookForClosingBracketForUniformBuffer || (IT = zT.uniformProcessor(this.line, oT.isFragment, TT, oT.processingContext));
            else if (zT.uniformBufferProcessor && zT.uniformBufferRegexp && zT.uniformBufferRegexp.test(this.line)) oT.lookForClosingBracketForUniformBuffer || (IT = zT.uniformBufferProcessor(this.line, oT.isFragment, oT.processingContext), oT.lookForClosingBracketForUniformBuffer = !0);
            else if (zT.textureProcessor && zT.textureRegexp && zT.textureRegexp.test(this.line)) IT = zT.textureProcessor(this.line, oT.isFragment, TT, oT.processingContext);
            else if ((zT.uniformProcessor || zT.uniformBufferProcessor) && this.line.startsWith("uniform") && !oT.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? zT.uniformProcessor && (IT = zT.uniformProcessor(this.line, oT.isFragment, TT, oT.processingContext)) : zT.uniformBufferProcessor && (IT = zT.uniformBufferProcessor(this.line, oT.isFragment, oT.processingContext), oT.lookForClosingBracketForUniformBuffer = !0)
            }
            oT.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (oT.lookForClosingBracketForUniformBuffer = !1, zT.endOfUniformBufferProcessor && (IT = zT.endOfUniformBufferProcessor(this.line, oT.isFragment, oT.processingContext)))
          }
          iT += IT + "\n"
        }
        for (const zT of this.children) iT += zT.process(TT, oT, IT);
        return this.additionalDefineKey && (TT[this.additionalDefineKey] = this.additionalDefineValue || "true", IT[this.additionalDefineKey] = TT[this.additionalDefineKey]), iT
      }
    }
    class zT {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(TT) {
        this._lines.length = 0;
        for (const oT of TT) {
          if (!oT || "\r" === oT) continue;
          if ("#" === oT[0]) {
            this._lines.push(oT);
            continue
          }
          const TT = oT.trim();
          if (!TT) continue;
          if (TT.startsWith("//")) {
            this._lines.push(oT);
            continue
          }
          const IT = TT.indexOf(";");
          if (-1 === IT) this._lines.push(TT);
          else if (IT === TT.length - 1) TT.length > 1 && this._lines.push(TT);
          else {
            const TT = oT.split(";");
            for (let oT = 0; oT < TT.length; oT++) {
              let IT = TT[oT];
              IT && (IT = IT.trim(), IT && this._lines.push(IT + (oT !== TT.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class kT extends iT {
      process(TT, oT, IT) {
        for (let iT = 0; iT < this.children.length; iT++) {
          const zT = this.children[iT];
          if (zT.isValid(TT)) return zT.process(TT, oT, IT)
        }
        return ""
      }
    }
    class WT extends iT {
      isValid(TT) {
        return this.testExpression.isTrue(TT)
      }
    }
    class XT {
      isTrue(TT) {
        return !0
      }
      static postfixToInfix(TT) {
        const oT = [];
        for (const IT of TT)
          if (void 0 === XT._OperatorPriority[IT]) oT.push(IT);
          else {
            const TT = oT[oT.length - 1],
              iT = oT[oT.length - 2];
            oT.length -= 2, oT.push(`(${iT}${IT}${TT})`)
          } return oT[oT.length - 1]
      }
      static infixToPostfix(TT) {
        const oT = XT._InfixToPostfixCache.get(TT);
        if (oT) return oT.accessTime = Date.now(), oT.result;
        if (!TT.includes("&&") && !TT.includes("||") && !TT.includes(")") && !TT.includes("(")) return [TT];
        const IT = [];
        let iT = -1;
        const zT = () => {
            ST = ST.trim(), "" !== ST && (IT.push(ST), ST = "")
          },
          kT = TT => {
            iT < XT._Stack.length - 1 && (XT._Stack[++iT] = TT)
          },
          WT = () => XT._Stack[iT],
          BT = () => -1 === iT ? "!!INVALID EXPRESSION!!" : XT._Stack[iT--];
        let FT = 0,
          ST = "";
        for (; FT < TT.length;) {
          const oT = TT.charAt(FT),
            DT = FT < TT.length - 1 ? TT.substring(FT, 2 + FT) : "";
          if ("(" === oT) ST = "", kT(oT);
          else if (")" === oT) {
            for (zT(); - 1 !== iT && "(" !== WT();) IT.push(BT());
            BT()
          } else if (XT._OperatorPriority[DT] > 1) {
            for (zT(); - 1 !== iT && XT._OperatorPriority[WT()] >= XT._OperatorPriority[DT];) IT.push(BT());
            kT(DT), FT++
          } else ST += oT;
          FT++
        }
        for (zT(); - 1 !== iT;) "(" === WT() ? BT() : IT.push(BT());
        return XT._InfixToPostfixCache.size >= XT.InfixToPostfixCacheLimitSize && XT.ClearCache(), XT._InfixToPostfixCache.set(TT, {
          result: IT,
          accessTime: Date.now()
        }), IT
      }
      static ClearCache() {
        const TT = Array.from(XT._InfixToPostfixCache.entries()).sort(((TT, oT) => TT[1].accessTime - oT[1].accessTime));
        for (let oT = 0; oT < XT.InfixToPostfixCacheCleanupSize; oT++) XT._InfixToPostfixCache.delete(TT[oT][0])
      }
    }
    XT.InfixToPostfixCacheLimitSize = 5e4, XT.InfixToPostfixCacheCleanupSize = 25e3, XT._InfixToPostfixCache = new Map, XT._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, XT._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class BT extends XT {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = TT, this.not = oT
      }
      isTrue(TT) {
        let oT = void 0 !== TT[this.define];
        return this.not && (oT = !oT), oT
      }
    }
    class FT extends XT {
      isTrue(TT) {
        return this.leftOperand.isTrue(TT) || this.rightOperand.isTrue(TT)
      }
    }
    class ST extends XT {
      isTrue(TT) {
        return this.leftOperand.isTrue(TT) && this.rightOperand.isTrue(TT)
      }
    }
    class DT extends XT {
      constructor(TT, oT, IT) {
        super(), this.define = TT, this.operand = oT, this.testValue = IT
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(TT) {
        let oT = !1;
        const IT = parseInt(void 0 != TT[this.define] ? TT[this.define] : this.define),
          iT = parseInt(void 0 != TT[this.testValue] ? TT[this.testValue] : this.testValue);
        if (isNaN(IT) || isNaN(iT)) return !1;
        switch (this.operand) {
          case ">":
            oT = IT > iT;
            break;
          case "<":
            oT = IT < iT;
            break;
          case "<=":
            oT = IT <= iT;
            break;
          case ">=":
            oT = IT >= iT;
            break;
          case "==":
            oT = IT === iT;
            break;
          case "!=":
            oT = IT !== iT
        }
        return oT
      }
    }
    var LT = IT(38643),
      xT = IT(38635);
    const cT = /defined\s*?\((.+?)\)/g,
      KT = /defined\s*?\[(.+?)\]/g,
      MT = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      rT = /__decl__/,
      AT = /light\{X\}.(\w*)/g,
      gT = /\{X\}/g,
      hT = [],
      wT = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function mT(TT) {
      TT.processor && TT.processor.initializeShaders && TT.processor.initializeShaders(TT.processingContext)
    }

    function eT(TT, oT, IT, iT) {
      oT.processor?.preProcessShaderCode && (TT = oT.processor.preProcessShaderCode(TT, oT.isFragment)), JT(TT, oT, (TT => {
        oT.processCodeAfterIncludes && (TT = oT.processCodeAfterIncludes(oT.isFragment ? "fragment" : "vertex", TT, oT.defines));
        const zT = function(TT, oT, IT) {
          let iT = function(TT, oT) {
            if (oT.processor?.noPrecision) return TT;
            const IT = oT.shouldUseHighPrecisionShader; - 1 === TT.indexOf("precision highp float") ? TT = IT ? "precision highp float;\n" + TT : "precision mediump float;\n" + TT : IT || (TT = TT.replace("precision highp float", "precision mediump float"));
            return TT
          }(TT, oT);
          if (!oT.processor) return iT;
          if (0 === oT.processor.shaderLanguage && -1 !== iT.indexOf("#version 3") && (iT = iT.replace("#version 300 es", ""), !oT.processor.parseGLES3)) return iT;
          const zT = oT.defines,
            kT = jT(oT, IT);
          oT.processor.preProcessor && (iT = oT.processor.preProcessor(iT, zT, kT, oT.isFragment, oT.processingContext));
          const WT = {};
          iT = CT(iT, kT, oT, WT), oT.processor.postProcessor && (iT = oT.processor.postProcessor(iT, zT, oT.isFragment, oT.processingContext, IT ? {
            drawBuffersExtensionDisabled: !IT.getCaps().drawBuffersExtension
          } : {}, kT, WT));
          IT?._features.needShaderCodeInlining && (iT = IT.inlineShaderCode(iT));
          return iT
        }(TT, oT, iT);
        IT(zT, TT)
      }))
    }

    function RT(TT, oT, IT) {
      return IT.processor && IT.processor.finalizeShaders ? IT.processor.finalizeShaders(TT, oT, IT.processingContext) : {
        vertexCode: TT,
        fragmentCode: oT
      }
    }

    function uT(TT) {
      const oT = /defined\((.+)\)/.exec(TT);
      if (oT && oT.length) return new BT(oT[1].trim(), "!" === TT[0]);
      const IT = ["==", "!=", ">=", "<=", "<", ">"];
      let iT = "",
        zT = 0;
      for (iT of IT)
        if (zT = TT.indexOf(iT), zT > -1) break;
      if (-1 === zT) return new BT(TT);
      const kT = TT.substring(0, zT).trim(),
        WT = TT.substring(zT + iT.length).trim();
      return new DT(kT, iT, WT)
    }

    function vT(TT, oT) {
      const IT = new WT,
        iT = TT.substring(0, oT);
      let zT = TT.substring(oT);
      return zT = zT.substring(0, (zT.indexOf("//") + 1 || zT.length + 1) - 1).trim(), IT.testExpression = "#ifdef" === iT ? new BT(zT) : "#ifndef" === iT ? new BT(zT, !0) : function(TT) {
        TT = TT.replace(cT, "defined[$1]");
        const oT = XT.infixToPostfix(TT),
          IT = [];
        for (const zT of oT)
          if ("||" !== zT && "&&" !== zT) IT.push(zT);
          else if (IT.length >= 2) {
          let TT = IT[IT.length - 1],
            oT = IT[IT.length - 2];
          IT.length -= 2;
          const iT = "&&" == zT ? new ST : new FT;
          "string" === typeof TT && (TT = TT.replace(KT, "defined($1)")), "string" === typeof oT && (oT = oT.replace(KT, "defined($1)")), iT.leftOperand = "string" === typeof oT ? uT(oT) : oT, iT.rightOperand = "string" === typeof TT ? uT(TT) : TT, IT.push(iT)
        }
        let iT = IT[IT.length - 1];
        return "string" === typeof iT && (iT = iT.replace(KT, "defined($1)")), "string" === typeof iT ? uT(iT) : iT
      }(zT), IT
    }

    function ET(TT, oT, IT, zT) {
      let kT;
      for (; fT(TT, IT, zT);) {
        kT = TT.currentLine;
        const WT = kT.substring(0, 5).toLowerCase();
        if ("#else" === WT) {
          const IT = new iT;
          return oT.children.push(IT), void fT(TT, IT, zT)
        }
        if ("#elif" === WT) {
          const TT = vT(kT, 5);
          oT.children.push(TT), IT = TT
        }
      }
    }

    function fT(TT, oT, IT) {
      for (; TT.canRead;) {
        TT.lineIndex++;
        const zT = TT.currentLine;
        if (zT.indexOf("#") >= 0) {
          const iT = wT.exec(zT);
          if (iT && iT.length) {
            switch (iT[0]) {
              case "#ifdef": {
                const iT = new kT;
                oT.children.push(iT);
                const WT = vT(zT, 6);
                iT.children.push(WT), ET(TT, iT, WT, IT);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const iT = new kT;
                oT.children.push(iT);
                const WT = vT(zT, 7);
                iT.children.push(WT), ET(TT, iT, WT, IT);
                break
              }
              case "#if": {
                const iT = new kT,
                  WT = vT(zT, 3);
                oT.children.push(iT), iT.children.push(WT), ET(TT, iT, WT, IT);
                break
              }
            }
            continue
          }
        }
        const WT = new iT;
        if (WT.line = zT, oT.children.push(WT), "#" === zT[0] && "d" === zT[1]) {
          const TT = zT.replace(";", "").split(" ");
          WT.additionalDefineKey = TT[1], 3 === TT.length && (WT.additionalDefineValue = TT[2])
        }
      }
      return !1
    }

    function CT(TT, oT, IT, kT) {
      const WT = new iT,
        XT = new zT;
      return XT.lineIndex = -1, XT.lines = TT.split("\n"), fT(XT, WT, kT), WT.process(oT, IT, kT)
    }

    function jT(TT, oT) {
      const IT = TT.defines,
        iT = {};
      for (const zT of IT) {
        const TT = zT.replace("#define", "").replace(";", "").trim().split(" ");
        iT[TT[0]] = TT.length > 1 ? TT[1] : ""
      }
      return 0 === TT.processor?.shaderLanguage && (iT.GL_ES = "true"), iT.__VERSION__ = TT.version, iT[TT.platformName] = "true", (0, xT.j)(iT, oT?.isNDCHalfZRange, oT?.lIT, oT?.useExactSrgbConversions), iT
    }

    function JT(TT, oT, IT) {
      let iT;
      for (hT.length = 0; null !== (iT = MT.exec(TT));) hT.push(iT);
      let zT = [TT],
        kT = !1;
      for (const XT of hT) {
        let TT = XT[1];
        if (-1 !== TT.indexOf("__decl__") && (TT = TT.replace(rT, ""), oT.supportsUniformBuffers && (TT = TT.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), TT += "Declaration"), !oT.includesShadersStore[TT]) {
          const iT = oT.shadersRepository + "ShadersInclude/" + TT + ".fx";
          return void UT.loadFile(iT, (iT => {
            oT.includesShadersStore[TT] = iT, JT(zT.join(""), oT, IT)
          }))
        } {
          let IT = oT.includesShadersStore[TT];
          if (XT[2]) {
            const TT = XT[3].split(",");
            for (let oT = 0; oT < TT.length; oT += 2) {
              const iT = new RegExp(TT[oT], "g"),
                zT = TT[oT + 1];
              IT = IT.replace(iT, zT)
            }
          }
          if (XT[4]) {
            const TT = XT[5];
            if (-1 !== TT.indexOf("..")) {
              const iT = TT.split(".."),
                zT = parseInt(iT[0]);
              let kT = parseInt(iT[1]),
                WT = IT.slice(0);
              IT = "", isNaN(kT) && (kT = oT.indexParameters[iT[1]]);
              for (let TT = zT; TT < kT; TT++) oT.supportsUniformBuffers || (WT = WT.replace(AT, ((TT, oT) => oT + "{X}"))), IT += WT.replace(gT, TT.toString()) + "\n"
            } else oT.supportsUniformBuffers || (IT = IT.replace(AT, ((TT, oT) => oT + "{X}"))), IT = IT.replace(gT, TT)
          }
          const iT = [];
          for (const TT of zT) {
            const oT = TT.split(XT[0]);
            for (let TT = 0; TT < oT.length - 1; TT++) iT.push(oT[TT]), iT.push(IT);
            iT.push(oT[oT.length - 1])
          }
          zT = iT, kT = kT || IT.indexOf("#include<") >= 0 || IT.indexOf("#include <") >= 0
        }
      }
      hT.length = 0;
      const WT = zT.join("");
      kT ? JT(WT.toString(), oT, IT) : IT(WT)
    }
    const UT = {
      loadFile: (TT, oT, IT, iT, zT, kT) => {
        throw (0, LT.k)("FileTools")
      }
    }
  },
  38635: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT,
      f: () => kT,
      j: () => XT,
      m: () => WT,
      o: () => BT
    });
    var iT = IT(38643);
    const zT = {};

    function kT(TT, oT) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (oT ? oT + "\n" : "") + TT
    }

    function WT(TT, oT, IT, kT, WT, XT, BT) {
      const FT = BT || zT.loadFile;
      if (!FT) throw (0, iT.k)("FileTools");
      return FT(TT, oT, IT, kT, WT, XT)
    }

    function XT(TT, oT, IT, iT) {
      if (TT) return oT ? TT.IS_NDC_HALF_ZRANGE = "" : delete TT.IS_NDC_HALF_ZRANGE, IT ? TT.USE_REVERSE_DEPTHBUFFER = "" : delete TT.USE_REVERSE_DEPTHBUFFER, void(iT ? TT.USE_EXACT_SRGB_CONVERSIONS = "" : delete TT.USE_EXACT_SRGB_CONVERSIONS);
      {
        let TT = "";
        return oT && (TT += "#define IS_NDC_HALF_ZRANGE"), IT && (TT && (TT += "\n"), TT += "#define USE_REVERSE_DEPTHBUFFER"), iT && (TT && (TT += "\n"), TT += "#define USE_EXACT_SRGB_CONVERSIONS"), TT
      }
    }

    function BT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        iT = arguments.length > 3 ? arguments[3] : void 0;
      switch (TT) {
        case 3: {
          const TT = new Int8Array(oT);
          return iT && TT.set(new Int8Array(iT)), TT
        }
        case 0: {
          const TT = new Uint8Array(oT);
          return iT && TT.set(new Uint8Array(iT)), TT
        }
        case 4: {
          const TT = "number" !== typeof oT ? new Int16Array(oT) : new Int16Array(IT ? oT / 2 : oT);
          return iT && TT.set(new Int16Array(iT)), TT
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const TT = "number" !== typeof oT ? new Uint16Array(oT) : new Uint16Array(IT ? oT / 2 : oT);
          return iT && TT.set(new Uint16Array(iT)), TT
        }
        case 6: {
          const TT = "number" !== typeof oT ? new Int32Array(oT) : new Int32Array(IT ? oT / 4 : oT);
          return iT && TT.set(new Int32Array(iT)), TT
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const TT = "number" !== typeof oT ? new Uint32Array(oT) : new Uint32Array(IT ? oT / 4 : oT);
          return iT && TT.set(new Uint32Array(iT)), TT
        }
        case 1: {
          const TT = "number" !== typeof oT ? new Float32Array(oT) : new Float32Array(IT ? oT / 4 : oT);
          return iT && TT.set(new Float32Array(iT)), TT
        }
      }
      const zT = new Uint8Array(oT);
      return iT && zT.set(new Uint8Array(iT)), zT
    }
  },
  38643: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => FT,
      f: () => ST,
      i: () => BT,
      k: () => zT
    });
    const iT = {};

    function zT(TT) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !iT[TT]) return iT[TT] = !0, `${TT} needs to be imported before as it contains a side-effect required by your code.`
    }
    const kT = {};
    let WT = !1,
      XT = 0;

    function BT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const iT = function() {
        if ((IT || WT) && 0 === XT) {
          const IT = `${TT}.${oT}`;
          kT[IT] || (kT[IT] = !0, console.warn(`[Babylon.js] ${IT}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return iT.__isSideEffectStub = !0, iT
    }

    function FT(TT) {
      return !!TT && !TT.__isSideEffectStub
    }

    function ST(TT, oT) {
      return {
        get() {},
        set(TT) {
          Object.defineProperty(this, oT, {
            value: TT,
            writable: !0,
            configurable: !0,
            enumerable: !0
          })
        },
        configurable: !0,
        enumerable: !0
      }
    }
  },
  38626: (TT, oT, IT) => {
    function iT() {
      return "undefined" !== typeof window
    }

    function zT() {
      return "undefined" !== typeof navigator
    }

    function kT() {
      return "undefined" !== typeof document
    }

    function WT(TT) {
      let oT = "",
        IT = TT.firstChild;
      for (; IT;) 3 === IT.nodeType && (oT += IT.textContent), IT = IT.nextSibling;
      return oT
    }
    IT.d(oT, {
      d: () => WT,
      e: () => kT,
      g: () => zT,
      k: () => iT
    })
  },
  38838: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT,
      g: () => zT,
      k: () => kT
    });
    class iT extends Error {}
    iT._setPrototypeOf = Object.setPrototypeOf || ((TT, oT) => (TT.__proto__ = oT, TT));
    const zT = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class kT extends iT {
      constructor(TT, oT, IT) {
        super(TT), this.errorCode = oT, this.innerError = IT, this.name = "RuntimeError", iT._setPrototypeOf(this, kT.prototype)
      }
    }
  },
  38827: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => jT,
      f: () => gT,
      i: () => vT,
      m: () => fT,
      q: () => RT,
      r: () => mT,
      u: () => eT,
      v: () => QT,
      y: () => uT,
      A: () => hT
    });
    var iT = IT(38835),
      zT = IT(38626),
      kT = IT(36149);
    class WT {}
    WT.FilesToLoad = {};
    var XT = IT(38838),
      BT = IT(38845),
      FT = IT(36146),
      ST = IT(38635),
      DT = IT(38647),
      LT = IT(37660),
      xT = IT(38653),
      cT = IT(38851);
    const KT = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class MT extends XT.k {
      constructor(TT, oT) {
        super(TT, XT.g.LoadFileError), this.name = "LoadFileError", XT.d._setPrototypeOf(this, MT.prototype), oT instanceof iT.b ? this.request = oT : this.file = oT
      }
    }
    class rT extends XT.k {
      constructor(TT, oT) {
        super(TT, XT.g.RequestFileError), this.request = oT, this.name = "RequestFileError", XT.d._setPrototypeOf(this, rT.prototype)
      }
    }
    class AT extends XT.k {
      constructor(TT, oT) {
        super(TT, XT.g.ReadFileError), this.file = oT, this.name = "ReadFileError", XT.d._setPrototypeOf(this, AT.prototype)
      }
    }
    const gT = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (IT, iT, zT) => 0 !== iT.status || zT >= TT || -1 !== IT.indexOf("file:") ? -1 : Math.pow(2, zT) * oT
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: TT => TT,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: TT => TT,
        CleanUrl: TT => TT = TT.replace(/#/gm, "%23")
      },
      hT = (TT, oT) => {
        if ((!TT || 0 !== TT.indexOf("data:")) && gT.CorsBehavior)
          if ("string" === typeof gT.CorsBehavior || gT.CorsBehavior instanceof String) oT.crossOrigin = gT.CorsBehavior;
          else {
            const IT = gT.CorsBehavior(TT);
            IT && (oT.crossOrigin = IT)
          }
      },
      wT = {
        getRequiredSize: null
      },
      mT = function(TT, oT, IT, zT) {
        let kT, XT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          ST = arguments.length > 5 ? arguments[5] : void 0,
          DT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : FT.d.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !DT?._features.forceBitmapOverHTMLImageElement) return IT("LoadImage is only supported in web or BabylonNative environments."), null;
        if (DT?._features.forceBitmapOverHTMLImageElement && "string" !== typeof TT && "undefined" !== typeof Blob) {
          let iT;
          if (TT instanceof Blob) iT = TT;
          else {
            const oT = TT instanceof ArrayBuffer ? TT : (0, cT.i)(TT);
            iT = new Blob([oT], {
              type: XT
            })
          }
          return DT.createImageBitmap(iT, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...ST
          }).then(oT).catch((oT => {
            IT && IT("Error while trying to load image: " + TT, oT)
          })), null
        }
        let LT = !1;
        if (TT instanceof ArrayBuffer || ArrayBuffer.isView(TT))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let oT;
            oT = TT instanceof ArrayBuffer ? TT : (0, cT.i)(TT), kT = URL.createObjectURL(new Blob([oT], {
              type: XT
            })), LT = !0
          } else kT = `data:${XT};base64,` + (0, BT.f)(TT);
        else TT instanceof Blob ? (kT = URL.createObjectURL(TT), LT = !0) : (kT = gT.CleanUrl(TT), kT = gT.PreprocessUrl(kT));
        const xT = oT => {
          if (IT) {
            const iT = kT || TT.toString();
            IT(`Error while trying to load image: ${0===iT.indexOf("http")||iT.length<=128?iT:iT.slice(0,128)+"..."}`, oT)
          }
        };
        if (DT?._features.forceBitmapOverHTMLImageElement) return RT(kT, (iT => {
          DT.createImageBitmap(new Blob([iT], {
            type: XT
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...ST
          }).then((TT => {
            oT(TT), LT && URL.revokeObjectURL(kT)
          })).catch((oT => {
            IT && IT("Error while trying to load image: " + TT, oT)
          }))
        }), void 0, zT || void 0, !0, ((TT, oT) => {
          xT(oT)
        })), null;
        const KT = new Image;
        if (wT.getRequiredSize) {
          const oT = wT.getRequiredSize(TT);
          oT.width && (KT.width = oT.width), oT.height && (KT.height = oT.height)
        }
        hT(kT, KT);
        const MT = [],
          rT = () => {
            for (const TT of MT) TT.target.removeEventListener(TT.name, TT.handler);
            MT.length = 0
          };
        MT.push({
          target: KT,
          name: "load",
          handler: () => {
            rT(), oT(KT), LT && KT.src && URL.revokeObjectURL(KT.src)
          }
        }), MT.push({
          target: KT,
          name: "error",
          handler: TT => {
            rT(), xT(TT), LT && KT.src && URL.revokeObjectURL(KT.src)
          }
        }), MT.push({
          target: document,
          name: "securitypolicyviolation",
          handler: TT => {
            if (TT.blockedURI !== KT.src || "Bc" === TT.disposition) return;
            rT();
            const oT = new Error(`CSP violation of policy ${TT.effectiveDirective} ${TT.blockedURI}. Current policy is ${TT.originalPolicy}`);
            FT.d.UseFallbackTexture = !1, xT(oT), LT && KT.src && URL.revokeObjectURL(KT.src), KT.src = ""
          }
        }), (() => {
          for (const TT of MT) TT.target.addEventListener(TT.name, TT.handler)
        })();
        const AT = "blob:" === kT.substring(0, 5),
          mT = "data:" === kT.substring(0, 5),
          eT = () => {
            AT || mT || !iT.b.IsCustomRequestAvailable ? KT.src = kT : RT(kT, ((TT, oT, IT) => {
              const iT = new Blob([TT], {
                  type: !XT && IT ? IT : XT
                }),
                zT = URL.createObjectURL(iT);
              LT = !0, KT.src = zT
            }), void 0, zT || void 0, !0, ((TT, oT) => {
              xT(oT)
            }))
          },
          uT = () => {
            zT && zT.loadImage(kT, KT)
          };
        if (!AT && !mT && zT && zT.enableTexturesOffline) zT.open(uT, eT);
        else {
          if (-1 !== kT.indexOf("file:")) {
            const TT = decodeURIComponent(kT.substring(5).toLowerCase());
            if (WT.FilesToLoad[TT] && "undefined" !== typeof URL) {
              try {
                let oT;
                try {
                  oT = URL.createObjectURL(WT.FilesToLoad[TT])
                } catch (vT) {
                  oT = URL.createObjectURL(WT.FilesToLoad[TT])
                }
                KT.src = oT, LT = !0
              } catch (ET) {
                KT.src = ""
              }
              return KT
            }
          }
          eT()
        }
        return KT
      },
      eT = (TT, oT, IT, iT, zT) => {
        const WT = new FileReader,
          XT = {
            onCompleteObservable: new kT.d,
            abort: () => WT.abort()
          };
        return WT.onloadend = () => XT.onCompleteObservable.notifyObservers(XT), zT && (WT.onerror = () => {
          zT(new AT(`Unable to read ${TT.name}`, TT))
        }), WT.onload = TT => {
          oT(TT.target.result)
        }, IT && (WT.onprogress = IT), iT ? WT.readAsArrayBuffer(TT) : WT.readAsText(TT), XT
      },
      RT = (TT, oT, IT, iT, zT, BT, FT) => {
        if (TT.name) return eT(TT, oT, IT, zT, BT ? TT => {
          BT(void 0, TT)
        } : void 0);
        const ST = TT;
        if (-1 !== ST.indexOf("file:")) {
          let TT = decodeURIComponent(ST.substring(5).toLowerCase());
          0 === TT.indexOf("./") && (TT = TT.substring(2));
          const iT = WT.FilesToLoad[TT];
          if (iT) return eT(iT, oT, IT, zT, BT ? TT => BT(void 0, new MT(TT.message, TT.file)) : void 0)
        }
        const {
          match: DT,
          type: cT
        } = CT(ST);
        if (DT) {
          const TT = {
            onCompleteObservable: new kT.d,
            abort: () => () => {}
          };
          try {
            const TT = zT ? jT(ST) : JT(ST);
            oT(TT, void 0, cT)
          } catch (XT) {
            BT ? BT(void 0, XT) : LT.d.Error(XT.message || "Failed to parse the Data URL")
          }
          return xT.c.SetImmediate((() => {
            TT.onCompleteObservable.notifyObservers(TT)
          })), TT
        }
        return uT(ST, ((TT, IT) => {
          oT(TT, IT?.responseURL, IT?.getResponseHeader("content-type"))
        }), IT, iT, zT, BT ? TT => {
          BT(TT.request, new MT(TT.message, TT.request))
        } : void 0, FT)
      },
      uT = (TT, oT, IT, WT, XT, BT, ST) => {
        null !== WT && (WT ?? (WT = FT.d.LastCreatedScene?.offlineProvider)), TT = gT.CleanUrl(TT), TT = gT.PreprocessUrl(TT);
        const DT = gT.BaseUrl + TT;
        let xT = !1;
        const cT = {
            onCompleteObservable: new kT.d,
            abort: () => xT = !0
          },
          KT = () => {
            let TT, kT = new iT.b,
              WT = null;
            const FT = () => {
              kT && (IT && kT.removeEventListener("progress", IT), TT && kT.removeEventListener("readystatechange", TT), kT.removeEventListener("loadend", KT))
            };
            let KT = () => {
              FT(), cT.onCompleteObservable.notifyObservers(cT), cT.onCompleteObservable.clear(), IT = void 0, TT = null, KT = null, BT = void 0, ST = void 0, oT = void 0
            };
            cT.abort = () => {
              xT = !0, KT && KT(), kT && kT.readyState !== (XMLHttpRequest.DONE || 4) && kT.abort(), null !== WT && (clearTimeout(WT), WT = null), kT = null
            };
            const MT = TT => {
                const oT = TT.message || "Unknown error";
                BT && kT ? BT(new rT(oT, kT)) : LT.d.Error(oT)
              },
              AT = LT => {
                if (kT) {
                  if (kT.open("GET", DT), ST) try {
                    ST(kT)
                  } catch (cT) {
                    return void MT(cT)
                  }
                  XT && (kT.responseType = "arraybuffer"), IT && kT.addEventListener("progress", IT), KT && kT.addEventListener("loadend", KT), TT = () => {
                    if (!xT && kT && kT.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (TT && kT.removeEventListener("readystatechange", TT), kT.status >= 200 && kT.status < 300 || 0 === kT.status && (!(0, zT.k)() || ET())) {
                        const TT = XT ? kT.response : kT.responseText;
                        if (null !== TT) {
                          try {
                            oT && oT(TT, kT)
                          } catch (cT) {
                            MT(cT)
                          }
                          return
                        }
                      }
                      const IT = gT.DefaultRetryStrategy;
                      if (IT) {
                        const TT = IT(DT, kT, LT);
                        if (-1 !== TT) return FT(), kT = new iT.b, void(WT = setTimeout((() => AT(LT + 1)), TT))
                      }
                      const ST = new rT("Error status: " + kT.status + " " + kT.statusText + " - Unable to load " + DT, kT);
                      BT && BT(ST)
                    }
                  }, kT.addEventListener("readystatechange", TT), kT.send()
                }
              };
            AT(0)
          };
        if (WT && WT.enableSceneOffline && !TT.startsWith("blob:")) {
          const iT = TT => {
              TT && TT.status > 400 ? BT && BT(TT) : KT()
            },
            zT = () => {
              WT && WT.loadFile(gT.BaseUrl + TT, (TT => {
                !xT && oT && oT(TT), cT.onCompleteObservable.notifyObservers(cT)
              }), IT ? TT => {
                !xT && IT && IT(TT)
              } : void 0, iT, XT)
            };
          WT.open(zT, iT)
        } else KT();
        return cT
      },
      vT = TT => {
        const {
          match: oT,
          type: IT
        } = CT(TT);
        if (oT) return IT || void 0;
        const iT = TT.lastIndexOf(".");
        switch (TT.substring(iT + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "nC":
            return "model/gltf+json";
          case "jpg":
          case "jpeg":
            return "image/jpeg";
          case "png":
            return "image/png";
          case "webp":
            return "image/webp";
          case "ktx":
            return "image/ktx";
          case "ktx2":
            return "image/ktx2";
          case "avif":
            return "image/avif";
          default:
            return
        }
      },
      ET = () => "undefined" !== typeof location && "file:" === location.protocol,
      fT = TT => KT.test(TT),
      CT = TT => {
        const oT = KT.exec(TT);
        if (null === oT || 0 === oT.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: oT[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function jT(TT) {
      return (0, BT.c)(TT.split(",")[1])
    }
    const JT = TT => (0, BT.d)(TT.split(",")[1]);
    let UT;
    const aT = (TT, oT, IT, iT, zT, kT, WT, XT, BT, FT) => {
      UT = {
        DecodeBase64UrlToBinary: TT,
        DecodeBase64UrlToString: oT,
        DefaultRetryStrategy: IT.DefaultRetryStrategy,
        BaseUrl: IT.BaseUrl,
        CorsBehavior: IT.CorsBehavior,
        PreprocessUrl: IT.PreprocessUrl,
        IsBase64DataUrl: iT,
        IsFileURL: zT,
        LoadFile: kT,
        LoadImage: WT,
        ReadFile: XT,
        RequestFile: BT,
        SetCorsBehavior: FT
      }, Object.defineProperty(UT, "DefaultRetryStrategy", {
        get: function() {
          return IT.DefaultRetryStrategy
        },
        set: function(TT) {
          IT.DefaultRetryStrategy = TT
        }
      }), Object.defineProperty(UT, "BaseUrl", {
        get: function() {
          return IT.BaseUrl
        },
        set: function(TT) {
          IT.BaseUrl = TT
        }
      }), Object.defineProperty(UT, "PreprocessUrl", {
        get: function() {
          return IT.PreprocessUrl
        },
        set: function(TT) {
          IT.PreprocessUrl = TT
        }
      }), Object.defineProperty(UT, "CorsBehavior", {
        get: function() {
          return IT.CorsBehavior
        },
        set: function(TT) {
          IT.CorsBehavior = TT
        }
      })
    };
    let YT = !1;

    function QT() {
      YT || (YT = !0, aT(jT, JT, gT, fT, ET, RT, mT, eT, uT, hT), ST.d.loadFile = RT, ST.d.loadImage = mT, DT.k.loadFile = RT)
    }
  },
  38853: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => XT,
      e: () => kT,
      i: () => WT
    });
    let iT = null;

    function zT() {
      if (iT) return iT;
      const TT = new ArrayBuffer(4),
        oT = new Float32Array(TT),
        IT = new Uint32Array(TT),
        zT = new Uint32Array(512),
        kT = new Uint32Array(512);
      for (let iT = 0; iT < 256; ++iT) {
        const TT = iT - 127;
        TT < -24 ? (zT[iT] = 0, zT[256 | iT] = 32768, kT[iT] = 24, kT[256 | iT] = 24) : TT < -14 ? (zT[iT] = 1024 >> -TT - 14, zT[256 | iT] = 1024 >> -TT - 14 | 32768, kT[iT] = -TT - 1, kT[256 | iT] = -TT - 1) : TT <= 15 ? (zT[iT] = TT + 15 << 10, zT[256 | iT] = TT + 15 << 10 | 32768, kT[iT] = 13, kT[256 | iT] = 13) : TT < 128 ? (zT[iT] = 31744, zT[256 | iT] = 64512, kT[iT] = 24, kT[256 | iT] = 24) : (zT[iT] = 31744, zT[256 | iT] = 64512, kT[iT] = 13, kT[256 | iT] = 13)
      }
      const WT = new Uint32Array(2048),
        XT = new Uint32Array(64),
        BT = new Uint32Array(64);
      for (let iT = 1; iT < 1024; ++iT) {
        let TT = iT << 13,
          oT = 0;
        for (; 0 === (8388608 & TT);) TT <<= 1, oT -= 8388608;
        TT &= -8388609, oT += 947912704, WT[iT] = TT | oT
      }
      for (let iT = 1024; iT < 2048; ++iT) WT[iT] = 939524096 + (iT - 1024 << 13);
      for (let iT = 1; iT < 31; ++iT) XT[iT] = iT << 23;
      XT[31] = 1199570944, XT[32] = 2147483648;
      for (let iT = 33; iT < 63; ++iT) XT[iT] = 2147483648 + (iT - 32 << 23);
      XT[63] = 3347054592;
      for (let iT = 1; iT < 64; ++iT) 32 !== iT && (BT[iT] = 1024);
      return iT = {
        floatView: oT,
        uint32View: IT,
        baseTable: zT,
        shiftTable: kT,
        mantissaTable: WT,
        exponentTable: XT,
        offsetTable: BT
      }, iT
    }
    const kT = 65504;

    function WT(TT) {
      const oT = zT();
      oT.floatView[0] = TT;
      const IT = oT.uint32View[0],
        iT = IT >> 23 & 511;
      return oT.baseTable[iT] + ((8388607 & IT) >> oT.shiftTable[iT])
    }

    function XT(TT) {
      const oT = zT();
      return oT.uint32View[0] = oT.mantissaTable[oT.offsetTable[TT >> 10] + (1023 & TT)] + oT.exponentTable[TT >> 10], oT.floatView[0]
    }
  },
  38845: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      d: () => zT,
      f: () => iT
    });
    const iT = TT => {
        const oT = ArrayBuffer.isView(TT) ? new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength) : new Uint8Array(TT);
        return "function" === typeof oT.toBase64 ? oT.toBase64() : function(TT) {
          const oT = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let IT, iT, zT, kT, WT, XT, BT, FT = "",
            ST = 0;
          for (; ST < TT.length;) IT = TT[ST++], iT = ST < TT.length ? TT[ST++] : Number.NaN, zT = ST < TT.length ? TT[ST++] : Number.NaN, kT = IT >> 2, WT = (3 & IT) << 4 | iT >> 4, XT = (15 & iT) << 2 | zT >> 6, BT = 63 & zT, isNaN(iT) ? XT = BT = 64 : isNaN(zT) && (BT = 64), FT += oT.charAt(kT) + oT.charAt(WT) + oT.charAt(XT) + oT.charAt(BT);
          return FT
        }(oT)
      },
      zT = TT => atob(TT),
      kT = TT => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(TT).buffer : function(TT) {
        const oT = zT(TT),
          IT = oT.length,
          iT = new Uint8Array(new ArrayBuffer(IT));
        for (let zT = 0; zT < IT; zT++) iT[zT] = oT.charCodeAt(zT);
        return iT.buffer
      }(TT)
  },
  38653: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT,
      e: () => WT
    });
    let iT = [];
    class zT {
      static SetImmediate(TT) {
        0 === iT.length && setTimeout((() => {
          const TT = iT;
          iT = [];
          for (const oT of TT) oT()
        }), 1), iT.push(TT)
      }
    }

    function kT(TT, oT, IT) {
      try {
        if (TT()) return oT(), !0
      } catch (iT) {
        return IT?.(iT), !0
      }
      return !1
    }
    const WT = function(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        WT = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && kT(TT, oT, IT)) return null;
      const XT = setInterval((() => {
        kT(TT, oT, IT) ? clearInterval(XT) : (zT -= iT, zT < 0 && (clearInterval(XT), IT?.(new Error("Operation timed out after maximum retries. " + (WT || "")), !0)))
      }), iT);
      return () => clearInterval(XT)
    }
  },
  38835: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    class iT {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(iT.CustomRequestHeaders).length > 0 || iT.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(TT) {
        return TT = (TT = TT.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(TT) {
        return iT.SkipRequestModificationForBabylonCDN && (TT.includes("preview.babylonjs.com") || TT.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(TT) {
        const oT = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (iT._ShouldSkipRequestModifications(TT)) return {
          url: TT,
          headers: oT
        };
        for (const zT in iT.CustomRequestHeaders) {
          const TT = iT.CustomRequestHeaders[zT];
          TT && (oT[zT] = TT)
        }
        const IT = {
          setRequestHeader: (TT, IT) => {
            oT[TT] = IT
          }
        };
        for (const zT of iT.CustomRequestModifiers) {
          if (iT._ShouldSkipRequestModifications(TT)) break;
          const oT = zT(IT, TT);
          "string" === typeof oT && (TT = oT)
        }
        return {
          url: TT,
          headers: oT
        }
      }
      static async FetchAsync(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const IT = oT.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: zT,
            headers: kT
          } = iT._CollectCustomizations(iT._CleanUrl(TT), oT.headers ?? {});
          return await fetch(zT, {
            method: IT,
            headers: kT,
            body: oT.body ?? void 0
          })
        }
        return await new Promise(((zT, kT) => {
          const WT = new iT;
          WT.responseType = "arraybuffer", WT.addEventListener("readystatechange", (() => {
            if (4 === WT.readyState)
              if (WT.status >= 200 && WT.status < 300) {
                const TT = "undefined" !== typeof Headers ? new Headers : void 0,
                  oT = WT.getResponseHeader("Content-Type");
                oT && TT && TT.set("Content-Type", oT), "undefined" !== typeof Response ? zT(new Response(WT.response, {
                  status: WT.status,
                  statusText: WT.statusText,
                  headers: TT
                })) : zT({
                  ok: !0,
                  status: WT.status,
                  statusText: WT.statusText,
                  headers: {
                    get: TT => WT.getResponseHeader(TT)
                  },
                  arrayBuffer: async () => await Promise.resolve(WT.response)
                })
              } else kT(new Error(`HTTP ${WT.status} loading '${WT.requestURL}': ${WT.statusText}`))
          })), WT.open(IT, TT, oT.headers), WT.send(oT.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(TT) {
        this._xhr.onprogress = TT
      }
      get readyState() {
        return this._xhr.readyState
      }
      get status() {
        return this._xhr.status
      }
      get statusText() {
        return this._xhr.statusText
      }
      get response() {
        return this._xhr.response
      }
      get responseURL() {
        return this._xhr.responseURL
      }
      get responseText() {
        return this._xhr.responseText
      }
      get responseType() {
        return this._xhr.responseType
      }
      set responseType(TT) {
        this._xhr.responseType = TT
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(TT) {
        this._xhr.timeout = TT
      }
      addEventListener(TT, oT, IT) {
        this._xhr.addEventListener(TT, oT, IT)
      }
      removeEventListener(TT, oT, IT) {
        this._xhr.removeEventListener(TT, oT, IT)
      }
      abort() {
        this._xhr.abort()
      }
      send(TT) {
        this._xhr.send(TT)
      }
      open(TT, oT, IT) {
        const {
          url: zT,
          headers: kT
        } = iT._CollectCustomizations(oT, IT);
        this._requestURL = iT._CleanUrl(zT), this._xhr.open(TT, this._requestURL, !0);
        for (const iT in kT) this._xhr.setRequestHeader(iT, kT[iT])
      }
      setRequestHeader(TT, oT) {
        this._xhr.setRequestHeader(TT, oT)
      }
      getResponseHeader(TT) {
        return this._xhr.getResponseHeader(TT)
      }
    }
    iT.CustomRequestHeaders = {}, iT.CustomRequestModifiers = new Array, iT.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);