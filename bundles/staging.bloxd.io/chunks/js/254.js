export const id = 254;
export const ids = [254];
export const modules = {
  40113: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => kS,
      e: () => fS,
      g: () => qS,
      k: () => aS,
      l: () => uS,
      m: () => NS,
      p: () => IS
    });
    var tS = gS(38687),
      bS = gS(40115);

    function XS(SS, HS, gS, tS) {
      switch (HS) {
        case 5120: {
          let HS = SS.getInt8(gS);
          return tS && (HS = Math.max(HS / 127, -1)), HS
        }
        case 5121: {
          let HS = SS.getUint8(gS);
          return tS && (HS /= 255), HS
        }
        case 5122: {
          let HS = SS.getInt16(gS, !0);
          return tS && (HS = Math.max(HS / 32767, -1)), HS
        }
        case 5123: {
          let HS = SS.getUint16(gS, !0);
          return tS && (HS /= 65535), HS
        }
        case 5131:
          return (0, bS.b)(SS.getUint16(gS, !0));
        case 5124:
          return SS.getInt32(gS, !0);
        case 5125:
          return SS.getUint32(gS, !0);
        case 5126:
          return SS.getFloat32(gS, !0);
        default:
          throw new Error(`Invalid component type ${HS}`)
      }
    }

    function xS(SS, HS, gS, tS, XS) {
      switch (HS) {
        case 5120:
          tS && (XS = Math.round(127 * XS)), SS.setInt8(gS, XS);
          break;
        case 5121:
          tS && (XS = Math.round(255 * XS)), SS.setUint8(gS, XS);
          break;
        case 5122:
          tS && (XS = Math.round(32767 * XS)), SS.setInt16(gS, XS, !0);
          break;
        case 5123:
          tS && (XS = Math.round(65535 * XS)), SS.setUint16(gS, XS, !0);
          break;
        case 5131:
          SS.setUint16(gS, (0, bS.f)(XS), !0);
          break;
        case 5124:
          SS.setInt32(gS, XS, !0);
          break;
        case 5125:
          SS.setUint32(gS, XS, !0);
          break;
        case 5126:
          SS.setFloat32(gS, XS, !0);
          break;
        default:
          throw new Error(`Invalid component type ${HS}`)
      }
    }

    function NS(SS) {
      switch (SS) {
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
          throw new Error(`Invalid type '${SS}'`)
      }
    }

    function qS(SS, HS, gS, tS, bS, qS, uS, IS) {
      const fS = new Array(tS),
        kS = new Array(tS);
      if (SS instanceof Array) {
        let bS = HS / 4;
        const XS = gS / 4;
        for (let HS = 0; HS < qS; HS += tS) {
          for (let HS = 0; HS < tS; HS++) fS[HS] = kS[HS] = SS[bS + HS];
          IS(kS, HS);
          for (let HS = 0; HS < tS; HS++) fS[HS] !== kS[HS] && (SS[bS + HS] = kS[HS]);
          bS += XS
        }
      } else {
        const aS = ArrayBuffer.isView(SS) ? new DataView(SS.buffer, SS.byteOffset, SS.byteLength) : new DataView(SS),
          KS = NS(bS);
        for (let SS = 0; SS < qS; SS += tS) {
          for (let SS = 0, gS = HS; SS < tS; SS++, gS += KS) fS[SS] = kS[SS] = XS(aS, bS, gS, uS);
          IS(kS, SS);
          for (let SS = 0, gS = HS; SS < tS; SS++, gS += KS) fS[SS] !== kS[SS] && xS(aS, bS, gS, uS, kS[SS]);
          HS += gS
        }
      }
    }

    function uS(SS, HS, gS, bS, XS, xS, uS, IS) {
      const fS = HS * NS(gS),
        kS = uS * HS;
      if (5126 !== gS || XS !== fS) {
        const tS = new Float32Array(kS);
        return qS(SS, bS, XS, HS, gS, kS, xS, ((SS, gS) => {
          for (let bS = 0; bS < HS; bS++) tS[gS + bS] = SS[bS]
        })), tS
      }
      if (!(SS instanceof Array || SS instanceof Float32Array) || 0 !== bS || SS.length !== kS) {
        if (SS instanceof Array) {
          const HS = bS / 4;
          return SS.slice(HS, HS + kS)
        }
        if (ArrayBuffer.isView(SS)) {
          const HS = SS.byteOffset + bS;
          return 0 !== (3 & HS) && (tS.b.Warn("Float array must be aligned to 4-bytes border"), IS = !0), IS ? new Float32Array(SS.buffer.slice(HS, HS + kS * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(SS.buffer, HS, kS)
        }
        return new Float32Array(SS, bS, kS)
      }
      return IS ? SS.slice() : SS
    }

    function IS(SS, HS, gS, bS, XS, xS, uS) {
      const IS = NS(gS),
        fS = function(SS) {
          switch (SS) {
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
              throw new Error(`Invalid component type '${SS}'`)
          }
        }(gS),
        kS = xS * HS;
      if (Array.isArray(SS)) {
        if (0 !== (3 & bS) || 0 !== (3 & XS)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const tS = bS / 4,
          NS = XS / 4;
        if (tS + (xS - 1) * NS + HS > SS.length) throw new Error("Last accessed index is out of bounds.");
        if (NS < HS) throw new Error("Data stride cannot be smaller than the component size.");
        if (NS !== HS) {
          const tS = new fS(kS);
          return qS(SS, bS, XS, HS, gS, kS, !1, ((SS, gS) => {
            for (let bS = 0; bS < HS; bS++) tS[gS + bS] = SS[bS]
          })), tS
        }
        return new fS(SS.slice(tS, tS + kS))
      }
      let aS, KS = bS;
      ArrayBuffer.isView(SS) ? (aS = SS.buffer, KS += SS.byteOffset) : aS = SS;
      if (KS + (xS - 1) * XS + HS * IS > aS.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const jS = HS * IS;
      if (XS < jS) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (XS !== jS) {
        const SS = new fS(kS),
          gS = new Uint8Array(aS, KS),
          tS = new Uint8Array(SS.buffer),
          bS = HS * IS;
        for (let HS = 0, NS = 0, qS = 0; HS < xS; HS++, NS += XS, qS += bS) tS.set(gS.subarray(NS, NS + bS), qS);
        return SS
      }
      return 1 !== IS && 0 !== (KS & IS - 1) && (tS.b.Warn("Array must be aligned to border of element size. Data will be copied."), uS = !0), uS ? new fS(aS.slice(KS, KS + kS * IS)) : new fS(aS, KS, kS)
    }

    function fS(SS, HS, gS, bS, XS, xS, uS, IS) {
      const fS = HS * NS(gS),
        kS = uS * HS;
      if (IS.length !== kS) throw new Error("Output length is not valid");
      if (5126 === gS && XS === fS)
        if (SS instanceof Array) {
          const HS = bS / 4;
          IS.set(SS, HS)
        } else if (ArrayBuffer.isView(SS)) {
        const HS = SS.byteOffset + bS;
        if (0 !== (3 & HS)) return tS.b.Warn("Float array must be aligned to 4-bytes border"), void IS.set(new Float32Array(SS.buffer.slice(HS, HS + kS * Float32Array.BYTES_PER_ELEMENT)));
        const gS = new Float32Array(SS.buffer, HS, kS);
        IS.set(gS)
      } else {
        const HS = new Float32Array(SS, bS, kS);
        IS.set(HS)
      } else qS(SS, bS, XS, HS, gS, kS, xS, ((SS, gS) => {
        for (let tS = 0; tS < HS; tS++) IS[gS + tS] = SS[tS]
      }))
    }

    function kS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(SS)) {
        for (let bS = 0; bS < HS; bS++)
          if (SS[gS + bS] - tS > 65535) return !0;
        return !1
      }
      return 4 === SS.BYTES_PER_ELEMENT
    }

    function aS(SS) {
      const HS = SS.buffer;
      if (HS instanceof ArrayBuffer) return SS;
      const gS = new ArrayBuffer(SS.byteLength);
      return new Uint8Array(gS).set(new Uint8Array(HS, SS.byteOffset, SS.byteLength)), gS
    }
  },
  39930: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => ZS,
      f: () => wS,
      l: () => hS,
      i: () => LS,
      n: () => YS
    });
    class tS {
      constructor() {
        this.children = []
      }
      isValid(SS) {
        return !0
      }
      process(SS, HS, gS) {
        let tS = "";
        if (this.line) {
          let gS = this.line;
          const bS = HS.processor;
          if (bS) {
            bS.lineProcessor && (gS = bS.lineProcessor(gS, HS.isFragment, HS.processingContext));
            const tS = HS.processor?.attributeKeywordName ?? "attribute",
              XS = HS.isFragment && HS.processor?.varyingFragmentKeywordName ? HS.processor?.varyingFragmentKeywordName : !HS.isFragment && HS.processor?.varyingVertexKeywordName ? HS.processor?.varyingVertexKeywordName : "varying";
            if (!HS.isFragment && bS.attributeProcessor && this.line.startsWith(tS)) gS = bS.attributeProcessor(this.line, SS, HS.processingContext);
            else if (bS.varyingProcessor && (bS.varyingCheck?.(this.line, HS.isFragment) || !bS.varyingCheck && this.line.startsWith(XS))) gS = bS.varyingProcessor(this.line, HS.isFragment, SS, HS.processingContext);
            else if (bS.uniformProcessor && bS.uniformRegexp && bS.uniformRegexp.test(this.line)) HS.lookForClosingBracketForUniformBuffer || (gS = bS.uniformProcessor(this.line, HS.isFragment, SS, HS.processingContext));
            else if (bS.uniformBufferProcessor && bS.uniformBufferRegexp && bS.uniformBufferRegexp.test(this.line)) HS.lookForClosingBracketForUniformBuffer || (gS = bS.uniformBufferProcessor(this.line, HS.isFragment, HS.processingContext), HS.lookForClosingBracketForUniformBuffer = !0);
            else if (bS.textureProcessor && bS.textureRegexp && bS.textureRegexp.test(this.line)) gS = bS.textureProcessor(this.line, HS.isFragment, SS, HS.processingContext);
            else if ((bS.uniformProcessor || bS.uniformBufferProcessor) && this.line.startsWith("uniform") && !HS.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? bS.uniformProcessor && (gS = bS.uniformProcessor(this.line, HS.isFragment, SS, HS.processingContext)) : bS.uniformBufferProcessor && (gS = bS.uniformBufferProcessor(this.line, HS.isFragment, HS.processingContext), HS.lookForClosingBracketForUniformBuffer = !0)
            }
            HS.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (HS.lookForClosingBracketForUniformBuffer = !1, bS.endOfUniformBufferProcessor && (gS = bS.endOfUniformBufferProcessor(this.line, HS.isFragment, HS.processingContext)))
          }
          tS += gS + "\n"
        }
        for (const bS of this.children) tS += bS.process(SS, HS, gS);
        return this.additionalDefineKey && (SS[this.additionalDefineKey] = this.additionalDefineValue || "true", gS[this.additionalDefineKey] = SS[this.additionalDefineKey]), tS
      }
    }
    class bS {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(SS) {
        this._lines.length = 0;
        for (const HS of SS) {
          if (!HS || "\r" === HS) continue;
          if ("#" === HS[0]) {
            this._lines.push(HS);
            continue
          }
          const SS = HS.trim();
          if (!SS) continue;
          if (SS.startsWith("//")) {
            this._lines.push(HS);
            continue
          }
          const gS = SS.indexOf(";");
          if (-1 === gS) this._lines.push(SS);
          else if (gS === SS.length - 1) SS.length > 1 && this._lines.push(SS);
          else {
            const SS = HS.split(";");
            for (let HS = 0; HS < SS.length; HS++) {
              let gS = SS[HS];
              gS && (gS = gS.trim(), gS && this._lines.push(gS + (HS !== SS.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class XS extends tS {
      process(SS, HS, gS) {
        for (let tS = 0; tS < this.children.length; tS++) {
          const bS = this.children[tS];
          if (bS.isValid(SS)) return bS.process(SS, HS, gS)
        }
        return ""
      }
    }
    class xS extends tS {
      isValid(SS) {
        return this.testExpression.isTrue(SS)
      }
    }
    class NS {
      isTrue(SS) {
        return !0
      }
      static postfixToInfix(SS) {
        const HS = [];
        for (const gS of SS)
          if (void 0 === NS._OperatorPriority[gS]) HS.push(gS);
          else {
            const SS = HS[HS.length - 1],
              tS = HS[HS.length - 2];
            HS.length -= 2, HS.push(`(${tS}${gS}${SS})`)
          } return HS[HS.length - 1]
      }
      static infixToPostfix(SS) {
        const HS = NS._InfixToPostfixCache.get(SS);
        if (HS) return HS.accessTime = Date.now(), HS.result;
        if (!SS.includes("&&") && !SS.includes("||") && !SS.includes(")") && !SS.includes("(")) return [SS];
        const gS = [];
        let tS = -1;
        const bS = () => {
            IS = IS.trim(), "" !== IS && (gS.push(IS), IS = "")
          },
          XS = SS => {
            tS < NS._Stack.length - 1 && (NS._Stack[++tS] = SS)
          },
          xS = () => NS._Stack[tS],
          qS = () => -1 === tS ? "!!INVALID EXPRESSION!!" : NS._Stack[tS--];
        let uS = 0,
          IS = "";
        for (; uS < SS.length;) {
          const HS = SS.charAt(uS),
            fS = uS < SS.length - 1 ? SS.substring(uS, 2 + uS) : "";
          if ("(" === HS) IS = "", XS(HS);
          else if (")" === HS) {
            for (bS(); - 1 !== tS && "(" !== xS();) gS.push(qS());
            qS()
          } else if (NS._OperatorPriority[fS] > 1) {
            for (bS(); - 1 !== tS && NS._OperatorPriority[xS()] >= NS._OperatorPriority[fS];) gS.push(qS());
            XS(fS), uS++
          } else IS += HS;
          uS++
        }
        for (bS(); - 1 !== tS;) "(" === xS() ? qS() : gS.push(qS());
        return NS._InfixToPostfixCache.size >= NS.InfixToPostfixCacheLimitSize && NS.ClearCache(), NS._InfixToPostfixCache.set(SS, {
          result: gS,
          accessTime: Date.now()
        }), gS
      }
      static ClearCache() {
        const SS = Array.from(NS._InfixToPostfixCache.entries()).sort(((SS, HS) => SS[1].accessTime - HS[1].accessTime));
        for (let HS = 0; HS < NS.InfixToPostfixCacheCleanupSize; HS++) NS._InfixToPostfixCache.delete(SS[HS][0])
      }
    }
    NS.InfixToPostfixCacheLimitSize = 5e4, NS.InfixToPostfixCacheCleanupSize = 25e3, NS._InfixToPostfixCache = new Map, NS._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, NS._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class qS extends NS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = SS, this.not = HS
      }
      isTrue(SS) {
        let HS = void 0 !== SS[this.define];
        return this.not && (HS = !HS), HS
      }
    }
    class uS extends NS {
      isTrue(SS) {
        return this.leftOperand.isTrue(SS) || this.rightOperand.isTrue(SS)
      }
    }
    class IS extends NS {
      isTrue(SS) {
        return this.leftOperand.isTrue(SS) && this.rightOperand.isTrue(SS)
      }
    }
    class fS extends NS {
      constructor(SS, HS, gS) {
        super(), this.define = SS, this.operand = HS, this.testValue = gS
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(SS) {
        let HS = !1;
        const gS = parseInt(void 0 != SS[this.define] ? SS[this.define] : this.define),
          tS = parseInt(void 0 != SS[this.testValue] ? SS[this.testValue] : this.testValue);
        if (isNaN(gS) || isNaN(tS)) return !1;
        switch (this.operand) {
          case ">":
            HS = gS > tS;
            break;
          case "<":
            HS = gS < tS;
            break;
          case "<=":
            HS = gS <= tS;
            break;
          case ">=":
            HS = gS >= tS;
            break;
          case "==":
            HS = gS === tS;
            break;
          case "!=":
            HS = gS !== tS
        }
        return HS
      }
    }
    var kS = gS(39926),
      aS = gS(39922);
    const KS = /defined\s*?\((.+?)\)/g,
      jS = /defined\s*?\[(.+?)\]/g,
      GS = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      CS = /__decl__/,
      nS = /light\{X\}.(\w*)/g,
      PS = /\{X\}/g,
      QS = [],
      DS = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function wS(SS) {
      SS.processor && SS.processor.initializeShaders && SS.processor.initializeShaders(SS.processingContext)
    }

    function hS(SS, HS, gS, tS) {
      HS.processor?.preProcessShaderCode && (SS = HS.processor.preProcessShaderCode(SS, HS.isFragment)), LS(SS, HS, (SS => {
        HS.processCodeAfterIncludes && (SS = HS.processCodeAfterIncludes(HS.isFragment ? "fragment" : "vertex", SS, HS.defines));
        const bS = function(SS, HS, gS) {
          let tS = function(SS, HS) {
            if (HS.processor?.noPrecision) return SS;
            const gS = HS.shouldUseHighPrecisionShader; - 1 === SS.indexOf("precision highp float") ? SS = gS ? "precision highp float;\n" + SS : "precision mediump float;\n" + SS : gS || (SS = SS.replace("precision highp float", "precision mediump float"));
            return SS
          }(SS, HS);
          if (!HS.processor) return tS;
          if (0 === HS.processor.shaderLanguage && -1 !== tS.indexOf("#version 3") && (tS = tS.replace("#version 300 es", ""), !HS.processor.parseGLES3)) return tS;
          const bS = HS.defines,
            XS = ES(HS, gS);
          HS.processor.preProcessor && (tS = HS.processor.preProcessor(tS, bS, XS, HS.isFragment, HS.processingContext));
          const xS = {};
          tS = vS(tS, XS, HS, xS), HS.processor.postProcessor && (tS = HS.processor.postProcessor(tS, bS, HS.isFragment, HS.processingContext, gS ? {
            drawBuffersExtensionDisabled: !gS.getCaps().drawBuffersExtension
          } : {}, XS, xS));
          gS?._features.needShaderCodeInlining && (tS = gS.inlineShaderCode(tS));
          return tS
        }(SS, HS, tS);
        gS(bS, SS)
      }))
    }

    function ZS(SS, HS, gS) {
      return gS.processor && gS.processor.finalizeShaders ? gS.processor.finalizeShaders(SS, HS, gS.processingContext) : {
        vertexCode: SS,
        fragmentCode: HS
      }
    }

    function JS(SS) {
      const HS = /defined\((.+)\)/.exec(SS);
      if (HS && HS.length) return new qS(HS[1].trim(), "!" === SS[0]);
      const gS = ["==", "!=", ">=", "<=", "<", ">"];
      let tS = "",
        bS = 0;
      for (tS of gS)
        if (bS = SS.indexOf(tS), bS > -1) break;
      if (-1 === bS) return new qS(SS);
      const XS = SS.substring(0, bS).trim(),
        xS = SS.substring(bS + tS.length).trim();
      return new fS(XS, tS, xS)
    }

    function OS(SS, HS) {
      const gS = new xS,
        tS = SS.substring(0, HS);
      let bS = SS.substring(HS);
      return bS = bS.substring(0, (bS.indexOf("//") + 1 || bS.length + 1) - 1).trim(), gS.testExpression = "#ifdef" === tS ? new qS(bS) : "#ifndef" === tS ? new qS(bS, !0) : function(SS) {
        SS = SS.replace(KS, "defined[$1]");
        const HS = NS.infixToPostfix(SS),
          gS = [];
        for (const bS of HS)
          if ("||" !== bS && "&&" !== bS) gS.push(bS);
          else if (gS.length >= 2) {
          let SS = gS[gS.length - 1],
            HS = gS[gS.length - 2];
          gS.length -= 2;
          const tS = "&&" == bS ? new IS : new uS;
          "string" === typeof SS && (SS = SS.replace(jS, "defined($1)")), "string" === typeof HS && (HS = HS.replace(jS, "defined($1)")), tS.leftOperand = "string" === typeof HS ? JS(HS) : HS, tS.rightOperand = "string" === typeof SS ? JS(SS) : SS, gS.push(tS)
        }
        let tS = gS[gS.length - 1];
        return "string" === typeof tS && (tS = tS.replace(jS, "defined($1)")), "string" === typeof tS ? JS(tS) : tS
      }(bS), gS
    }

    function dS(SS, HS, gS, bS) {
      let XS;
      for (; cS(SS, gS, bS);) {
        XS = SS.currentLine;
        const xS = XS.substring(0, 5).toLowerCase();
        if ("#else" === xS) {
          const gS = new tS;
          return HS.children.push(gS), void cS(SS, gS, bS)
        }
        if ("#elif" === xS) {
          const SS = OS(XS, 5);
          HS.children.push(SS), gS = SS
        }
      }
    }

    function cS(SS, HS, gS) {
      for (; SS.canRead;) {
        SS.lineIndex++;
        const bS = SS.currentLine;
        if (bS.indexOf("#") >= 0) {
          const tS = DS.exec(bS);
          if (tS && tS.length) {
            switch (tS[0]) {
              case "#ifdef": {
                const tS = new XS;
                HS.children.push(tS);
                const xS = OS(bS, 6);
                tS.children.push(xS), dS(SS, tS, xS, gS);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const tS = new XS;
                HS.children.push(tS);
                const xS = OS(bS, 7);
                tS.children.push(xS), dS(SS, tS, xS, gS);
                break
              }
              case "#if": {
                const tS = new XS,
                  xS = OS(bS, 3);
                HS.children.push(tS), tS.children.push(xS), dS(SS, tS, xS, gS);
                break
              }
            }
            continue
          }
        }
        const xS = new tS;
        if (xS.line = bS, HS.children.push(xS), "#" === bS[0] && "d" === bS[1]) {
          const SS = bS.replace(";", "").split(" ");
          xS.additionalDefineKey = SS[1], 3 === SS.length && (xS.additionalDefineValue = SS[2])
        }
      }
      return !1
    }

    function vS(SS, HS, gS, XS) {
      const xS = new tS,
        NS = new bS;
      return NS.lineIndex = -1, NS.lines = SS.split("\n"), cS(NS, xS, XS), xS.process(HS, gS, XS)
    }

    function ES(SS, HS) {
      const gS = SS.defines,
        tS = {};
      for (const bS of gS) {
        const SS = bS.replace("#define", "").replace(";", "").trim().split(" ");
        tS[SS[0]] = SS.length > 1 ? SS[1] : ""
      }
      return 0 === SS.processor?.shaderLanguage && (tS.GL_ES = "true"), tS.__VERSION__ = SS.version, tS[SS.platformName] = "true", (0, aS.g)(tS, HS?.isNDCHalfZRange, HS?.RgS, HS?.useExactSrgbConversions), tS
    }

    function LS(SS, HS, gS) {
      let tS;
      for (QS.length = 0; null !== (tS = GS.exec(SS));) QS.push(tS);
      let bS = [SS],
        XS = !1;
      for (const NS of QS) {
        let SS = NS[1];
        if (-1 !== SS.indexOf("__decl__") && (SS = SS.replace(CS, ""), HS.supportsUniformBuffers && (SS = SS.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), SS += "Declaration"), !HS.includesShadersStore[SS]) {
          const tS = HS.shadersRepository + "ShadersInclude/" + SS + ".fx";
          return void YS.loadFile(tS, (tS => {
            HS.includesShadersStore[SS] = tS, LS(bS.join(""), HS, gS)
          }))
        } {
          let gS = HS.includesShadersStore[SS];
          if (NS[2]) {
            const SS = NS[3].split(",");
            for (let HS = 0; HS < SS.length; HS += 2) {
              const tS = new RegExp(SS[HS], "g"),
                bS = SS[HS + 1];
              gS = gS.replace(tS, bS)
            }
          }
          if (NS[4]) {
            const SS = NS[5];
            if (-1 !== SS.indexOf("..")) {
              const tS = SS.split(".."),
                bS = parseInt(tS[0]);
              let XS = parseInt(tS[1]),
                xS = gS.slice(0);
              gS = "", isNaN(XS) && (XS = HS.indexParameters[tS[1]]);
              for (let SS = bS; SS < XS; SS++) HS.supportsUniformBuffers || (xS = xS.replace(nS, ((SS, HS) => HS + "{X}"))), gS += xS.replace(PS, SS.toString()) + "\n"
            } else HS.supportsUniformBuffers || (gS = gS.replace(nS, ((SS, HS) => HS + "{X}"))), gS = gS.replace(PS, SS)
          }
          const tS = [];
          for (const SS of bS) {
            const HS = SS.split(NS[0]);
            for (let SS = 0; SS < HS.length - 1; SS++) tS.push(HS[SS]), tS.push(gS);
            tS.push(HS[HS.length - 1])
          }
          bS = tS, XS = XS || gS.indexOf("#include<") >= 0 || gS.indexOf("#include <") >= 0
        }
      }
      QS.length = 0;
      const xS = bS.join("");
      XS ? LS(xS.toString(), HS, gS) : gS(xS)
    }
    const YS = {
      loadFile: (SS, HS, gS, tS, bS, XS) => {
        throw (0, kS.l)("FileTools")
      }
    }
  },
  39922: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS,
      e: () => XS,
      g: () => NS,
      j: () => xS,
      l: () => qS
    });
    var tS = gS(39926);
    const bS = {};

    function XS(SS, HS) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (HS ? HS + "\n" : "") + SS
    }

    function xS(SS, HS, gS, XS, xS, NS, qS) {
      const uS = qS || bS.loadFile;
      if (!uS) throw (0, tS.l)("FileTools");
      return uS(SS, HS, gS, XS, xS, NS)
    }

    function NS(SS, HS, gS, tS) {
      if (SS) return HS ? SS.IS_NDC_HALF_ZRANGE = "" : delete SS.IS_NDC_HALF_ZRANGE, gS ? SS.USE_REVERSE_DEPTHBUFFER = "" : delete SS.USE_REVERSE_DEPTHBUFFER, void(tS ? SS.USE_EXACT_SRGB_CONVERSIONS = "" : delete SS.USE_EXACT_SRGB_CONVERSIONS);
      {
        let SS = "";
        return HS && (SS += "#define IS_NDC_HALF_ZRANGE"), gS && (SS && (SS += "\n"), SS += "#define USE_REVERSE_DEPTHBUFFER"), tS && (SS && (SS += "\n"), SS += "#define USE_EXACT_SRGB_CONVERSIONS"), SS
      }
    }

    function qS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        tS = arguments.length > 3 ? arguments[3] : void 0;
      switch (SS) {
        case 3: {
          const SS = new Int8Array(HS);
          return tS && SS.set(new Int8Array(tS)), SS
        }
        case 0: {
          const SS = new Uint8Array(HS);
          return tS && SS.set(new Uint8Array(tS)), SS
        }
        case 4: {
          const SS = "number" !== typeof HS ? new Int16Array(HS) : new Int16Array(gS ? HS / 2 : HS);
          return tS && SS.set(new Int16Array(tS)), SS
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const SS = "number" !== typeof HS ? new Uint16Array(HS) : new Uint16Array(gS ? HS / 2 : HS);
          return tS && SS.set(new Uint16Array(tS)), SS
        }
        case 6: {
          const SS = "number" !== typeof HS ? new Int32Array(HS) : new Int32Array(gS ? HS / 4 : HS);
          return tS && SS.set(new Int32Array(tS)), SS
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const SS = "number" !== typeof HS ? new Uint32Array(HS) : new Uint32Array(gS ? HS / 4 : HS);
          return tS && SS.set(new Uint32Array(tS)), SS
        }
        case 1: {
          const SS = "number" !== typeof HS ? new Float32Array(HS) : new Float32Array(gS ? HS / 4 : HS);
          return tS && SS.set(new Float32Array(tS)), SS
        }
      }
      const bS = new Uint8Array(HS);
      return tS && bS.set(new Uint8Array(tS)), bS
    }
  },
  39926: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => uS,
      f: () => IS,
      i: () => qS,
      l: () => bS
    });
    const tS = {};

    function bS(SS) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !tS[SS]) return tS[SS] = !0, `${SS} needs to be imported before as it contains a side-effect required by your code.`
    }
    const XS = {};
    let xS = !1,
      NS = 0;

    function qS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const tS = function() {
        if ((gS || xS) && 0 === NS) {
          const gS = `${SS}.${HS}`;
          XS[gS] || (XS[gS] = !0, console.warn(`[Babylon.js] ${gS}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return tS.__isSideEffectStub = !0, tS
    }

    function uS(SS) {
      return !!SS && !SS.__isSideEffectStub
    }

    function IS(SS, HS) {
      return {
        get() {},
        set(SS) {
          Object.defineProperty(this, HS, {
            value: SS,
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
  39913: (SS, HS, gS) => {
    function tS() {
      return "undefined" !== typeof window
    }

    function bS() {
      return "undefined" !== typeof navigator
    }

    function XS() {
      return "undefined" !== typeof document
    }

    function xS(SS) {
      let HS = "",
        gS = SS.firstChild;
      for (; gS;) 3 === gS.nodeType && (HS += gS.textContent), gS = gS.nextSibling;
      return HS
    }
    gS.d(HS, {
      b: () => xS,
      f: () => XS,
      i: () => bS,
      j: () => tS
    })
  },
  40096: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS,
      h: () => bS,
      k: () => XS
    });
    class tS extends Error {}
    tS._setPrototypeOf = Object.setPrototypeOf || ((SS, HS) => (SS.__proto__ = HS, SS));
    const bS = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class XS extends tS {
      constructor(SS, HS, gS) {
        super(SS), this.errorCode = HS, this.innerError = gS, this.name = "RuntimeError", tS._setPrototypeOf(this, XS.prototype)
      }
    }
  },
  40087: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => ES,
      f: () => PS,
      g: () => OS,
      j: () => cS,
      k: () => ZS,
      n: () => wS,
      r: () => hS,
      v: () => VS,
      z: () => JS,
      B: () => QS
    });
    var tS = gS(40092),
      bS = gS(39913),
      XS = gS(37144);
    class xS {}
    xS.FilesToLoad = {};
    var NS = gS(40096),
      qS = gS(40105),
      uS = gS(37138),
      IS = gS(39922),
      fS = gS(39930),
      kS = gS(38687),
      aS = gS(39937),
      KS = gS(40113);
    const jS = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class GS extends NS.k {
      constructor(SS, HS) {
        super(SS, NS.h.LoadFileError), this.name = "LoadFileError", NS.d._setPrototypeOf(this, GS.prototype), HS instanceof tS.c ? this.request = HS : this.file = HS
      }
    }
    class CS extends NS.k {
      constructor(SS, HS) {
        super(SS, NS.h.RequestFileError), this.request = HS, this.name = "RequestFileError", NS.d._setPrototypeOf(this, CS.prototype)
      }
    }
    class nS extends NS.k {
      constructor(SS, HS) {
        super(SS, NS.h.ReadFileError), this.file = HS, this.name = "ReadFileError", NS.d._setPrototypeOf(this, nS.prototype)
      }
    }
    const PS = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (gS, tS, bS) => 0 !== tS.status || bS >= SS || -1 !== gS.indexOf("file:") ? -1 : Math.pow(2, bS) * HS
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: SS => SS,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: SS => SS,
        CleanUrl: SS => SS = SS.replace(/#/gm, "%23")
      },
      QS = (SS, HS) => {
        if ((!SS || 0 !== SS.indexOf("data:")) && PS.CorsBehavior)
          if ("string" === typeof PS.CorsBehavior || PS.CorsBehavior instanceof String) HS.crossOrigin = PS.CorsBehavior;
          else {
            const gS = PS.CorsBehavior(SS);
            gS && (HS.crossOrigin = gS)
          }
      },
      DS = {
        getRequiredSize: null
      },
      wS = function(SS, HS, gS, bS) {
        let XS, NS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          IS = arguments.length > 5 ? arguments[5] : void 0,
          fS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : uS.d.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !fS?._features.forceBitmapOverHTMLImageElement) return gS("LoadImage is only supported in web or BabylonNative environments."), null;
        if (fS?._features.forceBitmapOverHTMLImageElement && "string" !== typeof SS && "undefined" !== typeof Blob) {
          let tS;
          if (SS instanceof Blob) tS = SS;
          else {
            const HS = SS instanceof ArrayBuffer ? SS : (0, KS.k)(SS);
            tS = new Blob([HS], {
              type: NS
            })
          }
          return fS.createImageBitmap(tS, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...IS
          }).then(HS).catch((HS => {
            gS && gS("Error while trying to load image: " + SS, HS)
          })), null
        }
        let kS = !1;
        if (SS instanceof ArrayBuffer || ArrayBuffer.isView(SS))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let HS;
            HS = SS instanceof ArrayBuffer ? SS : (0, KS.k)(SS), XS = URL.createObjectURL(new Blob([HS], {
              type: NS
            })), kS = !0
          } else XS = `data:${NS};base64,` + (0, qS.h)(SS);
        else SS instanceof Blob ? (XS = URL.createObjectURL(SS), kS = !0) : (XS = PS.CleanUrl(SS), XS = PS.PreprocessUrl(XS));
        const aS = HS => {
          if (gS) {
            const tS = XS || SS.toString();
            gS(`Error while trying to load image: ${0===tS.indexOf("http")||tS.length<=128?tS:tS.slice(0,128)+"..."}`, HS)
          }
        };
        if (fS?._features.forceBitmapOverHTMLImageElement) return ZS(XS, (tS => {
          fS.createImageBitmap(new Blob([tS], {
            type: NS
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...IS
          }).then((SS => {
            HS(SS), kS && URL.revokeObjectURL(XS)
          })).catch((HS => {
            gS && gS("Error while trying to load image: " + SS, HS)
          }))
        }), void 0, bS || void 0, !0, ((SS, HS) => {
          aS(HS)
        })), null;
        const jS = new Image;
        if (DS.getRequiredSize) {
          const HS = DS.getRequiredSize(SS);
          HS.width && (jS.width = HS.width), HS.height && (jS.height = HS.height)
        }
        QS(XS, jS);
        const GS = [],
          CS = () => {
            for (const SS of GS) SS.target.removeEventListener(SS.name, SS.handler);
            GS.length = 0
          };
        GS.push({
          target: jS,
          name: "load",
          handler: () => {
            CS(), HS(jS), kS && jS.src && URL.revokeObjectURL(jS.src)
          }
        }), GS.push({
          target: jS,
          name: "error",
          handler: SS => {
            CS(), aS(SS), kS && jS.src && URL.revokeObjectURL(jS.src)
          }
        }), GS.push({
          target: document,
          name: "securitypolicyviolation",
          handler: SS => {
            if (SS.blockedURI !== jS.src || "tK" === SS.disposition) return;
            CS();
            const HS = new Error(`CSP violation of policy ${SS.effectiveDirective} ${SS.blockedURI}. Current policy is ${SS.originalPolicy}`);
            uS.d.UseFallbackTexture = !1, aS(HS), kS && jS.src && URL.revokeObjectURL(jS.src), jS.src = ""
          }
        }), (() => {
          for (const SS of GS) SS.target.addEventListener(SS.name, SS.handler)
        })();
        const nS = "blob:" === XS.substring(0, 5),
          wS = "data:" === XS.substring(0, 5),
          hS = () => {
            nS || wS || !tS.c.IsCustomRequestAvailable ? jS.src = XS : ZS(XS, ((SS, HS, gS) => {
              const tS = new Blob([SS], {
                  type: !NS && gS ? gS : NS
                }),
                bS = URL.createObjectURL(tS);
              kS = !0, jS.src = bS
            }), void 0, bS || void 0, !0, ((SS, HS) => {
              aS(HS)
            }))
          },
          JS = () => {
            bS && bS.loadImage(XS, jS)
          };
        if (!nS && !wS && bS && bS.enableTexturesOffline) bS.open(JS, hS);
        else {
          if (-1 !== XS.indexOf("file:")) {
            const SS = decodeURIComponent(XS.substring(5).toLowerCase());
            if (xS.FilesToLoad[SS] && "undefined" !== typeof URL) {
              try {
                let HS;
                try {
                  HS = URL.createObjectURL(xS.FilesToLoad[SS])
                } catch (OS) {
                  HS = URL.createObjectURL(xS.FilesToLoad[SS])
                }
                jS.src = HS, kS = !0
              } catch (dS) {
                jS.src = ""
              }
              return jS
            }
          }
          hS()
        }
        return jS
      },
      hS = (SS, HS, gS, tS, bS) => {
        const xS = new FileReader,
          NS = {
            onCompleteObservable: new XS.e,
            abort: () => xS.abort()
          };
        return xS.onloadend = () => NS.onCompleteObservable.notifyObservers(NS), bS && (xS.onerror = () => {
          bS(new nS(`Unable to read ${SS.name}`, SS))
        }), xS.onload = SS => {
          HS(SS.target.result)
        }, gS && (xS.onprogress = gS), tS ? xS.readAsArrayBuffer(SS) : xS.readAsText(SS), NS
      },
      ZS = (SS, HS, gS, tS, bS, qS, uS) => {
        if (SS.name) return hS(SS, HS, gS, bS, qS ? SS => {
          qS(void 0, SS)
        } : void 0);
        const IS = SS;
        if (-1 !== IS.indexOf("file:")) {
          let SS = decodeURIComponent(IS.substring(5).toLowerCase());
          0 === SS.indexOf("./") && (SS = SS.substring(2));
          const tS = xS.FilesToLoad[SS];
          if (tS) return hS(tS, HS, gS, bS, qS ? SS => qS(void 0, new GS(SS.message, SS.file)) : void 0)
        }
        const {
          match: fS,
          type: KS
        } = vS(IS);
        if (fS) {
          const SS = {
            onCompleteObservable: new XS.e,
            abort: () => () => {}
          };
          try {
            const SS = bS ? ES(IS) : LS(IS);
            HS(SS, void 0, KS)
          } catch (NS) {
            qS ? qS(void 0, NS) : kS.b.Error(NS.message || "Failed to parse the Data URL")
          }
          return aS.e.SetImmediate((() => {
            SS.onCompleteObservable.notifyObservers(SS)
          })), SS
        }
        return JS(IS, ((SS, gS) => {
          HS(SS, gS?.responseURL, gS?.getResponseHeader("content-type"))
        }), gS, tS, bS, qS ? SS => {
          qS(SS.request, new GS(SS.message, SS.request))
        } : void 0, uS)
      },
      JS = (SS, HS, gS, xS, NS, qS, IS) => {
        null !== xS && (xS ?? (xS = uS.d.LastCreatedScene?.offlineProvider)), SS = PS.CleanUrl(SS), SS = PS.PreprocessUrl(SS);
        const fS = PS.BaseUrl + SS;
        let aS = !1;
        const KS = {
            onCompleteObservable: new XS.e,
            abort: () => aS = !0
          },
          jS = () => {
            let SS, XS = new tS.c,
              xS = null;
            const uS = () => {
              XS && (gS && XS.removeEventListener("progress", gS), SS && XS.removeEventListener("readystatechange", SS), XS.removeEventListener("loadend", jS))
            };
            let jS = () => {
              uS(), KS.onCompleteObservable.notifyObservers(KS), KS.onCompleteObservable.clear(), gS = void 0, SS = null, jS = null, qS = void 0, IS = void 0, HS = void 0
            };
            KS.abort = () => {
              aS = !0, jS && jS(), XS && XS.readyState !== (XMLHttpRequest.DONE || 4) && XS.abort(), null !== xS && (clearTimeout(xS), xS = null), XS = null
            };
            const GS = SS => {
                const HS = SS.message || "Unknown error";
                qS && XS ? qS(new CS(HS, XS)) : kS.b.Error(HS)
              },
              nS = kS => {
                if (XS) {
                  if (XS.open("GET", fS), IS) try {
                    IS(XS)
                  } catch (KS) {
                    return void GS(KS)
                  }
                  NS && (XS.responseType = "arraybuffer"), gS && XS.addEventListener("progress", gS), jS && XS.addEventListener("loadend", jS), SS = () => {
                    if (!aS && XS && XS.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (SS && XS.removeEventListener("readystatechange", SS), XS.status >= 200 && XS.status < 300 || 0 === XS.status && (!(0, bS.j)() || dS())) {
                        const SS = NS ? XS.response : XS.responseText;
                        if (null !== SS) {
                          try {
                            HS && HS(SS, XS)
                          } catch (KS) {
                            GS(KS)
                          }
                          return
                        }
                      }
                      const gS = PS.DefaultRetryStrategy;
                      if (gS) {
                        const SS = gS(fS, XS, kS);
                        if (-1 !== SS) return uS(), XS = new tS.c, void(xS = setTimeout((() => nS(kS + 1)), SS))
                      }
                      const IS = new CS("Error status: " + XS.status + " " + XS.statusText + " - Unable to load " + fS, XS);
                      qS && qS(IS)
                    }
                  }, XS.addEventListener("readystatechange", SS), XS.send()
                }
              };
            nS(0)
          };
        if (xS && xS.enableSceneOffline && !SS.startsWith("blob:")) {
          const tS = SS => {
              SS && SS.status > 400 ? qS && qS(SS) : jS()
            },
            bS = () => {
              xS && xS.loadFile(PS.BaseUrl + SS, (SS => {
                !aS && HS && HS(SS), KS.onCompleteObservable.notifyObservers(KS)
              }), gS ? SS => {
                !aS && gS && gS(SS)
              } : void 0, tS, NS)
            };
          xS.open(bS, tS)
        } else jS();
        return KS
      },
      OS = SS => {
        const {
          match: HS,
          type: gS
        } = vS(SS);
        if (HS) return gS || void 0;
        const tS = SS.lastIndexOf(".");
        switch (SS.substring(tS + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "wL":
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
      dS = () => "undefined" !== typeof location && "file:" === location.protocol,
      cS = SS => jS.test(SS),
      vS = SS => {
        const HS = jS.exec(SS);
        if (null === HS || 0 === HS.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: HS[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function ES(SS) {
      return (0, qS.c)(SS.split(",")[1])
    }
    const LS = SS => (0, qS.e)(SS.split(",")[1]);
    let YS;
    const AS = (SS, HS, gS, tS, bS, XS, xS, NS, qS, uS) => {
      YS = {
        DecodeBase64UrlToBinary: SS,
        DecodeBase64UrlToString: HS,
        DefaultRetryStrategy: gS.DefaultRetryStrategy,
        BaseUrl: gS.BaseUrl,
        CorsBehavior: gS.CorsBehavior,
        PreprocessUrl: gS.PreprocessUrl,
        IsBase64DataUrl: tS,
        IsFileURL: bS,
        LoadFile: XS,
        LoadImage: xS,
        ReadFile: NS,
        RequestFile: qS,
        SetCorsBehavior: uS
      }, Object.defineProperty(YS, "DefaultRetryStrategy", {
        get: function() {
          return gS.DefaultRetryStrategy
        },
        set: function(SS) {
          gS.DefaultRetryStrategy = SS
        }
      }), Object.defineProperty(YS, "BaseUrl", {
        get: function() {
          return gS.BaseUrl
        },
        set: function(SS) {
          gS.BaseUrl = SS
        }
      }), Object.defineProperty(YS, "PreprocessUrl", {
        get: function() {
          return gS.PreprocessUrl
        },
        set: function(SS) {
          gS.PreprocessUrl = SS
        }
      }), Object.defineProperty(YS, "CorsBehavior", {
        get: function() {
          return gS.CorsBehavior
        },
        set: function(SS) {
          gS.CorsBehavior = SS
        }
      })
    };
    let yS = !1;

    function VS() {
      yS || (yS = !0, AS(ES, LS, PS, cS, dS, ZS, wS, hS, JS, QS), IS.c.loadFile = ZS, IS.c.loadImage = wS, fS.n.loadFile = ZS)
    }
  },
  40115: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => NS,
      d: () => XS,
      f: () => xS
    });
    let tS = null;

    function bS() {
      if (tS) return tS;
      const SS = new ArrayBuffer(4),
        HS = new Float32Array(SS),
        gS = new Uint32Array(SS),
        bS = new Uint32Array(512),
        XS = new Uint32Array(512);
      for (let tS = 0; tS < 256; ++tS) {
        const SS = tS - 127;
        SS < -24 ? (bS[tS] = 0, bS[256 | tS] = 32768, XS[tS] = 24, XS[256 | tS] = 24) : SS < -14 ? (bS[tS] = 1024 >> -SS - 14, bS[256 | tS] = 1024 >> -SS - 14 | 32768, XS[tS] = -SS - 1, XS[256 | tS] = -SS - 1) : SS <= 15 ? (bS[tS] = SS + 15 << 10, bS[256 | tS] = SS + 15 << 10 | 32768, XS[tS] = 13, XS[256 | tS] = 13) : SS < 128 ? (bS[tS] = 31744, bS[256 | tS] = 64512, XS[tS] = 24, XS[256 | tS] = 24) : (bS[tS] = 31744, bS[256 | tS] = 64512, XS[tS] = 13, XS[256 | tS] = 13)
      }
      const xS = new Uint32Array(2048),
        NS = new Uint32Array(64),
        qS = new Uint32Array(64);
      for (let tS = 1; tS < 1024; ++tS) {
        let SS = tS << 13,
          HS = 0;
        for (; 0 === (8388608 & SS);) SS <<= 1, HS -= 8388608;
        SS &= -8388609, HS += 947912704, xS[tS] = SS | HS
      }
      for (let tS = 1024; tS < 2048; ++tS) xS[tS] = 939524096 + (tS - 1024 << 13);
      for (let tS = 1; tS < 31; ++tS) NS[tS] = tS << 23;
      NS[31] = 1199570944, NS[32] = 2147483648;
      for (let tS = 33; tS < 63; ++tS) NS[tS] = 2147483648 + (tS - 32 << 23);
      NS[63] = 3347054592;
      for (let tS = 1; tS < 64; ++tS) 32 !== tS && (qS[tS] = 1024);
      return tS = {
        floatView: HS,
        uint32View: gS,
        baseTable: bS,
        shiftTable: XS,
        mantissaTable: xS,
        exponentTable: NS,
        offsetTable: qS
      }, tS
    }
    const XS = 65504;

    function xS(SS) {
      const HS = bS();
      HS.floatView[0] = SS;
      const gS = HS.uint32View[0],
        tS = gS >> 23 & 511;
      return HS.baseTable[tS] + ((8388607 & gS) >> HS.shiftTable[tS])
    }

    function NS(SS) {
      const HS = bS();
      return HS.uint32View[0] = HS.mantissaTable[HS.offsetTable[SS >> 10] + (1023 & SS)] + HS.exponentTable[SS >> 10], HS.floatView[0]
    }
  },
  40105: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => XS,
      e: () => bS,
      h: () => tS
    });
    const tS = SS => {
        const HS = ArrayBuffer.isView(SS) ? new Uint8Array(SS.buffer, SS.byteOffset, SS.byteLength) : new Uint8Array(SS);
        return "function" === typeof HS.toBase64 ? HS.toBase64() : function(SS) {
          const HS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let gS, tS, bS, XS, xS, NS, qS, uS = "",
            IS = 0;
          for (; IS < SS.length;) gS = SS[IS++], tS = IS < SS.length ? SS[IS++] : Number.NaN, bS = IS < SS.length ? SS[IS++] : Number.NaN, XS = gS >> 2, xS = (3 & gS) << 4 | tS >> 4, NS = (15 & tS) << 2 | bS >> 6, qS = 63 & bS, isNaN(tS) ? NS = qS = 64 : isNaN(bS) && (qS = 64), uS += HS.charAt(XS) + HS.charAt(xS) + HS.charAt(NS) + HS.charAt(qS);
          return uS
        }(HS)
      },
      bS = SS => atob(SS),
      XS = SS => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(SS).buffer : function(SS) {
        const HS = bS(SS),
          gS = HS.length,
          tS = new Uint8Array(new ArrayBuffer(gS));
        for (let bS = 0; bS < gS; bS++) tS[bS] = HS.charCodeAt(bS);
        return tS.buffer
      }(SS)
  },
  39937: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS,
      g: () => xS
    });
    let tS = [];
    class bS {
      static SetImmediate(SS) {
        0 === tS.length && setTimeout((() => {
          const SS = tS;
          tS = [];
          for (const HS of SS) HS()
        }), 1), tS.push(SS)
      }
    }

    function XS(SS, HS, gS) {
      try {
        if (SS()) return HS(), !0
      } catch (tS) {
        return gS?.(tS), !0
      }
      return !1
    }
    const xS = function(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        xS = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && XS(SS, HS, gS)) return null;
      const NS = setInterval((() => {
        XS(SS, HS, gS) ? clearInterval(NS) : (bS -= tS, bS < 0 && (clearInterval(NS), gS?.(new Error("Operation timed out after maximum retries. " + (xS || "")), !0)))
      }), tS);
      return () => clearInterval(NS)
    }
  },
  40092: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS
    });
    class tS {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(tS.CustomRequestHeaders).length > 0 || tS.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(SS) {
        return SS = (SS = SS.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(SS) {
        return tS.SkipRequestModificationForBabylonCDN && (SS.includes("preview.babylonjs.com") || SS.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(SS) {
        const HS = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (tS._ShouldSkipRequestModifications(SS)) return {
          url: SS,
          headers: HS
        };
        for (const bS in tS.CustomRequestHeaders) {
          const SS = tS.CustomRequestHeaders[bS];
          SS && (HS[bS] = SS)
        }
        const gS = {
          setRequestHeader: (SS, gS) => {
            HS[SS] = gS
          }
        };
        for (const bS of tS.CustomRequestModifiers) {
          if (tS._ShouldSkipRequestModifications(SS)) break;
          const HS = bS(gS, SS);
          "string" === typeof HS && (SS = HS)
        }
        return {
          url: SS,
          headers: HS
        }
      }
      static async FetchAsync(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const gS = HS.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: bS,
            headers: XS
          } = tS._CollectCustomizations(tS._CleanUrl(SS), HS.headers ?? {});
          return await fetch(bS, {
            method: gS,
            headers: XS,
            body: HS.body ?? void 0
          })
        }
        return await new Promise(((bS, XS) => {
          const xS = new tS;
          xS.responseType = "arraybuffer", xS.addEventListener("readystatechange", (() => {
            if (4 === xS.readyState)
              if (xS.status >= 200 && xS.status < 300) {
                const SS = "undefined" !== typeof Headers ? new Headers : void 0,
                  HS = xS.getResponseHeader("Content-Type");
                HS && SS && SS.set("Content-Type", HS), "undefined" !== typeof Response ? bS(new Response(xS.response, {
                  status: xS.status,
                  statusText: xS.statusText,
                  headers: SS
                })) : bS({
                  ok: !0,
                  status: xS.status,
                  statusText: xS.statusText,
                  headers: {
                    get: SS => xS.getResponseHeader(SS)
                  },
                  arrayBuffer: async () => await Promise.resolve(xS.response)
                })
              } else XS(new Error(`HTTP ${xS.status} loading '${xS.requestURL}': ${xS.statusText}`))
          })), xS.open(gS, SS, HS.headers), xS.send(HS.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(SS) {
        this._xhr.onprogress = SS
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
      set responseType(SS) {
        this._xhr.responseType = SS
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(SS) {
        this._xhr.timeout = SS
      }
      addEventListener(SS, HS, gS) {
        this._xhr.addEventListener(SS, HS, gS)
      }
      removeEventListener(SS, HS, gS) {
        this._xhr.removeEventListener(SS, HS, gS)
      }
      abort() {
        this._xhr.abort()
      }
      send(SS) {
        this._xhr.send(SS)
      }
      open(SS, HS, gS) {
        const {
          url: bS,
          headers: XS
        } = tS._CollectCustomizations(HS, gS);
        this._requestURL = tS._CleanUrl(bS), this._xhr.open(SS, this._requestURL, !0);
        for (const tS in XS) this._xhr.setRequestHeader(tS, XS[tS])
      }
      setRequestHeader(SS, HS) {
        this._xhr.setRequestHeader(SS, HS)
      }
      getResponseHeader(SS) {
        return this._xhr.getResponseHeader(SS)
      }
    }
    tS.CustomRequestHeaders = {}, tS.CustomRequestModifiers = new Array, tS.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);