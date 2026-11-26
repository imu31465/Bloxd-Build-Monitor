export const id = 283;
export const ids = [283];
export const modules = {
  41356: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => GH,
      f: () => XH,
      j: () => zH,
      m: () => YH,
      p: () => CH,
      q: () => tH,
      r: () => EH
    });
    var AH = LH(39595),
      rH = LH(41364);

    function SH(HH, BH, LH, AH) {
      switch (BH) {
        case 5120: {
          let BH = HH.getInt8(LH);
          return AH && (BH = Math.max(BH / 127, -1)), BH
        }
        case 5121: {
          let BH = HH.getUint8(LH);
          return AH && (BH /= 255), BH
        }
        case 5122: {
          let BH = HH.getInt16(LH, !0);
          return AH && (BH = Math.max(BH / 32767, -1)), BH
        }
        case 5123: {
          let BH = HH.getUint16(LH, !0);
          return AH && (BH /= 65535), BH
        }
        case 5131:
          return (0, rH.d)(HH.getUint16(LH, !0));
        case 5124:
          return HH.getInt32(LH, !0);
        case 5125:
          return HH.getUint32(LH, !0);
        case 5126:
          return HH.getFloat32(LH, !0);
        default:
          throw new Error(`Invalid component type ${BH}`)
      }
    }

    function hH(HH, BH, LH, AH, SH) {
      switch (BH) {
        case 5120:
          AH && (SH = Math.round(127 * SH)), HH.setInt8(LH, SH);
          break;
        case 5121:
          AH && (SH = Math.round(255 * SH)), HH.setUint8(LH, SH);
          break;
        case 5122:
          AH && (SH = Math.round(32767 * SH)), HH.setInt16(LH, SH, !0);
          break;
        case 5123:
          AH && (SH = Math.round(65535 * SH)), HH.setUint16(LH, SH, !0);
          break;
        case 5131:
          HH.setUint16(LH, (0, rH.f)(SH), !0);
          break;
        case 5124:
          HH.setInt32(LH, SH, !0);
          break;
        case 5125:
          HH.setUint32(LH, SH, !0);
          break;
        case 5126:
          HH.setFloat32(LH, SH, !0);
          break;
        default:
          throw new Error(`Invalid component type ${BH}`)
      }
    }

    function tH(HH) {
      switch (HH) {
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
          throw new Error(`Invalid type '${HH}'`)
      }
    }

    function zH(HH, BH, LH, AH, rH, zH, CH, EH) {
      const XH = new Array(AH),
        GH = new Array(AH);
      if (HH instanceof Array) {
        let rH = BH / 4;
        const SH = LH / 4;
        for (let BH = 0; BH < zH; BH += AH) {
          for (let BH = 0; BH < AH; BH++) XH[BH] = GH[BH] = HH[rH + BH];
          EH(GH, BH);
          for (let BH = 0; BH < AH; BH++) XH[BH] !== GH[BH] && (HH[rH + BH] = GH[BH]);
          rH += SH
        }
      } else {
        const YH = ArrayBuffer.isView(HH) ? new DataView(HH.buffer, HH.byteOffset, HH.byteLength) : new DataView(HH),
          uH = tH(rH);
        for (let HH = 0; HH < zH; HH += AH) {
          for (let HH = 0, LH = BH; HH < AH; HH++, LH += uH) XH[HH] = GH[HH] = SH(YH, rH, LH, CH);
          EH(GH, HH);
          for (let HH = 0, LH = BH; HH < AH; HH++, LH += uH) XH[HH] !== GH[HH] && hH(YH, rH, LH, CH, GH[HH]);
          BH += LH
        }
      }
    }

    function CH(HH, BH, LH, rH, SH, hH, CH, EH) {
      const XH = BH * tH(LH),
        GH = CH * BH;
      if (5126 !== LH || SH !== XH) {
        const AH = new Float32Array(GH);
        return zH(HH, rH, SH, BH, LH, GH, hH, ((HH, LH) => {
          for (let rH = 0; rH < BH; rH++) AH[LH + rH] = HH[rH]
        })), AH
      }
      if (!(HH instanceof Array || HH instanceof Float32Array) || 0 !== rH || HH.length !== GH) {
        if (HH instanceof Array) {
          const BH = rH / 4;
          return HH.slice(BH, BH + GH)
        }
        if (ArrayBuffer.isView(HH)) {
          const BH = HH.byteOffset + rH;
          return 0 !== (3 & BH) && (AH.e.Warn("Float array must be aligned to 4-bytes border"), EH = !0), EH ? new Float32Array(HH.buffer.slice(BH, BH + GH * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(HH.buffer, BH, GH)
        }
        return new Float32Array(HH, rH, GH)
      }
      return EH ? HH.slice() : HH
    }

    function EH(HH, BH, LH, rH, SH, hH, CH) {
      const EH = tH(LH),
        XH = function(HH) {
          switch (HH) {
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
              throw new Error(`Invalid component type '${HH}'`)
          }
        }(LH),
        GH = hH * BH;
      if (Array.isArray(HH)) {
        if (0 !== (3 & rH) || 0 !== (3 & SH)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const AH = rH / 4,
          tH = SH / 4;
        if (AH + (hH - 1) * tH + BH > HH.length) throw new Error("Last accessed index is out of bounds.");
        if (tH < BH) throw new Error("Data stride cannot be smaller than the component size.");
        if (tH !== BH) {
          const AH = new XH(GH);
          return zH(HH, rH, SH, BH, LH, GH, !1, ((HH, LH) => {
            for (let rH = 0; rH < BH; rH++) AH[LH + rH] = HH[rH]
          })), AH
        }
        return new XH(HH.slice(AH, AH + GH))
      }
      let YH, uH = rH;
      ArrayBuffer.isView(HH) ? (YH = HH.buffer, uH += HH.byteOffset) : YH = HH;
      if (uH + (hH - 1) * SH + BH * EH > YH.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const QH = BH * EH;
      if (SH < QH) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (SH !== QH) {
        const HH = new XH(GH),
          LH = new Uint8Array(YH, uH),
          AH = new Uint8Array(HH.buffer),
          rH = BH * EH;
        for (let BH = 0, tH = 0, zH = 0; BH < hH; BH++, tH += SH, zH += rH) AH.set(LH.subarray(tH, tH + rH), zH);
        return HH
      }
      return 1 !== EH && 0 !== (uH & EH - 1) && (AH.e.Warn("Array must be aligned to border of element size. Data will be copied."), CH = !0), CH ? new XH(YH.slice(uH, uH + GH * EH)) : new XH(YH, uH, GH)
    }

    function XH(HH, BH, LH, rH, SH, hH, CH, EH) {
      const XH = BH * tH(LH),
        GH = CH * BH;
      if (EH.length !== GH) throw new Error("Output length is not valid");
      if (5126 === LH && SH === XH)
        if (HH instanceof Array) {
          const BH = rH / 4;
          EH.set(HH, BH)
        } else if (ArrayBuffer.isView(HH)) {
        const BH = HH.byteOffset + rH;
        if (0 !== (3 & BH)) return AH.e.Warn("Float array must be aligned to 4-bytes border"), void EH.set(new Float32Array(HH.buffer.slice(BH, BH + GH * Float32Array.BYTES_PER_ELEMENT)));
        const LH = new Float32Array(HH.buffer, BH, GH);
        EH.set(LH)
      } else {
        const BH = new Float32Array(HH, rH, GH);
        EH.set(BH)
      } else zH(HH, rH, SH, BH, LH, GH, hH, ((HH, LH) => {
        for (let AH = 0; AH < BH; AH++) EH[LH + AH] = HH[AH]
      }))
    }

    function GH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(HH)) {
        for (let rH = 0; rH < BH; rH++)
          if (HH[LH + rH] - AH > 65535) return !0;
        return !1
      }
      return 4 === HH.BYTES_PER_ELEMENT
    }

    function YH(HH) {
      const BH = HH.buffer;
      if (BH instanceof ArrayBuffer) return HH;
      const LH = new ArrayBuffer(HH.byteLength);
      return new Uint8Array(LH).set(new Uint8Array(BH, HH.byteOffset, HH.byteLength)), LH
    }
  },
  41173: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => OH,
      d: () => UH,
      j: () => VH,
      g: () => lH,
      n: () => KH
    });
    class AH {
      constructor() {
        this.children = []
      }
      isValid(HH) {
        return !0
      }
      process(HH, BH, LH) {
        let AH = "";
        if (this.line) {
          let LH = this.line;
          const rH = BH.processor;
          if (rH) {
            rH.lineProcessor && (LH = rH.lineProcessor(LH, BH.isFragment, BH.processingContext));
            const AH = BH.processor?.attributeKeywordName ?? "attribute",
              SH = BH.isFragment && BH.processor?.varyingFragmentKeywordName ? BH.processor?.varyingFragmentKeywordName : !BH.isFragment && BH.processor?.varyingVertexKeywordName ? BH.processor?.varyingVertexKeywordName : "varying";
            if (!BH.isFragment && rH.attributeProcessor && this.line.startsWith(AH)) LH = rH.attributeProcessor(this.line, HH, BH.processingContext);
            else if (rH.varyingProcessor && (rH.varyingCheck?.(this.line, BH.isFragment) || !rH.varyingCheck && this.line.startsWith(SH))) LH = rH.varyingProcessor(this.line, BH.isFragment, HH, BH.processingContext);
            else if (rH.uniformProcessor && rH.uniformRegexp && rH.uniformRegexp.test(this.line)) BH.lookForClosingBracketForUniformBuffer || (LH = rH.uniformProcessor(this.line, BH.isFragment, HH, BH.processingContext));
            else if (rH.uniformBufferProcessor && rH.uniformBufferRegexp && rH.uniformBufferRegexp.test(this.line)) BH.lookForClosingBracketForUniformBuffer || (LH = rH.uniformBufferProcessor(this.line, BH.isFragment, BH.processingContext), BH.lookForClosingBracketForUniformBuffer = !0);
            else if (rH.textureProcessor && rH.textureRegexp && rH.textureRegexp.test(this.line)) LH = rH.textureProcessor(this.line, BH.isFragment, HH, BH.processingContext);
            else if ((rH.uniformProcessor || rH.uniformBufferProcessor) && this.line.startsWith("uniform") && !BH.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? rH.uniformProcessor && (LH = rH.uniformProcessor(this.line, BH.isFragment, HH, BH.processingContext)) : rH.uniformBufferProcessor && (LH = rH.uniformBufferProcessor(this.line, BH.isFragment, BH.processingContext), BH.lookForClosingBracketForUniformBuffer = !0)
            }
            BH.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (BH.lookForClosingBracketForUniformBuffer = !1, rH.endOfUniformBufferProcessor && (LH = rH.endOfUniformBufferProcessor(this.line, BH.isFragment, BH.processingContext)))
          }
          AH += LH + "\n"
        }
        for (const rH of this.children) AH += rH.process(HH, BH, LH);
        return this.additionalDefineKey && (HH[this.additionalDefineKey] = this.additionalDefineValue || "true", LH[this.additionalDefineKey] = HH[this.additionalDefineKey]), AH
      }
    }
    class rH {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(HH) {
        this._lines.length = 0;
        for (const BH of HH) {
          if (!BH || "\r" === BH) continue;
          if ("#" === BH[0]) {
            this._lines.push(BH);
            continue
          }
          const HH = BH.trim();
          if (!HH) continue;
          if (HH.startsWith("//")) {
            this._lines.push(BH);
            continue
          }
          const LH = HH.indexOf(";");
          if (-1 === LH) this._lines.push(HH);
          else if (LH === HH.length - 1) HH.length > 1 && this._lines.push(HH);
          else {
            const HH = BH.split(";");
            for (let BH = 0; BH < HH.length; BH++) {
              let LH = HH[BH];
              LH && (LH = LH.trim(), LH && this._lines.push(LH + (BH !== HH.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class SH extends AH {
      process(HH, BH, LH) {
        for (let AH = 0; AH < this.children.length; AH++) {
          const rH = this.children[AH];
          if (rH.isValid(HH)) return rH.process(HH, BH, LH)
        }
        return ""
      }
    }
    class hH extends AH {
      isValid(HH) {
        return this.testExpression.isTrue(HH)
      }
    }
    class tH {
      isTrue(HH) {
        return !0
      }
      static postfixToInfix(HH) {
        const BH = [];
        for (const LH of HH)
          if (void 0 === tH._OperatorPriority[LH]) BH.push(LH);
          else {
            const HH = BH[BH.length - 1],
              AH = BH[BH.length - 2];
            BH.length -= 2, BH.push(`(${AH}${LH}${HH})`)
          } return BH[BH.length - 1]
      }
      static infixToPostfix(HH) {
        const BH = tH._InfixToPostfixCache.get(HH);
        if (BH) return BH.accessTime = Date.now(), BH.result;
        if (!HH.includes("&&") && !HH.includes("||") && !HH.includes(")") && !HH.includes("(")) return [HH];
        const LH = [];
        let AH = -1;
        const rH = () => {
            EH = EH.trim(), "" !== EH && (LH.push(EH), EH = "")
          },
          SH = HH => {
            AH < tH._Stack.length - 1 && (tH._Stack[++AH] = HH)
          },
          hH = () => tH._Stack[AH],
          zH = () => -1 === AH ? "!!INVALID EXPRESSION!!" : tH._Stack[AH--];
        let CH = 0,
          EH = "";
        for (; CH < HH.length;) {
          const BH = HH.charAt(CH),
            XH = CH < HH.length - 1 ? HH.substring(CH, 2 + CH) : "";
          if ("(" === BH) EH = "", SH(BH);
          else if (")" === BH) {
            for (rH(); - 1 !== AH && "(" !== hH();) LH.push(zH());
            zH()
          } else if (tH._OperatorPriority[XH] > 1) {
            for (rH(); - 1 !== AH && tH._OperatorPriority[hH()] >= tH._OperatorPriority[XH];) LH.push(zH());
            SH(XH), CH++
          } else EH += BH;
          CH++
        }
        for (rH(); - 1 !== AH;) "(" === hH() ? zH() : LH.push(zH());
        return tH._InfixToPostfixCache.size >= tH.InfixToPostfixCacheLimitSize && tH.ClearCache(), tH._InfixToPostfixCache.set(HH, {
          result: LH,
          accessTime: Date.now()
        }), LH
      }
      static ClearCache() {
        const HH = Array.from(tH._InfixToPostfixCache.entries()).sort(((HH, BH) => HH[1].accessTime - BH[1].accessTime));
        for (let BH = 0; BH < tH.InfixToPostfixCacheCleanupSize; BH++) tH._InfixToPostfixCache.delete(HH[BH][0])
      }
    }
    tH.InfixToPostfixCacheLimitSize = 5e4, tH.InfixToPostfixCacheCleanupSize = 25e3, tH._InfixToPostfixCache = new Map, tH._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, tH._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class zH extends tH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = HH, this.not = BH
      }
      isTrue(HH) {
        let BH = void 0 !== HH[this.define];
        return this.not && (BH = !BH), BH
      }
    }
    class CH extends tH {
      isTrue(HH) {
        return this.leftOperand.isTrue(HH) || this.rightOperand.isTrue(HH)
      }
    }
    class EH extends tH {
      isTrue(HH) {
        return this.leftOperand.isTrue(HH) && this.rightOperand.isTrue(HH)
      }
    }
    class XH extends tH {
      constructor(HH, BH, LH) {
        super(), this.define = HH, this.operand = BH, this.testValue = LH
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(HH) {
        let BH = !1;
        const LH = parseInt(void 0 != HH[this.define] ? HH[this.define] : this.define),
          AH = parseInt(void 0 != HH[this.testValue] ? HH[this.testValue] : this.testValue);
        if (isNaN(LH) || isNaN(AH)) return !1;
        switch (this.operand) {
          case ">":
            BH = LH > AH;
            break;
          case "<":
            BH = LH < AH;
            break;
          case "<=":
            BH = LH <= AH;
            break;
          case ">=":
            BH = LH >= AH;
            break;
          case "==":
            BH = LH === AH;
            break;
          case "!=":
            BH = LH !== AH
        }
        return BH
      }
    }
    var GH = LH(41169),
      YH = LH(41164);
    const uH = /defined\s*?\((.+?)\)/g,
      QH = /defined\s*?\[(.+?)\]/g,
      WH = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      MH = /__decl__/,
      xH = /light\{X\}.(\w*)/g,
      vH = /\{X\}/g,
      PH = [],
      TH = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function UH(HH) {
      HH.processor && HH.processor.initializeShaders && HH.processor.initializeShaders(HH.processingContext)
    }

    function VH(HH, BH, LH, AH) {
      BH.processor?.preProcessShaderCode && (HH = BH.processor.preProcessShaderCode(HH, BH.isFragment)), lH(HH, BH, (HH => {
        BH.processCodeAfterIncludes && (HH = BH.processCodeAfterIncludes(BH.isFragment ? "fragment" : "vertex", HH, BH.defines));
        const rH = function(HH, BH, LH) {
          let AH = function(HH, BH) {
            if (BH.processor?.noPrecision) return HH;
            const LH = BH.shouldUseHighPrecisionShader; - 1 === HH.indexOf("precision highp float") ? HH = LH ? "precision highp float;\n" + HH : "precision mediump float;\n" + HH : LH || (HH = HH.replace("precision highp float", "precision mediump float"));
            return HH
          }(HH, BH);
          if (!BH.processor) return AH;
          if (0 === BH.processor.shaderLanguage && -1 !== AH.indexOf("#version 3") && (AH = AH.replace("#version 300 es", ""), !BH.processor.parseGLES3)) return AH;
          const rH = BH.defines,
            SH = fH(BH, LH);
          BH.processor.preProcessor && (AH = BH.processor.preProcessor(AH, rH, SH, BH.isFragment, BH.processingContext));
          const hH = {};
          AH = IH(AH, SH, BH, hH), BH.processor.postProcessor && (AH = BH.processor.postProcessor(AH, rH, BH.isFragment, BH.processingContext, LH ? {
            drawBuffersExtensionDisabled: !LH.getCaps().drawBuffersExtension
          } : {}, SH, hH));
          LH?._features.needShaderCodeInlining && (AH = LH.inlineShaderCode(AH));
          return AH
        }(HH, BH, AH);
        LH(rH, HH)
      }))
    }

    function OH(HH, BH, LH) {
      return LH.processor && LH.processor.finalizeShaders ? LH.processor.finalizeShaders(HH, BH, LH.processingContext) : {
        vertexCode: HH,
        fragmentCode: BH
      }
    }

    function bH(HH) {
      const BH = /defined\((.+)\)/.exec(HH);
      if (BH && BH.length) return new zH(BH[1].trim(), "!" === HH[0]);
      const LH = ["==", "!=", ">=", "<=", "<", ">"];
      let AH = "",
        rH = 0;
      for (AH of LH)
        if (rH = HH.indexOf(AH), rH > -1) break;
      if (-1 === rH) return new zH(HH);
      const SH = HH.substring(0, rH).trim(),
        hH = HH.substring(rH + AH.length).trim();
      return new XH(SH, AH, hH)
    }

    function kH(HH, BH) {
      const LH = new hH,
        AH = HH.substring(0, BH);
      let rH = HH.substring(BH);
      return rH = rH.substring(0, (rH.indexOf("//") + 1 || rH.length + 1) - 1).trim(), LH.testExpression = "#ifdef" === AH ? new zH(rH) : "#ifndef" === AH ? new zH(rH, !0) : function(HH) {
        HH = HH.replace(uH, "defined[$1]");
        const BH = tH.infixToPostfix(HH),
          LH = [];
        for (const rH of BH)
          if ("||" !== rH && "&&" !== rH) LH.push(rH);
          else if (LH.length >= 2) {
          let HH = LH[LH.length - 1],
            BH = LH[LH.length - 2];
          LH.length -= 2;
          const AH = "&&" == rH ? new EH : new CH;
          "string" === typeof HH && (HH = HH.replace(QH, "defined($1)")), "string" === typeof BH && (BH = BH.replace(QH, "defined($1)")), AH.leftOperand = "string" === typeof BH ? bH(BH) : BH, AH.rightOperand = "string" === typeof HH ? bH(HH) : HH, LH.push(AH)
        }
        let AH = LH[LH.length - 1];
        return "string" === typeof AH && (AH = AH.replace(QH, "defined($1)")), "string" === typeof AH ? bH(AH) : AH
      }(rH), LH
    }

    function mH(HH, BH, LH, rH) {
      let SH;
      for (; oH(HH, LH, rH);) {
        SH = HH.currentLine;
        const hH = SH.substring(0, 5).toLowerCase();
        if ("#else" === hH) {
          const LH = new AH;
          return BH.children.push(LH), void oH(HH, LH, rH)
        }
        if ("#elif" === hH) {
          const HH = kH(SH, 5);
          BH.children.push(HH), LH = HH
        }
      }
    }

    function oH(HH, BH, LH) {
      for (; HH.canRead;) {
        HH.lineIndex++;
        const rH = HH.currentLine;
        if (rH.indexOf("#") >= 0) {
          const AH = TH.exec(rH);
          if (AH && AH.length) {
            switch (AH[0]) {
              case "#ifdef": {
                const AH = new SH;
                BH.children.push(AH);
                const hH = kH(rH, 6);
                AH.children.push(hH), mH(HH, AH, hH, LH);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const AH = new SH;
                BH.children.push(AH);
                const hH = kH(rH, 7);
                AH.children.push(hH), mH(HH, AH, hH, LH);
                break
              }
              case "#if": {
                const AH = new SH,
                  hH = kH(rH, 3);
                BH.children.push(AH), AH.children.push(hH), mH(HH, AH, hH, LH);
                break
              }
            }
            continue
          }
        }
        const hH = new AH;
        if (hH.line = rH, BH.children.push(hH), "#" === rH[0] && "d" === rH[1]) {
          const HH = rH.replace(";", "").split(" ");
          hH.additionalDefineKey = HH[1], 3 === HH.length && (hH.additionalDefineValue = HH[2])
        }
      }
      return !1
    }

    function IH(HH, BH, LH, SH) {
      const hH = new AH,
        tH = new rH;
      return tH.lineIndex = -1, tH.lines = HH.split("\n"), oH(tH, hH, SH), hH.process(BH, LH, SH)
    }

    function fH(HH, BH) {
      const LH = HH.defines,
        AH = {};
      for (const rH of LH) {
        const HH = rH.replace("#define", "").replace(";", "").trim().split(" ");
        AH[HH[0]] = HH.length > 1 ? HH[1] : ""
      }
      return 0 === HH.processor?.shaderLanguage && (AH.GL_ES = "true"), AH.__VERSION__ = HH.version, AH[HH.platformName] = "true", (0, YH.f)(AH, BH?.isNDCHalfZRange, BH?.WrH, BH?.useExactSrgbConversions), AH
    }

    function lH(HH, BH, LH) {
      let AH;
      for (PH.length = 0; null !== (AH = WH.exec(HH));) PH.push(AH);
      let rH = [HH],
        SH = !1;
      for (const tH of PH) {
        let HH = tH[1];
        if (-1 !== HH.indexOf("__decl__") && (HH = HH.replace(MH, ""), BH.supportsUniformBuffers && (HH = HH.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), HH += "Declaration"), !BH.includesShadersStore[HH]) {
          const AH = BH.shadersRepository + "ShadersInclude/" + HH + ".fx";
          return void KH.loadFile(AH, (AH => {
            BH.includesShadersStore[HH] = AH, lH(rH.join(""), BH, LH)
          }))
        } {
          let LH = BH.includesShadersStore[HH];
          if (tH[2]) {
            const HH = tH[3].split(",");
            for (let BH = 0; BH < HH.length; BH += 2) {
              const AH = new RegExp(HH[BH], "g"),
                rH = HH[BH + 1];
              LH = LH.replace(AH, rH)
            }
          }
          if (tH[4]) {
            const HH = tH[5];
            if (-1 !== HH.indexOf("..")) {
              const AH = HH.split(".."),
                rH = parseInt(AH[0]);
              let SH = parseInt(AH[1]),
                hH = LH.slice(0);
              LH = "", isNaN(SH) && (SH = BH.indexParameters[AH[1]]);
              for (let HH = rH; HH < SH; HH++) BH.supportsUniformBuffers || (hH = hH.replace(xH, ((HH, BH) => BH + "{X}"))), LH += hH.replace(vH, HH.toString()) + "\n"
            } else BH.supportsUniformBuffers || (LH = LH.replace(xH, ((HH, BH) => BH + "{X}"))), LH = LH.replace(vH, HH)
          }
          const AH = [];
          for (const HH of rH) {
            const BH = HH.split(tH[0]);
            for (let HH = 0; HH < BH.length - 1; HH++) AH.push(BH[HH]), AH.push(LH);
            AH.push(BH[BH.length - 1])
          }
          rH = AH, SH = SH || LH.indexOf("#include<") >= 0 || LH.indexOf("#include <") >= 0
        }
      }
      PH.length = 0;
      const hH = rH.join("");
      SH ? lH(hH.toString(), BH, LH) : LH(hH)
    }
    const KH = {
      loadFile: (HH, BH, LH, AH, rH, SH) => {
        throw (0, GH.i)("FileTools")
      }
    }
  },
  41164: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH,
      c: () => SH,
      f: () => tH,
      g: () => hH,
      h: () => zH
    });
    var AH = LH(41169);
    const rH = {};

    function SH(HH, BH) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (BH ? BH + "\n" : "") + HH
    }

    function hH(HH, BH, LH, SH, hH, tH, zH) {
      const CH = zH || rH.loadFile;
      if (!CH) throw (0, AH.i)("FileTools");
      return CH(HH, BH, LH, SH, hH, tH)
    }

    function tH(HH, BH, LH, AH) {
      if (HH) return BH ? HH.IS_NDC_HALF_ZRANGE = "" : delete HH.IS_NDC_HALF_ZRANGE, LH ? HH.USE_REVERSE_DEPTHBUFFER = "" : delete HH.USE_REVERSE_DEPTHBUFFER, void(AH ? HH.USE_EXACT_SRGB_CONVERSIONS = "" : delete HH.USE_EXACT_SRGB_CONVERSIONS);
      {
        let HH = "";
        return BH && (HH += "#define IS_NDC_HALF_ZRANGE"), LH && (HH && (HH += "\n"), HH += "#define USE_REVERSE_DEPTHBUFFER"), AH && (HH && (HH += "\n"), HH += "#define USE_EXACT_SRGB_CONVERSIONS"), HH
      }
    }

    function zH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        AH = arguments.length > 3 ? arguments[3] : void 0;
      switch (HH) {
        case 3: {
          const HH = new Int8Array(BH);
          return AH && HH.set(new Int8Array(AH)), HH
        }
        case 0: {
          const HH = new Uint8Array(BH);
          return AH && HH.set(new Uint8Array(AH)), HH
        }
        case 4: {
          const HH = "number" !== typeof BH ? new Int16Array(BH) : new Int16Array(LH ? BH / 2 : BH);
          return AH && HH.set(new Int16Array(AH)), HH
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const HH = "number" !== typeof BH ? new Uint16Array(BH) : new Uint16Array(LH ? BH / 2 : BH);
          return AH && HH.set(new Uint16Array(AH)), HH
        }
        case 6: {
          const HH = "number" !== typeof BH ? new Int32Array(BH) : new Int32Array(LH ? BH / 4 : BH);
          return AH && HH.set(new Int32Array(AH)), HH
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const HH = "number" !== typeof BH ? new Uint32Array(BH) : new Uint32Array(LH ? BH / 4 : BH);
          return AH && HH.set(new Uint32Array(AH)), HH
        }
        case 1: {
          const HH = "number" !== typeof BH ? new Float32Array(BH) : new Float32Array(LH ? BH / 4 : BH);
          return AH && HH.set(new Float32Array(AH)), HH
        }
      }
      const rH = new Uint8Array(BH);
      return AH && rH.set(new Uint8Array(AH)), rH
    }
  },
  41169: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => CH,
      e: () => EH,
      f: () => zH,
      i: () => rH
    });
    const AH = {};

    function rH(HH) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !AH[HH]) return AH[HH] = !0, `${HH} needs to be imported before as it contains a side-effect required by your code.`
    }
    const SH = {};
    let hH = !1,
      tH = 0;

    function zH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const AH = function() {
        if ((LH || hH) && 0 === tH) {
          const LH = `${HH}.${BH}`;
          SH[LH] || (SH[LH] = !0, console.warn(`[Babylon.js] ${LH}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return AH.__isSideEffectStub = !0, AH
    }

    function CH(HH) {
      return !!HH && !HH.__isSideEffectStub
    }

    function EH(HH, BH) {
      return {
        get() {},
        set(HH) {
          Object.defineProperty(this, BH, {
            value: HH,
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
  41154: (HH, BH, LH) => {
    function AH() {
      return "undefined" !== typeof window
    }

    function rH() {
      return "undefined" !== typeof navigator
    }

    function SH() {
      return "undefined" !== typeof document
    }

    function hH(HH) {
      let BH = "",
        LH = HH.firstChild;
      for (; LH;) 3 === LH.nodeType && (BH += LH.textContent), LH = LH.nextSibling;
      return BH
    }
    LH.d(BH, {
      c: () => hH,
      d: () => SH,
      h: () => rH,
      k: () => AH
    })
  },
  41346: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH,
      g: () => rH,
      j: () => SH
    });
    class AH extends Error {}
    AH._setPrototypeOf = Object.setPrototypeOf || ((HH, BH) => (HH.__proto__ = BH, HH));
    const rH = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class SH extends AH {
      constructor(HH, BH, LH) {
        super(HH), this.errorCode = BH, this.innerError = LH, this.name = "RuntimeError", AH._setPrototypeOf(this, SH.prototype)
      }
    }
  },
  41336: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => fH,
      h: () => vH,
      i: () => kH,
      k: () => oH,
      l: () => OH,
      m: () => UH,
      n: () => VH,
      q: () => qH,
      r: () => bH,
      s: () => PH
    });
    var AH = LH(41339),
      rH = LH(41154),
      SH = LH(37997);
    class hH {}
    hH.FilesToLoad = {};
    var tH = LH(41346),
      zH = LH(41353),
      CH = LH(37989),
      EH = LH(41164),
      XH = LH(41173),
      GH = LH(39595),
      YH = LH(41179),
      uH = LH(41356);
    const QH = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class WH extends tH.j {
      constructor(HH, BH) {
        super(HH, tH.g.LoadFileError), this.name = "LoadFileError", tH.d._setPrototypeOf(this, WH.prototype), BH instanceof AH.d ? this.request = BH : this.file = BH
      }
    }
    class MH extends tH.j {
      constructor(HH, BH) {
        super(HH, tH.g.RequestFileError), this.request = BH, this.name = "RequestFileError", tH.d._setPrototypeOf(this, MH.prototype)
      }
    }
    class xH extends tH.j {
      constructor(HH, BH) {
        super(HH, tH.g.ReadFileError), this.file = BH, this.name = "ReadFileError", tH.d._setPrototypeOf(this, xH.prototype)
      }
    }
    const vH = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (LH, AH, rH) => 0 !== AH.status || rH >= HH || -1 !== LH.indexOf("file:") ? -1 : Math.pow(2, rH) * BH
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: HH => HH,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: HH => HH,
        CleanUrl: HH => HH = HH.replace(/#/gm, "%23")
      },
      PH = (HH, BH) => {
        if ((!HH || 0 !== HH.indexOf("data:")) && vH.CorsBehavior)
          if ("string" === typeof vH.CorsBehavior || vH.CorsBehavior instanceof String) BH.crossOrigin = vH.CorsBehavior;
          else {
            const LH = vH.CorsBehavior(HH);
            LH && (BH.crossOrigin = LH)
          }
      },
      TH = {
        getRequiredSize: null
      },
      UH = function(HH, BH, LH, rH) {
        let SH, tH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          EH = arguments.length > 5 ? arguments[5] : void 0,
          XH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : CH.d.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !XH?._features.forceBitmapOverHTMLImageElement) return LH("LoadImage is only supported in web or BabylonNative environments."), null;
        if (XH?._features.forceBitmapOverHTMLImageElement && "string" !== typeof HH && "undefined" !== typeof Blob) {
          let AH;
          if (HH instanceof Blob) AH = HH;
          else {
            const BH = HH instanceof ArrayBuffer ? HH : (0, uH.m)(HH);
            AH = new Blob([BH], {
              type: tH
            })
          }
          return XH.createImageBitmap(AH, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...EH
          }).then(BH).catch((BH => {
            LH && LH("Error while trying to load image: " + HH, BH)
          })), null
        }
        let GH = !1;
        if (HH instanceof ArrayBuffer || ArrayBuffer.isView(HH))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let BH;
            BH = HH instanceof ArrayBuffer ? HH : (0, uH.m)(HH), SH = URL.createObjectURL(new Blob([BH], {
              type: tH
            })), GH = !0
          } else SH = `data:${tH};base64,` + (0, zH.f)(HH);
        else HH instanceof Blob ? (SH = URL.createObjectURL(HH), GH = !0) : (SH = vH.CleanUrl(HH), SH = vH.PreprocessUrl(SH));
        const YH = BH => {
          if (LH) {
            const AH = SH || HH.toString();
            LH(`Error while trying to load image: ${0===AH.indexOf("http")||AH.length<=128?AH:AH.slice(0,128)+"..."}`, BH)
          }
        };
        if (XH?._features.forceBitmapOverHTMLImageElement) return OH(SH, (AH => {
          XH.createImageBitmap(new Blob([AH], {
            type: tH
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...EH
          }).then((HH => {
            BH(HH), GH && URL.revokeObjectURL(SH)
          })).catch((BH => {
            LH && LH("Error while trying to load image: " + HH, BH)
          }))
        }), void 0, rH || void 0, !0, ((HH, BH) => {
          YH(BH)
        })), null;
        const QH = new Image;
        if (TH.getRequiredSize) {
          const BH = TH.getRequiredSize(HH);
          BH.width && (QH.width = BH.width), BH.height && (QH.height = BH.height)
        }
        PH(SH, QH);
        const WH = [],
          MH = () => {
            for (const HH of WH) HH.target.removeEventListener(HH.name, HH.handler);
            WH.length = 0
          };
        WH.push({
          target: QH,
          name: "load",
          handler: () => {
            MH(), BH(QH), GH && QH.src && URL.revokeObjectURL(QH.src)
          }
        }), WH.push({
          target: QH,
          name: "error",
          handler: HH => {
            MH(), YH(HH), GH && QH.src && URL.revokeObjectURL(QH.src)
          }
        }), WH.push({
          target: document,
          name: "securitypolicyviolation",
          handler: HH => {
            if (HH.blockedURI !== QH.src || "XX" === HH.disposition) return;
            MH();
            const BH = new Error(`CSP violation of policy ${HH.effectiveDirective} ${HH.blockedURI}. Current policy is ${HH.originalPolicy}`);
            CH.d.UseFallbackTexture = !1, YH(BH), GH && QH.src && URL.revokeObjectURL(QH.src), QH.src = ""
          }
        }), (() => {
          for (const HH of WH) HH.target.addEventListener(HH.name, HH.handler)
        })();
        const xH = "blob:" === SH.substring(0, 5),
          UH = "data:" === SH.substring(0, 5),
          VH = () => {
            xH || UH || !AH.d.IsCustomRequestAvailable ? QH.src = SH : OH(SH, ((HH, BH, LH) => {
              const AH = new Blob([HH], {
                  type: !tH && LH ? LH : tH
                }),
                rH = URL.createObjectURL(AH);
              GH = !0, QH.src = rH
            }), void 0, rH || void 0, !0, ((HH, BH) => {
              YH(BH)
            }))
          },
          bH = () => {
            rH && rH.loadImage(SH, QH)
          };
        if (!xH && !UH && rH && rH.enableTexturesOffline) rH.open(bH, VH);
        else {
          if (-1 !== SH.indexOf("file:")) {
            const HH = decodeURIComponent(SH.substring(5).toLowerCase());
            if (hH.FilesToLoad[HH] && "undefined" !== typeof URL) {
              try {
                let BH;
                try {
                  BH = URL.createObjectURL(hH.FilesToLoad[HH])
                } catch (kH) {
                  BH = URL.createObjectURL(hH.FilesToLoad[HH])
                }
                QH.src = BH, GH = !0
              } catch (mH) {
                QH.src = ""
              }
              return QH
            }
          }
          VH()
        }
        return QH
      },
      VH = (HH, BH, LH, AH, rH) => {
        const hH = new FileReader,
          tH = {
            onCompleteObservable: new SH.d,
            abort: () => hH.abort()
          };
        return hH.onloadend = () => tH.onCompleteObservable.notifyObservers(tH), rH && (hH.onerror = () => {
          rH(new xH(`Unable to read ${HH.name}`, HH))
        }), hH.onload = HH => {
          BH(HH.target.result)
        }, LH && (hH.onprogress = LH), AH ? hH.readAsArrayBuffer(HH) : hH.readAsText(HH), tH
      },
      OH = (HH, BH, LH, AH, rH, zH, CH) => {
        if (HH.name) return VH(HH, BH, LH, rH, zH ? HH => {
          zH(void 0, HH)
        } : void 0);
        const EH = HH;
        if (-1 !== EH.indexOf("file:")) {
          let HH = decodeURIComponent(EH.substring(5).toLowerCase());
          0 === HH.indexOf("./") && (HH = HH.substring(2));
          const AH = hH.FilesToLoad[HH];
          if (AH) return VH(AH, BH, LH, rH, zH ? HH => zH(void 0, new WH(HH.message, HH.file)) : void 0)
        }
        const {
          match: XH,
          type: uH
        } = IH(EH);
        if (XH) {
          const HH = {
            onCompleteObservable: new SH.d,
            abort: () => () => {}
          };
          try {
            const HH = rH ? fH(EH) : lH(EH);
            BH(HH, void 0, uH)
          } catch (tH) {
            zH ? zH(void 0, tH) : GH.e.Error(tH.message || "Failed to parse the Data URL")
          }
          return YH.d.SetImmediate((() => {
            HH.onCompleteObservable.notifyObservers(HH)
          })), HH
        }
        return bH(EH, ((HH, LH) => {
          BH(HH, LH?.responseURL, LH?.getResponseHeader("content-type"))
        }), LH, AH, rH, zH ? HH => {
          zH(HH.request, new WH(HH.message, HH.request))
        } : void 0, CH)
      },
      bH = (HH, BH, LH, hH, tH, zH, EH) => {
        null !== hH && (hH ?? (hH = CH.d.LastCreatedScene?.offlineProvider)), HH = vH.CleanUrl(HH), HH = vH.PreprocessUrl(HH);
        const XH = vH.BaseUrl + HH;
        let YH = !1;
        const uH = {
            onCompleteObservable: new SH.d,
            abort: () => YH = !0
          },
          QH = () => {
            let HH, SH = new AH.d,
              hH = null;
            const CH = () => {
              SH && (LH && SH.removeEventListener("progress", LH), HH && SH.removeEventListener("readystatechange", HH), SH.removeEventListener("loadend", QH))
            };
            let QH = () => {
              CH(), uH.onCompleteObservable.notifyObservers(uH), uH.onCompleteObservable.clear(), LH = void 0, HH = null, QH = null, zH = void 0, EH = void 0, BH = void 0
            };
            uH.abort = () => {
              YH = !0, QH && QH(), SH && SH.readyState !== (XMLHttpRequest.DONE || 4) && SH.abort(), null !== hH && (clearTimeout(hH), hH = null), SH = null
            };
            const WH = HH => {
                const BH = HH.message || "Unknown error";
                zH && SH ? zH(new MH(BH, SH)) : GH.e.Error(BH)
              },
              xH = GH => {
                if (SH) {
                  if (SH.open("GET", XH), EH) try {
                    EH(SH)
                  } catch (uH) {
                    return void WH(uH)
                  }
                  tH && (SH.responseType = "arraybuffer"), LH && SH.addEventListener("progress", LH), QH && SH.addEventListener("loadend", QH), HH = () => {
                    if (!YH && SH && SH.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (HH && SH.removeEventListener("readystatechange", HH), SH.status >= 200 && SH.status < 300 || 0 === SH.status && (!(0, rH.k)() || mH())) {
                        const HH = tH ? SH.response : SH.responseText;
                        if (null !== HH) {
                          try {
                            BH && BH(HH, SH)
                          } catch (uH) {
                            WH(uH)
                          }
                          return
                        }
                      }
                      const LH = vH.DefaultRetryStrategy;
                      if (LH) {
                        const HH = LH(XH, SH, GH);
                        if (-1 !== HH) return CH(), SH = new AH.d, void(hH = setTimeout((() => xH(GH + 1)), HH))
                      }
                      const EH = new MH("Error status: " + SH.status + " " + SH.statusText + " - Unable to load " + XH, SH);
                      zH && zH(EH)
                    }
                  }, SH.addEventListener("readystatechange", HH), SH.send()
                }
              };
            xH(0)
          };
        if (hH && hH.enableSceneOffline && !HH.startsWith("blob:")) {
          const AH = HH => {
              HH && HH.status > 400 ? zH && zH(HH) : QH()
            },
            rH = () => {
              hH && hH.loadFile(vH.BaseUrl + HH, (HH => {
                !YH && BH && BH(HH), uH.onCompleteObservable.notifyObservers(uH)
              }), LH ? HH => {
                !YH && LH && LH(HH)
              } : void 0, AH, tH)
            };
          hH.open(rH, AH)
        } else QH();
        return uH
      },
      kH = HH => {
        const {
          match: BH,
          type: LH
        } = IH(HH);
        if (BH) return LH || void 0;
        const AH = HH.lastIndexOf(".");
        switch (HH.substring(AH + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "XN":
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
      mH = () => "undefined" !== typeof location && "file:" === location.protocol,
      oH = HH => QH.test(HH),
      IH = HH => {
        const BH = QH.exec(HH);
        if (null === BH || 0 === BH.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: BH[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function fH(HH) {
      return (0, zH.b)(HH.split(",")[1])
    }
    const lH = HH => (0, zH.d)(HH.split(",")[1]);
    let KH;
    const cH = (HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) => {
      KH = {
        DecodeBase64UrlToBinary: HH,
        DecodeBase64UrlToString: BH,
        DefaultRetryStrategy: LH.DefaultRetryStrategy,
        BaseUrl: LH.BaseUrl,
        CorsBehavior: LH.CorsBehavior,
        PreprocessUrl: LH.PreprocessUrl,
        IsBase64DataUrl: AH,
        IsFileURL: rH,
        LoadFile: SH,
        LoadImage: hH,
        ReadFile: tH,
        RequestFile: zH,
        SetCorsBehavior: CH
      }, Object.defineProperty(KH, "DefaultRetryStrategy", {
        get: function() {
          return LH.DefaultRetryStrategy
        },
        set: function(HH) {
          LH.DefaultRetryStrategy = HH
        }
      }), Object.defineProperty(KH, "BaseUrl", {
        get: function() {
          return LH.BaseUrl
        },
        set: function(HH) {
          LH.BaseUrl = HH
        }
      }), Object.defineProperty(KH, "PreprocessUrl", {
        get: function() {
          return LH.PreprocessUrl
        },
        set: function(HH) {
          LH.PreprocessUrl = HH
        }
      }), Object.defineProperty(KH, "CorsBehavior", {
        get: function() {
          return LH.CorsBehavior
        },
        set: function(HH) {
          LH.CorsBehavior = HH
        }
      })
    };
    let eH = !1;

    function qH() {
      eH || (eH = !0, cH(fH, lH, vH, oH, mH, OH, UH, VH, bH, PH), EH.b.loadFile = OH, EH.b.loadImage = UH, XH.n.loadFile = OH)
    }
  },
  41364: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH,
      e: () => SH,
      f: () => hH
    });
    let AH = null;

    function rH() {
      if (AH) return AH;
      const HH = new ArrayBuffer(4),
        BH = new Float32Array(HH),
        LH = new Uint32Array(HH),
        rH = new Uint32Array(512),
        SH = new Uint32Array(512);
      for (let AH = 0; AH < 256; ++AH) {
        const HH = AH - 127;
        HH < -24 ? (rH[AH] = 0, rH[256 | AH] = 32768, SH[AH] = 24, SH[256 | AH] = 24) : HH < -14 ? (rH[AH] = 1024 >> -HH - 14, rH[256 | AH] = 1024 >> -HH - 14 | 32768, SH[AH] = -HH - 1, SH[256 | AH] = -HH - 1) : HH <= 15 ? (rH[AH] = HH + 15 << 10, rH[256 | AH] = HH + 15 << 10 | 32768, SH[AH] = 13, SH[256 | AH] = 13) : HH < 128 ? (rH[AH] = 31744, rH[256 | AH] = 64512, SH[AH] = 24, SH[256 | AH] = 24) : (rH[AH] = 31744, rH[256 | AH] = 64512, SH[AH] = 13, SH[256 | AH] = 13)
      }
      const hH = new Uint32Array(2048),
        tH = new Uint32Array(64),
        zH = new Uint32Array(64);
      for (let AH = 1; AH < 1024; ++AH) {
        let HH = AH << 13,
          BH = 0;
        for (; 0 === (8388608 & HH);) HH <<= 1, BH -= 8388608;
        HH &= -8388609, BH += 947912704, hH[AH] = HH | BH
      }
      for (let AH = 1024; AH < 2048; ++AH) hH[AH] = 939524096 + (AH - 1024 << 13);
      for (let AH = 1; AH < 31; ++AH) tH[AH] = AH << 23;
      tH[31] = 1199570944, tH[32] = 2147483648;
      for (let AH = 33; AH < 63; ++AH) tH[AH] = 2147483648 + (AH - 32 << 23);
      tH[63] = 3347054592;
      for (let AH = 1; AH < 64; ++AH) 32 !== AH && (zH[AH] = 1024);
      return AH = {
        floatView: BH,
        uint32View: LH,
        baseTable: rH,
        shiftTable: SH,
        mantissaTable: hH,
        exponentTable: tH,
        offsetTable: zH
      }, AH
    }
    const SH = 65504;

    function hH(HH) {
      const BH = rH();
      BH.floatView[0] = HH;
      const LH = BH.uint32View[0],
        AH = LH >> 23 & 511;
      return BH.baseTable[AH] + ((8388607 & LH) >> BH.shiftTable[AH])
    }

    function tH(HH) {
      const BH = rH();
      return BH.uint32View[0] = BH.mantissaTable[BH.offsetTable[HH >> 10] + (1023 & HH)] + BH.exponentTable[HH >> 10], BH.floatView[0]
    }
  },
  41353: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH,
      d: () => rH,
      f: () => AH
    });
    const AH = HH => {
        const BH = ArrayBuffer.isView(HH) ? new Uint8Array(HH.buffer, HH.byteOffset, HH.byteLength) : new Uint8Array(HH);
        return "function" === typeof BH.toBase64 ? BH.toBase64() : function(HH) {
          const BH = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let LH, AH, rH, SH, hH, tH, zH, CH = "",
            EH = 0;
          for (; EH < HH.length;) LH = HH[EH++], AH = EH < HH.length ? HH[EH++] : Number.NaN, rH = EH < HH.length ? HH[EH++] : Number.NaN, SH = LH >> 2, hH = (3 & LH) << 4 | AH >> 4, tH = (15 & AH) << 2 | rH >> 6, zH = 63 & rH, isNaN(AH) ? tH = zH = 64 : isNaN(rH) && (zH = 64), CH += BH.charAt(SH) + BH.charAt(hH) + BH.charAt(tH) + BH.charAt(zH);
          return CH
        }(BH)
      },
      rH = HH => atob(HH),
      SH = HH => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(HH).buffer : function(HH) {
        const BH = rH(HH),
          LH = BH.length,
          AH = new Uint8Array(new ArrayBuffer(LH));
        for (let rH = 0; rH < LH; rH++) AH[rH] = BH.charCodeAt(rH);
        return AH.buffer
      }(HH)
  },
  41179: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH,
      f: () => hH
    });
    let AH = [];
    class rH {
      static SetImmediate(HH) {
        0 === AH.length && setTimeout((() => {
          const HH = AH;
          AH = [];
          for (const BH of HH) BH()
        }), 1), AH.push(HH)
      }
    }

    function SH(HH, BH, LH) {
      try {
        if (HH()) return BH(), !0
      } catch (AH) {
        return LH?.(AH), !0
      }
      return !1
    }
    const hH = function(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        hH = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && SH(HH, BH, LH)) return null;
      const tH = setInterval((() => {
        SH(HH, BH, LH) ? clearInterval(tH) : (rH -= AH, rH < 0 && (clearInterval(tH), LH?.(new Error("Operation timed out after maximum retries. " + (hH || "")), !0)))
      }), AH);
      return () => clearInterval(tH)
    }
  },
  41339: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH
    });
    class AH {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(AH.CustomRequestHeaders).length > 0 || AH.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(HH) {
        return HH = (HH = HH.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(HH) {
        return AH.SkipRequestModificationForBabylonCDN && (HH.includes("preview.babylonjs.com") || HH.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(HH) {
        const BH = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (AH._ShouldSkipRequestModifications(HH)) return {
          url: HH,
          headers: BH
        };
        for (const rH in AH.CustomRequestHeaders) {
          const HH = AH.CustomRequestHeaders[rH];
          HH && (BH[rH] = HH)
        }
        const LH = {
          setRequestHeader: (HH, LH) => {
            BH[HH] = LH
          }
        };
        for (const rH of AH.CustomRequestModifiers) {
          if (AH._ShouldSkipRequestModifications(HH)) break;
          const BH = rH(LH, HH);
          "string" === typeof BH && (HH = BH)
        }
        return {
          url: HH,
          headers: BH
        }
      }
      static async FetchAsync(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const LH = BH.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: rH,
            headers: SH
          } = AH._CollectCustomizations(AH._CleanUrl(HH), BH.headers ?? {});
          return await fetch(rH, {
            method: LH,
            headers: SH,
            body: BH.body ?? void 0
          })
        }
        return await new Promise(((rH, SH) => {
          const hH = new AH;
          hH.responseType = "arraybuffer", hH.addEventListener("readystatechange", (() => {
            if (4 === hH.readyState)
              if (hH.status >= 200 && hH.status < 300) {
                const HH = "undefined" !== typeof Headers ? new Headers : void 0,
                  BH = hH.getResponseHeader("Content-Type");
                BH && HH && HH.set("Content-Type", BH), "undefined" !== typeof Response ? rH(new Response(hH.response, {
                  status: hH.status,
                  statusText: hH.statusText,
                  headers: HH
                })) : rH({
                  ok: !0,
                  status: hH.status,
                  statusText: hH.statusText,
                  headers: {
                    get: HH => hH.getResponseHeader(HH)
                  },
                  arrayBuffer: async () => await Promise.resolve(hH.response)
                })
              } else SH(new Error(`HTTP ${hH.status} loading '${hH.requestURL}': ${hH.statusText}`))
          })), hH.open(LH, HH, BH.headers), hH.send(BH.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(HH) {
        this._xhr.onprogress = HH
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
      set responseType(HH) {
        this._xhr.responseType = HH
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(HH) {
        this._xhr.timeout = HH
      }
      addEventListener(HH, BH, LH) {
        this._xhr.addEventListener(HH, BH, LH)
      }
      removeEventListener(HH, BH, LH) {
        this._xhr.removeEventListener(HH, BH, LH)
      }
      abort() {
        this._xhr.abort()
      }
      send(HH) {
        this._xhr.send(HH)
      }
      open(HH, BH, LH) {
        const {
          url: rH,
          headers: SH
        } = AH._CollectCustomizations(BH, LH);
        this._requestURL = AH._CleanUrl(rH), this._xhr.open(HH, this._requestURL, !0);
        for (const AH in SH) this._xhr.setRequestHeader(AH, SH[AH])
      }
      setRequestHeader(HH, BH) {
        this._xhr.setRequestHeader(HH, BH)
      }
      getResponseHeader(HH) {
        return this._xhr.getResponseHeader(HH)
      }
    }
    AH.CustomRequestHeaders = {}, AH.CustomRequestModifiers = new Array, AH.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);