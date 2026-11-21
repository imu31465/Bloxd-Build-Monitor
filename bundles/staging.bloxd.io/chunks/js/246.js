export const id = 246;
export const ids = [246];
export const modules = {
  39470: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => bQ,
      f: () => HQ,
      j: () => vQ,
      l: () => YQ,
      n: () => mQ,
      q: () => kQ,
      u: () => uQ
    });
    var LQ = wQ(38203),
      qQ = wQ(39475);

    function oQ(QQ, FQ, wQ, LQ) {
      switch (FQ) {
        case 5120: {
          let FQ = QQ.getInt8(wQ);
          return LQ && (FQ = Math.max(FQ / 127, -1)), FQ
        }
        case 5121: {
          let FQ = QQ.getUint8(wQ);
          return LQ && (FQ /= 255), FQ
        }
        case 5122: {
          let FQ = QQ.getInt16(wQ, !0);
          return LQ && (FQ = Math.max(FQ / 32767, -1)), FQ
        }
        case 5123: {
          let FQ = QQ.getUint16(wQ, !0);
          return LQ && (FQ /= 65535), FQ
        }
        case 5131:
          return (0, qQ.d)(QQ.getUint16(wQ, !0));
        case 5124:
          return QQ.getInt32(wQ, !0);
        case 5125:
          return QQ.getUint32(wQ, !0);
        case 5126:
          return QQ.getFloat32(wQ, !0);
        default:
          throw new Error(`Invalid component type ${FQ}`)
      }
    }

    function DQ(QQ, FQ, wQ, LQ, oQ) {
      switch (FQ) {
        case 5120:
          LQ && (oQ = Math.round(127 * oQ)), QQ.setInt8(wQ, oQ);
          break;
        case 5121:
          LQ && (oQ = Math.round(255 * oQ)), QQ.setUint8(wQ, oQ);
          break;
        case 5122:
          LQ && (oQ = Math.round(32767 * oQ)), QQ.setInt16(wQ, oQ, !0);
          break;
        case 5123:
          LQ && (oQ = Math.round(65535 * oQ)), QQ.setUint16(wQ, oQ, !0);
          break;
        case 5131:
          QQ.setUint16(wQ, (0, qQ.j)(oQ), !0);
          break;
        case 5124:
          QQ.setInt32(wQ, oQ, !0);
          break;
        case 5125:
          QQ.setUint32(wQ, oQ, !0);
          break;
        case 5126:
          QQ.setFloat32(wQ, oQ, !0);
          break;
        default:
          throw new Error(`Invalid component type ${FQ}`)
      }
    }

    function kQ(QQ) {
      switch (QQ) {
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
          throw new Error(`Invalid type '${QQ}'`)
      }
    }

    function vQ(QQ, FQ, wQ, LQ, qQ, vQ, mQ, uQ) {
      const HQ = new Array(LQ),
        bQ = new Array(LQ);
      if (QQ instanceof Array) {
        let qQ = FQ / 4;
        const oQ = wQ / 4;
        for (let FQ = 0; FQ < vQ; FQ += LQ) {
          for (let FQ = 0; FQ < LQ; FQ++) HQ[FQ] = bQ[FQ] = QQ[qQ + FQ];
          uQ(bQ, FQ);
          for (let FQ = 0; FQ < LQ; FQ++) HQ[FQ] !== bQ[FQ] && (QQ[qQ + FQ] = bQ[FQ]);
          qQ += oQ
        }
      } else {
        const YQ = ArrayBuffer.isView(QQ) ? new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength) : new DataView(QQ),
          xQ = kQ(qQ);
        for (let QQ = 0; QQ < vQ; QQ += LQ) {
          for (let QQ = 0, wQ = FQ; QQ < LQ; QQ++, wQ += xQ) HQ[QQ] = bQ[QQ] = oQ(YQ, qQ, wQ, mQ);
          uQ(bQ, QQ);
          for (let QQ = 0, wQ = FQ; QQ < LQ; QQ++, wQ += xQ) HQ[QQ] !== bQ[QQ] && DQ(YQ, qQ, wQ, mQ, bQ[QQ]);
          FQ += wQ
        }
      }
    }

    function mQ(QQ, FQ, wQ, qQ, oQ, DQ, mQ, uQ) {
      const HQ = FQ * kQ(wQ),
        bQ = mQ * FQ;
      if (5126 !== wQ || oQ !== HQ) {
        const LQ = new Float32Array(bQ);
        return vQ(QQ, qQ, oQ, FQ, wQ, bQ, DQ, ((QQ, wQ) => {
          for (let qQ = 0; qQ < FQ; qQ++) LQ[wQ + qQ] = QQ[qQ]
        })), LQ
      }
      if (!(QQ instanceof Array || QQ instanceof Float32Array) || 0 !== qQ || QQ.length !== bQ) {
        if (QQ instanceof Array) {
          const FQ = qQ / 4;
          return QQ.slice(FQ, FQ + bQ)
        }
        if (ArrayBuffer.isView(QQ)) {
          const FQ = QQ.byteOffset + qQ;
          return 0 !== (3 & FQ) && (LQ.c.Warn("Float array must be aligned to 4-bytes border"), uQ = !0), uQ ? new Float32Array(QQ.buffer.slice(FQ, FQ + bQ * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(QQ.buffer, FQ, bQ)
        }
        return new Float32Array(QQ, qQ, bQ)
      }
      return uQ ? QQ.slice() : QQ
    }

    function uQ(QQ, FQ, wQ, qQ, oQ, DQ, mQ) {
      const uQ = kQ(wQ),
        HQ = function(QQ) {
          switch (QQ) {
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
              throw new Error(`Invalid component type '${QQ}'`)
          }
        }(wQ),
        bQ = DQ * FQ;
      if (Array.isArray(QQ)) {
        if (0 !== (3 & qQ) || 0 !== (3 & oQ)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const LQ = qQ / 4,
          kQ = oQ / 4;
        if (LQ + (DQ - 1) * kQ + FQ > QQ.length) throw new Error("Last accessed index is out of bounds.");
        if (kQ < FQ) throw new Error("Data stride cannot be smaller than the component size.");
        if (kQ !== FQ) {
          const LQ = new HQ(bQ);
          return vQ(QQ, qQ, oQ, FQ, wQ, bQ, !1, ((QQ, wQ) => {
            for (let qQ = 0; qQ < FQ; qQ++) LQ[wQ + qQ] = QQ[qQ]
          })), LQ
        }
        return new HQ(QQ.slice(LQ, LQ + bQ))
      }
      let YQ, xQ = qQ;
      ArrayBuffer.isView(QQ) ? (YQ = QQ.buffer, xQ += QQ.byteOffset) : YQ = QQ;
      if (xQ + (DQ - 1) * oQ + FQ * uQ > YQ.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const AQ = FQ * uQ;
      if (oQ < AQ) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (oQ !== AQ) {
        const QQ = new HQ(bQ),
          wQ = new Uint8Array(YQ, xQ),
          LQ = new Uint8Array(QQ.buffer),
          qQ = FQ * uQ;
        for (let FQ = 0, kQ = 0, vQ = 0; FQ < DQ; FQ++, kQ += oQ, vQ += qQ) LQ.set(wQ.subarray(kQ, kQ + qQ), vQ);
        return QQ
      }
      return 1 !== uQ && 0 !== (xQ & uQ - 1) && (LQ.c.Warn("Array must be aligned to border of element size. Data will be copied."), mQ = !0), mQ ? new HQ(YQ.slice(xQ, xQ + bQ * uQ)) : new HQ(YQ, xQ, bQ)
    }

    function HQ(QQ, FQ, wQ, qQ, oQ, DQ, mQ, uQ) {
      const HQ = FQ * kQ(wQ),
        bQ = mQ * FQ;
      if (uQ.length !== bQ) throw new Error("Output length is not valid");
      if (5126 === wQ && oQ === HQ)
        if (QQ instanceof Array) {
          const FQ = qQ / 4;
          uQ.set(QQ, FQ)
        } else if (ArrayBuffer.isView(QQ)) {
        const FQ = QQ.byteOffset + qQ;
        if (0 !== (3 & FQ)) return LQ.c.Warn("Float array must be aligned to 4-bytes border"), void uQ.set(new Float32Array(QQ.buffer.slice(FQ, FQ + bQ * Float32Array.BYTES_PER_ELEMENT)));
        const wQ = new Float32Array(QQ.buffer, FQ, bQ);
        uQ.set(wQ)
      } else {
        const FQ = new Float32Array(QQ, qQ, bQ);
        uQ.set(FQ)
      } else vQ(QQ, qQ, oQ, FQ, wQ, bQ, DQ, ((QQ, wQ) => {
        for (let LQ = 0; LQ < FQ; LQ++) uQ[wQ + LQ] = QQ[LQ]
      }))
    }

    function bQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(QQ)) {
        for (let qQ = 0; qQ < FQ; qQ++)
          if (QQ[wQ + qQ] - LQ > 65535) return !0;
        return !1
      }
      return 4 === QQ.BYTES_PER_ELEMENT
    }

    function YQ(QQ) {
      const FQ = QQ.buffer;
      if (FQ instanceof ArrayBuffer) return QQ;
      const wQ = new ArrayBuffer(QQ.byteLength);
      return new Uint8Array(wQ).set(new Uint8Array(FQ, QQ.byteOffset, QQ.byteLength)), wQ
    }
  },
  39282: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => iQ,
      f: () => CQ,
      i: () => SQ,
      h: () => UQ,
      j: () => NQ
    });
    class LQ {
      constructor() {
        this.children = []
      }
      isValid(QQ) {
        return !0
      }
      process(QQ, FQ, wQ) {
        let LQ = "";
        if (this.line) {
          let wQ = this.line;
          const qQ = FQ.processor;
          if (qQ) {
            qQ.lineProcessor && (wQ = qQ.lineProcessor(wQ, FQ.isFragment, FQ.processingContext));
            const LQ = FQ.processor?.attributeKeywordName ?? "attribute",
              oQ = FQ.isFragment && FQ.processor?.varyingFragmentKeywordName ? FQ.processor?.varyingFragmentKeywordName : !FQ.isFragment && FQ.processor?.varyingVertexKeywordName ? FQ.processor?.varyingVertexKeywordName : "varying";
            if (!FQ.isFragment && qQ.attributeProcessor && this.line.startsWith(LQ)) wQ = qQ.attributeProcessor(this.line, QQ, FQ.processingContext);
            else if (qQ.varyingProcessor && (qQ.varyingCheck?.(this.line, FQ.isFragment) || !qQ.varyingCheck && this.line.startsWith(oQ))) wQ = qQ.varyingProcessor(this.line, FQ.isFragment, QQ, FQ.processingContext);
            else if (qQ.uniformProcessor && qQ.uniformRegexp && qQ.uniformRegexp.test(this.line)) FQ.lookForClosingBracketForUniformBuffer || (wQ = qQ.uniformProcessor(this.line, FQ.isFragment, QQ, FQ.processingContext));
            else if (qQ.uniformBufferProcessor && qQ.uniformBufferRegexp && qQ.uniformBufferRegexp.test(this.line)) FQ.lookForClosingBracketForUniformBuffer || (wQ = qQ.uniformBufferProcessor(this.line, FQ.isFragment, FQ.processingContext), FQ.lookForClosingBracketForUniformBuffer = !0);
            else if (qQ.textureProcessor && qQ.textureRegexp && qQ.textureRegexp.test(this.line)) wQ = qQ.textureProcessor(this.line, FQ.isFragment, QQ, FQ.processingContext);
            else if ((qQ.uniformProcessor || qQ.uniformBufferProcessor) && this.line.startsWith("uniform") && !FQ.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? qQ.uniformProcessor && (wQ = qQ.uniformProcessor(this.line, FQ.isFragment, QQ, FQ.processingContext)) : qQ.uniformBufferProcessor && (wQ = qQ.uniformBufferProcessor(this.line, FQ.isFragment, FQ.processingContext), FQ.lookForClosingBracketForUniformBuffer = !0)
            }
            FQ.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (FQ.lookForClosingBracketForUniformBuffer = !1, qQ.endOfUniformBufferProcessor && (wQ = qQ.endOfUniformBufferProcessor(this.line, FQ.isFragment, FQ.processingContext)))
          }
          LQ += wQ + "\n"
        }
        for (const qQ of this.children) LQ += qQ.process(QQ, FQ, wQ);
        return this.additionalDefineKey && (QQ[this.additionalDefineKey] = this.additionalDefineValue || "true", wQ[this.additionalDefineKey] = QQ[this.additionalDefineKey]), LQ
      }
    }
    class qQ {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(QQ) {
        this._lines.length = 0;
        for (const FQ of QQ) {
          if (!FQ || "\r" === FQ) continue;
          if ("#" === FQ[0]) {
            this._lines.push(FQ);
            continue
          }
          const QQ = FQ.trim();
          if (!QQ) continue;
          if (QQ.startsWith("//")) {
            this._lines.push(FQ);
            continue
          }
          const wQ = QQ.indexOf(";");
          if (-1 === wQ) this._lines.push(QQ);
          else if (wQ === QQ.length - 1) QQ.length > 1 && this._lines.push(QQ);
          else {
            const QQ = FQ.split(";");
            for (let FQ = 0; FQ < QQ.length; FQ++) {
              let wQ = QQ[FQ];
              wQ && (wQ = wQ.trim(), wQ && this._lines.push(wQ + (FQ !== QQ.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class oQ extends LQ {
      process(QQ, FQ, wQ) {
        for (let LQ = 0; LQ < this.children.length; LQ++) {
          const qQ = this.children[LQ];
          if (qQ.isValid(QQ)) return qQ.process(QQ, FQ, wQ)
        }
        return ""
      }
    }
    class DQ extends LQ {
      isValid(QQ) {
        return this.testExpression.isTrue(QQ)
      }
    }
    class kQ {
      isTrue(QQ) {
        return !0
      }
      static postfixToInfix(QQ) {
        const FQ = [];
        for (const wQ of QQ)
          if (void 0 === kQ._OperatorPriority[wQ]) FQ.push(wQ);
          else {
            const QQ = FQ[FQ.length - 1],
              LQ = FQ[FQ.length - 2];
            FQ.length -= 2, FQ.push(`(${LQ}${wQ}${QQ})`)
          } return FQ[FQ.length - 1]
      }
      static infixToPostfix(QQ) {
        const FQ = kQ._InfixToPostfixCache.get(QQ);
        if (FQ) return FQ.accessTime = Date.now(), FQ.result;
        if (!QQ.includes("&&") && !QQ.includes("||") && !QQ.includes(")") && !QQ.includes("(")) return [QQ];
        const wQ = [];
        let LQ = -1;
        const qQ = () => {
            uQ = uQ.trim(), "" !== uQ && (wQ.push(uQ), uQ = "")
          },
          oQ = QQ => {
            LQ < kQ._Stack.length - 1 && (kQ._Stack[++LQ] = QQ)
          },
          DQ = () => kQ._Stack[LQ],
          vQ = () => -1 === LQ ? "!!INVALID EXPRESSION!!" : kQ._Stack[LQ--];
        let mQ = 0,
          uQ = "";
        for (; mQ < QQ.length;) {
          const FQ = QQ.charAt(mQ),
            HQ = mQ < QQ.length - 1 ? QQ.substring(mQ, 2 + mQ) : "";
          if ("(" === FQ) uQ = "", oQ(FQ);
          else if (")" === FQ) {
            for (qQ(); - 1 !== LQ && "(" !== DQ();) wQ.push(vQ());
            vQ()
          } else if (kQ._OperatorPriority[HQ] > 1) {
            for (qQ(); - 1 !== LQ && kQ._OperatorPriority[DQ()] >= kQ._OperatorPriority[HQ];) wQ.push(vQ());
            oQ(HQ), mQ++
          } else uQ += FQ;
          mQ++
        }
        for (qQ(); - 1 !== LQ;) "(" === DQ() ? vQ() : wQ.push(vQ());
        return kQ._InfixToPostfixCache.size >= kQ.InfixToPostfixCacheLimitSize && kQ.ClearCache(), kQ._InfixToPostfixCache.set(QQ, {
          result: wQ,
          accessTime: Date.now()
        }), wQ
      }
      static ClearCache() {
        const QQ = Array.from(kQ._InfixToPostfixCache.entries()).sort(((QQ, FQ) => QQ[1].accessTime - FQ[1].accessTime));
        for (let FQ = 0; FQ < kQ.InfixToPostfixCacheCleanupSize; FQ++) kQ._InfixToPostfixCache.delete(QQ[FQ][0])
      }
    }
    kQ.InfixToPostfixCacheLimitSize = 5e4, kQ.InfixToPostfixCacheCleanupSize = 25e3, kQ._InfixToPostfixCache = new Map, kQ._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, kQ._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class vQ extends kQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = QQ, this.not = FQ
      }
      isTrue(QQ) {
        let FQ = void 0 !== QQ[this.define];
        return this.not && (FQ = !FQ), FQ
      }
    }
    class mQ extends kQ {
      isTrue(QQ) {
        return this.leftOperand.isTrue(QQ) || this.rightOperand.isTrue(QQ)
      }
    }
    class uQ extends kQ {
      isTrue(QQ) {
        return this.leftOperand.isTrue(QQ) && this.rightOperand.isTrue(QQ)
      }
    }
    class HQ extends kQ {
      constructor(QQ, FQ, wQ) {
        super(), this.define = QQ, this.operand = FQ, this.testValue = wQ
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(QQ) {
        let FQ = !1;
        const wQ = parseInt(void 0 != QQ[this.define] ? QQ[this.define] : this.define),
          LQ = parseInt(void 0 != QQ[this.testValue] ? QQ[this.testValue] : this.testValue);
        if (isNaN(wQ) || isNaN(LQ)) return !1;
        switch (this.operand) {
          case ">":
            FQ = wQ > LQ;
            break;
          case "<":
            FQ = wQ < LQ;
            break;
          case "<=":
            FQ = wQ <= LQ;
            break;
          case ">=":
            FQ = wQ >= LQ;
            break;
          case "==":
            FQ = wQ === LQ;
            break;
          case "!=":
            FQ = wQ !== LQ
        }
        return FQ
      }
    }
    var bQ = wQ(39277),
      YQ = wQ(39274);
    const xQ = /defined\s*?\((.+?)\)/g,
      AQ = /defined\s*?\[(.+?)\]/g,
      tQ = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      eQ = /__decl__/,
      MQ = /light\{X\}.(\w*)/g,
      GQ = /\{X\}/g,
      pQ = [],
      cQ = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function CQ(QQ) {
      QQ.processor && QQ.processor.initializeShaders && QQ.processor.initializeShaders(QQ.processingContext)
    }

    function SQ(QQ, FQ, wQ, LQ) {
      FQ.processor?.preProcessShaderCode && (QQ = FQ.processor.preProcessShaderCode(QQ, FQ.isFragment)), UQ(QQ, FQ, (QQ => {
        FQ.processCodeAfterIncludes && (QQ = FQ.processCodeAfterIncludes(FQ.isFragment ? "fragment" : "vertex", QQ, FQ.defines));
        const qQ = function(QQ, FQ, wQ) {
          let LQ = function(QQ, FQ) {
            if (FQ.processor?.noPrecision) return QQ;
            const wQ = FQ.shouldUseHighPrecisionShader; - 1 === QQ.indexOf("precision highp float") ? QQ = wQ ? "precision highp float;\n" + QQ : "precision mediump float;\n" + QQ : wQ || (QQ = QQ.replace("precision highp float", "precision mediump float"));
            return QQ
          }(QQ, FQ);
          if (!FQ.processor) return LQ;
          if (0 === FQ.processor.shaderLanguage && -1 !== LQ.indexOf("#version 3") && (LQ = LQ.replace("#version 300 es", ""), !FQ.processor.parseGLES3)) return LQ;
          const qQ = FQ.defines,
            oQ = IQ(FQ, wQ);
          FQ.processor.preProcessor && (LQ = FQ.processor.preProcessor(LQ, qQ, oQ, FQ.isFragment, FQ.processingContext));
          const DQ = {};
          LQ = rQ(LQ, oQ, FQ, DQ), FQ.processor.postProcessor && (LQ = FQ.processor.postProcessor(LQ, qQ, FQ.isFragment, FQ.processingContext, wQ ? {
            drawBuffersExtensionDisabled: !wQ.getCaps().drawBuffersExtension
          } : {}, oQ, DQ));
          wQ?._features.needShaderCodeInlining && (LQ = wQ.inlineShaderCode(LQ));
          return LQ
        }(QQ, FQ, LQ);
        wQ(qQ, QQ)
      }))
    }

    function iQ(QQ, FQ, wQ) {
      return wQ.processor && wQ.processor.finalizeShaders ? wQ.processor.finalizeShaders(QQ, FQ, wQ.processingContext) : {
        vertexCode: QQ,
        fragmentCode: FQ
      }
    }

    function WQ(QQ) {
      const FQ = /defined\((.+)\)/.exec(QQ);
      if (FQ && FQ.length) return new vQ(FQ[1].trim(), "!" === QQ[0]);
      const wQ = ["==", "!=", ">=", "<=", "<", ">"];
      let LQ = "",
        qQ = 0;
      for (LQ of wQ)
        if (qQ = QQ.indexOf(LQ), qQ > -1) break;
      if (-1 === qQ) return new vQ(QQ);
      const oQ = QQ.substring(0, qQ).trim(),
        DQ = QQ.substring(qQ + LQ.length).trim();
      return new HQ(oQ, LQ, DQ)
    }

    function RQ(QQ, FQ) {
      const wQ = new DQ,
        LQ = QQ.substring(0, FQ);
      let qQ = QQ.substring(FQ);
      return qQ = qQ.substring(0, (qQ.indexOf("//") + 1 || qQ.length + 1) - 1).trim(), wQ.testExpression = "#ifdef" === LQ ? new vQ(qQ) : "#ifndef" === LQ ? new vQ(qQ, !0) : function(QQ) {
        QQ = QQ.replace(xQ, "defined[$1]");
        const FQ = kQ.infixToPostfix(QQ),
          wQ = [];
        for (const qQ of FQ)
          if ("||" !== qQ && "&&" !== qQ) wQ.push(qQ);
          else if (wQ.length >= 2) {
          let QQ = wQ[wQ.length - 1],
            FQ = wQ[wQ.length - 2];
          wQ.length -= 2;
          const LQ = "&&" == qQ ? new uQ : new mQ;
          "string" === typeof QQ && (QQ = QQ.replace(AQ, "defined($1)")), "string" === typeof FQ && (FQ = FQ.replace(AQ, "defined($1)")), LQ.leftOperand = "string" === typeof FQ ? WQ(FQ) : FQ, LQ.rightOperand = "string" === typeof QQ ? WQ(QQ) : QQ, wQ.push(LQ)
        }
        let LQ = wQ[wQ.length - 1];
        return "string" === typeof LQ && (LQ = LQ.replace(AQ, "defined($1)")), "string" === typeof LQ ? WQ(LQ) : LQ
      }(qQ), wQ
    }

    function OQ(QQ, FQ, wQ, qQ) {
      let oQ;
      for (; sQ(QQ, wQ, qQ);) {
        oQ = QQ.currentLine;
        const DQ = oQ.substring(0, 5).toLowerCase();
        if ("#else" === DQ) {
          const wQ = new LQ;
          return FQ.children.push(wQ), void sQ(QQ, wQ, qQ)
        }
        if ("#elif" === DQ) {
          const QQ = RQ(oQ, 5);
          FQ.children.push(QQ), wQ = QQ
        }
      }
    }

    function sQ(QQ, FQ, wQ) {
      for (; QQ.canRead;) {
        QQ.lineIndex++;
        const qQ = QQ.currentLine;
        if (qQ.indexOf("#") >= 0) {
          const LQ = cQ.exec(qQ);
          if (LQ && LQ.length) {
            switch (LQ[0]) {
              case "#ifdef": {
                const LQ = new oQ;
                FQ.children.push(LQ);
                const DQ = RQ(qQ, 6);
                LQ.children.push(DQ), OQ(QQ, LQ, DQ, wQ);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const LQ = new oQ;
                FQ.children.push(LQ);
                const DQ = RQ(qQ, 7);
                LQ.children.push(DQ), OQ(QQ, LQ, DQ, wQ);
                break
              }
              case "#if": {
                const LQ = new oQ,
                  DQ = RQ(qQ, 3);
                FQ.children.push(LQ), LQ.children.push(DQ), OQ(QQ, LQ, DQ, wQ);
                break
              }
            }
            continue
          }
        }
        const DQ = new LQ;
        if (DQ.line = qQ, FQ.children.push(DQ), "#" === qQ[0] && "d" === qQ[1]) {
          const QQ = qQ.replace(";", "").split(" ");
          DQ.additionalDefineKey = QQ[1], 3 === QQ.length && (DQ.additionalDefineValue = QQ[2])
        }
      }
      return !1
    }

    function rQ(QQ, FQ, wQ, oQ) {
      const DQ = new LQ,
        kQ = new qQ;
      return kQ.lineIndex = -1, kQ.lines = QQ.split("\n"), sQ(kQ, DQ, oQ), DQ.process(FQ, wQ, oQ)
    }

    function IQ(QQ, FQ) {
      const wQ = QQ.defines,
        LQ = {};
      for (const qQ of wQ) {
        const QQ = qQ.replace("#define", "").replace(";", "").trim().split(" ");
        LQ[QQ[0]] = QQ.length > 1 ? QQ[1] : ""
      }
      return 0 === QQ.processor?.shaderLanguage && (LQ.GL_ES = "true"), LQ.__VERSION__ = QQ.version, LQ[QQ.platformName] = "true", (0, YQ.j)(LQ, FQ?.isNDCHalfZRange, FQ?.SLQ, FQ?.useExactSrgbConversions), LQ
    }

    function UQ(QQ, FQ, wQ) {
      let LQ;
      for (pQ.length = 0; null !== (LQ = tQ.exec(QQ));) pQ.push(LQ);
      let qQ = [QQ],
        oQ = !1;
      for (const kQ of pQ) {
        let QQ = kQ[1];
        if (-1 !== QQ.indexOf("__decl__") && (QQ = QQ.replace(eQ, ""), FQ.supportsUniformBuffers && (QQ = QQ.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), QQ += "Declaration"), !FQ.includesShadersStore[QQ]) {
          const LQ = FQ.shadersRepository + "ShadersInclude/" + QQ + ".fx";
          return void NQ.loadFile(LQ, (LQ => {
            FQ.includesShadersStore[QQ] = LQ, UQ(qQ.join(""), FQ, wQ)
          }))
        } {
          let wQ = FQ.includesShadersStore[QQ];
          if (kQ[2]) {
            const QQ = kQ[3].split(",");
            for (let FQ = 0; FQ < QQ.length; FQ += 2) {
              const LQ = new RegExp(QQ[FQ], "g"),
                qQ = QQ[FQ + 1];
              wQ = wQ.replace(LQ, qQ)
            }
          }
          if (kQ[4]) {
            const QQ = kQ[5];
            if (-1 !== QQ.indexOf("..")) {
              const LQ = QQ.split(".."),
                qQ = parseInt(LQ[0]);
              let oQ = parseInt(LQ[1]),
                DQ = wQ.slice(0);
              wQ = "", isNaN(oQ) && (oQ = FQ.indexParameters[LQ[1]]);
              for (let QQ = qQ; QQ < oQ; QQ++) FQ.supportsUniformBuffers || (DQ = DQ.replace(MQ, ((QQ, FQ) => FQ + "{X}"))), wQ += DQ.replace(GQ, QQ.toString()) + "\n"
            } else FQ.supportsUniformBuffers || (wQ = wQ.replace(MQ, ((QQ, FQ) => FQ + "{X}"))), wQ = wQ.replace(GQ, QQ)
          }
          const LQ = [];
          for (const QQ of qQ) {
            const FQ = QQ.split(kQ[0]);
            for (let QQ = 0; QQ < FQ.length - 1; QQ++) LQ.push(FQ[QQ]), LQ.push(wQ);
            LQ.push(FQ[FQ.length - 1])
          }
          qQ = LQ, oQ = oQ || wQ.indexOf("#include<") >= 0 || wQ.indexOf("#include <") >= 0
        }
      }
      pQ.length = 0;
      const DQ = qQ.join("");
      oQ ? UQ(DQ.toString(), FQ, wQ) : wQ(DQ)
    }
    const NQ = {
      loadFile: (QQ, FQ, wQ, LQ, qQ, oQ) => {
        throw (0, bQ.k)("FileTools")
      }
    }
  },
  39274: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ,
      g: () => oQ,
      j: () => kQ,
      k: () => DQ,
      m: () => vQ
    });
    var LQ = wQ(39277);
    const qQ = {};

    function oQ(QQ, FQ) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (FQ ? FQ + "\n" : "") + QQ
    }

    function DQ(QQ, FQ, wQ, oQ, DQ, kQ, vQ) {
      const mQ = vQ || qQ.loadFile;
      if (!mQ) throw (0, LQ.k)("FileTools");
      return mQ(QQ, FQ, wQ, oQ, DQ, kQ)
    }

    function kQ(QQ, FQ, wQ, LQ) {
      if (QQ) return FQ ? QQ.IS_NDC_HALF_ZRANGE = "" : delete QQ.IS_NDC_HALF_ZRANGE, wQ ? QQ.USE_REVERSE_DEPTHBUFFER = "" : delete QQ.USE_REVERSE_DEPTHBUFFER, void(LQ ? QQ.USE_EXACT_SRGB_CONVERSIONS = "" : delete QQ.USE_EXACT_SRGB_CONVERSIONS);
      {
        let QQ = "";
        return FQ && (QQ += "#define IS_NDC_HALF_ZRANGE"), wQ && (QQ && (QQ += "\n"), QQ += "#define USE_REVERSE_DEPTHBUFFER"), LQ && (QQ && (QQ += "\n"), QQ += "#define USE_EXACT_SRGB_CONVERSIONS"), QQ
      }
    }

    function vQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        LQ = arguments.length > 3 ? arguments[3] : void 0;
      switch (QQ) {
        case 3: {
          const QQ = new Int8Array(FQ);
          return LQ && QQ.set(new Int8Array(LQ)), QQ
        }
        case 0: {
          const QQ = new Uint8Array(FQ);
          return LQ && QQ.set(new Uint8Array(LQ)), QQ
        }
        case 4: {
          const QQ = "number" !== typeof FQ ? new Int16Array(FQ) : new Int16Array(wQ ? FQ / 2 : FQ);
          return LQ && QQ.set(new Int16Array(LQ)), QQ
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const QQ = "number" !== typeof FQ ? new Uint16Array(FQ) : new Uint16Array(wQ ? FQ / 2 : FQ);
          return LQ && QQ.set(new Uint16Array(LQ)), QQ
        }
        case 6: {
          const QQ = "number" !== typeof FQ ? new Int32Array(FQ) : new Int32Array(wQ ? FQ / 4 : FQ);
          return LQ && QQ.set(new Int32Array(LQ)), QQ
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const QQ = "number" !== typeof FQ ? new Uint32Array(FQ) : new Uint32Array(wQ ? FQ / 4 : FQ);
          return LQ && QQ.set(new Uint32Array(LQ)), QQ
        }
        case 1: {
          const QQ = "number" !== typeof FQ ? new Float32Array(FQ) : new Float32Array(wQ ? FQ / 4 : FQ);
          return LQ && QQ.set(new Float32Array(LQ)), QQ
        }
      }
      const qQ = new Uint8Array(FQ);
      return LQ && qQ.set(new Uint8Array(LQ)), qQ
    }
  },
  39277: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => mQ,
      e: () => uQ,
      g: () => vQ,
      k: () => qQ
    });
    const LQ = {};

    function qQ(QQ) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !LQ[QQ]) return LQ[QQ] = !0, `${QQ} needs to be imported before as it contains a side-effect required by your code.`
    }
    const oQ = {};
    let DQ = !1,
      kQ = 0;

    function vQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const LQ = function() {
        if ((wQ || DQ) && 0 === kQ) {
          const wQ = `${QQ}.${FQ}`;
          oQ[wQ] || (oQ[wQ] = !0, console.warn(`[Babylon.js] ${wQ}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return LQ.__isSideEffectStub = !0, LQ
    }

    function mQ(QQ) {
      return !!QQ && !QQ.__isSideEffectStub
    }

    function uQ(QQ, FQ) {
      return {
        get() {},
        set(QQ) {
          Object.defineProperty(this, FQ, {
            value: QQ,
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
  39264: (QQ, FQ, wQ) => {
    function LQ() {
      return "undefined" !== typeof window
    }

    function qQ() {
      return "undefined" !== typeof navigator
    }

    function oQ() {
      return "undefined" !== typeof document
    }

    function DQ(QQ) {
      let FQ = "",
        wQ = QQ.firstChild;
      for (; wQ;) 3 === wQ.nodeType && (FQ += wQ.textContent), wQ = wQ.nextSibling;
      return FQ
    }
    wQ.d(FQ, {
      b: () => DQ,
      c: () => oQ,
      f: () => qQ,
      g: () => LQ
    })
  },
  39461: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ,
      f: () => qQ,
      i: () => oQ
    });
    class LQ extends Error {}
    LQ._setPrototypeOf = Object.setPrototypeOf || ((QQ, FQ) => (QQ.__proto__ = FQ, QQ));
    const qQ = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class oQ extends LQ {
      constructor(QQ, FQ, wQ) {
        super(QQ), this.errorCode = FQ, this.innerError = wQ, this.name = "RuntimeError", LQ._setPrototypeOf(this, oQ.prototype)
      }
    }
  },
  39448: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => IQ,
      f: () => GQ,
      h: () => RQ,
      l: () => sQ,
      m: () => iQ,
      p: () => CQ,
      r: () => SQ,
      t: () => zQ,
      u: () => WQ,
      v: () => pQ
    });
    var LQ = wQ(39455),
      qQ = wQ(39264),
      oQ = wQ(36722);
    class DQ {}
    DQ.FilesToLoad = {};
    var kQ = wQ(39461),
      vQ = wQ(39468),
      mQ = wQ(36720),
      uQ = wQ(39274),
      HQ = wQ(39282),
      bQ = wQ(38203),
      YQ = wQ(39289),
      xQ = wQ(39470);
    const AQ = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class tQ extends kQ.i {
      constructor(QQ, FQ) {
        super(QQ, kQ.f.LoadFileError), this.name = "LoadFileError", kQ.c._setPrototypeOf(this, tQ.prototype), FQ instanceof LQ.e ? this.request = FQ : this.file = FQ
      }
    }
    class eQ extends kQ.i {
      constructor(QQ, FQ) {
        super(QQ, kQ.f.RequestFileError), this.request = FQ, this.name = "RequestFileError", kQ.c._setPrototypeOf(this, eQ.prototype)
      }
    }
    class MQ extends kQ.i {
      constructor(QQ, FQ) {
        super(QQ, kQ.f.ReadFileError), this.file = FQ, this.name = "ReadFileError", kQ.c._setPrototypeOf(this, MQ.prototype)
      }
    }
    const GQ = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (wQ, LQ, qQ) => 0 !== LQ.status || qQ >= QQ || -1 !== wQ.indexOf("file:") ? -1 : Math.pow(2, qQ) * FQ
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: QQ => QQ,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: QQ => QQ,
        CleanUrl: QQ => QQ = QQ.replace(/#/gm, "%23")
      },
      pQ = (QQ, FQ) => {
        if ((!QQ || 0 !== QQ.indexOf("data:")) && GQ.CorsBehavior)
          if ("string" === typeof GQ.CorsBehavior || GQ.CorsBehavior instanceof String) FQ.crossOrigin = GQ.CorsBehavior;
          else {
            const wQ = GQ.CorsBehavior(QQ);
            wQ && (FQ.crossOrigin = wQ)
          }
      },
      cQ = {
        getRequiredSize: null
      },
      CQ = function(QQ, FQ, wQ, qQ) {
        let oQ, kQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          uQ = arguments.length > 5 ? arguments[5] : void 0,
          HQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : mQ.d.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !HQ?._features.forceBitmapOverHTMLImageElement) return wQ("LoadImage is only supported in web or BabylonNative environments."), null;
        if (HQ?._features.forceBitmapOverHTMLImageElement && "string" !== typeof QQ && "undefined" !== typeof Blob) {
          let LQ;
          if (QQ instanceof Blob) LQ = QQ;
          else {
            const FQ = QQ instanceof ArrayBuffer ? QQ : (0, xQ.l)(QQ);
            LQ = new Blob([FQ], {
              type: kQ
            })
          }
          return HQ.createImageBitmap(LQ, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...uQ
          }).then(FQ).catch((FQ => {
            wQ && wQ("Error while trying to load image: " + QQ, FQ)
          })), null
        }
        let bQ = !1;
        if (QQ instanceof ArrayBuffer || ArrayBuffer.isView(QQ))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let FQ;
            FQ = QQ instanceof ArrayBuffer ? QQ : (0, xQ.l)(QQ), oQ = URL.createObjectURL(new Blob([FQ], {
              type: kQ
            })), bQ = !0
          } else oQ = `data:${kQ};base64,` + (0, vQ.i)(QQ);
        else QQ instanceof Blob ? (oQ = URL.createObjectURL(QQ), bQ = !0) : (oQ = GQ.CleanUrl(QQ), oQ = GQ.PreprocessUrl(oQ));
        const YQ = FQ => {
          if (wQ) {
            const LQ = oQ || QQ.toString();
            wQ(`Error while trying to load image: ${0===LQ.indexOf("http")||LQ.length<=128?LQ:LQ.slice(0,128)+"..."}`, FQ)
          }
        };
        if (HQ?._features.forceBitmapOverHTMLImageElement) return iQ(oQ, (LQ => {
          HQ.createImageBitmap(new Blob([LQ], {
            type: kQ
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...uQ
          }).then((QQ => {
            FQ(QQ), bQ && URL.revokeObjectURL(oQ)
          })).catch((FQ => {
            wQ && wQ("Error while trying to load image: " + QQ, FQ)
          }))
        }), void 0, qQ || void 0, !0, ((QQ, FQ) => {
          YQ(FQ)
        })), null;
        const AQ = new Image;
        if (cQ.getRequiredSize) {
          const FQ = cQ.getRequiredSize(QQ);
          FQ.width && (AQ.width = FQ.width), FQ.height && (AQ.height = FQ.height)
        }
        pQ(oQ, AQ);
        const tQ = [],
          eQ = () => {
            for (const QQ of tQ) QQ.target.removeEventListener(QQ.name, QQ.handler);
            tQ.length = 0
          };
        tQ.push({
          target: AQ,
          name: "load",
          handler: () => {
            eQ(), FQ(AQ), bQ && AQ.src && URL.revokeObjectURL(AQ.src)
          }
        }), tQ.push({
          target: AQ,
          name: "error",
          handler: QQ => {
            eQ(), YQ(QQ), bQ && AQ.src && URL.revokeObjectURL(AQ.src)
          }
        }), tQ.push({
          target: document,
          name: "securitypolicyviolation",
          handler: QQ => {
            if (QQ.blockedURI !== AQ.src || "hY" === QQ.disposition) return;
            eQ();
            const FQ = new Error(`CSP violation of policy ${QQ.effectiveDirective} ${QQ.blockedURI}. Current policy is ${QQ.originalPolicy}`);
            mQ.d.UseFallbackTexture = !1, YQ(FQ), bQ && AQ.src && URL.revokeObjectURL(AQ.src), AQ.src = ""
          }
        }), (() => {
          for (const QQ of tQ) QQ.target.addEventListener(QQ.name, QQ.handler)
        })();
        const MQ = "blob:" === oQ.substring(0, 5),
          CQ = "data:" === oQ.substring(0, 5),
          SQ = () => {
            MQ || CQ || !LQ.e.IsCustomRequestAvailable ? AQ.src = oQ : iQ(oQ, ((QQ, FQ, wQ) => {
              const LQ = new Blob([QQ], {
                  type: !kQ && wQ ? wQ : kQ
                }),
                qQ = URL.createObjectURL(LQ);
              bQ = !0, AQ.src = qQ
            }), void 0, qQ || void 0, !0, ((QQ, FQ) => {
              YQ(FQ)
            }))
          },
          WQ = () => {
            qQ && qQ.loadImage(oQ, AQ)
          };
        if (!MQ && !CQ && qQ && qQ.enableTexturesOffline) qQ.open(WQ, SQ);
        else {
          if (-1 !== oQ.indexOf("file:")) {
            const QQ = decodeURIComponent(oQ.substring(5).toLowerCase());
            if (DQ.FilesToLoad[QQ] && "undefined" !== typeof URL) {
              try {
                let FQ;
                try {
                  FQ = URL.createObjectURL(DQ.FilesToLoad[QQ])
                } catch (RQ) {
                  FQ = URL.createObjectURL(DQ.FilesToLoad[QQ])
                }
                AQ.src = FQ, bQ = !0
              } catch (OQ) {
                AQ.src = ""
              }
              return AQ
            }
          }
          SQ()
        }
        return AQ
      },
      SQ = (QQ, FQ, wQ, LQ, qQ) => {
        const DQ = new FileReader,
          kQ = {
            onCompleteObservable: new oQ.e,
            abort: () => DQ.abort()
          };
        return DQ.onloadend = () => kQ.onCompleteObservable.notifyObservers(kQ), qQ && (DQ.onerror = () => {
          qQ(new MQ(`Unable to read ${QQ.name}`, QQ))
        }), DQ.onload = QQ => {
          FQ(QQ.target.result)
        }, wQ && (DQ.onprogress = wQ), LQ ? DQ.readAsArrayBuffer(QQ) : DQ.readAsText(QQ), kQ
      },
      iQ = (QQ, FQ, wQ, LQ, qQ, vQ, mQ) => {
        if (QQ.name) return SQ(QQ, FQ, wQ, qQ, vQ ? QQ => {
          vQ(void 0, QQ)
        } : void 0);
        const uQ = QQ;
        if (-1 !== uQ.indexOf("file:")) {
          let QQ = decodeURIComponent(uQ.substring(5).toLowerCase());
          0 === QQ.indexOf("./") && (QQ = QQ.substring(2));
          const LQ = DQ.FilesToLoad[QQ];
          if (LQ) return SQ(LQ, FQ, wQ, qQ, vQ ? QQ => vQ(void 0, new tQ(QQ.message, QQ.file)) : void 0)
        }
        const {
          match: HQ,
          type: xQ
        } = rQ(uQ);
        if (HQ) {
          const QQ = {
            onCompleteObservable: new oQ.e,
            abort: () => () => {}
          };
          try {
            const QQ = qQ ? IQ(uQ) : UQ(uQ);
            FQ(QQ, void 0, xQ)
          } catch (kQ) {
            vQ ? vQ(void 0, kQ) : bQ.c.Error(kQ.message || "Failed to parse the Data URL")
          }
          return YQ.d.SetImmediate((() => {
            QQ.onCompleteObservable.notifyObservers(QQ)
          })), QQ
        }
        return WQ(uQ, ((QQ, wQ) => {
          FQ(QQ, wQ?.responseURL, wQ?.getResponseHeader("content-type"))
        }), wQ, LQ, qQ, vQ ? QQ => {
          vQ(QQ.request, new tQ(QQ.message, QQ.request))
        } : void 0, mQ)
      },
      WQ = (QQ, FQ, wQ, DQ, kQ, vQ, uQ) => {
        null !== DQ && (DQ ?? (DQ = mQ.d.LastCreatedScene?.offlineProvider)), QQ = GQ.CleanUrl(QQ), QQ = GQ.PreprocessUrl(QQ);
        const HQ = GQ.BaseUrl + QQ;
        let YQ = !1;
        const xQ = {
            onCompleteObservable: new oQ.e,
            abort: () => YQ = !0
          },
          AQ = () => {
            let QQ, oQ = new LQ.e,
              DQ = null;
            const mQ = () => {
              oQ && (wQ && oQ.removeEventListener("progress", wQ), QQ && oQ.removeEventListener("readystatechange", QQ), oQ.removeEventListener("loadend", AQ))
            };
            let AQ = () => {
              mQ(), xQ.onCompleteObservable.notifyObservers(xQ), xQ.onCompleteObservable.clear(), wQ = void 0, QQ = null, AQ = null, vQ = void 0, uQ = void 0, FQ = void 0
            };
            xQ.abort = () => {
              YQ = !0, AQ && AQ(), oQ && oQ.readyState !== (XMLHttpRequest.DONE || 4) && oQ.abort(), null !== DQ && (clearTimeout(DQ), DQ = null), oQ = null
            };
            const tQ = QQ => {
                const FQ = QQ.message || "Unknown error";
                vQ && oQ ? vQ(new eQ(FQ, oQ)) : bQ.c.Error(FQ)
              },
              MQ = bQ => {
                if (oQ) {
                  if (oQ.open("GET", HQ), uQ) try {
                    uQ(oQ)
                  } catch (xQ) {
                    return void tQ(xQ)
                  }
                  kQ && (oQ.responseType = "arraybuffer"), wQ && oQ.addEventListener("progress", wQ), AQ && oQ.addEventListener("loadend", AQ), QQ = () => {
                    if (!YQ && oQ && oQ.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (QQ && oQ.removeEventListener("readystatechange", QQ), oQ.status >= 200 && oQ.status < 300 || 0 === oQ.status && (!(0, qQ.g)() || OQ())) {
                        const QQ = kQ ? oQ.response : oQ.responseText;
                        if (null !== QQ) {
                          try {
                            FQ && FQ(QQ, oQ)
                          } catch (xQ) {
                            tQ(xQ)
                          }
                          return
                        }
                      }
                      const wQ = GQ.DefaultRetryStrategy;
                      if (wQ) {
                        const QQ = wQ(HQ, oQ, bQ);
                        if (-1 !== QQ) return mQ(), oQ = new LQ.e, void(DQ = setTimeout((() => MQ(bQ + 1)), QQ))
                      }
                      const uQ = new eQ("Error status: " + oQ.status + " " + oQ.statusText + " - Unable to load " + HQ, oQ);
                      vQ && vQ(uQ)
                    }
                  }, oQ.addEventListener("readystatechange", QQ), oQ.send()
                }
              };
            MQ(0)
          };
        if (DQ && DQ.enableSceneOffline && !QQ.startsWith("blob:")) {
          const LQ = QQ => {
              QQ && QQ.status > 400 ? vQ && vQ(QQ) : AQ()
            },
            qQ = () => {
              DQ && DQ.loadFile(GQ.BaseUrl + QQ, (QQ => {
                !YQ && FQ && FQ(QQ), xQ.onCompleteObservable.notifyObservers(xQ)
              }), wQ ? QQ => {
                !YQ && wQ && wQ(QQ)
              } : void 0, LQ, kQ)
            };
          DQ.open(qQ, LQ)
        } else AQ();
        return xQ
      },
      RQ = QQ => {
        const {
          match: FQ,
          type: wQ
        } = rQ(QQ);
        if (FQ) return wQ || void 0;
        const LQ = QQ.lastIndexOf(".");
        switch (QQ.substring(LQ + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "oN":
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
      OQ = () => "undefined" !== typeof location && "file:" === location.protocol,
      sQ = QQ => AQ.test(QQ),
      rQ = QQ => {
        const FQ = AQ.exec(QQ);
        if (null === FQ || 0 === FQ.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: FQ[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function IQ(QQ) {
      return (0, vQ.e)(QQ.split(",")[1])
    }
    const UQ = QQ => (0, vQ.f)(QQ.split(",")[1]);
    let NQ;
    const TQ = (QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ) => {
      NQ = {
        DecodeBase64UrlToBinary: QQ,
        DecodeBase64UrlToString: FQ,
        DefaultRetryStrategy: wQ.DefaultRetryStrategy,
        BaseUrl: wQ.BaseUrl,
        CorsBehavior: wQ.CorsBehavior,
        PreprocessUrl: wQ.PreprocessUrl,
        IsBase64DataUrl: LQ,
        IsFileURL: qQ,
        LoadFile: oQ,
        LoadImage: DQ,
        ReadFile: kQ,
        RequestFile: vQ,
        SetCorsBehavior: mQ
      }, Object.defineProperty(NQ, "DefaultRetryStrategy", {
        get: function() {
          return wQ.DefaultRetryStrategy
        },
        set: function(QQ) {
          wQ.DefaultRetryStrategy = QQ
        }
      }), Object.defineProperty(NQ, "BaseUrl", {
        get: function() {
          return wQ.BaseUrl
        },
        set: function(QQ) {
          wQ.BaseUrl = QQ
        }
      }), Object.defineProperty(NQ, "PreprocessUrl", {
        get: function() {
          return wQ.PreprocessUrl
        },
        set: function(QQ) {
          wQ.PreprocessUrl = QQ
        }
      }), Object.defineProperty(NQ, "CorsBehavior", {
        get: function() {
          return wQ.CorsBehavior
        },
        set: function(QQ) {
          wQ.CorsBehavior = QQ
        }
      })
    };
    let KQ = !1;

    function zQ() {
      KQ || (KQ = !0, TQ(IQ, UQ, GQ, sQ, OQ, iQ, CQ, SQ, WQ, pQ), uQ.e.loadFile = iQ, uQ.e.loadImage = CQ, HQ.j.loadFile = iQ)
    }
  },
  39475: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ,
      g: () => oQ,
      j: () => DQ
    });
    let LQ = null;

    function qQ() {
      if (LQ) return LQ;
      const QQ = new ArrayBuffer(4),
        FQ = new Float32Array(QQ),
        wQ = new Uint32Array(QQ),
        qQ = new Uint32Array(512),
        oQ = new Uint32Array(512);
      for (let LQ = 0; LQ < 256; ++LQ) {
        const QQ = LQ - 127;
        QQ < -24 ? (qQ[LQ] = 0, qQ[256 | LQ] = 32768, oQ[LQ] = 24, oQ[256 | LQ] = 24) : QQ < -14 ? (qQ[LQ] = 1024 >> -QQ - 14, qQ[256 | LQ] = 1024 >> -QQ - 14 | 32768, oQ[LQ] = -QQ - 1, oQ[256 | LQ] = -QQ - 1) : QQ <= 15 ? (qQ[LQ] = QQ + 15 << 10, qQ[256 | LQ] = QQ + 15 << 10 | 32768, oQ[LQ] = 13, oQ[256 | LQ] = 13) : QQ < 128 ? (qQ[LQ] = 31744, qQ[256 | LQ] = 64512, oQ[LQ] = 24, oQ[256 | LQ] = 24) : (qQ[LQ] = 31744, qQ[256 | LQ] = 64512, oQ[LQ] = 13, oQ[256 | LQ] = 13)
      }
      const DQ = new Uint32Array(2048),
        kQ = new Uint32Array(64),
        vQ = new Uint32Array(64);
      for (let LQ = 1; LQ < 1024; ++LQ) {
        let QQ = LQ << 13,
          FQ = 0;
        for (; 0 === (8388608 & QQ);) QQ <<= 1, FQ -= 8388608;
        QQ &= -8388609, FQ += 947912704, DQ[LQ] = QQ | FQ
      }
      for (let LQ = 1024; LQ < 2048; ++LQ) DQ[LQ] = 939524096 + (LQ - 1024 << 13);
      for (let LQ = 1; LQ < 31; ++LQ) kQ[LQ] = LQ << 23;
      kQ[31] = 1199570944, kQ[32] = 2147483648;
      for (let LQ = 33; LQ < 63; ++LQ) kQ[LQ] = 2147483648 + (LQ - 32 << 23);
      kQ[63] = 3347054592;
      for (let LQ = 1; LQ < 64; ++LQ) 32 !== LQ && (vQ[LQ] = 1024);
      return LQ = {
        floatView: FQ,
        uint32View: wQ,
        baseTable: qQ,
        shiftTable: oQ,
        mantissaTable: DQ,
        exponentTable: kQ,
        offsetTable: vQ
      }, LQ
    }
    const oQ = 65504;

    function DQ(QQ) {
      const FQ = qQ();
      FQ.floatView[0] = QQ;
      const wQ = FQ.uint32View[0],
        LQ = wQ >> 23 & 511;
      return FQ.baseTable[LQ] + ((8388607 & wQ) >> FQ.shiftTable[LQ])
    }

    function kQ(QQ) {
      const FQ = qQ();
      return FQ.uint32View[0] = FQ.mantissaTable[FQ.offsetTable[QQ >> 10] + (1023 & QQ)] + FQ.exponentTable[QQ >> 10], FQ.floatView[0]
    }
  },
  39468: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ,
      f: () => qQ,
      i: () => LQ
    });
    const LQ = QQ => {
        const FQ = ArrayBuffer.isView(QQ) ? new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength) : new Uint8Array(QQ);
        return "function" === typeof FQ.toBase64 ? FQ.toBase64() : function(QQ) {
          const FQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ = "",
            uQ = 0;
          for (; uQ < QQ.length;) wQ = QQ[uQ++], LQ = uQ < QQ.length ? QQ[uQ++] : Number.NaN, qQ = uQ < QQ.length ? QQ[uQ++] : Number.NaN, oQ = wQ >> 2, DQ = (3 & wQ) << 4 | LQ >> 4, kQ = (15 & LQ) << 2 | qQ >> 6, vQ = 63 & qQ, isNaN(LQ) ? kQ = vQ = 64 : isNaN(qQ) && (vQ = 64), mQ += FQ.charAt(oQ) + FQ.charAt(DQ) + FQ.charAt(kQ) + FQ.charAt(vQ);
          return mQ
        }(FQ)
      },
      qQ = QQ => atob(QQ),
      oQ = QQ => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(QQ).buffer : function(QQ) {
        const FQ = qQ(QQ),
          wQ = FQ.length,
          LQ = new Uint8Array(new ArrayBuffer(wQ));
        for (let qQ = 0; qQ < wQ; qQ++) LQ[qQ] = FQ.charCodeAt(qQ);
        return LQ.buffer
      }(QQ)
  },
  39289: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      e: () => DQ
    });
    let LQ = [];
    class qQ {
      static SetImmediate(QQ) {
        0 === LQ.length && setTimeout((() => {
          const QQ = LQ;
          LQ = [];
          for (const FQ of QQ) FQ()
        }), 1), LQ.push(QQ)
      }
    }

    function oQ(QQ, FQ, wQ) {
      try {
        if (QQ()) return FQ(), !0
      } catch (LQ) {
        return wQ?.(LQ), !0
      }
      return !1
    }
    const DQ = function(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        DQ = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && oQ(QQ, FQ, wQ)) return null;
      const kQ = setInterval((() => {
        oQ(QQ, FQ, wQ) ? clearInterval(kQ) : (qQ -= LQ, qQ < 0 && (clearInterval(kQ), wQ?.(new Error("Operation timed out after maximum retries. " + (DQ || "")), !0)))
      }), LQ);
      return () => clearInterval(kQ)
    }
  },
  39455: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ
    });
    class LQ {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(LQ.CustomRequestHeaders).length > 0 || LQ.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(QQ) {
        return QQ = (QQ = QQ.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(QQ) {
        return LQ.SkipRequestModificationForBabylonCDN && (QQ.includes("preview.babylonjs.com") || QQ.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(QQ) {
        const FQ = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (LQ._ShouldSkipRequestModifications(QQ)) return {
          url: QQ,
          headers: FQ
        };
        for (const qQ in LQ.CustomRequestHeaders) {
          const QQ = LQ.CustomRequestHeaders[qQ];
          QQ && (FQ[qQ] = QQ)
        }
        const wQ = {
          setRequestHeader: (QQ, wQ) => {
            FQ[QQ] = wQ
          }
        };
        for (const qQ of LQ.CustomRequestModifiers) {
          if (LQ._ShouldSkipRequestModifications(QQ)) break;
          const FQ = qQ(wQ, QQ);
          "string" === typeof FQ && (QQ = FQ)
        }
        return {
          url: QQ,
          headers: FQ
        }
      }
      static async FetchAsync(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const wQ = FQ.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: qQ,
            headers: oQ
          } = LQ._CollectCustomizations(LQ._CleanUrl(QQ), FQ.headers ?? {});
          return await fetch(qQ, {
            method: wQ,
            headers: oQ,
            body: FQ.body ?? void 0
          })
        }
        return await new Promise(((qQ, oQ) => {
          const DQ = new LQ;
          DQ.responseType = "arraybuffer", DQ.addEventListener("readystatechange", (() => {
            if (4 === DQ.readyState)
              if (DQ.status >= 200 && DQ.status < 300) {
                const QQ = "undefined" !== typeof Headers ? new Headers : void 0,
                  FQ = DQ.getResponseHeader("Content-Type");
                FQ && QQ && QQ.set("Content-Type", FQ), "undefined" !== typeof Response ? qQ(new Response(DQ.response, {
                  status: DQ.status,
                  statusText: DQ.statusText,
                  headers: QQ
                })) : qQ({
                  ok: !0,
                  status: DQ.status,
                  statusText: DQ.statusText,
                  headers: {
                    get: QQ => DQ.getResponseHeader(QQ)
                  },
                  arrayBuffer: async () => await Promise.resolve(DQ.response)
                })
              } else oQ(new Error(`HTTP ${DQ.status} loading '${DQ.requestURL}': ${DQ.statusText}`))
          })), DQ.open(wQ, QQ, FQ.headers), DQ.send(FQ.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(QQ) {
        this._xhr.onprogress = QQ
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
      set responseType(QQ) {
        this._xhr.responseType = QQ
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(QQ) {
        this._xhr.timeout = QQ
      }
      addEventListener(QQ, FQ, wQ) {
        this._xhr.addEventListener(QQ, FQ, wQ)
      }
      removeEventListener(QQ, FQ, wQ) {
        this._xhr.removeEventListener(QQ, FQ, wQ)
      }
      abort() {
        this._xhr.abort()
      }
      send(QQ) {
        this._xhr.send(QQ)
      }
      open(QQ, FQ, wQ) {
        const {
          url: qQ,
          headers: oQ
        } = LQ._CollectCustomizations(FQ, wQ);
        this._requestURL = LQ._CleanUrl(qQ), this._xhr.open(QQ, this._requestURL, !0);
        for (const LQ in oQ) this._xhr.setRequestHeader(LQ, oQ[LQ])
      }
      setRequestHeader(QQ, FQ) {
        this._xhr.setRequestHeader(QQ, FQ)
      }
      getResponseHeader(QQ) {
        return this._xhr.getResponseHeader(QQ)
      }
    }
    LQ.CustomRequestHeaders = {}, LQ.CustomRequestModifiers = new Array, LQ.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);