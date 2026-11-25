export const id = 262;
export const ids = [262];
export const modules = {
  40331: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => rQ,
      h: () => JQ,
      j: () => FQ,
      l: () => IQ,
      p: () => PQ,
      t: () => sQ,
      w: () => gQ
    });
    var wQ = XQ(38956),
      qQ = XQ(40337);

    function TQ(QQ, WQ, XQ, wQ) {
      switch (WQ) {
        case 5120: {
          let WQ = QQ.getInt8(XQ);
          return wQ && (WQ = Math.max(WQ / 127, -1)), WQ
        }
        case 5121: {
          let WQ = QQ.getUint8(XQ);
          return wQ && (WQ /= 255), WQ
        }
        case 5122: {
          let WQ = QQ.getInt16(XQ, !0);
          return wQ && (WQ = Math.max(WQ / 32767, -1)), WQ
        }
        case 5123: {
          let WQ = QQ.getUint16(XQ, !0);
          return wQ && (WQ /= 65535), WQ
        }
        case 5131:
          return (0, qQ.d)(QQ.getUint16(XQ, !0));
        case 5124:
          return QQ.getInt32(XQ, !0);
        case 5125:
          return QQ.getUint32(XQ, !0);
        case 5126:
          return QQ.getFloat32(XQ, !0);
        default:
          throw new Error(`Invalid component type ${WQ}`)
      }
    }

    function zQ(QQ, WQ, XQ, wQ, TQ) {
      switch (WQ) {
        case 5120:
          wQ && (TQ = Math.round(127 * TQ)), QQ.setInt8(XQ, TQ);
          break;
        case 5121:
          wQ && (TQ = Math.round(255 * TQ)), QQ.setUint8(XQ, TQ);
          break;
        case 5122:
          wQ && (TQ = Math.round(32767 * TQ)), QQ.setInt16(XQ, TQ, !0);
          break;
        case 5123:
          wQ && (TQ = Math.round(65535 * TQ)), QQ.setUint16(XQ, TQ, !0);
          break;
        case 5131:
          QQ.setUint16(XQ, (0, qQ.i)(TQ), !0);
          break;
        case 5124:
          QQ.setInt32(XQ, TQ, !0);
          break;
        case 5125:
          QQ.setUint32(XQ, TQ, !0);
          break;
        case 5126:
          QQ.setFloat32(XQ, TQ, !0);
          break;
        default:
          throw new Error(`Invalid component type ${WQ}`)
      }
    }

    function sQ(QQ) {
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

    function FQ(QQ, WQ, XQ, wQ, qQ, FQ, PQ, gQ) {
      const JQ = new Array(wQ),
        rQ = new Array(wQ);
      if (QQ instanceof Array) {
        let qQ = WQ / 4;
        const TQ = XQ / 4;
        for (let WQ = 0; WQ < FQ; WQ += wQ) {
          for (let WQ = 0; WQ < wQ; WQ++) JQ[WQ] = rQ[WQ] = QQ[qQ + WQ];
          gQ(rQ, WQ);
          for (let WQ = 0; WQ < wQ; WQ++) JQ[WQ] !== rQ[WQ] && (QQ[qQ + WQ] = rQ[WQ]);
          qQ += TQ
        }
      } else {
        const IQ = ArrayBuffer.isView(QQ) ? new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength) : new DataView(QQ),
          jQ = sQ(qQ);
        for (let QQ = 0; QQ < FQ; QQ += wQ) {
          for (let QQ = 0, XQ = WQ; QQ < wQ; QQ++, XQ += jQ) JQ[QQ] = rQ[QQ] = TQ(IQ, qQ, XQ, PQ);
          gQ(rQ, QQ);
          for (let QQ = 0, XQ = WQ; QQ < wQ; QQ++, XQ += jQ) JQ[QQ] !== rQ[QQ] && zQ(IQ, qQ, XQ, PQ, rQ[QQ]);
          WQ += XQ
        }
      }
    }

    function PQ(QQ, WQ, XQ, qQ, TQ, zQ, PQ, gQ) {
      const JQ = WQ * sQ(XQ),
        rQ = PQ * WQ;
      if (5126 !== XQ || TQ !== JQ) {
        const wQ = new Float32Array(rQ);
        return FQ(QQ, qQ, TQ, WQ, XQ, rQ, zQ, ((QQ, XQ) => {
          for (let qQ = 0; qQ < WQ; qQ++) wQ[XQ + qQ] = QQ[qQ]
        })), wQ
      }
      if (!(QQ instanceof Array || QQ instanceof Float32Array) || 0 !== qQ || QQ.length !== rQ) {
        if (QQ instanceof Array) {
          const WQ = qQ / 4;
          return QQ.slice(WQ, WQ + rQ)
        }
        if (ArrayBuffer.isView(QQ)) {
          const WQ = QQ.byteOffset + qQ;
          return 0 !== (3 & WQ) && (wQ.b.Warn("Float array must be aligned to 4-bytes border"), gQ = !0), gQ ? new Float32Array(QQ.buffer.slice(WQ, WQ + rQ * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(QQ.buffer, WQ, rQ)
        }
        return new Float32Array(QQ, qQ, rQ)
      }
      return gQ ? QQ.slice() : QQ
    }

    function gQ(QQ, WQ, XQ, qQ, TQ, zQ, PQ) {
      const gQ = sQ(XQ),
        JQ = function(QQ) {
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
        }(XQ),
        rQ = zQ * WQ;
      if (Array.isArray(QQ)) {
        if (0 !== (3 & qQ) || 0 !== (3 & TQ)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const wQ = qQ / 4,
          sQ = TQ / 4;
        if (wQ + (zQ - 1) * sQ + WQ > QQ.length) throw new Error("Last accessed index is out of bounds.");
        if (sQ < WQ) throw new Error("Data stride cannot be smaller than the component size.");
        if (sQ !== WQ) {
          const wQ = new JQ(rQ);
          return FQ(QQ, qQ, TQ, WQ, XQ, rQ, !1, ((QQ, XQ) => {
            for (let qQ = 0; qQ < WQ; qQ++) wQ[XQ + qQ] = QQ[qQ]
          })), wQ
        }
        return new JQ(QQ.slice(wQ, wQ + rQ))
      }
      let IQ, jQ = qQ;
      ArrayBuffer.isView(QQ) ? (IQ = QQ.buffer, jQ += QQ.byteOffset) : IQ = QQ;
      if (jQ + (zQ - 1) * TQ + WQ * gQ > IQ.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const BQ = WQ * gQ;
      if (TQ < BQ) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (TQ !== BQ) {
        const QQ = new JQ(rQ),
          XQ = new Uint8Array(IQ, jQ),
          wQ = new Uint8Array(QQ.buffer),
          qQ = WQ * gQ;
        for (let WQ = 0, sQ = 0, FQ = 0; WQ < zQ; WQ++, sQ += TQ, FQ += qQ) wQ.set(XQ.subarray(sQ, sQ + qQ), FQ);
        return QQ
      }
      return 1 !== gQ && 0 !== (jQ & gQ - 1) && (wQ.b.Warn("Array must be aligned to border of element size. Data will be copied."), PQ = !0), PQ ? new JQ(IQ.slice(jQ, jQ + rQ * gQ)) : new JQ(IQ, jQ, rQ)
    }

    function JQ(QQ, WQ, XQ, qQ, TQ, zQ, PQ, gQ) {
      const JQ = WQ * sQ(XQ),
        rQ = PQ * WQ;
      if (gQ.length !== rQ) throw new Error("Output length is not valid");
      if (5126 === XQ && TQ === JQ)
        if (QQ instanceof Array) {
          const WQ = qQ / 4;
          gQ.set(QQ, WQ)
        } else if (ArrayBuffer.isView(QQ)) {
        const WQ = QQ.byteOffset + qQ;
        if (0 !== (3 & WQ)) return wQ.b.Warn("Float array must be aligned to 4-bytes border"), void gQ.set(new Float32Array(QQ.buffer.slice(WQ, WQ + rQ * Float32Array.BYTES_PER_ELEMENT)));
        const XQ = new Float32Array(QQ.buffer, WQ, rQ);
        gQ.set(XQ)
      } else {
        const WQ = new Float32Array(QQ, qQ, rQ);
        gQ.set(WQ)
      } else FQ(QQ, qQ, TQ, WQ, XQ, rQ, zQ, ((QQ, XQ) => {
        for (let wQ = 0; wQ < WQ; wQ++) gQ[XQ + wQ] = QQ[wQ]
      }))
    }

    function rQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(QQ)) {
        for (let qQ = 0; qQ < WQ; qQ++)
          if (QQ[XQ + qQ] - wQ > 65535) return !0;
        return !1
      }
      return 4 === QQ.BYTES_PER_ELEMENT
    }

    function IQ(QQ) {
      const WQ = QQ.buffer;
      if (WQ instanceof ArrayBuffer) return QQ;
      const XQ = new ArrayBuffer(QQ.byteLength);
      return new Uint8Array(XQ).set(new Uint8Array(WQ, QQ.byteOffset, QQ.byteLength)), XQ
    }
  },
  40158: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => dQ,
      e: () => bQ,
      g: () => vQ,
      f: () => AQ,
      j: () => RQ
    });
    class wQ {
      constructor() {
        this.children = []
      }
      isValid(QQ) {
        return !0
      }
      process(QQ, WQ, XQ) {
        let wQ = "";
        if (this.line) {
          let XQ = this.line;
          const qQ = WQ.processor;
          if (qQ) {
            qQ.lineProcessor && (XQ = qQ.lineProcessor(XQ, WQ.isFragment, WQ.processingContext));
            const wQ = WQ.processor?.attributeKeywordName ?? "attribute",
              TQ = WQ.isFragment && WQ.processor?.varyingFragmentKeywordName ? WQ.processor?.varyingFragmentKeywordName : !WQ.isFragment && WQ.processor?.varyingVertexKeywordName ? WQ.processor?.varyingVertexKeywordName : "varying";
            if (!WQ.isFragment && qQ.attributeProcessor && this.line.startsWith(wQ)) XQ = qQ.attributeProcessor(this.line, QQ, WQ.processingContext);
            else if (qQ.varyingProcessor && (qQ.varyingCheck?.(this.line, WQ.isFragment) || !qQ.varyingCheck && this.line.startsWith(TQ))) XQ = qQ.varyingProcessor(this.line, WQ.isFragment, QQ, WQ.processingContext);
            else if (qQ.uniformProcessor && qQ.uniformRegexp && qQ.uniformRegexp.test(this.line)) WQ.lookForClosingBracketForUniformBuffer || (XQ = qQ.uniformProcessor(this.line, WQ.isFragment, QQ, WQ.processingContext));
            else if (qQ.uniformBufferProcessor && qQ.uniformBufferRegexp && qQ.uniformBufferRegexp.test(this.line)) WQ.lookForClosingBracketForUniformBuffer || (XQ = qQ.uniformBufferProcessor(this.line, WQ.isFragment, WQ.processingContext), WQ.lookForClosingBracketForUniformBuffer = !0);
            else if (qQ.textureProcessor && qQ.textureRegexp && qQ.textureRegexp.test(this.line)) XQ = qQ.textureProcessor(this.line, WQ.isFragment, QQ, WQ.processingContext);
            else if ((qQ.uniformProcessor || qQ.uniformBufferProcessor) && this.line.startsWith("uniform") && !WQ.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? qQ.uniformProcessor && (XQ = qQ.uniformProcessor(this.line, WQ.isFragment, QQ, WQ.processingContext)) : qQ.uniformBufferProcessor && (XQ = qQ.uniformBufferProcessor(this.line, WQ.isFragment, WQ.processingContext), WQ.lookForClosingBracketForUniformBuffer = !0)
            }
            WQ.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (WQ.lookForClosingBracketForUniformBuffer = !1, qQ.endOfUniformBufferProcessor && (XQ = qQ.endOfUniformBufferProcessor(this.line, WQ.isFragment, WQ.processingContext)))
          }
          wQ += XQ + "\n"
        }
        for (const qQ of this.children) wQ += qQ.process(QQ, WQ, XQ);
        return this.additionalDefineKey && (QQ[this.additionalDefineKey] = this.additionalDefineValue || "true", XQ[this.additionalDefineKey] = QQ[this.additionalDefineKey]), wQ
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
        for (const WQ of QQ) {
          if (!WQ || "\r" === WQ) continue;
          if ("#" === WQ[0]) {
            this._lines.push(WQ);
            continue
          }
          const QQ = WQ.trim();
          if (!QQ) continue;
          if (QQ.startsWith("//")) {
            this._lines.push(WQ);
            continue
          }
          const XQ = QQ.indexOf(";");
          if (-1 === XQ) this._lines.push(QQ);
          else if (XQ === QQ.length - 1) QQ.length > 1 && this._lines.push(QQ);
          else {
            const QQ = WQ.split(";");
            for (let WQ = 0; WQ < QQ.length; WQ++) {
              let XQ = QQ[WQ];
              XQ && (XQ = XQ.trim(), XQ && this._lines.push(XQ + (WQ !== QQ.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class TQ extends wQ {
      process(QQ, WQ, XQ) {
        for (let wQ = 0; wQ < this.children.length; wQ++) {
          const qQ = this.children[wQ];
          if (qQ.isValid(QQ)) return qQ.process(QQ, WQ, XQ)
        }
        return ""
      }
    }
    class zQ extends wQ {
      isValid(QQ) {
        return this.testExpression.isTrue(QQ)
      }
    }
    class sQ {
      isTrue(QQ) {
        return !0
      }
      static postfixToInfix(QQ) {
        const WQ = [];
        for (const XQ of QQ)
          if (void 0 === sQ._OperatorPriority[XQ]) WQ.push(XQ);
          else {
            const QQ = WQ[WQ.length - 1],
              wQ = WQ[WQ.length - 2];
            WQ.length -= 2, WQ.push(`(${wQ}${XQ}${QQ})`)
          } return WQ[WQ.length - 1]
      }
      static infixToPostfix(QQ) {
        const WQ = sQ._InfixToPostfixCache.get(QQ);
        if (WQ) return WQ.accessTime = Date.now(), WQ.result;
        if (!QQ.includes("&&") && !QQ.includes("||") && !QQ.includes(")") && !QQ.includes("(")) return [QQ];
        const XQ = [];
        let wQ = -1;
        const qQ = () => {
            gQ = gQ.trim(), "" !== gQ && (XQ.push(gQ), gQ = "")
          },
          TQ = QQ => {
            wQ < sQ._Stack.length - 1 && (sQ._Stack[++wQ] = QQ)
          },
          zQ = () => sQ._Stack[wQ],
          FQ = () => -1 === wQ ? "!!INVALID EXPRESSION!!" : sQ._Stack[wQ--];
        let PQ = 0,
          gQ = "";
        for (; PQ < QQ.length;) {
          const WQ = QQ.charAt(PQ),
            JQ = PQ < QQ.length - 1 ? QQ.substring(PQ, 2 + PQ) : "";
          if ("(" === WQ) gQ = "", TQ(WQ);
          else if (")" === WQ) {
            for (qQ(); - 1 !== wQ && "(" !== zQ();) XQ.push(FQ());
            FQ()
          } else if (sQ._OperatorPriority[JQ] > 1) {
            for (qQ(); - 1 !== wQ && sQ._OperatorPriority[zQ()] >= sQ._OperatorPriority[JQ];) XQ.push(FQ());
            TQ(JQ), PQ++
          } else gQ += WQ;
          PQ++
        }
        for (qQ(); - 1 !== wQ;) "(" === zQ() ? FQ() : XQ.push(FQ());
        return sQ._InfixToPostfixCache.size >= sQ.InfixToPostfixCacheLimitSize && sQ.ClearCache(), sQ._InfixToPostfixCache.set(QQ, {
          result: XQ,
          accessTime: Date.now()
        }), XQ
      }
      static ClearCache() {
        const QQ = Array.from(sQ._InfixToPostfixCache.entries()).sort(((QQ, WQ) => QQ[1].accessTime - WQ[1].accessTime));
        for (let WQ = 0; WQ < sQ.InfixToPostfixCacheCleanupSize; WQ++) sQ._InfixToPostfixCache.delete(QQ[WQ][0])
      }
    }
    sQ.InfixToPostfixCacheLimitSize = 5e4, sQ.InfixToPostfixCacheCleanupSize = 25e3, sQ._InfixToPostfixCache = new Map, sQ._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, sQ._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class FQ extends sQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = QQ, this.not = WQ
      }
      isTrue(QQ) {
        let WQ = void 0 !== QQ[this.define];
        return this.not && (WQ = !WQ), WQ
      }
    }
    class PQ extends sQ {
      isTrue(QQ) {
        return this.leftOperand.isTrue(QQ) || this.rightOperand.isTrue(QQ)
      }
    }
    class gQ extends sQ {
      isTrue(QQ) {
        return this.leftOperand.isTrue(QQ) && this.rightOperand.isTrue(QQ)
      }
    }
    class JQ extends sQ {
      constructor(QQ, WQ, XQ) {
        super(), this.define = QQ, this.operand = WQ, this.testValue = XQ
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(QQ) {
        let WQ = !1;
        const XQ = parseInt(void 0 != QQ[this.define] ? QQ[this.define] : this.define),
          wQ = parseInt(void 0 != QQ[this.testValue] ? QQ[this.testValue] : this.testValue);
        if (isNaN(XQ) || isNaN(wQ)) return !1;
        switch (this.operand) {
          case ">":
            WQ = XQ > wQ;
            break;
          case "<":
            WQ = XQ < wQ;
            break;
          case "<=":
            WQ = XQ <= wQ;
            break;
          case ">=":
            WQ = XQ >= wQ;
            break;
          case "==":
            WQ = XQ === wQ;
            break;
          case "!=":
            WQ = XQ !== wQ
        }
        return WQ
      }
    }
    var rQ = XQ(40153),
      IQ = XQ(40150);
    const jQ = /defined\s*?\((.+?)\)/g,
      BQ = /defined\s*?\[(.+?)\]/g,
      yQ = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      VQ = /__decl__/,
      DQ = /light\{X\}.(\w*)/g,
      pQ = /\{X\}/g,
      GQ = [],
      UQ = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function bQ(QQ) {
      QQ.processor && QQ.processor.initializeShaders && QQ.processor.initializeShaders(QQ.processingContext)
    }

    function vQ(QQ, WQ, XQ, wQ) {
      WQ.processor?.preProcessShaderCode && (QQ = WQ.processor.preProcessShaderCode(QQ, WQ.isFragment)), AQ(QQ, WQ, (QQ => {
        WQ.processCodeAfterIncludes && (QQ = WQ.processCodeAfterIncludes(WQ.isFragment ? "fragment" : "vertex", QQ, WQ.defines));
        const qQ = function(QQ, WQ, XQ) {
          let wQ = function(QQ, WQ) {
            if (WQ.processor?.noPrecision) return QQ;
            const XQ = WQ.shouldUseHighPrecisionShader; - 1 === QQ.indexOf("precision highp float") ? QQ = XQ ? "precision highp float;\n" + QQ : "precision mediump float;\n" + QQ : XQ || (QQ = QQ.replace("precision highp float", "precision mediump float"));
            return QQ
          }(QQ, WQ);
          if (!WQ.processor) return wQ;
          if (0 === WQ.processor.shaderLanguage && -1 !== wQ.indexOf("#version 3") && (wQ = wQ.replace("#version 300 es", ""), !WQ.processor.parseGLES3)) return wQ;
          const qQ = WQ.defines,
            TQ = cQ(WQ, XQ);
          WQ.processor.preProcessor && (wQ = WQ.processor.preProcessor(wQ, qQ, TQ, WQ.isFragment, WQ.processingContext));
          const zQ = {};
          wQ = iQ(wQ, TQ, WQ, zQ), WQ.processor.postProcessor && (wQ = WQ.processor.postProcessor(wQ, qQ, WQ.isFragment, WQ.processingContext, XQ ? {
            drawBuffersExtensionDisabled: !XQ.getCaps().drawBuffersExtension
          } : {}, TQ, zQ));
          XQ?._features.needShaderCodeInlining && (wQ = XQ.inlineShaderCode(wQ));
          return wQ
        }(QQ, WQ, wQ);
        XQ(qQ, QQ)
      }))
    }

    function dQ(QQ, WQ, XQ) {
      return XQ.processor && XQ.processor.finalizeShaders ? XQ.processor.finalizeShaders(QQ, WQ, XQ.processingContext) : {
        vertexCode: QQ,
        fragmentCode: WQ
      }
    }

    function HQ(QQ) {
      const WQ = /defined\((.+)\)/.exec(QQ);
      if (WQ && WQ.length) return new FQ(WQ[1].trim(), "!" === QQ[0]);
      const XQ = ["==", "!=", ">=", "<=", "<", ">"];
      let wQ = "",
        qQ = 0;
      for (wQ of XQ)
        if (qQ = QQ.indexOf(wQ), qQ > -1) break;
      if (-1 === qQ) return new FQ(QQ);
      const TQ = QQ.substring(0, qQ).trim(),
        zQ = QQ.substring(qQ + wQ.length).trim();
      return new JQ(TQ, wQ, zQ)
    }

    function aQ(QQ, WQ) {
      const XQ = new zQ,
        wQ = QQ.substring(0, WQ);
      let qQ = QQ.substring(WQ);
      return qQ = qQ.substring(0, (qQ.indexOf("//") + 1 || qQ.length + 1) - 1).trim(), XQ.testExpression = "#ifdef" === wQ ? new FQ(qQ) : "#ifndef" === wQ ? new FQ(qQ, !0) : function(QQ) {
        QQ = QQ.replace(jQ, "defined[$1]");
        const WQ = sQ.infixToPostfix(QQ),
          XQ = [];
        for (const qQ of WQ)
          if ("||" !== qQ && "&&" !== qQ) XQ.push(qQ);
          else if (XQ.length >= 2) {
          let QQ = XQ[XQ.length - 1],
            WQ = XQ[XQ.length - 2];
          XQ.length -= 2;
          const wQ = "&&" == qQ ? new gQ : new PQ;
          "string" === typeof QQ && (QQ = QQ.replace(BQ, "defined($1)")), "string" === typeof WQ && (WQ = WQ.replace(BQ, "defined($1)")), wQ.leftOperand = "string" === typeof WQ ? HQ(WQ) : WQ, wQ.rightOperand = "string" === typeof QQ ? HQ(QQ) : QQ, XQ.push(wQ)
        }
        let wQ = XQ[XQ.length - 1];
        return "string" === typeof wQ && (wQ = wQ.replace(BQ, "defined($1)")), "string" === typeof wQ ? HQ(wQ) : wQ
      }(qQ), XQ
    }

    function lQ(QQ, WQ, XQ, qQ) {
      let TQ;
      for (; hQ(QQ, XQ, qQ);) {
        TQ = QQ.currentLine;
        const zQ = TQ.substring(0, 5).toLowerCase();
        if ("#else" === zQ) {
          const XQ = new wQ;
          return WQ.children.push(XQ), void hQ(QQ, XQ, qQ)
        }
        if ("#elif" === zQ) {
          const QQ = aQ(TQ, 5);
          WQ.children.push(QQ), XQ = QQ
        }
      }
    }

    function hQ(QQ, WQ, XQ) {
      for (; QQ.canRead;) {
        QQ.lineIndex++;
        const qQ = QQ.currentLine;
        if (qQ.indexOf("#") >= 0) {
          const wQ = UQ.exec(qQ);
          if (wQ && wQ.length) {
            switch (wQ[0]) {
              case "#ifdef": {
                const wQ = new TQ;
                WQ.children.push(wQ);
                const zQ = aQ(qQ, 6);
                wQ.children.push(zQ), lQ(QQ, wQ, zQ, XQ);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const wQ = new TQ;
                WQ.children.push(wQ);
                const zQ = aQ(qQ, 7);
                wQ.children.push(zQ), lQ(QQ, wQ, zQ, XQ);
                break
              }
              case "#if": {
                const wQ = new TQ,
                  zQ = aQ(qQ, 3);
                WQ.children.push(wQ), wQ.children.push(zQ), lQ(QQ, wQ, zQ, XQ);
                break
              }
            }
            continue
          }
        }
        const zQ = new wQ;
        if (zQ.line = qQ, WQ.children.push(zQ), "#" === qQ[0] && "d" === qQ[1]) {
          const QQ = qQ.replace(";", "").split(" ");
          zQ.additionalDefineKey = QQ[1], 3 === QQ.length && (zQ.additionalDefineValue = QQ[2])
        }
      }
      return !1
    }

    function iQ(QQ, WQ, XQ, TQ) {
      const zQ = new wQ,
        sQ = new qQ;
      return sQ.lineIndex = -1, sQ.lines = QQ.split("\n"), hQ(sQ, zQ, TQ), zQ.process(WQ, XQ, TQ)
    }

    function cQ(QQ, WQ) {
      const XQ = QQ.defines,
        wQ = {};
      for (const qQ of XQ) {
        const QQ = qQ.replace("#define", "").replace(";", "").trim().split(" ");
        wQ[QQ[0]] = QQ.length > 1 ? QQ[1] : ""
      }
      return 0 === QQ.processor?.shaderLanguage && (wQ.GL_ES = "true"), wQ.__VERSION__ = QQ.version, wQ[QQ.platformName] = "true", (0, IQ.h)(wQ, WQ?.isNDCHalfZRange, WQ?.vwQ, WQ?.useExactSrgbConversions), wQ
    }

    function AQ(QQ, WQ, XQ) {
      let wQ;
      for (GQ.length = 0; null !== (wQ = yQ.exec(QQ));) GQ.push(wQ);
      let qQ = [QQ],
        TQ = !1;
      for (const sQ of GQ) {
        let QQ = sQ[1];
        if (-1 !== QQ.indexOf("__decl__") && (QQ = QQ.replace(VQ, ""), WQ.supportsUniformBuffers && (QQ = QQ.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), QQ += "Declaration"), !WQ.includesShadersStore[QQ]) {
          const wQ = WQ.shadersRepository + "ShadersInclude/" + QQ + ".fx";
          return void RQ.loadFile(wQ, (wQ => {
            WQ.includesShadersStore[QQ] = wQ, AQ(qQ.join(""), WQ, XQ)
          }))
        } {
          let XQ = WQ.includesShadersStore[QQ];
          if (sQ[2]) {
            const QQ = sQ[3].split(",");
            for (let WQ = 0; WQ < QQ.length; WQ += 2) {
              const wQ = new RegExp(QQ[WQ], "g"),
                qQ = QQ[WQ + 1];
              XQ = XQ.replace(wQ, qQ)
            }
          }
          if (sQ[4]) {
            const QQ = sQ[5];
            if (-1 !== QQ.indexOf("..")) {
              const wQ = QQ.split(".."),
                qQ = parseInt(wQ[0]);
              let TQ = parseInt(wQ[1]),
                zQ = XQ.slice(0);
              XQ = "", isNaN(TQ) && (TQ = WQ.indexParameters[wQ[1]]);
              for (let QQ = qQ; QQ < TQ; QQ++) WQ.supportsUniformBuffers || (zQ = zQ.replace(DQ, ((QQ, WQ) => WQ + "{X}"))), XQ += zQ.replace(pQ, QQ.toString()) + "\n"
            } else WQ.supportsUniformBuffers || (XQ = XQ.replace(DQ, ((QQ, WQ) => WQ + "{X}"))), XQ = XQ.replace(pQ, QQ)
          }
          const wQ = [];
          for (const QQ of qQ) {
            const WQ = QQ.split(sQ[0]);
            for (let QQ = 0; QQ < WQ.length - 1; QQ++) wQ.push(WQ[QQ]), wQ.push(XQ);
            wQ.push(WQ[WQ.length - 1])
          }
          qQ = wQ, TQ = TQ || XQ.indexOf("#include<") >= 0 || XQ.indexOf("#include <") >= 0
        }
      }
      GQ.length = 0;
      const zQ = qQ.join("");
      TQ ? AQ(zQ.toString(), WQ, XQ) : XQ(zQ)
    }
    const RQ = {
      loadFile: (QQ, WQ, XQ, wQ, qQ, TQ) => {
        throw (0, rQ.i)("FileTools")
      }
    }
  },
  40150: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => qQ,
      e: () => TQ,
      h: () => sQ,
      l: () => zQ,
      m: () => FQ
    });
    var wQ = XQ(40153);
    const qQ = {};

    function TQ(QQ, WQ) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (WQ ? WQ + "\n" : "") + QQ
    }

    function zQ(QQ, WQ, XQ, TQ, zQ, sQ, FQ) {
      const PQ = FQ || qQ.loadFile;
      if (!PQ) throw (0, wQ.i)("FileTools");
      return PQ(QQ, WQ, XQ, TQ, zQ, sQ)
    }

    function sQ(QQ, WQ, XQ, wQ) {
      if (QQ) return WQ ? QQ.IS_NDC_HALF_ZRANGE = "" : delete QQ.IS_NDC_HALF_ZRANGE, XQ ? QQ.USE_REVERSE_DEPTHBUFFER = "" : delete QQ.USE_REVERSE_DEPTHBUFFER, void(wQ ? QQ.USE_EXACT_SRGB_CONVERSIONS = "" : delete QQ.USE_EXACT_SRGB_CONVERSIONS);
      {
        let QQ = "";
        return WQ && (QQ += "#define IS_NDC_HALF_ZRANGE"), XQ && (QQ && (QQ += "\n"), QQ += "#define USE_REVERSE_DEPTHBUFFER"), wQ && (QQ && (QQ += "\n"), QQ += "#define USE_EXACT_SRGB_CONVERSIONS"), QQ
      }
    }

    function FQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        wQ = arguments.length > 3 ? arguments[3] : void 0;
      switch (QQ) {
        case 3: {
          const QQ = new Int8Array(WQ);
          return wQ && QQ.set(new Int8Array(wQ)), QQ
        }
        case 0: {
          const QQ = new Uint8Array(WQ);
          return wQ && QQ.set(new Uint8Array(wQ)), QQ
        }
        case 4: {
          const QQ = "number" !== typeof WQ ? new Int16Array(WQ) : new Int16Array(XQ ? WQ / 2 : WQ);
          return wQ && QQ.set(new Int16Array(wQ)), QQ
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const QQ = "number" !== typeof WQ ? new Uint16Array(WQ) : new Uint16Array(XQ ? WQ / 2 : WQ);
          return wQ && QQ.set(new Uint16Array(wQ)), QQ
        }
        case 6: {
          const QQ = "number" !== typeof WQ ? new Int32Array(WQ) : new Int32Array(XQ ? WQ / 4 : WQ);
          return wQ && QQ.set(new Int32Array(wQ)), QQ
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const QQ = "number" !== typeof WQ ? new Uint32Array(WQ) : new Uint32Array(XQ ? WQ / 4 : WQ);
          return wQ && QQ.set(new Uint32Array(wQ)), QQ
        }
        case 1: {
          const QQ = "number" !== typeof WQ ? new Float32Array(WQ) : new Float32Array(XQ ? WQ / 4 : WQ);
          return wQ && QQ.set(new Float32Array(wQ)), QQ
        }
      }
      const qQ = new Uint8Array(WQ);
      return wQ && qQ.set(new Uint8Array(wQ)), qQ
    }
  },
  40153: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => PQ,
      g: () => gQ,
      h: () => FQ,
      i: () => qQ
    });
    const wQ = {};

    function qQ(QQ) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !wQ[QQ]) return wQ[QQ] = !0, `${QQ} needs to be imported before as it contains a side-effect required by your code.`
    }
    const TQ = {};
    let zQ = !1,
      sQ = 0;

    function FQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const wQ = function() {
        if ((XQ || zQ) && 0 === sQ) {
          const XQ = `${QQ}.${WQ}`;
          TQ[XQ] || (TQ[XQ] = !0, console.warn(`[Babylon.js] ${XQ}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return wQ.__isSideEffectStub = !0, wQ
    }

    function PQ(QQ) {
      return !!QQ && !QQ.__isSideEffectStub
    }

    function gQ(QQ, WQ) {
      return {
        get() {},
        set(QQ) {
          Object.defineProperty(this, WQ, {
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
  40142: (QQ, WQ, XQ) => {
    function wQ() {
      return "undefined" !== typeof window
    }

    function qQ() {
      return "undefined" !== typeof navigator
    }

    function TQ() {
      return "undefined" !== typeof document
    }

    function zQ(QQ) {
      let WQ = "",
        XQ = QQ.firstChild;
      for (; XQ;) 3 === XQ.nodeType && (WQ += XQ.textContent), XQ = XQ.nextSibling;
      return WQ
    }
    XQ.d(WQ, {
      e: () => zQ,
      f: () => TQ,
      h: () => qQ,
      l: () => wQ
    })
  },
  40320: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ,
      f: () => qQ,
      g: () => TQ
    });
    class wQ extends Error {}
    wQ._setPrototypeOf = Object.setPrototypeOf || ((QQ, WQ) => (QQ.__proto__ = WQ, QQ));
    const qQ = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class TQ extends wQ {
      constructor(QQ, WQ, XQ) {
        super(QQ), this.errorCode = WQ, this.innerError = XQ, this.name = "RuntimeError", wQ._setPrototypeOf(this, TQ.prototype)
      }
    }
  },
  40307: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => cQ,
      e: () => pQ,
      i: () => aQ,
      j: () => hQ,
      n: () => dQ,
      r: () => bQ,
      u: () => vQ,
      w: () => uQ,
      A: () => HQ,
      D: () => GQ
    });
    var wQ = XQ(40314),
      qQ = XQ(40142),
      TQ = XQ(37399);
    class zQ {}
    zQ.FilesToLoad = {};
    var sQ = XQ(40320),
      FQ = XQ(40327),
      PQ = XQ(37392),
      gQ = XQ(40150),
      JQ = XQ(40158),
      rQ = XQ(38956),
      IQ = XQ(40164),
      jQ = XQ(40331);
    const BQ = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class yQ extends sQ.g {
      constructor(QQ, WQ) {
        super(QQ, sQ.f.LoadFileError), this.name = "LoadFileError", sQ.e._setPrototypeOf(this, yQ.prototype), WQ instanceof wQ.b ? this.request = WQ : this.file = WQ
      }
    }
    class VQ extends sQ.g {
      constructor(QQ, WQ) {
        super(QQ, sQ.f.RequestFileError), this.request = WQ, this.name = "RequestFileError", sQ.e._setPrototypeOf(this, VQ.prototype)
      }
    }
    class DQ extends sQ.g {
      constructor(QQ, WQ) {
        super(QQ, sQ.f.ReadFileError), this.file = WQ, this.name = "ReadFileError", sQ.e._setPrototypeOf(this, DQ.prototype)
      }
    }
    const pQ = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (XQ, wQ, qQ) => 0 !== wQ.status || qQ >= QQ || -1 !== XQ.indexOf("file:") ? -1 : Math.pow(2, qQ) * WQ
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: QQ => QQ,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: QQ => QQ,
        CleanUrl: QQ => QQ = QQ.replace(/#/gm, "%23")
      },
      GQ = (QQ, WQ) => {
        if ((!QQ || 0 !== QQ.indexOf("data:")) && pQ.CorsBehavior)
          if ("string" === typeof pQ.CorsBehavior || pQ.CorsBehavior instanceof String) WQ.crossOrigin = pQ.CorsBehavior;
          else {
            const XQ = pQ.CorsBehavior(QQ);
            XQ && (WQ.crossOrigin = XQ)
          }
      },
      UQ = {
        getRequiredSize: null
      },
      bQ = function(QQ, WQ, XQ, qQ) {
        let TQ, sQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          gQ = arguments.length > 5 ? arguments[5] : void 0,
          JQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : PQ.d.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !JQ?._features.forceBitmapOverHTMLImageElement) return XQ("LoadImage is only supported in web or BabylonNative environments."), null;
        if (JQ?._features.forceBitmapOverHTMLImageElement && "string" !== typeof QQ && "undefined" !== typeof Blob) {
          let wQ;
          if (QQ instanceof Blob) wQ = QQ;
          else {
            const WQ = QQ instanceof ArrayBuffer ? QQ : (0, jQ.l)(QQ);
            wQ = new Blob([WQ], {
              type: sQ
            })
          }
          return JQ.createImageBitmap(wQ, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...gQ
          }).then(WQ).catch((WQ => {
            XQ && XQ("Error while trying to load image: " + QQ, WQ)
          })), null
        }
        let rQ = !1;
        if (QQ instanceof ArrayBuffer || ArrayBuffer.isView(QQ))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let WQ;
            WQ = QQ instanceof ArrayBuffer ? QQ : (0, jQ.l)(QQ), TQ = URL.createObjectURL(new Blob([WQ], {
              type: sQ
            })), rQ = !0
          } else TQ = `data:${sQ};base64,` + (0, FQ.d)(QQ);
        else QQ instanceof Blob ? (TQ = URL.createObjectURL(QQ), rQ = !0) : (TQ = pQ.CleanUrl(QQ), TQ = pQ.PreprocessUrl(TQ));
        const IQ = WQ => {
          if (XQ) {
            const wQ = TQ || QQ.toString();
            XQ(`Error while trying to load image: ${0===wQ.indexOf("http")||wQ.length<=128?wQ:wQ.slice(0,128)+"..."}`, WQ)
          }
        };
        if (JQ?._features.forceBitmapOverHTMLImageElement) return dQ(TQ, (wQ => {
          JQ.createImageBitmap(new Blob([wQ], {
            type: sQ
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...gQ
          }).then((QQ => {
            WQ(QQ), rQ && URL.revokeObjectURL(TQ)
          })).catch((WQ => {
            XQ && XQ("Error while trying to load image: " + QQ, WQ)
          }))
        }), void 0, qQ || void 0, !0, ((QQ, WQ) => {
          IQ(WQ)
        })), null;
        const BQ = new Image;
        if (UQ.getRequiredSize) {
          const WQ = UQ.getRequiredSize(QQ);
          WQ.width && (BQ.width = WQ.width), WQ.height && (BQ.height = WQ.height)
        }
        GQ(TQ, BQ);
        const yQ = [],
          VQ = () => {
            for (const QQ of yQ) QQ.target.removeEventListener(QQ.name, QQ.handler);
            yQ.length = 0
          };
        yQ.push({
          target: BQ,
          name: "load",
          handler: () => {
            VQ(), WQ(BQ), rQ && BQ.src && URL.revokeObjectURL(BQ.src)
          }
        }), yQ.push({
          target: BQ,
          name: "error",
          handler: QQ => {
            VQ(), IQ(QQ), rQ && BQ.src && URL.revokeObjectURL(BQ.src)
          }
        }), yQ.push({
          target: document,
          name: "securitypolicyviolation",
          handler: QQ => {
            if (QQ.blockedURI !== BQ.src || "nI" === QQ.disposition) return;
            VQ();
            const WQ = new Error(`CSP violation of policy ${QQ.effectiveDirective} ${QQ.blockedURI}. Current policy is ${QQ.originalPolicy}`);
            PQ.d.UseFallbackTexture = !1, IQ(WQ), rQ && BQ.src && URL.revokeObjectURL(BQ.src), BQ.src = ""
          }
        }), (() => {
          for (const QQ of yQ) QQ.target.addEventListener(QQ.name, QQ.handler)
        })();
        const DQ = "blob:" === TQ.substring(0, 5),
          bQ = "data:" === TQ.substring(0, 5),
          vQ = () => {
            DQ || bQ || !wQ.b.IsCustomRequestAvailable ? BQ.src = TQ : dQ(TQ, ((QQ, WQ, XQ) => {
              const wQ = new Blob([QQ], {
                  type: !sQ && XQ ? XQ : sQ
                }),
                qQ = URL.createObjectURL(wQ);
              rQ = !0, BQ.src = qQ
            }), void 0, qQ || void 0, !0, ((QQ, WQ) => {
              IQ(WQ)
            }))
          },
          HQ = () => {
            qQ && qQ.loadImage(TQ, BQ)
          };
        if (!DQ && !bQ && qQ && qQ.enableTexturesOffline) qQ.open(HQ, vQ);
        else {
          if (-1 !== TQ.indexOf("file:")) {
            const QQ = decodeURIComponent(TQ.substring(5).toLowerCase());
            if (zQ.FilesToLoad[QQ] && "undefined" !== typeof URL) {
              try {
                let WQ;
                try {
                  WQ = URL.createObjectURL(zQ.FilesToLoad[QQ])
                } catch (aQ) {
                  WQ = URL.createObjectURL(zQ.FilesToLoad[QQ])
                }
                BQ.src = WQ, rQ = !0
              } catch (lQ) {
                BQ.src = ""
              }
              return BQ
            }
          }
          vQ()
        }
        return BQ
      },
      vQ = (QQ, WQ, XQ, wQ, qQ) => {
        const zQ = new FileReader,
          sQ = {
            onCompleteObservable: new TQ.b,
            abort: () => zQ.abort()
          };
        return zQ.onloadend = () => sQ.onCompleteObservable.notifyObservers(sQ), qQ && (zQ.onerror = () => {
          qQ(new DQ(`Unable to read ${QQ.name}`, QQ))
        }), zQ.onload = QQ => {
          WQ(QQ.target.result)
        }, XQ && (zQ.onprogress = XQ), wQ ? zQ.readAsArrayBuffer(QQ) : zQ.readAsText(QQ), sQ
      },
      dQ = (QQ, WQ, XQ, wQ, qQ, FQ, PQ) => {
        if (QQ.name) return vQ(QQ, WQ, XQ, qQ, FQ ? QQ => {
          FQ(void 0, QQ)
        } : void 0);
        const gQ = QQ;
        if (-1 !== gQ.indexOf("file:")) {
          let QQ = decodeURIComponent(gQ.substring(5).toLowerCase());
          0 === QQ.indexOf("./") && (QQ = QQ.substring(2));
          const wQ = zQ.FilesToLoad[QQ];
          if (wQ) return vQ(wQ, WQ, XQ, qQ, FQ ? QQ => FQ(void 0, new yQ(QQ.message, QQ.file)) : void 0)
        }
        const {
          match: JQ,
          type: jQ
        } = iQ(gQ);
        if (JQ) {
          const QQ = {
            onCompleteObservable: new TQ.b,
            abort: () => () => {}
          };
          try {
            const QQ = qQ ? cQ(gQ) : AQ(gQ);
            WQ(QQ, void 0, jQ)
          } catch (sQ) {
            FQ ? FQ(void 0, sQ) : rQ.b.Error(sQ.message || "Failed to parse the Data URL")
          }
          return IQ.b.SetImmediate((() => {
            QQ.onCompleteObservable.notifyObservers(QQ)
          })), QQ
        }
        return HQ(gQ, ((QQ, XQ) => {
          WQ(QQ, XQ?.responseURL, XQ?.getResponseHeader("content-type"))
        }), XQ, wQ, qQ, FQ ? QQ => {
          FQ(QQ.request, new yQ(QQ.message, QQ.request))
        } : void 0, PQ)
      },
      HQ = (QQ, WQ, XQ, zQ, sQ, FQ, gQ) => {
        null !== zQ && (zQ ?? (zQ = PQ.d.LastCreatedScene?.offlineProvider)), QQ = pQ.CleanUrl(QQ), QQ = pQ.PreprocessUrl(QQ);
        const JQ = pQ.BaseUrl + QQ;
        let IQ = !1;
        const jQ = {
            onCompleteObservable: new TQ.b,
            abort: () => IQ = !0
          },
          BQ = () => {
            let QQ, TQ = new wQ.b,
              zQ = null;
            const PQ = () => {
              TQ && (XQ && TQ.removeEventListener("progress", XQ), QQ && TQ.removeEventListener("readystatechange", QQ), TQ.removeEventListener("loadend", BQ))
            };
            let BQ = () => {
              PQ(), jQ.onCompleteObservable.notifyObservers(jQ), jQ.onCompleteObservable.clear(), XQ = void 0, QQ = null, BQ = null, FQ = void 0, gQ = void 0, WQ = void 0
            };
            jQ.abort = () => {
              IQ = !0, BQ && BQ(), TQ && TQ.readyState !== (XMLHttpRequest.DONE || 4) && TQ.abort(), null !== zQ && (clearTimeout(zQ), zQ = null), TQ = null
            };
            const yQ = QQ => {
                const WQ = QQ.message || "Unknown error";
                FQ && TQ ? FQ(new VQ(WQ, TQ)) : rQ.b.Error(WQ)
              },
              DQ = rQ => {
                if (TQ) {
                  if (TQ.open("GET", JQ), gQ) try {
                    gQ(TQ)
                  } catch (jQ) {
                    return void yQ(jQ)
                  }
                  sQ && (TQ.responseType = "arraybuffer"), XQ && TQ.addEventListener("progress", XQ), BQ && TQ.addEventListener("loadend", BQ), QQ = () => {
                    if (!IQ && TQ && TQ.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (QQ && TQ.removeEventListener("readystatechange", QQ), TQ.status >= 200 && TQ.status < 300 || 0 === TQ.status && (!(0, qQ.l)() || lQ())) {
                        const QQ = sQ ? TQ.response : TQ.responseText;
                        if (null !== QQ) {
                          try {
                            WQ && WQ(QQ, TQ)
                          } catch (jQ) {
                            yQ(jQ)
                          }
                          return
                        }
                      }
                      const XQ = pQ.DefaultRetryStrategy;
                      if (XQ) {
                        const QQ = XQ(JQ, TQ, rQ);
                        if (-1 !== QQ) return PQ(), TQ = new wQ.b, void(zQ = setTimeout((() => DQ(rQ + 1)), QQ))
                      }
                      const gQ = new VQ("Error status: " + TQ.status + " " + TQ.statusText + " - Unable to load " + JQ, TQ);
                      FQ && FQ(gQ)
                    }
                  }, TQ.addEventListener("readystatechange", QQ), TQ.send()
                }
              };
            DQ(0)
          };
        if (zQ && zQ.enableSceneOffline && !QQ.startsWith("blob:")) {
          const wQ = QQ => {
              QQ && QQ.status > 400 ? FQ && FQ(QQ) : BQ()
            },
            qQ = () => {
              zQ && zQ.loadFile(pQ.BaseUrl + QQ, (QQ => {
                !IQ && WQ && WQ(QQ), jQ.onCompleteObservable.notifyObservers(jQ)
              }), XQ ? QQ => {
                !IQ && XQ && XQ(QQ)
              } : void 0, wQ, sQ)
            };
          zQ.open(qQ, wQ)
        } else BQ();
        return jQ
      },
      aQ = QQ => {
        const {
          match: WQ,
          type: XQ
        } = iQ(QQ);
        if (WQ) return XQ || void 0;
        const wQ = QQ.lastIndexOf(".");
        switch (QQ.substring(wQ + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "vR":
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
      lQ = () => "undefined" !== typeof location && "file:" === location.protocol,
      hQ = QQ => BQ.test(QQ),
      iQ = QQ => {
        const WQ = BQ.exec(QQ);
        if (null === WQ || 0 === WQ.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: WQ[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function cQ(QQ) {
      return (0, FQ.b)(QQ.split(",")[1])
    }
    const AQ = QQ => (0, FQ.c)(QQ.split(",")[1]);
    let RQ;
    const EQ = (QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) => {
      RQ = {
        DecodeBase64UrlToBinary: QQ,
        DecodeBase64UrlToString: WQ,
        DefaultRetryStrategy: XQ.DefaultRetryStrategy,
        BaseUrl: XQ.BaseUrl,
        CorsBehavior: XQ.CorsBehavior,
        PreprocessUrl: XQ.PreprocessUrl,
        IsBase64DataUrl: wQ,
        IsFileURL: qQ,
        LoadFile: TQ,
        LoadImage: zQ,
        ReadFile: sQ,
        RequestFile: FQ,
        SetCorsBehavior: PQ
      }, Object.defineProperty(RQ, "DefaultRetryStrategy", {
        get: function() {
          return XQ.DefaultRetryStrategy
        },
        set: function(QQ) {
          XQ.DefaultRetryStrategy = QQ
        }
      }), Object.defineProperty(RQ, "BaseUrl", {
        get: function() {
          return XQ.BaseUrl
        },
        set: function(QQ) {
          XQ.BaseUrl = QQ
        }
      }), Object.defineProperty(RQ, "PreprocessUrl", {
        get: function() {
          return XQ.PreprocessUrl
        },
        set: function(QQ) {
          XQ.PreprocessUrl = QQ
        }
      }), Object.defineProperty(RQ, "CorsBehavior", {
        get: function() {
          return XQ.CorsBehavior
        },
        set: function(QQ) {
          XQ.CorsBehavior = QQ
        }
      })
    };
    let CQ = !1;

    function uQ() {
      CQ || (CQ = !0, EQ(cQ, AQ, pQ, hQ, lQ, dQ, bQ, vQ, HQ, GQ), gQ.c.loadFile = dQ, gQ.c.loadImage = bQ, JQ.j.loadFile = dQ)
    }
  },
  40337: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      f: () => TQ,
      i: () => zQ
    });
    let wQ = null;

    function qQ() {
      if (wQ) return wQ;
      const QQ = new ArrayBuffer(4),
        WQ = new Float32Array(QQ),
        XQ = new Uint32Array(QQ),
        qQ = new Uint32Array(512),
        TQ = new Uint32Array(512);
      for (let wQ = 0; wQ < 256; ++wQ) {
        const QQ = wQ - 127;
        QQ < -24 ? (qQ[wQ] = 0, qQ[256 | wQ] = 32768, TQ[wQ] = 24, TQ[256 | wQ] = 24) : QQ < -14 ? (qQ[wQ] = 1024 >> -QQ - 14, qQ[256 | wQ] = 1024 >> -QQ - 14 | 32768, TQ[wQ] = -QQ - 1, TQ[256 | wQ] = -QQ - 1) : QQ <= 15 ? (qQ[wQ] = QQ + 15 << 10, qQ[256 | wQ] = QQ + 15 << 10 | 32768, TQ[wQ] = 13, TQ[256 | wQ] = 13) : QQ < 128 ? (qQ[wQ] = 31744, qQ[256 | wQ] = 64512, TQ[wQ] = 24, TQ[256 | wQ] = 24) : (qQ[wQ] = 31744, qQ[256 | wQ] = 64512, TQ[wQ] = 13, TQ[256 | wQ] = 13)
      }
      const zQ = new Uint32Array(2048),
        sQ = new Uint32Array(64),
        FQ = new Uint32Array(64);
      for (let wQ = 1; wQ < 1024; ++wQ) {
        let QQ = wQ << 13,
          WQ = 0;
        for (; 0 === (8388608 & QQ);) QQ <<= 1, WQ -= 8388608;
        QQ &= -8388609, WQ += 947912704, zQ[wQ] = QQ | WQ
      }
      for (let wQ = 1024; wQ < 2048; ++wQ) zQ[wQ] = 939524096 + (wQ - 1024 << 13);
      for (let wQ = 1; wQ < 31; ++wQ) sQ[wQ] = wQ << 23;
      sQ[31] = 1199570944, sQ[32] = 2147483648;
      for (let wQ = 33; wQ < 63; ++wQ) sQ[wQ] = 2147483648 + (wQ - 32 << 23);
      sQ[63] = 3347054592;
      for (let wQ = 1; wQ < 64; ++wQ) 32 !== wQ && (FQ[wQ] = 1024);
      return wQ = {
        floatView: WQ,
        uint32View: XQ,
        baseTable: qQ,
        shiftTable: TQ,
        mantissaTable: zQ,
        exponentTable: sQ,
        offsetTable: FQ
      }, wQ
    }
    const TQ = 65504;

    function zQ(QQ) {
      const WQ = qQ();
      WQ.floatView[0] = QQ;
      const XQ = WQ.uint32View[0],
        wQ = XQ >> 23 & 511;
      return WQ.baseTable[wQ] + ((8388607 & XQ) >> WQ.shiftTable[wQ])
    }

    function sQ(QQ) {
      const WQ = qQ();
      return WQ.uint32View[0] = WQ.mantissaTable[WQ.offsetTable[QQ >> 10] + (1023 & QQ)] + WQ.exponentTable[QQ >> 10], WQ.floatView[0]
    }
  },
  40327: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ,
      c: () => qQ,
      d: () => wQ
    });
    const wQ = QQ => {
        const WQ = ArrayBuffer.isView(QQ) ? new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength) : new Uint8Array(QQ);
        return "function" === typeof WQ.toBase64 ? WQ.toBase64() : function(QQ) {
          const WQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ = "",
            gQ = 0;
          for (; gQ < QQ.length;) XQ = QQ[gQ++], wQ = gQ < QQ.length ? QQ[gQ++] : Number.NaN, qQ = gQ < QQ.length ? QQ[gQ++] : Number.NaN, TQ = XQ >> 2, zQ = (3 & XQ) << 4 | wQ >> 4, sQ = (15 & wQ) << 2 | qQ >> 6, FQ = 63 & qQ, isNaN(wQ) ? sQ = FQ = 64 : isNaN(qQ) && (FQ = 64), PQ += WQ.charAt(TQ) + WQ.charAt(zQ) + WQ.charAt(sQ) + WQ.charAt(FQ);
          return PQ
        }(WQ)
      },
      qQ = QQ => atob(QQ),
      TQ = QQ => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(QQ).buffer : function(QQ) {
        const WQ = qQ(QQ),
          XQ = WQ.length,
          wQ = new Uint8Array(new ArrayBuffer(XQ));
        for (let qQ = 0; qQ < XQ; qQ++) wQ[qQ] = WQ.charCodeAt(qQ);
        return wQ.buffer
      }(QQ)
  },
  40164: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      e: () => zQ
    });
    let wQ = [];
    class qQ {
      static SetImmediate(QQ) {
        0 === wQ.length && setTimeout((() => {
          const QQ = wQ;
          wQ = [];
          for (const WQ of QQ) WQ()
        }), 1), wQ.push(QQ)
      }
    }

    function TQ(QQ, WQ, XQ) {
      try {
        if (QQ()) return WQ(), !0
      } catch (wQ) {
        return XQ?.(wQ), !0
      }
      return !1
    }
    const zQ = function(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        zQ = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && TQ(QQ, WQ, XQ)) return null;
      const sQ = setInterval((() => {
        TQ(QQ, WQ, XQ) ? clearInterval(sQ) : (qQ -= wQ, qQ < 0 && (clearInterval(sQ), XQ?.(new Error("Operation timed out after maximum retries. " + (zQ || "")), !0)))
      }), wQ);
      return () => clearInterval(sQ)
    }
  },
  40314: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ
    });
    class wQ {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(wQ.CustomRequestHeaders).length > 0 || wQ.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(QQ) {
        return QQ = (QQ = QQ.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(QQ) {
        return wQ.SkipRequestModificationForBabylonCDN && (QQ.includes("preview.babylonjs.com") || QQ.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(QQ) {
        const WQ = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (wQ._ShouldSkipRequestModifications(QQ)) return {
          url: QQ,
          headers: WQ
        };
        for (const qQ in wQ.CustomRequestHeaders) {
          const QQ = wQ.CustomRequestHeaders[qQ];
          QQ && (WQ[qQ] = QQ)
        }
        const XQ = {
          setRequestHeader: (QQ, XQ) => {
            WQ[QQ] = XQ
          }
        };
        for (const qQ of wQ.CustomRequestModifiers) {
          if (wQ._ShouldSkipRequestModifications(QQ)) break;
          const WQ = qQ(XQ, QQ);
          "string" === typeof WQ && (QQ = WQ)
        }
        return {
          url: QQ,
          headers: WQ
        }
      }
      static async FetchAsync(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const XQ = WQ.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: qQ,
            headers: TQ
          } = wQ._CollectCustomizations(wQ._CleanUrl(QQ), WQ.headers ?? {});
          return await fetch(qQ, {
            method: XQ,
            headers: TQ,
            body: WQ.body ?? void 0
          })
        }
        return await new Promise(((qQ, TQ) => {
          const zQ = new wQ;
          zQ.responseType = "arraybuffer", zQ.addEventListener("readystatechange", (() => {
            if (4 === zQ.readyState)
              if (zQ.status >= 200 && zQ.status < 300) {
                const QQ = "undefined" !== typeof Headers ? new Headers : void 0,
                  WQ = zQ.getResponseHeader("Content-Type");
                WQ && QQ && QQ.set("Content-Type", WQ), "undefined" !== typeof Response ? qQ(new Response(zQ.response, {
                  status: zQ.status,
                  statusText: zQ.statusText,
                  headers: QQ
                })) : qQ({
                  ok: !0,
                  status: zQ.status,
                  statusText: zQ.statusText,
                  headers: {
                    get: QQ => zQ.getResponseHeader(QQ)
                  },
                  arrayBuffer: async () => await Promise.resolve(zQ.response)
                })
              } else TQ(new Error(`HTTP ${zQ.status} loading '${zQ.requestURL}': ${zQ.statusText}`))
          })), zQ.open(XQ, QQ, WQ.headers), zQ.send(WQ.body ?? null)
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
      addEventListener(QQ, WQ, XQ) {
        this._xhr.addEventListener(QQ, WQ, XQ)
      }
      removeEventListener(QQ, WQ, XQ) {
        this._xhr.removeEventListener(QQ, WQ, XQ)
      }
      abort() {
        this._xhr.abort()
      }
      send(QQ) {
        this._xhr.send(QQ)
      }
      open(QQ, WQ, XQ) {
        const {
          url: qQ,
          headers: TQ
        } = wQ._CollectCustomizations(WQ, XQ);
        this._requestURL = wQ._CleanUrl(qQ), this._xhr.open(QQ, this._requestURL, !0);
        for (const wQ in TQ) this._xhr.setRequestHeader(wQ, TQ[wQ])
      }
      setRequestHeader(QQ, WQ) {
        this._xhr.setRequestHeader(QQ, WQ)
      }
      getResponseHeader(QQ) {
        return this._xhr.getResponseHeader(QQ)
      }
    }
    wQ.CustomRequestHeaders = {}, wQ.CustomRequestModifiers = new Array, wQ.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);