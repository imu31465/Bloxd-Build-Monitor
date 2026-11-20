export const id = 246;
export const ids = [246];
export const modules = {
  39689: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => CT,
      f: () => AT,
      g: () => fT,
      h: () => jT,
      i: () => xT,
      j: () => yT,
      m: () => IT
    });
    var lT = cT(38512),
      MT = cT(39694);

    function KT(TT, kT, cT, lT) {
      switch (kT) {
        case 5120: {
          let kT = TT.getInt8(cT);
          return lT && (kT = Math.max(kT / 127, -1)), kT
        }
        case 5121: {
          let kT = TT.getUint8(cT);
          return lT && (kT /= 255), kT
        }
        case 5122: {
          let kT = TT.getInt16(cT, !0);
          return lT && (kT = Math.max(kT / 32767, -1)), kT
        }
        case 5123: {
          let kT = TT.getUint16(cT, !0);
          return lT && (kT /= 65535), kT
        }
        case 5131:
          return (0, MT.e)(TT.getUint16(cT, !0));
        case 5124:
          return TT.getInt32(cT, !0);
        case 5125:
          return TT.getUint32(cT, !0);
        case 5126:
          return TT.getFloat32(cT, !0);
        default:
          throw new Error(`Invalid component type ${kT}`)
      }
    }

    function OT(TT, kT, cT, lT, KT) {
      switch (kT) {
        case 5120:
          lT && (KT = Math.round(127 * KT)), TT.setInt8(cT, KT);
          break;
        case 5121:
          lT && (KT = Math.round(255 * KT)), TT.setUint8(cT, KT);
          break;
        case 5122:
          lT && (KT = Math.round(32767 * KT)), TT.setInt16(cT, KT, !0);
          break;
        case 5123:
          lT && (KT = Math.round(65535 * KT)), TT.setUint16(cT, KT, !0);
          break;
        case 5131:
          TT.setUint16(cT, (0, MT.i)(KT), !0);
          break;
        case 5124:
          TT.setInt32(cT, KT, !0);
          break;
        case 5125:
          TT.setUint32(cT, KT, !0);
          break;
        case 5126:
          TT.setFloat32(cT, KT, !0);
          break;
        default:
          throw new Error(`Invalid component type ${kT}`)
      }
    }

    function yT(TT) {
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

    function fT(TT, kT, cT, lT, MT, fT, xT, IT) {
      const AT = new Array(lT),
        CT = new Array(lT);
      if (TT instanceof Array) {
        let MT = kT / 4;
        const KT = cT / 4;
        for (let kT = 0; kT < fT; kT += lT) {
          for (let kT = 0; kT < lT; kT++) AT[kT] = CT[kT] = TT[MT + kT];
          IT(CT, kT);
          for (let kT = 0; kT < lT; kT++) AT[kT] !== CT[kT] && (TT[MT + kT] = CT[kT]);
          MT += KT
        }
      } else {
        const jT = ArrayBuffer.isView(TT) ? new DataView(TT.buffer, TT.byteOffset, TT.byteLength) : new DataView(TT),
          vT = yT(MT);
        for (let TT = 0; TT < fT; TT += lT) {
          for (let TT = 0, cT = kT; TT < lT; TT++, cT += vT) AT[TT] = CT[TT] = KT(jT, MT, cT, xT);
          IT(CT, TT);
          for (let TT = 0, cT = kT; TT < lT; TT++, cT += vT) AT[TT] !== CT[TT] && OT(jT, MT, cT, xT, CT[TT]);
          kT += cT
        }
      }
    }

    function xT(TT, kT, cT, MT, KT, OT, xT, IT) {
      const AT = kT * yT(cT),
        CT = xT * kT;
      if (5126 !== cT || KT !== AT) {
        const lT = new Float32Array(CT);
        return fT(TT, MT, KT, kT, cT, CT, OT, ((TT, cT) => {
          for (let MT = 0; MT < kT; MT++) lT[cT + MT] = TT[MT]
        })), lT
      }
      if (!(TT instanceof Array || TT instanceof Float32Array) || 0 !== MT || TT.length !== CT) {
        if (TT instanceof Array) {
          const kT = MT / 4;
          return TT.slice(kT, kT + CT)
        }
        if (ArrayBuffer.isView(TT)) {
          const kT = TT.byteOffset + MT;
          return 0 !== (3 & kT) && (lT.e.Warn("Float array must be aligned to 4-bytes border"), IT = !0), IT ? new Float32Array(TT.buffer.slice(kT, kT + CT * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(TT.buffer, kT, CT)
        }
        return new Float32Array(TT, MT, CT)
      }
      return IT ? TT.slice() : TT
    }

    function IT(TT, kT, cT, MT, KT, OT, xT) {
      const IT = yT(cT),
        AT = function(TT) {
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
        }(cT),
        CT = OT * kT;
      if (Array.isArray(TT)) {
        if (0 !== (3 & MT) || 0 !== (3 & KT)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const lT = MT / 4,
          yT = KT / 4;
        if (lT + (OT - 1) * yT + kT > TT.length) throw new Error("Last accessed index is out of bounds.");
        if (yT < kT) throw new Error("Data stride cannot be smaller than the component size.");
        if (yT !== kT) {
          const lT = new AT(CT);
          return fT(TT, MT, KT, kT, cT, CT, !1, ((TT, cT) => {
            for (let MT = 0; MT < kT; MT++) lT[cT + MT] = TT[MT]
          })), lT
        }
        return new AT(TT.slice(lT, lT + CT))
      }
      let jT, vT = MT;
      ArrayBuffer.isView(TT) ? (jT = TT.buffer, vT += TT.byteOffset) : jT = TT;
      if (vT + (OT - 1) * KT + kT * IT > jT.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const tT = kT * IT;
      if (KT < tT) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (KT !== tT) {
        const TT = new AT(CT),
          cT = new Uint8Array(jT, vT),
          lT = new Uint8Array(TT.buffer),
          MT = kT * IT;
        for (let kT = 0, yT = 0, fT = 0; kT < OT; kT++, yT += KT, fT += MT) lT.set(cT.subarray(yT, yT + MT), fT);
        return TT
      }
      return 1 !== IT && 0 !== (vT & IT - 1) && (lT.e.Warn("Array must be aligned to border of element size. Data will be copied."), xT = !0), xT ? new AT(jT.slice(vT, vT + CT * IT)) : new AT(jT, vT, CT)
    }

    function AT(TT, kT, cT, MT, KT, OT, xT, IT) {
      const AT = kT * yT(cT),
        CT = xT * kT;
      if (IT.length !== CT) throw new Error("Output length is not valid");
      if (5126 === cT && KT === AT)
        if (TT instanceof Array) {
          const kT = MT / 4;
          IT.set(TT, kT)
        } else if (ArrayBuffer.isView(TT)) {
        const kT = TT.byteOffset + MT;
        if (0 !== (3 & kT)) return lT.e.Warn("Float array must be aligned to 4-bytes border"), void IT.set(new Float32Array(TT.buffer.slice(kT, kT + CT * Float32Array.BYTES_PER_ELEMENT)));
        const cT = new Float32Array(TT.buffer, kT, CT);
        IT.set(cT)
      } else {
        const kT = new Float32Array(TT, MT, CT);
        IT.set(kT)
      } else fT(TT, MT, KT, kT, cT, CT, OT, ((TT, cT) => {
        for (let lT = 0; lT < kT; lT++) IT[cT + lT] = TT[lT]
      }))
    }

    function CT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(TT)) {
        for (let MT = 0; MT < kT; MT++)
          if (TT[cT + MT] - lT > 65535) return !0;
        return !1
      }
      return 4 === TT.BYTES_PER_ELEMENT
    }

    function jT(TT) {
      const kT = TT.buffer;
      if (kT instanceof ArrayBuffer) return TT;
      const cT = new ArrayBuffer(TT.byteLength);
      return new Uint8Array(cT).set(new Uint8Array(kT, TT.byteOffset, TT.byteLength)), cT
    }
  },
  39509: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => PT,
      e: () => FT,
      k: () => rT,
      g: () => HT,
      o: () => eT
    });
    class lT {
      constructor() {
        this.children = []
      }
      isValid(TT) {
        return !0
      }
      process(TT, kT, cT) {
        let lT = "";
        if (this.line) {
          let cT = this.line;
          const MT = kT.processor;
          if (MT) {
            MT.lineProcessor && (cT = MT.lineProcessor(cT, kT.isFragment, kT.processingContext));
            const lT = kT.processor?.attributeKeywordName ?? "attribute",
              KT = kT.isFragment && kT.processor?.varyingFragmentKeywordName ? kT.processor?.varyingFragmentKeywordName : !kT.isFragment && kT.processor?.varyingVertexKeywordName ? kT.processor?.varyingVertexKeywordName : "varying";
            if (!kT.isFragment && MT.attributeProcessor && this.line.startsWith(lT)) cT = MT.attributeProcessor(this.line, TT, kT.processingContext);
            else if (MT.varyingProcessor && (MT.varyingCheck?.(this.line, kT.isFragment) || !MT.varyingCheck && this.line.startsWith(KT))) cT = MT.varyingProcessor(this.line, kT.isFragment, TT, kT.processingContext);
            else if (MT.uniformProcessor && MT.uniformRegexp && MT.uniformRegexp.test(this.line)) kT.lookForClosingBracketForUniformBuffer || (cT = MT.uniformProcessor(this.line, kT.isFragment, TT, kT.processingContext));
            else if (MT.uniformBufferProcessor && MT.uniformBufferRegexp && MT.uniformBufferRegexp.test(this.line)) kT.lookForClosingBracketForUniformBuffer || (cT = MT.uniformBufferProcessor(this.line, kT.isFragment, kT.processingContext), kT.lookForClosingBracketForUniformBuffer = !0);
            else if (MT.textureProcessor && MT.textureRegexp && MT.textureRegexp.test(this.line)) cT = MT.textureProcessor(this.line, kT.isFragment, TT, kT.processingContext);
            else if ((MT.uniformProcessor || MT.uniformBufferProcessor) && this.line.startsWith("uniform") && !kT.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? MT.uniformProcessor && (cT = MT.uniformProcessor(this.line, kT.isFragment, TT, kT.processingContext)) : MT.uniformBufferProcessor && (cT = MT.uniformBufferProcessor(this.line, kT.isFragment, kT.processingContext), kT.lookForClosingBracketForUniformBuffer = !0)
            }
            kT.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (kT.lookForClosingBracketForUniformBuffer = !1, MT.endOfUniformBufferProcessor && (cT = MT.endOfUniformBufferProcessor(this.line, kT.isFragment, kT.processingContext)))
          }
          lT += cT + "\n"
        }
        for (const MT of this.children) lT += MT.process(TT, kT, cT);
        return this.additionalDefineKey && (TT[this.additionalDefineKey] = this.additionalDefineValue || "true", cT[this.additionalDefineKey] = TT[this.additionalDefineKey]), lT
      }
    }
    class MT {
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
        for (const kT of TT) {
          if (!kT || "\r" === kT) continue;
          if ("#" === kT[0]) {
            this._lines.push(kT);
            continue
          }
          const TT = kT.trim();
          if (!TT) continue;
          if (TT.startsWith("//")) {
            this._lines.push(kT);
            continue
          }
          const cT = TT.indexOf(";");
          if (-1 === cT) this._lines.push(TT);
          else if (cT === TT.length - 1) TT.length > 1 && this._lines.push(TT);
          else {
            const TT = kT.split(";");
            for (let kT = 0; kT < TT.length; kT++) {
              let cT = TT[kT];
              cT && (cT = cT.trim(), cT && this._lines.push(cT + (kT !== TT.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class KT extends lT {
      process(TT, kT, cT) {
        for (let lT = 0; lT < this.children.length; lT++) {
          const MT = this.children[lT];
          if (MT.isValid(TT)) return MT.process(TT, kT, cT)
        }
        return ""
      }
    }
    class OT extends lT {
      isValid(TT) {
        return this.testExpression.isTrue(TT)
      }
    }
    class yT {
      isTrue(TT) {
        return !0
      }
      static postfixToInfix(TT) {
        const kT = [];
        for (const cT of TT)
          if (void 0 === yT._OperatorPriority[cT]) kT.push(cT);
          else {
            const TT = kT[kT.length - 1],
              lT = kT[kT.length - 2];
            kT.length -= 2, kT.push(`(${lT}${cT}${TT})`)
          } return kT[kT.length - 1]
      }
      static infixToPostfix(TT) {
        const kT = yT._InfixToPostfixCache.get(TT);
        if (kT) return kT.accessTime = Date.now(), kT.result;
        if (!TT.includes("&&") && !TT.includes("||") && !TT.includes(")") && !TT.includes("(")) return [TT];
        const cT = [];
        let lT = -1;
        const MT = () => {
            IT = IT.trim(), "" !== IT && (cT.push(IT), IT = "")
          },
          KT = TT => {
            lT < yT._Stack.length - 1 && (yT._Stack[++lT] = TT)
          },
          OT = () => yT._Stack[lT],
          fT = () => -1 === lT ? "!!INVALID EXPRESSION!!" : yT._Stack[lT--];
        let xT = 0,
          IT = "";
        for (; xT < TT.length;) {
          const kT = TT.charAt(xT),
            AT = xT < TT.length - 1 ? TT.substring(xT, 2 + xT) : "";
          if ("(" === kT) IT = "", KT(kT);
          else if (")" === kT) {
            for (MT(); - 1 !== lT && "(" !== OT();) cT.push(fT());
            fT()
          } else if (yT._OperatorPriority[AT] > 1) {
            for (MT(); - 1 !== lT && yT._OperatorPriority[OT()] >= yT._OperatorPriority[AT];) cT.push(fT());
            KT(AT), xT++
          } else IT += kT;
          xT++
        }
        for (MT(); - 1 !== lT;) "(" === OT() ? fT() : cT.push(fT());
        return yT._InfixToPostfixCache.size >= yT.InfixToPostfixCacheLimitSize && yT.ClearCache(), yT._InfixToPostfixCache.set(TT, {
          result: cT,
          accessTime: Date.now()
        }), cT
      }
      static ClearCache() {
        const TT = Array.from(yT._InfixToPostfixCache.entries()).sort(((TT, kT) => TT[1].accessTime - kT[1].accessTime));
        for (let kT = 0; kT < yT.InfixToPostfixCacheCleanupSize; kT++) yT._InfixToPostfixCache.delete(TT[kT][0])
      }
    }
    yT.InfixToPostfixCacheLimitSize = 5e4, yT.InfixToPostfixCacheCleanupSize = 25e3, yT._InfixToPostfixCache = new Map, yT._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, yT._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class fT extends yT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = TT, this.not = kT
      }
      isTrue(TT) {
        let kT = void 0 !== TT[this.define];
        return this.not && (kT = !kT), kT
      }
    }
    class xT extends yT {
      isTrue(TT) {
        return this.leftOperand.isTrue(TT) || this.rightOperand.isTrue(TT)
      }
    }
    class IT extends yT {
      isTrue(TT) {
        return this.leftOperand.isTrue(TT) && this.rightOperand.isTrue(TT)
      }
    }
    class AT extends yT {
      constructor(TT, kT, cT) {
        super(), this.define = TT, this.operand = kT, this.testValue = cT
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(TT) {
        let kT = !1;
        const cT = parseInt(void 0 != TT[this.define] ? TT[this.define] : this.define),
          lT = parseInt(void 0 != TT[this.testValue] ? TT[this.testValue] : this.testValue);
        if (isNaN(cT) || isNaN(lT)) return !1;
        switch (this.operand) {
          case ">":
            kT = cT > lT;
            break;
          case "<":
            kT = cT < lT;
            break;
          case "<=":
            kT = cT <= lT;
            break;
          case ">=":
            kT = cT >= lT;
            break;
          case "==":
            kT = cT === lT;
            break;
          case "!=":
            kT = cT !== lT
        }
        return kT
      }
    }
    var CT = cT(39500),
      jT = cT(39496);
    const vT = /defined\s*?\((.+?)\)/g,
      tT = /defined\s*?\[(.+?)\]/g,
      hT = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      NT = /__decl__/,
      QT = /light\{X\}.(\w*)/g,
      ST = /\{X\}/g,
      DT = [],
      aT = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function FT(TT) {
      TT.processor && TT.processor.initializeShaders && TT.processor.initializeShaders(TT.processingContext)
    }

    function rT(TT, kT, cT, lT) {
      kT.processor?.preProcessShaderCode && (TT = kT.processor.preProcessShaderCode(TT, kT.isFragment)), HT(TT, kT, (TT => {
        kT.processCodeAfterIncludes && (TT = kT.processCodeAfterIncludes(kT.isFragment ? "fragment" : "vertex", TT, kT.defines));
        const MT = function(TT, kT, cT) {
          let lT = function(TT, kT) {
            if (kT.processor?.noPrecision) return TT;
            const cT = kT.shouldUseHighPrecisionShader; - 1 === TT.indexOf("precision highp float") ? TT = cT ? "precision highp float;\n" + TT : "precision mediump float;\n" + TT : cT || (TT = TT.replace("precision highp float", "precision mediump float"));
            return TT
          }(TT, kT);
          if (!kT.processor) return lT;
          if (0 === kT.processor.shaderLanguage && -1 !== lT.indexOf("#version 3") && (lT = lT.replace("#version 300 es", ""), !kT.processor.parseGLES3)) return lT;
          const MT = kT.defines,
            KT = oT(kT, cT);
          kT.processor.preProcessor && (lT = kT.processor.preProcessor(lT, MT, KT, kT.isFragment, kT.processingContext));
          const OT = {};
          lT = JT(lT, KT, kT, OT), kT.processor.postProcessor && (lT = kT.processor.postProcessor(lT, MT, kT.isFragment, kT.processingContext, cT ? {
            drawBuffersExtensionDisabled: !cT.getCaps().drawBuffersExtension
          } : {}, KT, OT));
          cT?._features.needShaderCodeInlining && (lT = cT.inlineShaderCode(lT));
          return lT
        }(TT, kT, lT);
        cT(MT, TT)
      }))
    }

    function PT(TT, kT, cT) {
      return cT.processor && cT.processor.finalizeShaders ? cT.processor.finalizeShaders(TT, kT, cT.processingContext) : {
        vertexCode: TT,
        fragmentCode: kT
      }
    }

    function wT(TT) {
      const kT = /defined\((.+)\)/.exec(TT);
      if (kT && kT.length) return new fT(kT[1].trim(), "!" === TT[0]);
      const cT = ["==", "!=", ">=", "<=", "<", ">"];
      let lT = "",
        MT = 0;
      for (lT of cT)
        if (MT = TT.indexOf(lT), MT > -1) break;
      if (-1 === MT) return new fT(TT);
      const KT = TT.substring(0, MT).trim(),
        OT = TT.substring(MT + lT.length).trim();
      return new AT(KT, lT, OT)
    }

    function mT(TT, kT) {
      const cT = new OT,
        lT = TT.substring(0, kT);
      let MT = TT.substring(kT);
      return MT = MT.substring(0, (MT.indexOf("//") + 1 || MT.length + 1) - 1).trim(), cT.testExpression = "#ifdef" === lT ? new fT(MT) : "#ifndef" === lT ? new fT(MT, !0) : function(TT) {
        TT = TT.replace(vT, "defined[$1]");
        const kT = yT.infixToPostfix(TT),
          cT = [];
        for (const MT of kT)
          if ("||" !== MT && "&&" !== MT) cT.push(MT);
          else if (cT.length >= 2) {
          let TT = cT[cT.length - 1],
            kT = cT[cT.length - 2];
          cT.length -= 2;
          const lT = "&&" == MT ? new IT : new xT;
          "string" === typeof TT && (TT = TT.replace(tT, "defined($1)")), "string" === typeof kT && (kT = kT.replace(tT, "defined($1)")), lT.leftOperand = "string" === typeof kT ? wT(kT) : kT, lT.rightOperand = "string" === typeof TT ? wT(TT) : TT, cT.push(lT)
        }
        let lT = cT[cT.length - 1];
        return "string" === typeof lT && (lT = lT.replace(tT, "defined($1)")), "string" === typeof lT ? wT(lT) : lT
      }(MT), cT
    }

    function bT(TT, kT, cT, MT) {
      let KT;
      for (; zT(TT, cT, MT);) {
        KT = TT.currentLine;
        const OT = KT.substring(0, 5).toLowerCase();
        if ("#else" === OT) {
          const cT = new lT;
          return kT.children.push(cT), void zT(TT, cT, MT)
        }
        if ("#elif" === OT) {
          const TT = mT(KT, 5);
          kT.children.push(TT), cT = TT
        }
      }
    }

    function zT(TT, kT, cT) {
      for (; TT.canRead;) {
        TT.lineIndex++;
        const MT = TT.currentLine;
        if (MT.indexOf("#") >= 0) {
          const lT = aT.exec(MT);
          if (lT && lT.length) {
            switch (lT[0]) {
              case "#ifdef": {
                const lT = new KT;
                kT.children.push(lT);
                const OT = mT(MT, 6);
                lT.children.push(OT), bT(TT, lT, OT, cT);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const lT = new KT;
                kT.children.push(lT);
                const OT = mT(MT, 7);
                lT.children.push(OT), bT(TT, lT, OT, cT);
                break
              }
              case "#if": {
                const lT = new KT,
                  OT = mT(MT, 3);
                kT.children.push(lT), lT.children.push(OT), bT(TT, lT, OT, cT);
                break
              }
            }
            continue
          }
        }
        const OT = new lT;
        if (OT.line = MT, kT.children.push(OT), "#" === MT[0] && "d" === MT[1]) {
          const TT = MT.replace(";", "").split(" ");
          OT.additionalDefineKey = TT[1], 3 === TT.length && (OT.additionalDefineValue = TT[2])
        }
      }
      return !1
    }

    function JT(TT, kT, cT, KT) {
      const OT = new lT,
        yT = new MT;
      return yT.lineIndex = -1, yT.lines = TT.split("\n"), zT(yT, OT, KT), OT.process(kT, cT, KT)
    }

    function oT(TT, kT) {
      const cT = TT.defines,
        lT = {};
      for (const MT of cT) {
        const TT = MT.replace("#define", "").replace(";", "").trim().split(" ");
        lT[TT[0]] = TT.length > 1 ? TT[1] : ""
      }
      return 0 === TT.processor?.shaderLanguage && (lT.GL_ES = "true"), lT.__VERSION__ = TT.version, lT[TT.platformName] = "true", (0, jT.l)(lT, kT?.isNDCHalfZRange, kT?.QcT, kT?.useExactSrgbConversions), lT
    }

    function HT(TT, kT, cT) {
      let lT;
      for (DT.length = 0; null !== (lT = hT.exec(TT));) DT.push(lT);
      let MT = [TT],
        KT = !1;
      for (const yT of DT) {
        let TT = yT[1];
        if (-1 !== TT.indexOf("__decl__") && (TT = TT.replace(NT, ""), kT.supportsUniformBuffers && (TT = TT.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), TT += "Declaration"), !kT.includesShadersStore[TT]) {
          const lT = kT.shadersRepository + "ShadersInclude/" + TT + ".fx";
          return void eT.loadFile(lT, (lT => {
            kT.includesShadersStore[TT] = lT, HT(MT.join(""), kT, cT)
          }))
        } {
          let cT = kT.includesShadersStore[TT];
          if (yT[2]) {
            const TT = yT[3].split(",");
            for (let kT = 0; kT < TT.length; kT += 2) {
              const lT = new RegExp(TT[kT], "g"),
                MT = TT[kT + 1];
              cT = cT.replace(lT, MT)
            }
          }
          if (yT[4]) {
            const TT = yT[5];
            if (-1 !== TT.indexOf("..")) {
              const lT = TT.split(".."),
                MT = parseInt(lT[0]);
              let KT = parseInt(lT[1]),
                OT = cT.slice(0);
              cT = "", isNaN(KT) && (KT = kT.indexParameters[lT[1]]);
              for (let TT = MT; TT < KT; TT++) kT.supportsUniformBuffers || (OT = OT.replace(QT, ((TT, kT) => kT + "{X}"))), cT += OT.replace(ST, TT.toString()) + "\n"
            } else kT.supportsUniformBuffers || (cT = cT.replace(QT, ((TT, kT) => kT + "{X}"))), cT = cT.replace(ST, TT)
          }
          const lT = [];
          for (const TT of MT) {
            const kT = TT.split(yT[0]);
            for (let TT = 0; TT < kT.length - 1; TT++) lT.push(kT[TT]), lT.push(cT);
            lT.push(kT[kT.length - 1])
          }
          MT = lT, KT = KT || cT.indexOf("#include<") >= 0 || cT.indexOf("#include <") >= 0
        }
      }
      DT.length = 0;
      const OT = MT.join("");
      KT ? HT(OT.toString(), kT, cT) : cT(OT)
    }
    const eT = {
      loadFile: (TT, kT, cT, lT, MT, KT) => {
        throw (0, CT.i)("FileTools")
      }
    }
  },
  39496: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      i: () => KT,
      l: () => yT,
      m: () => OT,
      n: () => fT
    });
    var lT = cT(39500);
    const MT = {};

    function KT(TT, kT) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (kT ? kT + "\n" : "") + TT
    }

    function OT(TT, kT, cT, KT, OT, yT, fT) {
      const xT = fT || MT.loadFile;
      if (!xT) throw (0, lT.i)("FileTools");
      return xT(TT, kT, cT, KT, OT, yT)
    }

    function yT(TT, kT, cT, lT) {
      if (TT) return kT ? TT.IS_NDC_HALF_ZRANGE = "" : delete TT.IS_NDC_HALF_ZRANGE, cT ? TT.USE_REVERSE_DEPTHBUFFER = "" : delete TT.USE_REVERSE_DEPTHBUFFER, void(lT ? TT.USE_EXACT_SRGB_CONVERSIONS = "" : delete TT.USE_EXACT_SRGB_CONVERSIONS);
      {
        let TT = "";
        return kT && (TT += "#define IS_NDC_HALF_ZRANGE"), cT && (TT && (TT += "\n"), TT += "#define USE_REVERSE_DEPTHBUFFER"), lT && (TT && (TT += "\n"), TT += "#define USE_EXACT_SRGB_CONVERSIONS"), TT
      }
    }

    function fT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        lT = arguments.length > 3 ? arguments[3] : void 0;
      switch (TT) {
        case 3: {
          const TT = new Int8Array(kT);
          return lT && TT.set(new Int8Array(lT)), TT
        }
        case 0: {
          const TT = new Uint8Array(kT);
          return lT && TT.set(new Uint8Array(lT)), TT
        }
        case 4: {
          const TT = "number" !== typeof kT ? new Int16Array(kT) : new Int16Array(cT ? kT / 2 : kT);
          return lT && TT.set(new Int16Array(lT)), TT
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const TT = "number" !== typeof kT ? new Uint16Array(kT) : new Uint16Array(cT ? kT / 2 : kT);
          return lT && TT.set(new Uint16Array(lT)), TT
        }
        case 6: {
          const TT = "number" !== typeof kT ? new Int32Array(kT) : new Int32Array(cT ? kT / 4 : kT);
          return lT && TT.set(new Int32Array(lT)), TT
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const TT = "number" !== typeof kT ? new Uint32Array(kT) : new Uint32Array(cT ? kT / 4 : kT);
          return lT && TT.set(new Uint32Array(lT)), TT
        }
        case 1: {
          const TT = "number" !== typeof kT ? new Float32Array(kT) : new Float32Array(cT ? kT / 4 : kT);
          return lT && TT.set(new Float32Array(lT)), TT
        }
      }
      const MT = new Uint8Array(kT);
      return lT && MT.set(new Uint8Array(lT)), MT
    }
  },
  39500: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => xT,
      d: () => IT,
      f: () => fT,
      i: () => MT
    });
    const lT = {};

    function MT(TT) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !lT[TT]) return lT[TT] = !0, `${TT} needs to be imported before as it contains a side-effect required by your code.`
    }
    const KT = {};
    let OT = !1,
      yT = 0;

    function fT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const lT = function() {
        if ((cT || OT) && 0 === yT) {
          const cT = `${TT}.${kT}`;
          KT[cT] || (KT[cT] = !0, console.warn(`[Babylon.js] ${cT}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return lT.__isSideEffectStub = !0, lT
    }

    function xT(TT) {
      return !!TT && !TT.__isSideEffectStub
    }

    function IT(TT, kT) {
      return {
        get() {},
        set(TT) {
          Object.defineProperty(this, kT, {
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
  39482: (TT, kT, cT) => {
    function lT() {
      return "undefined" !== typeof window
    }

    function MT() {
      return "undefined" !== typeof navigator
    }

    function KT() {
      return "undefined" !== typeof document
    }

    function OT(TT) {
      let kT = "",
        cT = TT.firstChild;
      for (; cT;) 3 === cT.nodeType && (kT += cT.textContent), cT = cT.nextSibling;
      return kT
    }
    cT.d(kT, {
      b: () => OT,
      d: () => KT,
      g: () => MT,
      i: () => lT
    })
  },
  39683: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT,
      f: () => MT,
      h: () => KT
    });
    class lT extends Error {}
    lT._setPrototypeOf = Object.setPrototypeOf || ((TT, kT) => (TT.__proto__ = kT, TT));
    const MT = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class KT extends lT {
      constructor(TT, kT, cT) {
        super(TT), this.errorCode = kT, this.innerError = cT, this.name = "RuntimeError", lT._setPrototypeOf(this, KT.prototype)
      }
    }
  },
  39666: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => oT,
      c: () => ST,
      f: () => mT,
      g: () => zT,
      k: () => PT,
      o: () => FT,
      p: () => rT,
      q: () => ET,
      u: () => wT,
      v: () => DT
    });
    var lT = cT(39675),
      MT = cT(39482),
      KT = cT(36932);
    class OT {}
    OT.FilesToLoad = {};
    var yT = cT(39683),
      fT = cT(39687),
      xT = cT(36925),
      IT = cT(39496),
      AT = cT(39509),
      CT = cT(38512),
      jT = cT(39514),
      vT = cT(39689);
    const tT = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class hT extends yT.h {
      constructor(TT, kT) {
        super(TT, yT.f.LoadFileError), this.name = "LoadFileError", yT.e._setPrototypeOf(this, hT.prototype), kT instanceof lT.b ? this.request = kT : this.file = kT
      }
    }
    class NT extends yT.h {
      constructor(TT, kT) {
        super(TT, yT.f.RequestFileError), this.request = kT, this.name = "RequestFileError", yT.e._setPrototypeOf(this, NT.prototype)
      }
    }
    class QT extends yT.h {
      constructor(TT, kT) {
        super(TT, yT.f.ReadFileError), this.file = kT, this.name = "ReadFileError", yT.e._setPrototypeOf(this, QT.prototype)
      }
    }
    const ST = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (cT, lT, MT) => 0 !== lT.status || MT >= TT || -1 !== cT.indexOf("file:") ? -1 : Math.pow(2, MT) * kT
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: TT => TT,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: TT => TT,
        CleanUrl: TT => TT = TT.replace(/#/gm, "%23")
      },
      DT = (TT, kT) => {
        if ((!TT || 0 !== TT.indexOf("data:")) && ST.CorsBehavior)
          if ("string" === typeof ST.CorsBehavior || ST.CorsBehavior instanceof String) kT.crossOrigin = ST.CorsBehavior;
          else {
            const cT = ST.CorsBehavior(TT);
            cT && (kT.crossOrigin = cT)
          }
      },
      aT = {
        getRequiredSize: null
      },
      FT = function(TT, kT, cT, MT) {
        let KT, yT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          IT = arguments.length > 5 ? arguments[5] : void 0,
          AT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : xT.d.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !AT?._features.forceBitmapOverHTMLImageElement) return cT("LoadImage is only supported in web or BabylonNative environments."), null;
        if (AT?._features.forceBitmapOverHTMLImageElement && "string" !== typeof TT && "undefined" !== typeof Blob) {
          let lT;
          if (TT instanceof Blob) lT = TT;
          else {
            const kT = TT instanceof ArrayBuffer ? TT : (0, vT.h)(TT);
            lT = new Blob([kT], {
              type: yT
            })
          }
          return AT.createImageBitmap(lT, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...IT
          }).then(kT).catch((kT => {
            cT && cT("Error while trying to load image: " + TT, kT)
          })), null
        }
        let CT = !1;
        if (TT instanceof ArrayBuffer || ArrayBuffer.isView(TT))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let kT;
            kT = TT instanceof ArrayBuffer ? TT : (0, vT.h)(TT), KT = URL.createObjectURL(new Blob([kT], {
              type: yT
            })), CT = !0
          } else KT = `data:${yT};base64,` + (0, fT.k)(TT);
        else TT instanceof Blob ? (KT = URL.createObjectURL(TT), CT = !0) : (KT = ST.CleanUrl(TT), KT = ST.PreprocessUrl(KT));
        const jT = kT => {
          if (cT) {
            const lT = KT || TT.toString();
            cT(`Error while trying to load image: ${0===lT.indexOf("http")||lT.length<=128?lT:lT.slice(0,128)+"..."}`, kT)
          }
        };
        if (AT?._features.forceBitmapOverHTMLImageElement) return PT(KT, (lT => {
          AT.createImageBitmap(new Blob([lT], {
            type: yT
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...IT
          }).then((TT => {
            kT(TT), CT && URL.revokeObjectURL(KT)
          })).catch((kT => {
            cT && cT("Error while trying to load image: " + TT, kT)
          }))
        }), void 0, MT || void 0, !0, ((TT, kT) => {
          jT(kT)
        })), null;
        const tT = new Image;
        if (aT.getRequiredSize) {
          const kT = aT.getRequiredSize(TT);
          kT.width && (tT.width = kT.width), kT.height && (tT.height = kT.height)
        }
        DT(KT, tT);
        const hT = [],
          NT = () => {
            for (const TT of hT) TT.target.removeEventListener(TT.name, TT.handler);
            hT.length = 0
          };
        hT.push({
          target: tT,
          name: "load",
          handler: () => {
            NT(), kT(tT), CT && tT.src && URL.revokeObjectURL(tT.src)
          }
        }), hT.push({
          target: tT,
          name: "error",
          handler: TT => {
            NT(), jT(TT), CT && tT.src && URL.revokeObjectURL(tT.src)
          }
        }), hT.push({
          target: document,
          name: "securitypolicyviolation",
          handler: TT => {
            if (TT.blockedURI !== tT.src || "Yj" === TT.disposition) return;
            NT();
            const kT = new Error(`CSP violation of policy ${TT.effectiveDirective} ${TT.blockedURI}. Current policy is ${TT.originalPolicy}`);
            xT.d.UseFallbackTexture = !1, jT(kT), CT && tT.src && URL.revokeObjectURL(tT.src), tT.src = ""
          }
        }), (() => {
          for (const TT of hT) TT.target.addEventListener(TT.name, TT.handler)
        })();
        const QT = "blob:" === KT.substring(0, 5),
          FT = "data:" === KT.substring(0, 5),
          rT = () => {
            QT || FT || !lT.b.IsCustomRequestAvailable ? tT.src = KT : PT(KT, ((TT, kT, cT) => {
              const lT = new Blob([TT], {
                  type: !yT && cT ? cT : yT
                }),
                MT = URL.createObjectURL(lT);
              CT = !0, tT.src = MT
            }), void 0, MT || void 0, !0, ((TT, kT) => {
              jT(kT)
            }))
          },
          wT = () => {
            MT && MT.loadImage(KT, tT)
          };
        if (!QT && !FT && MT && MT.enableTexturesOffline) MT.open(wT, rT);
        else {
          if (-1 !== KT.indexOf("file:")) {
            const TT = decodeURIComponent(KT.substring(5).toLowerCase());
            if (OT.FilesToLoad[TT] && "undefined" !== typeof URL) {
              try {
                let kT;
                try {
                  kT = URL.createObjectURL(OT.FilesToLoad[TT])
                } catch (mT) {
                  kT = URL.createObjectURL(OT.FilesToLoad[TT])
                }
                tT.src = kT, CT = !0
              } catch (bT) {
                tT.src = ""
              }
              return tT
            }
          }
          rT()
        }
        return tT
      },
      rT = (TT, kT, cT, lT, MT) => {
        const OT = new FileReader,
          yT = {
            onCompleteObservable: new KT.b,
            abort: () => OT.abort()
          };
        return OT.onloadend = () => yT.onCompleteObservable.notifyObservers(yT), MT && (OT.onerror = () => {
          MT(new QT(`Unable to read ${TT.name}`, TT))
        }), OT.onload = TT => {
          kT(TT.target.result)
        }, cT && (OT.onprogress = cT), lT ? OT.readAsArrayBuffer(TT) : OT.readAsText(TT), yT
      },
      PT = (TT, kT, cT, lT, MT, fT, xT) => {
        if (TT.name) return rT(TT, kT, cT, MT, fT ? TT => {
          fT(void 0, TT)
        } : void 0);
        const IT = TT;
        if (-1 !== IT.indexOf("file:")) {
          let TT = decodeURIComponent(IT.substring(5).toLowerCase());
          0 === TT.indexOf("./") && (TT = TT.substring(2));
          const lT = OT.FilesToLoad[TT];
          if (lT) return rT(lT, kT, cT, MT, fT ? TT => fT(void 0, new hT(TT.message, TT.file)) : void 0)
        }
        const {
          match: AT,
          type: vT
        } = JT(IT);
        if (AT) {
          const TT = {
            onCompleteObservable: new KT.b,
            abort: () => () => {}
          };
          try {
            const TT = MT ? oT(IT) : HT(IT);
            kT(TT, void 0, vT)
          } catch (yT) {
            fT ? fT(void 0, yT) : CT.e.Error(yT.message || "Failed to parse the Data URL")
          }
          return jT.e.SetImmediate((() => {
            TT.onCompleteObservable.notifyObservers(TT)
          })), TT
        }
        return wT(IT, ((TT, cT) => {
          kT(TT, cT?.responseURL, cT?.getResponseHeader("content-type"))
        }), cT, lT, MT, fT ? TT => {
          fT(TT.request, new hT(TT.message, TT.request))
        } : void 0, xT)
      },
      wT = (TT, kT, cT, OT, yT, fT, IT) => {
        null !== OT && (OT ?? (OT = xT.d.LastCreatedScene?.offlineProvider)), TT = ST.CleanUrl(TT), TT = ST.PreprocessUrl(TT);
        const AT = ST.BaseUrl + TT;
        let jT = !1;
        const vT = {
            onCompleteObservable: new KT.b,
            abort: () => jT = !0
          },
          tT = () => {
            let TT, KT = new lT.b,
              OT = null;
            const xT = () => {
              KT && (cT && KT.removeEventListener("progress", cT), TT && KT.removeEventListener("readystatechange", TT), KT.removeEventListener("loadend", tT))
            };
            let tT = () => {
              xT(), vT.onCompleteObservable.notifyObservers(vT), vT.onCompleteObservable.clear(), cT = void 0, TT = null, tT = null, fT = void 0, IT = void 0, kT = void 0
            };
            vT.abort = () => {
              jT = !0, tT && tT(), KT && KT.readyState !== (XMLHttpRequest.DONE || 4) && KT.abort(), null !== OT && (clearTimeout(OT), OT = null), KT = null
            };
            const hT = TT => {
                const kT = TT.message || "Unknown error";
                fT && KT ? fT(new NT(kT, KT)) : CT.e.Error(kT)
              },
              QT = CT => {
                if (KT) {
                  if (KT.open("GET", AT), IT) try {
                    IT(KT)
                  } catch (vT) {
                    return void hT(vT)
                  }
                  yT && (KT.responseType = "arraybuffer"), cT && KT.addEventListener("progress", cT), tT && KT.addEventListener("loadend", tT), TT = () => {
                    if (!jT && KT && KT.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (TT && KT.removeEventListener("readystatechange", TT), KT.status >= 200 && KT.status < 300 || 0 === KT.status && (!(0, MT.i)() || bT())) {
                        const TT = yT ? KT.response : KT.responseText;
                        if (null !== TT) {
                          try {
                            kT && kT(TT, KT)
                          } catch (vT) {
                            hT(vT)
                          }
                          return
                        }
                      }
                      const cT = ST.DefaultRetryStrategy;
                      if (cT) {
                        const TT = cT(AT, KT, CT);
                        if (-1 !== TT) return xT(), KT = new lT.b, void(OT = setTimeout((() => QT(CT + 1)), TT))
                      }
                      const IT = new NT("Error status: " + KT.status + " " + KT.statusText + " - Unable to load " + AT, KT);
                      fT && fT(IT)
                    }
                  }, KT.addEventListener("readystatechange", TT), KT.send()
                }
              };
            QT(0)
          };
        if (OT && OT.enableSceneOffline && !TT.startsWith("blob:")) {
          const lT = TT => {
              TT && TT.status > 400 ? fT && fT(TT) : tT()
            },
            MT = () => {
              OT && OT.loadFile(ST.BaseUrl + TT, (TT => {
                !jT && kT && kT(TT), vT.onCompleteObservable.notifyObservers(vT)
              }), cT ? TT => {
                !jT && cT && cT(TT)
              } : void 0, lT, yT)
            };
          OT.open(MT, lT)
        } else tT();
        return vT
      },
      mT = TT => {
        const {
          match: kT,
          type: cT
        } = JT(TT);
        if (kT) return cT || void 0;
        const lT = TT.lastIndexOf(".");
        switch (TT.substring(lT + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "KJ":
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
      bT = () => "undefined" !== typeof location && "file:" === location.protocol,
      zT = TT => tT.test(TT),
      JT = TT => {
        const kT = tT.exec(TT);
        if (null === kT || 0 === kT.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: kT[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function oT(TT) {
      return (0, fT.e)(TT.split(",")[1])
    }
    const HT = TT => (0, fT.i)(TT.split(",")[1]);
    let eT;
    const GT = (TT, kT, cT, lT, MT, KT, OT, yT, fT, xT) => {
      eT = {
        DecodeBase64UrlToBinary: TT,
        DecodeBase64UrlToString: kT,
        DefaultRetryStrategy: cT.DefaultRetryStrategy,
        BaseUrl: cT.BaseUrl,
        CorsBehavior: cT.CorsBehavior,
        PreprocessUrl: cT.PreprocessUrl,
        IsBase64DataUrl: lT,
        IsFileURL: MT,
        LoadFile: KT,
        LoadImage: OT,
        ReadFile: yT,
        RequestFile: fT,
        SetCorsBehavior: xT
      }, Object.defineProperty(eT, "DefaultRetryStrategy", {
        get: function() {
          return cT.DefaultRetryStrategy
        },
        set: function(TT) {
          cT.DefaultRetryStrategy = TT
        }
      }), Object.defineProperty(eT, "BaseUrl", {
        get: function() {
          return cT.BaseUrl
        },
        set: function(TT) {
          cT.BaseUrl = TT
        }
      }), Object.defineProperty(eT, "PreprocessUrl", {
        get: function() {
          return cT.PreprocessUrl
        },
        set: function(TT) {
          cT.PreprocessUrl = TT
        }
      }), Object.defineProperty(eT, "CorsBehavior", {
        get: function() {
          return cT.CorsBehavior
        },
        set: function(TT) {
          cT.CorsBehavior = TT
        }
      })
    };
    let VT = !1;

    function ET() {
      VT || (VT = !0, GT(oT, HT, ST, zT, bT, PT, FT, rT, wT, DT), IT.e.loadFile = PT, IT.e.loadImage = FT, AT.o.loadFile = PT)
    }
  },
  39694: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => yT,
      f: () => KT,
      i: () => OT
    });
    let lT = null;

    function MT() {
      if (lT) return lT;
      const TT = new ArrayBuffer(4),
        kT = new Float32Array(TT),
        cT = new Uint32Array(TT),
        MT = new Uint32Array(512),
        KT = new Uint32Array(512);
      for (let lT = 0; lT < 256; ++lT) {
        const TT = lT - 127;
        TT < -24 ? (MT[lT] = 0, MT[256 | lT] = 32768, KT[lT] = 24, KT[256 | lT] = 24) : TT < -14 ? (MT[lT] = 1024 >> -TT - 14, MT[256 | lT] = 1024 >> -TT - 14 | 32768, KT[lT] = -TT - 1, KT[256 | lT] = -TT - 1) : TT <= 15 ? (MT[lT] = TT + 15 << 10, MT[256 | lT] = TT + 15 << 10 | 32768, KT[lT] = 13, KT[256 | lT] = 13) : TT < 128 ? (MT[lT] = 31744, MT[256 | lT] = 64512, KT[lT] = 24, KT[256 | lT] = 24) : (MT[lT] = 31744, MT[256 | lT] = 64512, KT[lT] = 13, KT[256 | lT] = 13)
      }
      const OT = new Uint32Array(2048),
        yT = new Uint32Array(64),
        fT = new Uint32Array(64);
      for (let lT = 1; lT < 1024; ++lT) {
        let TT = lT << 13,
          kT = 0;
        for (; 0 === (8388608 & TT);) TT <<= 1, kT -= 8388608;
        TT &= -8388609, kT += 947912704, OT[lT] = TT | kT
      }
      for (let lT = 1024; lT < 2048; ++lT) OT[lT] = 939524096 + (lT - 1024 << 13);
      for (let lT = 1; lT < 31; ++lT) yT[lT] = lT << 23;
      yT[31] = 1199570944, yT[32] = 2147483648;
      for (let lT = 33; lT < 63; ++lT) yT[lT] = 2147483648 + (lT - 32 << 23);
      yT[63] = 3347054592;
      for (let lT = 1; lT < 64; ++lT) 32 !== lT && (fT[lT] = 1024);
      return lT = {
        floatView: kT,
        uint32View: cT,
        baseTable: MT,
        shiftTable: KT,
        mantissaTable: OT,
        exponentTable: yT,
        offsetTable: fT
      }, lT
    }
    const KT = 65504;

    function OT(TT) {
      const kT = MT();
      kT.floatView[0] = TT;
      const cT = kT.uint32View[0],
        lT = cT >> 23 & 511;
      return kT.baseTable[lT] + ((8388607 & cT) >> kT.shiftTable[lT])
    }

    function yT(TT) {
      const kT = MT();
      return kT.uint32View[0] = kT.mantissaTable[kT.offsetTable[TT >> 10] + (1023 & TT)] + kT.exponentTable[TT >> 10], kT.floatView[0]
    }
  },
  39687: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT,
      i: () => MT,
      k: () => lT
    });
    const lT = TT => {
        const kT = ArrayBuffer.isView(TT) ? new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength) : new Uint8Array(TT);
        return "function" === typeof kT.toBase64 ? kT.toBase64() : function(TT) {
          const kT = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let cT, lT, MT, KT, OT, yT, fT, xT = "",
            IT = 0;
          for (; IT < TT.length;) cT = TT[IT++], lT = IT < TT.length ? TT[IT++] : Number.NaN, MT = IT < TT.length ? TT[IT++] : Number.NaN, KT = cT >> 2, OT = (3 & cT) << 4 | lT >> 4, yT = (15 & lT) << 2 | MT >> 6, fT = 63 & MT, isNaN(lT) ? yT = fT = 64 : isNaN(MT) && (fT = 64), xT += kT.charAt(KT) + kT.charAt(OT) + kT.charAt(yT) + kT.charAt(fT);
          return xT
        }(kT)
      },
      MT = TT => atob(TT),
      KT = TT => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(TT).buffer : function(TT) {
        const kT = MT(TT),
          cT = kT.length,
          lT = new Uint8Array(new ArrayBuffer(cT));
        for (let MT = 0; MT < cT; MT++) lT[MT] = kT.charCodeAt(MT);
        return lT.buffer
      }(TT)
  },
  39514: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      g: () => OT
    });
    let lT = [];
    class MT {
      static SetImmediate(TT) {
        0 === lT.length && setTimeout((() => {
          const TT = lT;
          lT = [];
          for (const kT of TT) kT()
        }), 1), lT.push(TT)
      }
    }

    function KT(TT, kT, cT) {
      try {
        if (TT()) return kT(), !0
      } catch (lT) {
        return cT?.(lT), !0
      }
      return !1
    }
    const OT = function(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        OT = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && KT(TT, kT, cT)) return null;
      const yT = setInterval((() => {
        KT(TT, kT, cT) ? clearInterval(yT) : (MT -= lT, MT < 0 && (clearInterval(yT), cT?.(new Error("Operation timed out after maximum retries. " + (OT || "")), !0)))
      }), lT);
      return () => clearInterval(yT)
    }
  },
  39675: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT
    });
    class lT {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(lT.CustomRequestHeaders).length > 0 || lT.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(TT) {
        return TT = (TT = TT.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(TT) {
        return lT.SkipRequestModificationForBabylonCDN && (TT.includes("preview.babylonjs.com") || TT.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(TT) {
        const kT = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (lT._ShouldSkipRequestModifications(TT)) return {
          url: TT,
          headers: kT
        };
        for (const MT in lT.CustomRequestHeaders) {
          const TT = lT.CustomRequestHeaders[MT];
          TT && (kT[MT] = TT)
        }
        const cT = {
          setRequestHeader: (TT, cT) => {
            kT[TT] = cT
          }
        };
        for (const MT of lT.CustomRequestModifiers) {
          if (lT._ShouldSkipRequestModifications(TT)) break;
          const kT = MT(cT, TT);
          "string" === typeof kT && (TT = kT)
        }
        return {
          url: TT,
          headers: kT
        }
      }
      static async FetchAsync(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const cT = kT.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: MT,
            headers: KT
          } = lT._CollectCustomizations(lT._CleanUrl(TT), kT.headers ?? {});
          return await fetch(MT, {
            method: cT,
            headers: KT,
            body: kT.body ?? void 0
          })
        }
        return await new Promise(((MT, KT) => {
          const OT = new lT;
          OT.responseType = "arraybuffer", OT.addEventListener("readystatechange", (() => {
            if (4 === OT.readyState)
              if (OT.status >= 200 && OT.status < 300) {
                const TT = "undefined" !== typeof Headers ? new Headers : void 0,
                  kT = OT.getResponseHeader("Content-Type");
                kT && TT && TT.set("Content-Type", kT), "undefined" !== typeof Response ? MT(new Response(OT.response, {
                  status: OT.status,
                  statusText: OT.statusText,
                  headers: TT
                })) : MT({
                  ok: !0,
                  status: OT.status,
                  statusText: OT.statusText,
                  headers: {
                    get: TT => OT.getResponseHeader(TT)
                  },
                  arrayBuffer: async () => await Promise.resolve(OT.response)
                })
              } else KT(new Error(`HTTP ${OT.status} loading '${OT.requestURL}': ${OT.statusText}`))
          })), OT.open(cT, TT, kT.headers), OT.send(kT.body ?? null)
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
      addEventListener(TT, kT, cT) {
        this._xhr.addEventListener(TT, kT, cT)
      }
      removeEventListener(TT, kT, cT) {
        this._xhr.removeEventListener(TT, kT, cT)
      }
      abort() {
        this._xhr.abort()
      }
      send(TT) {
        this._xhr.send(TT)
      }
      open(TT, kT, cT) {
        const {
          url: MT,
          headers: KT
        } = lT._CollectCustomizations(kT, cT);
        this._requestURL = lT._CleanUrl(MT), this._xhr.open(TT, this._requestURL, !0);
        for (const lT in KT) this._xhr.setRequestHeader(lT, KT[lT])
      }
      setRequestHeader(TT, kT) {
        this._xhr.setRequestHeader(TT, kT)
      }
      getResponseHeader(TT) {
        return this._xhr.getResponseHeader(TT)
      }
    }
    lT.CustomRequestHeaders = {}, lT.CustomRequestModifiers = new Array, lT.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);