export const id = 224;
export const ids = [224];
export const modules = {
  37652: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => tR,
      h: () => BW,
      l: () => yR,
      m: () => TW,
      n: () => NW,
      r: () => bR,
      t: () => eW
    });
    var wW = MW(36721),
      CW = MW(37659);

    function zR(WW, RW, MW, wW) {
      switch (RW) {
        case 5120: {
          let RW = WW.getInt8(MW);
          return wW && (RW = Math.max(RW / 127, -1)), RW
        }
        case 5121: {
          let RW = WW.getUint8(MW);
          return wW && (RW /= 255), RW
        }
        case 5122: {
          let RW = WW.getInt16(MW, !0);
          return wW && (RW = Math.max(RW / 32767, -1)), RW
        }
        case 5123: {
          let RW = WW.getUint16(MW, !0);
          return wW && (RW /= 65535), RW
        }
        case 5131:
          return (0, CW.e)(WW.getUint16(MW, !0));
        case 5124:
          return WW.getInt32(MW, !0);
        case 5125:
          return WW.getUint32(MW, !0);
        case 5126:
          return WW.getFloat32(MW, !0);
        default:
          throw new Error(`Invalid component type ${RW}`)
      }
    }

    function AW(WW, RW, MW, wW, zR) {
      switch (RW) {
        case 5120:
          wW && (zR = Math.round(127 * zR)), WW.setInt8(MW, zR);
          break;
        case 5121:
          wW && (zR = Math.round(255 * zR)), WW.setUint8(MW, zR);
          break;
        case 5122:
          wW && (zR = Math.round(32767 * zR)), WW.setInt16(MW, zR, !0);
          break;
        case 5123:
          wW && (zR = Math.round(65535 * zR)), WW.setUint16(MW, zR, !0);
          break;
        case 5131:
          WW.setUint16(MW, (0, CW.j)(zR), !0);
          break;
        case 5124:
          WW.setInt32(MW, zR, !0);
          break;
        case 5125:
          WW.setUint32(MW, zR, !0);
          break;
        case 5126:
          WW.setFloat32(MW, zR, !0);
          break;
        default:
          throw new Error(`Invalid component type ${RW}`)
      }
    }

    function bR(WW) {
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

    function yR(WW, RW, MW, wW, CW, yR, NW, eW) {
      const BW = new Array(wW),
        tR = new Array(wW);
      if (WW instanceof Array) {
        let CW = RW / 4;
        const zR = MW / 4;
        for (let RW = 0; RW < yR; RW += wW) {
          for (let RW = 0; RW < wW; RW++) BW[RW] = tR[RW] = WW[CW + RW];
          eW(tR, RW);
          for (let RW = 0; RW < wW; RW++) BW[RW] !== tR[RW] && (WW[CW + RW] = tR[RW]);
          CW += zR
        }
      } else {
        const TW = ArrayBuffer.isView(WW) ? new DataView(WW.buffer, WW.byteOffset, WW.byteLength) : new DataView(WW),
          gR = bR(CW);
        for (let WW = 0; WW < yR; WW += wW) {
          for (let WW = 0, MW = RW; WW < wW; WW++, MW += gR) BW[WW] = tR[WW] = zR(TW, CW, MW, NW);
          eW(tR, WW);
          for (let WW = 0, MW = RW; WW < wW; WW++, MW += gR) BW[WW] !== tR[WW] && AW(TW, CW, MW, NW, tR[WW]);
          RW += MW
        }
      }
    }

    function NW(WW, RW, MW, CW, zR, AW, NW, eW) {
      const BW = RW * bR(MW),
        tR = NW * RW;
      if (5126 !== MW || zR !== BW) {
        const wW = new Float32Array(tR);
        return yR(WW, CW, zR, RW, MW, tR, AW, ((WW, MW) => {
          for (let CW = 0; CW < RW; CW++) wW[MW + CW] = WW[CW]
        })), wW
      }
      if (!(WW instanceof Array || WW instanceof Float32Array) || 0 !== CW || WW.length !== tR) {
        if (WW instanceof Array) {
          const RW = CW / 4;
          return WW.slice(RW, RW + tR)
        }
        if (ArrayBuffer.isView(WW)) {
          const RW = WW.byteOffset + CW;
          return 0 !== (3 & RW) && (wW.b.Warn("Float array must be aligned to 4-bytes border"), eW = !0), eW ? new Float32Array(WW.buffer.slice(RW, RW + tR * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(WW.buffer, RW, tR)
        }
        return new Float32Array(WW, CW, tR)
      }
      return eW ? WW.slice() : WW
    }

    function eW(WW, RW, MW, CW, zR, AW, NW) {
      const eW = bR(MW),
        BW = function(WW) {
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
        }(MW),
        tR = AW * RW;
      if (Array.isArray(WW)) {
        if (0 !== (3 & CW) || 0 !== (3 & zR)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const wW = CW / 4,
          bR = zR / 4;
        if (wW + (AW - 1) * bR + RW > WW.length) throw new Error("Last accessed index is out of bounds.");
        if (bR < RW) throw new Error("Data stride cannot be smaller than the component size.");
        if (bR !== RW) {
          const wW = new BW(tR);
          return yR(WW, CW, zR, RW, MW, tR, !1, ((WW, MW) => {
            for (let CW = 0; CW < RW; CW++) wW[MW + CW] = WW[CW]
          })), wW
        }
        return new BW(WW.slice(wW, wW + tR))
      }
      let TW, gR = CW;
      ArrayBuffer.isView(WW) ? (TW = WW.buffer, gR += WW.byteOffset) : TW = WW;
      if (gR + (AW - 1) * zR + RW * eW > TW.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const iR = RW * eW;
      if (zR < iR) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (zR !== iR) {
        const WW = new BW(tR),
          MW = new Uint8Array(TW, gR),
          wW = new Uint8Array(WW.buffer),
          CW = RW * eW;
        for (let RW = 0, bR = 0, yR = 0; RW < AW; RW++, bR += zR, yR += CW) wW.set(MW.subarray(bR, bR + CW), yR);
        return WW
      }
      return 1 !== eW && 0 !== (gR & eW - 1) && (wW.b.Warn("Array must be aligned to border of element size. Data will be copied."), NW = !0), NW ? new BW(TW.slice(gR, gR + tR * eW)) : new BW(TW, gR, tR)
    }

    function BW(WW, RW, MW, CW, zR, AW, NW, eW) {
      const BW = RW * bR(MW),
        tR = NW * RW;
      if (eW.length !== tR) throw new Error("Output length is not valid");
      if (5126 === MW && zR === BW)
        if (WW instanceof Array) {
          const RW = CW / 4;
          eW.set(WW, RW)
        } else if (ArrayBuffer.isView(WW)) {
        const RW = WW.byteOffset + CW;
        if (0 !== (3 & RW)) return wW.b.Warn("Float array must be aligned to 4-bytes border"), void eW.set(new Float32Array(WW.buffer.slice(RW, RW + tR * Float32Array.BYTES_PER_ELEMENT)));
        const MW = new Float32Array(WW.buffer, RW, tR);
        eW.set(MW)
      } else {
        const RW = new Float32Array(WW, CW, tR);
        eW.set(RW)
      } else yR(WW, CW, zR, RW, MW, tR, AW, ((WW, MW) => {
        for (let wW = 0; wW < RW; wW++) eW[MW + wW] = WW[wW]
      }))
    }

    function tR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(WW)) {
        for (let CW = 0; CW < RW; CW++)
          if (WW[MW + CW] - wW > 65535) return !0;
        return !1
      }
      return 4 === WW.BYTES_PER_ELEMENT
    }

    function TW(WW) {
      const RW = WW.buffer;
      if (RW instanceof ArrayBuffer) return WW;
      const MW = new ArrayBuffer(WW.byteLength);
      return new Uint8Array(MW).set(new Uint8Array(RW, WW.byteOffset, WW.byteLength)), MW
    }
  },
  37477: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => QW,
      f: () => FW,
      m: () => fW,
      i: () => sW,
      q: () => dW
    });
    class wW {
      constructor() {
        this.children = []
      }
      isValid(WW) {
        return !0
      }
      process(WW, RW, MW) {
        let wW = "";
        if (this.line) {
          let MW = this.line;
          const CW = RW.processor;
          if (CW) {
            CW.lineProcessor && (MW = CW.lineProcessor(MW, RW.isFragment, RW.processingContext));
            const wW = RW.processor?.attributeKeywordName ?? "attribute",
              zR = RW.isFragment && RW.processor?.varyingFragmentKeywordName ? RW.processor?.varyingFragmentKeywordName : !RW.isFragment && RW.processor?.varyingVertexKeywordName ? RW.processor?.varyingVertexKeywordName : "varying";
            if (!RW.isFragment && CW.attributeProcessor && this.line.startsWith(wW)) MW = CW.attributeProcessor(this.line, WW, RW.processingContext);
            else if (CW.varyingProcessor && (CW.varyingCheck?.(this.line, RW.isFragment) || !CW.varyingCheck && this.line.startsWith(zR))) MW = CW.varyingProcessor(this.line, RW.isFragment, WW, RW.processingContext);
            else if (CW.uniformProcessor && CW.uniformRegexp && CW.uniformRegexp.test(this.line)) RW.lookForClosingBracketForUniformBuffer || (MW = CW.uniformProcessor(this.line, RW.isFragment, WW, RW.processingContext));
            else if (CW.uniformBufferProcessor && CW.uniformBufferRegexp && CW.uniformBufferRegexp.test(this.line)) RW.lookForClosingBracketForUniformBuffer || (MW = CW.uniformBufferProcessor(this.line, RW.isFragment, RW.processingContext), RW.lookForClosingBracketForUniformBuffer = !0);
            else if (CW.textureProcessor && CW.textureRegexp && CW.textureRegexp.test(this.line)) MW = CW.textureProcessor(this.line, RW.isFragment, WW, RW.processingContext);
            else if ((CW.uniformProcessor || CW.uniformBufferProcessor) && this.line.startsWith("uniform") && !RW.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? CW.uniformProcessor && (MW = CW.uniformProcessor(this.line, RW.isFragment, WW, RW.processingContext)) : CW.uniformBufferProcessor && (MW = CW.uniformBufferProcessor(this.line, RW.isFragment, RW.processingContext), RW.lookForClosingBracketForUniformBuffer = !0)
            }
            RW.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (RW.lookForClosingBracketForUniformBuffer = !1, CW.endOfUniformBufferProcessor && (MW = CW.endOfUniformBufferProcessor(this.line, RW.isFragment, RW.processingContext)))
          }
          wW += MW + "\n"
        }
        for (const CW of this.children) wW += CW.process(WW, RW, MW);
        return this.additionalDefineKey && (WW[this.additionalDefineKey] = this.additionalDefineValue || "true", MW[this.additionalDefineKey] = WW[this.additionalDefineKey]), wW
      }
    }
    class CW {
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
        for (const RW of WW) {
          if (!RW || "\r" === RW) continue;
          if ("#" === RW[0]) {
            this._lines.push(RW);
            continue
          }
          const WW = RW.trim();
          if (!WW) continue;
          if (WW.startsWith("//")) {
            this._lines.push(RW);
            continue
          }
          const MW = WW.indexOf(";");
          if (-1 === MW) this._lines.push(WW);
          else if (MW === WW.length - 1) WW.length > 1 && this._lines.push(WW);
          else {
            const WW = RW.split(";");
            for (let RW = 0; RW < WW.length; RW++) {
              let MW = WW[RW];
              MW && (MW = MW.trim(), MW && this._lines.push(MW + (RW !== WW.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class zR extends wW {
      process(WW, RW, MW) {
        for (let wW = 0; wW < this.children.length; wW++) {
          const CW = this.children[wW];
          if (CW.isValid(WW)) return CW.process(WW, RW, MW)
        }
        return ""
      }
    }
    class AW extends wW {
      isValid(WW) {
        return this.testExpression.isTrue(WW)
      }
    }
    class bR {
      isTrue(WW) {
        return !0
      }
      static postfixToInfix(WW) {
        const RW = [];
        for (const MW of WW)
          if (void 0 === bR._OperatorPriority[MW]) RW.push(MW);
          else {
            const WW = RW[RW.length - 1],
              wW = RW[RW.length - 2];
            RW.length -= 2, RW.push(`(${wW}${MW}${WW})`)
          } return RW[RW.length - 1]
      }
      static infixToPostfix(WW) {
        const RW = bR._InfixToPostfixCache.get(WW);
        if (RW) return RW.accessTime = Date.now(), RW.result;
        if (!WW.includes("&&") && !WW.includes("||") && !WW.includes(")") && !WW.includes("(")) return [WW];
        const MW = [];
        let wW = -1;
        const CW = () => {
            eW = eW.trim(), "" !== eW && (MW.push(eW), eW = "")
          },
          zR = WW => {
            wW < bR._Stack.length - 1 && (bR._Stack[++wW] = WW)
          },
          AW = () => bR._Stack[wW],
          yR = () => -1 === wW ? "!!INVALID EXPRESSION!!" : bR._Stack[wW--];
        let NW = 0,
          eW = "";
        for (; NW < WW.length;) {
          const RW = WW.charAt(NW),
            BW = NW < WW.length - 1 ? WW.substring(NW, 2 + NW) : "";
          if ("(" === RW) eW = "", zR(RW);
          else if (")" === RW) {
            for (CW(); - 1 !== wW && "(" !== AW();) MW.push(yR());
            yR()
          } else if (bR._OperatorPriority[BW] > 1) {
            for (CW(); - 1 !== wW && bR._OperatorPriority[AW()] >= bR._OperatorPriority[BW];) MW.push(yR());
            zR(BW), NW++
          } else eW += RW;
          NW++
        }
        for (CW(); - 1 !== wW;) "(" === AW() ? yR() : MW.push(yR());
        return bR._InfixToPostfixCache.size >= bR.InfixToPostfixCacheLimitSize && bR.ClearCache(), bR._InfixToPostfixCache.set(WW, {
          result: MW,
          accessTime: Date.now()
        }), MW
      }
      static ClearCache() {
        const WW = Array.from(bR._InfixToPostfixCache.entries()).sort(((WW, RW) => WW[1].accessTime - RW[1].accessTime));
        for (let RW = 0; RW < bR.InfixToPostfixCacheCleanupSize; RW++) bR._InfixToPostfixCache.delete(WW[RW][0])
      }
    }
    bR.InfixToPostfixCacheLimitSize = 5e4, bR.InfixToPostfixCacheCleanupSize = 25e3, bR._InfixToPostfixCache = new Map, bR._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, bR._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class yR extends bR {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = WW, this.not = RW
      }
      isTrue(WW) {
        let RW = void 0 !== WW[this.define];
        return this.not && (RW = !RW), RW
      }
    }
    class NW extends bR {
      isTrue(WW) {
        return this.leftOperand.isTrue(WW) || this.rightOperand.isTrue(WW)
      }
    }
    class eW extends bR {
      isTrue(WW) {
        return this.leftOperand.isTrue(WW) && this.rightOperand.isTrue(WW)
      }
    }
    class BW extends bR {
      constructor(WW, RW, MW) {
        super(), this.define = WW, this.operand = RW, this.testValue = MW
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(WW) {
        let RW = !1;
        const MW = parseInt(void 0 != WW[this.define] ? WW[this.define] : this.define),
          wW = parseInt(void 0 != WW[this.testValue] ? WW[this.testValue] : this.testValue);
        if (isNaN(MW) || isNaN(wW)) return !1;
        switch (this.operand) {
          case ">":
            RW = MW > wW;
            break;
          case "<":
            RW = MW < wW;
            break;
          case "<=":
            RW = MW <= wW;
            break;
          case ">=":
            RW = MW >= wW;
            break;
          case "==":
            RW = MW === wW;
            break;
          case "!=":
            RW = MW !== wW
        }
        return RW
      }
    }
    var tR = MW(37470),
      TW = MW(37465);
    const gR = /defined\s*?\((.+?)\)/g,
      iR = /defined\s*?\[(.+?)\]/g,
      YW = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      JW = /__decl__/,
      PW = /light\{X\}.(\w*)/g,
      IW = /\{X\}/g,
      oW = [],
      lW = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function FW(WW) {
      WW.processor && WW.processor.initializeShaders && WW.processor.initializeShaders(WW.processingContext)
    }

    function fW(WW, RW, MW, wW) {
      RW.processor?.preProcessShaderCode && (WW = RW.processor.preProcessShaderCode(WW, RW.isFragment)), sW(WW, RW, (WW => {
        RW.processCodeAfterIncludes && (WW = RW.processCodeAfterIncludes(RW.isFragment ? "fragment" : "vertex", WW, RW.defines));
        const CW = function(WW, RW, MW) {
          let wW = function(WW, RW) {
            if (RW.processor?.noPrecision) return WW;
            const MW = RW.shouldUseHighPrecisionShader; - 1 === WW.indexOf("precision highp float") ? WW = MW ? "precision highp float;\n" + WW : "precision mediump float;\n" + WW : MW || (WW = WW.replace("precision highp float", "precision mediump float"));
            return WW
          }(WW, RW);
          if (!RW.processor) return wW;
          if (0 === RW.processor.shaderLanguage && -1 !== wW.indexOf("#version 3") && (wW = wW.replace("#version 300 es", ""), !RW.processor.parseGLES3)) return wW;
          const CW = RW.defines,
            zR = aR(RW, MW);
          RW.processor.preProcessor && (wW = RW.processor.preProcessor(wW, CW, zR, RW.isFragment, RW.processingContext));
          const AW = {};
          wW = kR(wW, zR, RW, AW), RW.processor.postProcessor && (wW = RW.processor.postProcessor(wW, CW, RW.isFragment, RW.processingContext, MW ? {
            drawBuffersExtensionDisabled: !MW.getCaps().drawBuffersExtension
          } : {}, zR, AW));
          MW?._features.needShaderCodeInlining && (wW = MW.inlineShaderCode(wW));
          return wW
        }(WW, RW, wW);
        MW(CW, WW)
      }))
    }

    function QW(WW, RW, MW) {
      return MW.processor && MW.processor.finalizeShaders ? MW.processor.finalizeShaders(WW, RW, MW.processingContext) : {
        vertexCode: WW,
        fragmentCode: RW
      }
    }

    function rR(WW) {
      const RW = /defined\((.+)\)/.exec(WW);
      if (RW && RW.length) return new yR(RW[1].trim(), "!" === WW[0]);
      const MW = ["==", "!=", ">=", "<=", "<", ">"];
      let wW = "",
        CW = 0;
      for (wW of MW)
        if (CW = WW.indexOf(wW), CW > -1) break;
      if (-1 === CW) return new yR(WW);
      const zR = WW.substring(0, CW).trim(),
        AW = WW.substring(CW + wW.length).trim();
      return new BW(zR, wW, AW)
    }

    function cR(WW, RW) {
      const MW = new AW,
        wW = WW.substring(0, RW);
      let CW = WW.substring(RW);
      return CW = CW.substring(0, (CW.indexOf("//") + 1 || CW.length + 1) - 1).trim(), MW.testExpression = "#ifdef" === wW ? new yR(CW) : "#ifndef" === wW ? new yR(CW, !0) : function(WW) {
        WW = WW.replace(gR, "defined[$1]");
        const RW = bR.infixToPostfix(WW),
          MW = [];
        for (const CW of RW)
          if ("||" !== CW && "&&" !== CW) MW.push(CW);
          else if (MW.length >= 2) {
          let WW = MW[MW.length - 1],
            RW = MW[MW.length - 2];
          MW.length -= 2;
          const wW = "&&" == CW ? new eW : new NW;
          "string" === typeof WW && (WW = WW.replace(iR, "defined($1)")), "string" === typeof RW && (RW = RW.replace(iR, "defined($1)")), wW.leftOperand = "string" === typeof RW ? rR(RW) : RW, wW.rightOperand = "string" === typeof WW ? rR(WW) : WW, MW.push(wW)
        }
        let wW = MW[MW.length - 1];
        return "string" === typeof wW && (wW = wW.replace(iR, "defined($1)")), "string" === typeof wW ? rR(wW) : wW
      }(CW), MW
    }

    function XW(WW, RW, MW, CW) {
      let zR;
      for (; jR(WW, MW, CW);) {
        zR = WW.currentLine;
        const AW = zR.substring(0, 5).toLowerCase();
        if ("#else" === AW) {
          const MW = new wW;
          return RW.children.push(MW), void jR(WW, MW, CW)
        }
        if ("#elif" === AW) {
          const WW = cR(zR, 5);
          RW.children.push(WW), MW = WW
        }
      }
    }

    function jR(WW, RW, MW) {
      for (; WW.canRead;) {
        WW.lineIndex++;
        const CW = WW.currentLine;
        if (CW.indexOf("#") >= 0) {
          const wW = lW.exec(CW);
          if (wW && wW.length) {
            switch (wW[0]) {
              case "#ifdef": {
                const wW = new zR;
                RW.children.push(wW);
                const AW = cR(CW, 6);
                wW.children.push(AW), XW(WW, wW, AW, MW);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const wW = new zR;
                RW.children.push(wW);
                const AW = cR(CW, 7);
                wW.children.push(AW), XW(WW, wW, AW, MW);
                break
              }
              case "#if": {
                const wW = new zR,
                  AW = cR(CW, 3);
                RW.children.push(wW), wW.children.push(AW), XW(WW, wW, AW, MW);
                break
              }
            }
            continue
          }
        }
        const AW = new wW;
        if (AW.line = CW, RW.children.push(AW), "#" === CW[0] && "d" === CW[1]) {
          const WW = CW.replace(";", "").split(" ");
          AW.additionalDefineKey = WW[1], 3 === WW.length && (AW.additionalDefineValue = WW[2])
        }
      }
      return !1
    }

    function kR(WW, RW, MW, zR) {
      const AW = new wW,
        bR = new CW;
      return bR.lineIndex = -1, bR.lines = WW.split("\n"), jR(bR, AW, zR), AW.process(RW, MW, zR)
    }

    function aR(WW, RW) {
      const MW = WW.defines,
        wW = {};
      for (const CW of MW) {
        const WW = CW.replace("#define", "").replace(";", "").trim().split(" ");
        wW[WW[0]] = WW.length > 1 ? WW[1] : ""
      }
      return 0 === WW.processor?.shaderLanguage && (wW.GL_ES = "true"), wW.__VERSION__ = WW.version, wW[WW.platformName] = "true", (0, TW.g)(wW, RW?.isNDCHalfZRange, RW?.BNW, RW?.useExactSrgbConversions), wW
    }

    function sW(WW, RW, MW) {
      let wW;
      for (oW.length = 0; null !== (wW = YW.exec(WW));) oW.push(wW);
      let CW = [WW],
        zR = !1;
      for (const bR of oW) {
        let WW = bR[1];
        if (-1 !== WW.indexOf("__decl__") && (WW = WW.replace(JW, ""), RW.supportsUniformBuffers && (WW = WW.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), WW += "Declaration"), !RW.includesShadersStore[WW]) {
          const wW = RW.shadersRepository + "ShadersInclude/" + WW + ".fx";
          return void dW.loadFile(wW, (wW => {
            RW.includesShadersStore[WW] = wW, sW(CW.join(""), RW, MW)
          }))
        } {
          let MW = RW.includesShadersStore[WW];
          if (bR[2]) {
            const WW = bR[3].split(",");
            for (let RW = 0; RW < WW.length; RW += 2) {
              const wW = new RegExp(WW[RW], "g"),
                CW = WW[RW + 1];
              MW = MW.replace(wW, CW)
            }
          }
          if (bR[4]) {
            const WW = bR[5];
            if (-1 !== WW.indexOf("..")) {
              const wW = WW.split(".."),
                CW = parseInt(wW[0]);
              let zR = parseInt(wW[1]),
                AW = MW.slice(0);
              MW = "", isNaN(zR) && (zR = RW.indexParameters[wW[1]]);
              for (let WW = CW; WW < zR; WW++) RW.supportsUniformBuffers || (AW = AW.replace(PW, ((WW, RW) => RW + "{X}"))), MW += AW.replace(IW, WW.toString()) + "\n"
            } else RW.supportsUniformBuffers || (MW = MW.replace(PW, ((WW, RW) => RW + "{X}"))), MW = MW.replace(IW, WW)
          }
          const wW = [];
          for (const WW of CW) {
            const RW = WW.split(bR[0]);
            for (let WW = 0; WW < RW.length - 1; WW++) wW.push(RW[WW]), wW.push(MW);
            wW.push(RW[RW.length - 1])
          }
          CW = wW, zR = zR || MW.indexOf("#include<") >= 0 || MW.indexOf("#include <") >= 0
        }
      }
      oW.length = 0;
      const AW = CW.join("");
      zR ? sW(AW.toString(), RW, MW) : MW(AW)
    }
    const dW = {
      loadFile: (WW, RW, MW, wW, CW, zR) => {
        throw (0, tR.g)("FileTools")
      }
    }
  },
  37465: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => CW,
      e: () => zR,
      g: () => bR,
      j: () => AW,
      l: () => yR
    });
    var wW = MW(37470);
    const CW = {};

    function zR(WW, RW) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (RW ? RW + "\n" : "") + WW
    }

    function AW(WW, RW, MW, zR, AW, bR, yR) {
      const NW = yR || CW.loadFile;
      if (!NW) throw (0, wW.g)("FileTools");
      return NW(WW, RW, MW, zR, AW, bR)
    }

    function bR(WW, RW, MW, wW) {
      if (WW) return RW ? WW.IS_NDC_HALF_ZRANGE = "" : delete WW.IS_NDC_HALF_ZRANGE, MW ? WW.USE_REVERSE_DEPTHBUFFER = "" : delete WW.USE_REVERSE_DEPTHBUFFER, void(wW ? WW.USE_EXACT_SRGB_CONVERSIONS = "" : delete WW.USE_EXACT_SRGB_CONVERSIONS);
      {
        let WW = "";
        return RW && (WW += "#define IS_NDC_HALF_ZRANGE"), MW && (WW && (WW += "\n"), WW += "#define USE_REVERSE_DEPTHBUFFER"), wW && (WW && (WW += "\n"), WW += "#define USE_EXACT_SRGB_CONVERSIONS"), WW
      }
    }

    function yR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        wW = arguments.length > 3 ? arguments[3] : void 0;
      switch (WW) {
        case 3: {
          const WW = new Int8Array(RW);
          return wW && WW.set(new Int8Array(wW)), WW
        }
        case 0: {
          const WW = new Uint8Array(RW);
          return wW && WW.set(new Uint8Array(wW)), WW
        }
        case 4: {
          const WW = "number" !== typeof RW ? new Int16Array(RW) : new Int16Array(MW ? RW / 2 : RW);
          return wW && WW.set(new Int16Array(wW)), WW
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const WW = "number" !== typeof RW ? new Uint16Array(RW) : new Uint16Array(MW ? RW / 2 : RW);
          return wW && WW.set(new Uint16Array(wW)), WW
        }
        case 6: {
          const WW = "number" !== typeof RW ? new Int32Array(RW) : new Int32Array(MW ? RW / 4 : RW);
          return wW && WW.set(new Int32Array(wW)), WW
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const WW = "number" !== typeof RW ? new Uint32Array(RW) : new Uint32Array(MW ? RW / 4 : RW);
          return wW && WW.set(new Uint32Array(wW)), WW
        }
        case 1: {
          const WW = "number" !== typeof RW ? new Float32Array(RW) : new Float32Array(MW ? RW / 4 : RW);
          return wW && WW.set(new Float32Array(wW)), WW
        }
      }
      const CW = new Uint8Array(RW);
      return wW && CW.set(new Uint8Array(wW)), CW
    }
  },
  37470: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => NW,
      e: () => eW,
      f: () => yR,
      g: () => CW
    });
    const wW = {};

    function CW(WW) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !wW[WW]) return wW[WW] = !0, `${WW} needs to be imported before as it contains a side-effect required by your code.`
    }
    const zR = {};
    let AW = !1,
      bR = 0;

    function yR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const wW = function() {
        if ((MW || AW) && 0 === bR) {
          const MW = `${WW}.${RW}`;
          zR[MW] || (zR[MW] = !0, console.warn(`[Babylon.js] ${MW}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return wW.__isSideEffectStub = !0, wW
    }

    function NW(WW) {
      return !!WW && !WW.__isSideEffectStub
    }

    function eW(WW, RW) {
      return {
        get() {},
        set(WW) {
          Object.defineProperty(this, RW, {
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
  37456: (WW, RW, MW) => {
    function wW() {
      return "undefined" !== typeof window
    }

    function CW() {
      return "undefined" !== typeof navigator
    }

    function zR() {
      return "undefined" !== typeof document
    }

    function AW(WW) {
      let RW = "",
        MW = WW.firstChild;
      for (; MW;) 3 === MW.nodeType && (RW += MW.textContent), MW = MW.nextSibling;
      return RW
    }
    MW.d(RW, {
      c: () => AW,
      g: () => zR,
      j: () => CW,
      m: () => wW
    })
  },
  37646: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW,
      c: () => CW,
      g: () => zR
    });
    class wW extends Error {}
    wW._setPrototypeOf = Object.setPrototypeOf || ((WW, RW) => (WW.__proto__ = RW, WW));
    const CW = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class zR extends wW {
      constructor(WW, RW, MW) {
        super(WW), this.errorCode = RW, this.innerError = MW, this.name = "RuntimeError", wW._setPrototypeOf(this, zR.prototype)
      }
    }
  },
  37635: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => aR,
      c: () => IW,
      g: () => cR,
      h: () => jR,
      l: () => QW,
      m: () => FW,
      p: () => fW,
      s: () => UW,
      v: () => rR,
      x: () => oW
    });
    var wW = MW(37637),
      CW = MW(37456),
      zR = MW(35346);
    class AW {}
    AW.FilesToLoad = {};
    var bR = MW(37646),
      yR = MW(37650),
      NW = MW(35344),
      eW = MW(37465),
      BW = MW(37477),
      tR = MW(36721),
      TW = MW(37483),
      gR = MW(37652);
    const iR = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class YW extends bR.g {
      constructor(WW, RW) {
        super(WW, bR.c.LoadFileError), this.name = "LoadFileError", bR.b._setPrototypeOf(this, YW.prototype), RW instanceof wW.b ? this.request = RW : this.file = RW
      }
    }
    class JW extends bR.g {
      constructor(WW, RW) {
        super(WW, bR.c.RequestFileError), this.request = RW, this.name = "RequestFileError", bR.b._setPrototypeOf(this, JW.prototype)
      }
    }
    class PW extends bR.g {
      constructor(WW, RW) {
        super(WW, bR.c.ReadFileError), this.file = RW, this.name = "ReadFileError", bR.b._setPrototypeOf(this, PW.prototype)
      }
    }
    const IW = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (MW, wW, CW) => 0 !== wW.status || CW >= WW || -1 !== MW.indexOf("file:") ? -1 : Math.pow(2, CW) * RW
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: WW => WW,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: WW => WW,
        CleanUrl: WW => WW = WW.replace(/#/gm, "%23")
      },
      oW = (WW, RW) => {
        if ((!WW || 0 !== WW.indexOf("data:")) && IW.CorsBehavior)
          if ("string" === typeof IW.CorsBehavior || IW.CorsBehavior instanceof String) RW.crossOrigin = IW.CorsBehavior;
          else {
            const MW = IW.CorsBehavior(WW);
            MW && (RW.crossOrigin = MW)
          }
      },
      lW = {
        getRequiredSize: null
      },
      FW = function(WW, RW, MW, CW) {
        let zR, bR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          eW = arguments.length > 5 ? arguments[5] : void 0,
          BW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : NW.d.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !BW?._features.forceBitmapOverHTMLImageElement) return MW("LoadImage is only supported in web or BabylonNative environments."), null;
        if (BW?._features.forceBitmapOverHTMLImageElement && "string" !== typeof WW && "undefined" !== typeof Blob) {
          let wW;
          if (WW instanceof Blob) wW = WW;
          else {
            const RW = WW instanceof ArrayBuffer ? WW : (0, gR.m)(WW);
            wW = new Blob([RW], {
              type: bR
            })
          }
          return BW.createImageBitmap(wW, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...eW
          }).then(RW).catch((RW => {
            MW && MW("Error while trying to load image: " + WW, RW)
          })), null
        }
        let tR = !1;
        if (WW instanceof ArrayBuffer || ArrayBuffer.isView(WW))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let RW;
            RW = WW instanceof ArrayBuffer ? WW : (0, gR.m)(WW), zR = URL.createObjectURL(new Blob([RW], {
              type: bR
            })), tR = !0
          } else zR = `data:${bR};base64,` + (0, yR.h)(WW);
        else WW instanceof Blob ? (zR = URL.createObjectURL(WW), tR = !0) : (zR = IW.CleanUrl(WW), zR = IW.PreprocessUrl(zR));
        const TW = RW => {
          if (MW) {
            const wW = zR || WW.toString();
            MW(`Error while trying to load image: ${0===wW.indexOf("http")||wW.length<=128?wW:wW.slice(0,128)+"..."}`, RW)
          }
        };
        if (BW?._features.forceBitmapOverHTMLImageElement) return QW(zR, (wW => {
          BW.createImageBitmap(new Blob([wW], {
            type: bR
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...eW
          }).then((WW => {
            RW(WW), tR && URL.revokeObjectURL(zR)
          })).catch((RW => {
            MW && MW("Error while trying to load image: " + WW, RW)
          }))
        }), void 0, CW || void 0, !0, ((WW, RW) => {
          TW(RW)
        })), null;
        const iR = new Image;
        if (lW.getRequiredSize) {
          const RW = lW.getRequiredSize(WW);
          RW.width && (iR.width = RW.width), RW.height && (iR.height = RW.height)
        }
        oW(zR, iR);
        const YW = [],
          JW = () => {
            for (const WW of YW) WW.target.removeEventListener(WW.name, WW.handler);
            YW.length = 0
          };
        YW.push({
          target: iR,
          name: "load",
          handler: () => {
            JW(), RW(iR), tR && iR.src && URL.revokeObjectURL(iR.src)
          }
        }), YW.push({
          target: iR,
          name: "error",
          handler: WW => {
            JW(), TW(WW), tR && iR.src && URL.revokeObjectURL(iR.src)
          }
        }), YW.push({
          target: document,
          name: "securitypolicyviolation",
          handler: WW => {
            if (WW.blockedURI !== iR.src || "Mw" === WW.disposition) return;
            JW();
            const RW = new Error(`CSP violation of policy ${WW.effectiveDirective} ${WW.blockedURI}. Current policy is ${WW.originalPolicy}`);
            NW.d.UseFallbackTexture = !1, TW(RW), tR && iR.src && URL.revokeObjectURL(iR.src), iR.src = ""
          }
        }), (() => {
          for (const WW of YW) WW.target.addEventListener(WW.name, WW.handler)
        })();
        const PW = "blob:" === zR.substring(0, 5),
          FW = "data:" === zR.substring(0, 5),
          fW = () => {
            PW || FW || !wW.b.IsCustomRequestAvailable ? iR.src = zR : QW(zR, ((WW, RW, MW) => {
              const wW = new Blob([WW], {
                  type: !bR && MW ? MW : bR
                }),
                CW = URL.createObjectURL(wW);
              tR = !0, iR.src = CW
            }), void 0, CW || void 0, !0, ((WW, RW) => {
              TW(RW)
            }))
          },
          rR = () => {
            CW && CW.loadImage(zR, iR)
          };
        if (!PW && !FW && CW && CW.enableTexturesOffline) CW.open(rR, fW);
        else {
          if (-1 !== zR.indexOf("file:")) {
            const WW = decodeURIComponent(zR.substring(5).toLowerCase());
            if (AW.FilesToLoad[WW] && "undefined" !== typeof URL) {
              try {
                let RW;
                try {
                  RW = URL.createObjectURL(AW.FilesToLoad[WW])
                } catch (cR) {
                  RW = URL.createObjectURL(AW.FilesToLoad[WW])
                }
                iR.src = RW, tR = !0
              } catch (XW) {
                iR.src = ""
              }
              return iR
            }
          }
          fW()
        }
        return iR
      },
      fW = (WW, RW, MW, wW, CW) => {
        const AW = new FileReader,
          bR = {
            onCompleteObservable: new zR.c,
            abort: () => AW.abort()
          };
        return AW.onloadend = () => bR.onCompleteObservable.notifyObservers(bR), CW && (AW.onerror = () => {
          CW(new PW(`Unable to read ${WW.name}`, WW))
        }), AW.onload = WW => {
          RW(WW.target.result)
        }, MW && (AW.onprogress = MW), wW ? AW.readAsArrayBuffer(WW) : AW.readAsText(WW), bR
      },
      QW = (WW, RW, MW, wW, CW, yR, NW) => {
        if (WW.name) return fW(WW, RW, MW, CW, yR ? WW => {
          yR(void 0, WW)
        } : void 0);
        const eW = WW;
        if (-1 !== eW.indexOf("file:")) {
          let WW = decodeURIComponent(eW.substring(5).toLowerCase());
          0 === WW.indexOf("./") && (WW = WW.substring(2));
          const wW = AW.FilesToLoad[WW];
          if (wW) return fW(wW, RW, MW, CW, yR ? WW => yR(void 0, new YW(WW.message, WW.file)) : void 0)
        }
        const {
          match: BW,
          type: gR
        } = kR(eW);
        if (BW) {
          const WW = {
            onCompleteObservable: new zR.c,
            abort: () => () => {}
          };
          try {
            const WW = CW ? aR(eW) : sW(eW);
            RW(WW, void 0, gR)
          } catch (bR) {
            yR ? yR(void 0, bR) : tR.b.Error(bR.message || "Failed to parse the Data URL")
          }
          return TW.c.SetImmediate((() => {
            WW.onCompleteObservable.notifyObservers(WW)
          })), WW
        }
        return rR(eW, ((WW, MW) => {
          RW(WW, MW?.responseURL, MW?.getResponseHeader("content-type"))
        }), MW, wW, CW, yR ? WW => {
          yR(WW.request, new YW(WW.message, WW.request))
        } : void 0, NW)
      },
      rR = (WW, RW, MW, AW, bR, yR, eW) => {
        null !== AW && (AW ?? (AW = NW.d.LastCreatedScene?.offlineProvider)), WW = IW.CleanUrl(WW), WW = IW.PreprocessUrl(WW);
        const BW = IW.BaseUrl + WW;
        let TW = !1;
        const gR = {
            onCompleteObservable: new zR.c,
            abort: () => TW = !0
          },
          iR = () => {
            let WW, zR = new wW.b,
              AW = null;
            const NW = () => {
              zR && (MW && zR.removeEventListener("progress", MW), WW && zR.removeEventListener("readystatechange", WW), zR.removeEventListener("loadend", iR))
            };
            let iR = () => {
              NW(), gR.onCompleteObservable.notifyObservers(gR), gR.onCompleteObservable.clear(), MW = void 0, WW = null, iR = null, yR = void 0, eW = void 0, RW = void 0
            };
            gR.abort = () => {
              TW = !0, iR && iR(), zR && zR.readyState !== (XMLHttpRequest.DONE || 4) && zR.abort(), null !== AW && (clearTimeout(AW), AW = null), zR = null
            };
            const YW = WW => {
                const RW = WW.message || "Unknown error";
                yR && zR ? yR(new JW(RW, zR)) : tR.b.Error(RW)
              },
              PW = tR => {
                if (zR) {
                  if (zR.open("GET", BW), eW) try {
                    eW(zR)
                  } catch (gR) {
                    return void YW(gR)
                  }
                  bR && (zR.responseType = "arraybuffer"), MW && zR.addEventListener("progress", MW), iR && zR.addEventListener("loadend", iR), WW = () => {
                    if (!TW && zR && zR.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (WW && zR.removeEventListener("readystatechange", WW), zR.status >= 200 && zR.status < 300 || 0 === zR.status && (!(0, CW.m)() || XW())) {
                        const WW = bR ? zR.response : zR.responseText;
                        if (null !== WW) {
                          try {
                            RW && RW(WW, zR)
                          } catch (gR) {
                            YW(gR)
                          }
                          return
                        }
                      }
                      const MW = IW.DefaultRetryStrategy;
                      if (MW) {
                        const WW = MW(BW, zR, tR);
                        if (-1 !== WW) return NW(), zR = new wW.b, void(AW = setTimeout((() => PW(tR + 1)), WW))
                      }
                      const eW = new JW("Error status: " + zR.status + " " + zR.statusText + " - Unable to load " + BW, zR);
                      yR && yR(eW)
                    }
                  }, zR.addEventListener("readystatechange", WW), zR.send()
                }
              };
            PW(0)
          };
        if (AW && AW.enableSceneOffline && !WW.startsWith("blob:")) {
          const wW = WW => {
              WW && WW.status > 400 ? yR && yR(WW) : iR()
            },
            CW = () => {
              AW && AW.loadFile(IW.BaseUrl + WW, (WW => {
                !TW && RW && RW(WW), gR.onCompleteObservable.notifyObservers(gR)
              }), MW ? WW => {
                !TW && MW && MW(WW)
              } : void 0, wW, bR)
            };
          AW.open(CW, wW)
        } else iR();
        return gR
      },
      cR = WW => {
        const {
          match: RW,
          type: MW
        } = kR(WW);
        if (RW) return MW || void 0;
        const wW = WW.lastIndexOf(".");
        switch (WW.substring(wW + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "CNW":
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
      XW = () => "undefined" !== typeof location && "file:" === location.protocol,
      jR = WW => iR.test(WW),
      kR = WW => {
        const RW = iR.exec(WW);
        if (null === RW || 0 === RW.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: RW[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function aR(WW) {
      return (0, yR.c)(WW.split(",")[1])
    }
    const sW = WW => (0, yR.e)(WW.split(",")[1]);
    let dW;
    const pW = (WW, RW, MW, wW, CW, zR, AW, bR, yR, NW) => {
      dW = {
        DecodeBase64UrlToBinary: WW,
        DecodeBase64UrlToString: RW,
        DefaultRetryStrategy: MW.DefaultRetryStrategy,
        BaseUrl: MW.BaseUrl,
        CorsBehavior: MW.CorsBehavior,
        PreprocessUrl: MW.PreprocessUrl,
        IsBase64DataUrl: wW,
        IsFileURL: CW,
        LoadFile: zR,
        LoadImage: AW,
        ReadFile: bR,
        RequestFile: yR,
        SetCorsBehavior: NW
      }, Object.defineProperty(dW, "DefaultRetryStrategy", {
        get: function() {
          return MW.DefaultRetryStrategy
        },
        set: function(WW) {
          MW.DefaultRetryStrategy = WW
        }
      }), Object.defineProperty(dW, "BaseUrl", {
        get: function() {
          return MW.BaseUrl
        },
        set: function(WW) {
          MW.BaseUrl = WW
        }
      }), Object.defineProperty(dW, "PreprocessUrl", {
        get: function() {
          return MW.PreprocessUrl
        },
        set: function(WW) {
          MW.PreprocessUrl = WW
        }
      }), Object.defineProperty(dW, "CorsBehavior", {
        get: function() {
          return MW.CorsBehavior
        },
        set: function(WW) {
          MW.CorsBehavior = WW
        }
      })
    };
    let hW = !1;

    function UW() {
      hW || (hW = !0, pW(aR, sW, IW, jR, XW, QW, FW, fW, rR, oW), eW.b.loadFile = QW, eW.b.loadImage = FW, BW.q.loadFile = QW)
    }
  },
  37659: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => bR,
      i: () => zR,
      j: () => AW
    });
    let wW = null;

    function CW() {
      if (wW) return wW;
      const WW = new ArrayBuffer(4),
        RW = new Float32Array(WW),
        MW = new Uint32Array(WW),
        CW = new Uint32Array(512),
        zR = new Uint32Array(512);
      for (let wW = 0; wW < 256; ++wW) {
        const WW = wW - 127;
        WW < -24 ? (CW[wW] = 0, CW[256 | wW] = 32768, zR[wW] = 24, zR[256 | wW] = 24) : WW < -14 ? (CW[wW] = 1024 >> -WW - 14, CW[256 | wW] = 1024 >> -WW - 14 | 32768, zR[wW] = -WW - 1, zR[256 | wW] = -WW - 1) : WW <= 15 ? (CW[wW] = WW + 15 << 10, CW[256 | wW] = WW + 15 << 10 | 32768, zR[wW] = 13, zR[256 | wW] = 13) : WW < 128 ? (CW[wW] = 31744, CW[256 | wW] = 64512, zR[wW] = 24, zR[256 | wW] = 24) : (CW[wW] = 31744, CW[256 | wW] = 64512, zR[wW] = 13, zR[256 | wW] = 13)
      }
      const AW = new Uint32Array(2048),
        bR = new Uint32Array(64),
        yR = new Uint32Array(64);
      for (let wW = 1; wW < 1024; ++wW) {
        let WW = wW << 13,
          RW = 0;
        for (; 0 === (8388608 & WW);) WW <<= 1, RW -= 8388608;
        WW &= -8388609, RW += 947912704, AW[wW] = WW | RW
      }
      for (let wW = 1024; wW < 2048; ++wW) AW[wW] = 939524096 + (wW - 1024 << 13);
      for (let wW = 1; wW < 31; ++wW) bR[wW] = wW << 23;
      bR[31] = 1199570944, bR[32] = 2147483648;
      for (let wW = 33; wW < 63; ++wW) bR[wW] = 2147483648 + (wW - 32 << 23);
      bR[63] = 3347054592;
      for (let wW = 1; wW < 64; ++wW) 32 !== wW && (yR[wW] = 1024);
      return wW = {
        floatView: RW,
        uint32View: MW,
        baseTable: CW,
        shiftTable: zR,
        mantissaTable: AW,
        exponentTable: bR,
        offsetTable: yR
      }, wW
    }
    const zR = 65504;

    function AW(WW) {
      const RW = CW();
      RW.floatView[0] = WW;
      const MW = RW.uint32View[0],
        wW = MW >> 23 & 511;
      return RW.baseTable[wW] + ((8388607 & MW) >> RW.shiftTable[wW])
    }

    function bR(WW) {
      const RW = CW();
      return RW.uint32View[0] = RW.mantissaTable[RW.offsetTable[WW >> 10] + (1023 & WW)] + RW.exponentTable[WW >> 10], RW.floatView[0]
    }
  },
  37650: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR,
      e: () => CW,
      h: () => wW
    });
    const wW = WW => {
        const RW = ArrayBuffer.isView(WW) ? new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength) : new Uint8Array(WW);
        return "function" === typeof RW.toBase64 ? RW.toBase64() : function(WW) {
          const RW = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let MW, wW, CW, zR, AW, bR, yR, NW = "",
            eW = 0;
          for (; eW < WW.length;) MW = WW[eW++], wW = eW < WW.length ? WW[eW++] : Number.NaN, CW = eW < WW.length ? WW[eW++] : Number.NaN, zR = MW >> 2, AW = (3 & MW) << 4 | wW >> 4, bR = (15 & wW) << 2 | CW >> 6, yR = 63 & CW, isNaN(wW) ? bR = yR = 64 : isNaN(CW) && (yR = 64), NW += RW.charAt(zR) + RW.charAt(AW) + RW.charAt(bR) + RW.charAt(yR);
          return NW
        }(RW)
      },
      CW = WW => atob(WW),
      zR = WW => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(WW).buffer : function(WW) {
        const RW = CW(WW),
          MW = RW.length,
          wW = new Uint8Array(new ArrayBuffer(MW));
        for (let CW = 0; CW < MW; CW++) wW[CW] = RW.charCodeAt(CW);
        return wW.buffer
      }(WW)
  },
  37483: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW,
      g: () => AW
    });
    let wW = [];
    class CW {
      static SetImmediate(WW) {
        0 === wW.length && setTimeout((() => {
          const WW = wW;
          wW = [];
          for (const RW of WW) RW()
        }), 1), wW.push(WW)
      }
    }

    function zR(WW, RW, MW) {
      try {
        if (WW()) return RW(), !0
      } catch (wW) {
        return MW?.(wW), !0
      }
      return !1
    }
    const AW = function(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        AW = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && zR(WW, RW, MW)) return null;
      const bR = setInterval((() => {
        zR(WW, RW, MW) ? clearInterval(bR) : (CW -= wW, CW < 0 && (clearInterval(bR), MW?.(new Error("Operation timed out after maximum retries. " + (AW || "")), !0)))
      }), wW);
      return () => clearInterval(bR)
    }
  },
  37637: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    class wW {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(wW.CustomRequestHeaders).length > 0 || wW.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(WW) {
        return WW = (WW = WW.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(WW) {
        return wW.SkipRequestModificationForBabylonCDN && (WW.includes("preview.babylonjs.com") || WW.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(WW) {
        const RW = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (wW._ShouldSkipRequestModifications(WW)) return {
          url: WW,
          headers: RW
        };
        for (const CW in wW.CustomRequestHeaders) {
          const WW = wW.CustomRequestHeaders[CW];
          WW && (RW[CW] = WW)
        }
        const MW = {
          setRequestHeader: (WW, MW) => {
            RW[WW] = MW
          }
        };
        for (const CW of wW.CustomRequestModifiers) {
          if (wW._ShouldSkipRequestModifications(WW)) break;
          const RW = CW(MW, WW);
          "string" === typeof RW && (WW = RW)
        }
        return {
          url: WW,
          headers: RW
        }
      }
      static async FetchAsync(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const MW = RW.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: CW,
            headers: zR
          } = wW._CollectCustomizations(wW._CleanUrl(WW), RW.headers ?? {});
          return await fetch(CW, {
            method: MW,
            headers: zR,
            body: RW.body ?? void 0
          })
        }
        return await new Promise(((CW, zR) => {
          const AW = new wW;
          AW.responseType = "arraybuffer", AW.addEventListener("readystatechange", (() => {
            if (4 === AW.readyState)
              if (AW.status >= 200 && AW.status < 300) {
                const WW = "undefined" !== typeof Headers ? new Headers : void 0,
                  RW = AW.getResponseHeader("Content-Type");
                RW && WW && WW.set("Content-Type", RW), "undefined" !== typeof Response ? CW(new Response(AW.response, {
                  status: AW.status,
                  statusText: AW.statusText,
                  headers: WW
                })) : CW({
                  ok: !0,
                  status: AW.status,
                  statusText: AW.statusText,
                  headers: {
                    get: WW => AW.getResponseHeader(WW)
                  },
                  arrayBuffer: async () => await Promise.resolve(AW.response)
                })
              } else zR(new Error(`HTTP ${AW.status} loading '${AW.requestURL}': ${AW.statusText}`))
          })), AW.open(MW, WW, RW.headers), AW.send(RW.body ?? null)
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
      addEventListener(WW, RW, MW) {
        this._xhr.addEventListener(WW, RW, MW)
      }
      removeEventListener(WW, RW, MW) {
        this._xhr.removeEventListener(WW, RW, MW)
      }
      abort() {
        this._xhr.abort()
      }
      send(WW) {
        this._xhr.send(WW)
      }
      open(WW, RW, MW) {
        const {
          url: CW,
          headers: zR
        } = wW._CollectCustomizations(RW, MW);
        this._requestURL = wW._CleanUrl(CW), this._xhr.open(WW, this._requestURL, !0);
        for (const wW in zR) this._xhr.setRequestHeader(wW, zR[wW])
      }
      setRequestHeader(WW, RW) {
        this._xhr.setRequestHeader(WW, RW)
      }
      getResponseHeader(WW) {
        return this._xhr.getResponseHeader(WW)
      }
    }
    wW.CustomRequestHeaders = {}, wW.CustomRequestModifiers = new Array, wW.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);