export const id = 289;
export const ids = [289];
export const modules = {
  41586: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => wR,
      c: () => KR,
      e: () => iR,
      f: () => rR,
      h: () => fR,
      k: () => qR,
      l: () => VR
    });
    var yR = GR(39914),
      tR = GR(41594);

    function uR(RR, JR, GR, yR) {
      switch (JR) {
        case 5120: {
          let JR = RR.getInt8(GR);
          return yR && (JR = Math.max(JR / 127, -1)), JR
        }
        case 5121: {
          let JR = RR.getUint8(GR);
          return yR && (JR /= 255), JR
        }
        case 5122: {
          let JR = RR.getInt16(GR, !0);
          return yR && (JR = Math.max(JR / 32767, -1)), JR
        }
        case 5123: {
          let JR = RR.getUint16(GR, !0);
          return yR && (JR /= 65535), JR
        }
        case 5131:
          return (0, tR.e)(RR.getUint16(GR, !0));
        case 5124:
          return RR.getInt32(GR, !0);
        case 5125:
          return RR.getUint32(GR, !0);
        case 5126:
          return RR.getFloat32(GR, !0);
        default:
          throw new Error(`Invalid component type ${JR}`)
      }
    }

    function ZR(RR, JR, GR, yR, uR) {
      switch (JR) {
        case 5120:
          yR && (uR = Math.round(127 * uR)), RR.setInt8(GR, uR);
          break;
        case 5121:
          yR && (uR = Math.round(255 * uR)), RR.setUint8(GR, uR);
          break;
        case 5122:
          yR && (uR = Math.round(32767 * uR)), RR.setInt16(GR, uR, !0);
          break;
        case 5123:
          yR && (uR = Math.round(65535 * uR)), RR.setUint16(GR, uR, !0);
          break;
        case 5131:
          RR.setUint16(GR, (0, tR.i)(uR), !0);
          break;
        case 5124:
          RR.setInt32(GR, uR, !0);
          break;
        case 5125:
          RR.setUint32(GR, uR, !0);
          break;
        case 5126:
          RR.setFloat32(GR, uR, !0);
          break;
        default:
          throw new Error(`Invalid component type ${JR}`)
      }
    }

    function qR(RR) {
      switch (RR) {
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
          throw new Error(`Invalid type '${RR}'`)
      }
    }

    function iR(RR, JR, GR, yR, tR, iR, fR, VR) {
      const KR = new Array(yR),
        wR = new Array(yR);
      if (RR instanceof Array) {
        let tR = JR / 4;
        const uR = GR / 4;
        for (let JR = 0; JR < iR; JR += yR) {
          for (let JR = 0; JR < yR; JR++) KR[JR] = wR[JR] = RR[tR + JR];
          VR(wR, JR);
          for (let JR = 0; JR < yR; JR++) KR[JR] !== wR[JR] && (RR[tR + JR] = wR[JR]);
          tR += uR
        }
      } else {
        const rR = ArrayBuffer.isView(RR) ? new DataView(RR.buffer, RR.byteOffset, RR.byteLength) : new DataView(RR),
          eR = qR(tR);
        for (let RR = 0; RR < iR; RR += yR) {
          for (let RR = 0, GR = JR; RR < yR; RR++, GR += eR) KR[RR] = wR[RR] = uR(rR, tR, GR, fR);
          VR(wR, RR);
          for (let RR = 0, GR = JR; RR < yR; RR++, GR += eR) KR[RR] !== wR[RR] && ZR(rR, tR, GR, fR, wR[RR]);
          JR += GR
        }
      }
    }

    function fR(RR, JR, GR, tR, uR, ZR, fR, VR) {
      const KR = JR * qR(GR),
        wR = fR * JR;
      if (5126 !== GR || uR !== KR) {
        const yR = new Float32Array(wR);
        return iR(RR, tR, uR, JR, GR, wR, ZR, ((RR, GR) => {
          for (let tR = 0; tR < JR; tR++) yR[GR + tR] = RR[tR]
        })), yR
      }
      if (!(RR instanceof Array || RR instanceof Float32Array) || 0 !== tR || RR.length !== wR) {
        if (RR instanceof Array) {
          const JR = tR / 4;
          return RR.slice(JR, JR + wR)
        }
        if (ArrayBuffer.isView(RR)) {
          const JR = RR.byteOffset + tR;
          return 0 !== (3 & JR) && (yR.c.Warn("Float array must be aligned to 4-bytes border"), VR = !0), VR ? new Float32Array(RR.buffer.slice(JR, JR + wR * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(RR.buffer, JR, wR)
        }
        return new Float32Array(RR, tR, wR)
      }
      return VR ? RR.slice() : RR
    }

    function VR(RR, JR, GR, tR, uR, ZR, fR) {
      const VR = qR(GR),
        KR = function(RR) {
          switch (RR) {
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
              throw new Error(`Invalid component type '${RR}'`)
          }
        }(GR),
        wR = ZR * JR;
      if (Array.isArray(RR)) {
        if (0 !== (3 & tR) || 0 !== (3 & uR)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const yR = tR / 4,
          qR = uR / 4;
        if (yR + (ZR - 1) * qR + JR > RR.length) throw new Error("Last accessed index is out of bounds.");
        if (qR < JR) throw new Error("Data stride cannot be smaller than the component size.");
        if (qR !== JR) {
          const yR = new KR(wR);
          return iR(RR, tR, uR, JR, GR, wR, !1, ((RR, GR) => {
            for (let tR = 0; tR < JR; tR++) yR[GR + tR] = RR[tR]
          })), yR
        }
        return new KR(RR.slice(yR, yR + wR))
      }
      let rR, eR = tR;
      ArrayBuffer.isView(RR) ? (rR = RR.buffer, eR += RR.byteOffset) : rR = RR;
      if (eR + (ZR - 1) * uR + JR * VR > rR.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const aR = JR * VR;
      if (uR < aR) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (uR !== aR) {
        const RR = new KR(wR),
          GR = new Uint8Array(rR, eR),
          yR = new Uint8Array(RR.buffer),
          tR = JR * VR;
        for (let JR = 0, qR = 0, iR = 0; JR < ZR; JR++, qR += uR, iR += tR) yR.set(GR.subarray(qR, qR + tR), iR);
        return RR
      }
      return 1 !== VR && 0 !== (eR & VR - 1) && (yR.c.Warn("Array must be aligned to border of element size. Data will be copied."), fR = !0), fR ? new KR(rR.slice(eR, eR + wR * VR)) : new KR(rR, eR, wR)
    }

    function KR(RR, JR, GR, tR, uR, ZR, fR, VR) {
      const KR = JR * qR(GR),
        wR = fR * JR;
      if (VR.length !== wR) throw new Error("Output length is not valid");
      if (5126 === GR && uR === KR)
        if (RR instanceof Array) {
          const JR = tR / 4;
          VR.set(RR, JR)
        } else if (ArrayBuffer.isView(RR)) {
        const JR = RR.byteOffset + tR;
        if (0 !== (3 & JR)) return yR.c.Warn("Float array must be aligned to 4-bytes border"), void VR.set(new Float32Array(RR.buffer.slice(JR, JR + wR * Float32Array.BYTES_PER_ELEMENT)));
        const GR = new Float32Array(RR.buffer, JR, wR);
        VR.set(GR)
      } else {
        const JR = new Float32Array(RR, tR, wR);
        VR.set(JR)
      } else iR(RR, tR, uR, JR, GR, wR, ZR, ((RR, GR) => {
        for (let yR = 0; yR < JR; yR++) VR[GR + yR] = RR[yR]
      }))
    }

    function wR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(RR)) {
        for (let tR = 0; tR < JR; tR++)
          if (RR[GR + tR] - yR > 65535) return !0;
        return !1
      }
      return 4 === RR.BYTES_PER_ELEMENT
    }

    function rR(RR) {
      const JR = RR.buffer;
      if (JR instanceof ArrayBuffer) return RR;
      const GR = new ArrayBuffer(RR.byteLength);
      return new Uint8Array(GR).set(new Uint8Array(JR, RR.byteOffset, RR.byteLength)), GR
    }
  },
  41410: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => BR,
      h: () => XR,
      m: () => MR,
      j: () => xR,
      q: () => NR
    });
    class yR {
      constructor() {
        this.children = []
      }
      isValid(RR) {
        return !0
      }
      process(RR, JR, GR) {
        let yR = "";
        if (this.line) {
          let GR = this.line;
          const tR = JR.processor;
          if (tR) {
            tR.lineProcessor && (GR = tR.lineProcessor(GR, JR.isFragment, JR.processingContext));
            const yR = JR.processor?.attributeKeywordName ?? "attribute",
              uR = JR.isFragment && JR.processor?.varyingFragmentKeywordName ? JR.processor?.varyingFragmentKeywordName : !JR.isFragment && JR.processor?.varyingVertexKeywordName ? JR.processor?.varyingVertexKeywordName : "varying";
            if (!JR.isFragment && tR.attributeProcessor && this.line.startsWith(yR)) GR = tR.attributeProcessor(this.line, RR, JR.processingContext);
            else if (tR.varyingProcessor && (tR.varyingCheck?.(this.line, JR.isFragment) || !tR.varyingCheck && this.line.startsWith(uR))) GR = tR.varyingProcessor(this.line, JR.isFragment, RR, JR.processingContext);
            else if (tR.uniformProcessor && tR.uniformRegexp && tR.uniformRegexp.test(this.line)) JR.lookForClosingBracketForUniformBuffer || (GR = tR.uniformProcessor(this.line, JR.isFragment, RR, JR.processingContext));
            else if (tR.uniformBufferProcessor && tR.uniformBufferRegexp && tR.uniformBufferRegexp.test(this.line)) JR.lookForClosingBracketForUniformBuffer || (GR = tR.uniformBufferProcessor(this.line, JR.isFragment, JR.processingContext), JR.lookForClosingBracketForUniformBuffer = !0);
            else if (tR.textureProcessor && tR.textureRegexp && tR.textureRegexp.test(this.line)) GR = tR.textureProcessor(this.line, JR.isFragment, RR, JR.processingContext);
            else if ((tR.uniformProcessor || tR.uniformBufferProcessor) && this.line.startsWith("uniform") && !JR.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? tR.uniformProcessor && (GR = tR.uniformProcessor(this.line, JR.isFragment, RR, JR.processingContext)) : tR.uniformBufferProcessor && (GR = tR.uniformBufferProcessor(this.line, JR.isFragment, JR.processingContext), JR.lookForClosingBracketForUniformBuffer = !0)
            }
            JR.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (JR.lookForClosingBracketForUniformBuffer = !1, tR.endOfUniformBufferProcessor && (GR = tR.endOfUniformBufferProcessor(this.line, JR.isFragment, JR.processingContext)))
          }
          yR += GR + "\n"
        }
        for (const tR of this.children) yR += tR.process(RR, JR, GR);
        return this.additionalDefineKey && (RR[this.additionalDefineKey] = this.additionalDefineValue || "true", GR[this.additionalDefineKey] = RR[this.additionalDefineKey]), yR
      }
    }
    class tR {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(RR) {
        this._lines.length = 0;
        for (const JR of RR) {
          if (!JR || "\r" === JR) continue;
          if ("#" === JR[0]) {
            this._lines.push(JR);
            continue
          }
          const RR = JR.trim();
          if (!RR) continue;
          if (RR.startsWith("//")) {
            this._lines.push(JR);
            continue
          }
          const GR = RR.indexOf(";");
          if (-1 === GR) this._lines.push(RR);
          else if (GR === RR.length - 1) RR.length > 1 && this._lines.push(RR);
          else {
            const RR = JR.split(";");
            for (let JR = 0; JR < RR.length; JR++) {
              let GR = RR[JR];
              GR && (GR = GR.trim(), GR && this._lines.push(GR + (JR !== RR.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class uR extends yR {
      process(RR, JR, GR) {
        for (let yR = 0; yR < this.children.length; yR++) {
          const tR = this.children[yR];
          if (tR.isValid(RR)) return tR.process(RR, JR, GR)
        }
        return ""
      }
    }
    class ZR extends yR {
      isValid(RR) {
        return this.testExpression.isTrue(RR)
      }
    }
    class qR {
      isTrue(RR) {
        return !0
      }
      static postfixToInfix(RR) {
        const JR = [];
        for (const GR of RR)
          if (void 0 === qR._OperatorPriority[GR]) JR.push(GR);
          else {
            const RR = JR[JR.length - 1],
              yR = JR[JR.length - 2];
            JR.length -= 2, JR.push(`(${yR}${GR}${RR})`)
          } return JR[JR.length - 1]
      }
      static infixToPostfix(RR) {
        const JR = qR._InfixToPostfixCache.get(RR);
        if (JR) return JR.accessTime = Date.now(), JR.result;
        if (!RR.includes("&&") && !RR.includes("||") && !RR.includes(")") && !RR.includes("(")) return [RR];
        const GR = [];
        let yR = -1;
        const tR = () => {
            VR = VR.trim(), "" !== VR && (GR.push(VR), VR = "")
          },
          uR = RR => {
            yR < qR._Stack.length - 1 && (qR._Stack[++yR] = RR)
          },
          ZR = () => qR._Stack[yR],
          iR = () => -1 === yR ? "!!INVALID EXPRESSION!!" : qR._Stack[yR--];
        let fR = 0,
          VR = "";
        for (; fR < RR.length;) {
          const JR = RR.charAt(fR),
            KR = fR < RR.length - 1 ? RR.substring(fR, 2 + fR) : "";
          if ("(" === JR) VR = "", uR(JR);
          else if (")" === JR) {
            for (tR(); - 1 !== yR && "(" !== ZR();) GR.push(iR());
            iR()
          } else if (qR._OperatorPriority[KR] > 1) {
            for (tR(); - 1 !== yR && qR._OperatorPriority[ZR()] >= qR._OperatorPriority[KR];) GR.push(iR());
            uR(KR), fR++
          } else VR += JR;
          fR++
        }
        for (tR(); - 1 !== yR;) "(" === ZR() ? iR() : GR.push(iR());
        return qR._InfixToPostfixCache.size >= qR.InfixToPostfixCacheLimitSize && qR.ClearCache(), qR._InfixToPostfixCache.set(RR, {
          result: GR,
          accessTime: Date.now()
        }), GR
      }
      static ClearCache() {
        const RR = Array.from(qR._InfixToPostfixCache.entries()).sort(((RR, JR) => RR[1].accessTime - JR[1].accessTime));
        for (let JR = 0; JR < qR.InfixToPostfixCacheCleanupSize; JR++) qR._InfixToPostfixCache.delete(RR[JR][0])
      }
    }
    qR.InfixToPostfixCacheLimitSize = 5e4, qR.InfixToPostfixCacheCleanupSize = 25e3, qR._InfixToPostfixCache = new Map, qR._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, qR._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class iR extends qR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = RR, this.not = JR
      }
      isTrue(RR) {
        let JR = void 0 !== RR[this.define];
        return this.not && (JR = !JR), JR
      }
    }
    class fR extends qR {
      isTrue(RR) {
        return this.leftOperand.isTrue(RR) || this.rightOperand.isTrue(RR)
      }
    }
    class VR extends qR {
      isTrue(RR) {
        return this.leftOperand.isTrue(RR) && this.rightOperand.isTrue(RR)
      }
    }
    class KR extends qR {
      constructor(RR, JR, GR) {
        super(), this.define = RR, this.operand = JR, this.testValue = GR
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(RR) {
        let JR = !1;
        const GR = parseInt(void 0 != RR[this.define] ? RR[this.define] : this.define),
          yR = parseInt(void 0 != RR[this.testValue] ? RR[this.testValue] : this.testValue);
        if (isNaN(GR) || isNaN(yR)) return !1;
        switch (this.operand) {
          case ">":
            JR = GR > yR;
            break;
          case "<":
            JR = GR < yR;
            break;
          case "<=":
            JR = GR <= yR;
            break;
          case ">=":
            JR = GR >= yR;
            break;
          case "==":
            JR = GR === yR;
            break;
          case "!=":
            JR = GR !== yR
        }
        return JR
      }
    }
    var wR = GR(41407),
      rR = GR(41399);
    const eR = /defined\s*?\((.+?)\)/g,
      aR = /defined\s*?\[(.+?)\]/g,
      LR = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      nR = /__decl__/,
      UR = /light\{X\}.(\w*)/g,
      WR = /\{X\}/g,
      AR = [],
      CR = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function XR(RR) {
      RR.processor && RR.processor.initializeShaders && RR.processor.initializeShaders(RR.processingContext)
    }

    function MR(RR, JR, GR, yR) {
      JR.processor?.preProcessShaderCode && (RR = JR.processor.preProcessShaderCode(RR, JR.isFragment)), xR(RR, JR, (RR => {
        JR.processCodeAfterIncludes && (RR = JR.processCodeAfterIncludes(JR.isFragment ? "fragment" : "vertex", RR, JR.defines));
        const tR = function(RR, JR, GR) {
          let yR = function(RR, JR) {
            if (JR.processor?.noPrecision) return RR;
            const GR = JR.shouldUseHighPrecisionShader; - 1 === RR.indexOf("precision highp float") ? RR = GR ? "precision highp float;\n" + RR : "precision mediump float;\n" + RR : GR || (RR = RR.replace("precision highp float", "precision mediump float"));
            return RR
          }(RR, JR);
          if (!JR.processor) return yR;
          if (0 === JR.processor.shaderLanguage && -1 !== yR.indexOf("#version 3") && (yR = yR.replace("#version 300 es", ""), !JR.processor.parseGLES3)) return yR;
          const tR = JR.defines,
            uR = OR(JR, GR);
          JR.processor.preProcessor && (yR = JR.processor.preProcessor(yR, tR, uR, JR.isFragment, JR.processingContext));
          const ZR = {};
          yR = vR(yR, uR, JR, ZR), JR.processor.postProcessor && (yR = JR.processor.postProcessor(yR, tR, JR.isFragment, JR.processingContext, GR ? {
            drawBuffersExtensionDisabled: !GR.getCaps().drawBuffersExtension
          } : {}, uR, ZR));
          GR?._features.needShaderCodeInlining && (yR = GR.inlineShaderCode(yR));
          return yR
        }(RR, JR, yR);
        GR(tR, RR)
      }))
    }

    function BR(RR, JR, GR) {
      return GR.processor && GR.processor.finalizeShaders ? GR.processor.finalizeShaders(RR, JR, GR.processingContext) : {
        vertexCode: RR,
        fragmentCode: JR
      }
    }

    function lR(RR) {
      const JR = /defined\((.+)\)/.exec(RR);
      if (JR && JR.length) return new iR(JR[1].trim(), "!" === RR[0]);
      const GR = ["==", "!=", ">=", "<=", "<", ">"];
      let yR = "",
        tR = 0;
      for (yR of GR)
        if (tR = RR.indexOf(yR), tR > -1) break;
      if (-1 === tR) return new iR(RR);
      const uR = RR.substring(0, tR).trim(),
        ZR = RR.substring(tR + yR.length).trim();
      return new KR(uR, yR, ZR)
    }

    function pR(RR, JR) {
      const GR = new ZR,
        yR = RR.substring(0, JR);
      let tR = RR.substring(JR);
      return tR = tR.substring(0, (tR.indexOf("//") + 1 || tR.length + 1) - 1).trim(), GR.testExpression = "#ifdef" === yR ? new iR(tR) : "#ifndef" === yR ? new iR(tR, !0) : function(RR) {
        RR = RR.replace(eR, "defined[$1]");
        const JR = qR.infixToPostfix(RR),
          GR = [];
        for (const tR of JR)
          if ("||" !== tR && "&&" !== tR) GR.push(tR);
          else if (GR.length >= 2) {
          let RR = GR[GR.length - 1],
            JR = GR[GR.length - 2];
          GR.length -= 2;
          const yR = "&&" == tR ? new VR : new fR;
          "string" === typeof RR && (RR = RR.replace(aR, "defined($1)")), "string" === typeof JR && (JR = JR.replace(aR, "defined($1)")), yR.leftOperand = "string" === typeof JR ? lR(JR) : JR, yR.rightOperand = "string" === typeof RR ? lR(RR) : RR, GR.push(yR)
        }
        let yR = GR[GR.length - 1];
        return "string" === typeof yR && (yR = yR.replace(aR, "defined($1)")), "string" === typeof yR ? lR(yR) : yR
      }(tR), GR
    }

    function gR(RR, JR, GR, tR) {
      let uR;
      for (; bR(RR, GR, tR);) {
        uR = RR.currentLine;
        const ZR = uR.substring(0, 5).toLowerCase();
        if ("#else" === ZR) {
          const GR = new yR;
          return JR.children.push(GR), void bR(RR, GR, tR)
        }
        if ("#elif" === ZR) {
          const RR = pR(uR, 5);
          JR.children.push(RR), GR = RR
        }
      }
    }

    function bR(RR, JR, GR) {
      for (; RR.canRead;) {
        RR.lineIndex++;
        const tR = RR.currentLine;
        if (tR.indexOf("#") >= 0) {
          const yR = CR.exec(tR);
          if (yR && yR.length) {
            switch (yR[0]) {
              case "#ifdef": {
                const yR = new uR;
                JR.children.push(yR);
                const ZR = pR(tR, 6);
                yR.children.push(ZR), gR(RR, yR, ZR, GR);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const yR = new uR;
                JR.children.push(yR);
                const ZR = pR(tR, 7);
                yR.children.push(ZR), gR(RR, yR, ZR, GR);
                break
              }
              case "#if": {
                const yR = new uR,
                  ZR = pR(tR, 3);
                JR.children.push(yR), yR.children.push(ZR), gR(RR, yR, ZR, GR);
                break
              }
            }
            continue
          }
        }
        const ZR = new yR;
        if (ZR.line = tR, JR.children.push(ZR), "#" === tR[0] && "d" === tR[1]) {
          const RR = tR.replace(";", "").split(" ");
          ZR.additionalDefineKey = RR[1], 3 === RR.length && (ZR.additionalDefineValue = RR[2])
        }
      }
      return !1
    }

    function vR(RR, JR, GR, uR) {
      const ZR = new yR,
        qR = new tR;
      return qR.lineIndex = -1, qR.lines = RR.split("\n"), bR(qR, ZR, uR), ZR.process(JR, GR, uR)
    }

    function OR(RR, JR) {
      const GR = RR.defines,
        yR = {};
      for (const tR of GR) {
        const RR = tR.replace("#define", "").replace(";", "").trim().split(" ");
        yR[RR[0]] = RR.length > 1 ? RR[1] : ""
      }
      return 0 === RR.processor?.shaderLanguage && (yR.GL_ES = "true"), yR.__VERSION__ = RR.version, yR[RR.platformName] = "true", (0, rR.j)(yR, JR?.isNDCHalfZRange, JR?.LtR, JR?.useExactSrgbConversions), yR
    }

    function xR(RR, JR, GR) {
      let yR;
      for (AR.length = 0; null !== (yR = LR.exec(RR));) AR.push(yR);
      let tR = [RR],
        uR = !1;
      for (const qR of AR) {
        let RR = qR[1];
        if (-1 !== RR.indexOf("__decl__") && (RR = RR.replace(nR, ""), JR.supportsUniformBuffers && (RR = RR.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), RR += "Declaration"), !JR.includesShadersStore[RR]) {
          const yR = JR.shadersRepository + "ShadersInclude/" + RR + ".fx";
          return void NR.loadFile(yR, (yR => {
            JR.includesShadersStore[RR] = yR, xR(tR.join(""), JR, GR)
          }))
        } {
          let GR = JR.includesShadersStore[RR];
          if (qR[2]) {
            const RR = qR[3].split(",");
            for (let JR = 0; JR < RR.length; JR += 2) {
              const yR = new RegExp(RR[JR], "g"),
                tR = RR[JR + 1];
              GR = GR.replace(yR, tR)
            }
          }
          if (qR[4]) {
            const RR = qR[5];
            if (-1 !== RR.indexOf("..")) {
              const yR = RR.split(".."),
                tR = parseInt(yR[0]);
              let uR = parseInt(yR[1]),
                ZR = GR.slice(0);
              GR = "", isNaN(uR) && (uR = JR.indexParameters[yR[1]]);
              for (let RR = tR; RR < uR; RR++) JR.supportsUniformBuffers || (ZR = ZR.replace(UR, ((RR, JR) => JR + "{X}"))), GR += ZR.replace(WR, RR.toString()) + "\n"
            } else JR.supportsUniformBuffers || (GR = GR.replace(UR, ((RR, JR) => JR + "{X}"))), GR = GR.replace(WR, RR)
          }
          const yR = [];
          for (const RR of tR) {
            const JR = RR.split(qR[0]);
            for (let RR = 0; RR < JR.length - 1; RR++) yR.push(JR[RR]), yR.push(GR);
            yR.push(JR[JR.length - 1])
          }
          tR = yR, uR = uR || GR.indexOf("#include<") >= 0 || GR.indexOf("#include <") >= 0
        }
      }
      AR.length = 0;
      const ZR = tR.join("");
      uR ? xR(ZR.toString(), JR, GR) : GR(ZR)
    }
    const NR = {
      loadFile: (RR, JR, GR, yR, tR, uR) => {
        throw (0, wR.j)("FileTools")
      }
    }
  },
  41399: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR,
      f: () => uR,
      j: () => qR,
      k: () => ZR,
      m: () => iR
    });
    var yR = GR(41407);
    const tR = {};

    function uR(RR, JR) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (JR ? JR + "\n" : "") + RR
    }

    function ZR(RR, JR, GR, uR, ZR, qR, iR) {
      const fR = iR || tR.loadFile;
      if (!fR) throw (0, yR.j)("FileTools");
      return fR(RR, JR, GR, uR, ZR, qR)
    }

    function qR(RR, JR, GR, yR) {
      if (RR) return JR ? RR.IS_NDC_HALF_ZRANGE = "" : delete RR.IS_NDC_HALF_ZRANGE, GR ? RR.USE_REVERSE_DEPTHBUFFER = "" : delete RR.USE_REVERSE_DEPTHBUFFER, void(yR ? RR.USE_EXACT_SRGB_CONVERSIONS = "" : delete RR.USE_EXACT_SRGB_CONVERSIONS);
      {
        let RR = "";
        return JR && (RR += "#define IS_NDC_HALF_ZRANGE"), GR && (RR && (RR += "\n"), RR += "#define USE_REVERSE_DEPTHBUFFER"), yR && (RR && (RR += "\n"), RR += "#define USE_EXACT_SRGB_CONVERSIONS"), RR
      }
    }

    function iR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        yR = arguments.length > 3 ? arguments[3] : void 0;
      switch (RR) {
        case 3: {
          const RR = new Int8Array(JR);
          return yR && RR.set(new Int8Array(yR)), RR
        }
        case 0: {
          const RR = new Uint8Array(JR);
          return yR && RR.set(new Uint8Array(yR)), RR
        }
        case 4: {
          const RR = "number" !== typeof JR ? new Int16Array(JR) : new Int16Array(GR ? JR / 2 : JR);
          return yR && RR.set(new Int16Array(yR)), RR
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const RR = "number" !== typeof JR ? new Uint16Array(JR) : new Uint16Array(GR ? JR / 2 : JR);
          return yR && RR.set(new Uint16Array(yR)), RR
        }
        case 6: {
          const RR = "number" !== typeof JR ? new Int32Array(JR) : new Int32Array(GR ? JR / 4 : JR);
          return yR && RR.set(new Int32Array(yR)), RR
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const RR = "number" !== typeof JR ? new Uint32Array(JR) : new Uint32Array(GR ? JR / 4 : JR);
          return yR && RR.set(new Uint32Array(yR)), RR
        }
        case 1: {
          const RR = "number" !== typeof JR ? new Float32Array(JR) : new Float32Array(GR ? JR / 4 : JR);
          return yR && RR.set(new Float32Array(yR)), RR
        }
      }
      const tR = new Uint8Array(JR);
      return yR && tR.set(new Uint8Array(yR)), tR
    }
  },
  41407: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => fR,
      e: () => VR,
      f: () => iR,
      j: () => tR
    });
    const yR = {};

    function tR(RR) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !yR[RR]) return yR[RR] = !0, `${RR} needs to be imported before as it contains a side-effect required by your code.`
    }
    const uR = {};
    let ZR = !1,
      qR = 0;

    function iR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const yR = function() {
        if ((GR || ZR) && 0 === qR) {
          const GR = `${RR}.${JR}`;
          uR[GR] || (uR[GR] = !0, console.warn(`[Babylon.js] ${GR}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return yR.__isSideEffectStub = !0, yR
    }

    function fR(RR) {
      return !!RR && !RR.__isSideEffectStub
    }

    function VR(RR, JR) {
      return {
        get() {},
        set(RR) {
          Object.defineProperty(this, JR, {
            value: RR,
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
  41395: (RR, JR, GR) => {
    function yR() {
      return "undefined" !== typeof window
    }

    function tR() {
      return "undefined" !== typeof navigator
    }

    function uR() {
      return "undefined" !== typeof document
    }

    function ZR(RR) {
      let JR = "",
        GR = RR.firstChild;
      for (; GR;) 3 === GR.nodeType && (JR += GR.textContent), GR = GR.nextSibling;
      return JR
    }
    GR.d(JR, {
      d: () => ZR,
      e: () => uR,
      i: () => tR,
      m: () => yR
    })
  },
  41573: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR,
      g: () => tR,
      i: () => uR
    });
    class yR extends Error {}
    yR._setPrototypeOf = Object.setPrototypeOf || ((RR, JR) => (RR.__proto__ = JR, RR));
    const tR = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class uR extends yR {
      constructor(RR, JR, GR) {
        super(RR), this.errorCode = JR, this.innerError = GR, this.name = "RuntimeError", yR._setPrototypeOf(this, uR.prototype)
      }
    }
  },
  41564: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => OR,
      e: () => WR,
      h: () => pR,
      l: () => bR,
      m: () => BR,
      q: () => XR,
      t: () => MR,
      u: () => oR,
      y: () => lR,
      A: () => AR
    });
    var yR = GR(41568),
      tR = GR(41395),
      uR = GR(38233);
    class ZR {}
    ZR.FilesToLoad = {};
    var qR = GR(41573),
      iR = GR(41581),
      fR = GR(38224),
      VR = GR(41399),
      KR = GR(41410),
      wR = GR(39914),
      rR = GR(41415),
      eR = GR(41586);
    const aR = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class LR extends qR.i {
      constructor(RR, JR) {
        super(RR, qR.g.LoadFileError), this.name = "LoadFileError", qR.d._setPrototypeOf(this, LR.prototype), JR instanceof yR.c ? this.request = JR : this.file = JR
      }
    }
    class nR extends qR.i {
      constructor(RR, JR) {
        super(RR, qR.g.RequestFileError), this.request = JR, this.name = "RequestFileError", qR.d._setPrototypeOf(this, nR.prototype)
      }
    }
    class UR extends qR.i {
      constructor(RR, JR) {
        super(RR, qR.g.ReadFileError), this.file = JR, this.name = "ReadFileError", qR.d._setPrototypeOf(this, UR.prototype)
      }
    }
    const WR = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (GR, yR, tR) => 0 !== yR.status || tR >= RR || -1 !== GR.indexOf("file:") ? -1 : Math.pow(2, tR) * JR
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: RR => RR,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: RR => RR,
        CleanUrl: RR => RR = RR.replace(/#/gm, "%23")
      },
      AR = (RR, JR) => {
        if ((!RR || 0 !== RR.indexOf("data:")) && WR.CorsBehavior)
          if ("string" === typeof WR.CorsBehavior || WR.CorsBehavior instanceof String) JR.crossOrigin = WR.CorsBehavior;
          else {
            const GR = WR.CorsBehavior(RR);
            GR && (JR.crossOrigin = GR)
          }
      },
      CR = {
        getRequiredSize: null
      },
      XR = function(RR, JR, GR, tR) {
        let uR, qR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          VR = arguments.length > 5 ? arguments[5] : void 0,
          KR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : fR.c.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !KR?._features.forceBitmapOverHTMLImageElement) return GR("LoadImage is only supported in web or BabylonNative environments."), null;
        if (KR?._features.forceBitmapOverHTMLImageElement && "string" !== typeof RR && "undefined" !== typeof Blob) {
          let yR;
          if (RR instanceof Blob) yR = RR;
          else {
            const JR = RR instanceof ArrayBuffer ? RR : (0, eR.f)(RR);
            yR = new Blob([JR], {
              type: qR
            })
          }
          return KR.createImageBitmap(yR, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...VR
          }).then(JR).catch((JR => {
            GR && GR("Error while trying to load image: " + RR, JR)
          })), null
        }
        let wR = !1;
        if (RR instanceof ArrayBuffer || ArrayBuffer.isView(RR))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let JR;
            JR = RR instanceof ArrayBuffer ? RR : (0, eR.f)(RR), uR = URL.createObjectURL(new Blob([JR], {
              type: qR
            })), wR = !0
          } else uR = `data:${qR};base64,` + (0, iR.g)(RR);
        else RR instanceof Blob ? (uR = URL.createObjectURL(RR), wR = !0) : (uR = WR.CleanUrl(RR), uR = WR.PreprocessUrl(uR));
        const rR = JR => {
          if (GR) {
            const yR = uR || RR.toString();
            GR(`Error while trying to load image: ${0===yR.indexOf("http")||yR.length<=128?yR:yR.slice(0,128)+"..."}`, JR)
          }
        };
        if (KR?._features.forceBitmapOverHTMLImageElement) return BR(uR, (yR => {
          KR.createImageBitmap(new Blob([yR], {
            type: qR
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...VR
          }).then((RR => {
            JR(RR), wR && URL.revokeObjectURL(uR)
          })).catch((JR => {
            GR && GR("Error while trying to load image: " + RR, JR)
          }))
        }), void 0, tR || void 0, !0, ((RR, JR) => {
          rR(JR)
        })), null;
        const aR = new Image;
        if (CR.getRequiredSize) {
          const JR = CR.getRequiredSize(RR);
          JR.width && (aR.width = JR.width), JR.height && (aR.height = JR.height)
        }
        AR(uR, aR);
        const LR = [],
          nR = () => {
            for (const RR of LR) RR.target.removeEventListener(RR.name, RR.handler);
            LR.length = 0
          };
        LR.push({
          target: aR,
          name: "load",
          handler: () => {
            nR(), JR(aR), wR && aR.src && URL.revokeObjectURL(aR.src)
          }
        }), LR.push({
          target: aR,
          name: "error",
          handler: RR => {
            nR(), rR(RR), wR && aR.src && URL.revokeObjectURL(aR.src)
          }
        }), LR.push({
          target: document,
          name: "securitypolicyviolation",
          handler: RR => {
            if (RR.blockedURI !== aR.src || "fK" === RR.disposition) return;
            nR();
            const JR = new Error(`CSP violation of policy ${RR.effectiveDirective} ${RR.blockedURI}. Current policy is ${RR.originalPolicy}`);
            fR.c.UseFallbackTexture = !1, rR(JR), wR && aR.src && URL.revokeObjectURL(aR.src), aR.src = ""
          }
        }), (() => {
          for (const RR of LR) RR.target.addEventListener(RR.name, RR.handler)
        })();
        const UR = "blob:" === uR.substring(0, 5),
          XR = "data:" === uR.substring(0, 5),
          MR = () => {
            UR || XR || !yR.c.IsCustomRequestAvailable ? aR.src = uR : BR(uR, ((RR, JR, GR) => {
              const yR = new Blob([RR], {
                  type: !qR && GR ? GR : qR
                }),
                tR = URL.createObjectURL(yR);
              wR = !0, aR.src = tR
            }), void 0, tR || void 0, !0, ((RR, JR) => {
              rR(JR)
            }))
          },
          lR = () => {
            tR && tR.loadImage(uR, aR)
          };
        if (!UR && !XR && tR && tR.enableTexturesOffline) tR.open(lR, MR);
        else {
          if (-1 !== uR.indexOf("file:")) {
            const RR = decodeURIComponent(uR.substring(5).toLowerCase());
            if (ZR.FilesToLoad[RR] && "undefined" !== typeof URL) {
              try {
                let JR;
                try {
                  JR = URL.createObjectURL(ZR.FilesToLoad[RR])
                } catch (pR) {
                  JR = URL.createObjectURL(ZR.FilesToLoad[RR])
                }
                aR.src = JR, wR = !0
              } catch (gR) {
                aR.src = ""
              }
              return aR
            }
          }
          MR()
        }
        return aR
      },
      MR = (RR, JR, GR, yR, tR) => {
        const ZR = new FileReader,
          qR = {
            onCompleteObservable: new uR.b,
            abort: () => ZR.abort()
          };
        return ZR.onloadend = () => qR.onCompleteObservable.notifyObservers(qR), tR && (ZR.onerror = () => {
          tR(new UR(`Unable to read ${RR.name}`, RR))
        }), ZR.onload = RR => {
          JR(RR.target.result)
        }, GR && (ZR.onprogress = GR), yR ? ZR.readAsArrayBuffer(RR) : ZR.readAsText(RR), qR
      },
      BR = (RR, JR, GR, yR, tR, iR, fR) => {
        if (RR.name) return MR(RR, JR, GR, tR, iR ? RR => {
          iR(void 0, RR)
        } : void 0);
        const VR = RR;
        if (-1 !== VR.indexOf("file:")) {
          let RR = decodeURIComponent(VR.substring(5).toLowerCase());
          0 === RR.indexOf("./") && (RR = RR.substring(2));
          const yR = ZR.FilesToLoad[RR];
          if (yR) return MR(yR, JR, GR, tR, iR ? RR => iR(void 0, new LR(RR.message, RR.file)) : void 0)
        }
        const {
          match: KR,
          type: eR
        } = vR(VR);
        if (KR) {
          const RR = {
            onCompleteObservable: new uR.b,
            abort: () => () => {}
          };
          try {
            const RR = tR ? OR(VR) : xR(VR);
            JR(RR, void 0, eR)
          } catch (qR) {
            iR ? iR(void 0, qR) : wR.c.Error(qR.message || "Failed to parse the Data URL")
          }
          return rR.e.SetImmediate((() => {
            RR.onCompleteObservable.notifyObservers(RR)
          })), RR
        }
        return lR(VR, ((RR, GR) => {
          JR(RR, GR?.responseURL, GR?.getResponseHeader("content-type"))
        }), GR, yR, tR, iR ? RR => {
          iR(RR.request, new LR(RR.message, RR.request))
        } : void 0, fR)
      },
      lR = (RR, JR, GR, ZR, qR, iR, VR) => {
        null !== ZR && (ZR ?? (ZR = fR.c.LastCreatedScene?.offlineProvider)), RR = WR.CleanUrl(RR), RR = WR.PreprocessUrl(RR);
        const KR = WR.BaseUrl + RR;
        let rR = !1;
        const eR = {
            onCompleteObservable: new uR.b,
            abort: () => rR = !0
          },
          aR = () => {
            let RR, uR = new yR.c,
              ZR = null;
            const fR = () => {
              uR && (GR && uR.removeEventListener("progress", GR), RR && uR.removeEventListener("readystatechange", RR), uR.removeEventListener("loadend", aR))
            };
            let aR = () => {
              fR(), eR.onCompleteObservable.notifyObservers(eR), eR.onCompleteObservable.clear(), GR = void 0, RR = null, aR = null, iR = void 0, VR = void 0, JR = void 0
            };
            eR.abort = () => {
              rR = !0, aR && aR(), uR && uR.readyState !== (XMLHttpRequest.DONE || 4) && uR.abort(), null !== ZR && (clearTimeout(ZR), ZR = null), uR = null
            };
            const LR = RR => {
                const JR = RR.message || "Unknown error";
                iR && uR ? iR(new nR(JR, uR)) : wR.c.Error(JR)
              },
              UR = wR => {
                if (uR) {
                  if (uR.open("GET", KR), VR) try {
                    VR(uR)
                  } catch (eR) {
                    return void LR(eR)
                  }
                  qR && (uR.responseType = "arraybuffer"), GR && uR.addEventListener("progress", GR), aR && uR.addEventListener("loadend", aR), RR = () => {
                    if (!rR && uR && uR.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (RR && uR.removeEventListener("readystatechange", RR), uR.status >= 200 && uR.status < 300 || 0 === uR.status && (!(0, tR.m)() || gR())) {
                        const RR = qR ? uR.response : uR.responseText;
                        if (null !== RR) {
                          try {
                            JR && JR(RR, uR)
                          } catch (eR) {
                            LR(eR)
                          }
                          return
                        }
                      }
                      const GR = WR.DefaultRetryStrategy;
                      if (GR) {
                        const RR = GR(KR, uR, wR);
                        if (-1 !== RR) return fR(), uR = new yR.c, void(ZR = setTimeout((() => UR(wR + 1)), RR))
                      }
                      const VR = new nR("Error status: " + uR.status + " " + uR.statusText + " - Unable to load " + KR, uR);
                      iR && iR(VR)
                    }
                  }, uR.addEventListener("readystatechange", RR), uR.send()
                }
              };
            UR(0)
          };
        if (ZR && ZR.enableSceneOffline && !RR.startsWith("blob:")) {
          const yR = RR => {
              RR && RR.status > 400 ? iR && iR(RR) : aR()
            },
            tR = () => {
              ZR && ZR.loadFile(WR.BaseUrl + RR, (RR => {
                !rR && JR && JR(RR), eR.onCompleteObservable.notifyObservers(eR)
              }), GR ? RR => {
                !rR && GR && GR(RR)
              } : void 0, yR, qR)
            };
          ZR.open(tR, yR)
        } else aR();
        return eR
      },
      pR = RR => {
        const {
          match: JR,
          type: GR
        } = vR(RR);
        if (JR) return GR || void 0;
        const yR = RR.lastIndexOf(".");
        switch (RR.substring(yR + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "dD":
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
      gR = () => "undefined" !== typeof location && "file:" === location.protocol,
      bR = RR => aR.test(RR),
      vR = RR => {
        const JR = aR.exec(RR);
        if (null === JR || 0 === JR.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: JR[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function OR(RR) {
      return (0, iR.c)(RR.split(",")[1])
    }
    const xR = RR => (0, iR.f)(RR.split(",")[1]);
    let NR;
    const DR = (RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR) => {
      NR = {
        DecodeBase64UrlToBinary: RR,
        DecodeBase64UrlToString: JR,
        DefaultRetryStrategy: GR.DefaultRetryStrategy,
        BaseUrl: GR.BaseUrl,
        CorsBehavior: GR.CorsBehavior,
        PreprocessUrl: GR.PreprocessUrl,
        IsBase64DataUrl: yR,
        IsFileURL: tR,
        LoadFile: uR,
        LoadImage: ZR,
        ReadFile: qR,
        RequestFile: iR,
        SetCorsBehavior: fR
      }, Object.defineProperty(NR, "DefaultRetryStrategy", {
        get: function() {
          return GR.DefaultRetryStrategy
        },
        set: function(RR) {
          GR.DefaultRetryStrategy = RR
        }
      }), Object.defineProperty(NR, "BaseUrl", {
        get: function() {
          return GR.BaseUrl
        },
        set: function(RR) {
          GR.BaseUrl = RR
        }
      }), Object.defineProperty(NR, "PreprocessUrl", {
        get: function() {
          return GR.PreprocessUrl
        },
        set: function(RR) {
          GR.PreprocessUrl = RR
        }
      }), Object.defineProperty(NR, "CorsBehavior", {
        get: function() {
          return GR.CorsBehavior
        },
        set: function(RR) {
          GR.CorsBehavior = RR
        }
      })
    };
    let HR = !1;

    function oR() {
      HR || (HR = !0, DR(OR, xR, WR, bR, gR, BR, XR, MR, lR, AR), VR.d.loadFile = BR, VR.d.loadImage = XR, KR.q.loadFile = BR)
    }
  },
  41594: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      g: () => uR,
      i: () => ZR
    });
    let yR = null;

    function tR() {
      if (yR) return yR;
      const RR = new ArrayBuffer(4),
        JR = new Float32Array(RR),
        GR = new Uint32Array(RR),
        tR = new Uint32Array(512),
        uR = new Uint32Array(512);
      for (let yR = 0; yR < 256; ++yR) {
        const RR = yR - 127;
        RR < -24 ? (tR[yR] = 0, tR[256 | yR] = 32768, uR[yR] = 24, uR[256 | yR] = 24) : RR < -14 ? (tR[yR] = 1024 >> -RR - 14, tR[256 | yR] = 1024 >> -RR - 14 | 32768, uR[yR] = -RR - 1, uR[256 | yR] = -RR - 1) : RR <= 15 ? (tR[yR] = RR + 15 << 10, tR[256 | yR] = RR + 15 << 10 | 32768, uR[yR] = 13, uR[256 | yR] = 13) : RR < 128 ? (tR[yR] = 31744, tR[256 | yR] = 64512, uR[yR] = 24, uR[256 | yR] = 24) : (tR[yR] = 31744, tR[256 | yR] = 64512, uR[yR] = 13, uR[256 | yR] = 13)
      }
      const ZR = new Uint32Array(2048),
        qR = new Uint32Array(64),
        iR = new Uint32Array(64);
      for (let yR = 1; yR < 1024; ++yR) {
        let RR = yR << 13,
          JR = 0;
        for (; 0 === (8388608 & RR);) RR <<= 1, JR -= 8388608;
        RR &= -8388609, JR += 947912704, ZR[yR] = RR | JR
      }
      for (let yR = 1024; yR < 2048; ++yR) ZR[yR] = 939524096 + (yR - 1024 << 13);
      for (let yR = 1; yR < 31; ++yR) qR[yR] = yR << 23;
      qR[31] = 1199570944, qR[32] = 2147483648;
      for (let yR = 33; yR < 63; ++yR) qR[yR] = 2147483648 + (yR - 32 << 23);
      qR[63] = 3347054592;
      for (let yR = 1; yR < 64; ++yR) 32 !== yR && (iR[yR] = 1024);
      return yR = {
        floatView: JR,
        uint32View: GR,
        baseTable: tR,
        shiftTable: uR,
        mantissaTable: ZR,
        exponentTable: qR,
        offsetTable: iR
      }, yR
    }
    const uR = 65504;

    function ZR(RR) {
      const JR = tR();
      JR.floatView[0] = RR;
      const GR = JR.uint32View[0],
        yR = GR >> 23 & 511;
      return JR.baseTable[yR] + ((8388607 & GR) >> JR.shiftTable[yR])
    }

    function qR(RR) {
      const JR = tR();
      return JR.uint32View[0] = JR.mantissaTable[JR.offsetTable[RR >> 10] + (1023 & RR)] + JR.exponentTable[RR >> 10], JR.floatView[0]
    }
  },
  41581: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      f: () => tR,
      g: () => yR
    });
    const yR = RR => {
        const JR = ArrayBuffer.isView(RR) ? new Uint8Array(RR.buffer, RR.byteOffset, RR.byteLength) : new Uint8Array(RR);
        return "function" === typeof JR.toBase64 ? JR.toBase64() : function(RR) {
          const JR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let GR, yR, tR, uR, ZR, qR, iR, fR = "",
            VR = 0;
          for (; VR < RR.length;) GR = RR[VR++], yR = VR < RR.length ? RR[VR++] : Number.NaN, tR = VR < RR.length ? RR[VR++] : Number.NaN, uR = GR >> 2, ZR = (3 & GR) << 4 | yR >> 4, qR = (15 & yR) << 2 | tR >> 6, iR = 63 & tR, isNaN(yR) ? qR = iR = 64 : isNaN(tR) && (iR = 64), fR += JR.charAt(uR) + JR.charAt(ZR) + JR.charAt(qR) + JR.charAt(iR);
          return fR
        }(JR)
      },
      tR = RR => atob(RR),
      uR = RR => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(RR).buffer : function(RR) {
        const JR = tR(RR),
          GR = JR.length,
          yR = new Uint8Array(new ArrayBuffer(GR));
        for (let tR = 0; tR < GR; tR++) yR[tR] = JR.charCodeAt(tR);
        return yR.buffer
      }(RR)
  },
  41415: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      g: () => ZR
    });
    let yR = [];
    class tR {
      static SetImmediate(RR) {
        0 === yR.length && setTimeout((() => {
          const RR = yR;
          yR = [];
          for (const JR of RR) JR()
        }), 1), yR.push(RR)
      }
    }

    function uR(RR, JR, GR) {
      try {
        if (RR()) return JR(), !0
      } catch (yR) {
        return GR?.(yR), !0
      }
      return !1
    }
    const ZR = function(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        ZR = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && uR(RR, JR, GR)) return null;
      const qR = setInterval((() => {
        uR(RR, JR, GR) ? clearInterval(qR) : (tR -= yR, tR < 0 && (clearInterval(qR), GR?.(new Error("Operation timed out after maximum retries. " + (ZR || "")), !0)))
      }), yR);
      return () => clearInterval(qR)
    }
  },
  41568: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    class yR {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(yR.CustomRequestHeaders).length > 0 || yR.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(RR) {
        return RR = (RR = RR.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(RR) {
        return yR.SkipRequestModificationForBabylonCDN && (RR.includes("preview.babylonjs.com") || RR.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(RR) {
        const JR = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (yR._ShouldSkipRequestModifications(RR)) return {
          url: RR,
          headers: JR
        };
        for (const tR in yR.CustomRequestHeaders) {
          const RR = yR.CustomRequestHeaders[tR];
          RR && (JR[tR] = RR)
        }
        const GR = {
          setRequestHeader: (RR, GR) => {
            JR[RR] = GR
          }
        };
        for (const tR of yR.CustomRequestModifiers) {
          if (yR._ShouldSkipRequestModifications(RR)) break;
          const JR = tR(GR, RR);
          "string" === typeof JR && (RR = JR)
        }
        return {
          url: RR,
          headers: JR
        }
      }
      static async FetchAsync(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const GR = JR.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: tR,
            headers: uR
          } = yR._CollectCustomizations(yR._CleanUrl(RR), JR.headers ?? {});
          return await fetch(tR, {
            method: GR,
            headers: uR,
            body: JR.body ?? void 0
          })
        }
        return await new Promise(((tR, uR) => {
          const ZR = new yR;
          ZR.responseType = "arraybuffer", ZR.addEventListener("readystatechange", (() => {
            if (4 === ZR.readyState)
              if (ZR.status >= 200 && ZR.status < 300) {
                const RR = "undefined" !== typeof Headers ? new Headers : void 0,
                  JR = ZR.getResponseHeader("Content-Type");
                JR && RR && RR.set("Content-Type", JR), "undefined" !== typeof Response ? tR(new Response(ZR.response, {
                  status: ZR.status,
                  statusText: ZR.statusText,
                  headers: RR
                })) : tR({
                  ok: !0,
                  status: ZR.status,
                  statusText: ZR.statusText,
                  headers: {
                    get: RR => ZR.getResponseHeader(RR)
                  },
                  arrayBuffer: async () => await Promise.resolve(ZR.response)
                })
              } else uR(new Error(`HTTP ${ZR.status} loading '${ZR.requestURL}': ${ZR.statusText}`))
          })), ZR.open(GR, RR, JR.headers), ZR.send(JR.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(RR) {
        this._xhr.onprogress = RR
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
      set responseType(RR) {
        this._xhr.responseType = RR
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(RR) {
        this._xhr.timeout = RR
      }
      addEventListener(RR, JR, GR) {
        this._xhr.addEventListener(RR, JR, GR)
      }
      removeEventListener(RR, JR, GR) {
        this._xhr.removeEventListener(RR, JR, GR)
      }
      abort() {
        this._xhr.abort()
      }
      send(RR) {
        this._xhr.send(RR)
      }
      open(RR, JR, GR) {
        const {
          url: tR,
          headers: uR
        } = yR._CollectCustomizations(JR, GR);
        this._requestURL = yR._CleanUrl(tR), this._xhr.open(RR, this._requestURL, !0);
        for (const yR in uR) this._xhr.setRequestHeader(yR, uR[yR])
      }
      setRequestHeader(RR, JR) {
        this._xhr.setRequestHeader(RR, JR)
      }
      getResponseHeader(RR) {
        return this._xhr.getResponseHeader(RR)
      }
    }
    yR.CustomRequestHeaders = {}, yR.CustomRequestModifiers = new Array, yR.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);