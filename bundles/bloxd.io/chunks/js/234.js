export const id = 234;
export const ids = [234];
export const modules = {
  38859: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => DJ,
      f: () => hJ,
      i: () => qJ,
      k: () => sJ,
      l: () => jJ,
      o: () => AJ,
      r: () => YJ
    });
    var FJ = ZJ(37660),
      UJ = ZJ(38862);

    function eJ(JJ, cJ, ZJ, FJ) {
      switch (cJ) {
        case 5120: {
          let cJ = JJ.getInt8(ZJ);
          return FJ && (cJ = Math.max(cJ / 127, -1)), cJ
        }
        case 5121: {
          let cJ = JJ.getUint8(ZJ);
          return FJ && (cJ /= 255), cJ
        }
        case 5122: {
          let cJ = JJ.getInt16(ZJ, !0);
          return FJ && (cJ = Math.max(cJ / 32767, -1)), cJ
        }
        case 5123: {
          let cJ = JJ.getUint16(ZJ, !0);
          return FJ && (cJ /= 65535), cJ
        }
        case 5131:
          return (0, UJ.d)(JJ.getUint16(ZJ, !0));
        case 5124:
          return JJ.getInt32(ZJ, !0);
        case 5125:
          return JJ.getUint32(ZJ, !0);
        case 5126:
          return JJ.getFloat32(ZJ, !0);
        default:
          throw new Error(`Invalid component type ${cJ}`)
      }
    }

    function XJ(JJ, cJ, ZJ, FJ, eJ) {
      switch (cJ) {
        case 5120:
          FJ && (eJ = Math.round(127 * eJ)), JJ.setInt8(ZJ, eJ);
          break;
        case 5121:
          FJ && (eJ = Math.round(255 * eJ)), JJ.setUint8(ZJ, eJ);
          break;
        case 5122:
          FJ && (eJ = Math.round(32767 * eJ)), JJ.setInt16(ZJ, eJ, !0);
          break;
        case 5123:
          FJ && (eJ = Math.round(65535 * eJ)), JJ.setUint16(ZJ, eJ, !0);
          break;
        case 5131:
          JJ.setUint16(ZJ, (0, UJ.j)(eJ), !0);
          break;
        case 5124:
          JJ.setInt32(ZJ, eJ, !0);
          break;
        case 5125:
          JJ.setUint32(ZJ, eJ, !0);
          break;
        case 5126:
          JJ.setFloat32(ZJ, eJ, !0);
          break;
        default:
          throw new Error(`Invalid component type ${cJ}`)
      }
    }

    function AJ(JJ) {
      switch (JJ) {
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
          throw new Error(`Invalid type '${JJ}'`)
      }
    }

    function qJ(JJ, cJ, ZJ, FJ, UJ, qJ, jJ, YJ) {
      const hJ = new Array(FJ),
        DJ = new Array(FJ);
      if (JJ instanceof Array) {
        let UJ = cJ / 4;
        const eJ = ZJ / 4;
        for (let cJ = 0; cJ < qJ; cJ += FJ) {
          for (let cJ = 0; cJ < FJ; cJ++) hJ[cJ] = DJ[cJ] = JJ[UJ + cJ];
          YJ(DJ, cJ);
          for (let cJ = 0; cJ < FJ; cJ++) hJ[cJ] !== DJ[cJ] && (JJ[UJ + cJ] = DJ[cJ]);
          UJ += eJ
        }
      } else {
        const sJ = ArrayBuffer.isView(JJ) ? new DataView(JJ.buffer, JJ.byteOffset, JJ.byteLength) : new DataView(JJ),
          nJ = AJ(UJ);
        for (let JJ = 0; JJ < qJ; JJ += FJ) {
          for (let JJ = 0, ZJ = cJ; JJ < FJ; JJ++, ZJ += nJ) hJ[JJ] = DJ[JJ] = eJ(sJ, UJ, ZJ, jJ);
          YJ(DJ, JJ);
          for (let JJ = 0, ZJ = cJ; JJ < FJ; JJ++, ZJ += nJ) hJ[JJ] !== DJ[JJ] && XJ(sJ, UJ, ZJ, jJ, DJ[JJ]);
          cJ += ZJ
        }
      }
    }

    function jJ(JJ, cJ, ZJ, UJ, eJ, XJ, jJ, YJ) {
      const hJ = cJ * AJ(ZJ),
        DJ = jJ * cJ;
      if (5126 !== ZJ || eJ !== hJ) {
        const FJ = new Float32Array(DJ);
        return qJ(JJ, UJ, eJ, cJ, ZJ, DJ, XJ, ((JJ, ZJ) => {
          for (let UJ = 0; UJ < cJ; UJ++) FJ[ZJ + UJ] = JJ[UJ]
        })), FJ
      }
      if (!(JJ instanceof Array || JJ instanceof Float32Array) || 0 !== UJ || JJ.length !== DJ) {
        if (JJ instanceof Array) {
          const cJ = UJ / 4;
          return JJ.slice(cJ, cJ + DJ)
        }
        if (ArrayBuffer.isView(JJ)) {
          const cJ = JJ.byteOffset + UJ;
          return 0 !== (3 & cJ) && (FJ.c.Warn("Float array must be aligned to 4-bytes border"), YJ = !0), YJ ? new Float32Array(JJ.buffer.slice(cJ, cJ + DJ * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(JJ.buffer, cJ, DJ)
        }
        return new Float32Array(JJ, UJ, DJ)
      }
      return YJ ? JJ.slice() : JJ
    }

    function YJ(JJ, cJ, ZJ, UJ, eJ, XJ, jJ) {
      const YJ = AJ(ZJ),
        hJ = function(JJ) {
          switch (JJ) {
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
              throw new Error(`Invalid component type '${JJ}'`)
          }
        }(ZJ),
        DJ = XJ * cJ;
      if (Array.isArray(JJ)) {
        if (0 !== (3 & UJ) || 0 !== (3 & eJ)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const FJ = UJ / 4,
          AJ = eJ / 4;
        if (FJ + (XJ - 1) * AJ + cJ > JJ.length) throw new Error("Last accessed index is out of bounds.");
        if (AJ < cJ) throw new Error("Data stride cannot be smaller than the component size.");
        if (AJ !== cJ) {
          const FJ = new hJ(DJ);
          return qJ(JJ, UJ, eJ, cJ, ZJ, DJ, !1, ((JJ, ZJ) => {
            for (let UJ = 0; UJ < cJ; UJ++) FJ[ZJ + UJ] = JJ[UJ]
          })), FJ
        }
        return new hJ(JJ.slice(FJ, FJ + DJ))
      }
      let sJ, nJ = UJ;
      ArrayBuffer.isView(JJ) ? (sJ = JJ.buffer, nJ += JJ.byteOffset) : sJ = JJ;
      if (nJ + (XJ - 1) * eJ + cJ * YJ > sJ.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const GJ = cJ * YJ;
      if (eJ < GJ) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (eJ !== GJ) {
        const JJ = new hJ(DJ),
          ZJ = new Uint8Array(sJ, nJ),
          FJ = new Uint8Array(JJ.buffer),
          UJ = cJ * YJ;
        for (let cJ = 0, AJ = 0, qJ = 0; cJ < XJ; cJ++, AJ += eJ, qJ += UJ) FJ.set(ZJ.subarray(AJ, AJ + UJ), qJ);
        return JJ
      }
      return 1 !== YJ && 0 !== (nJ & YJ - 1) && (FJ.c.Warn("Array must be aligned to border of element size. Data will be copied."), jJ = !0), jJ ? new hJ(sJ.slice(nJ, nJ + DJ * YJ)) : new hJ(sJ, nJ, DJ)
    }

    function hJ(JJ, cJ, ZJ, UJ, eJ, XJ, jJ, YJ) {
      const hJ = cJ * AJ(ZJ),
        DJ = jJ * cJ;
      if (YJ.length !== DJ) throw new Error("Output length is not valid");
      if (5126 === ZJ && eJ === hJ)
        if (JJ instanceof Array) {
          const cJ = UJ / 4;
          YJ.set(JJ, cJ)
        } else if (ArrayBuffer.isView(JJ)) {
        const cJ = JJ.byteOffset + UJ;
        if (0 !== (3 & cJ)) return FJ.c.Warn("Float array must be aligned to 4-bytes border"), void YJ.set(new Float32Array(JJ.buffer.slice(cJ, cJ + DJ * Float32Array.BYTES_PER_ELEMENT)));
        const ZJ = new Float32Array(JJ.buffer, cJ, DJ);
        YJ.set(ZJ)
      } else {
        const cJ = new Float32Array(JJ, UJ, DJ);
        YJ.set(cJ)
      } else qJ(JJ, UJ, eJ, cJ, ZJ, DJ, XJ, ((JJ, ZJ) => {
        for (let FJ = 0; FJ < cJ; FJ++) YJ[ZJ + FJ] = JJ[FJ]
      }))
    }

    function DJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(JJ)) {
        for (let UJ = 0; UJ < cJ; UJ++)
          if (JJ[ZJ + UJ] - FJ > 65535) return !0;
        return !1
      }
      return 4 === JJ.BYTES_PER_ELEMENT
    }

    function sJ(JJ) {
      const cJ = JJ.buffer;
      if (cJ instanceof ArrayBuffer) return JJ;
      const ZJ = new ArrayBuffer(JJ.byteLength);
      return new Uint8Array(ZJ).set(new Uint8Array(cJ, JJ.byteOffset, JJ.byteLength)), ZJ
    }
  },
  38683: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => KJ,
      f: () => EJ,
      h: () => VJ,
      g: () => WJ,
      l: () => gJ
    });
    class FJ {
      constructor() {
        this.children = []
      }
      isValid(JJ) {
        return !0
      }
      process(JJ, cJ, ZJ) {
        let FJ = "";
        if (this.line) {
          let ZJ = this.line;
          const UJ = cJ.processor;
          if (UJ) {
            UJ.lineProcessor && (ZJ = UJ.lineProcessor(ZJ, cJ.isFragment, cJ.processingContext));
            const FJ = cJ.processor?.attributeKeywordName ?? "attribute",
              eJ = cJ.isFragment && cJ.processor?.varyingFragmentKeywordName ? cJ.processor?.varyingFragmentKeywordName : !cJ.isFragment && cJ.processor?.varyingVertexKeywordName ? cJ.processor?.varyingVertexKeywordName : "varying";
            if (!cJ.isFragment && UJ.attributeProcessor && this.line.startsWith(FJ)) ZJ = UJ.attributeProcessor(this.line, JJ, cJ.processingContext);
            else if (UJ.varyingProcessor && (UJ.varyingCheck?.(this.line, cJ.isFragment) || !UJ.varyingCheck && this.line.startsWith(eJ))) ZJ = UJ.varyingProcessor(this.line, cJ.isFragment, JJ, cJ.processingContext);
            else if (UJ.uniformProcessor && UJ.uniformRegexp && UJ.uniformRegexp.test(this.line)) cJ.lookForClosingBracketForUniformBuffer || (ZJ = UJ.uniformProcessor(this.line, cJ.isFragment, JJ, cJ.processingContext));
            else if (UJ.uniformBufferProcessor && UJ.uniformBufferRegexp && UJ.uniformBufferRegexp.test(this.line)) cJ.lookForClosingBracketForUniformBuffer || (ZJ = UJ.uniformBufferProcessor(this.line, cJ.isFragment, cJ.processingContext), cJ.lookForClosingBracketForUniformBuffer = !0);
            else if (UJ.textureProcessor && UJ.textureRegexp && UJ.textureRegexp.test(this.line)) ZJ = UJ.textureProcessor(this.line, cJ.isFragment, JJ, cJ.processingContext);
            else if ((UJ.uniformProcessor || UJ.uniformBufferProcessor) && this.line.startsWith("uniform") && !cJ.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? UJ.uniformProcessor && (ZJ = UJ.uniformProcessor(this.line, cJ.isFragment, JJ, cJ.processingContext)) : UJ.uniformBufferProcessor && (ZJ = UJ.uniformBufferProcessor(this.line, cJ.isFragment, cJ.processingContext), cJ.lookForClosingBracketForUniformBuffer = !0)
            }
            cJ.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (cJ.lookForClosingBracketForUniformBuffer = !1, UJ.endOfUniformBufferProcessor && (ZJ = UJ.endOfUniformBufferProcessor(this.line, cJ.isFragment, cJ.processingContext)))
          }
          FJ += ZJ + "\n"
        }
        for (const UJ of this.children) FJ += UJ.process(JJ, cJ, ZJ);
        return this.additionalDefineKey && (JJ[this.additionalDefineKey] = this.additionalDefineValue || "true", ZJ[this.additionalDefineKey] = JJ[this.additionalDefineKey]), FJ
      }
    }
    class UJ {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(JJ) {
        this._lines.length = 0;
        for (const cJ of JJ) {
          if (!cJ || "\r" === cJ) continue;
          if ("#" === cJ[0]) {
            this._lines.push(cJ);
            continue
          }
          const JJ = cJ.trim();
          if (!JJ) continue;
          if (JJ.startsWith("//")) {
            this._lines.push(cJ);
            continue
          }
          const ZJ = JJ.indexOf(";");
          if (-1 === ZJ) this._lines.push(JJ);
          else if (ZJ === JJ.length - 1) JJ.length > 1 && this._lines.push(JJ);
          else {
            const JJ = cJ.split(";");
            for (let cJ = 0; cJ < JJ.length; cJ++) {
              let ZJ = JJ[cJ];
              ZJ && (ZJ = ZJ.trim(), ZJ && this._lines.push(ZJ + (cJ !== JJ.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class eJ extends FJ {
      process(JJ, cJ, ZJ) {
        for (let FJ = 0; FJ < this.children.length; FJ++) {
          const UJ = this.children[FJ];
          if (UJ.isValid(JJ)) return UJ.process(JJ, cJ, ZJ)
        }
        return ""
      }
    }
    class XJ extends FJ {
      isValid(JJ) {
        return this.testExpression.isTrue(JJ)
      }
    }
    class AJ {
      isTrue(JJ) {
        return !0
      }
      static postfixToInfix(JJ) {
        const cJ = [];
        for (const ZJ of JJ)
          if (void 0 === AJ._OperatorPriority[ZJ]) cJ.push(ZJ);
          else {
            const JJ = cJ[cJ.length - 1],
              FJ = cJ[cJ.length - 2];
            cJ.length -= 2, cJ.push(`(${FJ}${ZJ}${JJ})`)
          } return cJ[cJ.length - 1]
      }
      static infixToPostfix(JJ) {
        const cJ = AJ._InfixToPostfixCache.get(JJ);
        if (cJ) return cJ.accessTime = Date.now(), cJ.result;
        if (!JJ.includes("&&") && !JJ.includes("||") && !JJ.includes(")") && !JJ.includes("(")) return [JJ];
        const ZJ = [];
        let FJ = -1;
        const UJ = () => {
            YJ = YJ.trim(), "" !== YJ && (ZJ.push(YJ), YJ = "")
          },
          eJ = JJ => {
            FJ < AJ._Stack.length - 1 && (AJ._Stack[++FJ] = JJ)
          },
          XJ = () => AJ._Stack[FJ],
          qJ = () => -1 === FJ ? "!!INVALID EXPRESSION!!" : AJ._Stack[FJ--];
        let jJ = 0,
          YJ = "";
        for (; jJ < JJ.length;) {
          const cJ = JJ.charAt(jJ),
            hJ = jJ < JJ.length - 1 ? JJ.substring(jJ, 2 + jJ) : "";
          if ("(" === cJ) YJ = "", eJ(cJ);
          else if (")" === cJ) {
            for (UJ(); - 1 !== FJ && "(" !== XJ();) ZJ.push(qJ());
            qJ()
          } else if (AJ._OperatorPriority[hJ] > 1) {
            for (UJ(); - 1 !== FJ && AJ._OperatorPriority[XJ()] >= AJ._OperatorPriority[hJ];) ZJ.push(qJ());
            eJ(hJ), jJ++
          } else YJ += cJ;
          jJ++
        }
        for (UJ(); - 1 !== FJ;) "(" === XJ() ? qJ() : ZJ.push(qJ());
        return AJ._InfixToPostfixCache.size >= AJ.InfixToPostfixCacheLimitSize && AJ.ClearCache(), AJ._InfixToPostfixCache.set(JJ, {
          result: ZJ,
          accessTime: Date.now()
        }), ZJ
      }
      static ClearCache() {
        const JJ = Array.from(AJ._InfixToPostfixCache.entries()).sort(((JJ, cJ) => JJ[1].accessTime - cJ[1].accessTime));
        for (let cJ = 0; cJ < AJ.InfixToPostfixCacheCleanupSize; cJ++) AJ._InfixToPostfixCache.delete(JJ[cJ][0])
      }
    }
    AJ.InfixToPostfixCacheLimitSize = 5e4, AJ.InfixToPostfixCacheCleanupSize = 25e3, AJ._InfixToPostfixCache = new Map, AJ._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, AJ._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class qJ extends AJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = JJ, this.not = cJ
      }
      isTrue(JJ) {
        let cJ = void 0 !== JJ[this.define];
        return this.not && (cJ = !cJ), cJ
      }
    }
    class jJ extends AJ {
      isTrue(JJ) {
        return this.leftOperand.isTrue(JJ) || this.rightOperand.isTrue(JJ)
      }
    }
    class YJ extends AJ {
      isTrue(JJ) {
        return this.leftOperand.isTrue(JJ) && this.rightOperand.isTrue(JJ)
      }
    }
    class hJ extends AJ {
      constructor(JJ, cJ, ZJ) {
        super(), this.define = JJ, this.operand = cJ, this.testValue = ZJ
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(JJ) {
        let cJ = !1;
        const ZJ = parseInt(void 0 != JJ[this.define] ? JJ[this.define] : this.define),
          FJ = parseInt(void 0 != JJ[this.testValue] ? JJ[this.testValue] : this.testValue);
        if (isNaN(ZJ) || isNaN(FJ)) return !1;
        switch (this.operand) {
          case ">":
            cJ = ZJ > FJ;
            break;
          case "<":
            cJ = ZJ < FJ;
            break;
          case "<=":
            cJ = ZJ <= FJ;
            break;
          case ">=":
            cJ = ZJ >= FJ;
            break;
          case "==":
            cJ = ZJ === FJ;
            break;
          case "!=":
            cJ = ZJ !== FJ
        }
        return cJ
      }
    }
    var DJ = ZJ(38677),
      sJ = ZJ(38671);
    const nJ = /defined\s*?\((.+?)\)/g,
      GJ = /defined\s*?\[(.+?)\]/g,
      fJ = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      xJ = /__decl__/,
      rJ = /light\{X\}.(\w*)/g,
      vJ = /\{X\}/g,
      mJ = [],
      QJ = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function EJ(JJ) {
      JJ.processor && JJ.processor.initializeShaders && JJ.processor.initializeShaders(JJ.processingContext)
    }

    function VJ(JJ, cJ, ZJ, FJ) {
      cJ.processor?.preProcessShaderCode && (JJ = cJ.processor.preProcessShaderCode(JJ, cJ.isFragment)), WJ(JJ, cJ, (JJ => {
        cJ.processCodeAfterIncludes && (JJ = cJ.processCodeAfterIncludes(cJ.isFragment ? "fragment" : "vertex", JJ, cJ.defines));
        const UJ = function(JJ, cJ, ZJ) {
          let FJ = function(JJ, cJ) {
            if (cJ.processor?.noPrecision) return JJ;
            const ZJ = cJ.shouldUseHighPrecisionShader; - 1 === JJ.indexOf("precision highp float") ? JJ = ZJ ? "precision highp float;\n" + JJ : "precision mediump float;\n" + JJ : ZJ || (JJ = JJ.replace("precision highp float", "precision mediump float"));
            return JJ
          }(JJ, cJ);
          if (!cJ.processor) return FJ;
          if (0 === cJ.processor.shaderLanguage && -1 !== FJ.indexOf("#version 3") && (FJ = FJ.replace("#version 300 es", ""), !cJ.processor.parseGLES3)) return FJ;
          const UJ = cJ.defines,
            eJ = wJ(cJ, ZJ);
          cJ.processor.preProcessor && (FJ = cJ.processor.preProcessor(FJ, UJ, eJ, cJ.isFragment, cJ.processingContext));
          const XJ = {};
          FJ = bJ(FJ, eJ, cJ, XJ), cJ.processor.postProcessor && (FJ = cJ.processor.postProcessor(FJ, UJ, cJ.isFragment, cJ.processingContext, ZJ ? {
            drawBuffersExtensionDisabled: !ZJ.getCaps().drawBuffersExtension
          } : {}, eJ, XJ));
          ZJ?._features.needShaderCodeInlining && (FJ = ZJ.inlineShaderCode(FJ));
          return FJ
        }(JJ, cJ, FJ);
        ZJ(UJ, JJ)
      }))
    }

    function KJ(JJ, cJ, ZJ) {
      return ZJ.processor && ZJ.processor.finalizeShaders ? ZJ.processor.finalizeShaders(JJ, cJ, ZJ.processingContext) : {
        vertexCode: JJ,
        fragmentCode: cJ
      }
    }

    function yJ(JJ) {
      const cJ = /defined\((.+)\)/.exec(JJ);
      if (cJ && cJ.length) return new qJ(cJ[1].trim(), "!" === JJ[0]);
      const ZJ = ["==", "!=", ">=", "<=", "<", ">"];
      let FJ = "",
        UJ = 0;
      for (FJ of ZJ)
        if (UJ = JJ.indexOf(FJ), UJ > -1) break;
      if (-1 === UJ) return new qJ(JJ);
      const eJ = JJ.substring(0, UJ).trim(),
        XJ = JJ.substring(UJ + FJ.length).trim();
      return new hJ(eJ, FJ, XJ)
    }

    function SJ(JJ, cJ) {
      const ZJ = new XJ,
        FJ = JJ.substring(0, cJ);
      let UJ = JJ.substring(cJ);
      return UJ = UJ.substring(0, (UJ.indexOf("//") + 1 || UJ.length + 1) - 1).trim(), ZJ.testExpression = "#ifdef" === FJ ? new qJ(UJ) : "#ifndef" === FJ ? new qJ(UJ, !0) : function(JJ) {
        JJ = JJ.replace(nJ, "defined[$1]");
        const cJ = AJ.infixToPostfix(JJ),
          ZJ = [];
        for (const UJ of cJ)
          if ("||" !== UJ && "&&" !== UJ) ZJ.push(UJ);
          else if (ZJ.length >= 2) {
          let JJ = ZJ[ZJ.length - 1],
            cJ = ZJ[ZJ.length - 2];
          ZJ.length -= 2;
          const FJ = "&&" == UJ ? new YJ : new jJ;
          "string" === typeof JJ && (JJ = JJ.replace(GJ, "defined($1)")), "string" === typeof cJ && (cJ = cJ.replace(GJ, "defined($1)")), FJ.leftOperand = "string" === typeof cJ ? yJ(cJ) : cJ, FJ.rightOperand = "string" === typeof JJ ? yJ(JJ) : JJ, ZJ.push(FJ)
        }
        let FJ = ZJ[ZJ.length - 1];
        return "string" === typeof FJ && (FJ = FJ.replace(GJ, "defined($1)")), "string" === typeof FJ ? yJ(FJ) : FJ
      }(UJ), ZJ
    }

    function IJ(JJ, cJ, ZJ, UJ) {
      let eJ;
      for (; MJ(JJ, ZJ, UJ);) {
        eJ = JJ.currentLine;
        const XJ = eJ.substring(0, 5).toLowerCase();
        if ("#else" === XJ) {
          const ZJ = new FJ;
          return cJ.children.push(ZJ), void MJ(JJ, ZJ, UJ)
        }
        if ("#elif" === XJ) {
          const JJ = SJ(eJ, 5);
          cJ.children.push(JJ), ZJ = JJ
        }
      }
    }

    function MJ(JJ, cJ, ZJ) {
      for (; JJ.canRead;) {
        JJ.lineIndex++;
        const UJ = JJ.currentLine;
        if (UJ.indexOf("#") >= 0) {
          const FJ = QJ.exec(UJ);
          if (FJ && FJ.length) {
            switch (FJ[0]) {
              case "#ifdef": {
                const FJ = new eJ;
                cJ.children.push(FJ);
                const XJ = SJ(UJ, 6);
                FJ.children.push(XJ), IJ(JJ, FJ, XJ, ZJ);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const FJ = new eJ;
                cJ.children.push(FJ);
                const XJ = SJ(UJ, 7);
                FJ.children.push(XJ), IJ(JJ, FJ, XJ, ZJ);
                break
              }
              case "#if": {
                const FJ = new eJ,
                  XJ = SJ(UJ, 3);
                cJ.children.push(FJ), FJ.children.push(XJ), IJ(JJ, FJ, XJ, ZJ);
                break
              }
            }
            continue
          }
        }
        const XJ = new FJ;
        if (XJ.line = UJ, cJ.children.push(XJ), "#" === UJ[0] && "d" === UJ[1]) {
          const JJ = UJ.replace(";", "").split(" ");
          XJ.additionalDefineKey = JJ[1], 3 === JJ.length && (XJ.additionalDefineValue = JJ[2])
        }
      }
      return !1
    }

    function bJ(JJ, cJ, ZJ, eJ) {
      const XJ = new FJ,
        AJ = new UJ;
      return AJ.lineIndex = -1, AJ.lines = JJ.split("\n"), MJ(AJ, XJ, eJ), XJ.process(cJ, ZJ, eJ)
    }

    function wJ(JJ, cJ) {
      const ZJ = JJ.defines,
        FJ = {};
      for (const UJ of ZJ) {
        const JJ = UJ.replace("#define", "").replace(";", "").trim().split(" ");
        FJ[JJ[0]] = JJ.length > 1 ? JJ[1] : ""
      }
      return 0 === JJ.processor?.shaderLanguage && (FJ.GL_ES = "true"), FJ.__VERSION__ = JJ.version, FJ[JJ.platformName] = "true", (0, sJ.k)(FJ, cJ?.isNDCHalfZRange, cJ?.LZJ, cJ?.useExactSrgbConversions), FJ
    }

    function WJ(JJ, cJ, ZJ) {
      let FJ;
      for (mJ.length = 0; null !== (FJ = fJ.exec(JJ));) mJ.push(FJ);
      let UJ = [JJ],
        eJ = !1;
      for (const AJ of mJ) {
        let JJ = AJ[1];
        if (-1 !== JJ.indexOf("__decl__") && (JJ = JJ.replace(xJ, ""), cJ.supportsUniformBuffers && (JJ = JJ.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), JJ += "Declaration"), !cJ.includesShadersStore[JJ]) {
          const FJ = cJ.shadersRepository + "ShadersInclude/" + JJ + ".fx";
          return void gJ.loadFile(FJ, (FJ => {
            cJ.includesShadersStore[JJ] = FJ, WJ(UJ.join(""), cJ, ZJ)
          }))
        } {
          let ZJ = cJ.includesShadersStore[JJ];
          if (AJ[2]) {
            const JJ = AJ[3].split(",");
            for (let cJ = 0; cJ < JJ.length; cJ += 2) {
              const FJ = new RegExp(JJ[cJ], "g"),
                UJ = JJ[cJ + 1];
              ZJ = ZJ.replace(FJ, UJ)
            }
          }
          if (AJ[4]) {
            const JJ = AJ[5];
            if (-1 !== JJ.indexOf("..")) {
              const FJ = JJ.split(".."),
                UJ = parseInt(FJ[0]);
              let eJ = parseInt(FJ[1]),
                XJ = ZJ.slice(0);
              ZJ = "", isNaN(eJ) && (eJ = cJ.indexParameters[FJ[1]]);
              for (let JJ = UJ; JJ < eJ; JJ++) cJ.supportsUniformBuffers || (XJ = XJ.replace(rJ, ((JJ, cJ) => cJ + "{X}"))), ZJ += XJ.replace(vJ, JJ.toString()) + "\n"
            } else cJ.supportsUniformBuffers || (ZJ = ZJ.replace(rJ, ((JJ, cJ) => cJ + "{X}"))), ZJ = ZJ.replace(vJ, JJ)
          }
          const FJ = [];
          for (const JJ of UJ) {
            const cJ = JJ.split(AJ[0]);
            for (let JJ = 0; JJ < cJ.length - 1; JJ++) FJ.push(cJ[JJ]), FJ.push(ZJ);
            FJ.push(cJ[cJ.length - 1])
          }
          UJ = FJ, eJ = eJ || ZJ.indexOf("#include<") >= 0 || ZJ.indexOf("#include <") >= 0
        }
      }
      mJ.length = 0;
      const XJ = UJ.join("");
      eJ ? WJ(XJ.toString(), cJ, ZJ) : ZJ(XJ)
    }
    const gJ = {
      loadFile: (JJ, cJ, ZJ, FJ, UJ, eJ) => {
        throw (0, DJ.m)("FileTools")
      }
    }
  },
  38671: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      h: () => eJ,
      k: () => AJ,
      o: () => XJ,
      q: () => qJ
    });
    var FJ = ZJ(38677);
    const UJ = {};

    function eJ(JJ, cJ) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (cJ ? cJ + "\n" : "") + JJ
    }

    function XJ(JJ, cJ, ZJ, eJ, XJ, AJ, qJ) {
      const jJ = qJ || UJ.loadFile;
      if (!jJ) throw (0, FJ.m)("FileTools");
      return jJ(JJ, cJ, ZJ, eJ, XJ, AJ)
    }

    function AJ(JJ, cJ, ZJ, FJ) {
      if (JJ) return cJ ? JJ.IS_NDC_HALF_ZRANGE = "" : delete JJ.IS_NDC_HALF_ZRANGE, ZJ ? JJ.USE_REVERSE_DEPTHBUFFER = "" : delete JJ.USE_REVERSE_DEPTHBUFFER, void(FJ ? JJ.USE_EXACT_SRGB_CONVERSIONS = "" : delete JJ.USE_EXACT_SRGB_CONVERSIONS);
      {
        let JJ = "";
        return cJ && (JJ += "#define IS_NDC_HALF_ZRANGE"), ZJ && (JJ && (JJ += "\n"), JJ += "#define USE_REVERSE_DEPTHBUFFER"), FJ && (JJ && (JJ += "\n"), JJ += "#define USE_EXACT_SRGB_CONVERSIONS"), JJ
      }
    }

    function qJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        FJ = arguments.length > 3 ? arguments[3] : void 0;
      switch (JJ) {
        case 3: {
          const JJ = new Int8Array(cJ);
          return FJ && JJ.set(new Int8Array(FJ)), JJ
        }
        case 0: {
          const JJ = new Uint8Array(cJ);
          return FJ && JJ.set(new Uint8Array(FJ)), JJ
        }
        case 4: {
          const JJ = "number" !== typeof cJ ? new Int16Array(cJ) : new Int16Array(ZJ ? cJ / 2 : cJ);
          return FJ && JJ.set(new Int16Array(FJ)), JJ
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const JJ = "number" !== typeof cJ ? new Uint16Array(cJ) : new Uint16Array(ZJ ? cJ / 2 : cJ);
          return FJ && JJ.set(new Uint16Array(FJ)), JJ
        }
        case 6: {
          const JJ = "number" !== typeof cJ ? new Int32Array(cJ) : new Int32Array(ZJ ? cJ / 4 : cJ);
          return FJ && JJ.set(new Int32Array(FJ)), JJ
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const JJ = "number" !== typeof cJ ? new Uint32Array(cJ) : new Uint32Array(ZJ ? cJ / 4 : cJ);
          return FJ && JJ.set(new Uint32Array(FJ)), JJ
        }
        case 1: {
          const JJ = "number" !== typeof cJ ? new Float32Array(cJ) : new Float32Array(ZJ ? cJ / 4 : cJ);
          return FJ && JJ.set(new Float32Array(FJ)), JJ
        }
      }
      const UJ = new Uint8Array(cJ);
      return FJ && UJ.set(new Uint8Array(FJ)), UJ
    }
  },
  38677: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => jJ,
      h: () => YJ,
      l: () => qJ,
      m: () => UJ
    });
    const FJ = {};

    function UJ(JJ) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !FJ[JJ]) return FJ[JJ] = !0, `${JJ} needs to be imported before as it contains a side-effect required by your code.`
    }
    const eJ = {};
    let XJ = !1,
      AJ = 0;

    function qJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const FJ = function() {
        if ((ZJ || XJ) && 0 === AJ) {
          const ZJ = `${JJ}.${cJ}`;
          eJ[ZJ] || (eJ[ZJ] = !0, console.warn(`[Babylon.js] ${ZJ}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return FJ.__isSideEffectStub = !0, FJ
    }

    function jJ(JJ) {
      return !!JJ && !JJ.__isSideEffectStub
    }

    function YJ(JJ, cJ) {
      return {
        get() {},
        set(JJ) {
          Object.defineProperty(this, cJ, {
            value: JJ,
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
  38663: (JJ, cJ, ZJ) => {
    function FJ() {
      return "undefined" !== typeof window
    }

    function UJ() {
      return "undefined" !== typeof navigator
    }

    function eJ() {
      return "undefined" !== typeof document
    }

    function XJ(JJ) {
      let cJ = "",
        ZJ = JJ.firstChild;
      for (; ZJ;) 3 === ZJ.nodeType && (cJ += ZJ.textContent), ZJ = ZJ.nextSibling;
      return cJ
    }
    ZJ.d(cJ, {
      e: () => XJ,
      f: () => eJ,
      h: () => UJ,
      i: () => FJ
    })
  },
  38852: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ,
      e: () => UJ,
      g: () => eJ
    });
    class FJ extends Error {}
    FJ._setPrototypeOf = Object.setPrototypeOf || ((JJ, cJ) => (JJ.__proto__ = cJ, JJ));
    const UJ = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class eJ extends FJ {
      constructor(JJ, cJ, ZJ) {
        super(JJ), this.errorCode = cJ, this.innerError = ZJ, this.name = "RuntimeError", FJ._setPrototypeOf(this, eJ.prototype)
      }
    }
  },
  38844: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => wJ,
      g: () => vJ,
      i: () => SJ,
      j: () => MJ,
      k: () => KJ,
      n: () => EJ,
      p: () => VJ,
      t: () => kJ,
      x: () => yJ,
      A: () => mJ
    });
    var FJ = ZJ(38848),
      UJ = ZJ(38663),
      eJ = ZJ(36200);
    class XJ {}
    XJ.FilesToLoad = {};
    var AJ = ZJ(38852),
      qJ = ZJ(38856),
      jJ = ZJ(36192),
      YJ = ZJ(38671),
      hJ = ZJ(38683),
      DJ = ZJ(37660),
      sJ = ZJ(38689),
      nJ = ZJ(38859);
    const GJ = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class fJ extends AJ.g {
      constructor(JJ, cJ) {
        super(JJ, AJ.e.LoadFileError), this.name = "LoadFileError", AJ.d._setPrototypeOf(this, fJ.prototype), cJ instanceof FJ.d ? this.request = cJ : this.file = cJ
      }
    }
    class xJ extends AJ.g {
      constructor(JJ, cJ) {
        super(JJ, AJ.e.RequestFileError), this.request = cJ, this.name = "RequestFileError", AJ.d._setPrototypeOf(this, xJ.prototype)
      }
    }
    class rJ extends AJ.g {
      constructor(JJ, cJ) {
        super(JJ, AJ.e.ReadFileError), this.file = cJ, this.name = "ReadFileError", AJ.d._setPrototypeOf(this, rJ.prototype)
      }
    }
    const vJ = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (ZJ, FJ, UJ) => 0 !== FJ.status || UJ >= JJ || -1 !== ZJ.indexOf("file:") ? -1 : Math.pow(2, UJ) * cJ
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: JJ => JJ,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: JJ => JJ,
        CleanUrl: JJ => JJ = JJ.replace(/#/gm, "%23")
      },
      mJ = (JJ, cJ) => {
        if ((!JJ || 0 !== JJ.indexOf("data:")) && vJ.CorsBehavior)
          if ("string" === typeof vJ.CorsBehavior || vJ.CorsBehavior instanceof String) cJ.crossOrigin = vJ.CorsBehavior;
          else {
            const ZJ = vJ.CorsBehavior(JJ);
            ZJ && (cJ.crossOrigin = ZJ)
          }
      },
      QJ = {
        getRequiredSize: null
      },
      EJ = function(JJ, cJ, ZJ, UJ) {
        let eJ, AJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          YJ = arguments.length > 5 ? arguments[5] : void 0,
          hJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : jJ.c.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !hJ?._features.forceBitmapOverHTMLImageElement) return ZJ("LoadImage is only supported in web or BabylonNative environments."), null;
        if (hJ?._features.forceBitmapOverHTMLImageElement && "string" !== typeof JJ && "undefined" !== typeof Blob) {
          let FJ;
          if (JJ instanceof Blob) FJ = JJ;
          else {
            const cJ = JJ instanceof ArrayBuffer ? JJ : (0, nJ.k)(JJ);
            FJ = new Blob([cJ], {
              type: AJ
            })
          }
          return hJ.createImageBitmap(FJ, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...YJ
          }).then(cJ).catch((cJ => {
            ZJ && ZJ("Error while trying to load image: " + JJ, cJ)
          })), null
        }
        let DJ = !1;
        if (JJ instanceof ArrayBuffer || ArrayBuffer.isView(JJ))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let cJ;
            cJ = JJ instanceof ArrayBuffer ? JJ : (0, nJ.k)(JJ), eJ = URL.createObjectURL(new Blob([cJ], {
              type: AJ
            })), DJ = !0
          } else eJ = `data:${AJ};base64,` + (0, qJ.k)(JJ);
        else JJ instanceof Blob ? (eJ = URL.createObjectURL(JJ), DJ = !0) : (eJ = vJ.CleanUrl(JJ), eJ = vJ.PreprocessUrl(eJ));
        const sJ = cJ => {
          if (ZJ) {
            const FJ = eJ || JJ.toString();
            ZJ(`Error while trying to load image: ${0===FJ.indexOf("http")||FJ.length<=128?FJ:FJ.slice(0,128)+"..."}`, cJ)
          }
        };
        if (hJ?._features.forceBitmapOverHTMLImageElement) return KJ(eJ, (FJ => {
          hJ.createImageBitmap(new Blob([FJ], {
            type: AJ
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...YJ
          }).then((JJ => {
            cJ(JJ), DJ && URL.revokeObjectURL(eJ)
          })).catch((cJ => {
            ZJ && ZJ("Error while trying to load image: " + JJ, cJ)
          }))
        }), void 0, UJ || void 0, !0, ((JJ, cJ) => {
          sJ(cJ)
        })), null;
        const GJ = new Image;
        if (QJ.getRequiredSize) {
          const cJ = QJ.getRequiredSize(JJ);
          cJ.width && (GJ.width = cJ.width), cJ.height && (GJ.height = cJ.height)
        }
        mJ(eJ, GJ);
        const fJ = [],
          xJ = () => {
            for (const JJ of fJ) JJ.target.removeEventListener(JJ.name, JJ.handler);
            fJ.length = 0
          };
        fJ.push({
          target: GJ,
          name: "load",
          handler: () => {
            xJ(), cJ(GJ), DJ && GJ.src && URL.revokeObjectURL(GJ.src)
          }
        }), fJ.push({
          target: GJ,
          name: "error",
          handler: JJ => {
            xJ(), sJ(JJ), DJ && GJ.src && URL.revokeObjectURL(GJ.src)
          }
        }), fJ.push({
          target: document,
          name: "securitypolicyviolation",
          handler: JJ => {
            if (JJ.blockedURI !== GJ.src || "ls" === JJ.disposition) return;
            xJ();
            const cJ = new Error(`CSP violation of policy ${JJ.effectiveDirective} ${JJ.blockedURI}. Current policy is ${JJ.originalPolicy}`);
            jJ.c.UseFallbackTexture = !1, sJ(cJ), DJ && GJ.src && URL.revokeObjectURL(GJ.src), GJ.src = ""
          }
        }), (() => {
          for (const JJ of fJ) JJ.target.addEventListener(JJ.name, JJ.handler)
        })();
        const rJ = "blob:" === eJ.substring(0, 5),
          EJ = "data:" === eJ.substring(0, 5),
          VJ = () => {
            rJ || EJ || !FJ.d.IsCustomRequestAvailable ? GJ.src = eJ : KJ(eJ, ((JJ, cJ, ZJ) => {
              const FJ = new Blob([JJ], {
                  type: !AJ && ZJ ? ZJ : AJ
                }),
                UJ = URL.createObjectURL(FJ);
              DJ = !0, GJ.src = UJ
            }), void 0, UJ || void 0, !0, ((JJ, cJ) => {
              sJ(cJ)
            }))
          },
          yJ = () => {
            UJ && UJ.loadImage(eJ, GJ)
          };
        if (!rJ && !EJ && UJ && UJ.enableTexturesOffline) UJ.open(yJ, VJ);
        else {
          if (-1 !== eJ.indexOf("file:")) {
            const JJ = decodeURIComponent(eJ.substring(5).toLowerCase());
            if (XJ.FilesToLoad[JJ] && "undefined" !== typeof URL) {
              try {
                let cJ;
                try {
                  cJ = URL.createObjectURL(XJ.FilesToLoad[JJ])
                } catch (SJ) {
                  cJ = URL.createObjectURL(XJ.FilesToLoad[JJ])
                }
                GJ.src = cJ, DJ = !0
              } catch (IJ) {
                GJ.src = ""
              }
              return GJ
            }
          }
          VJ()
        }
        return GJ
      },
      VJ = (JJ, cJ, ZJ, FJ, UJ) => {
        const XJ = new FileReader,
          AJ = {
            onCompleteObservable: new eJ.c,
            abort: () => XJ.abort()
          };
        return XJ.onloadend = () => AJ.onCompleteObservable.notifyObservers(AJ), UJ && (XJ.onerror = () => {
          UJ(new rJ(`Unable to read ${JJ.name}`, JJ))
        }), XJ.onload = JJ => {
          cJ(JJ.target.result)
        }, ZJ && (XJ.onprogress = ZJ), FJ ? XJ.readAsArrayBuffer(JJ) : XJ.readAsText(JJ), AJ
      },
      KJ = (JJ, cJ, ZJ, FJ, UJ, qJ, jJ) => {
        if (JJ.name) return VJ(JJ, cJ, ZJ, UJ, qJ ? JJ => {
          qJ(void 0, JJ)
        } : void 0);
        const YJ = JJ;
        if (-1 !== YJ.indexOf("file:")) {
          let JJ = decodeURIComponent(YJ.substring(5).toLowerCase());
          0 === JJ.indexOf("./") && (JJ = JJ.substring(2));
          const FJ = XJ.FilesToLoad[JJ];
          if (FJ) return VJ(FJ, cJ, ZJ, UJ, qJ ? JJ => qJ(void 0, new fJ(JJ.message, JJ.file)) : void 0)
        }
        const {
          match: hJ,
          type: nJ
        } = bJ(YJ);
        if (hJ) {
          const JJ = {
            onCompleteObservable: new eJ.c,
            abort: () => () => {}
          };
          try {
            const JJ = UJ ? wJ(YJ) : WJ(YJ);
            cJ(JJ, void 0, nJ)
          } catch (AJ) {
            qJ ? qJ(void 0, AJ) : DJ.c.Error(AJ.message || "Failed to parse the Data URL")
          }
          return sJ.d.SetImmediate((() => {
            JJ.onCompleteObservable.notifyObservers(JJ)
          })), JJ
        }
        return yJ(YJ, ((JJ, ZJ) => {
          cJ(JJ, ZJ?.responseURL, ZJ?.getResponseHeader("content-type"))
        }), ZJ, FJ, UJ, qJ ? JJ => {
          qJ(JJ.request, new fJ(JJ.message, JJ.request))
        } : void 0, jJ)
      },
      yJ = (JJ, cJ, ZJ, XJ, AJ, qJ, YJ) => {
        null !== XJ && (XJ ?? (XJ = jJ.c.LastCreatedScene?.offlineProvider)), JJ = vJ.CleanUrl(JJ), JJ = vJ.PreprocessUrl(JJ);
        const hJ = vJ.BaseUrl + JJ;
        let sJ = !1;
        const nJ = {
            onCompleteObservable: new eJ.c,
            abort: () => sJ = !0
          },
          GJ = () => {
            let JJ, eJ = new FJ.d,
              XJ = null;
            const jJ = () => {
              eJ && (ZJ && eJ.removeEventListener("progress", ZJ), JJ && eJ.removeEventListener("readystatechange", JJ), eJ.removeEventListener("loadend", GJ))
            };
            let GJ = () => {
              jJ(), nJ.onCompleteObservable.notifyObservers(nJ), nJ.onCompleteObservable.clear(), ZJ = void 0, JJ = null, GJ = null, qJ = void 0, YJ = void 0, cJ = void 0
            };
            nJ.abort = () => {
              sJ = !0, GJ && GJ(), eJ && eJ.readyState !== (XMLHttpRequest.DONE || 4) && eJ.abort(), null !== XJ && (clearTimeout(XJ), XJ = null), eJ = null
            };
            const fJ = JJ => {
                const cJ = JJ.message || "Unknown error";
                qJ && eJ ? qJ(new xJ(cJ, eJ)) : DJ.c.Error(cJ)
              },
              rJ = DJ => {
                if (eJ) {
                  if (eJ.open("GET", hJ), YJ) try {
                    YJ(eJ)
                  } catch (nJ) {
                    return void fJ(nJ)
                  }
                  AJ && (eJ.responseType = "arraybuffer"), ZJ && eJ.addEventListener("progress", ZJ), GJ && eJ.addEventListener("loadend", GJ), JJ = () => {
                    if (!sJ && eJ && eJ.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (JJ && eJ.removeEventListener("readystatechange", JJ), eJ.status >= 200 && eJ.status < 300 || 0 === eJ.status && (!(0, UJ.i)() || IJ())) {
                        const JJ = AJ ? eJ.response : eJ.responseText;
                        if (null !== JJ) {
                          try {
                            cJ && cJ(JJ, eJ)
                          } catch (nJ) {
                            fJ(nJ)
                          }
                          return
                        }
                      }
                      const ZJ = vJ.DefaultRetryStrategy;
                      if (ZJ) {
                        const JJ = ZJ(hJ, eJ, DJ);
                        if (-1 !== JJ) return jJ(), eJ = new FJ.d, void(XJ = setTimeout((() => rJ(DJ + 1)), JJ))
                      }
                      const YJ = new xJ("Error status: " + eJ.status + " " + eJ.statusText + " - Unable to load " + hJ, eJ);
                      qJ && qJ(YJ)
                    }
                  }, eJ.addEventListener("readystatechange", JJ), eJ.send()
                }
              };
            rJ(0)
          };
        if (XJ && XJ.enableSceneOffline && !JJ.startsWith("blob:")) {
          const FJ = JJ => {
              JJ && JJ.status > 400 ? qJ && qJ(JJ) : GJ()
            },
            UJ = () => {
              XJ && XJ.loadFile(vJ.BaseUrl + JJ, (JJ => {
                !sJ && cJ && cJ(JJ), nJ.onCompleteObservable.notifyObservers(nJ)
              }), ZJ ? JJ => {
                !sJ && ZJ && ZJ(JJ)
              } : void 0, FJ, AJ)
            };
          XJ.open(UJ, FJ)
        } else GJ();
        return nJ
      },
      SJ = JJ => {
        const {
          match: cJ,
          type: ZJ
        } = bJ(JJ);
        if (cJ) return ZJ || void 0;
        const FJ = JJ.lastIndexOf(".");
        switch (JJ.substring(FJ + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "Fy":
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
      IJ = () => "undefined" !== typeof location && "file:" === location.protocol,
      MJ = JJ => GJ.test(JJ),
      bJ = JJ => {
        const cJ = GJ.exec(JJ);
        if (null === cJ || 0 === cJ.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: cJ[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function wJ(JJ) {
      return (0, qJ.e)(JJ.split(",")[1])
    }
    const WJ = JJ => (0, qJ.i)(JJ.split(",")[1]);
    let gJ;
    const HJ = (JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ) => {
      gJ = {
        DecodeBase64UrlToBinary: JJ,
        DecodeBase64UrlToString: cJ,
        DefaultRetryStrategy: ZJ.DefaultRetryStrategy,
        BaseUrl: ZJ.BaseUrl,
        CorsBehavior: ZJ.CorsBehavior,
        PreprocessUrl: ZJ.PreprocessUrl,
        IsBase64DataUrl: FJ,
        IsFileURL: UJ,
        LoadFile: eJ,
        LoadImage: XJ,
        ReadFile: AJ,
        RequestFile: qJ,
        SetCorsBehavior: jJ
      }, Object.defineProperty(gJ, "DefaultRetryStrategy", {
        get: function() {
          return ZJ.DefaultRetryStrategy
        },
        set: function(JJ) {
          ZJ.DefaultRetryStrategy = JJ
        }
      }), Object.defineProperty(gJ, "BaseUrl", {
        get: function() {
          return ZJ.BaseUrl
        },
        set: function(JJ) {
          ZJ.BaseUrl = JJ
        }
      }), Object.defineProperty(gJ, "PreprocessUrl", {
        get: function() {
          return ZJ.PreprocessUrl
        },
        set: function(JJ) {
          ZJ.PreprocessUrl = JJ
        }
      }), Object.defineProperty(gJ, "CorsBehavior", {
        get: function() {
          return ZJ.CorsBehavior
        },
        set: function(JJ) {
          ZJ.CorsBehavior = JJ
        }
      })
    };
    let PJ = !1;

    function kJ() {
      PJ || (PJ = !0, HJ(wJ, WJ, vJ, MJ, IJ, KJ, EJ, VJ, yJ, mJ), YJ.e.loadFile = KJ, YJ.e.loadImage = EJ, hJ.l.loadFile = KJ)
    }
  },
  38862: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => AJ,
      f: () => eJ,
      j: () => XJ
    });
    let FJ = null;

    function UJ() {
      if (FJ) return FJ;
      const JJ = new ArrayBuffer(4),
        cJ = new Float32Array(JJ),
        ZJ = new Uint32Array(JJ),
        UJ = new Uint32Array(512),
        eJ = new Uint32Array(512);
      for (let FJ = 0; FJ < 256; ++FJ) {
        const JJ = FJ - 127;
        JJ < -24 ? (UJ[FJ] = 0, UJ[256 | FJ] = 32768, eJ[FJ] = 24, eJ[256 | FJ] = 24) : JJ < -14 ? (UJ[FJ] = 1024 >> -JJ - 14, UJ[256 | FJ] = 1024 >> -JJ - 14 | 32768, eJ[FJ] = -JJ - 1, eJ[256 | FJ] = -JJ - 1) : JJ <= 15 ? (UJ[FJ] = JJ + 15 << 10, UJ[256 | FJ] = JJ + 15 << 10 | 32768, eJ[FJ] = 13, eJ[256 | FJ] = 13) : JJ < 128 ? (UJ[FJ] = 31744, UJ[256 | FJ] = 64512, eJ[FJ] = 24, eJ[256 | FJ] = 24) : (UJ[FJ] = 31744, UJ[256 | FJ] = 64512, eJ[FJ] = 13, eJ[256 | FJ] = 13)
      }
      const XJ = new Uint32Array(2048),
        AJ = new Uint32Array(64),
        qJ = new Uint32Array(64);
      for (let FJ = 1; FJ < 1024; ++FJ) {
        let JJ = FJ << 13,
          cJ = 0;
        for (; 0 === (8388608 & JJ);) JJ <<= 1, cJ -= 8388608;
        JJ &= -8388609, cJ += 947912704, XJ[FJ] = JJ | cJ
      }
      for (let FJ = 1024; FJ < 2048; ++FJ) XJ[FJ] = 939524096 + (FJ - 1024 << 13);
      for (let FJ = 1; FJ < 31; ++FJ) AJ[FJ] = FJ << 23;
      AJ[31] = 1199570944, AJ[32] = 2147483648;
      for (let FJ = 33; FJ < 63; ++FJ) AJ[FJ] = 2147483648 + (FJ - 32 << 23);
      AJ[63] = 3347054592;
      for (let FJ = 1; FJ < 64; ++FJ) 32 !== FJ && (qJ[FJ] = 1024);
      return FJ = {
        floatView: cJ,
        uint32View: ZJ,
        baseTable: UJ,
        shiftTable: eJ,
        mantissaTable: XJ,
        exponentTable: AJ,
        offsetTable: qJ
      }, FJ
    }
    const eJ = 65504;

    function XJ(JJ) {
      const cJ = UJ();
      cJ.floatView[0] = JJ;
      const ZJ = cJ.uint32View[0],
        FJ = ZJ >> 23 & 511;
      return cJ.baseTable[FJ] + ((8388607 & ZJ) >> cJ.shiftTable[FJ])
    }

    function AJ(JJ) {
      const cJ = UJ();
      return cJ.uint32View[0] = cJ.mantissaTable[cJ.offsetTable[JJ >> 10] + (1023 & JJ)] + cJ.exponentTable[JJ >> 10], cJ.floatView[0]
    }
  },
  38856: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ,
      i: () => UJ,
      k: () => FJ
    });
    const FJ = JJ => {
        const cJ = ArrayBuffer.isView(JJ) ? new Uint8Array(JJ.buffer, JJ.byteOffset, JJ.byteLength) : new Uint8Array(JJ);
        return "function" === typeof cJ.toBase64 ? cJ.toBase64() : function(JJ) {
          const cJ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ = "",
            YJ = 0;
          for (; YJ < JJ.length;) ZJ = JJ[YJ++], FJ = YJ < JJ.length ? JJ[YJ++] : Number.NaN, UJ = YJ < JJ.length ? JJ[YJ++] : Number.NaN, eJ = ZJ >> 2, XJ = (3 & ZJ) << 4 | FJ >> 4, AJ = (15 & FJ) << 2 | UJ >> 6, qJ = 63 & UJ, isNaN(FJ) ? AJ = qJ = 64 : isNaN(UJ) && (qJ = 64), jJ += cJ.charAt(eJ) + cJ.charAt(XJ) + cJ.charAt(AJ) + cJ.charAt(qJ);
          return jJ
        }(cJ)
      },
      UJ = JJ => atob(JJ),
      eJ = JJ => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(JJ).buffer : function(JJ) {
        const cJ = UJ(JJ),
          ZJ = cJ.length,
          FJ = new Uint8Array(new ArrayBuffer(ZJ));
        for (let UJ = 0; UJ < ZJ; UJ++) FJ[UJ] = cJ.charCodeAt(UJ);
        return FJ.buffer
      }(JJ)
  },
  38689: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => UJ,
      h: () => XJ
    });
    let FJ = [];
    class UJ {
      static SetImmediate(JJ) {
        0 === FJ.length && setTimeout((() => {
          const JJ = FJ;
          FJ = [];
          for (const cJ of JJ) cJ()
        }), 1), FJ.push(JJ)
      }
    }

    function eJ(JJ, cJ, ZJ) {
      try {
        if (JJ()) return cJ(), !0
      } catch (FJ) {
        return ZJ?.(FJ), !0
      }
      return !1
    }
    const XJ = function(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        XJ = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && eJ(JJ, cJ, ZJ)) return null;
      const AJ = setInterval((() => {
        eJ(JJ, cJ, ZJ) ? clearInterval(AJ) : (UJ -= FJ, UJ < 0 && (clearInterval(AJ), ZJ?.(new Error("Operation timed out after maximum retries. " + (XJ || "")), !0)))
      }), FJ);
      return () => clearInterval(AJ)
    }
  },
  38848: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ
    });
    class FJ {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(FJ.CustomRequestHeaders).length > 0 || FJ.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(JJ) {
        return JJ = (JJ = JJ.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(JJ) {
        return FJ.SkipRequestModificationForBabylonCDN && (JJ.includes("preview.babylonjs.com") || JJ.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(JJ) {
        const cJ = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (FJ._ShouldSkipRequestModifications(JJ)) return {
          url: JJ,
          headers: cJ
        };
        for (const UJ in FJ.CustomRequestHeaders) {
          const JJ = FJ.CustomRequestHeaders[UJ];
          JJ && (cJ[UJ] = JJ)
        }
        const ZJ = {
          setRequestHeader: (JJ, ZJ) => {
            cJ[JJ] = ZJ
          }
        };
        for (const UJ of FJ.CustomRequestModifiers) {
          if (FJ._ShouldSkipRequestModifications(JJ)) break;
          const cJ = UJ(ZJ, JJ);
          "string" === typeof cJ && (JJ = cJ)
        }
        return {
          url: JJ,
          headers: cJ
        }
      }
      static async FetchAsync(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZJ = cJ.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: UJ,
            headers: eJ
          } = FJ._CollectCustomizations(FJ._CleanUrl(JJ), cJ.headers ?? {});
          return await fetch(UJ, {
            method: ZJ,
            headers: eJ,
            body: cJ.body ?? void 0
          })
        }
        return await new Promise(((UJ, eJ) => {
          const XJ = new FJ;
          XJ.responseType = "arraybuffer", XJ.addEventListener("readystatechange", (() => {
            if (4 === XJ.readyState)
              if (XJ.status >= 200 && XJ.status < 300) {
                const JJ = "undefined" !== typeof Headers ? new Headers : void 0,
                  cJ = XJ.getResponseHeader("Content-Type");
                cJ && JJ && JJ.set("Content-Type", cJ), "undefined" !== typeof Response ? UJ(new Response(XJ.response, {
                  status: XJ.status,
                  statusText: XJ.statusText,
                  headers: JJ
                })) : UJ({
                  ok: !0,
                  status: XJ.status,
                  statusText: XJ.statusText,
                  headers: {
                    get: JJ => XJ.getResponseHeader(JJ)
                  },
                  arrayBuffer: async () => await Promise.resolve(XJ.response)
                })
              } else eJ(new Error(`HTTP ${XJ.status} loading '${XJ.requestURL}': ${XJ.statusText}`))
          })), XJ.open(ZJ, JJ, cJ.headers), XJ.send(cJ.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(JJ) {
        this._xhr.onprogress = JJ
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
      set responseType(JJ) {
        this._xhr.responseType = JJ
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(JJ) {
        this._xhr.timeout = JJ
      }
      addEventListener(JJ, cJ, ZJ) {
        this._xhr.addEventListener(JJ, cJ, ZJ)
      }
      removeEventListener(JJ, cJ, ZJ) {
        this._xhr.removeEventListener(JJ, cJ, ZJ)
      }
      abort() {
        this._xhr.abort()
      }
      send(JJ) {
        this._xhr.send(JJ)
      }
      open(JJ, cJ, ZJ) {
        const {
          url: UJ,
          headers: eJ
        } = FJ._CollectCustomizations(cJ, ZJ);
        this._requestURL = FJ._CleanUrl(UJ), this._xhr.open(JJ, this._requestURL, !0);
        for (const FJ in eJ) this._xhr.setRequestHeader(FJ, eJ[FJ])
      }
      setRequestHeader(JJ, cJ) {
        this._xhr.setRequestHeader(JJ, cJ)
      }
      getResponseHeader(JJ) {
        return this._xhr.getResponseHeader(JJ)
      }
    }
    FJ.CustomRequestHeaders = {}, FJ.CustomRequestModifiers = new Array, FJ.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);