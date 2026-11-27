export const id = 289;
export const ids = [289];
export const modules = {
  41582: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => xW,
      e: () => ZW,
      f: () => cW,
      g: () => lW,
      j: () => wW,
      k: () => LW,
      l: () => tW
    });
    var mW = OW(39911),
      EW = OW(41586);

    function NW(WW, iW, OW, mW) {
      switch (iW) {
        case 5120: {
          let iW = WW.getInt8(OW);
          return mW && (iW = Math.max(iW / 127, -1)), iW
        }
        case 5121: {
          let iW = WW.getUint8(OW);
          return mW && (iW /= 255), iW
        }
        case 5122: {
          let iW = WW.getInt16(OW, !0);
          return mW && (iW = Math.max(iW / 32767, -1)), iW
        }
        case 5123: {
          let iW = WW.getUint16(OW, !0);
          return mW && (iW /= 65535), iW
        }
        case 5131:
          return (0, EW.d)(WW.getUint16(OW, !0));
        case 5124:
          return WW.getInt32(OW, !0);
        case 5125:
          return WW.getUint32(OW, !0);
        case 5126:
          return WW.getFloat32(OW, !0);
        default:
          throw new Error(`Invalid component type ${iW}`)
      }
    }

    function PW(WW, iW, OW, mW, NW) {
      switch (iW) {
        case 5120:
          mW && (NW = Math.round(127 * NW)), WW.setInt8(OW, NW);
          break;
        case 5121:
          mW && (NW = Math.round(255 * NW)), WW.setUint8(OW, NW);
          break;
        case 5122:
          mW && (NW = Math.round(32767 * NW)), WW.setInt16(OW, NW, !0);
          break;
        case 5123:
          mW && (NW = Math.round(65535 * NW)), WW.setUint16(OW, NW, !0);
          break;
        case 5131:
          WW.setUint16(OW, (0, EW.k)(NW), !0);
          break;
        case 5124:
          WW.setInt32(OW, NW, !0);
          break;
        case 5125:
          WW.setUint32(OW, NW, !0);
          break;
        case 5126:
          WW.setFloat32(OW, NW, !0);
          break;
        default:
          throw new Error(`Invalid component type ${iW}`)
      }
    }

    function LW(WW) {
      switch (WW) {
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
          throw new Error(`Invalid type '${WW}'`)
      }
    }

    function cW(WW, iW, OW, mW, EW, cW, wW, tW) {
      const ZW = new Array(mW),
        xW = new Array(mW);
      if (WW instanceof Array) {
        let EW = iW / 4;
        const NW = OW / 4;
        for (let iW = 0; iW < cW; iW += mW) {
          for (let iW = 0; iW < mW; iW++) ZW[iW] = xW[iW] = WW[EW + iW];
          tW(xW, iW);
          for (let iW = 0; iW < mW; iW++) ZW[iW] !== xW[iW] && (WW[EW + iW] = xW[iW]);
          EW += NW
        }
      } else {
        const lW = ArrayBuffer.isView(WW) ? new DataView(WW.buffer, WW.byteOffset, WW.byteLength) : new DataView(WW),
          AW = LW(EW);
        for (let WW = 0; WW < cW; WW += mW) {
          for (let WW = 0, OW = iW; WW < mW; WW++, OW += AW) ZW[WW] = xW[WW] = NW(lW, EW, OW, wW);
          tW(xW, WW);
          for (let WW = 0, OW = iW; WW < mW; WW++, OW += AW) ZW[WW] !== xW[WW] && PW(lW, EW, OW, wW, xW[WW]);
          iW += OW
        }
      }
    }

    function wW(WW, iW, OW, EW, NW, PW, wW, tW) {
      const ZW = iW * LW(OW),
        xW = wW * iW;
      if (5126 !== OW || NW !== ZW) {
        const mW = new Float32Array(xW);
        return cW(WW, EW, NW, iW, OW, xW, PW, ((WW, OW) => {
          for (let EW = 0; EW < iW; EW++) mW[OW + EW] = WW[EW]
        })), mW
      }
      if (!(WW instanceof Array || WW instanceof Float32Array) || 0 !== EW || WW.length !== xW) {
        if (WW instanceof Array) {
          const iW = EW / 4;
          return WW.slice(iW, iW + xW)
        }
        if (ArrayBuffer.isView(WW)) {
          const iW = WW.byteOffset + EW;
          return 0 !== (3 & iW) && (mW.b.Warn("Float array must be aligned to 4-bytes border"), tW = !0), tW ? new Float32Array(WW.buffer.slice(iW, iW + xW * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(WW.buffer, iW, xW)
        }
        return new Float32Array(WW, EW, xW)
      }
      return tW ? WW.slice() : WW
    }

    function tW(WW, iW, OW, EW, NW, PW, wW) {
      const tW = LW(OW),
        ZW = function(WW) {
          switch (WW) {
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
              throw new Error(`Invalid component type '${WW}'`)
          }
        }(OW),
        xW = PW * iW;
      if (Array.isArray(WW)) {
        if (0 !== (3 & EW) || 0 !== (3 & NW)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const mW = EW / 4,
          LW = NW / 4;
        if (mW + (PW - 1) * LW + iW > WW.length) throw new Error("Last accessed index is out of bounds.");
        if (LW < iW) throw new Error("Data stride cannot be smaller than the component size.");
        if (LW !== iW) {
          const mW = new ZW(xW);
          return cW(WW, EW, NW, iW, OW, xW, !1, ((WW, OW) => {
            for (let EW = 0; EW < iW; EW++) mW[OW + EW] = WW[EW]
          })), mW
        }
        return new ZW(WW.slice(mW, mW + xW))
      }
      let lW, AW = EW;
      ArrayBuffer.isView(WW) ? (lW = WW.buffer, AW += WW.byteOffset) : lW = WW;
      if (AW + (PW - 1) * NW + iW * tW > lW.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const bW = iW * tW;
      if (NW < bW) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (NW !== bW) {
        const WW = new ZW(xW),
          OW = new Uint8Array(lW, AW),
          mW = new Uint8Array(WW.buffer),
          EW = iW * tW;
        for (let iW = 0, LW = 0, cW = 0; iW < PW; iW++, LW += NW, cW += EW) mW.set(OW.subarray(LW, LW + EW), cW);
        return WW
      }
      return 1 !== tW && 0 !== (AW & tW - 1) && (mW.b.Warn("Array must be aligned to border of element size. Data will be copied."), wW = !0), wW ? new ZW(lW.slice(AW, AW + xW * tW)) : new ZW(lW, AW, xW)
    }

    function ZW(WW, iW, OW, EW, NW, PW, wW, tW) {
      const ZW = iW * LW(OW),
        xW = wW * iW;
      if (tW.length !== xW) throw new Error("Output length is not valid");
      if (5126 === OW && NW === ZW)
        if (WW instanceof Array) {
          const iW = EW / 4;
          tW.set(WW, iW)
        } else if (ArrayBuffer.isView(WW)) {
        const iW = WW.byteOffset + EW;
        if (0 !== (3 & iW)) return mW.b.Warn("Float array must be aligned to 4-bytes border"), void tW.set(new Float32Array(WW.buffer.slice(iW, iW + xW * Float32Array.BYTES_PER_ELEMENT)));
        const OW = new Float32Array(WW.buffer, iW, xW);
        tW.set(OW)
      } else {
        const iW = new Float32Array(WW, EW, xW);
        tW.set(iW)
      } else cW(WW, EW, NW, iW, OW, xW, PW, ((WW, OW) => {
        for (let mW = 0; mW < iW; mW++) tW[OW + mW] = WW[mW]
      }))
    }

    function xW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(WW)) {
        for (let EW = 0; EW < iW; EW++)
          if (WW[OW + EW] - mW > 65535) return !0;
        return !1
      }
      return 4 === WW.BYTES_PER_ELEMENT
    }

    function lW(WW) {
      const iW = WW.buffer;
      if (iW instanceof ArrayBuffer) return WW;
      const OW = new ArrayBuffer(WW.byteLength);
      return new Uint8Array(OW).set(new Uint8Array(iW, WW.byteOffset, WW.byteLength)), OW
    }
  },
  41418: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => yW,
      c: () => SW,
      i: () => YW,
      e: () => oW,
      j: () => dW
    });
    class mW {
      constructor() {
        this.children = []
      }
      isValid(WW) {
        return !0
      }
      process(WW, iW, OW) {
        let mW = "";
        if (this.line) {
          let OW = this.line;
          const EW = iW.processor;
          if (EW) {
            EW.lineProcessor && (OW = EW.lineProcessor(OW, iW.isFragment, iW.processingContext));
            const mW = iW.processor?.attributeKeywordName ?? "attribute",
              NW = iW.isFragment && iW.processor?.varyingFragmentKeywordName ? iW.processor?.varyingFragmentKeywordName : !iW.isFragment && iW.processor?.varyingVertexKeywordName ? iW.processor?.varyingVertexKeywordName : "varying";
            if (!iW.isFragment && EW.attributeProcessor && this.line.startsWith(mW)) OW = EW.attributeProcessor(this.line, WW, iW.processingContext);
            else if (EW.varyingProcessor && (EW.varyingCheck?.(this.line, iW.isFragment) || !EW.varyingCheck && this.line.startsWith(NW))) OW = EW.varyingProcessor(this.line, iW.isFragment, WW, iW.processingContext);
            else if (EW.uniformProcessor && EW.uniformRegexp && EW.uniformRegexp.test(this.line)) iW.lookForClosingBracketForUniformBuffer || (OW = EW.uniformProcessor(this.line, iW.isFragment, WW, iW.processingContext));
            else if (EW.uniformBufferProcessor && EW.uniformBufferRegexp && EW.uniformBufferRegexp.test(this.line)) iW.lookForClosingBracketForUniformBuffer || (OW = EW.uniformBufferProcessor(this.line, iW.isFragment, iW.processingContext), iW.lookForClosingBracketForUniformBuffer = !0);
            else if (EW.textureProcessor && EW.textureRegexp && EW.textureRegexp.test(this.line)) OW = EW.textureProcessor(this.line, iW.isFragment, WW, iW.processingContext);
            else if ((EW.uniformProcessor || EW.uniformBufferProcessor) && this.line.startsWith("uniform") && !iW.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? EW.uniformProcessor && (OW = EW.uniformProcessor(this.line, iW.isFragment, WW, iW.processingContext)) : EW.uniformBufferProcessor && (OW = EW.uniformBufferProcessor(this.line, iW.isFragment, iW.processingContext), iW.lookForClosingBracketForUniformBuffer = !0)
            }
            iW.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (iW.lookForClosingBracketForUniformBuffer = !1, EW.endOfUniformBufferProcessor && (OW = EW.endOfUniformBufferProcessor(this.line, iW.isFragment, iW.processingContext)))
          }
          mW += OW + "\n"
        }
        for (const EW of this.children) mW += EW.process(WW, iW, OW);
        return this.additionalDefineKey && (WW[this.additionalDefineKey] = this.additionalDefineValue || "true", OW[this.additionalDefineKey] = WW[this.additionalDefineKey]), mW
      }
    }
    class EW {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(WW) {
        this._lines.length = 0;
        for (const iW of WW) {
          if (!iW || "\r" === iW) continue;
          if ("#" === iW[0]) {
            this._lines.push(iW);
            continue
          }
          const WW = iW.trim();
          if (!WW) continue;
          if (WW.startsWith("//")) {
            this._lines.push(iW);
            continue
          }
          const OW = WW.indexOf(";");
          if (-1 === OW) this._lines.push(WW);
          else if (OW === WW.length - 1) WW.length > 1 && this._lines.push(WW);
          else {
            const WW = iW.split(";");
            for (let iW = 0; iW < WW.length; iW++) {
              let OW = WW[iW];
              OW && (OW = OW.trim(), OW && this._lines.push(OW + (iW !== WW.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class NW extends mW {
      process(WW, iW, OW) {
        for (let mW = 0; mW < this.children.length; mW++) {
          const EW = this.children[mW];
          if (EW.isValid(WW)) return EW.process(WW, iW, OW)
        }
        return ""
      }
    }
    class PW extends mW {
      isValid(WW) {
        return this.testExpression.isTrue(WW)
      }
    }
    class LW {
      isTrue(WW) {
        return !0
      }
      static postfixToInfix(WW) {
        const iW = [];
        for (const OW of WW)
          if (void 0 === LW._OperatorPriority[OW]) iW.push(OW);
          else {
            const WW = iW[iW.length - 1],
              mW = iW[iW.length - 2];
            iW.length -= 2, iW.push(`(${mW}${OW}${WW})`)
          } return iW[iW.length - 1]
      }
      static infixToPostfix(WW) {
        const iW = LW._InfixToPostfixCache.get(WW);
        if (iW) return iW.accessTime = Date.now(), iW.result;
        if (!WW.includes("&&") && !WW.includes("||") && !WW.includes(")") && !WW.includes("(")) return [WW];
        const OW = [];
        let mW = -1;
        const EW = () => {
            tW = tW.trim(), "" !== tW && (OW.push(tW), tW = "")
          },
          NW = WW => {
            mW < LW._Stack.length - 1 && (LW._Stack[++mW] = WW)
          },
          PW = () => LW._Stack[mW],
          cW = () => -1 === mW ? "!!INVALID EXPRESSION!!" : LW._Stack[mW--];
        let wW = 0,
          tW = "";
        for (; wW < WW.length;) {
          const iW = WW.charAt(wW),
            ZW = wW < WW.length - 1 ? WW.substring(wW, 2 + wW) : "";
          if ("(" === iW) tW = "", NW(iW);
          else if (")" === iW) {
            for (EW(); - 1 !== mW && "(" !== PW();) OW.push(cW());
            cW()
          } else if (LW._OperatorPriority[ZW] > 1) {
            for (EW(); - 1 !== mW && LW._OperatorPriority[PW()] >= LW._OperatorPriority[ZW];) OW.push(cW());
            NW(ZW), wW++
          } else tW += iW;
          wW++
        }
        for (EW(); - 1 !== mW;) "(" === PW() ? cW() : OW.push(cW());
        return LW._InfixToPostfixCache.size >= LW.InfixToPostfixCacheLimitSize && LW.ClearCache(), LW._InfixToPostfixCache.set(WW, {
          result: OW,
          accessTime: Date.now()
        }), OW
      }
      static ClearCache() {
        const WW = Array.from(LW._InfixToPostfixCache.entries()).sort(((WW, iW) => WW[1].accessTime - iW[1].accessTime));
        for (let iW = 0; iW < LW.InfixToPostfixCacheCleanupSize; iW++) LW._InfixToPostfixCache.delete(WW[iW][0])
      }
    }
    LW.InfixToPostfixCacheLimitSize = 5e4, LW.InfixToPostfixCacheCleanupSize = 25e3, LW._InfixToPostfixCache = new Map, LW._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, LW._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class cW extends LW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = WW, this.not = iW
      }
      isTrue(WW) {
        let iW = void 0 !== WW[this.define];
        return this.not && (iW = !iW), iW
      }
    }
    class wW extends LW {
      isTrue(WW) {
        return this.leftOperand.isTrue(WW) || this.rightOperand.isTrue(WW)
      }
    }
    class tW extends LW {
      isTrue(WW) {
        return this.leftOperand.isTrue(WW) && this.rightOperand.isTrue(WW)
      }
    }
    class ZW extends LW {
      constructor(WW, iW, OW) {
        super(), this.define = WW, this.operand = iW, this.testValue = OW
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(WW) {
        let iW = !1;
        const OW = parseInt(void 0 != WW[this.define] ? WW[this.define] : this.define),
          mW = parseInt(void 0 != WW[this.testValue] ? WW[this.testValue] : this.testValue);
        if (isNaN(OW) || isNaN(mW)) return !1;
        switch (this.operand) {
          case ">":
            iW = OW > mW;
            break;
          case "<":
            iW = OW < mW;
            break;
          case "<=":
            iW = OW <= mW;
            break;
          case ">=":
            iW = OW >= mW;
            break;
          case "==":
            iW = OW === mW;
            break;
          case "!=":
            iW = OW !== mW
        }
        return iW
      }
    }
    var xW = OW(41415),
      lW = OW(41412);
    const AW = /defined\s*?\((.+?)\)/g,
      bW = /defined\s*?\[(.+?)\]/g,
      jW = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      UW = /__decl__/,
      kW = /light\{X\}.(\w*)/g,
      sW = /\{X\}/g,
      MW = [],
      KW = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function SW(WW) {
      WW.processor && WW.processor.initializeShaders && WW.processor.initializeShaders(WW.processingContext)
    }

    function YW(WW, iW, OW, mW) {
      iW.processor?.preProcessShaderCode && (WW = iW.processor.preProcessShaderCode(WW, iW.isFragment)), oW(WW, iW, (WW => {
        iW.processCodeAfterIncludes && (WW = iW.processCodeAfterIncludes(iW.isFragment ? "fragment" : "vertex", WW, iW.defines));
        const EW = function(WW, iW, OW) {
          let mW = function(WW, iW) {
            if (iW.processor?.noPrecision) return WW;
            const OW = iW.shouldUseHighPrecisionShader; - 1 === WW.indexOf("precision highp float") ? WW = OW ? "precision highp float;\n" + WW : "precision mediump float;\n" + WW : OW || (WW = WW.replace("precision highp float", "precision mediump float"));
            return WW
          }(WW, iW);
          if (!iW.processor) return mW;
          if (0 === iW.processor.shaderLanguage && -1 !== mW.indexOf("#version 3") && (mW = mW.replace("#version 300 es", ""), !iW.processor.parseGLES3)) return mW;
          const EW = iW.defines,
            NW = uW(iW, OW);
          iW.processor.preProcessor && (mW = iW.processor.preProcessor(mW, EW, NW, iW.isFragment, iW.processingContext));
          const PW = {};
          mW = nW(mW, NW, iW, PW), iW.processor.postProcessor && (mW = iW.processor.postProcessor(mW, EW, iW.isFragment, iW.processingContext, OW ? {
            drawBuffersExtensionDisabled: !OW.getCaps().drawBuffersExtension
          } : {}, NW, PW));
          OW?._features.needShaderCodeInlining && (mW = OW.inlineShaderCode(mW));
          return mW
        }(WW, iW, mW);
        OW(EW, WW)
      }))
    }

    function yW(WW, iW, OW) {
      return OW.processor && OW.processor.finalizeShaders ? OW.processor.finalizeShaders(WW, iW, OW.processingContext) : {
        vertexCode: WW,
        fragmentCode: iW
      }
    }

    function TW(WW) {
      const iW = /defined\((.+)\)/.exec(WW);
      if (iW && iW.length) return new cW(iW[1].trim(), "!" === WW[0]);
      const OW = ["==", "!=", ">=", "<=", "<", ">"];
      let mW = "",
        EW = 0;
      for (mW of OW)
        if (EW = WW.indexOf(mW), EW > -1) break;
      if (-1 === EW) return new cW(WW);
      const NW = WW.substring(0, EW).trim(),
        PW = WW.substring(EW + mW.length).trim();
      return new ZW(NW, mW, PW)
    }

    function JW(WW, iW) {
      const OW = new PW,
        mW = WW.substring(0, iW);
      let EW = WW.substring(iW);
      return EW = EW.substring(0, (EW.indexOf("//") + 1 || EW.length + 1) - 1).trim(), OW.testExpression = "#ifdef" === mW ? new cW(EW) : "#ifndef" === mW ? new cW(EW, !0) : function(WW) {
        WW = WW.replace(AW, "defined[$1]");
        const iW = LW.infixToPostfix(WW),
          OW = [];
        for (const EW of iW)
          if ("||" !== EW && "&&" !== EW) OW.push(EW);
          else if (OW.length >= 2) {
          let WW = OW[OW.length - 1],
            iW = OW[OW.length - 2];
          OW.length -= 2;
          const mW = "&&" == EW ? new tW : new wW;
          "string" === typeof WW && (WW = WW.replace(bW, "defined($1)")), "string" === typeof iW && (iW = iW.replace(bW, "defined($1)")), mW.leftOperand = "string" === typeof iW ? TW(iW) : iW, mW.rightOperand = "string" === typeof WW ? TW(WW) : WW, OW.push(mW)
        }
        let mW = OW[OW.length - 1];
        return "string" === typeof mW && (mW = mW.replace(bW, "defined($1)")), "string" === typeof mW ? TW(mW) : mW
      }(EW), OW
    }

    function hW(WW, iW, OW, EW) {
      let NW;
      for (; HW(WW, OW, EW);) {
        NW = WW.currentLine;
        const PW = NW.substring(0, 5).toLowerCase();
        if ("#else" === PW) {
          const OW = new mW;
          return iW.children.push(OW), void HW(WW, OW, EW)
        }
        if ("#elif" === PW) {
          const WW = JW(NW, 5);
          iW.children.push(WW), OW = WW
        }
      }
    }

    function HW(WW, iW, OW) {
      for (; WW.canRead;) {
        WW.lineIndex++;
        const EW = WW.currentLine;
        if (EW.indexOf("#") >= 0) {
          const mW = KW.exec(EW);
          if (mW && mW.length) {
            switch (mW[0]) {
              case "#ifdef": {
                const mW = new NW;
                iW.children.push(mW);
                const PW = JW(EW, 6);
                mW.children.push(PW), hW(WW, mW, PW, OW);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const mW = new NW;
                iW.children.push(mW);
                const PW = JW(EW, 7);
                mW.children.push(PW), hW(WW, mW, PW, OW);
                break
              }
              case "#if": {
                const mW = new NW,
                  PW = JW(EW, 3);
                iW.children.push(mW), mW.children.push(PW), hW(WW, mW, PW, OW);
                break
              }
            }
            continue
          }
        }
        const PW = new mW;
        if (PW.line = EW, iW.children.push(PW), "#" === EW[0] && "d" === EW[1]) {
          const WW = EW.replace(";", "").split(" ");
          PW.additionalDefineKey = WW[1], 3 === WW.length && (PW.additionalDefineValue = WW[2])
        }
      }
      return !1
    }

    function nW(WW, iW, OW, NW) {
      const PW = new mW,
        LW = new EW;
      return LW.lineIndex = -1, LW.lines = WW.split("\n"), HW(LW, PW, NW), PW.process(iW, OW, NW)
    }

    function uW(WW, iW) {
      const OW = WW.defines,
        mW = {};
      for (const EW of OW) {
        const WW = EW.replace("#define", "").replace(";", "").trim().split(" ");
        mW[WW[0]] = WW.length > 1 ? WW[1] : ""
      }
      return 0 === WW.processor?.shaderLanguage && (mW.GL_ES = "true"), mW.__VERSION__ = WW.version, mW[WW.platformName] = "true", (0, lW.k)(mW, iW?.isNDCHalfZRange, iW?.nmW, iW?.useExactSrgbConversions), mW
    }

    function oW(WW, iW, OW) {
      let mW;
      for (MW.length = 0; null !== (mW = jW.exec(WW));) MW.push(mW);
      let EW = [WW],
        NW = !1;
      for (const LW of MW) {
        let WW = LW[1];
        if (-1 !== WW.indexOf("__decl__") && (WW = WW.replace(UW, ""), iW.supportsUniformBuffers && (WW = WW.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), WW += "Declaration"), !iW.includesShadersStore[WW]) {
          const mW = iW.shadersRepository + "ShadersInclude/" + WW + ".fx";
          return void dW.loadFile(mW, (mW => {
            iW.includesShadersStore[WW] = mW, oW(EW.join(""), iW, OW)
          }))
        } {
          let OW = iW.includesShadersStore[WW];
          if (LW[2]) {
            const WW = LW[3].split(",");
            for (let iW = 0; iW < WW.length; iW += 2) {
              const mW = new RegExp(WW[iW], "g"),
                EW = WW[iW + 1];
              OW = OW.replace(mW, EW)
            }
          }
          if (LW[4]) {
            const WW = LW[5];
            if (-1 !== WW.indexOf("..")) {
              const mW = WW.split(".."),
                EW = parseInt(mW[0]);
              let NW = parseInt(mW[1]),
                PW = OW.slice(0);
              OW = "", isNaN(NW) && (NW = iW.indexParameters[mW[1]]);
              for (let WW = EW; WW < NW; WW++) iW.supportsUniformBuffers || (PW = PW.replace(kW, ((WW, iW) => iW + "{X}"))), OW += PW.replace(sW, WW.toString()) + "\n"
            } else iW.supportsUniformBuffers || (OW = OW.replace(kW, ((WW, iW) => iW + "{X}"))), OW = OW.replace(sW, WW)
          }
          const mW = [];
          for (const WW of EW) {
            const iW = WW.split(LW[0]);
            for (let WW = 0; WW < iW.length - 1; WW++) mW.push(iW[WW]), mW.push(OW);
            mW.push(iW[iW.length - 1])
          }
          EW = mW, NW = NW || OW.indexOf("#include<") >= 0 || OW.indexOf("#include <") >= 0
        }
      }
      MW.length = 0;
      const PW = EW.join("");
      NW ? oW(PW.toString(), iW, OW) : OW(PW)
    }
    const dW = {
      loadFile: (WW, iW, OW, mW, EW, NW) => {
        throw (0, xW.o)("FileTools")
      }
    }
  },
  41412: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      h: () => NW,
      k: () => LW,
      l: () => PW,
      p: () => cW
    });
    var mW = OW(41415);
    const EW = {};

    function NW(WW, iW) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (iW ? iW + "\n" : "") + WW
    }

    function PW(WW, iW, OW, NW, PW, LW, cW) {
      const wW = cW || EW.loadFile;
      if (!wW) throw (0, mW.o)("FileTools");
      return wW(WW, iW, OW, NW, PW, LW)
    }

    function LW(WW, iW, OW, mW) {
      if (WW) return iW ? WW.IS_NDC_HALF_ZRANGE = "" : delete WW.IS_NDC_HALF_ZRANGE, OW ? WW.USE_REVERSE_DEPTHBUFFER = "" : delete WW.USE_REVERSE_DEPTHBUFFER, void(mW ? WW.USE_EXACT_SRGB_CONVERSIONS = "" : delete WW.USE_EXACT_SRGB_CONVERSIONS);
      {
        let WW = "";
        return iW && (WW += "#define IS_NDC_HALF_ZRANGE"), OW && (WW && (WW += "\n"), WW += "#define USE_REVERSE_DEPTHBUFFER"), mW && (WW && (WW += "\n"), WW += "#define USE_EXACT_SRGB_CONVERSIONS"), WW
      }
    }

    function cW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        mW = arguments.length > 3 ? arguments[3] : void 0;
      switch (WW) {
        case 3: {
          const WW = new Int8Array(iW);
          return mW && WW.set(new Int8Array(mW)), WW
        }
        case 0: {
          const WW = new Uint8Array(iW);
          return mW && WW.set(new Uint8Array(mW)), WW
        }
        case 4: {
          const WW = "number" !== typeof iW ? new Int16Array(iW) : new Int16Array(OW ? iW / 2 : iW);
          return mW && WW.set(new Int16Array(mW)), WW
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const WW = "number" !== typeof iW ? new Uint16Array(iW) : new Uint16Array(OW ? iW / 2 : iW);
          return mW && WW.set(new Uint16Array(mW)), WW
        }
        case 6: {
          const WW = "number" !== typeof iW ? new Int32Array(iW) : new Int32Array(OW ? iW / 4 : iW);
          return mW && WW.set(new Int32Array(mW)), WW
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const WW = "number" !== typeof iW ? new Uint32Array(iW) : new Uint32Array(OW ? iW / 4 : iW);
          return mW && WW.set(new Uint32Array(mW)), WW
        }
        case 1: {
          const WW = "number" !== typeof iW ? new Float32Array(iW) : new Float32Array(OW ? iW / 4 : iW);
          return mW && WW.set(new Float32Array(mW)), WW
        }
      }
      const EW = new Uint8Array(iW);
      return mW && EW.set(new Uint8Array(mW)), EW
    }
  },
  41415: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => wW,
      h: () => tW,
      k: () => cW,
      o: () => EW
    });
    const mW = {};

    function EW(WW) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !mW[WW]) return mW[WW] = !0, `${WW} needs to be imported before as it contains a side-effect required by your code.`
    }
    const NW = {};
    let PW = !1,
      LW = 0;

    function cW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const mW = function() {
        if ((OW || PW) && 0 === LW) {
          const OW = `${WW}.${iW}`;
          NW[OW] || (NW[OW] = !0, console.warn(`[Babylon.js] ${OW}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return mW.__isSideEffectStub = !0, mW
    }

    function wW(WW) {
      return !!WW && !WW.__isSideEffectStub
    }

    function tW(WW, iW) {
      return {
        get() {},
        set(WW) {
          Object.defineProperty(this, iW, {
            value: WW,
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
  41406: (WW, iW, OW) => {
    function mW() {
      return "undefined" !== typeof window
    }

    function EW() {
      return "undefined" !== typeof navigator
    }

    function NW() {
      return "undefined" !== typeof document
    }

    function PW(WW) {
      let iW = "",
        OW = WW.firstChild;
      for (; OW;) 3 === OW.nodeType && (iW += OW.textContent), OW = OW.nextSibling;
      return iW
    }
    OW.d(iW, {
      c: () => PW,
      f: () => NW,
      i: () => EW,
      j: () => mW
    })
  },
  41566: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW,
      g: () => EW,
      j: () => NW
    });
    class mW extends Error {}
    mW._setPrototypeOf = Object.setPrototypeOf || ((WW, iW) => (WW.__proto__ = iW, WW));
    const EW = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class NW extends mW {
      constructor(WW, iW, OW) {
        super(WW), this.errorCode = iW, this.innerError = OW, this.name = "RuntimeError", mW._setPrototypeOf(this, NW.prototype)
      }
    }
  },
  41558: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => uW,
      f: () => sW,
      i: () => JW,
      l: () => HW,
      o: () => yW,
      s: () => SW,
      v: () => YW,
      z: () => gW,
      D: () => TW,
      H: () => MW
    });
    var mW = OW(41564),
      EW = OW(41406),
      NW = OW(38276);
    class PW {}
    PW.FilesToLoad = {};
    var LW = OW(41566),
      cW = OW(41574),
      wW = OW(38270),
      tW = OW(41412),
      ZW = OW(41418),
      xW = OW(39911),
      lW = OW(41420),
      AW = OW(41582);
    const bW = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class jW extends LW.j {
      constructor(WW, iW) {
        super(WW, LW.g.LoadFileError), this.name = "LoadFileError", LW.c._setPrototypeOf(this, jW.prototype), iW instanceof mW.c ? this.request = iW : this.file = iW
      }
    }
    class UW extends LW.j {
      constructor(WW, iW) {
        super(WW, LW.g.RequestFileError), this.request = iW, this.name = "RequestFileError", LW.c._setPrototypeOf(this, UW.prototype)
      }
    }
    class kW extends LW.j {
      constructor(WW, iW) {
        super(WW, LW.g.ReadFileError), this.file = iW, this.name = "ReadFileError", LW.c._setPrototypeOf(this, kW.prototype)
      }
    }
    const sW = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (OW, mW, EW) => 0 !== mW.status || EW >= WW || -1 !== OW.indexOf("file:") ? -1 : Math.pow(2, EW) * iW
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: WW => WW,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: WW => WW,
        CleanUrl: WW => WW = WW.replace(/#/gm, "%23")
      },
      MW = (WW, iW) => {
        if ((!WW || 0 !== WW.indexOf("data:")) && sW.CorsBehavior)
          if ("string" === typeof sW.CorsBehavior || sW.CorsBehavior instanceof String) iW.crossOrigin = sW.CorsBehavior;
          else {
            const OW = sW.CorsBehavior(WW);
            OW && (iW.crossOrigin = OW)
          }
      },
      KW = {
        getRequiredSize: null
      },
      SW = function(WW, iW, OW, EW) {
        let NW, LW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          tW = arguments.length > 5 ? arguments[5] : void 0,
          ZW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : wW.d.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !ZW?._features.forceBitmapOverHTMLImageElement) return OW("LoadImage is only supported in web or BabylonNative environments."), null;
        if (ZW?._features.forceBitmapOverHTMLImageElement && "string" !== typeof WW && "undefined" !== typeof Blob) {
          let mW;
          if (WW instanceof Blob) mW = WW;
          else {
            const iW = WW instanceof ArrayBuffer ? WW : (0, AW.g)(WW);
            mW = new Blob([iW], {
              type: LW
            })
          }
          return ZW.createImageBitmap(mW, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...tW
          }).then(iW).catch((iW => {
            OW && OW("Error while trying to load image: " + WW, iW)
          })), null
        }
        let xW = !1;
        if (WW instanceof ArrayBuffer || ArrayBuffer.isView(WW))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let iW;
            iW = WW instanceof ArrayBuffer ? WW : (0, AW.g)(WW), NW = URL.createObjectURL(new Blob([iW], {
              type: LW
            })), xW = !0
          } else NW = `data:${LW};base64,` + (0, cW.h)(WW);
        else WW instanceof Blob ? (NW = URL.createObjectURL(WW), xW = !0) : (NW = sW.CleanUrl(WW), NW = sW.PreprocessUrl(NW));
        const lW = iW => {
          if (OW) {
            const mW = NW || WW.toString();
            OW(`Error while trying to load image: ${0===mW.indexOf("http")||mW.length<=128?mW:mW.slice(0,128)+"..."}`, iW)
          }
        };
        if (ZW?._features.forceBitmapOverHTMLImageElement) return yW(NW, (mW => {
          ZW.createImageBitmap(new Blob([mW], {
            type: LW
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...tW
          }).then((WW => {
            iW(WW), xW && URL.revokeObjectURL(NW)
          })).catch((iW => {
            OW && OW("Error while trying to load image: " + WW, iW)
          }))
        }), void 0, EW || void 0, !0, ((WW, iW) => {
          lW(iW)
        })), null;
        const bW = new Image;
        if (KW.getRequiredSize) {
          const iW = KW.getRequiredSize(WW);
          iW.width && (bW.width = iW.width), iW.height && (bW.height = iW.height)
        }
        MW(NW, bW);
        const jW = [],
          UW = () => {
            for (const WW of jW) WW.target.removeEventListener(WW.name, WW.handler);
            jW.length = 0
          };
        jW.push({
          target: bW,
          name: "load",
          handler: () => {
            UW(), iW(bW), xW && bW.src && URL.revokeObjectURL(bW.src)
          }
        }), jW.push({
          target: bW,
          name: "error",
          handler: WW => {
            UW(), lW(WW), xW && bW.src && URL.revokeObjectURL(bW.src)
          }
        }), jW.push({
          target: document,
          name: "securitypolicyviolation",
          handler: WW => {
            if (WW.blockedURI !== bW.src || "wZ" === WW.disposition) return;
            UW();
            const iW = new Error(`CSP violation of policy ${WW.effectiveDirective} ${WW.blockedURI}. Current policy is ${WW.originalPolicy}`);
            wW.d.UseFallbackTexture = !1, lW(iW), xW && bW.src && URL.revokeObjectURL(bW.src), bW.src = ""
          }
        }), (() => {
          for (const WW of jW) WW.target.addEventListener(WW.name, WW.handler)
        })();
        const kW = "blob:" === NW.substring(0, 5),
          SW = "data:" === NW.substring(0, 5),
          YW = () => {
            kW || SW || !mW.c.IsCustomRequestAvailable ? bW.src = NW : yW(NW, ((WW, iW, OW) => {
              const mW = new Blob([WW], {
                  type: !LW && OW ? OW : LW
                }),
                EW = URL.createObjectURL(mW);
              xW = !0, bW.src = EW
            }), void 0, EW || void 0, !0, ((WW, iW) => {
              lW(iW)
            }))
          },
          TW = () => {
            EW && EW.loadImage(NW, bW)
          };
        if (!kW && !SW && EW && EW.enableTexturesOffline) EW.open(TW, YW);
        else {
          if (-1 !== NW.indexOf("file:")) {
            const WW = decodeURIComponent(NW.substring(5).toLowerCase());
            if (PW.FilesToLoad[WW] && "undefined" !== typeof URL) {
              try {
                let iW;
                try {
                  iW = URL.createObjectURL(PW.FilesToLoad[WW])
                } catch (JW) {
                  iW = URL.createObjectURL(PW.FilesToLoad[WW])
                }
                bW.src = iW, xW = !0
              } catch (hW) {
                bW.src = ""
              }
              return bW
            }
          }
          YW()
        }
        return bW
      },
      YW = (WW, iW, OW, mW, EW) => {
        const PW = new FileReader,
          LW = {
            onCompleteObservable: new NW.e,
            abort: () => PW.abort()
          };
        return PW.onloadend = () => LW.onCompleteObservable.notifyObservers(LW), EW && (PW.onerror = () => {
          EW(new kW(`Unable to read ${WW.name}`, WW))
        }), PW.onload = WW => {
          iW(WW.target.result)
        }, OW && (PW.onprogress = OW), mW ? PW.readAsArrayBuffer(WW) : PW.readAsText(WW), LW
      },
      yW = (WW, iW, OW, mW, EW, cW, wW) => {
        if (WW.name) return YW(WW, iW, OW, EW, cW ? WW => {
          cW(void 0, WW)
        } : void 0);
        const tW = WW;
        if (-1 !== tW.indexOf("file:")) {
          let WW = decodeURIComponent(tW.substring(5).toLowerCase());
          0 === WW.indexOf("./") && (WW = WW.substring(2));
          const mW = PW.FilesToLoad[WW];
          if (mW) return YW(mW, iW, OW, EW, cW ? WW => cW(void 0, new jW(WW.message, WW.file)) : void 0)
        }
        const {
          match: ZW,
          type: AW
        } = nW(tW);
        if (ZW) {
          const WW = {
            onCompleteObservable: new NW.e,
            abort: () => () => {}
          };
          try {
            const WW = EW ? uW(tW) : oW(tW);
            iW(WW, void 0, AW)
          } catch (LW) {
            cW ? cW(void 0, LW) : xW.b.Error(LW.message || "Failed to parse the Data URL")
          }
          return lW.d.SetImmediate((() => {
            WW.onCompleteObservable.notifyObservers(WW)
          })), WW
        }
        return TW(tW, ((WW, OW) => {
          iW(WW, OW?.responseURL, OW?.getResponseHeader("content-type"))
        }), OW, mW, EW, cW ? WW => {
          cW(WW.request, new jW(WW.message, WW.request))
        } : void 0, wW)
      },
      TW = (WW, iW, OW, PW, LW, cW, tW) => {
        null !== PW && (PW ?? (PW = wW.d.LastCreatedScene?.offlineProvider)), WW = sW.CleanUrl(WW), WW = sW.PreprocessUrl(WW);
        const ZW = sW.BaseUrl + WW;
        let lW = !1;
        const AW = {
            onCompleteObservable: new NW.e,
            abort: () => lW = !0
          },
          bW = () => {
            let WW, NW = new mW.c,
              PW = null;
            const wW = () => {
              NW && (OW && NW.removeEventListener("progress", OW), WW && NW.removeEventListener("readystatechange", WW), NW.removeEventListener("loadend", bW))
            };
            let bW = () => {
              wW(), AW.onCompleteObservable.notifyObservers(AW), AW.onCompleteObservable.clear(), OW = void 0, WW = null, bW = null, cW = void 0, tW = void 0, iW = void 0
            };
            AW.abort = () => {
              lW = !0, bW && bW(), NW && NW.readyState !== (XMLHttpRequest.DONE || 4) && NW.abort(), null !== PW && (clearTimeout(PW), PW = null), NW = null
            };
            const jW = WW => {
                const iW = WW.message || "Unknown error";
                cW && NW ? cW(new UW(iW, NW)) : xW.b.Error(iW)
              },
              kW = xW => {
                if (NW) {
                  if (NW.open("GET", ZW), tW) try {
                    tW(NW)
                  } catch (AW) {
                    return void jW(AW)
                  }
                  LW && (NW.responseType = "arraybuffer"), OW && NW.addEventListener("progress", OW), bW && NW.addEventListener("loadend", bW), WW = () => {
                    if (!lW && NW && NW.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (WW && NW.removeEventListener("readystatechange", WW), NW.status >= 200 && NW.status < 300 || 0 === NW.status && (!(0, EW.j)() || hW())) {
                        const WW = LW ? NW.response : NW.responseText;
                        if (null !== WW) {
                          try {
                            iW && iW(WW, NW)
                          } catch (AW) {
                            jW(AW)
                          }
                          return
                        }
                      }
                      const OW = sW.DefaultRetryStrategy;
                      if (OW) {
                        const WW = OW(ZW, NW, xW);
                        if (-1 !== WW) return wW(), NW = new mW.c, void(PW = setTimeout((() => kW(xW + 1)), WW))
                      }
                      const tW = new UW("Error status: " + NW.status + " " + NW.statusText + " - Unable to load " + ZW, NW);
                      cW && cW(tW)
                    }
                  }, NW.addEventListener("readystatechange", WW), NW.send()
                }
              };
            kW(0)
          };
        if (PW && PW.enableSceneOffline && !WW.startsWith("blob:")) {
          const mW = WW => {
              WW && WW.status > 400 ? cW && cW(WW) : bW()
            },
            EW = () => {
              PW && PW.loadFile(sW.BaseUrl + WW, (WW => {
                !lW && iW && iW(WW), AW.onCompleteObservable.notifyObservers(AW)
              }), OW ? WW => {
                !lW && OW && OW(WW)
              } : void 0, mW, LW)
            };
          PW.open(EW, mW)
        } else bW();
        return AW
      },
      JW = WW => {
        const {
          match: iW,
          type: OW
        } = nW(WW);
        if (iW) return OW || void 0;
        const mW = WW.lastIndexOf(".");
        switch (WW.substring(mW + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "uH":
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
      hW = () => "undefined" !== typeof location && "file:" === location.protocol,
      HW = WW => bW.test(WW),
      nW = WW => {
        const iW = bW.exec(WW);
        if (null === iW || 0 === iW.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: iW[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function uW(WW) {
      return (0, cW.d)(WW.split(",")[1])
    }
    const oW = WW => (0, cW.f)(WW.split(",")[1]);
    let dW;
    const eW = (WW, iW, OW, mW, EW, NW, PW, LW, cW, wW) => {
      dW = {
        DecodeBase64UrlToBinary: WW,
        DecodeBase64UrlToString: iW,
        DefaultRetryStrategy: OW.DefaultRetryStrategy,
        BaseUrl: OW.BaseUrl,
        CorsBehavior: OW.CorsBehavior,
        PreprocessUrl: OW.PreprocessUrl,
        IsBase64DataUrl: mW,
        IsFileURL: EW,
        LoadFile: NW,
        LoadImage: PW,
        ReadFile: LW,
        RequestFile: cW,
        SetCorsBehavior: wW
      }, Object.defineProperty(dW, "DefaultRetryStrategy", {
        get: function() {
          return OW.DefaultRetryStrategy
        },
        set: function(WW) {
          OW.DefaultRetryStrategy = WW
        }
      }), Object.defineProperty(dW, "BaseUrl", {
        get: function() {
          return OW.BaseUrl
        },
        set: function(WW) {
          OW.BaseUrl = WW
        }
      }), Object.defineProperty(dW, "PreprocessUrl", {
        get: function() {
          return OW.PreprocessUrl
        },
        set: function(WW) {
          OW.PreprocessUrl = WW
        }
      }), Object.defineProperty(dW, "CorsBehavior", {
        get: function() {
          return OW.CorsBehavior
        },
        set: function(WW) {
          OW.CorsBehavior = WW
        }
      })
    };
    let vW = !1;

    function gW() {
      vW || (vW = !0, eW(uW, oW, sW, HW, hW, yW, SW, YW, TW, MW), tW.e.loadFile = yW, tW.e.loadImage = SW, ZW.j.loadFile = yW)
    }
  },
  41586: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      h: () => NW,
      k: () => PW
    });
    let mW = null;

    function EW() {
      if (mW) return mW;
      const WW = new ArrayBuffer(4),
        iW = new Float32Array(WW),
        OW = new Uint32Array(WW),
        EW = new Uint32Array(512),
        NW = new Uint32Array(512);
      for (let mW = 0; mW < 256; ++mW) {
        const WW = mW - 127;
        WW < -24 ? (EW[mW] = 0, EW[256 | mW] = 32768, NW[mW] = 24, NW[256 | mW] = 24) : WW < -14 ? (EW[mW] = 1024 >> -WW - 14, EW[256 | mW] = 1024 >> -WW - 14 | 32768, NW[mW] = -WW - 1, NW[256 | mW] = -WW - 1) : WW <= 15 ? (EW[mW] = WW + 15 << 10, EW[256 | mW] = WW + 15 << 10 | 32768, NW[mW] = 13, NW[256 | mW] = 13) : WW < 128 ? (EW[mW] = 31744, EW[256 | mW] = 64512, NW[mW] = 24, NW[256 | mW] = 24) : (EW[mW] = 31744, EW[256 | mW] = 64512, NW[mW] = 13, NW[256 | mW] = 13)
      }
      const PW = new Uint32Array(2048),
        LW = new Uint32Array(64),
        cW = new Uint32Array(64);
      for (let mW = 1; mW < 1024; ++mW) {
        let WW = mW << 13,
          iW = 0;
        for (; 0 === (8388608 & WW);) WW <<= 1, iW -= 8388608;
        WW &= -8388609, iW += 947912704, PW[mW] = WW | iW
      }
      for (let mW = 1024; mW < 2048; ++mW) PW[mW] = 939524096 + (mW - 1024 << 13);
      for (let mW = 1; mW < 31; ++mW) LW[mW] = mW << 23;
      LW[31] = 1199570944, LW[32] = 2147483648;
      for (let mW = 33; mW < 63; ++mW) LW[mW] = 2147483648 + (mW - 32 << 23);
      LW[63] = 3347054592;
      for (let mW = 1; mW < 64; ++mW) 32 !== mW && (cW[mW] = 1024);
      return mW = {
        floatView: iW,
        uint32View: OW,
        baseTable: EW,
        shiftTable: NW,
        mantissaTable: PW,
        exponentTable: LW,
        offsetTable: cW
      }, mW
    }
    const NW = 65504;

    function PW(WW) {
      const iW = EW();
      iW.floatView[0] = WW;
      const OW = iW.uint32View[0],
        mW = OW >> 23 & 511;
      return iW.baseTable[mW] + ((8388607 & OW) >> iW.shiftTable[mW])
    }

    function LW(WW) {
      const iW = EW();
      return iW.uint32View[0] = iW.mantissaTable[iW.offsetTable[WW >> 10] + (1023 & WW)] + iW.exponentTable[WW >> 10], iW.floatView[0]
    }
  },
  41574: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      f: () => EW,
      h: () => mW
    });
    const mW = WW => {
        const iW = ArrayBuffer.isView(WW) ? new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength) : new Uint8Array(WW);
        return "function" === typeof iW.toBase64 ? iW.toBase64() : function(WW) {
          const iW = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let OW, mW, EW, NW, PW, LW, cW, wW = "",
            tW = 0;
          for (; tW < WW.length;) OW = WW[tW++], mW = tW < WW.length ? WW[tW++] : Number.NaN, EW = tW < WW.length ? WW[tW++] : Number.NaN, NW = OW >> 2, PW = (3 & OW) << 4 | mW >> 4, LW = (15 & mW) << 2 | EW >> 6, cW = 63 & EW, isNaN(mW) ? LW = cW = 64 : isNaN(EW) && (cW = 64), wW += iW.charAt(NW) + iW.charAt(PW) + iW.charAt(LW) + iW.charAt(cW);
          return wW
        }(iW)
      },
      EW = WW => atob(WW),
      NW = WW => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(WW).buffer : function(WW) {
        const iW = EW(WW),
          OW = iW.length,
          mW = new Uint8Array(new ArrayBuffer(OW));
        for (let EW = 0; EW < OW; EW++) mW[EW] = iW.charCodeAt(EW);
        return mW.buffer
      }(WW)
  },
  41420: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW,
      g: () => PW
    });
    let mW = [];
    class EW {
      static SetImmediate(WW) {
        0 === mW.length && setTimeout((() => {
          const WW = mW;
          mW = [];
          for (const iW of WW) iW()
        }), 1), mW.push(WW)
      }
    }

    function NW(WW, iW, OW) {
      try {
        if (WW()) return iW(), !0
      } catch (mW) {
        return OW?.(mW), !0
      }
      return !1
    }
    const PW = function(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        PW = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && NW(WW, iW, OW)) return null;
      const LW = setInterval((() => {
        NW(WW, iW, OW) ? clearInterval(LW) : (EW -= mW, EW < 0 && (clearInterval(LW), OW?.(new Error("Operation timed out after maximum retries. " + (PW || "")), !0)))
      }), mW);
      return () => clearInterval(LW)
    }
  },
  41564: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    class mW {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(mW.CustomRequestHeaders).length > 0 || mW.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(WW) {
        return WW = (WW = WW.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(WW) {
        return mW.SkipRequestModificationForBabylonCDN && (WW.includes("preview.babylonjs.com") || WW.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(WW) {
        const iW = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (mW._ShouldSkipRequestModifications(WW)) return {
          url: WW,
          headers: iW
        };
        for (const EW in mW.CustomRequestHeaders) {
          const WW = mW.CustomRequestHeaders[EW];
          WW && (iW[EW] = WW)
        }
        const OW = {
          setRequestHeader: (WW, OW) => {
            iW[WW] = OW
          }
        };
        for (const EW of mW.CustomRequestModifiers) {
          if (mW._ShouldSkipRequestModifications(WW)) break;
          const iW = EW(OW, WW);
          "string" === typeof iW && (WW = iW)
        }
        return {
          url: WW,
          headers: iW
        }
      }
      static async FetchAsync(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const OW = iW.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: EW,
            headers: NW
          } = mW._CollectCustomizations(mW._CleanUrl(WW), iW.headers ?? {});
          return await fetch(EW, {
            method: OW,
            headers: NW,
            body: iW.body ?? void 0
          })
        }
        return await new Promise(((EW, NW) => {
          const PW = new mW;
          PW.responseType = "arraybuffer", PW.addEventListener("readystatechange", (() => {
            if (4 === PW.readyState)
              if (PW.status >= 200 && PW.status < 300) {
                const WW = "undefined" !== typeof Headers ? new Headers : void 0,
                  iW = PW.getResponseHeader("Content-Type");
                iW && WW && WW.set("Content-Type", iW), "undefined" !== typeof Response ? EW(new Response(PW.response, {
                  status: PW.status,
                  statusText: PW.statusText,
                  headers: WW
                })) : EW({
                  ok: !0,
                  status: PW.status,
                  statusText: PW.statusText,
                  headers: {
                    get: WW => PW.getResponseHeader(WW)
                  },
                  arrayBuffer: async () => await Promise.resolve(PW.response)
                })
              } else NW(new Error(`HTTP ${PW.status} loading '${PW.requestURL}': ${PW.statusText}`))
          })), PW.open(OW, WW, iW.headers), PW.send(iW.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(WW) {
        this._xhr.onprogress = WW
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
      set responseType(WW) {
        this._xhr.responseType = WW
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(WW) {
        this._xhr.timeout = WW
      }
      addEventListener(WW, iW, OW) {
        this._xhr.addEventListener(WW, iW, OW)
      }
      removeEventListener(WW, iW, OW) {
        this._xhr.removeEventListener(WW, iW, OW)
      }
      abort() {
        this._xhr.abort()
      }
      send(WW) {
        this._xhr.send(WW)
      }
      open(WW, iW, OW) {
        const {
          url: EW,
          headers: NW
        } = mW._CollectCustomizations(iW, OW);
        this._requestURL = mW._CleanUrl(EW), this._xhr.open(WW, this._requestURL, !0);
        for (const mW in NW) this._xhr.setRequestHeader(mW, NW[mW])
      }
      setRequestHeader(WW, iW) {
        this._xhr.setRequestHeader(WW, iW)
      }
      getResponseHeader(WW) {
        return this._xhr.getResponseHeader(WW)
      }
    }
    mW.CustomRequestHeaders = {}, mW.CustomRequestModifiers = new Array, mW.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);