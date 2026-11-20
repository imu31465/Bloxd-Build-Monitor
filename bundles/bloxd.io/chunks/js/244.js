export const id = 244;
export const ids = [244];
export const modules = {
  39437: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => jU,
      g: () => GU,
      i: () => qU,
      k: () => uU,
      n: () => KU,
      o: () => TU,
      r: () => cU
    });
    var tU = gU(38236),
      pU = gU(39442);

    function EU(UU, RU, gU, tU) {
      switch (RU) {
        case 5120: {
          let RU = UU.getInt8(gU);
          return tU && (RU = Math.max(RU / 127, -1)), RU
        }
        case 5121: {
          let RU = UU.getUint8(gU);
          return tU && (RU /= 255), RU
        }
        case 5122: {
          let RU = UU.getInt16(gU, !0);
          return tU && (RU = Math.max(RU / 32767, -1)), RU
        }
        case 5123: {
          let RU = UU.getUint16(gU, !0);
          return tU && (RU /= 65535), RU
        }
        case 5131:
          return (0, pU.c)(UU.getUint16(gU, !0));
        case 5124:
          return UU.getInt32(gU, !0);
        case 5125:
          return UU.getUint32(gU, !0);
        case 5126:
          return UU.getFloat32(gU, !0);
        default:
          throw new Error(`Invalid component type ${RU}`)
      }
    }

    function PU(UU, RU, gU, tU, EU) {
      switch (RU) {
        case 5120:
          tU && (EU = Math.round(127 * EU)), UU.setInt8(gU, EU);
          break;
        case 5121:
          tU && (EU = Math.round(255 * EU)), UU.setUint8(gU, EU);
          break;
        case 5122:
          tU && (EU = Math.round(32767 * EU)), UU.setInt16(gU, EU, !0);
          break;
        case 5123:
          tU && (EU = Math.round(65535 * EU)), UU.setUint16(gU, EU, !0);
          break;
        case 5131:
          UU.setUint16(gU, (0, pU.f)(EU), !0);
          break;
        case 5124:
          UU.setInt32(gU, EU, !0);
          break;
        case 5125:
          UU.setUint32(gU, EU, !0);
          break;
        case 5126:
          UU.setFloat32(gU, EU, !0);
          break;
        default:
          throw new Error(`Invalid component type ${RU}`)
      }
    }

    function TU(UU) {
      switch (UU) {
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
          throw new Error(`Invalid type '${UU}'`)
      }
    }

    function qU(UU, RU, gU, tU, pU, qU, KU, cU) {
      const GU = new Array(tU),
        jU = new Array(tU);
      if (UU instanceof Array) {
        let pU = RU / 4;
        const EU = gU / 4;
        for (let RU = 0; RU < qU; RU += tU) {
          for (let RU = 0; RU < tU; RU++) GU[RU] = jU[RU] = UU[pU + RU];
          cU(jU, RU);
          for (let RU = 0; RU < tU; RU++) GU[RU] !== jU[RU] && (UU[pU + RU] = jU[RU]);
          pU += EU
        }
      } else {
        const uU = ArrayBuffer.isView(UU) ? new DataView(UU.buffer, UU.byteOffset, UU.byteLength) : new DataView(UU),
          CU = TU(pU);
        for (let UU = 0; UU < qU; UU += tU) {
          for (let UU = 0, gU = RU; UU < tU; UU++, gU += CU) GU[UU] = jU[UU] = EU(uU, pU, gU, KU);
          cU(jU, UU);
          for (let UU = 0, gU = RU; UU < tU; UU++, gU += CU) GU[UU] !== jU[UU] && PU(uU, pU, gU, KU, jU[UU]);
          RU += gU
        }
      }
    }

    function KU(UU, RU, gU, pU, EU, PU, KU, cU) {
      const GU = RU * TU(gU),
        jU = KU * RU;
      if (5126 !== gU || EU !== GU) {
        const tU = new Float32Array(jU);
        return qU(UU, pU, EU, RU, gU, jU, PU, ((UU, gU) => {
          for (let pU = 0; pU < RU; pU++) tU[gU + pU] = UU[pU]
        })), tU
      }
      if (!(UU instanceof Array || UU instanceof Float32Array) || 0 !== pU || UU.length !== jU) {
        if (UU instanceof Array) {
          const RU = pU / 4;
          return UU.slice(RU, RU + jU)
        }
        if (ArrayBuffer.isView(UU)) {
          const RU = UU.byteOffset + pU;
          return 0 !== (3 & RU) && (tU.e.Warn("Float array must be aligned to 4-bytes border"), cU = !0), cU ? new Float32Array(UU.buffer.slice(RU, RU + jU * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(UU.buffer, RU, jU)
        }
        return new Float32Array(UU, pU, jU)
      }
      return cU ? UU.slice() : UU
    }

    function cU(UU, RU, gU, pU, EU, PU, KU) {
      const cU = TU(gU),
        GU = function(UU) {
          switch (UU) {
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
              throw new Error(`Invalid component type '${UU}'`)
          }
        }(gU),
        jU = PU * RU;
      if (Array.isArray(UU)) {
        if (0 !== (3 & pU) || 0 !== (3 & EU)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const tU = pU / 4,
          TU = EU / 4;
        if (tU + (PU - 1) * TU + RU > UU.length) throw new Error("Last accessed index is out of bounds.");
        if (TU < RU) throw new Error("Data stride cannot be smaller than the component size.");
        if (TU !== RU) {
          const tU = new GU(jU);
          return qU(UU, pU, EU, RU, gU, jU, !1, ((UU, gU) => {
            for (let pU = 0; pU < RU; pU++) tU[gU + pU] = UU[pU]
          })), tU
        }
        return new GU(UU.slice(tU, tU + jU))
      }
      let uU, CU = pU;
      ArrayBuffer.isView(UU) ? (uU = UU.buffer, CU += UU.byteOffset) : uU = UU;
      if (CU + (PU - 1) * EU + RU * cU > uU.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const hU = RU * cU;
      if (EU < hU) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (EU !== hU) {
        const UU = new GU(jU),
          gU = new Uint8Array(uU, CU),
          tU = new Uint8Array(UU.buffer),
          pU = RU * cU;
        for (let RU = 0, TU = 0, qU = 0; RU < PU; RU++, TU += EU, qU += pU) tU.set(gU.subarray(TU, TU + pU), qU);
        return UU
      }
      return 1 !== cU && 0 !== (CU & cU - 1) && (tU.e.Warn("Array must be aligned to border of element size. Data will be copied."), KU = !0), KU ? new GU(uU.slice(CU, CU + jU * cU)) : new GU(uU, CU, jU)
    }

    function GU(UU, RU, gU, pU, EU, PU, KU, cU) {
      const GU = RU * TU(gU),
        jU = KU * RU;
      if (cU.length !== jU) throw new Error("Output length is not valid");
      if (5126 === gU && EU === GU)
        if (UU instanceof Array) {
          const RU = pU / 4;
          cU.set(UU, RU)
        } else if (ArrayBuffer.isView(UU)) {
        const RU = UU.byteOffset + pU;
        if (0 !== (3 & RU)) return tU.e.Warn("Float array must be aligned to 4-bytes border"), void cU.set(new Float32Array(UU.buffer.slice(RU, RU + jU * Float32Array.BYTES_PER_ELEMENT)));
        const gU = new Float32Array(UU.buffer, RU, jU);
        cU.set(gU)
      } else {
        const RU = new Float32Array(UU, pU, jU);
        cU.set(RU)
      } else qU(UU, pU, EU, RU, gU, jU, PU, ((UU, gU) => {
        for (let tU = 0; tU < RU; tU++) cU[gU + tU] = UU[tU]
      }))
    }

    function jU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(UU)) {
        for (let pU = 0; pU < RU; pU++)
          if (UU[gU + pU] - tU > 65535) return !0;
        return !1
      }
      return 4 === UU.BYTES_PER_ELEMENT
    }

    function uU(UU) {
      const RU = UU.buffer;
      if (RU instanceof ArrayBuffer) return UU;
      const gU = new ArrayBuffer(UU.byteLength);
      return new Uint8Array(gU).set(new Uint8Array(RU, UU.byteOffset, UU.byteLength)), gU
    }
  },
  39265: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => wU,
      g: () => IU,
      l: () => JU,
      i: () => BU,
      m: () => VU
    });
    class tU {
      constructor() {
        this.children = []
      }
      isValid(UU) {
        return !0
      }
      process(UU, RU, gU) {
        let tU = "";
        if (this.line) {
          let gU = this.line;
          const pU = RU.processor;
          if (pU) {
            pU.lineProcessor && (gU = pU.lineProcessor(gU, RU.isFragment, RU.processingContext));
            const tU = RU.processor?.attributeKeywordName ?? "attribute",
              EU = RU.isFragment && RU.processor?.varyingFragmentKeywordName ? RU.processor?.varyingFragmentKeywordName : !RU.isFragment && RU.processor?.varyingVertexKeywordName ? RU.processor?.varyingVertexKeywordName : "varying";
            if (!RU.isFragment && pU.attributeProcessor && this.line.startsWith(tU)) gU = pU.attributeProcessor(this.line, UU, RU.processingContext);
            else if (pU.varyingProcessor && (pU.varyingCheck?.(this.line, RU.isFragment) || !pU.varyingCheck && this.line.startsWith(EU))) gU = pU.varyingProcessor(this.line, RU.isFragment, UU, RU.processingContext);
            else if (pU.uniformProcessor && pU.uniformRegexp && pU.uniformRegexp.test(this.line)) RU.lookForClosingBracketForUniformBuffer || (gU = pU.uniformProcessor(this.line, RU.isFragment, UU, RU.processingContext));
            else if (pU.uniformBufferProcessor && pU.uniformBufferRegexp && pU.uniformBufferRegexp.test(this.line)) RU.lookForClosingBracketForUniformBuffer || (gU = pU.uniformBufferProcessor(this.line, RU.isFragment, RU.processingContext), RU.lookForClosingBracketForUniformBuffer = !0);
            else if (pU.textureProcessor && pU.textureRegexp && pU.textureRegexp.test(this.line)) gU = pU.textureProcessor(this.line, RU.isFragment, UU, RU.processingContext);
            else if ((pU.uniformProcessor || pU.uniformBufferProcessor) && this.line.startsWith("uniform") && !RU.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? pU.uniformProcessor && (gU = pU.uniformProcessor(this.line, RU.isFragment, UU, RU.processingContext)) : pU.uniformBufferProcessor && (gU = pU.uniformBufferProcessor(this.line, RU.isFragment, RU.processingContext), RU.lookForClosingBracketForUniformBuffer = !0)
            }
            RU.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (RU.lookForClosingBracketForUniformBuffer = !1, pU.endOfUniformBufferProcessor && (gU = pU.endOfUniformBufferProcessor(this.line, RU.isFragment, RU.processingContext)))
          }
          tU += gU + "\n"
        }
        for (const pU of this.children) tU += pU.process(UU, RU, gU);
        return this.additionalDefineKey && (UU[this.additionalDefineKey] = this.additionalDefineValue || "true", gU[this.additionalDefineKey] = UU[this.additionalDefineKey]), tU
      }
    }
    class pU {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(UU) {
        this._lines.length = 0;
        for (const RU of UU) {
          if (!RU || "\r" === RU) continue;
          if ("#" === RU[0]) {
            this._lines.push(RU);
            continue
          }
          const UU = RU.trim();
          if (!UU) continue;
          if (UU.startsWith("//")) {
            this._lines.push(RU);
            continue
          }
          const gU = UU.indexOf(";");
          if (-1 === gU) this._lines.push(UU);
          else if (gU === UU.length - 1) UU.length > 1 && this._lines.push(UU);
          else {
            const UU = RU.split(";");
            for (let RU = 0; RU < UU.length; RU++) {
              let gU = UU[RU];
              gU && (gU = gU.trim(), gU && this._lines.push(gU + (RU !== UU.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class EU extends tU {
      process(UU, RU, gU) {
        for (let tU = 0; tU < this.children.length; tU++) {
          const pU = this.children[tU];
          if (pU.isValid(UU)) return pU.process(UU, RU, gU)
        }
        return ""
      }
    }
    class PU extends tU {
      isValid(UU) {
        return this.testExpression.isTrue(UU)
      }
    }
    class TU {
      isTrue(UU) {
        return !0
      }
      static postfixToInfix(UU) {
        const RU = [];
        for (const gU of UU)
          if (void 0 === TU._OperatorPriority[gU]) RU.push(gU);
          else {
            const UU = RU[RU.length - 1],
              tU = RU[RU.length - 2];
            RU.length -= 2, RU.push(`(${tU}${gU}${UU})`)
          } return RU[RU.length - 1]
      }
      static infixToPostfix(UU) {
        const RU = TU._InfixToPostfixCache.get(UU);
        if (RU) return RU.accessTime = Date.now(), RU.result;
        if (!UU.includes("&&") && !UU.includes("||") && !UU.includes(")") && !UU.includes("(")) return [UU];
        const gU = [];
        let tU = -1;
        const pU = () => {
            cU = cU.trim(), "" !== cU && (gU.push(cU), cU = "")
          },
          EU = UU => {
            tU < TU._Stack.length - 1 && (TU._Stack[++tU] = UU)
          },
          PU = () => TU._Stack[tU],
          qU = () => -1 === tU ? "!!INVALID EXPRESSION!!" : TU._Stack[tU--];
        let KU = 0,
          cU = "";
        for (; KU < UU.length;) {
          const RU = UU.charAt(KU),
            GU = KU < UU.length - 1 ? UU.substring(KU, 2 + KU) : "";
          if ("(" === RU) cU = "", EU(RU);
          else if (")" === RU) {
            for (pU(); - 1 !== tU && "(" !== PU();) gU.push(qU());
            qU()
          } else if (TU._OperatorPriority[GU] > 1) {
            for (pU(); - 1 !== tU && TU._OperatorPriority[PU()] >= TU._OperatorPriority[GU];) gU.push(qU());
            EU(GU), KU++
          } else cU += RU;
          KU++
        }
        for (pU(); - 1 !== tU;) "(" === PU() ? qU() : gU.push(qU());
        return TU._InfixToPostfixCache.size >= TU.InfixToPostfixCacheLimitSize && TU.ClearCache(), TU._InfixToPostfixCache.set(UU, {
          result: gU,
          accessTime: Date.now()
        }), gU
      }
      static ClearCache() {
        const UU = Array.from(TU._InfixToPostfixCache.entries()).sort(((UU, RU) => UU[1].accessTime - RU[1].accessTime));
        for (let RU = 0; RU < TU.InfixToPostfixCacheCleanupSize; RU++) TU._InfixToPostfixCache.delete(UU[RU][0])
      }
    }
    TU.InfixToPostfixCacheLimitSize = 5e4, TU.InfixToPostfixCacheCleanupSize = 25e3, TU._InfixToPostfixCache = new Map, TU._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, TU._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class qU extends TU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = UU, this.not = RU
      }
      isTrue(UU) {
        let RU = void 0 !== UU[this.define];
        return this.not && (RU = !RU), RU
      }
    }
    class KU extends TU {
      isTrue(UU) {
        return this.leftOperand.isTrue(UU) || this.rightOperand.isTrue(UU)
      }
    }
    class cU extends TU {
      isTrue(UU) {
        return this.leftOperand.isTrue(UU) && this.rightOperand.isTrue(UU)
      }
    }
    class GU extends TU {
      constructor(UU, RU, gU) {
        super(), this.define = UU, this.operand = RU, this.testValue = gU
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(UU) {
        let RU = !1;
        const gU = parseInt(void 0 != UU[this.define] ? UU[this.define] : this.define),
          tU = parseInt(void 0 != UU[this.testValue] ? UU[this.testValue] : this.testValue);
        if (isNaN(gU) || isNaN(tU)) return !1;
        switch (this.operand) {
          case ">":
            RU = gU > tU;
            break;
          case "<":
            RU = gU < tU;
            break;
          case "<=":
            RU = gU <= tU;
            break;
          case ">=":
            RU = gU >= tU;
            break;
          case "==":
            RU = gU === tU;
            break;
          case "!=":
            RU = gU !== tU
        }
        return RU
      }
    }
    var jU = gU(39256),
      uU = gU(39248);
    const CU = /defined\s*?\((.+?)\)/g,
      hU = /defined\s*?\[(.+?)\]/g,
      QU = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      eU = /__decl__/,
      WU = /light\{X\}.(\w*)/g,
      fU = /\{X\}/g,
      xU = [],
      mU = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function IU(UU) {
      UU.processor && UU.processor.initializeShaders && UU.processor.initializeShaders(UU.processingContext)
    }

    function JU(UU, RU, gU, tU) {
      RU.processor?.preProcessShaderCode && (UU = RU.processor.preProcessShaderCode(UU, RU.isFragment)), BU(UU, RU, (UU => {
        RU.processCodeAfterIncludes && (UU = RU.processCodeAfterIncludes(RU.isFragment ? "fragment" : "vertex", UU, RU.defines));
        const pU = function(UU, RU, gU) {
          let tU = function(UU, RU) {
            if (RU.processor?.noPrecision) return UU;
            const gU = RU.shouldUseHighPrecisionShader; - 1 === UU.indexOf("precision highp float") ? UU = gU ? "precision highp float;\n" + UU : "precision mediump float;\n" + UU : gU || (UU = UU.replace("precision highp float", "precision mediump float"));
            return UU
          }(UU, RU);
          if (!RU.processor) return tU;
          if (0 === RU.processor.shaderLanguage && -1 !== tU.indexOf("#version 3") && (tU = tU.replace("#version 300 es", ""), !RU.processor.parseGLES3)) return tU;
          const pU = RU.defines,
            EU = YU(RU, gU);
          RU.processor.preProcessor && (tU = RU.processor.preProcessor(tU, pU, EU, RU.isFragment, RU.processingContext));
          const PU = {};
          tU = aU(tU, EU, RU, PU), RU.processor.postProcessor && (tU = RU.processor.postProcessor(tU, pU, RU.isFragment, RU.processingContext, gU ? {
            drawBuffersExtensionDisabled: !gU.getCaps().drawBuffersExtension
          } : {}, EU, PU));
          gU?._features.needShaderCodeInlining && (tU = gU.inlineShaderCode(tU));
          return tU
        }(UU, RU, tU);
        gU(pU, UU)
      }))
    }

    function wU(UU, RU, gU) {
      return gU.processor && gU.processor.finalizeShaders ? gU.processor.finalizeShaders(UU, RU, gU.processingContext) : {
        vertexCode: UU,
        fragmentCode: RU
      }
    }

    function nU(UU) {
      const RU = /defined\((.+)\)/.exec(UU);
      if (RU && RU.length) return new qU(RU[1].trim(), "!" === UU[0]);
      const gU = ["==", "!=", ">=", "<=", "<", ">"];
      let tU = "",
        pU = 0;
      for (tU of gU)
        if (pU = UU.indexOf(tU), pU > -1) break;
      if (-1 === pU) return new qU(UU);
      const EU = UU.substring(0, pU).trim(),
        PU = UU.substring(pU + tU.length).trim();
      return new GU(EU, tU, PU)
    }

    function bU(UU, RU) {
      const gU = new PU,
        tU = UU.substring(0, RU);
      let pU = UU.substring(RU);
      return pU = pU.substring(0, (pU.indexOf("//") + 1 || pU.length + 1) - 1).trim(), gU.testExpression = "#ifdef" === tU ? new qU(pU) : "#ifndef" === tU ? new qU(pU, !0) : function(UU) {
        UU = UU.replace(CU, "defined[$1]");
        const RU = TU.infixToPostfix(UU),
          gU = [];
        for (const pU of RU)
          if ("||" !== pU && "&&" !== pU) gU.push(pU);
          else if (gU.length >= 2) {
          let UU = gU[gU.length - 1],
            RU = gU[gU.length - 2];
          gU.length -= 2;
          const tU = "&&" == pU ? new cU : new KU;
          "string" === typeof UU && (UU = UU.replace(hU, "defined($1)")), "string" === typeof RU && (RU = RU.replace(hU, "defined($1)")), tU.leftOperand = "string" === typeof RU ? nU(RU) : RU, tU.rightOperand = "string" === typeof UU ? nU(UU) : UU, gU.push(tU)
        }
        let tU = gU[gU.length - 1];
        return "string" === typeof tU && (tU = tU.replace(hU, "defined($1)")), "string" === typeof tU ? nU(tU) : tU
      }(pU), gU
    }

    function oU(UU, RU, gU, pU) {
      let EU;
      for (; ZU(UU, gU, pU);) {
        EU = UU.currentLine;
        const PU = EU.substring(0, 5).toLowerCase();
        if ("#else" === PU) {
          const gU = new tU;
          return RU.children.push(gU), void ZU(UU, gU, pU)
        }
        if ("#elif" === PU) {
          const UU = bU(EU, 5);
          RU.children.push(UU), gU = UU
        }
      }
    }

    function ZU(UU, RU, gU) {
      for (; UU.canRead;) {
        UU.lineIndex++;
        const pU = UU.currentLine;
        if (pU.indexOf("#") >= 0) {
          const tU = mU.exec(pU);
          if (tU && tU.length) {
            switch (tU[0]) {
              case "#ifdef": {
                const tU = new EU;
                RU.children.push(tU);
                const PU = bU(pU, 6);
                tU.children.push(PU), oU(UU, tU, PU, gU);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const tU = new EU;
                RU.children.push(tU);
                const PU = bU(pU, 7);
                tU.children.push(PU), oU(UU, tU, PU, gU);
                break
              }
              case "#if": {
                const tU = new EU,
                  PU = bU(pU, 3);
                RU.children.push(tU), tU.children.push(PU), oU(UU, tU, PU, gU);
                break
              }
            }
            continue
          }
        }
        const PU = new tU;
        if (PU.line = pU, RU.children.push(PU), "#" === pU[0] && "d" === pU[1]) {
          const UU = pU.replace(";", "").split(" ");
          PU.additionalDefineKey = UU[1], 3 === UU.length && (PU.additionalDefineValue = UU[2])
        }
      }
      return !1
    }

    function aU(UU, RU, gU, EU) {
      const PU = new tU,
        TU = new pU;
      return TU.lineIndex = -1, TU.lines = UU.split("\n"), ZU(TU, PU, EU), PU.process(RU, gU, EU)
    }

    function YU(UU, RU) {
      const gU = UU.defines,
        tU = {};
      for (const pU of gU) {
        const UU = pU.replace("#define", "").replace(";", "").trim().split(" ");
        tU[UU[0]] = UU.length > 1 ? UU[1] : ""
      }
      return 0 === UU.processor?.shaderLanguage && (tU.GL_ES = "true"), tU.__VERSION__ = UU.version, tU[UU.platformName] = "true", (0, uU.j)(tU, RU?.isNDCHalfZRange, RU?.VgU, RU?.useExactSrgbConversions), tU
    }

    function BU(UU, RU, gU) {
      let tU;
      for (xU.length = 0; null !== (tU = QU.exec(UU));) xU.push(tU);
      let pU = [UU],
        EU = !1;
      for (const TU of xU) {
        let UU = TU[1];
        if (-1 !== UU.indexOf("__decl__") && (UU = UU.replace(eU, ""), RU.supportsUniformBuffers && (UU = UU.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), UU += "Declaration"), !RU.includesShadersStore[UU]) {
          const tU = RU.shadersRepository + "ShadersInclude/" + UU + ".fx";
          return void VU.loadFile(tU, (tU => {
            RU.includesShadersStore[UU] = tU, BU(pU.join(""), RU, gU)
          }))
        } {
          let gU = RU.includesShadersStore[UU];
          if (TU[2]) {
            const UU = TU[3].split(",");
            for (let RU = 0; RU < UU.length; RU += 2) {
              const tU = new RegExp(UU[RU], "g"),
                pU = UU[RU + 1];
              gU = gU.replace(tU, pU)
            }
          }
          if (TU[4]) {
            const UU = TU[5];
            if (-1 !== UU.indexOf("..")) {
              const tU = UU.split(".."),
                pU = parseInt(tU[0]);
              let EU = parseInt(tU[1]),
                PU = gU.slice(0);
              gU = "", isNaN(EU) && (EU = RU.indexParameters[tU[1]]);
              for (let UU = pU; UU < EU; UU++) RU.supportsUniformBuffers || (PU = PU.replace(WU, ((UU, RU) => RU + "{X}"))), gU += PU.replace(fU, UU.toString()) + "\n"
            } else RU.supportsUniformBuffers || (gU = gU.replace(WU, ((UU, RU) => RU + "{X}"))), gU = gU.replace(fU, UU)
          }
          const tU = [];
          for (const UU of pU) {
            const RU = UU.split(TU[0]);
            for (let UU = 0; UU < RU.length - 1; UU++) tU.push(RU[UU]), tU.push(gU);
            tU.push(RU[RU.length - 1])
          }
          pU = tU, EU = EU || gU.indexOf("#include<") >= 0 || gU.indexOf("#include <") >= 0
        }
      }
      xU.length = 0;
      const PU = pU.join("");
      EU ? BU(PU.toString(), RU, gU) : gU(PU)
    }
    const VU = {
      loadFile: (UU, RU, gU, tU, pU, EU) => {
        throw (0, jU.n)("FileTools")
      }
    }
  },
  39248: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU,
      f: () => EU,
      j: () => TU,
      m: () => PU,
      o: () => qU
    });
    var tU = gU(39256);
    const pU = {};

    function EU(UU, RU) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (RU ? RU + "\n" : "") + UU
    }

    function PU(UU, RU, gU, EU, PU, TU, qU) {
      const KU = qU || pU.loadFile;
      if (!KU) throw (0, tU.n)("FileTools");
      return KU(UU, RU, gU, EU, PU, TU)
    }

    function TU(UU, RU, gU, tU) {
      if (UU) return RU ? UU.IS_NDC_HALF_ZRANGE = "" : delete UU.IS_NDC_HALF_ZRANGE, gU ? UU.USE_REVERSE_DEPTHBUFFER = "" : delete UU.USE_REVERSE_DEPTHBUFFER, void(tU ? UU.USE_EXACT_SRGB_CONVERSIONS = "" : delete UU.USE_EXACT_SRGB_CONVERSIONS);
      {
        let UU = "";
        return RU && (UU += "#define IS_NDC_HALF_ZRANGE"), gU && (UU && (UU += "\n"), UU += "#define USE_REVERSE_DEPTHBUFFER"), tU && (UU && (UU += "\n"), UU += "#define USE_EXACT_SRGB_CONVERSIONS"), UU
      }
    }

    function qU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        tU = arguments.length > 3 ? arguments[3] : void 0;
      switch (UU) {
        case 3: {
          const UU = new Int8Array(RU);
          return tU && UU.set(new Int8Array(tU)), UU
        }
        case 0: {
          const UU = new Uint8Array(RU);
          return tU && UU.set(new Uint8Array(tU)), UU
        }
        case 4: {
          const UU = "number" !== typeof RU ? new Int16Array(RU) : new Int16Array(gU ? RU / 2 : RU);
          return tU && UU.set(new Int16Array(tU)), UU
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const UU = "number" !== typeof RU ? new Uint16Array(RU) : new Uint16Array(gU ? RU / 2 : RU);
          return tU && UU.set(new Uint16Array(tU)), UU
        }
        case 6: {
          const UU = "number" !== typeof RU ? new Int32Array(RU) : new Int32Array(gU ? RU / 4 : RU);
          return tU && UU.set(new Int32Array(tU)), UU
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const UU = "number" !== typeof RU ? new Uint32Array(RU) : new Uint32Array(gU ? RU / 4 : RU);
          return tU && UU.set(new Uint32Array(tU)), UU
        }
        case 1: {
          const UU = "number" !== typeof RU ? new Float32Array(RU) : new Float32Array(gU ? RU / 4 : RU);
          return tU && UU.set(new Float32Array(tU)), UU
        }
      }
      const pU = new Uint8Array(RU);
      return tU && pU.set(new Uint8Array(tU)), pU
    }
  },
  39256: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => KU,
      i: () => cU,
      m: () => qU,
      n: () => pU
    });
    const tU = {};

    function pU(UU) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !tU[UU]) return tU[UU] = !0, `${UU} needs to be imported before as it contains a side-effect required by your code.`
    }
    const EU = {};
    let PU = !1,
      TU = 0;

    function qU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const tU = function() {
        if ((gU || PU) && 0 === TU) {
          const gU = `${UU}.${RU}`;
          EU[gU] || (EU[gU] = !0, console.warn(`[Babylon.js] ${gU}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return tU.__isSideEffectStub = !0, tU
    }

    function KU(UU) {
      return !!UU && !UU.__isSideEffectStub
    }

    function cU(UU, RU) {
      return {
        get() {},
        set(UU) {
          Object.defineProperty(this, RU, {
            value: UU,
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
  39231: (UU, RU, gU) => {
    function tU() {
      return "undefined" !== typeof window
    }

    function pU() {
      return "undefined" !== typeof navigator
    }

    function EU() {
      return "undefined" !== typeof document
    }

    function PU(UU) {
      let RU = "",
        gU = UU.firstChild;
      for (; gU;) 3 === gU.nodeType && (RU += gU.textContent), gU = gU.nextSibling;
      return RU
    }
    gU.d(RU, {
      c: () => PU,
      g: () => EU,
      h: () => pU,
      k: () => tU
    })
  },
  39429: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU,
      c: () => pU,
      d: () => EU
    });
    class tU extends Error {}
    tU._setPrototypeOf = Object.setPrototypeOf || ((UU, RU) => (UU.__proto__ = RU, UU));
    const pU = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class EU extends tU {
      constructor(UU, RU, gU) {
        super(UU), this.errorCode = RU, this.innerError = gU, this.name = "RuntimeError", tU._setPrototypeOf(this, EU.prototype)
      }
    }
  },
  39424: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => YU,
      g: () => fU,
      h: () => bU,
      l: () => ZU,
      m: () => wU,
      p: () => IU,
      r: () => JU,
      t: () => vU,
      w: () => nU,
      A: () => xU
    });
    var tU = gU(39427),
      pU = gU(39231),
      EU = gU(36624);
    class PU {}
    PU.FilesToLoad = {};
    var TU = gU(39429),
      qU = gU(39434),
      KU = gU(36622),
      cU = gU(39248),
      GU = gU(39265),
      jU = gU(38236),
      uU = gU(39268),
      CU = gU(39437);
    const hU = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class QU extends TU.d {
      constructor(UU, RU) {
        super(UU, TU.c.LoadFileError), this.name = "LoadFileError", TU.b._setPrototypeOf(this, QU.prototype), RU instanceof tU.e ? this.request = RU : this.file = RU
      }
    }
    class eU extends TU.d {
      constructor(UU, RU) {
        super(UU, TU.c.RequestFileError), this.request = RU, this.name = "RequestFileError", TU.b._setPrototypeOf(this, eU.prototype)
      }
    }
    class WU extends TU.d {
      constructor(UU, RU) {
        super(UU, TU.c.ReadFileError), this.file = RU, this.name = "ReadFileError", TU.b._setPrototypeOf(this, WU.prototype)
      }
    }
    const fU = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (gU, tU, pU) => 0 !== tU.status || pU >= UU || -1 !== gU.indexOf("file:") ? -1 : Math.pow(2, pU) * RU
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: UU => UU,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: UU => UU,
        CleanUrl: UU => UU = UU.replace(/#/gm, "%23")
      },
      xU = (UU, RU) => {
        if ((!UU || 0 !== UU.indexOf("data:")) && fU.CorsBehavior)
          if ("string" === typeof fU.CorsBehavior || fU.CorsBehavior instanceof String) RU.crossOrigin = fU.CorsBehavior;
          else {
            const gU = fU.CorsBehavior(UU);
            gU && (RU.crossOrigin = gU)
          }
      },
      mU = {
        getRequiredSize: null
      },
      IU = function(UU, RU, gU, pU) {
        let EU, TU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          cU = arguments.length > 5 ? arguments[5] : void 0,
          GU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : KU.c.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !GU?._features.forceBitmapOverHTMLImageElement) return gU("LoadImage is only supported in web or BabylonNative environments."), null;
        if (GU?._features.forceBitmapOverHTMLImageElement && "string" !== typeof UU && "undefined" !== typeof Blob) {
          let tU;
          if (UU instanceof Blob) tU = UU;
          else {
            const RU = UU instanceof ArrayBuffer ? UU : (0, CU.k)(UU);
            tU = new Blob([RU], {
              type: TU
            })
          }
          return GU.createImageBitmap(tU, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...cU
          }).then(RU).catch((RU => {
            gU && gU("Error while trying to load image: " + UU, RU)
          })), null
        }
        let jU = !1;
        if (UU instanceof ArrayBuffer || ArrayBuffer.isView(UU))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let RU;
            RU = UU instanceof ArrayBuffer ? UU : (0, CU.k)(UU), EU = URL.createObjectURL(new Blob([RU], {
              type: TU
            })), jU = !0
          } else EU = `data:${TU};base64,` + (0, qU.d)(UU);
        else UU instanceof Blob ? (EU = URL.createObjectURL(UU), jU = !0) : (EU = fU.CleanUrl(UU), EU = fU.PreprocessUrl(EU));
        const uU = RU => {
          if (gU) {
            const tU = EU || UU.toString();
            gU(`Error while trying to load image: ${0===tU.indexOf("http")||tU.length<=128?tU:tU.slice(0,128)+"..."}`, RU)
          }
        };
        if (GU?._features.forceBitmapOverHTMLImageElement) return wU(EU, (tU => {
          GU.createImageBitmap(new Blob([tU], {
            type: TU
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...cU
          }).then((UU => {
            RU(UU), jU && URL.revokeObjectURL(EU)
          })).catch((RU => {
            gU && gU("Error while trying to load image: " + UU, RU)
          }))
        }), void 0, pU || void 0, !0, ((UU, RU) => {
          uU(RU)
        })), null;
        const hU = new Image;
        if (mU.getRequiredSize) {
          const RU = mU.getRequiredSize(UU);
          RU.width && (hU.width = RU.width), RU.height && (hU.height = RU.height)
        }
        xU(EU, hU);
        const QU = [],
          eU = () => {
            for (const UU of QU) UU.target.removeEventListener(UU.name, UU.handler);
            QU.length = 0
          };
        QU.push({
          target: hU,
          name: "load",
          handler: () => {
            eU(), RU(hU), jU && hU.src && URL.revokeObjectURL(hU.src)
          }
        }), QU.push({
          target: hU,
          name: "error",
          handler: UU => {
            eU(), uU(UU), jU && hU.src && URL.revokeObjectURL(hU.src)
          }
        }), QU.push({
          target: document,
          name: "securitypolicyviolation",
          handler: UU => {
            if (UU.blockedURI !== hU.src || "ku" === UU.disposition) return;
            eU();
            const RU = new Error(`CSP violation of policy ${UU.effectiveDirective} ${UU.blockedURI}. Current policy is ${UU.originalPolicy}`);
            KU.c.UseFallbackTexture = !1, uU(RU), jU && hU.src && URL.revokeObjectURL(hU.src), hU.src = ""
          }
        }), (() => {
          for (const UU of QU) UU.target.addEventListener(UU.name, UU.handler)
        })();
        const WU = "blob:" === EU.substring(0, 5),
          IU = "data:" === EU.substring(0, 5),
          JU = () => {
            WU || IU || !tU.e.IsCustomRequestAvailable ? hU.src = EU : wU(EU, ((UU, RU, gU) => {
              const tU = new Blob([UU], {
                  type: !TU && gU ? gU : TU
                }),
                pU = URL.createObjectURL(tU);
              jU = !0, hU.src = pU
            }), void 0, pU || void 0, !0, ((UU, RU) => {
              uU(RU)
            }))
          },
          nU = () => {
            pU && pU.loadImage(EU, hU)
          };
        if (!WU && !IU && pU && pU.enableTexturesOffline) pU.open(nU, JU);
        else {
          if (-1 !== EU.indexOf("file:")) {
            const UU = decodeURIComponent(EU.substring(5).toLowerCase());
            if (PU.FilesToLoad[UU] && "undefined" !== typeof URL) {
              try {
                let RU;
                try {
                  RU = URL.createObjectURL(PU.FilesToLoad[UU])
                } catch (bU) {
                  RU = URL.createObjectURL(PU.FilesToLoad[UU])
                }
                hU.src = RU, jU = !0
              } catch (oU) {
                hU.src = ""
              }
              return hU
            }
          }
          JU()
        }
        return hU
      },
      JU = (UU, RU, gU, tU, pU) => {
        const PU = new FileReader,
          TU = {
            onCompleteObservable: new EU.b,
            abort: () => PU.abort()
          };
        return PU.onloadend = () => TU.onCompleteObservable.notifyObservers(TU), pU && (PU.onerror = () => {
          pU(new WU(`Unable to read ${UU.name}`, UU))
        }), PU.onload = UU => {
          RU(UU.target.result)
        }, gU && (PU.onprogress = gU), tU ? PU.readAsArrayBuffer(UU) : PU.readAsText(UU), TU
      },
      wU = (UU, RU, gU, tU, pU, qU, KU) => {
        if (UU.name) return JU(UU, RU, gU, pU, qU ? UU => {
          qU(void 0, UU)
        } : void 0);
        const cU = UU;
        if (-1 !== cU.indexOf("file:")) {
          let UU = decodeURIComponent(cU.substring(5).toLowerCase());
          0 === UU.indexOf("./") && (UU = UU.substring(2));
          const tU = PU.FilesToLoad[UU];
          if (tU) return JU(tU, RU, gU, pU, qU ? UU => qU(void 0, new QU(UU.message, UU.file)) : void 0)
        }
        const {
          match: GU,
          type: CU
        } = aU(cU);
        if (GU) {
          const UU = {
            onCompleteObservable: new EU.b,
            abort: () => () => {}
          };
          try {
            const UU = pU ? YU(cU) : BU(cU);
            RU(UU, void 0, CU)
          } catch (TU) {
            qU ? qU(void 0, TU) : jU.e.Error(TU.message || "Failed to parse the Data URL")
          }
          return uU.b.SetImmediate((() => {
            UU.onCompleteObservable.notifyObservers(UU)
          })), UU
        }
        return nU(cU, ((UU, gU) => {
          RU(UU, gU?.responseURL, gU?.getResponseHeader("content-type"))
        }), gU, tU, pU, qU ? UU => {
          qU(UU.request, new QU(UU.message, UU.request))
        } : void 0, KU)
      },
      nU = (UU, RU, gU, PU, TU, qU, cU) => {
        null !== PU && (PU ?? (PU = KU.c.LastCreatedScene?.offlineProvider)), UU = fU.CleanUrl(UU), UU = fU.PreprocessUrl(UU);
        const GU = fU.BaseUrl + UU;
        let uU = !1;
        const CU = {
            onCompleteObservable: new EU.b,
            abort: () => uU = !0
          },
          hU = () => {
            let UU, EU = new tU.e,
              PU = null;
            const KU = () => {
              EU && (gU && EU.removeEventListener("progress", gU), UU && EU.removeEventListener("readystatechange", UU), EU.removeEventListener("loadend", hU))
            };
            let hU = () => {
              KU(), CU.onCompleteObservable.notifyObservers(CU), CU.onCompleteObservable.clear(), gU = void 0, UU = null, hU = null, qU = void 0, cU = void 0, RU = void 0
            };
            CU.abort = () => {
              uU = !0, hU && hU(), EU && EU.readyState !== (XMLHttpRequest.DONE || 4) && EU.abort(), null !== PU && (clearTimeout(PU), PU = null), EU = null
            };
            const QU = UU => {
                const RU = UU.message || "Unknown error";
                qU && EU ? qU(new eU(RU, EU)) : jU.e.Error(RU)
              },
              WU = jU => {
                if (EU) {
                  if (EU.open("GET", GU), cU) try {
                    cU(EU)
                  } catch (CU) {
                    return void QU(CU)
                  }
                  TU && (EU.responseType = "arraybuffer"), gU && EU.addEventListener("progress", gU), hU && EU.addEventListener("loadend", hU), UU = () => {
                    if (!uU && EU && EU.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (UU && EU.removeEventListener("readystatechange", UU), EU.status >= 200 && EU.status < 300 || 0 === EU.status && (!(0, pU.k)() || oU())) {
                        const UU = TU ? EU.response : EU.responseText;
                        if (null !== UU) {
                          try {
                            RU && RU(UU, EU)
                          } catch (CU) {
                            QU(CU)
                          }
                          return
                        }
                      }
                      const gU = fU.DefaultRetryStrategy;
                      if (gU) {
                        const UU = gU(GU, EU, jU);
                        if (-1 !== UU) return KU(), EU = new tU.e, void(PU = setTimeout((() => WU(jU + 1)), UU))
                      }
                      const cU = new eU("Error status: " + EU.status + " " + EU.statusText + " - Unable to load " + GU, EU);
                      qU && qU(cU)
                    }
                  }, EU.addEventListener("readystatechange", UU), EU.send()
                }
              };
            WU(0)
          };
        if (PU && PU.enableSceneOffline && !UU.startsWith("blob:")) {
          const tU = UU => {
              UU && UU.status > 400 ? qU && qU(UU) : hU()
            },
            pU = () => {
              PU && PU.loadFile(fU.BaseUrl + UU, (UU => {
                !uU && RU && RU(UU), CU.onCompleteObservable.notifyObservers(CU)
              }), gU ? UU => {
                !uU && gU && gU(UU)
              } : void 0, tU, TU)
            };
          PU.open(pU, tU)
        } else hU();
        return CU
      },
      bU = UU => {
        const {
          match: RU,
          type: gU
        } = aU(UU);
        if (RU) return gU || void 0;
        const tU = UU.lastIndexOf(".");
        switch (UU.substring(tU + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "eZ":
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
      oU = () => "undefined" !== typeof location && "file:" === location.protocol,
      ZU = UU => hU.test(UU),
      aU = UU => {
        const RU = hU.exec(UU);
        if (null === RU || 0 === RU.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: RU[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function YU(UU) {
      return (0, qU.b)(UU.split(",")[1])
    }
    const BU = UU => (0, qU.c)(UU.split(",")[1]);
    let VU;
    const rU = (UU, RU, gU, tU, pU, EU, PU, TU, qU, KU) => {
      VU = {
        DecodeBase64UrlToBinary: UU,
        DecodeBase64UrlToString: RU,
        DefaultRetryStrategy: gU.DefaultRetryStrategy,
        BaseUrl: gU.BaseUrl,
        CorsBehavior: gU.CorsBehavior,
        PreprocessUrl: gU.PreprocessUrl,
        IsBase64DataUrl: tU,
        IsFileURL: pU,
        LoadFile: EU,
        LoadImage: PU,
        ReadFile: TU,
        RequestFile: qU,
        SetCorsBehavior: KU
      }, Object.defineProperty(VU, "DefaultRetryStrategy", {
        get: function() {
          return gU.DefaultRetryStrategy
        },
        set: function(UU) {
          gU.DefaultRetryStrategy = UU
        }
      }), Object.defineProperty(VU, "BaseUrl", {
        get: function() {
          return gU.BaseUrl
        },
        set: function(UU) {
          gU.BaseUrl = UU
        }
      }), Object.defineProperty(VU, "PreprocessUrl", {
        get: function() {
          return gU.PreprocessUrl
        },
        set: function(UU) {
          gU.PreprocessUrl = UU
        }
      }), Object.defineProperty(VU, "CorsBehavior", {
        get: function() {
          return gU.CorsBehavior
        },
        set: function(UU) {
          gU.CorsBehavior = UU
        }
      })
    };
    let XU = !1;

    function vU() {
      XU || (XU = !0, rU(YU, BU, fU, ZU, oU, wU, IU, JU, nU, xU), cU.e.loadFile = wU, cU.e.loadImage = IU, GU.m.loadFile = wU)
    }
  },
  39442: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU,
      d: () => EU,
      f: () => PU
    });
    let tU = null;

    function pU() {
      if (tU) return tU;
      const UU = new ArrayBuffer(4),
        RU = new Float32Array(UU),
        gU = new Uint32Array(UU),
        pU = new Uint32Array(512),
        EU = new Uint32Array(512);
      for (let tU = 0; tU < 256; ++tU) {
        const UU = tU - 127;
        UU < -24 ? (pU[tU] = 0, pU[256 | tU] = 32768, EU[tU] = 24, EU[256 | tU] = 24) : UU < -14 ? (pU[tU] = 1024 >> -UU - 14, pU[256 | tU] = 1024 >> -UU - 14 | 32768, EU[tU] = -UU - 1, EU[256 | tU] = -UU - 1) : UU <= 15 ? (pU[tU] = UU + 15 << 10, pU[256 | tU] = UU + 15 << 10 | 32768, EU[tU] = 13, EU[256 | tU] = 13) : UU < 128 ? (pU[tU] = 31744, pU[256 | tU] = 64512, EU[tU] = 24, EU[256 | tU] = 24) : (pU[tU] = 31744, pU[256 | tU] = 64512, EU[tU] = 13, EU[256 | tU] = 13)
      }
      const PU = new Uint32Array(2048),
        TU = new Uint32Array(64),
        qU = new Uint32Array(64);
      for (let tU = 1; tU < 1024; ++tU) {
        let UU = tU << 13,
          RU = 0;
        for (; 0 === (8388608 & UU);) UU <<= 1, RU -= 8388608;
        UU &= -8388609, RU += 947912704, PU[tU] = UU | RU
      }
      for (let tU = 1024; tU < 2048; ++tU) PU[tU] = 939524096 + (tU - 1024 << 13);
      for (let tU = 1; tU < 31; ++tU) TU[tU] = tU << 23;
      TU[31] = 1199570944, TU[32] = 2147483648;
      for (let tU = 33; tU < 63; ++tU) TU[tU] = 2147483648 + (tU - 32 << 23);
      TU[63] = 3347054592;
      for (let tU = 1; tU < 64; ++tU) 32 !== tU && (qU[tU] = 1024);
      return tU = {
        floatView: RU,
        uint32View: gU,
        baseTable: pU,
        shiftTable: EU,
        mantissaTable: PU,
        exponentTable: TU,
        offsetTable: qU
      }, tU
    }
    const EU = 65504;

    function PU(UU) {
      const RU = pU();
      RU.floatView[0] = UU;
      const gU = RU.uint32View[0],
        tU = gU >> 23 & 511;
      return RU.baseTable[tU] + ((8388607 & gU) >> RU.shiftTable[tU])
    }

    function TU(UU) {
      const RU = pU();
      return RU.uint32View[0] = RU.mantissaTable[RU.offsetTable[UU >> 10] + (1023 & UU)] + RU.exponentTable[UU >> 10], RU.floatView[0]
    }
  },
  39434: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      c: () => pU,
      d: () => tU
    });
    const tU = UU => {
        const RU = ArrayBuffer.isView(UU) ? new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength) : new Uint8Array(UU);
        return "function" === typeof RU.toBase64 ? RU.toBase64() : function(UU) {
          const RU = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let gU, tU, pU, EU, PU, TU, qU, KU = "",
            cU = 0;
          for (; cU < UU.length;) gU = UU[cU++], tU = cU < UU.length ? UU[cU++] : Number.NaN, pU = cU < UU.length ? UU[cU++] : Number.NaN, EU = gU >> 2, PU = (3 & gU) << 4 | tU >> 4, TU = (15 & tU) << 2 | pU >> 6, qU = 63 & pU, isNaN(tU) ? TU = qU = 64 : isNaN(pU) && (qU = 64), KU += RU.charAt(EU) + RU.charAt(PU) + RU.charAt(TU) + RU.charAt(qU);
          return KU
        }(RU)
      },
      pU = UU => atob(UU),
      EU = UU => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(UU).buffer : function(UU) {
        const RU = pU(UU),
          gU = RU.length,
          tU = new Uint8Array(new ArrayBuffer(gU));
        for (let pU = 0; pU < gU; pU++) tU[pU] = RU.charCodeAt(pU);
        return tU.buffer
      }(UU)
  },
  39268: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      c: () => PU
    });
    let tU = [];
    class pU {
      static SetImmediate(UU) {
        0 === tU.length && setTimeout((() => {
          const UU = tU;
          tU = [];
          for (const RU of UU) RU()
        }), 1), tU.push(UU)
      }
    }

    function EU(UU, RU, gU) {
      try {
        if (UU()) return RU(), !0
      } catch (tU) {
        return gU?.(tU), !0
      }
      return !1
    }
    const PU = function(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        PU = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && EU(UU, RU, gU)) return null;
      const TU = setInterval((() => {
        EU(UU, RU, gU) ? clearInterval(TU) : (pU -= tU, pU < 0 && (clearInterval(TU), gU?.(new Error("Operation timed out after maximum retries. " + (PU || "")), !0)))
      }), tU);
      return () => clearInterval(TU)
    }
  },
  39427: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU
    });
    class tU {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(tU.CustomRequestHeaders).length > 0 || tU.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(UU) {
        return UU = (UU = UU.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(UU) {
        return tU.SkipRequestModificationForBabylonCDN && (UU.includes("preview.babylonjs.com") || UU.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(UU) {
        const RU = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (tU._ShouldSkipRequestModifications(UU)) return {
          url: UU,
          headers: RU
        };
        for (const pU in tU.CustomRequestHeaders) {
          const UU = tU.CustomRequestHeaders[pU];
          UU && (RU[pU] = UU)
        }
        const gU = {
          setRequestHeader: (UU, gU) => {
            RU[UU] = gU
          }
        };
        for (const pU of tU.CustomRequestModifiers) {
          if (tU._ShouldSkipRequestModifications(UU)) break;
          const RU = pU(gU, UU);
          "string" === typeof RU && (UU = RU)
        }
        return {
          url: UU,
          headers: RU
        }
      }
      static async FetchAsync(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const gU = RU.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: pU,
            headers: EU
          } = tU._CollectCustomizations(tU._CleanUrl(UU), RU.headers ?? {});
          return await fetch(pU, {
            method: gU,
            headers: EU,
            body: RU.body ?? void 0
          })
        }
        return await new Promise(((pU, EU) => {
          const PU = new tU;
          PU.responseType = "arraybuffer", PU.addEventListener("readystatechange", (() => {
            if (4 === PU.readyState)
              if (PU.status >= 200 && PU.status < 300) {
                const UU = "undefined" !== typeof Headers ? new Headers : void 0,
                  RU = PU.getResponseHeader("Content-Type");
                RU && UU && UU.set("Content-Type", RU), "undefined" !== typeof Response ? pU(new Response(PU.response, {
                  status: PU.status,
                  statusText: PU.statusText,
                  headers: UU
                })) : pU({
                  ok: !0,
                  status: PU.status,
                  statusText: PU.statusText,
                  headers: {
                    get: UU => PU.getResponseHeader(UU)
                  },
                  arrayBuffer: async () => await Promise.resolve(PU.response)
                })
              } else EU(new Error(`HTTP ${PU.status} loading '${PU.requestURL}': ${PU.statusText}`))
          })), PU.open(gU, UU, RU.headers), PU.send(RU.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(UU) {
        this._xhr.onprogress = UU
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
      set responseType(UU) {
        this._xhr.responseType = UU
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(UU) {
        this._xhr.timeout = UU
      }
      addEventListener(UU, RU, gU) {
        this._xhr.addEventListener(UU, RU, gU)
      }
      removeEventListener(UU, RU, gU) {
        this._xhr.removeEventListener(UU, RU, gU)
      }
      abort() {
        this._xhr.abort()
      }
      send(UU) {
        this._xhr.send(UU)
      }
      open(UU, RU, gU) {
        const {
          url: pU,
          headers: EU
        } = tU._CollectCustomizations(RU, gU);
        this._requestURL = tU._CleanUrl(pU), this._xhr.open(UU, this._requestURL, !0);
        for (const tU in EU) this._xhr.setRequestHeader(tU, EU[tU])
      }
      setRequestHeader(UU, RU) {
        this._xhr.setRequestHeader(UU, RU)
      }
      getResponseHeader(UU) {
        return this._xhr.getResponseHeader(UU)
      }
    }
    tU.CustomRequestHeaders = {}, tU.CustomRequestModifiers = new Array, tU.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);