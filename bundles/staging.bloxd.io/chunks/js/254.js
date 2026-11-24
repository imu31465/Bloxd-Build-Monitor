export const id = 254;
export const ids = [254];
export const modules = {
  39984: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => UD,
      g: () => AD,
      h: () => cD,
      j: () => fD,
      m: () => gD,
      n: () => LD,
      r: () => RD
    });
    var pD = wD(38662),
      sD = wD(39990);

    function KD(DD, zD, wD, pD) {
      switch (zD) {
        case 5120: {
          let zD = DD.getInt8(wD);
          return pD && (zD = Math.max(zD / 127, -1)), zD
        }
        case 5121: {
          let zD = DD.getUint8(wD);
          return pD && (zD /= 255), zD
        }
        case 5122: {
          let zD = DD.getInt16(wD, !0);
          return pD && (zD = Math.max(zD / 32767, -1)), zD
        }
        case 5123: {
          let zD = DD.getUint16(wD, !0);
          return pD && (zD /= 65535), zD
        }
        case 5131:
          return (0, sD.c)(DD.getUint16(wD, !0));
        case 5124:
          return DD.getInt32(wD, !0);
        case 5125:
          return DD.getUint32(wD, !0);
        case 5126:
          return DD.getFloat32(wD, !0);
        default:
          throw new Error(`Invalid component type ${zD}`)
      }
    }

    function rD(DD, zD, wD, pD, KD) {
      switch (zD) {
        case 5120:
          pD && (KD = Math.round(127 * KD)), DD.setInt8(wD, KD);
          break;
        case 5121:
          pD && (KD = Math.round(255 * KD)), DD.setUint8(wD, KD);
          break;
        case 5122:
          pD && (KD = Math.round(32767 * KD)), DD.setInt16(wD, KD, !0);
          break;
        case 5123:
          pD && (KD = Math.round(65535 * KD)), DD.setUint16(wD, KD, !0);
          break;
        case 5131:
          DD.setUint16(wD, (0, sD.g)(KD), !0);
          break;
        case 5124:
          DD.setInt32(wD, KD, !0);
          break;
        case 5125:
          DD.setUint32(wD, KD, !0);
          break;
        case 5126:
          DD.setFloat32(wD, KD, !0);
          break;
        default:
          throw new Error(`Invalid component type ${zD}`)
      }
    }

    function LD(DD) {
      switch (DD) {
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
          throw new Error(`Invalid type '${DD}'`)
      }
    }

    function cD(DD, zD, wD, pD, sD, cD, gD, RD) {
      const AD = new Array(pD),
        UD = new Array(pD);
      if (DD instanceof Array) {
        let sD = zD / 4;
        const KD = wD / 4;
        for (let zD = 0; zD < cD; zD += pD) {
          for (let zD = 0; zD < pD; zD++) AD[zD] = UD[zD] = DD[sD + zD];
          RD(UD, zD);
          for (let zD = 0; zD < pD; zD++) AD[zD] !== UD[zD] && (DD[sD + zD] = UD[zD]);
          sD += KD
        }
      } else {
        const fD = ArrayBuffer.isView(DD) ? new DataView(DD.buffer, DD.byteOffset, DD.byteLength) : new DataView(DD),
          ID = LD(sD);
        for (let DD = 0; DD < cD; DD += pD) {
          for (let DD = 0, wD = zD; DD < pD; DD++, wD += ID) AD[DD] = UD[DD] = KD(fD, sD, wD, gD);
          RD(UD, DD);
          for (let DD = 0, wD = zD; DD < pD; DD++, wD += ID) AD[DD] !== UD[DD] && rD(fD, sD, wD, gD, UD[DD]);
          zD += wD
        }
      }
    }

    function gD(DD, zD, wD, sD, KD, rD, gD, RD) {
      const AD = zD * LD(wD),
        UD = gD * zD;
      if (5126 !== wD || KD !== AD) {
        const pD = new Float32Array(UD);
        return cD(DD, sD, KD, zD, wD, UD, rD, ((DD, wD) => {
          for (let sD = 0; sD < zD; sD++) pD[wD + sD] = DD[sD]
        })), pD
      }
      if (!(DD instanceof Array || DD instanceof Float32Array) || 0 !== sD || DD.length !== UD) {
        if (DD instanceof Array) {
          const zD = sD / 4;
          return DD.slice(zD, zD + UD)
        }
        if (ArrayBuffer.isView(DD)) {
          const zD = DD.byteOffset + sD;
          return 0 !== (3 & zD) && (pD.d.Warn("Float array must be aligned to 4-bytes border"), RD = !0), RD ? new Float32Array(DD.buffer.slice(zD, zD + UD * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(DD.buffer, zD, UD)
        }
        return new Float32Array(DD, sD, UD)
      }
      return RD ? DD.slice() : DD
    }

    function RD(DD, zD, wD, sD, KD, rD, gD) {
      const RD = LD(wD),
        AD = function(DD) {
          switch (DD) {
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
              throw new Error(`Invalid component type '${DD}'`)
          }
        }(wD),
        UD = rD * zD;
      if (Array.isArray(DD)) {
        if (0 !== (3 & sD) || 0 !== (3 & KD)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const pD = sD / 4,
          LD = KD / 4;
        if (pD + (rD - 1) * LD + zD > DD.length) throw new Error("Last accessed index is out of bounds.");
        if (LD < zD) throw new Error("Data stride cannot be smaller than the component size.");
        if (LD !== zD) {
          const pD = new AD(UD);
          return cD(DD, sD, KD, zD, wD, UD, !1, ((DD, wD) => {
            for (let sD = 0; sD < zD; sD++) pD[wD + sD] = DD[sD]
          })), pD
        }
        return new AD(DD.slice(pD, pD + UD))
      }
      let fD, ID = sD;
      ArrayBuffer.isView(DD) ? (fD = DD.buffer, ID += DD.byteOffset) : fD = DD;
      if (ID + (rD - 1) * KD + zD * RD > fD.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const BD = zD * RD;
      if (KD < BD) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (KD !== BD) {
        const DD = new AD(UD),
          wD = new Uint8Array(fD, ID),
          pD = new Uint8Array(DD.buffer),
          sD = zD * RD;
        for (let zD = 0, LD = 0, cD = 0; zD < rD; zD++, LD += KD, cD += sD) pD.set(wD.subarray(LD, LD + sD), cD);
        return DD
      }
      return 1 !== RD && 0 !== (ID & RD - 1) && (pD.d.Warn("Array must be aligned to border of element size. Data will be copied."), gD = !0), gD ? new AD(fD.slice(ID, ID + UD * RD)) : new AD(fD, ID, UD)
    }

    function AD(DD, zD, wD, sD, KD, rD, gD, RD) {
      const AD = zD * LD(wD),
        UD = gD * zD;
      if (RD.length !== UD) throw new Error("Output length is not valid");
      if (5126 === wD && KD === AD)
        if (DD instanceof Array) {
          const zD = sD / 4;
          RD.set(DD, zD)
        } else if (ArrayBuffer.isView(DD)) {
        const zD = DD.byteOffset + sD;
        if (0 !== (3 & zD)) return pD.d.Warn("Float array must be aligned to 4-bytes border"), void RD.set(new Float32Array(DD.buffer.slice(zD, zD + UD * Float32Array.BYTES_PER_ELEMENT)));
        const wD = new Float32Array(DD.buffer, zD, UD);
        RD.set(wD)
      } else {
        const zD = new Float32Array(DD, sD, UD);
        RD.set(zD)
      } else cD(DD, sD, KD, zD, wD, UD, rD, ((DD, wD) => {
        for (let pD = 0; pD < zD; pD++) RD[wD + pD] = DD[pD]
      }))
    }

    function UD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(DD)) {
        for (let sD = 0; sD < zD; sD++)
          if (DD[wD + sD] - pD > 65535) return !0;
        return !1
      }
      return 4 === DD.BYTES_PER_ELEMENT
    }

    function fD(DD) {
      const zD = DD.buffer;
      if (zD instanceof ArrayBuffer) return DD;
      const wD = new ArrayBuffer(DD.byteLength);
      return new Uint8Array(wD).set(new Uint8Array(zD, DD.byteOffset, DD.byteLength)), wD
    }
  },
  39813: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => XD,
      g: () => ED,
      j: () => QD,
      h: () => jD,
      l: () => dD
    });
    class pD {
      constructor() {
        this.children = []
      }
      isValid(DD) {
        return !0
      }
      process(DD, zD, wD) {
        let pD = "";
        if (this.line) {
          let wD = this.line;
          const sD = zD.processor;
          if (sD) {
            sD.lineProcessor && (wD = sD.lineProcessor(wD, zD.isFragment, zD.processingContext));
            const pD = zD.processor?.attributeKeywordName ?? "attribute",
              KD = zD.isFragment && zD.processor?.varyingFragmentKeywordName ? zD.processor?.varyingFragmentKeywordName : !zD.isFragment && zD.processor?.varyingVertexKeywordName ? zD.processor?.varyingVertexKeywordName : "varying";
            if (!zD.isFragment && sD.attributeProcessor && this.line.startsWith(pD)) wD = sD.attributeProcessor(this.line, DD, zD.processingContext);
            else if (sD.varyingProcessor && (sD.varyingCheck?.(this.line, zD.isFragment) || !sD.varyingCheck && this.line.startsWith(KD))) wD = sD.varyingProcessor(this.line, zD.isFragment, DD, zD.processingContext);
            else if (sD.uniformProcessor && sD.uniformRegexp && sD.uniformRegexp.test(this.line)) zD.lookForClosingBracketForUniformBuffer || (wD = sD.uniformProcessor(this.line, zD.isFragment, DD, zD.processingContext));
            else if (sD.uniformBufferProcessor && sD.uniformBufferRegexp && sD.uniformBufferRegexp.test(this.line)) zD.lookForClosingBracketForUniformBuffer || (wD = sD.uniformBufferProcessor(this.line, zD.isFragment, zD.processingContext), zD.lookForClosingBracketForUniformBuffer = !0);
            else if (sD.textureProcessor && sD.textureRegexp && sD.textureRegexp.test(this.line)) wD = sD.textureProcessor(this.line, zD.isFragment, DD, zD.processingContext);
            else if ((sD.uniformProcessor || sD.uniformBufferProcessor) && this.line.startsWith("uniform") && !zD.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? sD.uniformProcessor && (wD = sD.uniformProcessor(this.line, zD.isFragment, DD, zD.processingContext)) : sD.uniformBufferProcessor && (wD = sD.uniformBufferProcessor(this.line, zD.isFragment, zD.processingContext), zD.lookForClosingBracketForUniformBuffer = !0)
            }
            zD.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (zD.lookForClosingBracketForUniformBuffer = !1, sD.endOfUniformBufferProcessor && (wD = sD.endOfUniformBufferProcessor(this.line, zD.isFragment, zD.processingContext)))
          }
          pD += wD + "\n"
        }
        for (const sD of this.children) pD += sD.process(DD, zD, wD);
        return this.additionalDefineKey && (DD[this.additionalDefineKey] = this.additionalDefineValue || "true", wD[this.additionalDefineKey] = DD[this.additionalDefineKey]), pD
      }
    }
    class sD {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(DD) {
        this._lines.length = 0;
        for (const zD of DD) {
          if (!zD || "\r" === zD) continue;
          if ("#" === zD[0]) {
            this._lines.push(zD);
            continue
          }
          const DD = zD.trim();
          if (!DD) continue;
          if (DD.startsWith("//")) {
            this._lines.push(zD);
            continue
          }
          const wD = DD.indexOf(";");
          if (-1 === wD) this._lines.push(DD);
          else if (wD === DD.length - 1) DD.length > 1 && this._lines.push(DD);
          else {
            const DD = zD.split(";");
            for (let zD = 0; zD < DD.length; zD++) {
              let wD = DD[zD];
              wD && (wD = wD.trim(), wD && this._lines.push(wD + (zD !== DD.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class KD extends pD {
      process(DD, zD, wD) {
        for (let pD = 0; pD < this.children.length; pD++) {
          const sD = this.children[pD];
          if (sD.isValid(DD)) return sD.process(DD, zD, wD)
        }
        return ""
      }
    }
    class rD extends pD {
      isValid(DD) {
        return this.testExpression.isTrue(DD)
      }
    }
    class LD {
      isTrue(DD) {
        return !0
      }
      static postfixToInfix(DD) {
        const zD = [];
        for (const wD of DD)
          if (void 0 === LD._OperatorPriority[wD]) zD.push(wD);
          else {
            const DD = zD[zD.length - 1],
              pD = zD[zD.length - 2];
            zD.length -= 2, zD.push(`(${pD}${wD}${DD})`)
          } return zD[zD.length - 1]
      }
      static infixToPostfix(DD) {
        const zD = LD._InfixToPostfixCache.get(DD);
        if (zD) return zD.accessTime = Date.now(), zD.result;
        if (!DD.includes("&&") && !DD.includes("||") && !DD.includes(")") && !DD.includes("(")) return [DD];
        const wD = [];
        let pD = -1;
        const sD = () => {
            RD = RD.trim(), "" !== RD && (wD.push(RD), RD = "")
          },
          KD = DD => {
            pD < LD._Stack.length - 1 && (LD._Stack[++pD] = DD)
          },
          rD = () => LD._Stack[pD],
          cD = () => -1 === pD ? "!!INVALID EXPRESSION!!" : LD._Stack[pD--];
        let gD = 0,
          RD = "";
        for (; gD < DD.length;) {
          const zD = DD.charAt(gD),
            AD = gD < DD.length - 1 ? DD.substring(gD, 2 + gD) : "";
          if ("(" === zD) RD = "", KD(zD);
          else if (")" === zD) {
            for (sD(); - 1 !== pD && "(" !== rD();) wD.push(cD());
            cD()
          } else if (LD._OperatorPriority[AD] > 1) {
            for (sD(); - 1 !== pD && LD._OperatorPriority[rD()] >= LD._OperatorPriority[AD];) wD.push(cD());
            KD(AD), gD++
          } else RD += zD;
          gD++
        }
        for (sD(); - 1 !== pD;) "(" === rD() ? cD() : wD.push(cD());
        return LD._InfixToPostfixCache.size >= LD.InfixToPostfixCacheLimitSize && LD.ClearCache(), LD._InfixToPostfixCache.set(DD, {
          result: wD,
          accessTime: Date.now()
        }), wD
      }
      static ClearCache() {
        const DD = Array.from(LD._InfixToPostfixCache.entries()).sort(((DD, zD) => DD[1].accessTime - zD[1].accessTime));
        for (let zD = 0; zD < LD.InfixToPostfixCacheCleanupSize; zD++) LD._InfixToPostfixCache.delete(DD[zD][0])
      }
    }
    LD.InfixToPostfixCacheLimitSize = 5e4, LD.InfixToPostfixCacheCleanupSize = 25e3, LD._InfixToPostfixCache = new Map, LD._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, LD._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class cD extends LD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = DD, this.not = zD
      }
      isTrue(DD) {
        let zD = void 0 !== DD[this.define];
        return this.not && (zD = !zD), zD
      }
    }
    class gD extends LD {
      isTrue(DD) {
        return this.leftOperand.isTrue(DD) || this.rightOperand.isTrue(DD)
      }
    }
    class RD extends LD {
      isTrue(DD) {
        return this.leftOperand.isTrue(DD) && this.rightOperand.isTrue(DD)
      }
    }
    class AD extends LD {
      constructor(DD, zD, wD) {
        super(), this.define = DD, this.operand = zD, this.testValue = wD
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(DD) {
        let zD = !1;
        const wD = parseInt(void 0 != DD[this.define] ? DD[this.define] : this.define),
          pD = parseInt(void 0 != DD[this.testValue] ? DD[this.testValue] : this.testValue);
        if (isNaN(wD) || isNaN(pD)) return !1;
        switch (this.operand) {
          case ">":
            zD = wD > pD;
            break;
          case "<":
            zD = wD < pD;
            break;
          case "<=":
            zD = wD <= pD;
            break;
          case ">=":
            zD = wD >= pD;
            break;
          case "==":
            zD = wD === pD;
            break;
          case "!=":
            zD = wD !== pD
        }
        return zD
      }
    }
    var UD = wD(39808),
      fD = wD(39800);
    const ID = /defined\s*?\((.+?)\)/g,
      BD = /defined\s*?\[(.+?)\]/g,
      GD = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      hD = /__decl__/,
      nD = /light\{X\}.(\w*)/g,
      MD = /\{X\}/g,
      OD = [],
      JD = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function ED(DD) {
      DD.processor && DD.processor.initializeShaders && DD.processor.initializeShaders(DD.processingContext)
    }

    function QD(DD, zD, wD, pD) {
      zD.processor?.preProcessShaderCode && (DD = zD.processor.preProcessShaderCode(DD, zD.isFragment)), jD(DD, zD, (DD => {
        zD.processCodeAfterIncludes && (DD = zD.processCodeAfterIncludes(zD.isFragment ? "fragment" : "vertex", DD, zD.defines));
        const sD = function(DD, zD, wD) {
          let pD = function(DD, zD) {
            if (zD.processor?.noPrecision) return DD;
            const wD = zD.shouldUseHighPrecisionShader; - 1 === DD.indexOf("precision highp float") ? DD = wD ? "precision highp float;\n" + DD : "precision mediump float;\n" + DD : wD || (DD = DD.replace("precision highp float", "precision mediump float"));
            return DD
          }(DD, zD);
          if (!zD.processor) return pD;
          if (0 === zD.processor.shaderLanguage && -1 !== pD.indexOf("#version 3") && (pD = pD.replace("#version 300 es", ""), !zD.processor.parseGLES3)) return pD;
          const sD = zD.defines,
            KD = bD(zD, wD);
          zD.processor.preProcessor && (pD = zD.processor.preProcessor(pD, sD, KD, zD.isFragment, zD.processingContext));
          const rD = {};
          pD = TD(pD, KD, zD, rD), zD.processor.postProcessor && (pD = zD.processor.postProcessor(pD, sD, zD.isFragment, zD.processingContext, wD ? {
            drawBuffersExtensionDisabled: !wD.getCaps().drawBuffersExtension
          } : {}, KD, rD));
          wD?._features.needShaderCodeInlining && (pD = wD.inlineShaderCode(pD));
          return pD
        }(DD, zD, pD);
        wD(sD, DD)
      }))
    }

    function XD(DD, zD, wD) {
      return wD.processor && wD.processor.finalizeShaders ? wD.processor.finalizeShaders(DD, zD, wD.processingContext) : {
        vertexCode: DD,
        fragmentCode: zD
      }
    }

    function VD(DD) {
      const zD = /defined\((.+)\)/.exec(DD);
      if (zD && zD.length) return new cD(zD[1].trim(), "!" === DD[0]);
      const wD = ["==", "!=", ">=", "<=", "<", ">"];
      let pD = "",
        sD = 0;
      for (pD of wD)
        if (sD = DD.indexOf(pD), sD > -1) break;
      if (-1 === sD) return new cD(DD);
      const KD = DD.substring(0, sD).trim(),
        rD = DD.substring(sD + pD.length).trim();
      return new AD(KD, pD, rD)
    }

    function PD(DD, zD) {
      const wD = new rD,
        pD = DD.substring(0, zD);
      let sD = DD.substring(zD);
      return sD = sD.substring(0, (sD.indexOf("//") + 1 || sD.length + 1) - 1).trim(), wD.testExpression = "#ifdef" === pD ? new cD(sD) : "#ifndef" === pD ? new cD(sD, !0) : function(DD) {
        DD = DD.replace(ID, "defined[$1]");
        const zD = LD.infixToPostfix(DD),
          wD = [];
        for (const sD of zD)
          if ("||" !== sD && "&&" !== sD) wD.push(sD);
          else if (wD.length >= 2) {
          let DD = wD[wD.length - 1],
            zD = wD[wD.length - 2];
          wD.length -= 2;
          const pD = "&&" == sD ? new RD : new gD;
          "string" === typeof DD && (DD = DD.replace(BD, "defined($1)")), "string" === typeof zD && (zD = zD.replace(BD, "defined($1)")), pD.leftOperand = "string" === typeof zD ? VD(zD) : zD, pD.rightOperand = "string" === typeof DD ? VD(DD) : DD, wD.push(pD)
        }
        let pD = wD[wD.length - 1];
        return "string" === typeof pD && (pD = pD.replace(BD, "defined($1)")), "string" === typeof pD ? VD(pD) : pD
      }(sD), wD
    }

    function CD(DD, zD, wD, sD) {
      let KD;
      for (; xD(DD, wD, sD);) {
        KD = DD.currentLine;
        const rD = KD.substring(0, 5).toLowerCase();
        if ("#else" === rD) {
          const wD = new pD;
          return zD.children.push(wD), void xD(DD, wD, sD)
        }
        if ("#elif" === rD) {
          const DD = PD(KD, 5);
          zD.children.push(DD), wD = DD
        }
      }
    }

    function xD(DD, zD, wD) {
      for (; DD.canRead;) {
        DD.lineIndex++;
        const sD = DD.currentLine;
        if (sD.indexOf("#") >= 0) {
          const pD = JD.exec(sD);
          if (pD && pD.length) {
            switch (pD[0]) {
              case "#ifdef": {
                const pD = new KD;
                zD.children.push(pD);
                const rD = PD(sD, 6);
                pD.children.push(rD), CD(DD, pD, rD, wD);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const pD = new KD;
                zD.children.push(pD);
                const rD = PD(sD, 7);
                pD.children.push(rD), CD(DD, pD, rD, wD);
                break
              }
              case "#if": {
                const pD = new KD,
                  rD = PD(sD, 3);
                zD.children.push(pD), pD.children.push(rD), CD(DD, pD, rD, wD);
                break
              }
            }
            continue
          }
        }
        const rD = new pD;
        if (rD.line = sD, zD.children.push(rD), "#" === sD[0] && "d" === sD[1]) {
          const DD = sD.replace(";", "").split(" ");
          rD.additionalDefineKey = DD[1], 3 === DD.length && (rD.additionalDefineValue = DD[2])
        }
      }
      return !1
    }

    function TD(DD, zD, wD, KD) {
      const rD = new pD,
        LD = new sD;
      return LD.lineIndex = -1, LD.lines = DD.split("\n"), xD(LD, rD, KD), rD.process(zD, wD, KD)
    }

    function bD(DD, zD) {
      const wD = DD.defines,
        pD = {};
      for (const sD of wD) {
        const DD = sD.replace("#define", "").replace(";", "").trim().split(" ");
        pD[DD[0]] = DD.length > 1 ? DD[1] : ""
      }
      return 0 === DD.processor?.shaderLanguage && (pD.GL_ES = "true"), pD.__VERSION__ = DD.version, pD[DD.platformName] = "true", (0, fD.j)(pD, zD?.isNDCHalfZRange, zD?.OpD, zD?.useExactSrgbConversions), pD
    }

    function jD(DD, zD, wD) {
      let pD;
      for (OD.length = 0; null !== (pD = GD.exec(DD));) OD.push(pD);
      let sD = [DD],
        KD = !1;
      for (const LD of OD) {
        let DD = LD[1];
        if (-1 !== DD.indexOf("__decl__") && (DD = DD.replace(hD, ""), zD.supportsUniformBuffers && (DD = DD.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), DD += "Declaration"), !zD.includesShadersStore[DD]) {
          const pD = zD.shadersRepository + "ShadersInclude/" + DD + ".fx";
          return void dD.loadFile(pD, (pD => {
            zD.includesShadersStore[DD] = pD, jD(sD.join(""), zD, wD)
          }))
        } {
          let wD = zD.includesShadersStore[DD];
          if (LD[2]) {
            const DD = LD[3].split(",");
            for (let zD = 0; zD < DD.length; zD += 2) {
              const pD = new RegExp(DD[zD], "g"),
                sD = DD[zD + 1];
              wD = wD.replace(pD, sD)
            }
          }
          if (LD[4]) {
            const DD = LD[5];
            if (-1 !== DD.indexOf("..")) {
              const pD = DD.split(".."),
                sD = parseInt(pD[0]);
              let KD = parseInt(pD[1]),
                rD = wD.slice(0);
              wD = "", isNaN(KD) && (KD = zD.indexParameters[pD[1]]);
              for (let DD = sD; DD < KD; DD++) zD.supportsUniformBuffers || (rD = rD.replace(nD, ((DD, zD) => zD + "{X}"))), wD += rD.replace(MD, DD.toString()) + "\n"
            } else zD.supportsUniformBuffers || (wD = wD.replace(nD, ((DD, zD) => zD + "{X}"))), wD = wD.replace(MD, DD)
          }
          const pD = [];
          for (const DD of sD) {
            const zD = DD.split(LD[0]);
            for (let DD = 0; DD < zD.length - 1; DD++) pD.push(zD[DD]), pD.push(wD);
            pD.push(zD[zD.length - 1])
          }
          sD = pD, KD = KD || wD.indexOf("#include<") >= 0 || wD.indexOf("#include <") >= 0
        }
      }
      OD.length = 0;
      const rD = sD.join("");
      KD ? jD(rD.toString(), zD, wD) : wD(rD)
    }
    const dD = {
      loadFile: (DD, zD, wD, pD, sD, KD) => {
        throw (0, UD.j)("FileTools")
      }
    }
  },
  39800: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD,
      i: () => KD,
      j: () => LD,
      k: () => rD,
      l: () => cD
    });
    var pD = wD(39808);
    const sD = {};

    function KD(DD, zD) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (zD ? zD + "\n" : "") + DD
    }

    function rD(DD, zD, wD, KD, rD, LD, cD) {
      const gD = cD || sD.loadFile;
      if (!gD) throw (0, pD.j)("FileTools");
      return gD(DD, zD, wD, KD, rD, LD)
    }

    function LD(DD, zD, wD, pD) {
      if (DD) return zD ? DD.IS_NDC_HALF_ZRANGE = "" : delete DD.IS_NDC_HALF_ZRANGE, wD ? DD.USE_REVERSE_DEPTHBUFFER = "" : delete DD.USE_REVERSE_DEPTHBUFFER, void(pD ? DD.USE_EXACT_SRGB_CONVERSIONS = "" : delete DD.USE_EXACT_SRGB_CONVERSIONS);
      {
        let DD = "";
        return zD && (DD += "#define IS_NDC_HALF_ZRANGE"), wD && (DD && (DD += "\n"), DD += "#define USE_REVERSE_DEPTHBUFFER"), pD && (DD && (DD += "\n"), DD += "#define USE_EXACT_SRGB_CONVERSIONS"), DD
      }
    }

    function cD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        pD = arguments.length > 3 ? arguments[3] : void 0;
      switch (DD) {
        case 3: {
          const DD = new Int8Array(zD);
          return pD && DD.set(new Int8Array(pD)), DD
        }
        case 0: {
          const DD = new Uint8Array(zD);
          return pD && DD.set(new Uint8Array(pD)), DD
        }
        case 4: {
          const DD = "number" !== typeof zD ? new Int16Array(zD) : new Int16Array(wD ? zD / 2 : zD);
          return pD && DD.set(new Int16Array(pD)), DD
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const DD = "number" !== typeof zD ? new Uint16Array(zD) : new Uint16Array(wD ? zD / 2 : zD);
          return pD && DD.set(new Uint16Array(pD)), DD
        }
        case 6: {
          const DD = "number" !== typeof zD ? new Int32Array(zD) : new Int32Array(wD ? zD / 4 : zD);
          return pD && DD.set(new Int32Array(pD)), DD
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const DD = "number" !== typeof zD ? new Uint32Array(zD) : new Uint32Array(wD ? zD / 4 : zD);
          return pD && DD.set(new Uint32Array(pD)), DD
        }
        case 1: {
          const DD = "number" !== typeof zD ? new Float32Array(zD) : new Float32Array(wD ? zD / 4 : zD);
          return pD && DD.set(new Float32Array(pD)), DD
        }
      }
      const sD = new Uint8Array(zD);
      return pD && sD.set(new Uint8Array(pD)), sD
    }
  },
  39808: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => gD,
      g: () => RD,
      h: () => cD,
      j: () => sD
    });
    const pD = {};

    function sD(DD) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !pD[DD]) return pD[DD] = !0, `${DD} needs to be imported before as it contains a side-effect required by your code.`
    }
    const KD = {};
    let rD = !1,
      LD = 0;

    function cD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const pD = function() {
        if ((wD || rD) && 0 === LD) {
          const wD = `${DD}.${zD}`;
          KD[wD] || (KD[wD] = !0, console.warn(`[Babylon.js] ${wD}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return pD.__isSideEffectStub = !0, pD
    }

    function gD(DD) {
      return !!DD && !DD.__isSideEffectStub
    }

    function RD(DD, zD) {
      return {
        get() {},
        set(DD) {
          Object.defineProperty(this, zD, {
            value: DD,
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
  39785: (DD, zD, wD) => {
    function pD() {
      return "undefined" !== typeof window
    }

    function sD() {
      return "undefined" !== typeof navigator
    }

    function KD() {
      return "undefined" !== typeof document
    }

    function rD(DD) {
      let zD = "",
        wD = DD.firstChild;
      for (; wD;) 3 === wD.nodeType && (zD += wD.textContent), wD = wD.nextSibling;
      return zD
    }
    wD.d(zD, {
      b: () => rD,
      c: () => KD,
      f: () => sD,
      h: () => pD
    })
  },
  39971: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD,
      d: () => sD,
      g: () => KD
    });
    class pD extends Error {}
    pD._setPrototypeOf = Object.setPrototypeOf || ((DD, zD) => (DD.__proto__ = zD, DD));
    const sD = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class KD extends pD {
      constructor(DD, zD, wD) {
        super(DD), this.errorCode = zD, this.innerError = wD, this.name = "RuntimeError", pD._setPrototypeOf(this, KD.prototype)
      }
    }
  },
  39960: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => bD,
      g: () => MD,
      h: () => PD,
      l: () => xD,
      o: () => XD,
      r: () => ED,
      u: () => QD,
      y: () => lD,
      C: () => VD,
      G: () => OD
    });
    var pD = wD(39969),
      sD = wD(39785),
      KD = wD(37119);
    class rD {}
    rD.FilesToLoad = {};
    var LD = wD(39971),
      cD = wD(39975),
      gD = wD(37110),
      RD = wD(39800),
      AD = wD(39813),
      UD = wD(38662),
      fD = wD(39820),
      ID = wD(39984);
    const BD = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class GD extends LD.g {
      constructor(DD, zD) {
        super(DD, LD.d.LoadFileError), this.name = "LoadFileError", LD.c._setPrototypeOf(this, GD.prototype), zD instanceof pD.e ? this.request = zD : this.file = zD
      }
    }
    class hD extends LD.g {
      constructor(DD, zD) {
        super(DD, LD.d.RequestFileError), this.request = zD, this.name = "RequestFileError", LD.c._setPrototypeOf(this, hD.prototype)
      }
    }
    class nD extends LD.g {
      constructor(DD, zD) {
        super(DD, LD.d.ReadFileError), this.file = zD, this.name = "ReadFileError", LD.c._setPrototypeOf(this, nD.prototype)
      }
    }
    const MD = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (wD, pD, sD) => 0 !== pD.status || sD >= DD || -1 !== wD.indexOf("file:") ? -1 : Math.pow(2, sD) * zD
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: DD => DD,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: DD => DD,
        CleanUrl: DD => DD = DD.replace(/#/gm, "%23")
      },
      OD = (DD, zD) => {
        if ((!DD || 0 !== DD.indexOf("data:")) && MD.CorsBehavior)
          if ("string" === typeof MD.CorsBehavior || MD.CorsBehavior instanceof String) zD.crossOrigin = MD.CorsBehavior;
          else {
            const wD = MD.CorsBehavior(DD);
            wD && (zD.crossOrigin = wD)
          }
      },
      JD = {
        getRequiredSize: null
      },
      ED = function(DD, zD, wD, sD) {
        let KD, LD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          RD = arguments.length > 5 ? arguments[5] : void 0,
          AD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : gD.d.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !AD?._features.forceBitmapOverHTMLImageElement) return wD("LoadImage is only supported in web or BabylonNative environments."), null;
        if (AD?._features.forceBitmapOverHTMLImageElement && "string" !== typeof DD && "undefined" !== typeof Blob) {
          let pD;
          if (DD instanceof Blob) pD = DD;
          else {
            const zD = DD instanceof ArrayBuffer ? DD : (0, ID.j)(DD);
            pD = new Blob([zD], {
              type: LD
            })
          }
          return AD.createImageBitmap(pD, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...RD
          }).then(zD).catch((zD => {
            wD && wD("Error while trying to load image: " + DD, zD)
          })), null
        }
        let UD = !1;
        if (DD instanceof ArrayBuffer || ArrayBuffer.isView(DD))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let zD;
            zD = DD instanceof ArrayBuffer ? DD : (0, ID.j)(DD), KD = URL.createObjectURL(new Blob([zD], {
              type: LD
            })), UD = !0
          } else KD = `data:${LD};base64,` + (0, cD.e)(DD);
        else DD instanceof Blob ? (KD = URL.createObjectURL(DD), UD = !0) : (KD = MD.CleanUrl(DD), KD = MD.PreprocessUrl(KD));
        const fD = zD => {
          if (wD) {
            const pD = KD || DD.toString();
            wD(`Error while trying to load image: ${0===pD.indexOf("http")||pD.length<=128?pD:pD.slice(0,128)+"..."}`, zD)
          }
        };
        if (AD?._features.forceBitmapOverHTMLImageElement) return XD(KD, (pD => {
          AD.createImageBitmap(new Blob([pD], {
            type: LD
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...RD
          }).then((DD => {
            zD(DD), UD && URL.revokeObjectURL(KD)
          })).catch((zD => {
            wD && wD("Error while trying to load image: " + DD, zD)
          }))
        }), void 0, sD || void 0, !0, ((DD, zD) => {
          fD(zD)
        })), null;
        const BD = new Image;
        if (JD.getRequiredSize) {
          const zD = JD.getRequiredSize(DD);
          zD.width && (BD.width = zD.width), zD.height && (BD.height = zD.height)
        }
        OD(KD, BD);
        const GD = [],
          hD = () => {
            for (const DD of GD) DD.target.removeEventListener(DD.name, DD.handler);
            GD.length = 0
          };
        GD.push({
          target: BD,
          name: "load",
          handler: () => {
            hD(), zD(BD), UD && BD.src && URL.revokeObjectURL(BD.src)
          }
        }), GD.push({
          target: BD,
          name: "error",
          handler: DD => {
            hD(), fD(DD), UD && BD.src && URL.revokeObjectURL(BD.src)
          }
        }), GD.push({
          target: document,
          name: "securitypolicyviolation",
          handler: DD => {
            if (DD.blockedURI !== BD.src || "sI" === DD.disposition) return;
            hD();
            const zD = new Error(`CSP violation of policy ${DD.effectiveDirective} ${DD.blockedURI}. Current policy is ${DD.originalPolicy}`);
            gD.d.UseFallbackTexture = !1, fD(zD), UD && BD.src && URL.revokeObjectURL(BD.src), BD.src = ""
          }
        }), (() => {
          for (const DD of GD) DD.target.addEventListener(DD.name, DD.handler)
        })();
        const nD = "blob:" === KD.substring(0, 5),
          ED = "data:" === KD.substring(0, 5),
          QD = () => {
            nD || ED || !pD.e.IsCustomRequestAvailable ? BD.src = KD : XD(KD, ((DD, zD, wD) => {
              const pD = new Blob([DD], {
                  type: !LD && wD ? wD : LD
                }),
                sD = URL.createObjectURL(pD);
              UD = !0, BD.src = sD
            }), void 0, sD || void 0, !0, ((DD, zD) => {
              fD(zD)
            }))
          },
          VD = () => {
            sD && sD.loadImage(KD, BD)
          };
        if (!nD && !ED && sD && sD.enableTexturesOffline) sD.open(VD, QD);
        else {
          if (-1 !== KD.indexOf("file:")) {
            const DD = decodeURIComponent(KD.substring(5).toLowerCase());
            if (rD.FilesToLoad[DD] && "undefined" !== typeof URL) {
              try {
                let zD;
                try {
                  zD = URL.createObjectURL(rD.FilesToLoad[DD])
                } catch (PD) {
                  zD = URL.createObjectURL(rD.FilesToLoad[DD])
                }
                BD.src = zD, UD = !0
              } catch (CD) {
                BD.src = ""
              }
              return BD
            }
          }
          QD()
        }
        return BD
      },
      QD = (DD, zD, wD, pD, sD) => {
        const rD = new FileReader,
          LD = {
            onCompleteObservable: new KD.b,
            abort: () => rD.abort()
          };
        return rD.onloadend = () => LD.onCompleteObservable.notifyObservers(LD), sD && (rD.onerror = () => {
          sD(new nD(`Unable to read ${DD.name}`, DD))
        }), rD.onload = DD => {
          zD(DD.target.result)
        }, wD && (rD.onprogress = wD), pD ? rD.readAsArrayBuffer(DD) : rD.readAsText(DD), LD
      },
      XD = (DD, zD, wD, pD, sD, cD, gD) => {
        if (DD.name) return QD(DD, zD, wD, sD, cD ? DD => {
          cD(void 0, DD)
        } : void 0);
        const RD = DD;
        if (-1 !== RD.indexOf("file:")) {
          let DD = decodeURIComponent(RD.substring(5).toLowerCase());
          0 === DD.indexOf("./") && (DD = DD.substring(2));
          const pD = rD.FilesToLoad[DD];
          if (pD) return QD(pD, zD, wD, sD, cD ? DD => cD(void 0, new GD(DD.message, DD.file)) : void 0)
        }
        const {
          match: AD,
          type: ID
        } = TD(RD);
        if (AD) {
          const DD = {
            onCompleteObservable: new KD.b,
            abort: () => () => {}
          };
          try {
            const DD = sD ? bD(RD) : jD(RD);
            zD(DD, void 0, ID)
          } catch (LD) {
            cD ? cD(void 0, LD) : UD.d.Error(LD.message || "Failed to parse the Data URL")
          }
          return fD.d.SetImmediate((() => {
            DD.onCompleteObservable.notifyObservers(DD)
          })), DD
        }
        return VD(RD, ((DD, wD) => {
          zD(DD, wD?.responseURL, wD?.getResponseHeader("content-type"))
        }), wD, pD, sD, cD ? DD => {
          cD(DD.request, new GD(DD.message, DD.request))
        } : void 0, gD)
      },
      VD = (DD, zD, wD, rD, LD, cD, RD) => {
        null !== rD && (rD ?? (rD = gD.d.LastCreatedScene?.offlineProvider)), DD = MD.CleanUrl(DD), DD = MD.PreprocessUrl(DD);
        const AD = MD.BaseUrl + DD;
        let fD = !1;
        const ID = {
            onCompleteObservable: new KD.b,
            abort: () => fD = !0
          },
          BD = () => {
            let DD, KD = new pD.e,
              rD = null;
            const gD = () => {
              KD && (wD && KD.removeEventListener("progress", wD), DD && KD.removeEventListener("readystatechange", DD), KD.removeEventListener("loadend", BD))
            };
            let BD = () => {
              gD(), ID.onCompleteObservable.notifyObservers(ID), ID.onCompleteObservable.clear(), wD = void 0, DD = null, BD = null, cD = void 0, RD = void 0, zD = void 0
            };
            ID.abort = () => {
              fD = !0, BD && BD(), KD && KD.readyState !== (XMLHttpRequest.DONE || 4) && KD.abort(), null !== rD && (clearTimeout(rD), rD = null), KD = null
            };
            const GD = DD => {
                const zD = DD.message || "Unknown error";
                cD && KD ? cD(new hD(zD, KD)) : UD.d.Error(zD)
              },
              nD = UD => {
                if (KD) {
                  if (KD.open("GET", AD), RD) try {
                    RD(KD)
                  } catch (ID) {
                    return void GD(ID)
                  }
                  LD && (KD.responseType = "arraybuffer"), wD && KD.addEventListener("progress", wD), BD && KD.addEventListener("loadend", BD), DD = () => {
                    if (!fD && KD && KD.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (DD && KD.removeEventListener("readystatechange", DD), KD.status >= 200 && KD.status < 300 || 0 === KD.status && (!(0, sD.h)() || CD())) {
                        const DD = LD ? KD.response : KD.responseText;
                        if (null !== DD) {
                          try {
                            zD && zD(DD, KD)
                          } catch (ID) {
                            GD(ID)
                          }
                          return
                        }
                      }
                      const wD = MD.DefaultRetryStrategy;
                      if (wD) {
                        const DD = wD(AD, KD, UD);
                        if (-1 !== DD) return gD(), KD = new pD.e, void(rD = setTimeout((() => nD(UD + 1)), DD))
                      }
                      const RD = new hD("Error status: " + KD.status + " " + KD.statusText + " - Unable to load " + AD, KD);
                      cD && cD(RD)
                    }
                  }, KD.addEventListener("readystatechange", DD), KD.send()
                }
              };
            nD(0)
          };
        if (rD && rD.enableSceneOffline && !DD.startsWith("blob:")) {
          const pD = DD => {
              DD && DD.status > 400 ? cD && cD(DD) : BD()
            },
            sD = () => {
              rD && rD.loadFile(MD.BaseUrl + DD, (DD => {
                !fD && zD && zD(DD), ID.onCompleteObservable.notifyObservers(ID)
              }), wD ? DD => {
                !fD && wD && wD(DD)
              } : void 0, pD, LD)
            };
          rD.open(sD, pD)
        } else BD();
        return ID
      },
      PD = DD => {
        const {
          match: zD,
          type: wD
        } = TD(DD);
        if (zD) return wD || void 0;
        const pD = DD.lastIndexOf(".");
        switch (DD.substring(pD + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "kS":
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
      CD = () => "undefined" !== typeof location && "file:" === location.protocol,
      xD = DD => BD.test(DD),
      TD = DD => {
        const zD = BD.exec(DD);
        if (null === zD || 0 === zD.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: zD[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function bD(DD) {
      return (0, cD.c)(DD.split(",")[1])
    }
    const jD = DD => (0, cD.d)(DD.split(",")[1]);
    let dD;
    const SD = (DD, zD, wD, pD, sD, KD, rD, LD, cD, gD) => {
      dD = {
        DecodeBase64UrlToBinary: DD,
        DecodeBase64UrlToString: zD,
        DefaultRetryStrategy: wD.DefaultRetryStrategy,
        BaseUrl: wD.BaseUrl,
        CorsBehavior: wD.CorsBehavior,
        PreprocessUrl: wD.PreprocessUrl,
        IsBase64DataUrl: pD,
        IsFileURL: sD,
        LoadFile: KD,
        LoadImage: rD,
        ReadFile: LD,
        RequestFile: cD,
        SetCorsBehavior: gD
      }, Object.defineProperty(dD, "DefaultRetryStrategy", {
        get: function() {
          return wD.DefaultRetryStrategy
        },
        set: function(DD) {
          wD.DefaultRetryStrategy = DD
        }
      }), Object.defineProperty(dD, "BaseUrl", {
        get: function() {
          return wD.BaseUrl
        },
        set: function(DD) {
          wD.BaseUrl = DD
        }
      }), Object.defineProperty(dD, "PreprocessUrl", {
        get: function() {
          return wD.PreprocessUrl
        },
        set: function(DD) {
          wD.PreprocessUrl = DD
        }
      }), Object.defineProperty(dD, "CorsBehavior", {
        get: function() {
          return wD.CorsBehavior
        },
        set: function(DD) {
          wD.CorsBehavior = DD
        }
      })
    };
    let iD = !1;

    function lD() {
      iD || (iD = !0, SD(bD, jD, MD, xD, CD, XD, ED, QD, VD, OD), RD.e.loadFile = XD, RD.e.loadImage = ED, AD.l.loadFile = XD)
    }
  },
  39990: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD,
      f: () => KD,
      g: () => rD
    });
    let pD = null;

    function sD() {
      if (pD) return pD;
      const DD = new ArrayBuffer(4),
        zD = new Float32Array(DD),
        wD = new Uint32Array(DD),
        sD = new Uint32Array(512),
        KD = new Uint32Array(512);
      for (let pD = 0; pD < 256; ++pD) {
        const DD = pD - 127;
        DD < -24 ? (sD[pD] = 0, sD[256 | pD] = 32768, KD[pD] = 24, KD[256 | pD] = 24) : DD < -14 ? (sD[pD] = 1024 >> -DD - 14, sD[256 | pD] = 1024 >> -DD - 14 | 32768, KD[pD] = -DD - 1, KD[256 | pD] = -DD - 1) : DD <= 15 ? (sD[pD] = DD + 15 << 10, sD[256 | pD] = DD + 15 << 10 | 32768, KD[pD] = 13, KD[256 | pD] = 13) : DD < 128 ? (sD[pD] = 31744, sD[256 | pD] = 64512, KD[pD] = 24, KD[256 | pD] = 24) : (sD[pD] = 31744, sD[256 | pD] = 64512, KD[pD] = 13, KD[256 | pD] = 13)
      }
      const rD = new Uint32Array(2048),
        LD = new Uint32Array(64),
        cD = new Uint32Array(64);
      for (let pD = 1; pD < 1024; ++pD) {
        let DD = pD << 13,
          zD = 0;
        for (; 0 === (8388608 & DD);) DD <<= 1, zD -= 8388608;
        DD &= -8388609, zD += 947912704, rD[pD] = DD | zD
      }
      for (let pD = 1024; pD < 2048; ++pD) rD[pD] = 939524096 + (pD - 1024 << 13);
      for (let pD = 1; pD < 31; ++pD) LD[pD] = pD << 23;
      LD[31] = 1199570944, LD[32] = 2147483648;
      for (let pD = 33; pD < 63; ++pD) LD[pD] = 2147483648 + (pD - 32 << 23);
      LD[63] = 3347054592;
      for (let pD = 1; pD < 64; ++pD) 32 !== pD && (cD[pD] = 1024);
      return pD = {
        floatView: zD,
        uint32View: wD,
        baseTable: sD,
        shiftTable: KD,
        mantissaTable: rD,
        exponentTable: LD,
        offsetTable: cD
      }, pD
    }
    const KD = 65504;

    function rD(DD) {
      const zD = sD();
      zD.floatView[0] = DD;
      const wD = zD.uint32View[0],
        pD = wD >> 23 & 511;
      return zD.baseTable[pD] + ((8388607 & wD) >> zD.shiftTable[pD])
    }

    function LD(DD) {
      const zD = sD();
      return zD.uint32View[0] = zD.mantissaTable[zD.offsetTable[DD >> 10] + (1023 & DD)] + zD.exponentTable[DD >> 10], zD.floatView[0]
    }
  },
  39975: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => KD,
      d: () => sD,
      e: () => pD
    });
    const pD = DD => {
        const zD = ArrayBuffer.isView(DD) ? new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength) : new Uint8Array(DD);
        return "function" === typeof zD.toBase64 ? zD.toBase64() : function(DD) {
          const zD = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let wD, pD, sD, KD, rD, LD, cD, gD = "",
            RD = 0;
          for (; RD < DD.length;) wD = DD[RD++], pD = RD < DD.length ? DD[RD++] : Number.NaN, sD = RD < DD.length ? DD[RD++] : Number.NaN, KD = wD >> 2, rD = (3 & wD) << 4 | pD >> 4, LD = (15 & pD) << 2 | sD >> 6, cD = 63 & sD, isNaN(pD) ? LD = cD = 64 : isNaN(sD) && (cD = 64), gD += zD.charAt(KD) + zD.charAt(rD) + zD.charAt(LD) + zD.charAt(cD);
          return gD
        }(zD)
      },
      sD = DD => atob(DD),
      KD = DD => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(DD).buffer : function(DD) {
        const zD = sD(DD),
          wD = zD.length,
          pD = new Uint8Array(new ArrayBuffer(wD));
        for (let sD = 0; sD < wD; sD++) pD[sD] = zD.charCodeAt(sD);
        return pD.buffer
      }(DD)
  },
  39820: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD,
      e: () => rD
    });
    let pD = [];
    class sD {
      static SetImmediate(DD) {
        0 === pD.length && setTimeout((() => {
          const DD = pD;
          pD = [];
          for (const zD of DD) zD()
        }), 1), pD.push(DD)
      }
    }

    function KD(DD, zD, wD) {
      try {
        if (DD()) return zD(), !0
      } catch (pD) {
        return wD?.(pD), !0
      }
      return !1
    }
    const rD = function(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        rD = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && KD(DD, zD, wD)) return null;
      const LD = setInterval((() => {
        KD(DD, zD, wD) ? clearInterval(LD) : (sD -= pD, sD < 0 && (clearInterval(LD), wD?.(new Error("Operation timed out after maximum retries. " + (rD || "")), !0)))
      }), pD);
      return () => clearInterval(LD)
    }
  },
  39969: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    class pD {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(pD.CustomRequestHeaders).length > 0 || pD.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(DD) {
        return DD = (DD = DD.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(DD) {
        return pD.SkipRequestModificationForBabylonCDN && (DD.includes("preview.babylonjs.com") || DD.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(DD) {
        const zD = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (pD._ShouldSkipRequestModifications(DD)) return {
          url: DD,
          headers: zD
        };
        for (const sD in pD.CustomRequestHeaders) {
          const DD = pD.CustomRequestHeaders[sD];
          DD && (zD[sD] = DD)
        }
        const wD = {
          setRequestHeader: (DD, wD) => {
            zD[DD] = wD
          }
        };
        for (const sD of pD.CustomRequestModifiers) {
          if (pD._ShouldSkipRequestModifications(DD)) break;
          const zD = sD(wD, DD);
          "string" === typeof zD && (DD = zD)
        }
        return {
          url: DD,
          headers: zD
        }
      }
      static async FetchAsync(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const wD = zD.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: sD,
            headers: KD
          } = pD._CollectCustomizations(pD._CleanUrl(DD), zD.headers ?? {});
          return await fetch(sD, {
            method: wD,
            headers: KD,
            body: zD.body ?? void 0
          })
        }
        return await new Promise(((sD, KD) => {
          const rD = new pD;
          rD.responseType = "arraybuffer", rD.addEventListener("readystatechange", (() => {
            if (4 === rD.readyState)
              if (rD.status >= 200 && rD.status < 300) {
                const DD = "undefined" !== typeof Headers ? new Headers : void 0,
                  zD = rD.getResponseHeader("Content-Type");
                zD && DD && DD.set("Content-Type", zD), "undefined" !== typeof Response ? sD(new Response(rD.response, {
                  status: rD.status,
                  statusText: rD.statusText,
                  headers: DD
                })) : sD({
                  ok: !0,
                  status: rD.status,
                  statusText: rD.statusText,
                  headers: {
                    get: DD => rD.getResponseHeader(DD)
                  },
                  arrayBuffer: async () => await Promise.resolve(rD.response)
                })
              } else KD(new Error(`HTTP ${rD.status} loading '${rD.requestURL}': ${rD.statusText}`))
          })), rD.open(wD, DD, zD.headers), rD.send(zD.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(DD) {
        this._xhr.onprogress = DD
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
      set responseType(DD) {
        this._xhr.responseType = DD
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(DD) {
        this._xhr.timeout = DD
      }
      addEventListener(DD, zD, wD) {
        this._xhr.addEventListener(DD, zD, wD)
      }
      removeEventListener(DD, zD, wD) {
        this._xhr.removeEventListener(DD, zD, wD)
      }
      abort() {
        this._xhr.abort()
      }
      send(DD) {
        this._xhr.send(DD)
      }
      open(DD, zD, wD) {
        const {
          url: sD,
          headers: KD
        } = pD._CollectCustomizations(zD, wD);
        this._requestURL = pD._CleanUrl(sD), this._xhr.open(DD, this._requestURL, !0);
        for (const pD in KD) this._xhr.setRequestHeader(pD, KD[pD])
      }
      setRequestHeader(DD, zD) {
        this._xhr.setRequestHeader(DD, zD)
      }
      getResponseHeader(DD) {
        return this._xhr.getResponseHeader(DD)
      }
    }
    pD.CustomRequestHeaders = {}, pD.CustomRequestModifiers = new Array, pD.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);