export const id = 279;
export const ids = [279];
export const modules = {
  41318: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => vV,
      f: () => ZV,
      h: () => QV,
      i: () => rV,
      l: () => nV,
      m: () => pV,
      q: () => wV
    });
    var JV = xV(39870),
      YV = xV(41323);

    function UV(VV, eV, xV, JV) {
      switch (eV) {
        case 5120: {
          let eV = VV.getInt8(xV);
          return JV && (eV = Math.max(eV / 127, -1)), eV
        }
        case 5121: {
          let eV = VV.getUint8(xV);
          return JV && (eV /= 255), eV
        }
        case 5122: {
          let eV = VV.getInt16(xV, !0);
          return JV && (eV = Math.max(eV / 32767, -1)), eV
        }
        case 5123: {
          let eV = VV.getUint16(xV, !0);
          return JV && (eV /= 65535), eV
        }
        case 5131:
          return (0, YV.c)(VV.getUint16(xV, !0));
        case 5124:
          return VV.getInt32(xV, !0);
        case 5125:
          return VV.getUint32(xV, !0);
        case 5126:
          return VV.getFloat32(xV, !0);
        default:
          throw new Error(`Invalid component type ${eV}`)
      }
    }

    function yV(VV, eV, xV, JV, UV) {
      switch (eV) {
        case 5120:
          JV && (UV = Math.round(127 * UV)), VV.setInt8(xV, UV);
          break;
        case 5121:
          JV && (UV = Math.round(255 * UV)), VV.setUint8(xV, UV);
          break;
        case 5122:
          JV && (UV = Math.round(32767 * UV)), VV.setInt16(xV, UV, !0);
          break;
        case 5123:
          JV && (UV = Math.round(65535 * UV)), VV.setUint16(xV, UV, !0);
          break;
        case 5131:
          VV.setUint16(xV, (0, YV.j)(UV), !0);
          break;
        case 5124:
          VV.setInt32(xV, UV, !0);
          break;
        case 5125:
          VV.setUint32(xV, UV, !0);
          break;
        case 5126:
          VV.setFloat32(xV, UV, !0);
          break;
        default:
          throw new Error(`Invalid component type ${eV}`)
      }
    }

    function pV(VV) {
      switch (VV) {
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
          throw new Error(`Invalid type '${VV}'`)
      }
    }

    function QV(VV, eV, xV, JV, YV, QV, nV, wV) {
      const ZV = new Array(JV),
        vV = new Array(JV);
      if (VV instanceof Array) {
        let YV = eV / 4;
        const UV = xV / 4;
        for (let eV = 0; eV < QV; eV += JV) {
          for (let eV = 0; eV < JV; eV++) ZV[eV] = vV[eV] = VV[YV + eV];
          wV(vV, eV);
          for (let eV = 0; eV < JV; eV++) ZV[eV] !== vV[eV] && (VV[YV + eV] = vV[eV]);
          YV += UV
        }
      } else {
        const rV = ArrayBuffer.isView(VV) ? new DataView(VV.buffer, VV.byteOffset, VV.byteLength) : new DataView(VV),
          kV = pV(YV);
        for (let VV = 0; VV < QV; VV += JV) {
          for (let VV = 0, xV = eV; VV < JV; VV++, xV += kV) ZV[VV] = vV[VV] = UV(rV, YV, xV, nV);
          wV(vV, VV);
          for (let VV = 0, xV = eV; VV < JV; VV++, xV += kV) ZV[VV] !== vV[VV] && yV(rV, YV, xV, nV, vV[VV]);
          eV += xV
        }
      }
    }

    function nV(VV, eV, xV, YV, UV, yV, nV, wV) {
      const ZV = eV * pV(xV),
        vV = nV * eV;
      if (5126 !== xV || UV !== ZV) {
        const JV = new Float32Array(vV);
        return QV(VV, YV, UV, eV, xV, vV, yV, ((VV, xV) => {
          for (let YV = 0; YV < eV; YV++) JV[xV + YV] = VV[YV]
        })), JV
      }
      if (!(VV instanceof Array || VV instanceof Float32Array) || 0 !== YV || VV.length !== vV) {
        if (VV instanceof Array) {
          const eV = YV / 4;
          return VV.slice(eV, eV + vV)
        }
        if (ArrayBuffer.isView(VV)) {
          const eV = VV.byteOffset + YV;
          return 0 !== (3 & eV) && (JV.b.Warn("Float array must be aligned to 4-bytes border"), wV = !0), wV ? new Float32Array(VV.buffer.slice(eV, eV + vV * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(VV.buffer, eV, vV)
        }
        return new Float32Array(VV, YV, vV)
      }
      return wV ? VV.slice() : VV
    }

    function wV(VV, eV, xV, YV, UV, yV, nV) {
      const wV = pV(xV),
        ZV = function(VV) {
          switch (VV) {
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
              throw new Error(`Invalid component type '${VV}'`)
          }
        }(xV),
        vV = yV * eV;
      if (Array.isArray(VV)) {
        if (0 !== (3 & YV) || 0 !== (3 & UV)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const JV = YV / 4,
          pV = UV / 4;
        if (JV + (yV - 1) * pV + eV > VV.length) throw new Error("Last accessed index is out of bounds.");
        if (pV < eV) throw new Error("Data stride cannot be smaller than the component size.");
        if (pV !== eV) {
          const JV = new ZV(vV);
          return QV(VV, YV, UV, eV, xV, vV, !1, ((VV, xV) => {
            for (let YV = 0; YV < eV; YV++) JV[xV + YV] = VV[YV]
          })), JV
        }
        return new ZV(VV.slice(JV, JV + vV))
      }
      let rV, kV = YV;
      ArrayBuffer.isView(VV) ? (rV = VV.buffer, kV += VV.byteOffset) : rV = VV;
      if (kV + (yV - 1) * UV + eV * wV > rV.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const bV = eV * wV;
      if (UV < bV) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (UV !== bV) {
        const VV = new ZV(vV),
          xV = new Uint8Array(rV, kV),
          JV = new Uint8Array(VV.buffer),
          YV = eV * wV;
        for (let eV = 0, pV = 0, QV = 0; eV < yV; eV++, pV += UV, QV += YV) JV.set(xV.subarray(pV, pV + YV), QV);
        return VV
      }
      return 1 !== wV && 0 !== (kV & wV - 1) && (JV.b.Warn("Array must be aligned to border of element size. Data will be copied."), nV = !0), nV ? new ZV(rV.slice(kV, kV + vV * wV)) : new ZV(rV, kV, vV)
    }

    function ZV(VV, eV, xV, YV, UV, yV, nV, wV) {
      const ZV = eV * pV(xV),
        vV = nV * eV;
      if (wV.length !== vV) throw new Error("Output length is not valid");
      if (5126 === xV && UV === ZV)
        if (VV instanceof Array) {
          const eV = YV / 4;
          wV.set(VV, eV)
        } else if (ArrayBuffer.isView(VV)) {
        const eV = VV.byteOffset + YV;
        if (0 !== (3 & eV)) return JV.b.Warn("Float array must be aligned to 4-bytes border"), void wV.set(new Float32Array(VV.buffer.slice(eV, eV + vV * Float32Array.BYTES_PER_ELEMENT)));
        const xV = new Float32Array(VV.buffer, eV, vV);
        wV.set(xV)
      } else {
        const eV = new Float32Array(VV, YV, vV);
        wV.set(eV)
      } else QV(VV, YV, UV, eV, xV, vV, yV, ((VV, xV) => {
        for (let JV = 0; JV < eV; JV++) wV[xV + JV] = VV[JV]
      }))
    }

    function vV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(VV)) {
        for (let YV = 0; YV < eV; YV++)
          if (VV[xV + YV] - JV > 65535) return !0;
        return !1
      }
      return 4 === VV.BYTES_PER_ELEMENT
    }

    function rV(VV) {
      const eV = VV.buffer;
      if (eV instanceof ArrayBuffer) return VV;
      const xV = new ArrayBuffer(VV.byteLength);
      return new Uint8Array(xV).set(new Uint8Array(eV, VV.byteOffset, VV.byteLength)), xV
    }
  },
  41143: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => AV,
      f: () => TV,
      l: () => PV,
      j: () => RV,
      p: () => gV
    });
    class JV {
      constructor() {
        this.children = []
      }
      isValid(VV) {
        return !0
      }
      process(VV, eV, xV) {
        let JV = "";
        if (this.line) {
          let xV = this.line;
          const YV = eV.processor;
          if (YV) {
            YV.lineProcessor && (xV = YV.lineProcessor(xV, eV.isFragment, eV.processingContext));
            const JV = eV.processor?.attributeKeywordName ?? "attribute",
              UV = eV.isFragment && eV.processor?.varyingFragmentKeywordName ? eV.processor?.varyingFragmentKeywordName : !eV.isFragment && eV.processor?.varyingVertexKeywordName ? eV.processor?.varyingVertexKeywordName : "varying";
            if (!eV.isFragment && YV.attributeProcessor && this.line.startsWith(JV)) xV = YV.attributeProcessor(this.line, VV, eV.processingContext);
            else if (YV.varyingProcessor && (YV.varyingCheck?.(this.line, eV.isFragment) || !YV.varyingCheck && this.line.startsWith(UV))) xV = YV.varyingProcessor(this.line, eV.isFragment, VV, eV.processingContext);
            else if (YV.uniformProcessor && YV.uniformRegexp && YV.uniformRegexp.test(this.line)) eV.lookForClosingBracketForUniformBuffer || (xV = YV.uniformProcessor(this.line, eV.isFragment, VV, eV.processingContext));
            else if (YV.uniformBufferProcessor && YV.uniformBufferRegexp && YV.uniformBufferRegexp.test(this.line)) eV.lookForClosingBracketForUniformBuffer || (xV = YV.uniformBufferProcessor(this.line, eV.isFragment, eV.processingContext), eV.lookForClosingBracketForUniformBuffer = !0);
            else if (YV.textureProcessor && YV.textureRegexp && YV.textureRegexp.test(this.line)) xV = YV.textureProcessor(this.line, eV.isFragment, VV, eV.processingContext);
            else if ((YV.uniformProcessor || YV.uniformBufferProcessor) && this.line.startsWith("uniform") && !eV.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? YV.uniformProcessor && (xV = YV.uniformProcessor(this.line, eV.isFragment, VV, eV.processingContext)) : YV.uniformBufferProcessor && (xV = YV.uniformBufferProcessor(this.line, eV.isFragment, eV.processingContext), eV.lookForClosingBracketForUniformBuffer = !0)
            }
            eV.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (eV.lookForClosingBracketForUniformBuffer = !1, YV.endOfUniformBufferProcessor && (xV = YV.endOfUniformBufferProcessor(this.line, eV.isFragment, eV.processingContext)))
          }
          JV += xV + "\n"
        }
        for (const YV of this.children) JV += YV.process(VV, eV, xV);
        return this.additionalDefineKey && (VV[this.additionalDefineKey] = this.additionalDefineValue || "true", xV[this.additionalDefineKey] = VV[this.additionalDefineKey]), JV
      }
    }
    class YV {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(VV) {
        this._lines.length = 0;
        for (const eV of VV) {
          if (!eV || "\r" === eV) continue;
          if ("#" === eV[0]) {
            this._lines.push(eV);
            continue
          }
          const VV = eV.trim();
          if (!VV) continue;
          if (VV.startsWith("//")) {
            this._lines.push(eV);
            continue
          }
          const xV = VV.indexOf(";");
          if (-1 === xV) this._lines.push(VV);
          else if (xV === VV.length - 1) VV.length > 1 && this._lines.push(VV);
          else {
            const VV = eV.split(";");
            for (let eV = 0; eV < VV.length; eV++) {
              let xV = VV[eV];
              xV && (xV = xV.trim(), xV && this._lines.push(xV + (eV !== VV.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class UV extends JV {
      process(VV, eV, xV) {
        for (let JV = 0; JV < this.children.length; JV++) {
          const YV = this.children[JV];
          if (YV.isValid(VV)) return YV.process(VV, eV, xV)
        }
        return ""
      }
    }
    class yV extends JV {
      isValid(VV) {
        return this.testExpression.isTrue(VV)
      }
    }
    class pV {
      isTrue(VV) {
        return !0
      }
      static postfixToInfix(VV) {
        const eV = [];
        for (const xV of VV)
          if (void 0 === pV._OperatorPriority[xV]) eV.push(xV);
          else {
            const VV = eV[eV.length - 1],
              JV = eV[eV.length - 2];
            eV.length -= 2, eV.push(`(${JV}${xV}${VV})`)
          } return eV[eV.length - 1]
      }
      static infixToPostfix(VV) {
        const eV = pV._InfixToPostfixCache.get(VV);
        if (eV) return eV.accessTime = Date.now(), eV.result;
        if (!VV.includes("&&") && !VV.includes("||") && !VV.includes(")") && !VV.includes("(")) return [VV];
        const xV = [];
        let JV = -1;
        const YV = () => {
            wV = wV.trim(), "" !== wV && (xV.push(wV), wV = "")
          },
          UV = VV => {
            JV < pV._Stack.length - 1 && (pV._Stack[++JV] = VV)
          },
          yV = () => pV._Stack[JV],
          QV = () => -1 === JV ? "!!INVALID EXPRESSION!!" : pV._Stack[JV--];
        let nV = 0,
          wV = "";
        for (; nV < VV.length;) {
          const eV = VV.charAt(nV),
            ZV = nV < VV.length - 1 ? VV.substring(nV, 2 + nV) : "";
          if ("(" === eV) wV = "", UV(eV);
          else if (")" === eV) {
            for (YV(); - 1 !== JV && "(" !== yV();) xV.push(QV());
            QV()
          } else if (pV._OperatorPriority[ZV] > 1) {
            for (YV(); - 1 !== JV && pV._OperatorPriority[yV()] >= pV._OperatorPriority[ZV];) xV.push(QV());
            UV(ZV), nV++
          } else wV += eV;
          nV++
        }
        for (YV(); - 1 !== JV;) "(" === yV() ? QV() : xV.push(QV());
        return pV._InfixToPostfixCache.size >= pV.InfixToPostfixCacheLimitSize && pV.ClearCache(), pV._InfixToPostfixCache.set(VV, {
          result: xV,
          accessTime: Date.now()
        }), xV
      }
      static ClearCache() {
        const VV = Array.from(pV._InfixToPostfixCache.entries()).sort(((VV, eV) => VV[1].accessTime - eV[1].accessTime));
        for (let eV = 0; eV < pV.InfixToPostfixCacheCleanupSize; eV++) pV._InfixToPostfixCache.delete(VV[eV][0])
      }
    }
    pV.InfixToPostfixCacheLimitSize = 5e4, pV.InfixToPostfixCacheCleanupSize = 25e3, pV._InfixToPostfixCache = new Map, pV._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, pV._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class QV extends pV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = VV, this.not = eV
      }
      isTrue(VV) {
        let eV = void 0 !== VV[this.define];
        return this.not && (eV = !eV), eV
      }
    }
    class nV extends pV {
      isTrue(VV) {
        return this.leftOperand.isTrue(VV) || this.rightOperand.isTrue(VV)
      }
    }
    class wV extends pV {
      isTrue(VV) {
        return this.leftOperand.isTrue(VV) && this.rightOperand.isTrue(VV)
      }
    }
    class ZV extends pV {
      constructor(VV, eV, xV) {
        super(), this.define = VV, this.operand = eV, this.testValue = xV
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(VV) {
        let eV = !1;
        const xV = parseInt(void 0 != VV[this.define] ? VV[this.define] : this.define),
          JV = parseInt(void 0 != VV[this.testValue] ? VV[this.testValue] : this.testValue);
        if (isNaN(xV) || isNaN(JV)) return !1;
        switch (this.operand) {
          case ">":
            eV = xV > JV;
            break;
          case "<":
            eV = xV < JV;
            break;
          case "<=":
            eV = xV <= JV;
            break;
          case ">=":
            eV = xV >= JV;
            break;
          case "==":
            eV = xV === JV;
            break;
          case "!=":
            eV = xV !== JV
        }
        return eV
      }
    }
    var vV = xV(41138),
      rV = xV(41134);
    const kV = /defined\s*?\((.+?)\)/g,
      bV = /defined\s*?\[(.+?)\]/g,
      EV = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      BV = /__decl__/,
      jV = /light\{X\}.(\w*)/g,
      qV = /\{X\}/g,
      tV = [],
      FV = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function TV(VV) {
      VV.processor && VV.processor.initializeShaders && VV.processor.initializeShaders(VV.processingContext)
    }

    function PV(VV, eV, xV, JV) {
      eV.processor?.preProcessShaderCode && (VV = eV.processor.preProcessShaderCode(VV, eV.isFragment)), RV(VV, eV, (VV => {
        eV.processCodeAfterIncludes && (VV = eV.processCodeAfterIncludes(eV.isFragment ? "fragment" : "vertex", VV, eV.defines));
        const YV = function(VV, eV, xV) {
          let JV = function(VV, eV) {
            if (eV.processor?.noPrecision) return VV;
            const xV = eV.shouldUseHighPrecisionShader; - 1 === VV.indexOf("precision highp float") ? VV = xV ? "precision highp float;\n" + VV : "precision mediump float;\n" + VV : xV || (VV = VV.replace("precision highp float", "precision mediump float"));
            return VV
          }(VV, eV);
          if (!eV.processor) return JV;
          if (0 === eV.processor.shaderLanguage && -1 !== JV.indexOf("#version 3") && (JV = JV.replace("#version 300 es", ""), !eV.processor.parseGLES3)) return JV;
          const YV = eV.defines,
            UV = WV(eV, xV);
          eV.processor.preProcessor && (JV = eV.processor.preProcessor(JV, YV, UV, eV.isFragment, eV.processingContext));
          const yV = {};
          JV = GV(JV, UV, eV, yV), eV.processor.postProcessor && (JV = eV.processor.postProcessor(JV, YV, eV.isFragment, eV.processingContext, xV ? {
            drawBuffersExtensionDisabled: !xV.getCaps().drawBuffersExtension
          } : {}, UV, yV));
          xV?._features.needShaderCodeInlining && (JV = xV.inlineShaderCode(JV));
          return JV
        }(VV, eV, JV);
        xV(YV, VV)
      }))
    }

    function AV(VV, eV, xV) {
      return xV.processor && xV.processor.finalizeShaders ? xV.processor.finalizeShaders(VV, eV, xV.processingContext) : {
        vertexCode: VV,
        fragmentCode: eV
      }
    }

    function NV(VV) {
      const eV = /defined\((.+)\)/.exec(VV);
      if (eV && eV.length) return new QV(eV[1].trim(), "!" === VV[0]);
      const xV = ["==", "!=", ">=", "<=", "<", ">"];
      let JV = "",
        YV = 0;
      for (JV of xV)
        if (YV = VV.indexOf(JV), YV > -1) break;
      if (-1 === YV) return new QV(VV);
      const UV = VV.substring(0, YV).trim(),
        yV = VV.substring(YV + JV.length).trim();
      return new ZV(UV, JV, yV)
    }

    function XV(VV, eV) {
      const xV = new yV,
        JV = VV.substring(0, eV);
      let YV = VV.substring(eV);
      return YV = YV.substring(0, (YV.indexOf("//") + 1 || YV.length + 1) - 1).trim(), xV.testExpression = "#ifdef" === JV ? new QV(YV) : "#ifndef" === JV ? new QV(YV, !0) : function(VV) {
        VV = VV.replace(kV, "defined[$1]");
        const eV = pV.infixToPostfix(VV),
          xV = [];
        for (const YV of eV)
          if ("||" !== YV && "&&" !== YV) xV.push(YV);
          else if (xV.length >= 2) {
          let VV = xV[xV.length - 1],
            eV = xV[xV.length - 2];
          xV.length -= 2;
          const JV = "&&" == YV ? new wV : new nV;
          "string" === typeof VV && (VV = VV.replace(bV, "defined($1)")), "string" === typeof eV && (eV = eV.replace(bV, "defined($1)")), JV.leftOperand = "string" === typeof eV ? NV(eV) : eV, JV.rightOperand = "string" === typeof VV ? NV(VV) : VV, xV.push(JV)
        }
        let JV = xV[xV.length - 1];
        return "string" === typeof JV && (JV = JV.replace(bV, "defined($1)")), "string" === typeof JV ? NV(JV) : JV
      }(YV), xV
    }

    function MV(VV, eV, xV, YV) {
      let UV;
      for (; zV(VV, xV, YV);) {
        UV = VV.currentLine;
        const yV = UV.substring(0, 5).toLowerCase();
        if ("#else" === yV) {
          const xV = new JV;
          return eV.children.push(xV), void zV(VV, xV, YV)
        }
        if ("#elif" === yV) {
          const VV = XV(UV, 5);
          eV.children.push(VV), xV = VV
        }
      }
    }

    function zV(VV, eV, xV) {
      for (; VV.canRead;) {
        VV.lineIndex++;
        const YV = VV.currentLine;
        if (YV.indexOf("#") >= 0) {
          const JV = FV.exec(YV);
          if (JV && JV.length) {
            switch (JV[0]) {
              case "#ifdef": {
                const JV = new UV;
                eV.children.push(JV);
                const yV = XV(YV, 6);
                JV.children.push(yV), MV(VV, JV, yV, xV);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const JV = new UV;
                eV.children.push(JV);
                const yV = XV(YV, 7);
                JV.children.push(yV), MV(VV, JV, yV, xV);
                break
              }
              case "#if": {
                const JV = new UV,
                  yV = XV(YV, 3);
                eV.children.push(JV), JV.children.push(yV), MV(VV, JV, yV, xV);
                break
              }
            }
            continue
          }
        }
        const yV = new JV;
        if (yV.line = YV, eV.children.push(yV), "#" === YV[0] && "d" === YV[1]) {
          const VV = YV.replace(";", "").split(" ");
          yV.additionalDefineKey = VV[1], 3 === VV.length && (yV.additionalDefineValue = VV[2])
        }
      }
      return !1
    }

    function GV(VV, eV, xV, UV) {
      const yV = new JV,
        pV = new YV;
      return pV.lineIndex = -1, pV.lines = VV.split("\n"), zV(pV, yV, UV), yV.process(eV, xV, UV)
    }

    function WV(VV, eV) {
      const xV = VV.defines,
        JV = {};
      for (const YV of xV) {
        const VV = YV.replace("#define", "").replace(";", "").trim().split(" ");
        JV[VV[0]] = VV.length > 1 ? VV[1] : ""
      }
      return 0 === VV.processor?.shaderLanguage && (JV.GL_ES = "true"), JV.__VERSION__ = VV.version, JV[VV.platformName] = "true", (0, rV.i)(JV, eV?.isNDCHalfZRange, eV?.zYV, eV?.useExactSrgbConversions), JV
    }

    function RV(VV, eV, xV) {
      let JV;
      for (tV.length = 0; null !== (JV = EV.exec(VV));) tV.push(JV);
      let YV = [VV],
        UV = !1;
      for (const pV of tV) {
        let VV = pV[1];
        if (-1 !== VV.indexOf("__decl__") && (VV = VV.replace(BV, ""), eV.supportsUniformBuffers && (VV = VV.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), VV += "Declaration"), !eV.includesShadersStore[VV]) {
          const JV = eV.shadersRepository + "ShadersInclude/" + VV + ".fx";
          return void gV.loadFile(JV, (JV => {
            eV.includesShadersStore[VV] = JV, RV(YV.join(""), eV, xV)
          }))
        } {
          let xV = eV.includesShadersStore[VV];
          if (pV[2]) {
            const VV = pV[3].split(",");
            for (let eV = 0; eV < VV.length; eV += 2) {
              const JV = new RegExp(VV[eV], "g"),
                YV = VV[eV + 1];
              xV = xV.replace(JV, YV)
            }
          }
          if (pV[4]) {
            const VV = pV[5];
            if (-1 !== VV.indexOf("..")) {
              const JV = VV.split(".."),
                YV = parseInt(JV[0]);
              let UV = parseInt(JV[1]),
                yV = xV.slice(0);
              xV = "", isNaN(UV) && (UV = eV.indexParameters[JV[1]]);
              for (let VV = YV; VV < UV; VV++) eV.supportsUniformBuffers || (yV = yV.replace(jV, ((VV, eV) => eV + "{X}"))), xV += yV.replace(qV, VV.toString()) + "\n"
            } else eV.supportsUniformBuffers || (xV = xV.replace(jV, ((VV, eV) => eV + "{X}"))), xV = xV.replace(qV, VV)
          }
          const JV = [];
          for (const VV of YV) {
            const eV = VV.split(pV[0]);
            for (let VV = 0; VV < eV.length - 1; VV++) JV.push(eV[VV]), JV.push(xV);
            JV.push(eV[eV.length - 1])
          }
          YV = JV, UV = UV || xV.indexOf("#include<") >= 0 || xV.indexOf("#include <") >= 0
        }
      }
      tV.length = 0;
      const yV = YV.join("");
      UV ? RV(yV.toString(), eV, xV) : xV(yV)
    }
    const gV = {
      loadFile: (VV, eV, xV, JV, YV, UV) => {
        throw (0, vV.n)("FileTools")
      }
    }
  },
  41134: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV,
      f: () => UV,
      i: () => pV,
      k: () => yV,
      m: () => QV
    });
    var JV = xV(41138);
    const YV = {};

    function UV(VV, eV) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (eV ? eV + "\n" : "") + VV
    }

    function yV(VV, eV, xV, UV, yV, pV, QV) {
      const nV = QV || YV.loadFile;
      if (!nV) throw (0, JV.n)("FileTools");
      return nV(VV, eV, xV, UV, yV, pV)
    }

    function pV(VV, eV, xV, JV) {
      if (VV) return eV ? VV.IS_NDC_HALF_ZRANGE = "" : delete VV.IS_NDC_HALF_ZRANGE, xV ? VV.USE_REVERSE_DEPTHBUFFER = "" : delete VV.USE_REVERSE_DEPTHBUFFER, void(JV ? VV.USE_EXACT_SRGB_CONVERSIONS = "" : delete VV.USE_EXACT_SRGB_CONVERSIONS);
      {
        let VV = "";
        return eV && (VV += "#define IS_NDC_HALF_ZRANGE"), xV && (VV && (VV += "\n"), VV += "#define USE_REVERSE_DEPTHBUFFER"), JV && (VV && (VV += "\n"), VV += "#define USE_EXACT_SRGB_CONVERSIONS"), VV
      }
    }

    function QV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        JV = arguments.length > 3 ? arguments[3] : void 0;
      switch (VV) {
        case 3: {
          const VV = new Int8Array(eV);
          return JV && VV.set(new Int8Array(JV)), VV
        }
        case 0: {
          const VV = new Uint8Array(eV);
          return JV && VV.set(new Uint8Array(JV)), VV
        }
        case 4: {
          const VV = "number" !== typeof eV ? new Int16Array(eV) : new Int16Array(xV ? eV / 2 : eV);
          return JV && VV.set(new Int16Array(JV)), VV
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const VV = "number" !== typeof eV ? new Uint16Array(eV) : new Uint16Array(xV ? eV / 2 : eV);
          return JV && VV.set(new Uint16Array(JV)), VV
        }
        case 6: {
          const VV = "number" !== typeof eV ? new Int32Array(eV) : new Int32Array(xV ? eV / 4 : eV);
          return JV && VV.set(new Int32Array(JV)), VV
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const VV = "number" !== typeof eV ? new Uint32Array(eV) : new Uint32Array(xV ? eV / 4 : eV);
          return JV && VV.set(new Uint32Array(JV)), VV
        }
        case 1: {
          const VV = "number" !== typeof eV ? new Float32Array(eV) : new Float32Array(xV ? eV / 4 : eV);
          return JV && VV.set(new Float32Array(JV)), VV
        }
      }
      const YV = new Uint8Array(eV);
      return JV && YV.set(new Uint8Array(JV)), YV
    }
  },
  41138: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => nV,
      g: () => wV,
      j: () => QV,
      n: () => YV
    });
    const JV = {};

    function YV(VV) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !JV[VV]) return JV[VV] = !0, `${VV} needs to be imported before as it contains a side-effect required by your code.`
    }
    const UV = {};
    let yV = !1,
      pV = 0;

    function QV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const JV = function() {
        if ((xV || yV) && 0 === pV) {
          const xV = `${VV}.${eV}`;
          UV[xV] || (UV[xV] = !0, console.warn(`[Babylon.js] ${xV}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return JV.__isSideEffectStub = !0, JV
    }

    function nV(VV) {
      return !!VV && !VV.__isSideEffectStub
    }

    function wV(VV, eV) {
      return {
        get() {},
        set(VV) {
          Object.defineProperty(this, eV, {
            value: VV,
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
  41122: (VV, eV, xV) => {
    function JV() {
      return "undefined" !== typeof window
    }

    function YV() {
      return "undefined" !== typeof navigator
    }

    function UV() {
      return "undefined" !== typeof document
    }

    function yV(VV) {
      let eV = "",
        xV = VV.firstChild;
      for (; xV;) 3 === xV.nodeType && (eV += xV.textContent), xV = xV.nextSibling;
      return eV
    }
    xV.d(eV, {
      b: () => yV,
      f: () => UV,
      j: () => YV,
      n: () => JV
    })
  },
  41313: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV,
      g: () => YV,
      j: () => UV
    });
    class JV extends Error {}
    JV._setPrototypeOf = Object.setPrototypeOf || ((VV, eV) => (VV.__proto__ = eV, VV));
    const YV = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class UV extends JV {
      constructor(VV, eV, xV) {
        super(VV), this.errorCode = eV, this.innerError = xV, this.name = "RuntimeError", JV._setPrototypeOf(this, UV.prototype)
      }
    }
  },
  41300: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => WV,
      g: () => qV,
      h: () => XV,
      k: () => zV,
      o: () => AV,
      r: () => TV,
      v: () => PV,
      x: () => CV,
      z: () => NV,
      B: () => tV
    });
    var JV = xV(41309),
      YV = xV(41122),
      UV = xV(38296);
    class yV {}
    yV.FilesToLoad = {};
    var pV = xV(41313),
      QV = xV(41315),
      nV = xV(38287),
      wV = xV(41134),
      ZV = xV(41143),
      vV = xV(39870),
      rV = xV(41145),
      kV = xV(41318);
    const bV = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class EV extends pV.j {
      constructor(VV, eV) {
        super(VV, pV.g.LoadFileError), this.name = "LoadFileError", pV.d._setPrototypeOf(this, EV.prototype), eV instanceof JV.d ? this.request = eV : this.file = eV
      }
    }
    class BV extends pV.j {
      constructor(VV, eV) {
        super(VV, pV.g.RequestFileError), this.request = eV, this.name = "RequestFileError", pV.d._setPrototypeOf(this, BV.prototype)
      }
    }
    class jV extends pV.j {
      constructor(VV, eV) {
        super(VV, pV.g.ReadFileError), this.file = eV, this.name = "ReadFileError", pV.d._setPrototypeOf(this, jV.prototype)
      }
    }
    const qV = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (xV, JV, YV) => 0 !== JV.status || YV >= VV || -1 !== xV.indexOf("file:") ? -1 : Math.pow(2, YV) * eV
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: VV => VV,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: VV => VV,
        CleanUrl: VV => VV = VV.replace(/#/gm, "%23")
      },
      tV = (VV, eV) => {
        if ((!VV || 0 !== VV.indexOf("data:")) && qV.CorsBehavior)
          if ("string" === typeof qV.CorsBehavior || qV.CorsBehavior instanceof String) eV.crossOrigin = qV.CorsBehavior;
          else {
            const xV = qV.CorsBehavior(VV);
            xV && (eV.crossOrigin = xV)
          }
      },
      FV = {
        getRequiredSize: null
      },
      TV = function(VV, eV, xV, YV) {
        let UV, pV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          wV = arguments.length > 5 ? arguments[5] : void 0,
          ZV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : nV.d.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !ZV?._features.forceBitmapOverHTMLImageElement) return xV("LoadImage is only supported in web or BabylonNative environments."), null;
        if (ZV?._features.forceBitmapOverHTMLImageElement && "string" !== typeof VV && "undefined" !== typeof Blob) {
          let JV;
          if (VV instanceof Blob) JV = VV;
          else {
            const eV = VV instanceof ArrayBuffer ? VV : (0, kV.i)(VV);
            JV = new Blob([eV], {
              type: pV
            })
          }
          return ZV.createImageBitmap(JV, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...wV
          }).then(eV).catch((eV => {
            xV && xV("Error while trying to load image: " + VV, eV)
          })), null
        }
        let vV = !1;
        if (VV instanceof ArrayBuffer || ArrayBuffer.isView(VV))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let eV;
            eV = VV instanceof ArrayBuffer ? VV : (0, kV.i)(VV), UV = URL.createObjectURL(new Blob([eV], {
              type: pV
            })), vV = !0
          } else UV = `data:${pV};base64,` + (0, QV.h)(VV);
        else VV instanceof Blob ? (UV = URL.createObjectURL(VV), vV = !0) : (UV = qV.CleanUrl(VV), UV = qV.PreprocessUrl(UV));
        const rV = eV => {
          if (xV) {
            const JV = UV || VV.toString();
            xV(`Error while trying to load image: ${0===JV.indexOf("http")||JV.length<=128?JV:JV.slice(0,128)+"..."}`, eV)
          }
        };
        if (ZV?._features.forceBitmapOverHTMLImageElement) return AV(UV, (JV => {
          ZV.createImageBitmap(new Blob([JV], {
            type: pV
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...wV
          }).then((VV => {
            eV(VV), vV && URL.revokeObjectURL(UV)
          })).catch((eV => {
            xV && xV("Error while trying to load image: " + VV, eV)
          }))
        }), void 0, YV || void 0, !0, ((VV, eV) => {
          rV(eV)
        })), null;
        const bV = new Image;
        if (FV.getRequiredSize) {
          const eV = FV.getRequiredSize(VV);
          eV.width && (bV.width = eV.width), eV.height && (bV.height = eV.height)
        }
        tV(UV, bV);
        const EV = [],
          BV = () => {
            for (const VV of EV) VV.target.removeEventListener(VV.name, VV.handler);
            EV.length = 0
          };
        EV.push({
          target: bV,
          name: "load",
          handler: () => {
            BV(), eV(bV), vV && bV.src && URL.revokeObjectURL(bV.src)
          }
        }), EV.push({
          target: bV,
          name: "error",
          handler: VV => {
            BV(), rV(VV), vV && bV.src && URL.revokeObjectURL(bV.src)
          }
        }), EV.push({
          target: document,
          name: "securitypolicyviolation",
          handler: VV => {
            if (VV.blockedURI !== bV.src || "EZ" === VV.disposition) return;
            BV();
            const eV = new Error(`CSP violation of policy ${VV.effectiveDirective} ${VV.blockedURI}. Current policy is ${VV.originalPolicy}`);
            nV.d.UseFallbackTexture = !1, rV(eV), vV && bV.src && URL.revokeObjectURL(bV.src), bV.src = ""
          }
        }), (() => {
          for (const VV of EV) VV.target.addEventListener(VV.name, VV.handler)
        })();
        const jV = "blob:" === UV.substring(0, 5),
          TV = "data:" === UV.substring(0, 5),
          PV = () => {
            jV || TV || !JV.d.IsCustomRequestAvailable ? bV.src = UV : AV(UV, ((VV, eV, xV) => {
              const JV = new Blob([VV], {
                  type: !pV && xV ? xV : pV
                }),
                YV = URL.createObjectURL(JV);
              vV = !0, bV.src = YV
            }), void 0, YV || void 0, !0, ((VV, eV) => {
              rV(eV)
            }))
          },
          NV = () => {
            YV && YV.loadImage(UV, bV)
          };
        if (!jV && !TV && YV && YV.enableTexturesOffline) YV.open(NV, PV);
        else {
          if (-1 !== UV.indexOf("file:")) {
            const VV = decodeURIComponent(UV.substring(5).toLowerCase());
            if (yV.FilesToLoad[VV] && "undefined" !== typeof URL) {
              try {
                let eV;
                try {
                  eV = URL.createObjectURL(yV.FilesToLoad[VV])
                } catch (XV) {
                  eV = URL.createObjectURL(yV.FilesToLoad[VV])
                }
                bV.src = eV, vV = !0
              } catch (MV) {
                bV.src = ""
              }
              return bV
            }
          }
          PV()
        }
        return bV
      },
      PV = (VV, eV, xV, JV, YV) => {
        const yV = new FileReader,
          pV = {
            onCompleteObservable: new UV.c,
            abort: () => yV.abort()
          };
        return yV.onloadend = () => pV.onCompleteObservable.notifyObservers(pV), YV && (yV.onerror = () => {
          YV(new jV(`Unable to read ${VV.name}`, VV))
        }), yV.onload = VV => {
          eV(VV.target.result)
        }, xV && (yV.onprogress = xV), JV ? yV.readAsArrayBuffer(VV) : yV.readAsText(VV), pV
      },
      AV = (VV, eV, xV, JV, YV, QV, nV) => {
        if (VV.name) return PV(VV, eV, xV, YV, QV ? VV => {
          QV(void 0, VV)
        } : void 0);
        const wV = VV;
        if (-1 !== wV.indexOf("file:")) {
          let VV = decodeURIComponent(wV.substring(5).toLowerCase());
          0 === VV.indexOf("./") && (VV = VV.substring(2));
          const JV = yV.FilesToLoad[VV];
          if (JV) return PV(JV, eV, xV, YV, QV ? VV => QV(void 0, new EV(VV.message, VV.file)) : void 0)
        }
        const {
          match: ZV,
          type: kV
        } = GV(wV);
        if (ZV) {
          const VV = {
            onCompleteObservable: new UV.c,
            abort: () => () => {}
          };
          try {
            const VV = YV ? WV(wV) : RV(wV);
            eV(VV, void 0, kV)
          } catch (pV) {
            QV ? QV(void 0, pV) : vV.b.Error(pV.message || "Failed to parse the Data URL")
          }
          return rV.b.SetImmediate((() => {
            VV.onCompleteObservable.notifyObservers(VV)
          })), VV
        }
        return NV(wV, ((VV, xV) => {
          eV(VV, xV?.responseURL, xV?.getResponseHeader("content-type"))
        }), xV, JV, YV, QV ? VV => {
          QV(VV.request, new EV(VV.message, VV.request))
        } : void 0, nV)
      },
      NV = (VV, eV, xV, yV, pV, QV, wV) => {
        null !== yV && (yV ?? (yV = nV.d.LastCreatedScene?.offlineProvider)), VV = qV.CleanUrl(VV), VV = qV.PreprocessUrl(VV);
        const ZV = qV.BaseUrl + VV;
        let rV = !1;
        const kV = {
            onCompleteObservable: new UV.c,
            abort: () => rV = !0
          },
          bV = () => {
            let VV, UV = new JV.d,
              yV = null;
            const nV = () => {
              UV && (xV && UV.removeEventListener("progress", xV), VV && UV.removeEventListener("readystatechange", VV), UV.removeEventListener("loadend", bV))
            };
            let bV = () => {
              nV(), kV.onCompleteObservable.notifyObservers(kV), kV.onCompleteObservable.clear(), xV = void 0, VV = null, bV = null, QV = void 0, wV = void 0, eV = void 0
            };
            kV.abort = () => {
              rV = !0, bV && bV(), UV && UV.readyState !== (XMLHttpRequest.DONE || 4) && UV.abort(), null !== yV && (clearTimeout(yV), yV = null), UV = null
            };
            const EV = VV => {
                const eV = VV.message || "Unknown error";
                QV && UV ? QV(new BV(eV, UV)) : vV.b.Error(eV)
              },
              jV = vV => {
                if (UV) {
                  if (UV.open("GET", ZV), wV) try {
                    wV(UV)
                  } catch (kV) {
                    return void EV(kV)
                  }
                  pV && (UV.responseType = "arraybuffer"), xV && UV.addEventListener("progress", xV), bV && UV.addEventListener("loadend", bV), VV = () => {
                    if (!rV && UV && UV.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (VV && UV.removeEventListener("readystatechange", VV), UV.status >= 200 && UV.status < 300 || 0 === UV.status && (!(0, YV.n)() || MV())) {
                        const VV = pV ? UV.response : UV.responseText;
                        if (null !== VV) {
                          try {
                            eV && eV(VV, UV)
                          } catch (kV) {
                            EV(kV)
                          }
                          return
                        }
                      }
                      const xV = qV.DefaultRetryStrategy;
                      if (xV) {
                        const VV = xV(ZV, UV, vV);
                        if (-1 !== VV) return nV(), UV = new JV.d, void(yV = setTimeout((() => jV(vV + 1)), VV))
                      }
                      const wV = new BV("Error status: " + UV.status + " " + UV.statusText + " - Unable to load " + ZV, UV);
                      QV && QV(wV)
                    }
                  }, UV.addEventListener("readystatechange", VV), UV.send()
                }
              };
            jV(0)
          };
        if (yV && yV.enableSceneOffline && !VV.startsWith("blob:")) {
          const JV = VV => {
              VV && VV.status > 400 ? QV && QV(VV) : bV()
            },
            YV = () => {
              yV && yV.loadFile(qV.BaseUrl + VV, (VV => {
                !rV && eV && eV(VV), kV.onCompleteObservable.notifyObservers(kV)
              }), xV ? VV => {
                !rV && xV && xV(VV)
              } : void 0, JV, pV)
            };
          yV.open(YV, JV)
        } else bV();
        return kV
      },
      XV = VV => {
        const {
          match: eV,
          type: xV
        } = GV(VV);
        if (eV) return xV || void 0;
        const JV = VV.lastIndexOf(".");
        switch (VV.substring(JV + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "ZD":
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
      MV = () => "undefined" !== typeof location && "file:" === location.protocol,
      zV = VV => bV.test(VV),
      GV = VV => {
        const eV = bV.exec(VV);
        if (null === eV || 0 === eV.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: eV[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function WV(VV) {
      return (0, QV.d)(VV.split(",")[1])
    }
    const RV = VV => (0, QV.g)(VV.split(",")[1]);
    let gV;
    const DV = (VV, eV, xV, JV, YV, UV, yV, pV, QV, nV) => {
      gV = {
        DecodeBase64UrlToBinary: VV,
        DecodeBase64UrlToString: eV,
        DefaultRetryStrategy: xV.DefaultRetryStrategy,
        BaseUrl: xV.BaseUrl,
        CorsBehavior: xV.CorsBehavior,
        PreprocessUrl: xV.PreprocessUrl,
        IsBase64DataUrl: JV,
        IsFileURL: YV,
        LoadFile: UV,
        LoadImage: yV,
        ReadFile: pV,
        RequestFile: QV,
        SetCorsBehavior: nV
      }, Object.defineProperty(gV, "DefaultRetryStrategy", {
        get: function() {
          return xV.DefaultRetryStrategy
        },
        set: function(VV) {
          xV.DefaultRetryStrategy = VV
        }
      }), Object.defineProperty(gV, "BaseUrl", {
        get: function() {
          return xV.BaseUrl
        },
        set: function(VV) {
          xV.BaseUrl = VV
        }
      }), Object.defineProperty(gV, "PreprocessUrl", {
        get: function() {
          return xV.PreprocessUrl
        },
        set: function(VV) {
          xV.PreprocessUrl = VV
        }
      }), Object.defineProperty(gV, "CorsBehavior", {
        get: function() {
          return xV.CorsBehavior
        },
        set: function(VV) {
          xV.CorsBehavior = VV
        }
      })
    };
    let iV = !1;

    function CV() {
      iV || (iV = !0, DV(WV, RV, qV, zV, MV, AV, TV, PV, NV, tV), wV.b.loadFile = AV, wV.b.loadImage = TV, ZV.p.loadFile = AV)
    }
  },
  41323: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      f: () => UV,
      j: () => yV
    });
    let JV = null;

    function YV() {
      if (JV) return JV;
      const VV = new ArrayBuffer(4),
        eV = new Float32Array(VV),
        xV = new Uint32Array(VV),
        YV = new Uint32Array(512),
        UV = new Uint32Array(512);
      for (let JV = 0; JV < 256; ++JV) {
        const VV = JV - 127;
        VV < -24 ? (YV[JV] = 0, YV[256 | JV] = 32768, UV[JV] = 24, UV[256 | JV] = 24) : VV < -14 ? (YV[JV] = 1024 >> -VV - 14, YV[256 | JV] = 1024 >> -VV - 14 | 32768, UV[JV] = -VV - 1, UV[256 | JV] = -VV - 1) : VV <= 15 ? (YV[JV] = VV + 15 << 10, YV[256 | JV] = VV + 15 << 10 | 32768, UV[JV] = 13, UV[256 | JV] = 13) : VV < 128 ? (YV[JV] = 31744, YV[256 | JV] = 64512, UV[JV] = 24, UV[256 | JV] = 24) : (YV[JV] = 31744, YV[256 | JV] = 64512, UV[JV] = 13, UV[256 | JV] = 13)
      }
      const yV = new Uint32Array(2048),
        pV = new Uint32Array(64),
        QV = new Uint32Array(64);
      for (let JV = 1; JV < 1024; ++JV) {
        let VV = JV << 13,
          eV = 0;
        for (; 0 === (8388608 & VV);) VV <<= 1, eV -= 8388608;
        VV &= -8388609, eV += 947912704, yV[JV] = VV | eV
      }
      for (let JV = 1024; JV < 2048; ++JV) yV[JV] = 939524096 + (JV - 1024 << 13);
      for (let JV = 1; JV < 31; ++JV) pV[JV] = JV << 23;
      pV[31] = 1199570944, pV[32] = 2147483648;
      for (let JV = 33; JV < 63; ++JV) pV[JV] = 2147483648 + (JV - 32 << 23);
      pV[63] = 3347054592;
      for (let JV = 1; JV < 64; ++JV) 32 !== JV && (QV[JV] = 1024);
      return JV = {
        floatView: eV,
        uint32View: xV,
        baseTable: YV,
        shiftTable: UV,
        mantissaTable: yV,
        exponentTable: pV,
        offsetTable: QV
      }, JV
    }
    const UV = 65504;

    function yV(VV) {
      const eV = YV();
      eV.floatView[0] = VV;
      const xV = eV.uint32View[0],
        JV = xV >> 23 & 511;
      return eV.baseTable[JV] + ((8388607 & xV) >> eV.shiftTable[JV])
    }

    function pV(VV) {
      const eV = YV();
      return eV.uint32View[0] = eV.mantissaTable[eV.offsetTable[VV >> 10] + (1023 & VV)] + eV.exponentTable[VV >> 10], eV.floatView[0]
    }
  },
  41315: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      g: () => YV,
      h: () => JV
    });
    const JV = VV => {
        const eV = ArrayBuffer.isView(VV) ? new Uint8Array(VV.buffer, VV.byteOffset, VV.byteLength) : new Uint8Array(VV);
        return "function" === typeof eV.toBase64 ? eV.toBase64() : function(VV) {
          const eV = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let xV, JV, YV, UV, yV, pV, QV, nV = "",
            wV = 0;
          for (; wV < VV.length;) xV = VV[wV++], JV = wV < VV.length ? VV[wV++] : Number.NaN, YV = wV < VV.length ? VV[wV++] : Number.NaN, UV = xV >> 2, yV = (3 & xV) << 4 | JV >> 4, pV = (15 & JV) << 2 | YV >> 6, QV = 63 & YV, isNaN(JV) ? pV = QV = 64 : isNaN(YV) && (QV = 64), nV += eV.charAt(UV) + eV.charAt(yV) + eV.charAt(pV) + eV.charAt(QV);
          return nV
        }(eV)
      },
      YV = VV => atob(VV),
      UV = VV => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(VV).buffer : function(VV) {
        const eV = YV(VV),
          xV = eV.length,
          JV = new Uint8Array(new ArrayBuffer(xV));
        for (let YV = 0; YV < xV; YV++) JV[YV] = eV.charCodeAt(YV);
        return JV.buffer
      }(VV)
  },
  41145: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV,
      f: () => yV
    });
    let JV = [];
    class YV {
      static SetImmediate(VV) {
        0 === JV.length && setTimeout((() => {
          const VV = JV;
          JV = [];
          for (const eV of VV) eV()
        }), 1), JV.push(VV)
      }
    }

    function UV(VV, eV, xV) {
      try {
        if (VV()) return eV(), !0
      } catch (JV) {
        return xV?.(JV), !0
      }
      return !1
    }
    const yV = function(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        yV = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && UV(VV, eV, xV)) return null;
      const pV = setInterval((() => {
        UV(VV, eV, xV) ? clearInterval(pV) : (YV -= JV, YV < 0 && (clearInterval(pV), xV?.(new Error("Operation timed out after maximum retries. " + (yV || "")), !0)))
      }), JV);
      return () => clearInterval(pV)
    }
  },
  41309: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV
    });
    class JV {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(JV.CustomRequestHeaders).length > 0 || JV.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(VV) {
        return VV = (VV = VV.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(VV) {
        return JV.SkipRequestModificationForBabylonCDN && (VV.includes("preview.babylonjs.com") || VV.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(VV) {
        const eV = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (JV._ShouldSkipRequestModifications(VV)) return {
          url: VV,
          headers: eV
        };
        for (const YV in JV.CustomRequestHeaders) {
          const VV = JV.CustomRequestHeaders[YV];
          VV && (eV[YV] = VV)
        }
        const xV = {
          setRequestHeader: (VV, xV) => {
            eV[VV] = xV
          }
        };
        for (const YV of JV.CustomRequestModifiers) {
          if (JV._ShouldSkipRequestModifications(VV)) break;
          const eV = YV(xV, VV);
          "string" === typeof eV && (VV = eV)
        }
        return {
          url: VV,
          headers: eV
        }
      }
      static async FetchAsync(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const xV = eV.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: YV,
            headers: UV
          } = JV._CollectCustomizations(JV._CleanUrl(VV), eV.headers ?? {});
          return await fetch(YV, {
            method: xV,
            headers: UV,
            body: eV.body ?? void 0
          })
        }
        return await new Promise(((YV, UV) => {
          const yV = new JV;
          yV.responseType = "arraybuffer", yV.addEventListener("readystatechange", (() => {
            if (4 === yV.readyState)
              if (yV.status >= 200 && yV.status < 300) {
                const VV = "undefined" !== typeof Headers ? new Headers : void 0,
                  eV = yV.getResponseHeader("Content-Type");
                eV && VV && VV.set("Content-Type", eV), "undefined" !== typeof Response ? YV(new Response(yV.response, {
                  status: yV.status,
                  statusText: yV.statusText,
                  headers: VV
                })) : YV({
                  ok: !0,
                  status: yV.status,
                  statusText: yV.statusText,
                  headers: {
                    get: VV => yV.getResponseHeader(VV)
                  },
                  arrayBuffer: async () => await Promise.resolve(yV.response)
                })
              } else UV(new Error(`HTTP ${yV.status} loading '${yV.requestURL}': ${yV.statusText}`))
          })), yV.open(xV, VV, eV.headers), yV.send(eV.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(VV) {
        this._xhr.onprogress = VV
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
      set responseType(VV) {
        this._xhr.responseType = VV
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(VV) {
        this._xhr.timeout = VV
      }
      addEventListener(VV, eV, xV) {
        this._xhr.addEventListener(VV, eV, xV)
      }
      removeEventListener(VV, eV, xV) {
        this._xhr.removeEventListener(VV, eV, xV)
      }
      abort() {
        this._xhr.abort()
      }
      send(VV) {
        this._xhr.send(VV)
      }
      open(VV, eV, xV) {
        const {
          url: YV,
          headers: UV
        } = JV._CollectCustomizations(eV, xV);
        this._requestURL = JV._CleanUrl(YV), this._xhr.open(VV, this._requestURL, !0);
        for (const JV in UV) this._xhr.setRequestHeader(JV, UV[JV])
      }
      setRequestHeader(VV, eV) {
        this._xhr.setRequestHeader(VV, eV)
      }
      getResponseHeader(VV) {
        return this._xhr.getResponseHeader(VV)
      }
    }
    JV.CustomRequestHeaders = {}, JV.CustomRequestModifiers = new Array, JV.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);